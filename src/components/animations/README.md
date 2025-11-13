# Premium Animation System

Ultra-smooth, Apple-style animations for your Next.js project. Based on the Framer portfolio templates with buttery smooth spring physics and GPU-accelerated transforms.

## Demo

Visit `/animations-demo` to see all animations in action!

## Animation Principles

This system follows premium animation standards:

- **Spring Physics**: Soft damping (16-20) for natural movement
- **Cubic-Bezier Easing**: `(0.16, 1, 0.3, 1)` for smooth entrances
- **Back.out Overshoot**: Creates "rubbery" feel like Apple UI
- **Expo.out**: Fast reveals with smooth slow-down
- **Scroll-Triggered**: Viewport-aware animations
- **GPU-Accelerated**: `will-change: transform` for 60fps

## Quick Start

```tsx
import {
  HeroGlow,
  FloatingCard,
  FeatureCard,
  AnimatedGraph,
  AICard,
  PremiumBackground,
} from "@/components/animations";

function MyPage() {
  return (
    <div>
      <PremiumBackground />
      <HeroGlow>
        <h1>Your Headline</h1>
      </HeroGlow>
    </div>
  );
}
```

## Components

### 🌟 Hero Components

#### HeroGlow
Expanding Gaussian bloom effect behind text.

```tsx
<HeroGlow glowColor="#0EA5E9" glowIntensity={0.5}>
  <h1>Scale Business with Automation</h1>
</HeroGlow>
```

**Props:**
- `glowColor`: Hex color for glow (default: `#0EA5E9`)
- `glowIntensity`: 0-1 opacity (default: `0.4`)

#### StaggeredNav
Navigation items that fade in sequentially from top.

```tsx
<StaggeredNav>
  <NavItem><button>Home</button></NavItem>
  <NavItem><button>About</button></NavItem>
  <NavItem><button>Contact</button></NavItem>
</StaggeredNav>
```

**Animation:**
- Y offset: `-20px → 0`
- Stagger delay: `0.06s`
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)`

### 💳 Card Components

#### FloatingCard
Single floating glass panel with parallax depth.

```tsx
<FloatingCard parallaxSpeed={-20}>
  <div className="p-8">
    Your content here
  </div>
</FloatingCard>
```

**Props:**
- `parallaxSpeed`: Scroll offset (default: `-20`)
- `className`: Additional Tailwind classes

**Features:**
- Soft drop shadow for depth
- Glass-like frosted background
- Parallax scroll movement

#### FloatingCards
Stacked 3D cards (Apple VisionOS style).

```tsx
<FloatingCards
  stacked
  parallax
  cards={[
    { content: <Card1 /> },
    { content: <Card2 /> },
    { content: <Card3 /> },
  ]}
/>
```

**Props:**
- `stacked`: Enable 3D layering (default: `false`)
- `parallax`: Enable scroll parallax (default: `true`)
- `cards`: Array of card objects

**Animation:**
- Scale: `0.92 → 1`
- Y offset: `+30px → 0`
- Duration: `0.75s`

#### FeatureCard
Scroll-triggered cards that slide up.

```tsx
<FeatureCardGrid staggerSpeed="medium">
  <FeatureCard>
    <FeatureIcon><Icon /></FeatureIcon>
    <FeatureHeadline>Your Title</FeatureHeadline>
    <FeatureSubtext>Description</FeatureSubtext>
  </FeatureCard>
</FeatureCardGrid>
```

**Animation:**
- Y offset: `+50px → 0`
- Scale: `0.97 → 1`
- Easing: `back.out(1.4)` (rubbery feel)

### 📊 Graph & Data

#### AnimatedGraph
Bézier curve that draws from left to right.

```tsx
<AnimatedGraph
  dataPoints={[
    { x: 50, y: 200, value: "20K" },
    { x: 150, y: 150, value: "45K" },
    { x: 250, y: 100, value: "78K" },
  ]}
  strokeColor="#0EA5E9"
  strokeWidth={4}
/>
```

**Props:**
- `dataPoints`: Array of `{x, y, value?}`
- `width`, `height`: SVG dimensions
- `strokeColor`: Line color
- `showNodes`: Display circles at points
- `showValues`: Show value labels

**Animation:**
- Path length: `0 → 1` over `1.5s`
- Nodes scale: `0.4 → 1` with delay
- Glossy highlight sweep

#### StarRating
Stars appear one by one.

```tsx
<StarRating rating={5} maxStars={5} color="#FCD34D" />
```

#### AnimatedCounter
Numeric values fade and slide up.

```tsx
<AnimatedCounter value="$120K" label="This Quarter" />
```

### 🤖 AI & Interactive

#### AICard
Heavy spring motion cards (rubbery feel).

```tsx
<AICardGrid>
  <AICard>
    <GlassCard className="p-6">
      Your content
    </GlassCard>
  </AICard>
</AICardGrid>
```

**Animation:**
- Y offset: `+80px → 0`
- Scale: `0.95 → 1`
- Spring: `damping 16, stiffness 100, mass 1.2`

#### ToggleSwitch
Smooth left-right toggle.

```tsx
<ToggleSwitch
  label="Email Sequences"
  isOn={true}
  onToggle={(value) => console.log(value)}
/>
```

**Animation:**
- X offset: `0 → 20px`
- Spring physics with `damping 15`

#### ChartGrid
Animated bar charts.

```tsx
<ChartGrid
  data={[
    { value: 75, label: "Q1", color: "#0EA5E9" },
    { value: 85, label: "Q2", color: "#06B6D4" },
  ]}
/>
```

**Animation:**
- Scale Y: `0 → 1` from bottom
- Stagger: `0.1s` delay between bars
- Easing: `expo.out`

#### PulsingIcon
Subtle breathing animation.

```tsx
<PulsingIcon>
  <Icon />
</PulsingIcon>
```

**Animation:**
- Scale: `1 → 1.04 → 1`
- Duration: `2s`
- Infinite loop

### 🎨 Background & Effects

#### PremiumBackground
Dark gradient with floating glowing orbs.

```tsx
<PremiumBackground
  orbs={[
    {
      size: 800,
      color: "#0EA5E9",
      initialX: "30%",
      initialY: "20%",
      blur: 200,
      speedX: 0.2,
      speedY: 0.3,
      opacity: 0.3,
    },
  ]}
/>
```

**Props:**
- `orbs`: Array of orb configurations
- `opacity`: Overall background opacity

**Features:**
- Parallax scroll movement
- Breathing pulse animation
- Noise texture overlay

#### GlassCard
Frosted glass effect with hover glow.

```tsx
<GlassCard glowColor="#0EA5E9">
  <div className="p-8">Content</div>
</GlassCard>
```

**Features:**
- Frosted glass backdrop
- Subtle top highlight
- Hover glow transition

#### SectionDivider
Line expands from center outward.

```tsx
<SectionDivider color="#0EA5E9" className="w-1/2" />
```

#### ShadowHalo
Ambient shadow for floating depth.

```tsx
<ShadowHalo color="#000" intensity={0.3} spread={40} />
```

## Animation Variants (Low-Level)

Import directly from `@/lib/animations` for custom components:

```tsx
import {
  smoothEase,
  backOut,
  expoOut,
  appleSpring,
  heroGlowVariants,
  featureCardVariants,
} from "@/lib/animations";

<motion.div
  variants={featureCardVariants}
  initial="hidden"
  whileInView="visible"
>
  Content
</motion.div>
```

### Available Easings

- `smoothEase`: `[0.16, 1, 0.3, 1]` - Soft entrance
- `backOut`: `[0.34, 1.56, 0.64, 1]` - Rubbery overshoot
- `expoOut`: `[0.19, 1, 0.22, 1]` - Fast reveal
- `gentleEase`: `[0.25, 0.46, 0.45, 0.94]` - Subtle movement
- `appleSpring`: Spring config with `damping: 16`

## Performance Tips

1. **Use `once: true`** for viewport animations (default in all components)
2. **GPU Acceleration**: All transforms use `will-change: transform`
3. **Parallax on scroll**: Minimal re-renders with `useTransform`
4. **Conditional rendering**: Heavy animations only when in viewport

## Customization

### Override default timings:

```tsx
<FeatureCard delay={0.2}>
  <motion.div
    transition={{ duration: 1.2, ease: smoothEase }}
  >
    Custom timing
  </motion.div>
</FeatureCard>
```

### Create custom variants:

```tsx
import { smoothEase } from "@/lib/animations";

const myVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: smoothEase }
  }
};
```

## Browser Support

- Chrome/Edge: Full support
- Safari: Full support (includes `-webkit-` prefixes)
- Firefox: Full support
- Mobile: Optimized with `will-change` and `transform3d`

## Credits

Inspired by:
- Framer portfolio templates
- Apple design language
- AtomAI template animations
- Premium SaaS landing pages

Built with ❤️ using Framer Motion
