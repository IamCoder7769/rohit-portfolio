import React from 'react';
import { motion } from 'motion/react';
import { Code2, Layout, Server, ShieldCheck, Database, Radio, Wrench, Sparkles, Cloud, Activity } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const TechnicalSkillsGrid: React.FC = () => {
  const categoryIcons: Record<string, React.ElementType> = {
    languages: Code2, frontend: Layout, backend: Server, databases: Database,
    messaging: Radio, ai: Sparkles, devops: Cloud, monitoring: Activity,
    security: ShieldCheck, tools: Wrench,
  };

  return (
    <section id="technical-skills" className="py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="space-y-1">
          <div className="text-xs font-bold uppercase tracking-wider text-[#ccc5b9] font-mono">From My Resume • Technical Proficiency</div>
          <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 tracking-tight">Technical Skills Inventory</h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-xl">Categorization of programming languages, frontend and backend microservices, distributed messaging, Generative AI, databases, and DevOps orchestration.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = categoryIcons[cat.categoryKey] || Code2;
            return (
              <motion.div
                key={cat.categoryKey}
                whileHover={{ y: -3, boxShadow: '0 12px 32px -6px rgba(0,0,0,0.10)' }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-[#ccc5b9]">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="text-xs font-bold text-gray-900">{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cat.skills.map((skill) => (
                      <span key={skill} className="px-2 py-0.5 bg-white border border-gray-200 text-gray-600 rounded-md text-[11px] font-mono">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-[10px] font-mono text-gray-400 pt-2 border-t border-gray-100">
                  {cat.skills.length} competencies
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
