import Link from 'next/link';

interface BlogCTAProps {
  variant?: 'newsletter' | 'consultation' | 'both';
}

export function BlogCTA({ variant = 'both' }: BlogCTAProps) {
  return (
    <div className="my-12 space-y-6">
      {(variant === 'newsletter' || variant === 'both') && (
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-primary/10 to-primary/5 p-6 text-center">
          <h3 className="text-xl font-semibold text-white mb-2">
            Stay Updated
          </h3>
          <p className="text-white/70 mb-4">
            Get the latest AI guides and insights delivered to your inbox.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-white hover:bg-primary/90 transition-colors"
          >
            Subscribe to Updates
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      )}

      {(variant === 'consultation' || variant === 'both') && (
        <div className="rounded-xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 p-6 text-center">
          <h3 className="text-xl font-semibold text-white mb-2">
            Need Help With AI?
          </h3>
          <p className="text-white/70 mb-4">
            Book a free consultation to discuss your AI and automation needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-emerald-500/90 transition-colors"
          >
            Book a Consultation
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
}
