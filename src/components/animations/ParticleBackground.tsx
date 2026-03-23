/**
 * Pure CSS Particle Background
 *
 * No canvas, no Three.js, no dynamic imports.
 * Just CSS-animated dots with Ocean palette teal accents.
 * Turbopack-safe. Zero JS animation overhead.
 *
 * Optimized: reduced from 80 to 40 particles to cut DOM nodes and
 * animation cost by 50%. CSS containment prevents layout recalc
 * from leaking into the rest of the page.
 */

export function ParticleBackground() {
  // Generate deterministic particle positions — 40 particles (was 80)
  const particles = Array.from({ length: 40 }, (_, i) => {
    const seed = i * 137.508; // golden angle for distribution
    return {
      id: i,
      x: ((seed * 7) % 100),
      y: ((seed * 13) % 100),
      size: 1 + (i % 3),
      delay: (i % 10) * 1,
      duration: 15 + (i % 10) * 3,
      isTeal: i % 3 !== 0,
    };
  });

  return (
    <div
      className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none"
      aria-hidden="true"
      style={{ contain: 'strict', willChange: 'auto' }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(13, 148, 136, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(13, 148, 136, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' /%3E%3C/svg%3E")`,
        }}
      />

      {/* Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.isTeal ? '#0d9488' : '#475569',
            opacity: p.isTeal ? 0.4 : 0.15,
            animation: `particle-drift ${p.duration}s ease-in-out ${p.delay}s infinite`,
            willChange: 'transform',
            contain: 'layout style',
          }}
        />
      ))}
    </div>
  );
}
