import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_INFO, SERVICES_LIST } from '../data/scEngineeringData';
import { SafeImage } from './SafeImage';

export function ServicesSection() {
  const [activeId, setActiveId] = useState<string>(SERVICES_LIST[0].id);
  const activeService = SERVICES_LIST.find((s) => s.id === activeId) ?? SERVICES_LIST[0];

  return (
    <section id="services" className="bg-[#F8F9F9] py-20 lg:py-28 border-b border-[#0A182D]/10">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-[#0A182D]/12">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#1F4A8A] mb-3">
              Services &amp; Disciplines
            </p>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-[42px] leading-[1.12] tracking-[-0.02em] text-[#0A182D]">
              Comprehensive Multi-Disciplinary Building Systems Engineering
            </h2>
          </div>
          <a
            href={COMPANY_INFO.siteLinks.services}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1F4A8A] hover:text-[#0A182D] transition-colors whitespace-nowrap shrink-0"
          >
            <span>Explore full services directory</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        {/* Interactive Editorial Index + Sticky Inspection Panel */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left 7 Columns: Numbered Service Rows */}
          <div className="lg:col-span-7 divide-y divide-[#0A182D]/12 border-b border-[#0A182D]/12">
            {SERVICES_LIST.map((service) => {
              const isSelected = service.id === activeId;
              return (
                <div key={service.id}>
                  <button
                    type="button"
                    onClick={() => setActiveId(service.id)}
                    onMouseEnter={() => setActiveId(service.id)}
                    aria-expanded={isSelected}
                    className={`w-full text-left py-5 sm:py-6 px-4 -mx-4 transition-colors duration-150 flex items-start justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F4A8A] ${
                      isSelected ? 'bg-white' : 'hover:bg-white/60'
                    }`}
                  >
                    <div className="flex items-baseline gap-4 sm:gap-6 min-w-0">
                      <span
                        className={`font-mono text-sm tabular-nums shrink-0 transition-colors ${
                          isSelected ? 'text-[#1F4A8A] font-medium' : 'text-[#0A182D]/45'
                        }`}
                      >
                        {service.number}.
                      </span>
                      <div className="min-w-0">
                        <h3
                          className={`font-display font-semibold text-xl sm:text-2xl tracking-[-0.015em] transition-colors ${
                            isSelected ? 'text-[#0A182D]' : 'text-[#0A182D]/80'
                          }`}
                        >
                          {service.title}
                        </h3>
                        <p className="mt-2 text-sm sm:text-[15px] leading-[1.6] text-[#0A182D]/72 max-w-xl">
                          {service.summary}
                        </p>

                        {/* Mobile inline capabilities reveal */}
                        {isSelected && (
                          <ul className="mt-4 space-y-1.5 lg:hidden">
                            {service.capabilities.map((cap) => (
                              <li
                                key={cap}
                                className="flex items-start gap-2 text-sm text-[#0A182D]/85"
                              >
                                <Check
                                  className="w-4 h-4 text-[#1F4A8A] shrink-0 mt-0.5"
                                  aria-hidden="true"
                                />
                                <span>{cap}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>

                    <span
                      aria-hidden="true"
                      className={`mt-1.5 shrink-0 text-xs font-mono transition-transform duration-200 ${
                        isSelected
                          ? 'text-[#1F4A8A] translate-x-0.5'
                          : 'text-[#0A182D]/35'
                      }`}
                    >
                      →
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Right 5 Columns: Sticky Architectural Detail Spotlight */}
          <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-24">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0.75, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-[#0A182D]/12 overflow-hidden"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#0A182D]">
                <SafeImage
                  src={activeService.image}
                  alt={activeService.imageAlt}
                  className="w-full h-full object-cover object-center transition-transform duration-500"
                />
              </div>

              <div className="p-7">
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#0A182D]/10">
                  <span className="font-mono text-xs tracking-wider text-[#1F4A8A] tabular-nums">
                    DISCIPLINE {activeService.number} / 08
                  </span>
                  <span className="text-xs text-[#0A182D]/55">SC Engineering, LLC</span>
                </div>

                <h3 className="font-display font-semibold text-2xl text-[#0A182D] mt-5">
                  {activeService.title}
                </h3>

                <p className="text-sm leading-[1.65] text-[#0A182D]/78 mt-3">
                  {activeService.summary}
                </p>

                <ul className="mt-6 pt-5 border-t border-[#0A182D]/10 space-y-2.5">
                  {activeService.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2.5 text-sm text-[#0A182D]/85">
                      <Check
                        className="w-4 h-4 text-[#1F4A8A] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 pt-5 border-t border-[#0A182D]/10">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#0A182D] hover:text-[#1F4A8A] transition-colors"
                  >
                    <span>Discuss {activeService.title.toLowerCase()} scope</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
