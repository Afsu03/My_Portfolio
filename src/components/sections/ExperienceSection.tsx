import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Sparkles, Calendar, MapPin, CheckCircle2, Github, ExternalLink } from 'lucide-react';
import { experienceList } from '../../data/resumeData';
import { Card3D } from '../ui/Card3D';
import { sounds } from '../../utils/sound';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-12 z-10">
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FFE4EE] text-[#F472B6] text-xs font-mono font-semibold mb-3 border border-[#F472B6]/25">
            <Sparkles className="w-3 h-3" />
            <span>04. PROFESSIONAL EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#181424] tracking-tight mb-4">
            Industry & <span className="bg-gradient-to-r from-[#F472B6] to-[#EC4899] bg-clip-text text-transparent">Engineering Practice</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6B6580] max-w-xl font-sans">
            Delivering robust client-facing web applications, responsive architectures, and optimized database models.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experienceList.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card3D
                intensity={8}
                className="p-6 sm:p-10 glass-panel-elevated bg-white/90 border-[#F472B6]/30 shadow-glass"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#F472B6]/15">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-mono font-semibold bg-[#FFE4EE] text-[#F472B6] mb-2">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{exp.type}</span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-[#181424]">
                      {exp.role}
                    </h3>
                    <div className="text-base font-semibold text-[#F472B6]">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-col md:items-end space-y-1 font-mono text-xs text-[#6B6580]">
                    <div className="flex items-center space-x-1.5 bg-[#FAF9FC] px-3 py-1.5 rounded-full border border-[#F472B6]/15">
                      <Calendar className="w-3.5 h-3.5 text-[#F472B6]" />
                      <span>{exp.period}</span>
                    </div>
                    {exp.location && (
                      <div className="flex items-center space-x-1.5 text-[11px] text-[#6B6580] px-2">
                        <MapPin className="w-3 h-3 text-[#F472B6]" />
                        <span>{exp.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Achievements Bullets */}
                <div className="py-6 space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#6B6580] font-semibold">
                    Key Contributions & Impact
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-[#181424]/85 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#F472B6] shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies used & repo */}
                <div className="pt-4 border-t border-[#F472B6]/15 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-full text-xs font-mono bg-[#FAF9FC] text-[#181424] border border-[#F472B6]/15 shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {exp.repoUrl && (
                    <a
                      href={exp.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      onMouseEnter={() => sounds.playHover()}
                      onClick={() => sounds.playClick()}
                      className="flex items-center space-x-1.5 text-xs font-semibold text-[#F472B6] hover:text-[#EC4899] transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Project Repository</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
