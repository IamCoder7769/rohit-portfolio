import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hexagon, Menu, X, Sparkles, Palette, Check, ChevronDown } from 'lucide-react';
import { CANDIDATE_PROFILE } from '../data/portfolioData';
import { triggerSubtleSparks } from '../utils/confetti';
import { useTheme } from '../theme/ThemeContext';

interface NavbarProps {
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [paletteMenuOpen, setPaletteMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const { theme, themeId, isOriginal, cycleNextTheme, revertToOriginal, setThemeById, availableThemes } = useTheme();
  const paletteRef = useRef<HTMLDivElement>(null);
  const paletteListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (paletteRef.current && !paletteRef.current.contains(e.target as Node)) {
        setPaletteMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // IntersectionObserver-based scroll spy — accurate active section tracking
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'experience', 'projects', 'process', 'technical-skills', 'education', 'contact'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // map section id to nav link id
            const navId = id === 'technical-skills' ? 'skills' : id;
            setActiveSection(navId);
          }
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const navLinks = [
    { label: 'Home',       href: '#hero',             id: 'hero' },
    { label: 'About',      href: '#about',            id: 'about' },
    { label: 'Experience', href: '#experience',       id: 'experience' },
    { label: 'Projects',   href: '#projects',         id: 'projects' },
    { label: 'Process',    href: '#process',          id: 'process' },
    { label: 'Skills',     href: '#technical-skills', id: 'skills' },
    { label: 'Education',  href: '#education',        id: 'education' },
    { label: 'Contact',    href: '#contact',          id: 'contact' },
  ];

  return (
    <header
      id="main-navigation"
      className="sticky top-0 z-40 w-full bg-white/98 backdrop-blur-md border-b border-gray-100 shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="flex items-center space-x-2.5 group" id="nav-brand-logo">
          <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-[#ccc5b9] transition-all">
            <Hexagon className="w-5 h-5 fill-current" />
          </div>
          <div className="flex items-baseline space-x-1.5">
            <span className="font-extrabold text-gray-900 text-lg tracking-tight">
              {CANDIDATE_PROFILE.name}
            </span> 
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-0.5 text-xs font-medium text-gray-500">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'text-gray-900 font-bold'
                    : 'hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navActivePill"
                    className="absolute inset-0 bg-gray-100 rounded-lg -z-10 border border-gray-200"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center space-x-2">
          {/* Theme Switcher */}
          <div className="relative" ref={paletteRef}>
            <button
              onClick={() => setPaletteMenuOpen(!paletteMenuOpen)}
              id="theme-toggle-btn"
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold bg-gray-50 hover:bg-gray-100 text-gray-700 transition-all cursor-pointer"
            >
              <Palette className="w-3.5 h-3.5 text-[#ccc5b9]" />
              <span className="font-mono text-[11px]">{theme.badge}</span>
              <div className="flex items-center space-x-0.5">
                {[theme.bgMain, theme.primaryAccent, theme.goldAccent].map((c, i) => (
                  <span key={i} className="w-2.5 h-2.5 rounded-full border border-black/10" style={{ backgroundColor: c }} />
                ))}
              </div>
              <ChevronDown className={`w-3 h-3 text-gray-400 transition-transform ${paletteMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {paletteMenuOpen && (() => {
                setTimeout(() => {
                  if (paletteListRef.current) {
                    const active = paletteListRef.current.querySelector('[data-active="true"]') as HTMLElement;
                    if (active) active.scrollIntoView({ block: 'nearest' });
                  }
                }, 50);
                return true;
              })() && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-72 rounded-2xl bg-white border border-gray-100 shadow-xl p-3 z-50 space-y-1.5"
                >
                  <div className="flex items-center justify-between px-1 pb-2 border-b border-gray-100">
                    <div className="flex items-center space-x-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#ccc5b9]" />
                      <span className="text-[11px] font-bold text-gray-800 uppercase tracking-wider font-mono">Color Palette</span>
                    </div>
                    {!isOriginal && (
                      <button
                        onClick={() => { revertToOriginal(); setPaletteMenuOpen(false); }}
                        className="text-[10px] font-mono px-2 py-0.5 rounded border border-gray-200 text-gray-400 hover:text-gray-700 cursor-pointer"
                      >
                        Revert
                      </button>
                    )}
                  </div>
                  <div ref={paletteListRef} className="space-y-1 max-h-72 overflow-y-auto">
                    {availableThemes.map((t) => {
                      const isSelected = t.id === themeId;
                      return (
                        <button
                          key={t.id}
                          data-active={isSelected ? 'true' : 'false'}
                          onClick={() => { setThemeById(t.id); setPaletteMenuOpen(false); triggerSubtleSparks(0.8, 0.1); }}
                          className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-start justify-between cursor-pointer ${
                            isSelected ? 'border-gray-400 bg-white' : 'border-transparent hover:border-gray-200 hover:bg-white'
                          }`}
                        >
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              <span className="text-xs font-bold text-gray-800">{t.name}</span>
                              {isSelected && (
                                <span className="text-[9px] font-mono font-bold px-1.5 rounded-full bg-white text-gray-700 border border-gray-200">ACTIVE</span>
                              )}
                            </div>
                            <div className="flex items-center space-x-1">
                              {[t.bgMain, t.bgCard, t.chipBg, t.primaryAccent, t.goldAccent].map((color, i) => (
                                <span key={i} className="w-3.5 h-3.5 rounded-full border border-black/15" style={{ backgroundColor: color }} />
                              ))}
                            </div>
                          </div>
                          {isSelected && <Check className="w-4 h-4 text-[#ccc5b9] shrink-0 mt-0.5" />}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="text-xs font-semibold text-gray-500 hover:text-gray-900 px-3 py-1.5 transition-colors cursor-pointer"
            >
              Resume
            </button>
          )}

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            id="nav-contact-cta"
            onClick={() => triggerSubtleSparks(0.85, 0.1)}
            className="inline-flex items-center px-4 py-2 bg-[#ccc5b9] hover:bg-[#b5aea8] text-gray-900 rounded-lg text-xs font-bold shadow-sm transition-colors"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center space-x-2 md:hidden">
          <button onClick={cycleNextTheme} className="p-1.5 rounded-lg border border-gray-200 bg-white text-[#ccc5b9]">
            <Palette className="w-4 h-4" />
          </button>
          <a href="#contact" className="px-3 py-1.5 bg-[#ccc5b9] text-gray-900 rounded-lg text-xs font-bold">
            Hire Me
          </a>
          <button
            id="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            id="mobile-drawer-menu"
            className="md:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-5 space-y-3 shadow-lg overflow-hidden"
          >
            <div className="flex items-center justify-between pb-2 border-b border-gray-100">
              <div className="flex items-center text-xs font-medium text-gray-600 bg-white px-2.5 py-1 rounded-full border border-gray-200">
                <span className="w-2 h-2 rounded-full bg-gray-400 animate-pulse mr-1.5" />
                Available Immediately
              </div>
              <span className="text-xs text-gray-400 font-mono">Kaithal, IN</span>
            </div>

            <nav className="grid grid-cols-2 gap-1 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    activeSection === link.id
                      ? 'bg-gray-100 text-gray-900 font-bold'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-2 border-t border-gray-100 space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                <span>Palette:</span>
                <span className="font-bold text-gray-700">{theme.name}</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {availableThemes.map((t) => {
                  const isSelected = t.id === themeId;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setThemeById(t.id)}
                      className={`flex items-center space-x-1.5 p-1.5 rounded-lg border text-left text-[11px] cursor-pointer ${
                        isSelected ? 'border-gray-400 bg-white font-bold text-gray-900' : 'border-gray-200 bg-white text-gray-400'
                      }`}
                    >
                      <span className="w-3 h-3 rounded-full border border-black/15 shrink-0" style={{ backgroundColor: t.primaryAccent }} />
                      <span className="truncate">{t.badge.split('·')[0].trim()}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-2 border-t border-gray-100 flex items-center space-x-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 py-2 text-center text-xs font-bold text-white bg-[#ccc5b9] rounded-lg"
              >
                Hire Me
              </a>
              {onOpenResume && (
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
                  className="px-3 py-2 text-xs font-bold text-gray-700 bg-white rounded-lg border border-gray-200"
                >
                  Resume
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

