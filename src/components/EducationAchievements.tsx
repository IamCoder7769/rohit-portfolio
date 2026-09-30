import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award } from 'lucide-react';
import { EDUCATION_LIST, ACHIEVEMENTS } from '../data/portfolioData';

export const EducationAchievements: React.FC = () => {
  return (
    <section id="education" className="py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="space-y-1">
          <div className="text-xs font-bold uppercase tracking-wider text-[#ccc5b9] font-mono">From My Resume • Education &amp; Certifications</div>
          <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 tracking-tight">Academic Background &amp; Certifications</h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-xl">Formal university degree and specialized technical certifications in DSA, JavaScript, and System Design.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ y: -3, boxShadow: '0 12px 32px -6px rgba(0,0,0,0.10)' }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-7 shadow-sm space-y-4"
          >
            <div className="flex items-center space-x-3 pb-3 border-b border-gray-100">
              <div className="w-8 h-8 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#ccc5b9]">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900">University Education &amp; Schooling</h3>
                <span className="text-[11px] text-gray-400 font-mono">Kurukshetra University, Kurukshetra</span>
              </div>
            </div>
            <div className="space-y-4">
              {EDUCATION_LIST.map((edu, idx) => (
                <div key={idx} className="space-y-2 pb-3 border-b border-gray-100 last:border-b-0 last:pb-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="text-base font-bold text-gray-900">{edu.degree}</h4>
                      <p className="text-sm text-gray-600 font-medium">{edu.institution}</p>
                    </div>
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white text-[#ccc5b9] border border-gray-200 whitespace-nowrap">
                      {edu.score}
                    </span>
                  </div>
                  {edu.year && <p className="text-xs text-gray-400 font-mono">{edu.year}</p>}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -3, boxShadow: '0 12px 32px -6px rgba(0,0,0,0.10)' }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-7 shadow-sm space-y-4"
          >
            <div className="flex items-center space-x-3 pb-3 border-b border-gray-100">
              <div className="w-8 h-8 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#ccc5b9]">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900">Certifications &amp; Problem Solving</h3>
                <span className="text-[11px] text-gray-400 font-mono">DSA, System Design &amp; LeetCode (200+ Problems)</span>
              </div>
            </div>
            <div className="space-y-4">
              {ACHIEVEMENTS.map((item, idx) => (
                <div key={idx} className="space-y-1 pb-3 border-b border-gray-100 last:border-b-0 last:pb-0">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-bold text-gray-900">{item.title}</h4>
                    {item.year && (
                      <span className="text-[10px] font-mono text-[#ccc5b9] font-bold px-2 py-0.5 rounded bg-white border border-gray-200 whitespace-nowrap">
                        {item.year}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500">
                    <span className="font-semibold text-gray-700">{item.organization}</span> — {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
