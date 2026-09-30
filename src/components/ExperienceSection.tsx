import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="space-y-1">
          <div className="text-xs font-bold uppercase tracking-wider text-[#ccc5b9] font-mono">
            Employment Record From Resume
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 tracking-tight">
            Professional Experience
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-xl">
            Direct responsibilities and engineering accomplishments across production environments at Qualibytes IT and Gsquare Web Technologies.
          </p>
        </div>

        <div className="space-y-5">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              whileHover={{ y: -3, boxShadow: '0 12px 32px -6px rgba(0,0,0,0.10)' }}
              className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-7 shadow-sm space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-gray-100">
                <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">{exp.role}</h3>
                  <span className="text-gray-300 hidden sm:inline">—</span>
                  <span className="text-sm sm:text-base font-semibold text-gray-600 flex items-center space-x-1">
                    <Building2 className="w-3.5 h-3.5 text-[#ccc5b9] inline mr-1" />
                    {exp.company}
                  </span>
                  {exp.badge && (
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-white text-[#ccc5b9] border border-gray-200">
                      {exp.badge}
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-3 text-xs font-mono text-gray-400">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-[#ccc5b9]" />
                    <span>{exp.period}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-[#ccc5b9]" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                {exp.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#ccc5b9] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-gray-100 flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-mono font-bold text-gray-400 mr-1">Technologies:</span>
                {exp.techStack.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 bg-white border border-gray-200 text-gray-600 rounded-md text-[11px] font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
