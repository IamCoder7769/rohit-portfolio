import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Printer } from 'lucide-react';
import {
  CANDIDATE_PROFILE,
  SKILL_CATEGORIES,
  EXPERIENCES,
  PROJECTS,
  EDUCATION_LIST,
  ACHIEVEMENTS,
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => { window.print(); };

  return createPortal(
    <div
      id="resume-modal-backdrop"
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        backgroundColor: 'rgba(9,9,11,0.75)',
        overflowY: 'auto',
      }}
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        style={{ minHeight: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}
        onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
      >
      <div
        className="bg-white rounded-2xl border border-zinc-200 shadow-2xl max-w-4xl w-full flex flex-col overflow-hidden text-zinc-900"
        style={{ maxHeight: 'calc(100vh - 2rem)' }}
      >
          {/* Top Bar with actions */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-200 bg-zinc-50 print:hidden">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-600 font-mono">
                Verified Resume Document
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-[#4d652f] hover:bg-[#3f5425] text-white rounded-lg text-xs font-semibold shadow-xs transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save as PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 text-zinc-500 hover:text-zinc-900 rounded-lg hover:bg-zinc-200/60 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div className="overflow-y-auto p-6 sm:p-10 space-y-6 text-zinc-800 text-xs sm:text-sm font-sans">
            {/* Header */}
            <div className="text-center space-y-1.5 border-b border-zinc-200 pb-5">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 uppercase">
                {CANDIDATE_PROFILE.name}
              </h1>
              <div className="text-xs sm:text-sm font-semibold tracking-wide text-zinc-700 uppercase">
                FULL STACK DEVELOPER / BACKEND ENGINEER | REACT.JS | NEXT.JS | NODE.JS | MICROSERVICES | GENERATIVE AI
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-zinc-600 pt-1">
                <span>{CANDIDATE_PROFILE.location}</span>
                <span>•</span>
                <span>{CANDIDATE_PROFILE.phone}</span>
                <span>•</span>
                <a href={`mailto:${CANDIDATE_PROFILE.email}`} className="text-zinc-900 underline">
                  {CANDIDATE_PROFILE.email}
                </a>
                <span>•</span>
                <a
                  href={CANDIDATE_PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-900 underline hover:text-[#4d652f]"
                >
                  GitHub: {CANDIDATE_PROFILE.githubHandle}
                </a>
                <span>•</span>
                <a
                  href={CANDIDATE_PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-900 underline hover:text-[#4d652f]"
                >
                  LinkedIn: {CANDIDATE_PROFILE.linkedinHandle}
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-1.5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1">
                Professional Summary
              </h2>
              <p className="text-xs text-zinc-700 leading-relaxed text-justify">
                {CANDIDATE_PROFILE.professionalSummary}
              </p>
            </div>

            {/* Technical Skills */}
            <div className="space-y-1.5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1">
                Technical Skills
              </h2>
              <div className="space-y-1 text-xs">
                {SKILL_CATEGORIES.map((cat) => (
                  <div key={cat.categoryKey} className="flex flex-col sm:flex-row">
                    <span className="font-bold text-zinc-900 sm:w-48 shrink-0">
                      {cat.title}:
                    </span>
                    <span className="text-zinc-700">
                      {cat.skills.join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Experience */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1">
                Professional Experience
              </h2>
              <div className="space-y-4">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                      <div>
                        <span className="font-bold text-zinc-950">{exp.role}</span>
                        <span className="mx-1 text-zinc-400">—</span>
                        <span className="font-semibold text-zinc-800">{exp.company}</span>
                      </div>
                      <span className="text-zinc-500 font-mono text-[11px]">
                        {exp.period} | {exp.location}
                      </span>
                    </div>
                    <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-zinc-700 leading-relaxed">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Projects */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1">
                Selected Projects
              </h2>
              <div className="space-y-4">
                {PROJECTS.map((proj) => (
                  <div key={proj.id} className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                      <div className="font-bold text-zinc-950">
                        <span>{proj.title}</span>
                        <span className="font-normal text-zinc-600"> — {proj.subtitle}</span>
                        {proj.liveUrl && (
                          <span className="font-normal text-zinc-500 ml-1">({proj.liveUrl})</span>
                        )}
                      </div>
                    </div>
                    <div className="text-[11px] text-zinc-600 italic">
                      {proj.tags.join(' | ')}
                    </div>
                    <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-zinc-700 leading-relaxed">
                      {proj.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-1.5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1">
                Education
              </h2>
              {EDUCATION_LIST.map((edu, i) => (
                <div key={i} className="flex justify-between text-xs">
                  <div>
                    <span className="font-bold text-zinc-950">{edu.degree}</span>
                    <span className="mx-1 text-zinc-400">—</span>
                    <span className="text-zinc-700">{edu.institution}</span>
                  </div>
                  <span className="font-bold text-zinc-900">{edu.score}</span>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="space-y-1.5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1">
                Achievements
              </h2>
              <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-zinc-700">
                {ACHIEVEMENTS.map((ach, i) => (
                  <li key={i}>
                    <span className="font-bold text-zinc-900">{ach.title}</span>
                    <span className="text-zinc-600"> — {ach.organization}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
      </div>
      </div>
    </div>,
    document.body
  );
};
