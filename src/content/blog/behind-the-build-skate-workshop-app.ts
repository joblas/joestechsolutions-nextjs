import type { BlogPost } from "@/lib/blog";

export const post: BlogPost = {
  slug: "behind-the-build-skate-workshop-app",
  title: "Behind the Build: Why, What, and How We Built The Skate Workshop App",
  excerpt:
    "A technical deep dive into building the future of skate coaching. From React Native and Supabase to automated App Store pipelines and AI-ready video analysis.",
  date: "2026-04-07",
  readTime: 8,
  author: "Joe Blas",
  tags: ["Mobile Development", "React Native", "Expo", "Supabase", "Engineering"],
  seo: {
    title:
      "Behind the Build: The Skate Workshop App Infrastructure | Joe's Tech Solutions",
    description:
      "A technical case study on building a high-performance skate coaching app. Explore the stack: React Native, Expo SDK 52, Supabase, and automated App Store deployment.",
    ogImage: "/images/blog/skate-workshop-og.png",
  },
  content: `
<p class="lead">Elite skate coaching is visual, fast-paced, and happens on the concrete. In early 2026, it became clear that the industry was outgrowing generic coaching platforms. Coaches like Willy Santos and his Olympic roster were forced to use corporate apps that didn't fit the speed of the skatepark. We built The Skate Workshop App to solve that.</p>

<h2>🧭 WHY: The Vision</h2>
<p>We identified three critical pain points that were holding back high-performance coaching:</p>
<ul>
  <li><strong>The Lag:</strong> Athletes couldn't get feedback fast enough mid-session.</li>
  <li><strong>The Friction:</strong> Uploading and trimming clips was a 10-tap process that disrupted the flow of a session.</li>
  <li><strong>The Data Gap:</strong> There was no objective way to track trick progression beyond manual notes.</li>
</ul>
<p>Our goal was to build a mobile experience that feels like Instagram but works like a high-performance lab.</p>

<h2>🏗️ WHAT: The High-Performance Stack</h2>
<p>We didn't just build a web wrapper; we built a native-first coaching lab from the ground up.</p>

<h3>1. The Mobile Core (React Native & Expo SDK 52)</h3>
<p>Built in <strong>Q1 2026</strong>, the app leverages <strong>Expo SDK 52</strong>. This allows us to maintain a single TypeScript codebase while compiling to native Swift (iOS) and Java (Android) components. This architecture ensures 60FPS video scrubbing and an ultra-responsive UI that works perfectly on the latest mobile hardware.</p>

<h3>2. Real-Time Infrastructure (Supabase & PostgreSQL)</h3>
<p>Everything in the app is live. We utilized <strong>Supabase</strong> for real-time Postgres subscriptions. When a coach in San Diego draws an annotation on a video frame, an athlete training in Paris sees that mark instantly. No refreshing, no waiting—just seamless collaboration.</p>

<h3>3. The Video Logic (MediaPipe & Transcoding)</h3>
<p>Handling high-bitrate skate clips requires serious compute. Our backend handles raw clips by transcoding them on-the-fly, optimizing for mobile viewing while preserving the frame data needed for slow-motion analysis. We've also integrated <strong>MediaPipe (BlazePose)</strong> to map joint angles, providing the foundation for our upcoming AI trick-detection engine.</p>

<h2>🚀 WHEN & HOW: The Play Store Pipeline</h2>
<p>Deployment was handled as a professional CI/CD operation in <strong>March 2026</strong>. One of the biggest hurdles in mobile dev is the "Store" barrier, which we automated entirely.</p>

<h3>Certificates & Provisioning</h3>
<p>We manage Apple Distribution Certificates and Android Keystores via <strong>EAS (Expo Application Services)</strong>. This automates the signing process, ensuring builds are verified for security before they ever hit a device, and eliminating the "manual certificate hell" that plagues many mobile projects.</p>

<h3>The CI/CD Workflow</h3>
<p>Using <strong>GitHub Actions</strong>, every merge to our main branch triggers an automated build sequence:</p>
<ol>
  <li><strong>EAS Build:</strong> Cloud-compiles the binary for both iOS and Android.</li>
  <li><strong>EAS Submit:</strong> Automatically pushes the binaries to <strong>TestFlight</strong> and the <strong>Google Play Console</strong>.</li>
  <li><strong>Over-the-Air (OTA) Updates:</strong> We use Expo Updates to push critical bug fixes directly to phones in seconds, bypassing the 48-hour store review delay.</li>
</ol>

<h2>The Result</h2>
<p>A specialized, technical platform built in under three months that gives JTS and The Skate Workshop full ownership of their data and infrastructure. It’s more than an app; it’s a blueprint for how niche communities can leverage high-end engineering to build tools that actually work.</p>

<div class="cta-box">
  <p>Interested in building a specialized mobile tool for your community? <a href="/contact">Let's talk.</a></p>
</div>
`,
};
