import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Command, Menu, X, Sparkles, Download, Github, Linkedin, Mail } from 'lucide-react';
import { sounds } from '../../utils/sound';
import { personalInfo } from '../../data/resumeData';

interface NavbarProps {
  onOpenCommandPalette: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'GitHub', href: '#github' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCommandPalette,
  soundEnabled,
  onToggleSound
}) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'certifications', 'github', 'contact'];
      for (const sectionId of [...sections].reverse()) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    sounds.playClick();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-6 pointer-events-none">
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`pointer-events-auto flex items-center justify-between gap-2 md:gap-6 px-4 md:px-6 py-2.5 rounded-full transition-all duration-500 max-w-6xl w-full ${
          scrolled
            ? 'glass-panel-elevated shadow-glass-hover bg-white/85 border-[#F472B6]/30'
            : 'glass-panel bg-white/65 border-[#F472B6]/20'
        }`}
      >
        {/* Logo / Monogram */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            sounds.playClick();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onMouseEnter={() => sounds.playHover()}
          className="flex items-center space-x-2.5 group"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FDA4AF] to-[#F472B6] flex items-center justify-center text-white font-display font-bold text-sm shadow-[0_0_12px_rgba(244,114,182,0.4)] group-hover:scale-105 transition-transform">
            AK
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-display font-bold text-sm tracking-tight text-[#181424]">
              Afsana Kathoon
            </span>
            <span className="text-[10px] text-[#F472B6] font-mono tracking-wider -mt-1 font-semibold">
              AI & FULL STACK
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                onMouseEnter={() => sounds.playHover()}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-[#F472B6] font-semibold'
                    : 'text-[#6B6580] hover:text-[#181424]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 rounded-full bg-[#FFE4EE]/80 border border-[#F472B6]/30 shadow-inner-glow"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Command Palette, Sound Toggle, Resume */}
        <div className="flex items-center space-x-2">
          {/* Cmd+K Palette Button */}
          <button
            onClick={() => {
              sounds.playClick();
              onOpenCommandPalette();
            }}
            onMouseEnter={() => sounds.playHover()}
            title="Open Command Palette (Ctrl+K / Cmd+K)"
            className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#FAF9FC] hover:bg-[#FFE4EE]/50 border border-[#F472B6]/20 text-[#6B6580] hover:text-[#181424] text-xs font-mono transition-all shadow-sm group"
          >
            <Command className="w-3.5 h-3.5 text-[#F472B6] group-hover:rotate-12 transition-transform" />
            <span className="text-[11px] font-semibold">Search</span>
            <kbd className="text-[9px] bg-white px-1.5 py-0.5 rounded border border-[#F472B6]/20 text-[#6B6580]">
              ⌘K
            </kbd>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={() => {
              sounds.playClick();
              onToggleSound();
            }}
            onMouseEnter={() => sounds.playHover()}
            title={soundEnabled ? 'Disable UI Sounds' : 'Enable UI Sounds'}
            className="w-8 h-8 rounded-full flex items-center justify-center bg-[#FAF9FC] hover:bg-[#FFE4EE]/60 border border-[#F472B6]/20 text-[#6B6580] hover:text-[#F472B6] transition-all shadow-sm"
          >
            {soundEnabled ? (
              <Volume2 className="w-3.5 h-3.5 text-[#F472B6]" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 text-[#6B6580]/60" />
            )}
          </button>

          {/* Contact / Resume CTA Button */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            onMouseEnter={() => sounds.playHover()}
            className="flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#F472B6] to-[#EC4899] text-white text-xs font-semibold shadow-[0_4px_15px_rgba(244,114,182,0.35)] hover:shadow-[0_6px_20px_rgba(244,114,182,0.5)] hover:scale-[1.03] active:scale-[0.98] transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => {
              sounds.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden w-8 h-8 rounded-full flex items-center justify-center bg-[#FAF9FC] border border-[#F472B6]/20 text-[#181424]"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-20 left-4 right-4 glass-panel-elevated bg-white/95 border-[#F472B6]/30 rounded-3xl p-5 shadow-2xl flex flex-col space-y-3 z-50 lg:hidden"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#F472B6]/15">
              <span className="font-display font-bold text-sm text-[#181424]">Navigation Menu</span>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommandPalette();
                }}
                className="text-xs font-mono text-[#F472B6] flex items-center gap-1"
              >
                <Command className="w-3 h-3" /> Search (⌘K)
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    activeSection === link.href.substring(1)
                      ? 'bg-[#FFE4EE] text-[#F472B6] font-semibold'
                      : 'text-[#181424] hover:bg-[#FAF9FC]'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-[#F472B6]/15 flex items-center justify-between text-xs text-[#6B6580]">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-[#F472B6]"
              >
                <Github className="w-3.5 h-3.5" /> GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-[#F472B6]"
              >
                <Linkedin className="w-3.5 h-3.5" /> LinkedIn
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 hover:text-[#F472B6]"
              >
                <Mail className="w-3.5 h-3.5" /> Email
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
