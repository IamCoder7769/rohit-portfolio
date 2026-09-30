import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import { ProjectMockup } from './ProjectMockup';
import { ProjectModal } from './ProjectModal';
import { triggerSubtleSparks } from '../utils/confetti';

export const ProjectsSection: React.FC = () => {
  const [modalProject, setModalProject] = useState<ProjectItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'SaaS & Real-Time', 'Full Stack', 'E-Commerce', 'CRM', 'Marketplace', 'FinTech'];

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.toLowerCase().includes(activeCategory.toLowerCase()));

  const handleCardClick = (project: ProjectItem) => {
    setModalProject(project);
    triggerSubtleSparks(0.5, 0.4);
  };

  return (
    <section id="projects" className="py-8 sm:py-14 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-200 pb-6">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-[#ccc5b9] font-mono">
              Selected Production Work • Direct From Resume
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">Key Featured Projects</h2>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Click any project card to open full architectural deep dive, tech stack specifications, and production accomplishments.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#ccc5b9] text-gray-900 shadow-sm'
                      : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              id={`project-card-${project.id}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: idx * 0.05 }}
              onClick={() => handleCardClick(project)}
              className="bg-white rounded-2xl border border-gray-200 hover:border-[#ccc5b9] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div className="relative h-44 sm:h-48 overflow-hidden bg-zinc-950 border-b border-gray-200 select-none">
                <ProjectMockup project={project} />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-[#0F172A] shadow-md flex items-center space-x-1">
                    <span>Click to view details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center text-[10px] font-mono font-bold uppercase tracking-wider bg-white text-[#ccc5b9] px-2.5 py-0.5 rounded-md border border-gray-200">
                      {project.category}
                    </span>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center space-x-1 text-[11px] font-semibold text-[#ccc5b9] hover:underline shrink-0"
                      >
                        <span>Live Site</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#ccc5b9] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-xs text-gray-500 font-medium mt-0.5">{project.subtitle}</p>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">{project.description[0]}</p>
                </div>

                <div className="space-y-3 pt-3 border-t border-gray-200">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded text-[11px] bg-white text-[#ccc5b9] border border-gray-200 font-mono">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] bg-white text-[#ccc5b9] border border-gray-200 font-mono font-semibold">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between pt-2 text-xs font-bold text-[#ccc5b9]">
                    <span className="text-[11px] font-mono text-gray-500">
                      {project.metrics?.[0]?.value || 'Production Platform'}
                    </span>
                    <div className="flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
    </section>
  );
};

