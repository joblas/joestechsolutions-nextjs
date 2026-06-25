import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0d0d12] border-t border-white/10" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4 font-space-grotesk">Joe&apos;s Tech Solutions</h3>
            <p className="text-white/60 text-sm max-w-md leading-relaxed">
              Custom apps, automation, and AI tools. Built on the same stack I run for my own business.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/private-ai-setup" className="text-white/60 hover:text-[#0d9488] text-sm transition-colors">
                  The Quick Start
                </Link>
              </li>
              <li>
                <Link href="/services#agent-systems" className="text-white/60 hover:text-[#0d9488] text-sm transition-colors">
                  Multi-agent Systems
                </Link>
              </li>
              <li>
                <Link href="/services#custom-app" className="text-white/60 hover:text-[#0d9488] text-sm transition-colors">
                  Custom App Build
                </Link>
              </li>
              <li>
                <Link href="/whisper-walkie" className="text-white/60 hover:text-[#2dd4bf] text-sm transition-colors">
                  Whisper Walkie
                  <span className="ml-1.5 text-[10px] text-[#2dd4bf]/70">FREE</span>
                </Link>
              </li>
              <li>
                <Link href="/stack" className="text-white/60 hover:text-[#0d9488] text-sm transition-colors">
                  The Stack
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/60 hover:text-[#0d9488] text-sm transition-colors">
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/portfolio" className="text-white/60 hover:text-[#0d9488] text-sm transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-[#0d9488] text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-[#0d9488] text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-center text-white/50 text-sm">
            © {currentYear} Joe&apos;s Tech Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
