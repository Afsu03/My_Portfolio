import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Sparkles, Terminal, CheckCircle2, MapPin, Calendar } from 'lucide-react';
import { personalInfo, educationList } from '../../data/resumeData';
import { Card3D } from '../ui/Card3D';
import { sounds } from '../../utils/sound';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-12 z-10">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FFE4EE] text-[#F472B6] text-xs font-mono font-semibold mb-3 border border-[#F472B6]/25">
            <Sparkles className="w-3 h-3" />
            <span>01. ABOUT & FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#181424] tracking-tight">
            Engineering with <span className="bg-gradient-to-r from-[#F472B6] to-[#EC4899] bg-clip-text text-transparent">Purpose & Precision</span>
          </h2>
        </div>

        {/* Narrative + Quick Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Main Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel-elevated bg-white/85 border-[#F472B6]/25 shadow-glass">
              <h3 className="text-xl font-display font-bold text-[#181424] mb-4 flex items-center gap-2">
                <span>Who I Am</span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#FFE4EE] text-[#F472B6]">
                  Computer Science Engineer
                </span>
              </h3>
              <p className="text-sm sm:text-base text-[#181424]/80 leading-relaxed mb-4 font-sans">
                {personalInfo.bio}
              </p>
              <p className="text-sm sm:text-base text-[#181424]/80 leading-relaxed font-sans">
                My engineering approach combines algorithmic rigor with modern AI orchestration. Whether designing multi-tenant systems with AES-256-GCM encryption, building deterministic log parsers processing 35,000+ events every second, or training ML classification pipelines, I prioritize scalability, reliability, and human-centric software.
              </p>

              <div className="mt-6 pt-6 border-t border-[#F472B6]/15 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="flex items-center space-x-2 text-[#6B6580]">
                  <MapPin className="w-4 h-4 text-[#F472B6]" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-[#6B6580]">
                  <Terminal className="w-4 h-4 text-[#F472B6]" />
                  <span>Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            {/* Core Competencies highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl glass-panel bg-white/70 border-[#F472B6]/20">
                <div className="text-[#F472B6] font-display font-bold text-lg mb-1">01. Agentic AI</div>
                <p className="text-xs text-[#6B6580] leading-relaxed">
                  Multi-agent LLM pipelines, Zod structured validation, Agentforce workflows.
                </p>
              </div>
              <div className="p-4 rounded-2xl glass-panel bg-white/70 border-[#F472B6]/20">
                <div className="text-[#F472B6] font-display font-bold text-lg mb-1">02. Backends</div>
                <p className="text-xs text-[#6B6580] leading-relaxed">
                  Sub-second query caching, normalized MySQL/PostgreSQL schemas, RESTful APIs.
                </p>
              </div>
              <div className="p-4 rounded-2xl glass-panel bg-white/70 border-[#F472B6]/20">
                <div className="text-[#F472B6] font-display font-bold text-lg mb-1">03. Machine Learning</div>
                <p className="text-xs text-[#6B6580] leading-relaxed">
                  Classification pipelines, NLP text analysis, clinical risk stratification.
                </p>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-[#181424] px-1">
              <GraduationCap className="w-4 h-4 text-[#F472B6]" />
              <span>Academic Trajectory</span>
            </div>

            <div className="space-y-4">
              {educationList.map((edu, i) => (
                <Card3D
                  key={i}
                  intensity={10}
                  className="p-6 glass-panel-elevated bg-white/85 border-[#F472B6]/25 shadow-glass"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#FFE4EE] text-[#F472B6] border border-[#F472B6]/20">
                      {edu.period}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#181424] bg-white px-2 py-0.5 rounded-lg border border-[#F472B6]/20 shadow-sm">
                      {edu.scoreLabel}: {edu.score}
                    </span>
                  </div>

                  <h4 className="text-base font-display font-bold text-[#181424] mb-1">
                    {edu.degree}
                  </h4>
                  <div className="text-xs font-medium text-[#F472B6] mb-3">
                    {edu.institution}
                  </div>

                  <ul className="space-y-1.5">
                    {edu.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs text-[#6B6580]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F472B6] shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card3D>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
