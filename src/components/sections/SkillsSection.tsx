import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Cpu, Binary, Database, Wrench, Search, Sparkles, CheckCircle2 } from 'lucide-react';
import { skillCategories } from '../../data/resumeData';
import { sounds } from '../../utils/sound';
import { Card3D } from '../ui/Card3D';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Binary': return <Binary className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      default: return <Wrench className="w-5 h-5" />;
    }
  };

  const filteredCategories = skillCategories.map(cat => {
    if (activeTab !== 'all' && cat.id !== activeTab) {
      return null;
    }
    const filteredSkills = cat.skills.filter(s =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tags?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    if (filteredSkills.length === 0 && searchQuery) {
      return null;
    }

    return {
      ...cat,
      skills: filteredSkills
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-12 z-10">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FCE7F3] text-[#BE185D] text-xs font-mono font-semibold mb-3 border border-[#BE185D]/25">
            <Sparkles className="w-3 h-3" />
            <span>02. TECHNICAL MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#19111E] tracking-tight mb-4">
            Full-Stack & <span className="bg-gradient-to-r from-[#BE185D] via-[#DB2777] to-[#9D174D] bg-clip-text text-transparent">AI Toolchain</span>
          </h2>
          <p className="text-sm sm:text-base text-[#665C6B] max-w-2xl font-sans">
            Grounded in core Computer Science fundamentals, algorithms, scalable backend architectures, and intelligent agent orchestration.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Categories Tab Pill Bar */}
          <div className="flex items-center flex-wrap gap-1.5 p-1.5 rounded-full glass-panel bg-white/80 border-[#BE185D]/20">
            <button
              onClick={() => {
                sounds.playClick();
                setActiveTab('all');
              }}
              onMouseEnter={() => sounds.playHover()}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-[#BE185D] via-[#DB2777] to-[#9D174D] text-white shadow-sm font-semibold'
                  : 'text-[#665C6B] hover:text-[#19111E]'
              }`}
            >
              All Skills
            </button>

            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  sounds.playClick();
                  setActiveTab(cat.id);
                }}
                onMouseEnter={() => sounds.playHover()}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeTab === cat.id
                    ? 'bg-gradient-to-r from-[#BE185D] via-[#DB2777] to-[#9D174D] text-white shadow-sm font-semibold'
                    : 'text-[#665C6B] hover:text-[#19111E]'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#BE185D] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Java, DBMS)..."
              className="w-full pl-9 pr-4 py-2 rounded-full glass-panel bg-white/90 border-[#BE185D]/25 text-xs text-[#19111E] placeholder-[#665C6B]/70 focus:outline-none focus:border-[#BE185D] transition-all font-mono"
            />
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCategories.map((cat) => {
              if (!cat) return null;
              return (
                <motion.div
                  key={cat.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card3D
                    intensity={10}
                    className="p-6 h-full glass-panel-elevated bg-white/90 border-[#BE185D]/25 shadow-glass flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 rounded-2xl bg-[#FCE7F3] text-[#BE185D] flex items-center justify-center shadow-sm">
                          {getIcon(cat.icon)}
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-base text-[#19111E]">
                            {cat.title}
                          </h3>
                          <div className="text-[11px] font-mono text-[#665C6B]">
                            {cat.skills.length} competencies
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-[#665C6B] mb-5 leading-relaxed">
                        {cat.description}
                      </p>

                      {/* Skills List with Tags */}
                      <div className="space-y-3">
                        {cat.skills.map((skill, sIdx) => (
                          <div
                            key={sIdx}
                            onMouseEnter={() => sounds.playHover()}
                            className="p-3 rounded-2xl bg-[#FAF8FA] hover:bg-[#FCE7F3]/50 border border-[#BE185D]/15 transition-all group"
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="font-semibold text-xs text-[#19111E] group-hover:text-[#BE185D] transition-colors">
                                {skill.name}
                              </span>
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white text-[#BE185D] border border-[#BE185D]/25 font-bold">
                                {skill.level}
                              </span>
                            </div>

                            {skill.tags && (
                              <div className="flex flex-wrap gap-1 mt-1">
                                {skill.tags.map((t, tIdx) => (
                                  <span
                                    key={tIdx}
                                    className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/80 text-[#665C6B] border border-[#BE185D]/10"
                                  >
                                    #{t}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-[#BE185D]/15 flex items-center justify-between text-[10px] font-mono text-[#665C6B]">
                      <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                        <CheckCircle2 className="w-3 h-3" /> Verified in Projects
                      </span>
                      <span className="text-[#BE185D] font-bold">v2025</span>
                    </div>
                  </Card3D>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
