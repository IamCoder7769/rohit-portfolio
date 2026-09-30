/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProcessSection } from './components/ProcessSection';
import { ServicePackages } from './components/ServicePackages';
import { TechnicalSkillsGrid } from './components/TechnicalSkillsGrid';
import { EducationAchievements } from './components/EducationAchievements';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { FileText, Mail } from 'lucide-react';
import { CANDIDATE_PROFILE } from './data/portfolioData';
import { triggerConfetti } from './utils/confetti';
import { ThemeProvider } from './theme/ThemeContext';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleOpenResume = () => {
    setResumeOpen(true);
    triggerConfetti(0.5, 0.2);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col app-canvas-bg text-[#1a2014] font-sans selection:bg-[#4d652f] selection:text-white relative">
        {/* Subtle Ambient Color Blooms in Background - Gentle Green & Tangerine Light on Ivory Canvas */}
        <div className="ambient-glow-green -top-24 -left-28 opacity-75" />
        <div className="ambient-glow-tangerine top-1/4 -right-28 opacity-75" />
        <div className="ambient-glow-green top-1/2 -left-32 opacity-55" />
        <div className="ambient-glow-tangerine bottom-1/4 -right-20 opacity-60" />

        {/* Top Navigation with Hexagon Logo & Action button */}
        <Navbar onOpenResume={handleOpenResume} />

        <main className="flex-grow relative z-10">
          {/* Hero Section: Editorial Headline, Workspace Setup Image & CV Stack */}
          <Hero onOpenResume={handleOpenResume} />

          {/* 3-Card Bento Row: Dark Portrait Card + Professional Summary from CV + Career Timeline */}
          <AboutSection />

          {/* Professional Experience: Full responsibilities & accomplishments from CV */}
          <ExperienceSection />

          {/* My Recent Work: All 6 Selected Projects from CV with live URLs & mockups */}
          <ProjectsSection />

          {/* Full-Stack Architectural Competencies & Lifecycle Pillars from CV */}
          <ProcessSection onOpenResume={handleOpenResume} />

          {/* 4 Production Domains Delivered from CV with direct checklists */}
          <ServicePackages />

          {/* Technical Skills: All 8 Categories from CV in clean grid cards */}
          <TechnicalSkillsGrid />

          {/* Education & Honors: B.Tech (7.6 CGPA) & Certifications from CV */}
          <EducationAchievements />

          {/* Contact Form & Clean Footer Links strictly from CV */}
          <ContactSection onOpenResume={handleOpenResume} />
        </main>

        <Footer />

        {/* Mobile Sticky Quick Action Bar */}
        <div className="md:hidden fixed bottom-3 left-3 right-3 z-30 bg-[#161a12]/95 backdrop-blur-md text-white px-4 py-2.5 rounded-2xl shadow-xl border border-[#2b3323] flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-white leading-tight">
              {CANDIDATE_PROFILE.name}
            </span>
            <span className="text-[10px] text-emerald-400 font-medium">
              Full Stack &amp; Backend Engineer
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleOpenResume}
              className="px-2.5 py-1.5 bg-[#262c20] hover:bg-[#323a2b] text-zinc-200 rounded-lg text-xs font-medium flex items-center space-x-1 transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>Resume</span>
            </button>
            <a
              href={`mailto:${CANDIDATE_PROFILE.email}?subject=Interview%20Inquiry%20-%20Full%20Stack%20Role`}
              className="px-3 py-1.5 bg-[#4d652f] text-white hover:bg-[#3f5425] rounded-lg text-xs font-bold flex items-center space-x-1 shadow-xs transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Hire</span>
            </a>
          </div>
        </div>

        {/* Formatted Resume PDF / Print Modal */}
        <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
      </div>
    </ThemeProvider>
  );
}
