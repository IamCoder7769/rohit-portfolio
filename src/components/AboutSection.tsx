import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github } from 'lucide-react';
import { CANDIDATE_PROFILE, EXPERIENCES } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-6 sm:py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Card 1: Profile */}
          <motion.div
            whileHover={{ y: -4, boxShadow: '0 16px 40px -8px rgba(0,0,0,0.13)' }}
            transition={{ duration: 0.2 }}
            className="md:col-span-4 bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 shadow-sm flex flex-col justify-between relative group"
          >
            <div className="relative h-[420px] overflow-hidden">
              <img
                src="/src/assets/images/IMG-20240110-WA0168.jpg"
                alt={`${CANDIDATE_PROFILE.name} - ${CANDIDATE_PROFILE.title}`}
                className="w-full h-auto object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent" />
            </div>
            <div className="p-5 pt-0 space-y-3 relative z-10">
              <div className="space-y-0.5">
                <div className="text-sm font-bold text-white">{CANDIDATE_PROFILE.name}</div>
                <div className="text-xs text-gray-400 font-mono">{CANDIDATE_PROFILE.title}</div>
              </div>
              <div className="pt-2 border-t border-gray-700 flex items-center justify-between">
                <a
                  href={CANDIDATE_PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono font-medium text-gray-300 hover:text-white flex items-center space-x-1 transition-colors"
                >
                  <Github className="w-3.5 h-3.5 mr-1" />
                  <span>GitHub: {CANDIDATE_PROFILE.githubHandle}</span>
                  <ArrowUpRight className="w-3 h-3 ml-0.5" />
                </a>
                <span className="text-[10px] font-mono text-gray-400">{CANDIDATE_PROFILE.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Summary */}
          <motion.div
            whileHover={{ y: -4, boxShadow: '0 16px 40px -8px rgba(0,0,0,0.10)' }}
            transition={{ duration: 0.2 }}
            className="md:col-span-5 bg-white rounded-2xl p-7 border border-gray-200 shadow-sm flex flex-col justify-between space-y-5"
          >
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#ccc5b9] font-mono">
                From My Resume • Professional Summary
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 leading-snug tracking-tight">
                {CANDIDATE_PROFILE.title}
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                {CANDIDATE_PROFILE.professionalSummary}
              </p>
            </div>
            <div className="pt-3 border-t border-gray-100 grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-2.5 bg-white rounded-lg border border-gray-200">
                <div className="text-[10px] text-gray-400">Experience</div>
                <div className="font-bold text-gray-900">3+ Years Production</div>
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-gray-200">
                <div className="text-[10px] text-gray-400">Education</div>
                <div className="font-bold text-gray-900">Kurukshetra University (7.6 CGPA)</div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Timeline */}
          <motion.div
            whileHover={{ y: -4, boxShadow: '0 16px 40px -8px rgba(0,0,0,0.10)' }}
            transition={{ duration: 0.2 }}
            className="md:col-span-3 bg-white rounded-2xl p-7 border border-gray-200 shadow-sm flex flex-col justify-between space-y-5"
          >
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#ccc5b9] font-mono">Career Timeline</div>
              <h3 className="text-lg font-bold text-gray-900 tracking-tight">Work Experience</h3>
              <div className="space-y-4">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="space-y-0.5 pb-3 border-b border-gray-100 last:border-b-0 last:pb-0">
                    <div className="flex items-start justify-between gap-1">
                      <div className="text-xs font-bold text-gray-900 leading-tight">{exp.role}</div>
                      <span className="text-[10px] font-mono text-[#ccc5b9] font-semibold whitespace-nowrap">{exp.period}</span>
                    </div>
                    <div className="text-[11px] text-gray-500 font-medium">{exp.company}</div>
                    <div className="text-[10px] text-gray-400 font-mono">{exp.location}</div>
                  </div>
                ))}
                <div className="space-y-0.5 pt-1">
                  <div className="flex items-start justify-between gap-1">
                    <div className="text-xs font-bold text-gray-900 leading-tight">Kurukshetra University</div>
                    <span className="text-[10px] font-mono text-[#ccc5b9] font-semibold">7.6 CGPA</span>
                  </div>
                  <div className="text-[11px] text-gray-500 font-medium">Bachelor Degree (2019 – 2022)</div>
                </div>
              </div>
            </div>
            <div className="pt-3 border-t border-gray-100">
              <a href="#experience" className="text-xs font-bold text-[#ccc5b9] hover:text-[#b5aea8] flex items-center space-x-1">
                <span>View Full Responsibilities</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
