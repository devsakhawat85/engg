import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/scEngineeringData';
import { SafeImage } from './SafeImage';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Team', href: '#team' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 border-b ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-[#0A182D]/12 shadow-sm py-2.5'
          : 'bg-white border-[#0A182D]/8 py-3.5'
      }`}
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Lockup (single-line) */}
        <a
          href="#top"
          className="flex items-center gap-3 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F4A8A]"
        >
          <SafeImage
            src="/images/sc-logo.png"
            alt="SC Engineering, LLC logo"
            loading="eager"
            fetchPriority="high"
            className="w-9 h-9 object-contain shrink-0"
          />
          <span className="font-display font-semibold text-[17px] tracking-[-0.02em] text-[#0A182D] whitespace-nowrap">
            {COMPANY_INFO.legalName}
          </span>
        </a>

        {/* Zone 2: Primary Navigation (4-5 concise links, single-line) */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#0A182D]/80"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 whitespace-nowrap shrink-0 hover:text-[#1F4A8A] transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-[#1F4A8A] after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F4A8A]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#0A182D] hover:bg-[#1F4A8A] transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F4A8A]"
          >
            Contact Us
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 text-[#0A182D] border border-[#0A182D]/15 hover:bg-[#F0F4F3] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F4A8A]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden border-t border-[#0A182D]/10 bg-white px-4 sm:px-6 py-5"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col divide-y divide-[#0A182D]/8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="py-3.5 text-base font-medium text-[#0A182D] hover:text-[#1F4A8A] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={COMPANY_INFO.siteLinks.jobs}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="py-3.5 text-base font-medium text-[#0A182D]/80 hover:text-[#1F4A8A] flex items-center justify-between"
            >
              <span>Careers &amp; Apply</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href={COMPANY_INFO.capabilitiesPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="py-3.5 text-base font-medium text-[#0A182D]/80 hover:text-[#1F4A8A] flex items-center justify-between"
            >
              <span>Capabilities Statement (PDF)</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </nav>
          <div className="pt-4 mt-2 border-t border-[#0A182D]/10 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={handleNavClick}
              className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-medium text-white bg-[#0A182D] hover:bg-[#1F4A8A] transition-colors"
            >
              Contact Us
            </a>
            <div className="flex items-center justify-between text-xs text-[#0A182D]/70 pt-1">
              <a href={COMPANY_INFO.phoneHref} className="hover:text-[#0A182D]">
                {COMPANY_INFO.phoneDisplay}
              </a>
              <a href={COMPANY_INFO.emailHref} className="hover:text-[#0A182D]">
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
