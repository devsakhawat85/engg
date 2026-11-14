import { useEffect, useState } from 'react';
import { ArrowUpRight, Check, X } from 'lucide-react';
import { motion } from 'motion/react';
import {
  COMPANY_INFO,
  PROJECTS_LIST,
  type ProjectCategory,
  type ProjectItem,
} from '../data/scEngineeringData';
import { SafeImage } from './SafeImage';

const FILTER_OPTIONS: ProjectCategory[] = [
  'All',
  'Civic & Sports',
  'Hospitality',
  'Healthcare',
  'Education & Fitness',
];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    if (!activeProject) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveProject(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeProject]);

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS_LIST
      : PROJECTS_LIST.filter((p) => p.category === selectedCategory);

  const leadProject =
    selectedCategory === 'All'
      ? filteredProjects.find((p) => p.featured) ?? filteredProjects[0]
      : filteredProjects[0];

  const supportingProjects = filteredProjects.filter((p) => p.id !== leadProject?.id);

  return (
    <section id="projects" className="bg-white py-20 lg:py-28 border-b border-[#0A182D]/10">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Section Header + Sector Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#0A182D]/12">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#1F4A8A] mb-3">
              Selected Portfolio
            </p>
            <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-[42px] leading-[1.12] tracking-[-0.02em] text-[#0A182D]">
              Current and Completed Engineering Work
            </h2>
            <p className="mt-4 text-base text-[#0A182D]/75 leading-[1.65]">
              Complex MEP, lighting, fire protection, and third-party review solutions delivered
              across commercial, industrial, educational, healthcare, and hospitality sectors.
            </p>
          </div>

          <a
            href={COMPANY_INFO.siteLinks.projects}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1F4A8A] hover:text-[#0A182D] transition-colors whitespace-nowrap shrink-0"
          >
            <span>View full project archive</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        {/* Interactive Sector Filter Controls */}
        <div
          role="tablist"
          aria-label="Filter projects by sector"
          className="mt-8 flex flex-wrap items-center gap-2"
        >
          {FILTER_OPTIONS.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F4A8A] ${
                  isActive
                    ? 'bg-[#0A182D] text-white border-[#0A182D]'
                    : 'bg-[#F8F9F9] text-[#0A182D]/75 border-[#0A182D]/12 hover:border-[#0A182D]/35 hover:text-[#0A182D]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Lead Featured Project */}
        {leadProject && (
          <motion.article
            key={leadProject.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 grid grid-cols-1 lg:grid-cols-12 border border-[#0A182D]/12 bg-[#F8F9F9] group"
          >
            <div className="lg:col-span-7 overflow-hidden bg-[#0A182D] aspect-[16/10] lg:aspect-auto lg:min-h-[420px]">
              <SafeImage
                src={leadProject.image}
                alt={`${leadProject.title} — ${leadProject.location}`}
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
            </div>

            <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between bg-white">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#0A182D]/60 font-medium">
                  <span className="text-[#1F4A8A]">{leadProject.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{leadProject.location}</span>
                  {leadProject.scaleMetric && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">{leadProject.scaleMetric}</span>
                    </>
                  )}
                  {leadProject.status && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#1F4A8A]">{leadProject.status}</span>
                    </>
                  )}
                </div>

                <h3 className="font-display font-semibold text-2xl sm:text-3xl tracking-[-0.02em] text-[#0A182D] mt-4">
                  {leadProject.title}
                </h3>
                <p className="text-sm font-medium text-[#1F4A8A] mt-1">{leadProject.subtitle}</p>

                <p className="text-sm sm:text-[15px] leading-[1.65] text-[#0A182D]/78 mt-5">
                  {leadProject.summary}
                </p>

                <ul className="mt-6 pt-5 border-t border-[#0A182D]/10 space-y-2">
                  {leadProject.scope.slice(0, 2).map((line) => (
                    <li
                      key={line}
                      className="flex items-start gap-2.5 text-sm text-[#0A182D]/80 leading-[1.5]"
                    >
                      <Check
                        className="w-4 h-4 text-[#1F4A8A] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-[#0A182D]/10 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setActiveProject(leadProject)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#0A182D] hover:text-[#1F4A8A] transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F4A8A]"
                >
                  <span>Inspect full engineering scope</span>
                  <ArrowUpRight
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </button>
                <span className="text-xs text-[#0A182D]/45 truncate">
                  Credit: {leadProject.imageCredit}
                </span>
              </div>
            </div>
          </motion.article>
        )}

        {/* Supporting Editorial Grid */}
        {supportingProjects.length > 0 && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportingProjects.map((project, index) => {
              const isWide = selectedCategory === 'All' && index === 0;
              return (
                <article
                  key={project.id}
                  className={`border border-[#0A182D]/12 bg-white flex flex-col justify-between group transition-colors hover:border-[#1F4A8A]/40 ${
                    isWide ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  <div>
                    <div
                      className={`overflow-hidden bg-[#F0F4F3] ${
                        isWide ? 'aspect-[16/8]' : 'aspect-[4/3]'
                      }`}
                    >
                      <SafeImage
                        src={project.image}
                        alt={`${project.title} — ${project.location}`}
                        className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
                    </div>

                    <div className="p-6">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-[#0A182D]/60">
                        <span className="text-[#1F4A8A] font-medium">{project.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.location}</span>
                        {project.scaleMetric && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="font-mono tabular-nums">{project.scaleMetric}</span>
                          </>
                        )}
                        {project.status && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="text-[#1F4A8A] font-medium">{project.status}</span>
                          </>
                        )}
                      </div>

                      <h3 className="font-display font-semibold text-xl text-[#0A182D] mt-3">
                        {project.title}
                      </h3>
                      <p className="text-xs font-medium text-[#0A182D]/65 mt-0.5">
                        {project.subtitle}
                      </p>

                      <p className="text-sm leading-[1.6] text-[#0A182D]/78 mt-3 line-clamp-3">
                        {project.summary}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 py-4 border-t border-[#0A182D]/10 flex items-center justify-between gap-4 bg-[#F8F9F9]">
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0A182D] hover:text-[#1F4A8A] transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F4A8A]"
                    >
                      <span>Project Scope</span>
                      <ArrowUpRight
                        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </button>
                    <span className="text-xs text-[#0A182D]/45 truncate">
                      {project.imageCredit}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>

      {/* Project Engineering Scope Modal */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0A182D]/75 backdrop-blur-xs"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-[#0A182D]/20 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] w-full bg-[#0A182D] overflow-hidden">
              <SafeImage
                src={activeProject.image}
                alt={`${activeProject.title} — ${activeProject.location}`}
                className="w-full h-full object-cover object-center"
              />
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                aria-label="Close project details"
                className="absolute top-4 right-4 w-10 h-10 bg-white text-[#0A182D] hover:bg-[#0A182D] hover:text-white transition-colors flex items-center justify-center cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#0A182D]/60 font-medium">
                <span className="text-[#1F4A8A]">{activeProject.category}</span>
                <span aria-hidden="true">·</span>
                <span>{activeProject.location}</span>
                {activeProject.scaleMetric && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">{activeProject.scaleMetric}</span>
                  </>
                )}
                {activeProject.status && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#1F4A8A]">{activeProject.status}</span>
                  </>
                )}
              </div>

              <h3
                id="project-modal-title"
                className="font-display font-semibold text-2xl sm:text-3xl text-[#0A182D] mt-3"
              >
                {activeProject.title}
              </h3>
              <p className="text-sm font-medium text-[#1F4A8A] mt-1">{activeProject.subtitle}</p>

              <p className="text-sm sm:text-base leading-[1.65] text-[#0A182D]/80 mt-4">
                {activeProject.summary}
              </p>

              <div className="mt-6 pt-6 border-t border-[#0A182D]/10">
                <h4 className="text-xs font-medium tracking-[0.12em] uppercase text-[#0A182D]/60 mb-4">
                  Key Scope of Work
                </h4>
                <ul className="space-y-3">
                  {activeProject.scope.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-[1.6] text-[#0A182D]/85"
                    >
                      <Check
                        className="w-4 h-4 text-[#1F4A8A] shrink-0 mt-1"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-5 border-t border-[#0A182D]/10 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-[#0A182D]/50">
                  Image Credit: {activeProject.imageCredit}
                </span>
                <a
                  href="#contact"
                  onClick={() => setActiveProject(null)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#0A182D] hover:bg-[#1F4A8A] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Inquire About Similar Work</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
