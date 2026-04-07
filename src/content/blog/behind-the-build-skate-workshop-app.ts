import type { BlogPost } from "@/lib/blog";

export const post: BlogPost = {
  slug: "behind-the-build-skate-workshop-app",
  title: "Behind the Build: The Skate Workshop App Infrastructure",
  excerpt:
    "A technical deep dive into why, what, and how we built the future of skate coaching using React Native, Expo SDK 52, and Supabase.",
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

<div class="flex items-center gap-2 mb-4">
  <h2 class="m-0 text-2xl font-bold">WHY: The Vision</h2>
</div>
<p>In early 2026, it became clear that elite skate coaching was outgrowing generic platforms. Coaches like Willy Santos and his Olympic roster were forced to use dashboard-heavy corporate apps that didn't fit the speed of the skatepark. We built this app to solve three critical pain points:</p>
<ul>
  <li><strong>The Lag:</strong> Athletes couldn't get feedback fast enough mid-session.</li>
  <li><strong>The Friction:</strong> Uploading and trimming clips was a 10-tap process.</li>
  <li><strong>The Data Gap:</strong> There was no objective way to track trick progression beyond manual notes.</li>
</ul>

<div class="flex items-center gap-2 mb-4">
  <h2 class="m-0 text-2xl font-bold">WHAT: The High-Performance Stack</h2>
</div>
<p>We didn't just build a web wrapper; we built a native-first coaching lab.</p>

<h3>1. The Mobile Core (React Native & Expo SDK 52)</h3>
<p>Built in <strong>Q1 2026</strong>, the app uses <strong>Expo SDK 52</strong> to maintain a single TypeScript codebase while compiling to native Swift (iOS) and Java (Android). This ensures 60FPS video scrubbing and ultra-responsive UI.</p>

<h3>2. Real-Time Infrastructure (Supabase & PostgreSQL)</h3>
<p>Everything is live. We leveraged <strong>Supabase</strong> for real-time Postgres subscriptions. When a coach draws an annotation on a frame in San Diego, an athlete training in Paris sees that mark instantly.</p>

<h3>3. The Video Logic (MediaPipe & Transcoding)</h3>
<ul>
  <li><strong>Video Engine:</strong> Handles high-bitrate raw clips, transcoding them on-the-fly for mobile optimization.</li>
  <li><strong>AI Readiness:</strong> Integrated <strong>MediaPipe (BlazePose)</strong> to map joint angles for future automated trick classification.</li>
</ul>

<div class="flex items-center gap-2 mb-4">
  <h2 class="m-0 text-2xl font-bold">WHEN & HOW: The Play Store Pipeline</h2>
</div>
<p>Deployment was handled as a professional CI/CD operation in <strong>March 2026</strong>.</p>

<h3>Certificates & Provisioning</h3>
<p>Managing the "Store" hurdle is where most projects fail. I handled:</p>
<ul>
  <li><strong>Apple Distribution Certificates</strong> and <strong>Android Keystores</strong> via <strong>EAS (Expo Application Services)</strong>.</li>
  <li><strong>Automated Provisioning:</strong> No more manual Xcode certificate errors. Everything is signed in the cloud during the build process.</li>
</ul>

<h3>The CI/CD Workflow</h3>
<ul>
  <li><strong>GitHub Actions:</strong> Every merge to main triggers a build.</li>
  <li><strong>EAS Build & Submit:</strong> Automatically compiles the binary and pushes it to <strong>TestFlight (iOS)</strong> and the <strong>Google Play Console (Internal Testing)</strong>.</li>
  <li><strong>OTA Updates (Over-the-Air):</strong> We use Expo Updates to push bug fixes directly to users phones in seconds, bypassing the 48-hour store review delay.</li>
</ul>

<div class="flex items-center gap-2 mb-4">
  <h2 class="m-0 text-2xl font-bold">Visuals and Reference</h2>
</div>
<p>The app architecture and design aesthetic were heavily inspired by the high-performance needs of the community.</p>
<ul>
  <li><strong>Live App:</strong> <a href="https://www.theskateworkshop.app/" target="_blank" rel="noopener">theskateworkshop.app</a></li>
  <li><strong>Portfolio Breakdown:</strong> <a href="https://www.joestechsolutions.com/portfolio/skate-workshop">JTS Skate Workshop Case Study</a></li>
</ul>

<p>The design uses high-contrast dark modes and bold typography, ensuring visibility even in bright outdoor skatepark environments.</p>

<div class="cta-box mt-8 p-6 bg-secondary/10 rounded-xl border border-secondary/20">
  <p class="m-0">Interested in building a specialized mobile tool for your community? <a href="/contact" class="font-bold text-primary hover:underline">Let's talk.</a></p>
</div>
`,
};
