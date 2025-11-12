import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0d0d12] border-t border-white/10" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4 font-space-grotesk">Joe's Tech Solutions</h3>
            <p className="text-white/60 text-sm max-w-md leading-relaxed">
              Boutique development studio specializing in mobile apps, web platforms,
              and private AI infrastructure for ambitious SMBs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services#mobile" className="text-white/60 hover:text-[#0099ff] text-sm transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services#web" className="text-white/60 hover:text-[#0099ff] text-sm transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services#ai" className="text-white/60 hover:text-[#0099ff] text-sm transition-colors">
                  AI Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/services#consulting" className="text-white/60 hover:text-[#0099ff] text-sm transition-colors">
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/portfolio" className="text-white/60 hover:text-[#0099ff] text-sm transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/60 hover:text-[#0099ff] text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/60 hover:text-[#0099ff] text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-center text-white/50 text-sm">
            © {currentYear} Joe's Tech Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
