import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Github, ArrowUpRight, Zap } from 'lucide-react';
import { projectsList } from '../../data/resumeData';
import { Project } from '../../types/portfolio';
import { Card3D } from '../ui/Card3D';
import { sounds } from '../../utils/sound';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'All' | 'AI / LLM' | 'Machine Learning' | 'Systems'>('All');

  const filteredProjects = projectsList.filter(p => {
    if (filter === 'All') return true;
    if (filter === 'Systems') return p.category === 'IoT / Systems' || p.category === 'Full Stack';
    return p.category === filter;
  });

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-12 z-10">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FCE7F3] text-[#BE185D] text-xs font-mono font-semibold mb-3 border border-[#BE185D]/25">
            <Sparkles className="w-3 h-3" />
            <span>03. FEATURED SYSTEMS & AI PLATFORMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#19111E] tracking-tight mb-4">
            Architected for <span className="bg-gradient-to-r from-[#BE185D] via-[#DB2777] to-[#9D174D] bg-clip-text text-transparent">Scale & Intelligence</span>
          </h2>
          <p className="text-sm sm:text-base text-[#665C6B] max-w-2xl font-sans">
            Production-grade systems featuring deterministic multi-format log ingestion, multi-agent AI orchestration, sub-second query caching, and clinical predictive classifiers.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full glass-panel bg-white/80 border-[#BE185D]/20">
            {(['All', 'AI / LLM', 'Machine Learning', 'Systems'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  sounds.playClick();
                  setFilter(tab);
                }}
                onMouseEnter={() => sounds.playHover()}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  filter === tab
                    ? 'bg-gradient-to-r from-[#BE185D] via-[#DB2777] to-[#9D174D] text-white shadow-sm font-semibold'
                    : 'text-[#665C6B] hover:text-[#19111E]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Hero Project: AegisAI */}
        {projectsList[0] && (filter === 'All' || filter === 'AI / LLM') && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Card3D
              intensity={8}
              className="p-6 sm:p-10 glass-panel-elevated bg-white/95 border-[#BE185D]/30 shadow-glass-hover"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#FCE7F3] text-[#BE185D] border border-[#BE185D]/30 shadow-sm flex items-center gap-1">
                      <Zap className="w-3 h-3" /> FEATURED FLAGSHIP
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono text-[#665C6B] bg-white border border-[#BE185D]/15">
                      4-Agent LLM Orchestration
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-[#19111E]">
                    {projectsList[0].title}
                  </h3>
                  <div className="text-sm font-semibold text-[#BE185D] -mt-2 font-mono">
                    {projectsList[0].subtitle}
                  </div>

                  <p className="text-sm text-[#19111E]/80 leading-relaxed font-sans">
                    {projectsList[0].architectureSummary}
                  </p>

                  <ul className="space-y-2 pt-1 text-xs text-[#665C6B]">
                    {projectsList[0].bullets.slice(0, 3).map((bullet, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#BE185D] shrink-0 mt-1.5" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {projectsList[0].technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-full bg-white text-[11px] font-mono text-[#19111E] border border-[#BE185D]/20 shadow-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-3 pt-4">
                    <button
                      onClick={() => {
                        sounds.playClick();
                        onSelectProject(projectsList[0]);
                      }}
                      onMouseEnter={() => sounds.playHover()}
                      className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#BE185D] via-[#DB2777] to-[#9D174D] text-white text-xs font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all"
                    >
                      <span>Deep Dive Architecture</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    <a
                      href={projectsList[0].githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onMouseEnter={() => sounds.playHover()}
                      onClick={() => sounds.playClick()}
                      className="flex items-center space-x-2 px-4 py-2.5 rounded-full bg-white hover:bg-[#FCE7F3]/60 text-[#19111E] text-xs font-semibold border border-[#BE185D]/25 transition-all shadow-sm group"
                    >
                      <Github className="w-4 h-4 text-[#BE185D] group-hover:rotate-12 transition-transform" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>

                {/* Metrics Visual Deck */}
                <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                  {projectsList[0].metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white border border-[#BE185D]/25 shadow-sm flex flex-col justify-between"
                    >
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#665C6B]">
                        {m.label}
                      </span>
                      <span className="text-xl sm:text-2xl font-display font-extrabold text-[#BE185D] my-1">
                        {m.value}
                      </span>
                      <span className="text-[11px] text-[#665C6B] leading-tight">
                        {m.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card3D>
          </motion.div>
        )}

        {/* Secondary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.slice(filter === 'All' ? 1 : 0).map((proj) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card3D
                intensity={10}
                className="p-6 sm:p-8 h-full glass-panel-elevated bg-white/90 border-[#BE185D]/25 shadow-glass flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#FCE7F3] text-[#BE185D] border border-[#BE185D]/20">
                      {proj.category}
                    </span>
                    <span className="text-[10px] font-mono text-[#665C6B]">
                      {proj.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-[#19111E] mb-1">
                    {proj.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#BE185D] mb-3 font-mono">
                    {proj.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-[#665C6B] leading-relaxed mb-4">
                    {proj.architectureSummary}
                  </p>

                  {proj.metrics[0] && (
                    <div className="p-3 rounded-xl bg-[#FAF8FA] border border-[#BE185D]/15 mb-4 flex items-center justify-between">
                      <span className="text-xs font-mono text-[#665C6B]">
                        {proj.metrics[0].label}
                      </span>
                      <span className="text-sm font-display font-bold text-[#BE185D]">
                        {proj.metrics[0].value}
                      </span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.technologies.slice(0, 5).map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-full bg-white text-[10px] font-mono text-[#19111E] border border-[#BE185D]/20 shadow-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#BE185D]/15 flex items-center justify-between">
                  <button
                    onClick={() => {
                      sounds.playClick();
                      onSelectProject(proj);
                    }}
                    onMouseEnter={() => sounds.playHover()}
                    className="text-xs font-semibold text-[#BE185D] hover:text-[#9D174D] flex items-center gap-1 transition-colors"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => sounds.playHover()}
                    onClick={() => sounds.playClick()}
                    className="w-8 h-8 rounded-full bg-white hover:bg-[#FCE7F3] flex items-center justify-center text-[#19111E] hover:text-[#BE185D] border border-[#BE185D]/20 transition-all shadow-sm"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
