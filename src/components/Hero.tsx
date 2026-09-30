import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Github, FileText, Mail, MapPin, Phone, ArrowUpRight, Linkedin } from 'lucide-react';
import { CANDIDATE_PROFILE } from '../data/portfolioData';
import { triggerConfetti, triggerSubtleSparks } from '../utils/confetti';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = (e: React.MouseEvent) => {
    navigator.clipboard.writeText(CANDIDATE_PROFILE.email);
    setCopied(true);
    const rect = e.currentTarget.getBoundingClientRect();
    triggerConfetti((rect.left + rect.width / 2) / window.innerWidth, (rect.top + rect.height / 2) / window.innerHeight);
    setTimeout(() => setCopied(false), 2400);
  };

  const techIcons = [
    { name: 'Node.js', color: '#539e43' }, { name: 'TypeScript', color: '#3178c6' },
    { name: 'React.js', color: '#00d8ff' }, { name: 'Next.js', color: '#000000' },
    { name: 'PostgreSQL', color: '#336791' }, { name: 'MongoDB', color: '#47a248' },
    { name: 'Redis', color: '#dc382d' }, { name: 'RabbitMQ', color: '#ff6600' },
    { name: 'Kubernetes (K3s)', color: '#326ce5' }, { name: 'Docker', color: '#2496ed' },
    { name: 'Google Gemini', color: '#1a73e8' }, { name: 'Pinecone RAG', color: '#10b981' },
    { name: 'Socket.IO', color: '#010101' }, { name: 'Tailwind CSS', color: '#06b6d4' },
  ];

  return (
    <section id="hero" className="pt-6 pb-10 sm:pt-10 sm:pb-14 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-[#ccc5b9] bg-white px-3 py-1 rounded-full border border-gray-200">
                <span className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" />
                <span>FULL STACK DEVELOPER &amp; BACKEND ENGINEER</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-serif font-normal leading-[1.15] text-gray-900 tracking-tight">
                {CANDIDATE_PROFILE.name}
              </h1>

              <div className="text-lg sm:text-xl font-sans font-semibold text-[#ccc5b9]">
                TypeScript · React · Next.js · Node.js · Microservices · Generative AI
              </div>

              <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-xl">
                3+ years of experience building scalable applications across Retail, E-commerce, Loyalty &amp; Merchant Management, and AI using distributed microservices, event-driven architectures, Kubernetes, and Google Gemini RAG.
              </p>
            </div>

            {/* Pills */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 font-mono">
              <span className="flex items-center space-x-1 bg-white px-2.5 py-1 rounded-md border border-gray-200">
                <MapPin className="w-3 h-3 text-[#ccc5b9]" />
                <span>{CANDIDATE_PROFILE.location}</span>
              </span>
              <a
                href={`tel:${CANDIDATE_PROFILE.phone.replace(/[^+\d]/g, '')}`}
                className="flex items-center space-x-1 bg-white px-2.5 py-1 rounded-md border border-gray-200 hover:text-gray-900 transition-colors"
              >
                <Phone className="w-3 h-3 text-[#ccc5b9]" />
                <span>{CANDIDATE_PROFILE.phone}</span>
              </a>
              <button
                onClick={copyEmail}
                className="flex items-center space-x-1 bg-white px-2.5 py-1 rounded-md border border-gray-200 hover:text-gray-900 transition-colors cursor-pointer"
              >
                <Mail className="w-3 h-3 text-[#ccc5b9]" />
                <span>{copied ? 'Copied Email!' : CANDIDATE_PROFILE.email}</span>
              </button>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={`mailto:${CANDIDATE_PROFILE.email}?subject=Job%20Opportunity%20-%20Full%20Stack%20/%20Backend%20Engineer`}
                onClick={() => triggerSubtleSparks(0.3, 0.4)}
                className="inline-flex items-center space-x-2 px-5 py-2.5 bg-[#ccc5b9] hover:bg-[#b5aea8] text-gray-900 rounded-lg text-xs font-bold shadow-sm transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Rohit</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
              </a>

              {onOpenResume && (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onOpenResume}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white hover:bg-gray-50 text-gray-800 rounded-lg text-xs font-bold border border-gray-200 shadow-sm transition-all cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-[#ccc5b9]" />
                  <span>View Verified Resume</span>
                </motion.button>
              )}

              <a
                href={CANDIDATE_PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-4 py-2.5 bg-white hover:bg-gray-50 text-gray-600 rounded-lg text-xs font-semibold border border-gray-200 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={CANDIDATE_PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-4 py-2.5 bg-white hover:bg-gray-50 text-gray-600 rounded-lg text-xs font-semibold border border-gray-200 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0a66c2]" />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Stats/Info instead of image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {[
              { label: 'Years Experience', value: '3+' },
              { label: 'Production Projects', value: '10+' },
              { label: 'Technologies', value: '20+' },
              { label: 'Availability', value: 'Immediate' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col justify-between shadow-sm">
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-400 font-mono mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Tech Strip */}
        <div className="pt-4 pb-2 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="text-xs font-bold uppercase tracking-wider text-gray-400 font-sans">
            Technical Stack From Resume
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            {techIcons.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center space-x-1.5 px-3 py-1.5 bg-white hover:bg-gray-50 rounded-full border border-gray-200 text-gray-600 text-xs font-semibold shadow-sm whitespace-nowrap transition-colors"
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: tech.color }} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

