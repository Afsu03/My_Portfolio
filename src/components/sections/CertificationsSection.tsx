import React from 'react';
import { motion } from 'framer-motion';
import { Award, Sparkles, CheckCircle2, ShieldCheck, Trophy, BookCheck } from 'lucide-react';
import { certificationsList } from '../../data/resumeData';
import { Card3D } from '../ui/Card3D';

export const CertificationsSection: React.FC = () => {
  const getBadgeIcon = (type: string) => {
    switch (type) {
      case 'championship': return <Trophy className="w-5 h-5 text-amber-500" />;
      case 'certification': return <Award className="w-5 h-5 text-[#BE185D]" />;
      case 'assessment': return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      default: return <BookCheck className="w-5 h-5 text-purple-600" />;
    }
  };

  return (
    <section id="certifications" className="relative py-24 px-4 sm:px-6 lg:px-12 z-10">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FCE7F3] text-[#BE185D] text-xs font-mono font-semibold mb-3 border border-[#BE185D]/25">
            <Sparkles className="w-3 h-3" />
            <span>05. HONORS & CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#19111E] tracking-tight mb-4">
            Validated by <span className="bg-gradient-to-r from-[#BE185D] via-[#DB2777] to-[#9D174D] bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-sm sm:text-base text-[#665C6B] max-w-xl font-sans">
            Recognized in advanced AI workflows, Salesforce Trailhead Agentforce, enterprise engineering, and algorithmic database query evaluation.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsList.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card3D
                intensity={12}
                className="p-6 h-full glass-panel-elevated bg-white/90 border-[#BE185D]/25 shadow-glass flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-[#FCE7F3] flex items-center justify-center shadow-sm">
                      {getBadgeIcon(cert.badgeType)}
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#FAF8FA] text-[#665C6B] border border-[#BE185D]/15">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#19111E] mb-1 leading-snug">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#BE185D] mb-3 font-mono">
                    {cert.issuer}
                  </div>

                  {cert.highlight && (
                    <div className="p-2.5 rounded-xl bg-[#FDF2F8] border border-[#BE185D]/20 text-xs text-[#19111E] mb-4 font-sans">
                      <span className="font-semibold text-[#BE185D]">Focus: </span>
                      {cert.highlight}
                    </div>
                  )}

                  {/* Skills Learned */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cert.skillsLearned.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#FAF8FA] text-[#665C6B] border border-[#BE185D]/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#BE185D]/15 flex items-center justify-between text-[11px] font-mono text-[#665C6B]">
                  <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Credential Verified
                  </span>
                  <span className="text-[#BE185D] capitalize font-semibold">{cert.badgeType}</span>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
