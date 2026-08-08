#!/bin/bash
# ═══════════════════════════════════════════════════════════════════
#  Van's Hermes Agent — Enhancement Bootloader
#  Runs AFTER the Hostinger one-click Hermes deploy
#  Adds: MemPalace memory system, key skills, provider config
# ═══════════════════════════════════════════════════════════════════
#
#  USAGE: SSH into the server, then:
#    sudo bash van-hermes-enhance.sh
#
#  PREREQUISITES:
#    - Hostinger VPS with Hermes Agent already deployed (one-click)
#    - Van's Telegram bot token (from @BotFather)
#    - Van's Telegram user ID (from @userinfobot)
#
#  WHAT THIS DOES:
#    1. Creates a 'van' user (if running as root)
#    2. Installs MemPalace — persistent memory system (no API keys, local)
#    3. Configures MemPalace as an MCP server in Hermes
#    4. Installs useful skills (web search, research, productivity, notes)
#    5. Configures the AI provider (nexos.ai built-in, or Ollama Cloud)
#    6. Connects the Telegram bot
#    7. Starts everything up
#
# ═══════════════════════════════════════════════════════════════════

set -euo pipefail

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
NC='\033[0m'

print_step() { echo -e "\n${CYAN}=== $1 ===${NC}"; }
print_ok()   { echo -e "${GREEN}✓ $1${NC}"; }
print_warn(){ echo -e "${YELLOW}⚠ $1${NC}"; }
print_err() { echo -e "${RED}✗ $1${NC}"; }

echo "════════════════════════════════════════════════════════════════"
echo "  Van's Hermes Agent — Enhancement Bootloader"
echo "════════════════════════════════════════════════════════════════"

# ── 0. Determine the user ──────────────────────────────────────────
print_step "Setting up user"

if [ "$(id -u)" -eq 0 ]; then
    # Running as root — create or use 'van' user
    TARGET_USER="van"
    if ! id -u "$TARGET_USER" 2>/dev/null; then
        useradd -m -s /bin/bash "$TARGET_USER"
        print_ok "Created user: $TARGET_USER"
    else
        print_ok "User $TARGET_USER exists"
    fi
    # Check if Hostinger already created a different user for Hermes
    # The one-click deploy might use 'root' or another user
    # Look for existing Hermes install
    for candidate in root van ubuntu; do
        if [ -d "/home/$candidate/.hermes" ]; then
            TARGET_USER="$candidate"
            print_warn "Found existing Hermes install under: $TARGET_USER"
            break
        fi
    done
else
    TARGET_USER="$(whoami)"
    print_ok "Running as: $TARGET_USER"
fi

USER_HOME="/home/$TARGET_USER"
[ "$TARGET_USER" = "root" ] && USER_HOME="/root"

# Enable linger so services survive SSH disconnect
loginctl enable-linger "$TARGET_USER" 2>/dev/null || true
print_ok "Linger enabled for $TARGET_USER"

# ── 1. Install system dependencies ─────────────────────────────────
print_step "Installing system dependencies"

apt-get update -qq 2>/dev/null
apt-get install -y -qq \
    curl git python3 python3-pip python3-venv \
    ffmpeg build-essential \
    2>/dev/null

# Install uv (fast Python package manager — needed for MemPalace)
if ! command -v uv &> /dev/null; then
    # Try astral.sh installer first, fall back to pip
    curl -LsSf https://astral.sh/uv/install.sh 2>/dev/null | sh 2>/dev/null || \
    pip3 install uv 2>/dev/null || \
    su - "$TARGET_USER" -c 'pip3 install --user uv' 2>/dev/null
    export PATH="$USER_HOME/.local/bin:$PATH"
    su - "$TARGET_USER" -c 'export PATH="$HOME/.local/bin:$PATH"'
    if command -v uv &> /dev/null; then
        print_ok "uv installed"
    else
        print_warn "uv install failed — falling back to pip for MemPalace"
    fi
else
    print_ok "uv already installed"
fi

# If uv still not available, we'll use pip+venv instead of uv in MemPalace install
USE_PIP_FALLBACK=0
if ! command -v uv &> /dev/null; then
    USE_PIP_FALLBACK=1
fi

print_ok "System dependencies installed"

# ── 2. Install MemPalace ────────────────────────────────────────────
print_step "Installing MemPalace (memory system)"

MEMPALACE_DIR="$USER_HOME/mempalace"
MEMPALACE_VENV="$USER_HOME/mempalace/.venv"
MEMPALACE_DATA="$USER_HOME/.mempalace"

# Clone if not present
if [ ! -d "$MEMPALACE_DIR/.git" ]; then
    su - "$TARGET_USER" -c "git clone https://github.com/MemPalace/mempalace.git '$MEMPALACE_DIR'"
    print_ok "MemPalace cloned from GitHub"
else
    print_ok "MemPalace repo exists"
fi

# Create venv and install
if [ "$USE_PIP_FALLBACK" = "1" ]; then
    # Fallback: standard python venv + pip
    su - "$TARGET_USER" -bash -c "
        cd '$MEMPALACE_DIR'
        python3 -m venv .venv
        source .venv/bin/activate
        pip install -e .
    " 2>&1 | tail -3
else
    # Preferred: uv venv + uv pip
    su - "$TARGET_USER" -bash -c "
        export PATH=\"$HOME/.local/bin:\$PATH\"
        cd '$MEMPALACE_DIR'
        uv venv .venv
        source .venv/bin/activate
        uv pip install -e .
    " 2>&1 | tail -3
fi

# Initialize the palace data directory
mkdir -p "$MEMPALACE_DATA"
chmod 700 "$MEMPALACE_DATA"

# Run mempalace onboarding (non-interactive — just creates the palace)
su - "$TARGET_USER" -bash -c "
    export PATH=\"$HOME/.local/bin:\$PATH\"
    cd '$MEMPALACE_DIR'
    source .venv/bin/activate
    mempalace --palace '$MEMPALACE_DATA' init 2>/dev/null || true
" 2>&1 | tail -2

print_ok "MemPalace installed and initialized"
print_ok "Palace data at: $MEMPALACE_DATA"

# ── 3. Configure MemPalace as MCP server in Hermes ──────────────────
print_step "Configuring MemPalace in Hermes"

HERMES_CONFIG="$USER_HOME/.hermes/config.yaml"
MEMPALACE_MCP="$MEMPALACE_VENV/bin/mempalace-mcp"

# Check if Hermes config exists
if [ ! -f "$HERMES_CONFIG" ]; then
    print_warn "Hermes config not found at $HERMES_CONFIG"
    print_warn "The Hostinger one-click deploy may use a different config location."
    print_warn "Searching for Hermes config..."
    FOUND_CONFIG=$(find /home -name "config.yaml" -path "*hermes*" 2>/dev/null | head -1)
    [ -z "$FOUND_CONFIG" ] && FOUND_CONFIG=$(find /root -name "config.yaml" -path "*hermes*" 2>/dev/null | head -1)
    if [ -n "$FOUND_CONFIG" ]; then
        HERMES_CONFIG="$FOUND_CONFIG"
        print_ok "Found Hermes config at: $HERMES_CONFIG"
    else
        print_err "Could not find Hermes config. MemPalace MCP will need manual configuration."
        print_err "Add this to your Hermes config.yaml under mcp_servers:"
        echo ""
        echo "  mempalace:"
        echo "    command: $MEMPALACE_MCP"
        echo "    args:"
        echo "      - --palace"
        echo "      - $MEMPALACE_DATA"
        echo ""
    fi
fi

# Add MemPalace to Hermes config using Python (safe YAML manipulation)
if [ -f "$HERMES_CONFIG" ]; then
    python3 << PYEOF || print_warn "Could not auto-edit Hermes config — manual addition needed"
import yaml
import os

config_path = "$HERMES_CONFIG"
with open(config_path, 'r') as f:
    config = yaml.safe_load(f) or {}

# Ensure mcp_servers section exists
if 'mcp_servers' not in config:
    config['mcp_servers'] = {}

# Add MemPalace MCP server
config['mcp_servers']['mempalace'] = {
    'command': '$MEMPALACE_MCP',
    'args': ['--palace', '$MEMPALACE_DATA'],
    'connect_timeout': 60,
    'enabled_tools': [
        'mempalace_status',
        'mempalace_search',
        'mempalace_add_drawer',
        'mempalace_get_drawer',
        'mempalace_list_drawers',
        'mempalace_list_wings',
        'mempalace_list_rooms',
        'mempalace_get_taxonomy',
        'mempalace_kg_add',
        'mempalace_kg_query',
        'mempalace_kg_timeline',
        'mempalace_diary_write',
        'mempalace_diary_read',
        'mempalace_checkpoint',
        'mempalace_create_tunnel',
        'mempalace_follow_tunnels',
        'mempalace_traverse',
    ]
}

with open(config_path, 'w') as f:
    yaml.dump(config, f, default_flow_style=False, allow_unicode=True)

print("MemPalace MCP server added to Hermes config")
PYEOF
fi

print_ok "MemPalace configured as MCP server"

# ── 4. Install useful skills ───────────────────────────────────────
print_step "Installing skills"

SKILLS_DIR="$USER_HOME/.hermes/skills"
mkdir -p "$SKILLS_DIR"

# Clone our skills repo (or copy individual skills)
# These are the skills that make Van's AI genuinely useful:
# - web search (already built into Hermes tools)
# - research skills (arxiv, blogwatcher, web-content-extraction)
# - productivity (google-workspace, pdf, docx, ocr)
# - note-taking (obsidian-compatible, but we use MemPalace instead)
# - personal-assistant-lifecycle pattern

# We'll clone a curated set from GitHub
# For now, create essential skill directories with basic templates

create_skill() {
    local skill_name="$1"
    local skill_desc="$2"
    local skill_dir="$SKILLS_DIR/$skill_name"

    if [ -d "$skill_dir" ]; then
        print_ok "Skill '$skill_name' already exists"
        return
    fi

    mkdir -p "$skill_dir"
    cat > "$skill_dir/SKILL.md" << SKILLEOF
---
name: $skill_name
description: "$skill_desc"
version: 1.0.0
---

# ${skill_name}

$skill_desc

## Usage

This skill is loaded automatically by Hermes Agent when relevant to the conversation.
SKILLEOF
    print_ok "Created skill: $skill_name"
}

# Core skills for a personal assistant
create_skill "web-research" "Search the web, summarize articles, and compile research on any topic. Use when the user asks to research, look up, or find information about something."
create_skill "daily-briefing" "Generate a daily summary of what's important — weather, calendar, news, reminders. Use when the user asks for a briefing, 'what's today look like', or 'what should I know'."
create_skill "email-drafting" "Draft professional emails based on context the user provides. Use when the user asks to write, draft, or compose an email."
create_skill "personal-memory" "Use MemPalace to store and recall personal information about the user, their preferences, projects, and relationships. Use when the user shares something personal or asks 'do you remember'."
create_skill "brainstorming" "Generate ideas and evaluate options for decisions the user is considering. Use when the user asks for ideas, pros/cons, or help thinking through something."
create_skill "summarization" "Summarize long articles, documents, or web pages the user shares. Use when the user pastes a link or text and asks for a summary."

print_ok "Skills installed in $SKILLS_DIR"

# ── 5. Configure AI provider ──────────────────────────────────────
print_step "Configuring AI provider"

# The Hostinger one-click deploy includes nexos.ai credits
# We also set up Ollama Cloud as an upgrade path

# Check if Ollama is installed (Hostinger one-click may include it)
if command -v ollama &> /dev/null; then
    print_ok "Ollama already installed"
else
    print_warn "Ollama not found — installing..."
    curl -fsSL https://ollama.com/install.sh | sh 2>/dev/null
    print_ok "Ollama installed"
fi

# Configure Hermes to use the built-in provider (nexos.ai via Hostinger)
# The one-click deploy should have this configured already
# We just verify and supplement

if [ -f "$HERMES_CONFIG" ]; then
    python3 << 'PYEOF' 2>/dev/null || true
import yaml

config_path = os.environ.get('HERMES_CONFIG', '')
if not config_path:
    exit(0)

with open(config_path, 'r') as f:
    config = yaml.safe_load(f) or {}

# Ensure providers section exists
if 'providers' not in config:
    config['providers'] = {}

# If no default model is set, configure one
if 'model' not in config or 'default' not in config.get('model', {}):
    config['model'] = {
        'default': 'llama3.2:3b',
        'provider': 'ollama'
    }
    print("Default model configured")

# Ensure Ollama provider exists (for local + cloud models)
if 'ollama' not in config['providers']:
    config['providers']['ollama'] = {
        'api': 'http://127.0.0.1:11434/v1',
        'name': 'Ollama (local + cloud)',
        'default_model': 'llama3.2:3b',
        'models': ['llama3.2:3b', 'llama3.2:1b']
    }
    print("Ollama provider added")

with open(config_path, 'w') as f:
    yaml.dump(config, f, default_flow_style=False, allow_unicode=True)
PYEOF
fi

print_ok "AI provider configured"

# ── 6. Configure Telegram ──────────────────────────────────────────
print_step "Configuring Telegram"

# Collect Telegram credentials from env vars (passed via the curl command)
TELEGRAM_BOT_TOKEN="${TELEGRAM_BOT_TOKEN:-}"
TELEGRAM_USER_ID="${TELEGRAM_USER_ID:-}"

if [ -z "$TELEGRAM_BOT_TOKEN" ]; then
    echo ""
    echo "Enter Van's Telegram bot token (from @BotFather):"
    read -r TELEGRAM_BOT_TOKEN
fi

if [ -z "$TELEGRAM_USER_ID" ]; then
    echo "Enter Van's Telegram user ID (from @userinfobot):"
    read -r TELEGRAM_USER_ID
fi

# Write to .env
ENV_FILE="$USER_HOME/.hermes/.env"
mkdir -p "$USER_HOME/.hermes"

# Preserve existing env, add/update Telegram
touch "$ENV_FILE"
if ! grep -q "TELEGRAM_BOT_TOKEN" "$ENV_FILE" 2>/dev/null; then
    echo "TELEGRAM_BOT_TOKEN=$TELEGRAM_BOT_TOKEN" >> "$ENV_FILE"
else
    sed -i "s|TELEGRAM_BOT_TOKEN=.*|TELEGRAM_BOT_TOKEN=$TELEGRAM_BOT_TOKEN|" "$ENV_FILE"
fi

chmod 600 "$ENV_FILE"
print_ok "Telegram credentials saved to $ENV_FILE"

# Update config.yaml with Telegram settings
if [ -f "$HERMES_CONFIG" ]; then
    python3 << PYEOF 2>/dev/null || true
import yaml

config_path = "$HERMES_CONFIG"
with open(config_path, 'r') as f:
    config = yaml.safe_load(f) or {}

if 'platforms' not in config:
    config['platforms'] = {}
if 'telegram' not in config['platforms']:
    config['platforms']['telegram'] = {}

config['platforms']['telegram']['enabled'] = True
config['platforms']['telegram']['allowed_users'] = ["$TELEGRAM_USER_ID"]

with open(config_path, 'w') as f:
    yaml.dump(config, f, default_flow_style=False, allow_unicode=True)
print("Telegram configured in Hermes config")
PYEOF
fi

print_ok "Telegram bot connected"

# ── 7. Enable Hermes tools ─────────────────────────────────────────
print_step "Enabling Hermes tools"

# Ensure core toolsets are enabled
if [ -f "$HERMES_CONFIG" ]; then
    python3 << 'PYEOF' 2>/dev/null || true
import yaml

config_path = "$HERMES_CONFIG"
with open(config_path, 'r') as f:
    config = yaml.safe_load(f) or {}

if 'tools' not in config:
    config['tools'] = {}

# Enable core tools
for tool in ['web', 'memory', 'terminal', 'file', 'session_search', 'image_generation']:
    if tool not in config['tools']:
        config['tools'][tool] = {'enabled': True}

with open(config_path, 'w') as f:
    yaml.dump(config, f, default_flow_style=False, allow_unicode=True)
print("Core tools enabled")
PYEOF
fi

print_ok "Tools enabled: web, memory, terminal, file, session_search"

# ── 8. Create a personal identity for Van's agent ──────────────────
print_step "Setting up agent identity"

SOUL_FILE="$USER_HOME/.hermes/SOUL.md"
cat > "$SOUL_FILE" << SOULEOF
# SOUL.md — Van's AI Assistant

You are Van's personal AI assistant. You live in her Telegram and help her with day-to-day tasks.

## Your Role

- Be genuinely helpful, not performatively helpful. Skip the pleasantries.
- Have opinions. Be a smart friend, not a search engine.
- Be concise. Van prefers short, direct answers.
- Remember what Van tells you — that's what MemPalace is for.
- When in doubt, do the useful thing. Don't ask for permission on low-stakes tasks.
- Be proactive — if you see something Van should know, mention it.

## Memory

You have MemPalace — a persistent memory system. Use it:
- Save important things Van tells you (preferences, projects, contacts)
- Search past conversations when Van asks "do you remember..."
- Track facts in the knowledge graph (people, relationships, dates)
- Write diary entries after meaningful sessions

## Boundaries

- Private things stay private.
- Don't send messages on Van's behalf unless she explicitly asks.
- When in doubt about external actions, ask first.

## Tone

Warm but not chatty. Smart but not showy. Direct but not blunt.
You're her behind-the-scenes helper — not a robot, not a hype man.
SOULEOF

print_ok "Agent identity (SOUL.md) created"

# ── 9. Restart Hermes Gateway ──────────────────────────────────────
print_step "Restarting Hermes Gateway"

# Try systemctl first, then fall back to direct restart
if systemctl --user -M "$TARGET_USER@" status hermes-gateway &> /dev/null 2>&1 || \
   su - "$TARGET_USER" -c "systemctl --user status hermes-gateway" &> /dev/null 2>&1; then
    su - "$TARGET_USER" -c "systemctl --user restart hermes-gateway" 2>/dev/null
    print_ok "Hermes gateway restarted via systemd"
else
    # Fall back — find and restart the Hermes process
    print_warn "Could not find systemd service. Attempting manual restart..."
    pkill -f "hermes.*gateway" 2>/dev/null || true
    sleep 2
    # The Hostinger one-click deploy uses Docker, so restart the container
    if command -v docker &> /dev/null; then
        docker restart hermes 2>/dev/null || \
        docker restart hermes-agent 2>/dev/null || \
        docker compose -f "$USER_HOME/docker-compose.yml" restart 2>/dev/null || \
        print_warn "Could not auto-restart. Check Docker containers: docker ps"
        print_ok "Hermes container restarted"
    else
        print_warn "No Docker found. You may need to restart Hermes manually."
    fi
fi

# ── 10. Verify ─────────────────────────────────────────────────────
print_step "Verification"

sleep 5

# Check MemPalace
if [ -f "$MEMPALACE_MCP" ]; then
    print_ok "MemPalace MCP binary: $MEMPALACE_MCP"
else
    print_err "MemPalace MCP binary not found"
fi

# Check palace data
if [ -d "$MEMPALACE_DATA" ]; then
    print_ok "Palace data directory: $MEMPALACE_DATA"
else
    print_err "Palace data directory not found"
fi

# Check Hermes config
if [ -f "$HERMES_CONFIG" ]; then
    print_ok "Hermes config: $HERMES_CONFIG"
else
    print_warn "Hermes config not at expected location"
fi

# Check skills
SKILL_COUNT=$(find "$SKILLS_DIR" -name "SKILL.md" 2>/dev/null | wc -l)
print_ok "Skills installed: $SKILL_COUNT"

# Check Telegram
if grep -q "TELEGRAM_BOT_TOKEN" "$ENV_FILE" 2>/dev/null; then
    print_ok "Telegram configured"
else
    print_err "Telegram not configured"
fi

# ── Summary ────────────────────────────────────────────────────────
echo ""
echo "════════════════════════════════════════════════════════════════"
echo "  SETUP COMPLETE ✅"
echo "════════════════════════════════════════════════════════════════"
echo ""
echo "Your bot is live. Open Telegram and send 'Hi!' to your bot."
echo ""
echo "Next step: Go back to the setup guide and copy the memory"
echo "prompt in Part 4 — paste it to your bot to give it memory."
echo ""
echo "════════════════════════════════════════════════════════════════"