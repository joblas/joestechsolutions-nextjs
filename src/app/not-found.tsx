import Link from 'next/link';
import { FadeIn } from '@/components/animations/FadeIn';

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-linear-to-br from-[#0A1628] via-[#0d0d12] to-[#0d0d12]" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary rounded-full blur-[120px] animate-glow" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <div className="text-9xl font-bold text-white/10 mb-4 font-space-grotesk">
                404
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 font-space-grotesk">
                Page Not Found
              </h1>
              <p className="text-xl text-white/60 max-w-lg mx-auto mb-8">
                Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Back to Home
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
