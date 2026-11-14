import { motion } from 'motion/react';
import { SafeImage } from './SafeImage';

export function ArchitecturalBanner() {
  return (
    <section className="relative w-full h-[420px] sm:h-[480px] bg-[#0A182D] text-white overflow-hidden">
      <SafeImage
        src="/images/services-architecture.jpg"
        alt="Modern architectural building facade illuminated by warm natural light"
        className="w-full h-full object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#0A182D]/90 via-[#0A182D]/55 to-[#0A182D]/35"
      />

      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto max-w-[1280px] w-full px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#A2BFEA] mb-3">
              Built Environment Precision
            </p>
            <h2 className="font-display font-semibold text-2xl sm:text-3xl lg:text-4xl leading-[1.2] tracking-[-0.02em] text-white">
              Adapting complex engineering solutions to diverse environments—from modernizing
              1950s historic structures to designing sterile surgical suites and massive civic
              developments.
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
