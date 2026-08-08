---
name: van-agent-bootstrap
description: "Self-installation skill for Van's Hermes Agent. Runs on first boot to install MemPalace memory system, configure skills, and set up the agent identity. Triggered when the user says 'set up', 'bootstrap', 'install your memory', or 'make yourself smarter'."
version: 1.0.0
author: Joe's Tech Solutions
metadata:
  hermes:
    tags: [setup, bootstrap, mempalace, memory, self-install]
    category: system
---

# Van's Agent Bootstrap

This skill makes Van's Hermes Agent install its own memory system and skills. The agent runs these steps itself using its terminal tool — no manual SSH needed.

## When to use

Run this skill when:
- Van says "set up", "bootstrap", "install your memory", "make yourself smarter"
- First boot after the Hostinger one-click deploy
- Joe tells Van to ask her agent to "run your setup"

## Prerequisites

- Hermes Agent deployed via Hostinger one-click (Hermes Agent VPS template)
- Terminal tool enabled
- Python 3 available (comes with the Hostinger image)

## Steps

### 1. Check if already bootstrapped

Before doing anything, check if MemPalace is already installed:

```bash
ls ~/mempalace/.venv/bin/mempalace-mcp 2>/dev/null && echo "ALREADY_INSTALLED" || echo "NEEDS_INSTALL"
```

If `ALREADY_INSTALLED`, skip to step 6 (verify everything is working).

### 2. Install system dependencies

```bash
sudo apt-get update -qq && sudo apt-get install -y -qq curl git python3 python3-pip python3-venv ffmpeg build-essential
```

### 3. Install uv (Python package manager)

```bash
if ! command -v uv &>/dev/null; then
    curl -LsSf https://astral.sh/uv/install.sh | sh
    export PATH="$HOME/.local/bin:$PATH"
fi
```

### 4. Clone and install MemPalace

MemPalace is a persistent memory system — it stores everything Van tells you, verbatim, and lets you search it across conversations. No API keys required. All data stays on this server.

```bash
git clone https://github.com/MemPalace/mempalace.git ~/mempalace
cd ~/mempalace
```

Try uv first (faster), fall back to pip if uv isn't available:

```bash
# Try uv
if command -v uv &>/dev/null; then
    uv venv .venv
    source .venv/bin/activate
    uv pip install -e .
else
    # Fallback: standard pip
    python3 -m venv .venv
    source .venv/bin/activate
    pip install -e .
fi
```

If uv isn't installed, install it first:

```bash
pip3 install --user uv
export PATH="$HOME/.local/bin:$PATH"
```

### 5. Initialize the palace

```bash
mkdir -p ~/.mempalace
chmod 700 ~/.mempalace
cd ~/mempalace
source .venv/bin/activate
mempalace --palace ~/.mempalace init 2>/dev/null || true
```

### 6. Register MemPalace as an MCP server in Hermes

Read the current Hermes config:

```bash
cat ~/.hermes/config.yaml
```

Add MemPalace to the `mcp_servers` section. If the section doesn't exist, create it. Use Python to safely edit the YAML:

```python
import yaml

config_path = "~/.hermes/config.yaml"  # expand ~ to the actual home path
with open(config_path, 'r') as f:
    config = yaml.safe_load(f) or {}

if 'mcp_servers' not in config:
    config['mcp_servers'] = {}

config['mcp_servers']['mempalace'] = {
    'command': '~/mempalace/.venv/bin/mempalace-mcp',  # expand ~ to actual path
    'args': ['--palace', '~/.mempalace'],  # expand ~ to actual path
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
```

**IMPORTANT:** Replace `~` with the actual home directory path (run `echo $HOME` to get it). YAML doesn't expand `~`.

### 7. Enable core tools

Make sure these tools are enabled in the Hermes config:

```yaml
tools:
  web:
    enabled: true
  memory:
    enabled: true
  terminal:
    enabled: true
  file:
    enabled: true
  session_search:
    enabled: true
```

### 8. Create agent identity (SOUL.md)

Write this to `~/.hermes/SOUL.md`:

```markdown
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
```

### 9. Restart the gateway

```bash
# Try systemd first
systemctl --user restart hermes-gateway 2>/dev/null || \
# Fall back to Docker (Hostinger one-click uses Docker)
docker restart hermes 2>/dev/null || docker restart hermes-agent 2>/dev/null || \
docker compose -f ~/docker-compose.yml restart 2>/dev/null
```

### 10. Verify

After 5 seconds, check:

```bash
# MemPalace installed?
ls ~/mempalace/.venv/bin/mempalace-mcp && echo "✓ MemPalace installed"

# Palace data directory?
ls -d ~/.mempalace && echo "✓ Palace data exists"

# Hermes config has mempalace?
grep -q mempalace ~/.hermes/config.yaml && echo "✓ MemPalace in Hermes config"
```

Then tell Van:
- Memory system is installed and active
- You now remember everything across conversations
- She can ask "do you remember..." and you'll search your palace
- Ask her to tell you about herself so you can save it to memory

## How to use MemPalace

Once installed, use these tools in conversation:

- **When Van tells you something personal/important** → `mempalace_add_drawer` (save it)
- **When Van asks "do you remember..."** → `mempalace_search` (search past conversations)
- **When tracking a fact** (someone's name, a date, a relationship) → `mempalace_kg_add`
- **When Van asks about a person/thing** → `mempalace_kg_query` (look up tracked facts)
- **At the end of a meaningful session** → `mempalace_diary_write` (log what happened)

The palace has:
- **Wings** — broad categories (people, projects, topics)
- **Rooms** — time-based groupings (days, sessions)
- **Drawers** — full verbatim content (Van's exact words)

Everything Van says is stored verbatim. Nothing is summarized. Nothing leaves the server.

## Troubleshooting

**"mempalace-mcp command not found"**
- Check: `ls ~/mempalace/.venv/bin/mempalace-mcp`
- If missing, re-run: `cd ~/mempalace && source .venv/bin/activate && uv pip install -e .`

**"Hermes didn't pick up the new MCP server"**
- Restart the gateway (step 9)
- Check config syntax: `python3 -c "import yaml; yaml.safe_load(open('~/.hermes/config.yaml'))"`

**"MemPalace search returns nothing"**
- The palace is empty until Van tells you things to remember
- Save something first, then search for it

## Notes

- This skill is idempotent — running it twice is safe. It skips what's already installed.
- MemPalace uses no API keys and no external services. All memory is local to this server.
- The palace grows over time. More Van talks, smarter the agent gets.