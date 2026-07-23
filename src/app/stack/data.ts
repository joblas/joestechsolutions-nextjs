// Stack data — updated when the real tool stack changes.
// Source: ~/.hermes/config.yaml, ~/free-claude-code/.env, ollama list, ~/.gitnexus/registry.json
// Last updated: 2026-07-22

export const lastUpdated = "July 22, 2026";

export const models = [
  {
    name: "Step 3.5 Flash",
    role: "Primary — main conversation + interactive tasks",
    provider: "NVIDIA NIM",
    capabilities: ["tools", "thinking"],
  },
  {
    name: "GLM-5.2",
    role: "Cron jobs + background tasks + code",
    provider: "Ollama Cloud",
    capabilities: ["tools", "thinking"],
  },
  {
    name: "Kimi K2.7 Code",
    role: "Coding sub-agents + delegate tasks",
    provider: "Ollama Cloud",
    capabilities: ["vision", "tools", "thinking"],
  },
  {
    name: "Gemma 4",
    role: "Vision + image analysis + goal-mode judge",
    provider: "Ollama Cloud",
    capabilities: ["vision", "tools", "thinking", "audio"],
  },
  {
    name: "DeepSeek V4 Flash",
    role: "Fallback — coding + robust tasks",
    provider: "NVIDIA NIM",
    capabilities: ["tools", "thinking"],
  },
  {
    name: "Granite 4.1",
    role: "Local — offline + emergency",
    provider: "Ollama Local",
    capabilities: ["tools", "thinking"],
  },
];

export const services = [
  {
    name: "Hermes Gateway",
    port: "8642",
    purpose: "AI orchestrator + Telegram bot",
    tech: "Python, systemd",
  },
  {
    name: "FCC Proxy",
    port: "8082",
    purpose: "Claude Code → cloud model routing",
    tech: "Python, uvicorn",
  },
  {
    name: "Ollama",
    port: "11434",
    purpose: "Local + cloud model inference",
    tech: "Go, systemd",
  },
  {
    name: "MemPalace",
    port: "—",
    purpose: "Persistent memory + knowledge graph",
    tech: "Python, MCP",
  },
  {
    name: "GitNexus",
    port: "—",
    purpose: "Code knowledge graph (60K+ nodes indexed)",
    tech: "Node.js, CLI",
  },
  {
    name: "Open WebUI",
    port: "3000",
    purpose: "Browser-based chat interface",
    tech: "Docker",
  },
  {
    name: "Open Design",
    port: "4000",
    purpose: "Design AI stack + daemon",
    tech: "Node.js, systemd",
  },
];

export const tools = [
  {
    category: "Orchestration",
    items: ["Hermes Agent", "delegate_task subagents", "Loop + Goal Mode"],
  },
  {
    category: "Coding",
    items: ["Claude Code (via FCC proxy)", "GitNexus code graph", "Agent-Skills (24 SDLC skills)"],
  },
  {
    category: "Memory",
    items: ["MemPalace MCP", "Semantic search", "Knowledge graph", "Session diary"],
  },
  {
    category: "Models",
    items: ["24 Ollama Cloud models", "NVIDIA NIM (primary)", "6-model fallback chain"],
  },
  {
    category: "Infrastructure",
    items: ["WSL2 Ubuntu", "Systemd services", "Docker containers", "iptables firewall"],
  },
];

export const stats = [
  { label: "AI Agents", value: "14" },
  { label: "Scheduled Automations", value: "32" },
  { label: "Cloud Models", value: "24" },
  { label: "Indexed Code Nodes", value: "60K+" },
  { label: "Active Services", value: "7" },
  { label: "Skills Library", value: "100+" },
];