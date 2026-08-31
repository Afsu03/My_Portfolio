import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Github, Mail } from 'lucide-react';
import { personalInfo } from '../../data/resumeData';
import { sounds } from '../../utils/sound';
import { Card3D } from '../ui/Card3D';

interface HeroSectionProps {
  onOpenProjects: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenProjects }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#FCE7F3]/70 via-[#FBCFE8]/30 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        {/* Holographic Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-pill shadow-sm mb-6 border border-[#BE185D]/30 hover:border-[#BE185D]/60 transition-all cursor-default"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BE185D] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#BE185D]" />
          </span>
          <span className="text-xs font-mono font-medium text-[#19111E]">
            AVAILABLE FOR HIGH-IMPACT ROLES & RESEARCH
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#BE185D]" />
        </motion.div>

        {/* Main Title & Editorial Typography */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-[#19111E] leading-[1.08]">
            AFSANA <span className="bg-gradient-to-r from-[#BE185D] via-[#DB2777] to-[#9D174D] bg-clip-text text-transparent">KATHOON</span>
          </h1>
        </motion.div>

        {/* Subtitle / Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl text-[#665C6B] font-sans font-medium max-w-3xl mb-4 leading-relaxed"
        >
          AI Systems Engineer & Full Stack Developer
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-sm sm:text-base text-[#665C6B]/90 max-w-2xl mb-8 font-mono leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Interactive Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              sounds.playClick();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            onMouseEnter={() => sounds.playHover()}
            className="flex items-center space-x-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#BE185D] via-[#DB2777] to-[#9D174D] text-white font-semibold text-sm shadow-[0_10px_25px_rgba(190,24,93,0.4)] hover:shadow-[0_15px_35px_rgba(190,24,93,0.55)] hover:scale-[1.03] active:scale-[0.98] transition-all group"
          >
            <span>Explore Engineering Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => sounds.playHover()}
            onClick={() => sounds.playClick()}
            className="flex items-center space-x-2 px-6 py-3.5 rounded-full glass-panel hover:bg-white text-[#19111E] font-semibold text-sm border border-[#BE185D]/30 hover:border-[#BE185D]/60 shadow-sm hover:shadow-md transition-all group"
          >
            <Github className="w-4 h-4 text-[#BE185D] group-hover:scale-110 transition-transform" />
            <span>GitHub Profile</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              sounds.playClick();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            onMouseEnter={() => sounds.playHover()}
            className="flex items-center space-x-2 px-6 py-3.5 rounded-full glass-panel hover:bg-white text-[#19111E] font-semibold text-sm border border-[#BE185D]/30 hover:border-[#BE185D]/60 shadow-sm hover:shadow-md transition-all group"
          >
            <Mail className="w-4 h-4 text-[#BE185D] group-hover:scale-110 transition-transform" />
            <span>Get in Touch</span>
          </a>
        </motion.div>

        {/* Quick Stats Bento Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl"
        >
          {personalInfo.stats.map((st, i) => (
            <Card3D
              key={i}
              intensity={8}
              className="p-4 sm:p-5 glass-panel bg-white/80 hover:bg-white border-[#BE185D]/20 transition-all text-center"
            >
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-[#BE185D] tracking-tight mb-0.5">
                {st.value}
              </div>
              <div className="text-xs font-semibold text-[#19111E] mb-0.5">
                {st.label}
              </div>
              <div className="text-[10px] font-mono text-[#665C6B] uppercase tracking-wider">
                {st.unit}
              </div>
            </Card3D>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
