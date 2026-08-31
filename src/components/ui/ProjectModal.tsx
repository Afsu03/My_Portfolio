import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Sparkles, CheckCircle2, Cpu, ShieldCheck, Activity } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Project } from '../../types/portfolio';
import { sounds } from '../../utils/sound';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      sounds.playChime();
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#F472B6', '#FFB3D1', '#FDA4AF', '#E8D5FF']
      });
    }
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[99990] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0F0C1B]/50 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-3xl bg-white/95 backdrop-blur-2xl rounded-3xl border border-[#F472B6]/30 shadow-[0_30px_70px_-15px_rgba(244,114,182,0.35)] overflow-hidden z-10 my-8"
        >
          {/* Header Banner with Pastel Gradient */}
          <div className="relative p-6 sm:p-8 bg-gradient-to-br from-[#FFF5F8] via-[#FFE4EE]/60 to-white border-b border-[#F472B6]/15">
            <button
              onClick={() => {
                sounds.playClick();
                onClose();
              }}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/80 hover:bg-white border border-[#F472B6]/20 flex items-center justify-center text-[#181424] hover:text-[#F472B6] transition-all shadow-sm group"
            >
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
            </button>

            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#FFE4EE] text-[#F472B6] border border-[#F472B6]/25">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono text-[#6B6580] bg-white border border-[#F472B6]/15">
                Status: {project.status}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#181424] mb-2 tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-[#6B6580] font-sans max-w-2xl leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
            {/* Architecture Overview */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF9FC] border border-[#F472B6]/15">
              <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-[#F472B6] mb-2">
                <Cpu className="w-4 h-4" />
                <span>Architecture & Engineering Highlights</span>
              </div>
              <p className="text-sm text-[#181424] leading-relaxed font-sans">
                {project.architectureSummary}
              </p>
            </div>

            {/* Performance Metrics Grid */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#6B6580] font-semibold mb-3">
                Key Performance Metrics & Architecture Specs
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-2xl bg-white border border-[#F472B6]/20 shadow-sm flex flex-col justify-between"
                  >
                    <span className="text-[10px] font-mono text-[#6B6580] uppercase tracking-wider">
                      {metric.label}
                    </span>
                    <span className="text-lg sm:text-xl font-display font-extrabold text-[#F472B6] my-1">
                      {metric.value}
                    </span>
                    <span className="text-[11px] text-[#6B6580] leading-tight">
                      {metric.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Bullets */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#6B6580] font-semibold mb-3">
                Detailed Implementation Points
              </h4>
              <ul className="space-y-2.5">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start space-x-3 text-xs sm:text-sm text-[#181424]/85 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#F472B6] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#6B6580] font-semibold mb-3">
                Technologies & Frameworks
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-[#FFE4EE]/60 text-[#181424] border border-[#F472B6]/20 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Actions Footer */}
          <div className="p-6 bg-[#FAF9FC] border-t border-[#F472B6]/15 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-mono text-[#6B6580]">
              Curated from verified resume repositories
            </span>

            <div className="flex items-center space-x-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => sounds.playHover()}
                onClick={() => sounds.playClick()}
                className="flex items-center space-x-2 px-5 py-2 rounded-full bg-white hover:bg-[#FFE4EE]/60 text-[#181424] border border-[#F472B6]/30 text-xs font-semibold shadow-sm transition-all group"
              >
                <Github className="w-4 h-4 text-[#F472B6] group-hover:scale-110 transition-transform" />
                <span>View Source on GitHub</span>
                <ExternalLink className="w-3 h-3 text-[#6B6580]" />
              </a>

              <button
                onClick={() => {
                  sounds.playClick();
                  onClose();
                }}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-[#F472B6] to-[#EC4899] text-white text-xs font-semibold shadow-md hover:shadow-lg transition-all"
              >
                Done
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
