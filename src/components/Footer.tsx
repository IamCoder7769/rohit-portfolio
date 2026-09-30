import React from 'react';
import { ArrowUp } from 'lucide-react';
import { CANDIDATE_PROFILE } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-100 bg-white py-10 px-4 sm:px-6 text-xs">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <div className="font-bold text-gray-900 text-sm">{CANDIDATE_PROFILE.name}</div>
          <div className="text-gray-500">{CANDIDATE_PROFILE.title} • {CANDIDATE_PROFILE.primaryStack}</div>
          <div className="text-[11px] text-gray-400 font-mono">{CANDIDATE_PROFILE.location} • {CANDIDATE_PROFILE.phone}</div>
        </div>
        <div className="flex items-center space-x-6 text-gray-500">
          <a href={CANDIDATE_PROFILE.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">GitHub</a>
          <a href={CANDIDATE_PROFILE.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">LinkedIn</a>
          <a href={`mailto:${CANDIDATE_PROFILE.email}`} className="hover:text-gray-900 transition-colors">Email</a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-600 border border-gray-200 transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto pt-6 mt-6 border-t border-gray-100 text-center text-gray-400 text-[11px]">
        Rohit Dhiman • Full Stack & Backend Engineer • Optimized for Engineering & Technical Screening
      </div>
    </footer>
  );
};
