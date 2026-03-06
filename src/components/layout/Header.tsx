"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Private AI", href: "/private-ai-setup" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0d0d12]/95 backdrop-blur-md border-b border-white/10" role="banner">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo-icon.png"
                alt="Joe's Tech Solutions"
                width={48}
                height={48}
                className="transition-transform group-hover:scale-105 rounded-lg"
              />
              <span className="text-lg font-bold text-white group-hover:text-[#0EA5E9] transition-colors font-space-grotesk hidden sm:inline">
                Joe's Tech Solutions
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navigation.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`transition-colors text-sm font-medium ${
                      isActive
                        ? "text-[#0EA5E9]"
                        : "text-white/70 hover:text-[#0EA5E9]"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Link href="/private-ai-setup">
                <Button size="sm" className="bg-[#0EA5E9] hover:bg-[#0284c7] text-white rounded-full shadow-lg shadow-[#0EA5E9]/20">
                  Get Private AI
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white/70 hover:text-[#0EA5E9]"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div id="mobile-navigation" className="md:hidden py-4 space-y-2" role="navigation" aria-label="Mobile navigation menu">
            {navigation.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-4 py-2 rounded transition-colors min-h-[44px] ${
                    isActive
                      ? "text-[#0EA5E9] bg-white/5"
                      : "text-white/70 hover:text-[#0EA5E9] hover:bg-white/5"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="px-4 pt-2">
              <Link href="/private-ai-setup" className="block" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-[#0EA5E9] hover:bg-[#0284c7] text-white rounded-full min-h-[44px] shadow-lg shadow-[#0EA5E9]/20">
                  Get Private AI
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
