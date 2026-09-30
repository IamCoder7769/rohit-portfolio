import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Copy, Check, MessageCircle, ArrowUpRight } from 'lucide-react';
import { CANDIDATE_PROFILE } from '../data/portfolioData';
import { triggerConfetti } from '../utils/confetti';

interface ContactSectionProps {
  onOpenResume?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = (e: React.MouseEvent) => {
    navigator.clipboard.writeText(CANDIDATE_PROFILE.email);
    setCopiedEmail(true);
    const rect = e.currentTarget.getBoundingClientRect();
    triggerConfetti(rect.left / window.innerWidth, rect.top / window.innerHeight);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const copyPhone = (e: React.MouseEvent) => {
    navigator.clipboard.writeText(CANDIDATE_PROFILE.phone);
    setCopiedPhone(true);
    const rect = e.currentTarget.getBoundingClientRect();
    triggerConfetti(rect.left / window.innerWidth, rect.top / window.innerHeight);
    setTimeout(() => setCopiedPhone(false), 2400);
  };

  const cleanPhone = CANDIDATE_PROFILE.phone.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    `Hi ${CANDIDATE_PROFILE.name}, I reviewed your portfolio and would like to discuss an engineering opportunity.`
  )}`;

  return (
    <section id="contact" className="pt-8 pb-14 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#ccc5b9] font-mono">Get In Touch • Open For Opportunities</div>
              <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 tracking-tight">Let&apos;s Build Together</h2>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                Available for full-time Full Stack Developer &amp; Backend Engineer roles. Reach out directly via email, phone, WhatsApp, or connect on LinkedIn and GitHub.
              </p>
            </div>

            <div className="space-y-3">
              {/* Email */}
              <div className="p-4 rounded-xl bg-white border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-[#ccc5b9] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900">Email Address</div>
                    <div className="text-xs font-mono text-gray-500">{CANDIDATE_PROFILE.email}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 shrink-0">
                  <button onClick={copyEmail} className="px-3 py-1.5 bg-white hover:bg-gray-100 border border-gray-200 text-gray-700 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-colors cursor-pointer">
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#ccc5b9]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                  <a href={`mailto:${CANDIDATE_PROFILE.email}?subject=Job%20Opportunity%20-%20Full%20Stack%20/%20Backend%20Engineer`}
                    className="px-3.5 py-1.5 bg-[#ccc5b9] hover:bg-[#b5aea8] text-gray-900 rounded-lg text-xs font-bold flex items-center space-x-1.5 transition-colors">
                    <span>Send Email</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-xl bg-white border border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-[#ccc5b9] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900">Phone / Mobile</div>
                    <div className="text-xs font-mono text-gray-500">{CANDIDATE_PROFILE.phone}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 shrink-0">
                  <button onClick={copyPhone} className="px-3 py-1.5 bg-white hover:bg-gray-100 border border-gray-200 text-gray-700 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-colors cursor-pointer">
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-[#ccc5b9]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                  </button>
                  <a href={`tel:${CANDIDATE_PROFILE.phone.replace(/[^+\d]/g, '')}`}
                    className="px-3.5 py-1.5 bg-[#ccc5b9] hover:bg-[#b5aea8] text-gray-900 rounded-lg text-xs font-bold flex items-center space-x-1.5 transition-colors">
                    <span>Call Now</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 flex items-center justify-between transition-colors group text-xs text-gray-700">
                <div className="flex items-center space-x-2.5 font-semibold">
                  <MessageCircle className="w-4 h-4 text-[#ccc5b9]" />
                  <span>Start WhatsApp Chat directly</span>
                </div>
                <div className="flex items-center space-x-1 text-xs font-bold text-[#ccc5b9]">
                  <span>{CANDIDATE_PROFILE.phone}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            </div>

            <div className="pt-3 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-gray-400 font-mono">📍 {CANDIDATE_PROFILE.location}</span>
              <span className="text-[#ccc5b9] font-semibold flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" />
                <span>Notice Period: Immediate / Fast Available</span>
              </span>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-6 space-y-8 pt-2">
            <div className="grid grid-cols-3 gap-4 text-xs">
              <div className="space-y-3">
                <h4 className="font-bold text-gray-900 text-sm">Resume Sections</h4>
                <ul className="space-y-2 text-gray-500">
                  <li><a href="#about" className="hover:text-gray-900 transition-colors">About &amp; Summary</a></li>
                  <li><a href="#experience" className="hover:text-gray-900 transition-colors">Experience</a></li>
                  <li><a href="#projects" className="hover:text-gray-900 transition-colors">Selected Projects</a></li>
                  <li><a href="#technical-skills" className="hover:text-gray-900 transition-colors">Technical Skills</a></li>
                  <li><a href="#education" className="hover:text-gray-900 transition-colors">Education &amp; Honors</a></li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-gray-900 text-sm">Tech Stack</h4>
                <ul className="space-y-2 text-gray-500">
                  <li>Node.js &amp; Express.js</li>
                  <li>TypeScript &amp; JavaScript</li>
                  <li>React.js &amp; Next.js</li>
                  <li>PostgreSQL &amp; MongoDB</li>
                  <li>Kubernetes &amp; Docker</li>
                  <li>Google Gemini &amp; Pinecone</li>
                  <li>RabbitMQ &amp; Redis Pub/Sub</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-gray-900 text-sm">Resources</h4>
                <ul className="space-y-2 text-gray-500">
                  {onOpenResume && (
                    <li><button onClick={onOpenResume} className="hover:text-gray-900 text-left cursor-pointer transition-colors">Formatted Resume ↗</button></li>
                  )}
                  <li><a href={CANDIDATE_PROFILE.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">GitHub Profile ↗</a></li>
                  <li><a href={CANDIDATE_PROFILE.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">LinkedIn Profile ↗</a></li>
                  <li><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">Direct WhatsApp ↗</a></li>
                </ul>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-3">
              {[
                { href: CANDIDATE_PROFILE.githubUrl, icon: Github, title: 'GitHub' },
                { href: CANDIDATE_PROFILE.linkedinUrl, icon: Linkedin, title: 'LinkedIn' },
                { href: whatsappUrl, icon: MessageCircle, title: 'WhatsApp' },
                { href: `mailto:${CANDIDATE_PROFILE.email}`, icon: Mail, title: 'Email' },
              ].map(({ href, icon: Icon, title }) => (
                <a key={title} href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white border border-gray-200 hover:bg-[#ccc5b9] hover:text-gray-900 hover:border-[#ccc5b9] text-gray-600 flex items-center justify-center transition-all"
                  title={title}>
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


