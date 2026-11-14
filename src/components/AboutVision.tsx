import { motion } from 'motion/react';
import { VISION_COPY } from '../data/scEngineeringData';
import { SafeImage } from './SafeImage';

export function AboutVision() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28 border-b border-[#0A182D]/10">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Asymmetric Editorial Top Row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start"
        >
          {/* Left Column: Statement & Official Recognition Badges */}
          <div className="lg:col-span-5">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#1F4A8A] mb-4">
              Our Vision &amp; Values
            </p>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-[1.15] tracking-[-0.02em] text-[#0A182D]">
              {VISION_COPY.heading}
            </h2>

            {/* Authentic SDVOSB + MBE Certification Emblems */}
            <div className="mt-8 pt-8 border-t border-[#0A182D]/10 flex flex-wrap items-center gap-6">
              <div className="bg-[#F8F9F9] border border-[#0A182D]/10 px-4 py-3 flex items-center justify-center">
                <SafeImage
                  src="/images/sdvosb-badge.png"
                  alt="SC Engineering Service-Disabled Veteran-Owned Small Business CVE certification"
                  className="h-14 w-auto object-contain"
                />
              </div>
              <div className="bg-[#F8F9F9] border border-[#0A182D]/10 px-4 py-3 flex items-center justify-center">
                <SafeImage
                  src="/images/footer-badge.png"
                  alt="NMSDC Certified Minority Business Enterprise (MBE)"
                  className="h-14 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Vision & Firm Prose */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-[17px] leading-[1.7] text-[#0A182D]/82">
            {VISION_COPY.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            {/* Three Core Values Grid (Unboxed Architectural Typographic Dividers) */}
            <div className="pt-6 mt-8 border-t border-[#0A182D]/12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <p className="font-mono text-xs text-[#1F4A8A] mb-1 tabular-nums">01</p>
                <p className="font-display font-semibold text-lg text-[#0A182D]">Honesty</p>
                <p className="text-sm text-[#0A182D]/70 mt-1">
                  Transparent engineering counsel across every budget and schedule.
                </p>
              </div>
              <div>
                <p className="font-mono text-xs text-[#1F4A8A] mb-1 tabular-nums">02</p>
                <p className="font-display font-semibold text-lg text-[#0A182D]">Dedication</p>
                <p className="text-sm text-[#0A182D]/70 mt-1">
                  Going above and beyond to meet client expectations on time.
                </p>
              </div>
              <div>
                <p className="font-mono text-xs text-[#1F4A8A] mb-1 tabular-nums">03</p>
                <p className="font-display font-semibold text-lg text-[#0A182D]">Hard Work</p>
                <p className="text-sm text-[#0A182D]/70 mt-1">
                  Hands-on multi-disciplinary execution using the latest technology.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Asymmetric Visual Composition Below */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 lg:mt-20 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch"
        >
          <div className="md:col-span-7 overflow-hidden bg-[#F0F4F3] aspect-[16/10] md:aspect-auto md:h-[380px]">
            <SafeImage
              src="/images/about-team.jpg"
              alt="SC Engineering engineers collaborating over backlit technical blueprints"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="md:col-span-5 overflow-hidden bg-[#F0F4F3] aspect-[4/3] md:aspect-auto md:h-[380px] border border-[#0A182D]/10">
            <SafeImage
              src="/images/services-detail.jpg"
              alt="MEP and architectural CAD construction drawing plans"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
