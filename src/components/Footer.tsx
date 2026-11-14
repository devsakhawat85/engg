import { COMPANY_INFO } from '../data/scEngineeringData';
import { SafeImage } from './SafeImage';

export function Footer() {
  return (
    <footer className="bg-white text-[#0A182D] border-t border-[#0A182D]/12">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Brand Identity */}
          <div className="md:col-span-5">
            <a href="#top" className="inline-flex items-center gap-3">
              <SafeImage
                src="/images/sc-logo.png"
                alt="SC Engineering, LLC logo"
                className="w-10 h-10 object-contain"
              />
              <div>
                <p className="font-display font-semibold text-lg tracking-[-0.02em] text-[#0A182D]">
                  {COMPANY_INFO.legalName}
                </p>
                <p className="text-xs tracking-[0.14em] uppercase text-[#0A182D]/55">
                  {COMPANY_INFO.tagline}
                </p>
              </div>
            </a>

            <p className="mt-5 text-sm leading-[1.65] text-[#0A182D]/72 max-w-sm">
              {COMPANY_INFO.designation}. {COMPANY_INFO.specialtyLine}.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <SafeImage
                src="/images/sdvosb-badge.png"
                alt="SDVOSB Certified"
                className="h-11 w-auto object-contain"
              />
              <SafeImage
                src="/images/footer-badge.png"
                alt="NMSDC Minority Business Enterprise Certified"
                className="h-11 w-auto object-contain"
              />
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-medium tracking-[0.12em] uppercase text-[#0A182D]/55 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-[#0A182D]/80">
              <li>
                <a href="#top" className="hover:text-[#1F4A8A] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#1F4A8A] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.siteLinks.team}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1F4A8A] transition-colors"
                >
                  Meet the Team
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#1F4A8A] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#1F4A8A] transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.siteLinks.jobs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1F4A8A] transition-colors"
                >
                  Careers / Jobs
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.siteLinks.apply}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1F4A8A] transition-colors"
                >
                  Apply
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#1F4A8A] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Resources */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-medium tracking-[0.12em] uppercase text-[#0A182D]/55 mb-4">
              Connect With Us
            </h3>
            <div className="space-y-3 text-sm text-[#0A182D]/80">
              <p>
                {COMPANY_INFO.addressLine1}
                <br />
                {COMPANY_INFO.addressLine2}
              </p>
              <p>
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="font-mono tabular-nums hover:text-[#1F4A8A] transition-colors"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={COMPANY_INFO.emailHref}
                  className="hover:text-[#1F4A8A] transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </p>
              <div className="pt-2">
                <a
                  href={COMPANY_INFO.capabilitiesPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-medium text-[#1F4A8A] hover:text-[#0A182D] underline underline-offset-4 transition-colors"
                >
                  Capabilities Statement (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="mt-12 pt-6 border-t border-[#0A182D]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#0A182D]/60">
          <p>{COMPANY_INFO.copyright}</p>
          <p>
            SC Engineering is an Equal Opportunity / Affirmative Action Employer.
          </p>
        </div>
      </div>
    </footer>
  );
}
