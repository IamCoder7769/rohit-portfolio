import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code,
  Layers,
  Server,
  Shield,
  Database,
  Radio,
  Wrench,
  ShoppingBag,
  Search,
  Check,
  Sparkles,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterCategories = [
    { key: 'all', label: 'All Disciplines' },
    { key: 'frontend', label: 'Frontend & UI' },
    { key: 'backend', label: 'Backend & APIs' },
    { key: 'databases', label: 'Databases & ORM' },
    { key: 'realtime', label: 'Real-Time & Security' },
    { key: 'tools', label: 'Tools & DevOps' },
  ];

  const getCategoryIcon = (key: string) => {
    switch (key) {
      case 'languages':
        return Code;
      case 'frontend':
        return Layers;
      case 'backend':
        return Server;
      case 'auth_security':
        return Shield;
      case 'databases':
        return Database;
      case 'realtime':
        return Radio;
      case 'tools':
        return Wrench;
      case 'cms':
        return ShoppingBag;
      default:
        return Code;
    }
  };

  const filteredCategories = SKILL_CATEGORIES.filter((cat) => {
    if (activeFilter === 'frontend') return cat.categoryKey === 'frontend' || cat.categoryKey === 'languages';
    if (activeFilter === 'backend') return cat.categoryKey === 'backend' || cat.categoryKey === 'languages';
    if (activeFilter === 'databases') return cat.categoryKey === 'databases';
    if (activeFilter === 'realtime') return cat.categoryKey === 'realtime' || cat.categoryKey === 'auth_security';
    if (activeFilter === 'tools') return cat.categoryKey === 'tools' || cat.categoryKey === 'cms';
    return true;
  }).map((cat) => {
    if (!searchQuery.trim()) return cat;
    const filteredSkills = cat.skills.filter((skill) =>
      skill.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );
    return { ...cat, skills: filteredSkills };
  }).filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-14 sm:py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-800 font-mono bg-emerald-50 px-3 py-1 rounded-full border border-emerald-300 shadow-2xs">
              <Sparkles className="w-3 h-3 text-emerald-600" />
              <span>Full Stack Arsenal</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
              Technical Competencies
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 max-w-xl">
              Production-hardened technologies utilized across customer-facing applications, enterprise SaaS platforms, and distributed microservices.
            </p>
          </div>

          {/* Quick Skill Search */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              id="skill-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. Next.js, Prisma, Redis)..."
              className="w-full pl-10 pr-10 py-2.5 bg-white border border-zinc-200/90 rounded-xl text-xs text-zinc-800 placeholder-zinc-400 focus:outline-hidden focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-zinc-800 font-semibold"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Filter Pills with animated background tab */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          {filterCategories.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`relative px-3.5 py-1.5 rounded-xl whitespace-nowrap transition-all font-semibold ${
                activeFilter === filter.key
                  ? 'text-white shadow-xs'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200/80 hover:text-zinc-900'
              }`}
            >
              {activeFilter === filter.key && (
                <motion.div
                  layoutId="activeSkillFilterPill"
                  className="absolute inset-0 bg-zinc-950 rounded-xl -z-10 shadow-xs"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              {filter.label}
            </button>
          ))}
        </div>

        {/* Categories Grid with animations */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence>
            {filteredCategories.map((cat, idx) => {
              const Icon = getCategoryIcon(cat.categoryKey);
              return (
                <motion.div
                  layout
                  key={cat.categoryKey}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white rounded-2xl border border-zinc-200/90 p-5 sm:p-6 shadow-xs hover:border-zinc-400 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
                      <div className="flex items-center space-x-2.5">
                        <div className="w-8 h-8 rounded-xl bg-zinc-100 group-hover:bg-zinc-950 group-hover:text-white transition-colors flex items-center justify-center text-zinc-700">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="text-sm font-bold text-zinc-950">
                          {cat.title}
                        </h3>
                      </div>
                      <span className="text-[11px] font-mono text-zinc-400 font-medium">
                        {cat.skills.length} techs
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cat.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          whileHover={{ scale: 1.05 }}
                          className="px-2.5 py-1 bg-zinc-50 hover:bg-zinc-100 text-zinc-800 rounded-lg text-xs font-semibold border border-zinc-200/80 transition-colors shadow-2xs cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
