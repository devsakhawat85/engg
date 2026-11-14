import { ArrowRight, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { COMPANY_INFO, LICENSED_STATES } from '../data/scEngineeringData';
import { SafeImage } from './SafeImage';

export function Hero() {
  return (
    <section
      id="top"
      className="relative w-full min-h-[600px] lg:min-h-[700px] flex items-end bg-[#0A182D] text-white overflow-hidden"
    >
      {/* Existing SC Engineering Facility Photography */}
      <div className="absolute inset-0">
        <SafeImage
          src="/images/hero-facility.jpg"
          alt="Engineered industrial facility with exposed steel roof trusses, mechanical systems, and high-bay lighting"
          loading="eager"
          fetchPriority="high"
          className="w-full h-full object-cover object-center"
        />
        {/* Measured architectural scrim for >= 7:1 text contrast */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#0A182D]/94 via-[#0A182D]/82 to-[#0A182D]/48"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#0A182D] via-transparent to-[#0A182D]/30"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-full mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:pb-16 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="text-xs sm:text-sm font-medium tracking-[0.14em] uppercase text-[#A2BFEA] mb-4">
            Consulting Engineers · Nashville, Tennessee
          </p>

          <h1 className="font-display font-semibold tracking-[-0.025em] leading-[1.08] text-[clamp(2.25rem,4.5vw,3.75rem)] text-white mb-6">
            Service-Disabled Veteran-Owned Engineering Design
          </h1>

          <p className="text-base sm:text-lg leading-[1.65] text-white/85 max-w-2xl mb-8">
            {COMPANY_INFO.specialtyLine}. Cost-effective, efficient, and client-centered engineering
            for commercial, industrial, educational, healthcare, and hospitality environments.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-medium text-[#0A182D] bg-white hover:bg-[#A2BFEA] transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span>Connect With Us</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>

            <a
              href={COMPANY_INFO.capabilitiesPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-white border border-white/30 hover:border-white hover:bg-white/10 transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <FileText className="w-4 h-4 text-[#A2BFEA]" aria-hidden="true" />
              <span>Capabilities Statement</span>
            </a>
          </div>
        </motion.div>

        {/* Architectural Baseline Strip (Authentic firm markers only, no pills) */}
        <div className="mt-12 lg:mt-16 pt-6 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
          <div>
            <p className="text-white/60 text-xs mb-1">Founded</p>
            <p className="font-mono tabular-nums font-medium text-white">
              {COMPANY_INFO.foundedYear} · Nashville, TN
            </p>
          </div>
          <div>
            <p className="text-white/60 text-xs mb-1">Federal Designation</p>
            <p className="font-medium text-white">SDVOSB Certified</p>
          </div>
          <div>
            <p className="text-white/60 text-xs mb-1">National Reach</p>
            <p className="font-mono tabular-nums font-medium text-white">
              {LICENSED_STATES.length} Licensed PE States
            </p>
          </div>
          <div>
            <p className="text-white/60 text-xs mb-1">Direct Inquiries</p>
            <a
              href={COMPANY_INFO.phoneHref}
              className="font-mono tabular-nums font-medium text-[#A2BFEA] hover:text-white transition-colors"
            >
              {COMPANY_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
