import { useState } from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import {
  COMPANY_INFO,
  HOLA_AWARD,
  LEADERSHIP_TEAM,
  LICENSED_STATES,
} from '../data/scEngineeringData';
import { SafeImage } from './SafeImage';

export function CredentialsSection() {
  const [showMapImage, setShowMapImage] = useState(false);

  return (
    <section id="credentials" className="bg-[#F8F9F9] py-20 lg:py-28 border-b border-[#0A182D]/10">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Part 1: HOLA Award Recognition + Official Certifications & Contracting Codes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Certifications & Federal Contracting Codes */}
          <div className="lg:col-span-7">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#1F4A8A] mb-3">
              Credentials &amp; Qualifications
            </p>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-[1.15] tracking-[-0.02em] text-[#0A182D]">
              Certified Veteran-Owned Engineering Authority
            </h2>
            <p className="mt-4 text-base leading-[1.65] text-[#0A182D]/78 max-w-2xl">
              SC Engineering, LLC maintains federal, state, and municipal certifications alongside
              registered Professional Engineer (P.E.) licensure across {LICENSED_STATES.length} U.S.
              states.
            </p>

            {/* Certifications Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {COMPANY_INFO.certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="bg-white border border-[#0A182D]/12 p-5"
                >
                  <p className="font-display font-semibold text-base text-[#0A182D]">
                    {cert.title}
                  </p>
                  <p className="text-sm text-[#0A182D]/70 mt-1">{cert.detail}</p>
                </div>
              ))}
            </div>

            {/* Company Codes (Tabular Monospace) */}
            <div className="mt-6 bg-white border border-[#0A182D]/12 p-6">
              <p className="text-xs font-medium tracking-[0.12em] uppercase text-[#0A182D]/55 mb-4">
                Company Procurement &amp; Registry Codes
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                {COMPANY_INFO.codes.map((code) => (
                  <div key={code.label}>
                    <p className="text-xs text-[#0A182D]/55 mb-1">{code.label}</p>
                    <p className="font-mono tabular-nums text-sm font-medium text-[#0A182D]">
                      {code.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: HOLA Latino Entrepreneur Business Award Spotlight */}
          <div className="lg:col-span-5 bg-white border border-[#0A182D]/12 overflow-hidden">
            <div className="aspect-[4/5] max-h-[380px] w-full overflow-hidden bg-[#0A182D]">
              <SafeImage
                src={HOLA_AWARD.image}
                alt="Saul Camarena accepting the HOLA Latino Entrepreneur Business Award for Company to Watch"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-6 sm:p-7">
              <div className="flex items-center gap-2 text-xs font-medium text-[#1F4A8A]">
                <span>Recognition</span>
                <span aria-hidden="true">·</span>
                <span>{HOLA_AWARD.badge}</span>
              </div>
              <h3 className="font-display font-semibold text-xl text-[#0A182D] mt-2">
                {HOLA_AWARD.title}
              </h3>
              <p className="text-sm leading-[1.65] text-[#0A182D]/78 mt-3">
                {HOLA_AWARD.description}
              </p>
            </div>
          </div>
        </div>

        {/* Part 2: 23 Licensed PE States */}
        <div className="pt-16 border-t border-[#0A182D]/12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
            <div>
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#1F4A8A] mb-2">
                Multi-State Licensure
              </p>
              <h3 className="font-display font-semibold text-2xl sm:text-3xl tracking-[-0.02em] text-[#0A182D]">
                Licensed &amp; Registered in {LICENSED_STATES.length} States
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowMapImage(false)}
                className={`px-4 py-2 text-xs font-medium border transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  !showMapImage
                    ? 'bg-[#0A182D] text-white border-[#0A182D]'
                    : 'bg-white text-[#0A182D]/75 border-[#0A182D]/15 hover:text-[#0A182D]'
                }`}
              >
                State Directory
              </button>
              <button
                type="button"
                onClick={() => setShowMapImage(true)}
                className={`px-4 py-2 text-xs font-medium border transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  showMapImage
                    ? 'bg-[#0A182D] text-white border-[#0A182D]'
                    : 'bg-white text-[#0A182D]/75 border-[#0A182D]/15 hover:text-[#0A182D]'
                }`}
              >
                US Coverage Map
              </button>
            </div>
          </div>

          {showMapImage ? (
            <div className="bg-white border border-[#0A182D]/12 p-6 sm:p-8 flex flex-col items-center">
              <SafeImage
                src="/images/us-pe-map.jpg"
                alt="United States map showing 23 states where SC Engineering is licensed and registered to practice"
                className="max-w-3xl w-full h-auto object-contain"
              />
              <p className="text-xs text-[#0A182D]/60 mt-4">
                Active Professional Engineer (P.E.) registration map across {LICENSED_STATES.length}{' '}
                jurisdictions.
              </p>
            </div>
          ) : (
            <div className="bg-white border border-[#0A182D]/12 p-6 sm:p-8 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-y-4 gap-x-6">
              {LICENSED_STATES.map((st) => (
                <div
                  key={st.abbr}
                  className="flex items-center gap-2.5 text-sm text-[#0A182D]/85"
                >
                  <span className="font-mono text-xs font-medium text-[#1F4A8A] tabular-nums w-6">
                    {st.abbr}
                  </span>
                  <span>{st.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Part 3: Leadership & Engineering Team */}
        <div id="team" className="pt-16 border-t border-[#0A182D]/12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#1F4A8A] mb-2">
                Leadership
              </p>
              <h3 className="font-display font-semibold text-2xl sm:text-3xl tracking-[-0.02em] text-[#0A182D]">
                Hands-On Engineering &amp; Operational Leadership
              </h3>
            </div>
            <div className="flex items-center gap-5 shrink-0">
              <a
                href={COMPANY_INFO.siteLinks.team}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1F4A8A] hover:text-[#0A182D] transition-colors whitespace-nowrap"
              >
                <span>Meet the Full Team</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={COMPANY_INFO.siteLinks.jobs}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0A182D]/75 hover:text-[#0A182D] transition-colors whitespace-nowrap"
              >
                <span>Careers</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LEADERSHIP_TEAM.map((leader) => (
              <div
                key={leader.name}
                className="bg-white border border-[#0A182D]/12 p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <p className="text-xs font-medium text-[#1F4A8A]">{leader.role}</p>
                  <h4 className="font-display font-semibold text-xl text-[#0A182D] mt-1.5">
                    {leader.name}
                  </h4>
                  <p className="text-sm leading-[1.65] text-[#0A182D]/78 mt-3">{leader.bio}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#0A182D]/10 flex items-center gap-1.5 text-xs text-[#0A182D]/55">
                  <MapPin className="w-3.5 h-3.5 text-[#1F4A8A]" aria-hidden="true" />
                  <span>Nashville Headquarters</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
