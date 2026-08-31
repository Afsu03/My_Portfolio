import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Mail, Clock } from 'lucide-react';
import { personalInfo } from '../../data/resumeData';
import { sounds } from '../../utils/sound';

export const Footer: React.FC = () => {
  const [timeIST, setTimeIST] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setTimeIST(new Intl.DateTimeFormat('en-IN', options).format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    sounds.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-[#BE185D]/20 bg-white/80 backdrop-blur-2xl py-12 px-6 sm:px-12 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col space-y-8">
        {/* Top Tier: Monogram & Live Status */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#BE185D]/15">
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#DB2777] via-[#BE185D] to-[#9D174D] flex items-center justify-center text-white font-display font-extrabold text-lg shadow-[0_0_15px_rgba(190,24,93,0.4)]">
              AK
            </div>
            <div>
              <div className="font-display font-bold text-lg text-[#19111E]">
                Afsana Kathoon A
              </div>
              <div className="text-xs font-mono text-[#665C6B]">
                AI Systems Engineer & Full Stack Developer
              </div>
            </div>
          </div>

          {/* Status Indicators Deck */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#665C6B]">
            <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FAF8FA] border border-[#BE185D]/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Opportunities</span>
            </div>

            <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FAF8FA] border border-[#BE185D]/20">
              <Clock className="w-3.5 h-3.5 text-[#BE185D]" />
              <span>IST (UTC+5:30): {timeIST || '05:30 PM'}</span>
            </div>
          </div>
        </div>

        {/* Middle Tier: Quick Links and Direct Connect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-xs font-sans">
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#19111E] mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-[#665C6B]">
              <li><a href="#about" className="hover:text-[#BE185D] transition-colors">01. About & Education</a></li>
              <li><a href="#skills" className="hover:text-[#BE185D] transition-colors">02. Technical Skills</a></li>
              <li><a href="#projects" className="hover:text-[#BE185D] transition-colors">03. Key Projects</a></li>
              <li><a href="#experience" className="hover:text-[#BE185D] transition-colors">04. Experience & Certs</a></li>
              <li><a href="#contact" className="hover:text-[#BE185D] transition-colors">05. Contact Hub</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#19111E] mb-3">
              Featured Systems
            </h4>
            <ul className="space-y-2 text-[#665C6B]">
              <li><a href="#projects" className="hover:text-[#BE185D] transition-colors">AegisAI - SOC Platform</a></li>
              <li><a href="#projects" className="hover:text-[#BE185D] transition-colors">Alzheimer's Risk Model</a></li>
              <li><a href="#projects" className="hover:text-[#BE185D] transition-colors">Smart Destination Alert</a></li>
              <li><a href="#projects" className="hover:text-[#BE185D] transition-colors">ReviewShield AI</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#19111E] mb-3">
              Profiles & Code
            </h4>
            <div className="flex flex-col space-y-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 text-[#665C6B] hover:text-[#BE185D] transition-colors"
              >
                <Github className="w-4 h-4 text-[#BE185D]" />
                <span>GitHub (@Afsu03)</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 text-[#665C6B] hover:text-[#BE185D] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#BE185D]" />
                <span>LinkedIn (/in/afsanakathoon3)</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-2 text-[#665C6B] hover:text-[#BE185D] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#BE185D]" />
                <span>Email ({personalInfo.email})</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#19111E] mb-3">
              Design Philosophy
            </h4>
            <p className="text-[#665C6B] leading-relaxed text-[11px]">
              Crafted with modern React, Three.js/React Three Fiber 3D shaders, Framer Motion springs, and a luxurious rich royal dark pink aesthetic.
            </p>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Back To Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#BE185D]/15 text-xs text-[#665C6B]">
          <div className="flex items-center space-x-1 font-mono text-[11px]">
            <span>© {new Date().getFullYear()} Afsana Kathoon A. All rights reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => sounds.playHover()}
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-[#FAF8FA] hover:bg-[#FCE7F3] text-[#19111E] hover:text-[#BE185D] border border-[#BE185D]/20 transition-all font-mono text-xs group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
