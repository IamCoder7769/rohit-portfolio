import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  X,
  ExternalLink,
  Layers,
  Cpu,
  CheckCircle2,
  Database,
} from 'lucide-react';
import { ProjectItem } from '../types/portfolio';
import { ProjectMockup } from './ProjectMockup';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return createPortal(
    <div
      id="project-modal-backdrop"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(9,9,11,0.75)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        id="project-modal-card"
        style={{ maxHeight: 'calc(100vh - 2rem)' }}
        className="bg-white rounded-2xl border border-zinc-200 shadow-2xl w-full max-w-2xl flex flex-col overflow-hidden text-zinc-900"
      >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-zinc-100 bg-zinc-50/80">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 font-mono">
                System Specification
              </span>
              <span className="text-zinc-300">•</span>
              <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                {project.category}
              </span>
            </div>
            <button
              id="close-modal-btn"
              onClick={onClose}
              className="p-1.5 text-zinc-500 hover:text-zinc-900 rounded-lg hover:bg-zinc-200/60 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="overflow-y-auto p-5 sm:p-6 space-y-6">
            {/* Visual Mockup Preview */}
            <div className="rounded-xl overflow-hidden shadow-sm border border-zinc-200">
              <ProjectMockup project={project} />
            </div>

            {/* Title & Live Action */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-zinc-600 mt-0.5">
                  {project.subtitle}
                </p>
              </div>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`modal-live-link-${project.id}`}
                  className="inline-flex items-center justify-center space-x-1.5 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors shrink-0"
                >
                  <span>Visit Production App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            {/* Key Metrics / Snapshot */}
            {project.metrics && project.metrics.length > 0 && (
              <div
                className={`grid gap-2 bg-zinc-50 p-3 rounded-xl border border-zinc-200/80 text-center ${
                  project.metrics.length === 4
                    ? 'grid-cols-2 sm:grid-cols-4'
                    : 'grid-cols-3'
                }`}
              >
                {project.metrics.map((metric, i) => (
                  <div key={i} className="px-1">
                    <div className="text-[11px] font-medium text-zinc-500 truncate">
                      {metric.label}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-zinc-900 mt-0.5 truncate">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tech Stack Pills */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2 flex items-center">
                <Cpu className="w-3.5 h-3.5 mr-1.5 text-zinc-700" /> Technologies Deployed
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-zinc-100 text-zinc-800 text-xs font-medium rounded-md border border-zinc-200/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Responsibilities & Impact */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-2.5 flex items-center">
                <Layers className="w-3.5 h-3.5 mr-1.5 text-zinc-700" /> Key Engineering Deliverables
              </div>
              <ul className="space-y-2">
                {project.description.map((point, index) => (
                  <li key={index} className="flex items-start text-xs sm:text-sm text-zinc-700 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 mt-2 mr-2.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architectural Highlights */}
            {project.architecturalHighlights.length > 0 && (
              <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-200 space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-700 flex items-center">
                  <Database className="w-3.5 h-3.5 mr-1.5 text-zinc-700" /> Architectural Design Highlights
                </div>
                <ul className="space-y-1.5">
                  {project.architecturalHighlights.map((arch, index) => (
                    <li key={index} className="flex items-start text-xs text-zinc-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                      <span>{arch}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="flex items-center justify-between px-5 py-3 border-t border-zinc-100 bg-zinc-50">
            <span className="text-xs text-zinc-500 font-mono">
              Role: Full Stack Engineering
            </span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-zinc-200 hover:bg-zinc-300 text-zinc-800 rounded-lg text-xs font-medium transition-colors"
            >
              Close Window
            </button>
          </div>
      </div>
    </div>,
    document.body
  );
};
