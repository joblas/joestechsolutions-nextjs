// Stack data — updated when the real tool stack changes.
// Source: ~/.hermes/config.yaml, ~/free-claude-code/.env, ollama list, ~/.gitnexus/registry.json
// Last updated: 2026-07-07

export const lastUpdated = "July 7, 2026";

export const models = [
  {
    name: "GLM-5.2",
    role: "Flagship — main conversation + heavy reasoning",
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
    name: "MiniMax M3",
    role: "Fast tier — quick lookups, simple tasks",
    provider: "Ollama Cloud",
    capabilities: ["vision", "tools", "thinking"],
  },
  {
    name: "Gemma 4",
    role: "Vision + image analysis",
    provider: "Ollama Cloud",
    capabilities: ["vision", "tools", "thinking", "audio"],
  },
  {
    name: "DeepSeek V4 Pro",
    role: "Fallback — coding",
    provider: "Ollama Cloud",
    capabilities: ["tools", "thinking"],
  },
  {
    name: "Nemotron 3 Super",
    role: "Fallback — reasoning",
    provider: "Ollama Cloud",
    capabilities: ["tools", "thinking"],
  },
  {
    name: "Qwen 3.5",
    role: "Fallback — multimodal",
    provider: "Ollama Cloud",
    capabilities: ["vision", "tools", "thinking"],
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
    purpose: "Claude Code → Ollama Cloud routing",
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
];

export const tools = [
  {
    category: "Orchestration",
    items: ["Hermes Agent", "delegate_task subagents", "Kanban multi-agent boards"],
  },
  {
    category: "Coding",
    items: ["Claude Code (via FCC proxy)", "GitNexus code graph", "Superpowers skills"],
  },
  {
    category: "Memory",
    items: ["MemPalace MCP", "Semantic search", "Knowledge graph", "Session diary"],
  },
  {
    category: "Models",
    items: ["21 Ollama Cloud models", "NVIDIA NIM (fallback)", "7-model fallback chain"],
  },
  {
    category: "Infrastructure",
    items: ["WSL2 Ubuntu", "Systemd services", "Docker containers", "iptables firewall"],
  },
];

export const stats = [
  { label: "AI Agents", value: "14" },
  { label: "Cron Jobs", value: "32" },
  { label: "Ollama Cloud Models", value: "21" },
  { label: "Indexed Code Nodes", value: "60K+" },
  { label: "Active Services", value: "6" },
  { label: "Fallback Tiers", value: "7" },
];