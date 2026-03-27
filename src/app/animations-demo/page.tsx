import dynamic from "next/dynamic";
import { Zap, Target, TrendingUp } from "lucide-react";

const HeroGlow = dynamic(() => import("@/components/animations/HeroGlow").then(m => ({ default: m.HeroGlow })), { ssr: true });
const FloatingCard = dynamic(() => import("@/components/animations/FloatingCards").then(m => ({ default: m.FloatingCard })), { ssr: true });
const FeatureCard = dynamic(() => import("@/components/animations/FeatureCard").then(m => ({ default: m.FeatureCard })), { ssr: true });
const FeatureCardGrid = dynamic(() => import("@/components/animations/FeatureCard").then(m => ({ default: m.FeatureCardGrid })), { ssr: true });
const FeatureHeadline = dynamic(() => import("@/components/animations/FeatureCard").then(m => ({ default: m.FeatureHeadline })), { ssr: true });
const FeatureSubtext = dynamic(() => import("@/components/animations/FeatureCard").then(m => ({ default: m.FeatureSubtext })), { ssr: true });
const FeatureIcon = dynamic(() => import("@/components/animations/FeatureCard").then(m => ({ default: m.FeatureIcon })), { ssr: true });
const AnimatedGraph = dynamic(() => import("@/components/animations/AnimatedGraph").then(m => ({ default: m.AnimatedGraph })), { ssr: true });
const StarRating = dynamic(() => import("@/components/animations/AnimatedGraph").then(m => ({ default: m.StarRating })), { ssr: true });
const AnimatedCounter = dynamic(() => import("@/components/animations/AnimatedGraph").then(m => ({ default: m.AnimatedCounter })), { ssr: true });
const AICard = dynamic(() => import("@/components/animations/AICard").then(m => ({ default: m.AICard })), { ssr: true });
const AICardGrid = dynamic(() => import("@/components/animations/AICard").then(m => ({ default: m.AICardGrid })), { ssr: true });
const ToggleSwitch = dynamic(() => import("@/components/animations/AICard").then(m => ({ default: m.ToggleSwitch })), { ssr: true });
const ChartGrid = dynamic(() => import("@/components/animations/AICard").then(m => ({ default: m.ChartGrid })), { ssr: true });
const PulsingIcon = dynamic(() => import("@/components/animations/AICard").then(m => ({ default: m.PulsingIcon })), { ssr: true });
const PremiumBackground = dynamic(() => import("@/components/animations/PremiumBackground").then(m => ({ default: m.PremiumBackground })), { ssr: true });
const SectionDivider = dynamic(() => import("@/components/animations/PremiumBackground").then(m => ({ default: m.SectionDivider })), { ssr: true });
const GlassCard = dynamic(() => import("@/components/animations/PremiumBackground").then(m => ({ default: m.GlassCard })), { ssr: true });

export default function AnimationsDemo() {
  // Sample graph data
  const graphData = [
    { x: 50, y: 200, value: "20K" },
    { x: 150, y: 150, value: "45K" },
    { x: 250, y: 100, value: "78K" },
    { x: 350, y: 80, value: "92K" },
    { x: 450, y: 50, value: "120K" },
  ];

  // Sample chart data
  const chartData = [
    { value: 75, label: "Q1", color: "#0d9488" },
    { value: 85, label: "Q2", color: "#2dd4bf" },
    { value: 95, label: "Q3", color: "#0d9488" },
    { value: 100, label: "Q4", color: "#2dd4bf" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* SECTION 1: HERO WITH GLOW */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <PremiumBackground />

        {/* Hero Content */}
        <div className="relative px-8 py-32">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <HeroGlow glowColor="#0d9488" glowIntensity={0.4}>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="block mb-4 text-white">Premium Animation</span>
                <span className="block bg-gradient-to-r from-[#0d9488] to-[#2dd4bf] bg-clip-text text-transparent">
                  Components
                </span>
              </h1>
            </HeroGlow>

            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Buttery smooth, Apple-style animations for Next.js. GPU-accelerated with spring physics.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: FEATURE CARDS */}
      <section id="features" className="relative py-40 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Feature Cards</h2>
            <p className="text-lg text-white/50">Scroll-triggered animations with spring physics</p>
          </div>

          <FeatureCardGrid className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <FeatureCard>
              <GlassCard className="p-10 h-full">
                <FeatureIcon>
                  <div className="w-16 h-16 bg-[#0b7f73]/10 rounded-2xl flex items-center justify-center mb-8">
                    <Target className="w-8 h-8 text-[#0d9488]" />
                  </div>
                </FeatureIcon>
                <FeatureHeadline className="text-2xl font-bold mb-4 text-white">
                  Slide Up Animation
                </FeatureHeadline>
                <FeatureSubtext className="text-white/50 text-base leading-relaxed">
                  Cards slide up from below with scale transform. Y offset +50px, scale 0.97→1, back.out easing.
                </FeatureSubtext>
              </GlassCard>
            </FeatureCard>

            <FeatureCard delay={0.15}>
              <GlassCard className="p-10 h-full">
                <FeatureIcon>
                  <div className="w-16 h-16 bg-[#2dd4bf]/10 rounded-2xl flex items-center justify-center mb-8">
                    <TrendingUp className="w-8 h-8 text-[#2dd4bf]" />
                  </div>
                </FeatureIcon>
                <FeatureHeadline className="text-2xl font-bold mb-4 text-white">
                  Stagger Effect
                </FeatureHeadline>
                <FeatureSubtext className="text-white/50 text-base leading-relaxed">
                  Sequential appearance with 0.15s stagger delay. Icon pops, headline slides, subtext fades.
                </FeatureSubtext>
              </GlassCard>
            </FeatureCard>
          </FeatureCardGrid>
        </div>
      </section>

      <SectionDivider className="w-2/3 max-w-md mx-auto" />

      {/* SECTION 3: GRAPH ANIMATION */}
      <section id="graphs" className="relative py-40 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Animated Graphs</h2>
            <p className="text-lg text-white/50">Bézier line reveal with node pop-ins</p>
          </div>

          <FloatingCard className="mx-auto">
            <div className="p-12">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white">Growth Metrics</h3>
                  <StarRating rating={5} size={18} />
                </div>
                <AnimatedCounter value="$120K" label="Revenue" />
              </div>

              <div className="w-full overflow-x-auto">
                <AnimatedGraph
                  dataPoints={graphData}
                  width={600}
                  height={200}
                  strokeColor="#0d9488"
                  strokeWidth={3}
                />
              </div>
            </div>
          </FloatingCard>
        </div>
      </section>

      <SectionDivider className="w-2/3 max-w-md mx-auto" />

      {/* SECTION 4: AI CARDS */}
      <section id="ai-cards" className="relative py-40 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">AI Interactive Cards</h2>
            <p className="text-lg text-white/50">Heavy spring motion with micro-animations</p>
          </div>

          <AICardGrid className="grid md:grid-cols-3 gap-8">
            <AICard>
              <GlassCard className="p-8 h-full">
                <PulsingIcon>
                  <div className="w-14 h-14 bg-[#0b7f73]/10 rounded-xl flex items-center justify-center mb-6">
                    <Zap className="w-7 h-7 text-[#0d9488]" />
                  </div>
                </PulsingIcon>
                <h3 className="text-xl font-bold mb-6 text-white">Toggle Switches</h3>
                <div className="space-y-4">
                  <ToggleSwitch label="Email Campaign" isOn={true} />
                  <ToggleSwitch label="Lead Scoring" isOn={true} />
                  <ToggleSwitch label="Auto-Reply" isOn={false} />
                </div>
              </GlassCard>
            </AICard>

            <AICard delay={0.12}>
              <GlassCard className="p-8 h-full">
                <h3 className="text-xl font-bold mb-6 text-white">Chart Bars</h3>
                <ChartGrid data={chartData} className="mt-8" />
              </GlassCard>
            </AICard>

            <AICard delay={0.24}>
              <GlassCard className="p-8 h-full">
                <h3 className="text-xl font-bold mb-6 text-white">Counters</h3>
                <div className="space-y-6 mt-8">
                  <AnimatedCounter value="2,847" label="Users" />
                  <AnimatedCounter value="94%" label="Success" />
                  <AnimatedCounter value="$48K" label="Revenue" />
                </div>
              </GlassCard>
            </AICard>
          </AICardGrid>
        </div>
      </section>

      <SectionDivider className="w-2/3 max-w-md mx-auto" />

      {/* SECTION 5: SCROLLING LOGOS */}
      <section className="relative py-40 px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Modern Technology Stack</h2>
            <p className="text-lg text-white/50 max-w-3xl mx-auto">
              Leveraging cutting-edge tools from leading technology companies to deliver reliable, scalable solutions
            </p>
          </div>

          {/* Top Row - Scrolling Left */}
          <div className="relative mb-8 overflow-hidden">
            <div className="flex gap-8 animate-scroll-left">
              {[
                { name: "Anthropic Claude", logo: "/logos/claude-color.png", url: "https://www.anthropic.com" },
                { name: "OpenAI", logo: "/logos/openai.png", url: "https://openai.com" },
                { name: "Replicate", logo: "/logos/replicate.png", url: "https://replicate.com" },
                { name: "Flux AI", logo: "/logos/flux.png", url: "https://blackforestlabs.ai" },
                { name: "Anthropic Claude", logo: "/logos/claude-color.png", url: "https://www.anthropic.com" },
                { name: "OpenAI", logo: "/logos/openai.png", url: "https://openai.com" },
                { name: "Replicate", logo: "/logos/replicate.png", url: "https://replicate.com" },
                { name: "Flux AI", logo: "/logos/flux.png", url: "https://blackforestlabs.ai" },
              ].map((tech, index) => (
                <a
                  key={index}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-48 h-32 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center p-6 hover:bg-white/10 transition-colors"
                >
                  <img
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    className="max-h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity filter brightness-0 invert"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Row - Scrolling Right */}
          <div className="relative overflow-hidden">
            <div className="flex gap-8 animate-scroll-right">
              {[
                { name: "Ollama", logo: "/logos/ollama.png", url: "https://ollama.com" },
                { name: "Open WebUI", logo: "/logos/openwebui.png", url: "https://openwebui.com" },
                { name: "n8n", logo: "/logos/n8n-color.png", url: "https://n8n.io" },
                { name: "Cloudflare", logo: "/logos/cloudflare-color.png", url: "https://www.cloudflare.com" },
                { name: "Ollama", logo: "/logos/ollama.png", url: "https://ollama.com" },
                { name: "Open WebUI", logo: "/logos/openwebui.png", url: "https://openwebui.com" },
                { name: "n8n", logo: "/logos/n8n-color.png", url: "https://n8n.io" },
                { name: "Cloudflare", logo: "/logos/cloudflare-color.png", url: "https://www.cloudflare.com" },
              ].map((tech, index) => (
                <a
                  key={index}
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-48 h-32 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center p-6 hover:bg-white/10 transition-colors"
                >
                  <img
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    className="max-h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity filter brightness-0 invert"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-8 border-t border-white/10 text-center text-white/50">
        <p>Premium animations — CSS, vanilla JS &amp; Framer Motion</p>
      </footer>
    </div>
  );
}
