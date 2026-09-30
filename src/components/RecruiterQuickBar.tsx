import React from 'react';
import {
  Briefcase,
  Layers,
  Sparkles,
  GraduationCap,
} from 'lucide-react';
import { CANDIDATE_PROFILE } from '../data/portfolioData';

export const RecruiterQuickBar: React.FC = () => {
  const highlights = [
    {
      icon: Briefcase,
      label: 'Production Experience',
      value: CANDIDATE_PROFILE.experienceYears,
      detail: 'Qualibytes IT & Gsquare Web',
    },
    {
      icon: Layers,
      label: 'Core Specialization',
      value: 'Full Stack & Microservices',
      detail: 'Node.js, React, Next.js, gRPC',
    },
    {
      icon: Sparkles,
      label: 'Distributed & AI',
      value: 'RabbitMQ, Redis & Gemini',
      detail: 'Event-Driven, K3s & Pinecone RAG',
    },
    {
      icon: GraduationCap,
      label: 'Academic Standing',
      value: 'Kurukshetra University',
      detail: '7.6 CGPA • Bachelor Degree',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {highlights.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-xl border border-[#dde2be] p-4 transition-all hover:border-[#4d652f] shadow-xs flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-medium uppercase tracking-wider text-[#56624e] font-mono">
                  {item.label}
                </span>
                <div className="w-7 h-7 rounded-lg bg-[#f3f6ea] flex items-center justify-center text-[#4d652f]">
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div>
                <div className="text-base sm:text-lg font-bold text-[#181d13] tracking-tight">
                  {item.value}
                </div>
                <div className="text-xs text-[#505a48] mt-0.5 truncate">
                  {item.detail}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
