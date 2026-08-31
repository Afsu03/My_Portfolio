import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command, ArrowRight, Code2, FolderGit2, GraduationCap, Award, Mail, Phone, ExternalLink, Copy, Check } from 'lucide-react';
import { sounds } from '../../utils/sound';
import { personalInfo, projectsList, skillCategories, certificationsList } from '../../data/resumeData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (projectId: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectProject
}) => {
  const [query, setQuery] = useState('');
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        sounds.playClick();
        if (isOpen) onClose();
        else {
          // Open
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    sounds.playSuccess();
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const scrollTo = (id: string) => {
    sounds.playClick();
    onClose();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Filter items based on query
  const filteredProjects = projectsList.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.subtitle.toLowerCase().includes(query.toLowerCase()) ||
    p.technologies.some(t => t.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredSkills = skillCategories.flatMap(c =>
    c.skills.filter(s =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.tags?.some(t => t.toLowerCase().includes(query.toLowerCase()))
    )
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-start justify-center pt-20 sm:pt-28 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0F0C1B]/40 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-2xl bg-white/95 backdrop-blur-2xl rounded-3xl border border-[#F472B6]/30 shadow-[0_25px_60px_-15px_rgba(244,114,182,0.3)] overflow-hidden z-10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-5 py-4 border-b border-[#F472B6]/15 bg-white/70">
              <Search className="w-5 h-5 text-[#F472B6] mr-3" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search skills, projects, sections, quick actions..."
                className="w-full bg-transparent text-base text-[#181424] placeholder-[#6B6580]/60 outline-none font-sans"
              />
              <kbd className="hidden sm:inline-block text-[11px] font-mono bg-[#FFE4EE] text-[#F472B6] px-2 py-0.5 rounded-lg border border-[#F472B6]/30 font-semibold">
                ESC
              </kbd>
            </div>

            {/* Results List */}
            <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4 font-sans text-sm">
              {/* Quick Jump Sections */}
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#6B6580] px-3 mb-2 font-semibold">
                  Navigation
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                  {[
                    { id: 'hero', label: 'Hero Home' },
                    { id: 'about', label: 'About & Education' },
                    { id: 'skills', label: 'Technical Skills' },
                    { id: 'projects', label: 'Key Projects' },
                    { id: 'experience', label: 'Experience' },
                    { id: 'certifications', label: 'Certificates' },
                    { id: 'github', label: 'GitHub Activity' },
                    { id: 'contact', label: 'Contact Hub' }
                  ].map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => scrollTo(sec.id)}
                      onMouseEnter={() => sounds.playHover()}
                      className="flex items-center justify-between px-3 py-2 rounded-xl bg-[#FAF9FC] hover:bg-[#FFE4EE]/60 hover:text-[#F472B6] text-[#181424] text-xs font-medium transition-all text-left group"
                    >
                      <span>{sec.label}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-[#F472B6]" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Projects */}
              {filteredProjects.length > 0 && (
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#6B6580] px-3 mb-2 font-semibold">
                    Projects ({filteredProjects.length})
                  </div>
                  <div className="space-y-1">
                    {filteredProjects.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => {
                          sounds.playClick();
                          onClose();
                          onSelectProject(p.id);
                        }}
                        onMouseEnter={() => sounds.playHover()}
                        className="w-full flex items-center justify-between p-3 rounded-2xl bg-[#FAF9FC] hover:bg-[#FFE4EE]/50 transition-all text-left group border border-transparent hover:border-[#F472B6]/20"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-xl bg-[#FFE4EE] text-[#F472B6] flex items-center justify-center font-semibold text-xs">
                            <FolderGit2 className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="font-semibold text-[#181424] text-xs group-hover:text-[#F472B6] transition-colors">
                              {p.title}
                            </div>
                            <div className="text-[11px] text-[#6B6580] line-clamp-1">
                              {p.subtitle}
                            </div>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded-full border border-[#F472B6]/20 text-[#F472B6]">
                          Inspect
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills */}
              {filteredSkills.length > 0 && query && (
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#6B6580] px-3 mb-2 font-semibold">
                    Matched Skills ({filteredSkills.length})
                  </div>
                  <div className="flex flex-wrap gap-1.5 p-2 bg-[#FAF9FC] rounded-2xl border border-[#F472B6]/15">
                    {filteredSkills.slice(0, 12).map((s, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-full bg-white text-xs font-mono text-[#181424] border border-[#F472B6]/20 flex items-center gap-1.5 shadow-sm"
                      >
                        <Code2 className="w-3 h-3 text-[#F472B6]" />
                        {s.name}
                        <span className="text-[10px] text-[#F472B6] font-semibold">({s.level})</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Actions */}
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#6B6580] px-3 mb-2 font-semibold">
                  Direct Actions
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    className="flex items-center justify-between p-3 rounded-2xl bg-[#FAF9FC] hover:bg-[#FFE4EE]/60 text-xs font-medium text-[#181424] transition-all border border-[#F472B6]/15 group"
                  >
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-[#F472B6]" />
                      <span>Copy Email ({personalInfo.email})</span>
                    </div>
                    {copiedText === 'email' ? (
                      <Check className="w-3.5 h-3.5 text-green-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-[#6B6580] group-hover:text-[#F472B6]" />
                    )}
                  </button>

                  <button
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    className="flex items-center justify-between p-3 rounded-2xl bg-[#FAF9FC] hover:bg-[#FFE4EE]/60 text-xs font-medium text-[#181424] transition-all border border-[#F472B6]/15 group"
                  >
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-[#F472B6]" />
                      <span>Copy Phone ({personalInfo.phone})</span>
                    </div>
                    {copiedText === 'phone' ? (
                      <Check className="w-3.5 h-3.5 text-green-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-[#6B6580] group-hover:text-[#F472B6]" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3 border-t border-[#F472B6]/15 bg-[#FAF9FC]/80 flex items-center justify-between text-[11px] font-mono text-[#6B6580]">
              <span>Navigation: Type to search • Click to jump</span>
              <span className="text-[#F472B6] font-semibold">Afsana Kathoon A • Portfolio v2.0</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
