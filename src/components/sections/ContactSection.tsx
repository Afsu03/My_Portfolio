import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, Sparkles, Linkedin, Github, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../../data/resumeData';
import { sounds } from '../../utils/sound';
import { Card3D } from '../ui/Card3D';

export const ContactSection: React.FC = () => {
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    sounds.playSuccess();
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    sounds.playClick();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      sounds.playSuccess();
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#BE185D', '#DB2777', '#9D174D', '#FBCFE8']
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-12 z-10">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FCE7F3] text-[#BE185D] text-xs font-mono font-semibold mb-3 border border-[#BE185D]/25">
            <Sparkles className="w-3 h-3" />
            <span>07. CONTACT & COLLABORATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#19111E] tracking-tight mb-4">
            Let's Build the <span className="bg-gradient-to-r from-[#BE185D] via-[#DB2777] to-[#9D174D] bg-clip-text text-transparent">Future of AI</span>
          </h2>
          <p className="text-sm sm:text-base text-[#665C6B] max-w-xl font-sans">
            Interested in discussing full-stack engineering, multi-agent AI pipelines, or high-throughput architectures? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Quick Direct Connect Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Copy Card */}
            <Card3D
              intensity={8}
              className="p-6 glass-panel-elevated bg-white/90 border-[#BE185D]/25 shadow-glass"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#FCE7F3] text-[#BE185D] flex items-center justify-center shadow-sm">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-[#665C6B] tracking-wider font-semibold">
                      Email Address
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-[#19111E] font-mono">
                      {personalInfo.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  onMouseEnter={() => sounds.playHover()}
                  className="p-2.5 rounded-xl bg-[#FAF8FA] hover:bg-[#FCE7F3] text-[#665C6B] hover:text-[#BE185D] border border-[#BE185D]/20 transition-all"
                  title="Copy email to clipboard"
                >
                  {copiedType === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </Card3D>

            {/* Phone Copy Card */}
            <Card3D
              intensity={8}
              className="p-6 glass-panel-elevated bg-white/90 border-[#BE185D]/25 shadow-glass"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#FCE7F3] text-[#BE185D] flex items-center justify-center shadow-sm">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-[#665C6B] tracking-wider font-semibold">
                      Direct Phone / WhatsApp
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-[#19111E] font-mono">
                      {personalInfo.phone}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  onMouseEnter={() => sounds.playHover()}
                  className="p-2.5 rounded-xl bg-[#FAF8FA] hover:bg-[#FCE7F3] text-[#665C6B] hover:text-[#BE185D] border border-[#BE185D]/20 transition-all"
                  title="Copy phone to clipboard"
                >
                  {copiedType === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </Card3D>

            {/* Social Connect Matrix */}
            <div className="p-6 rounded-3xl glass-panel bg-white/80 border-[#BE185D]/20 space-y-4">
              <h4 className="font-display font-bold text-sm text-[#19111E]">
                Social & Professional Networks
              </h4>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => sounds.playHover()}
                  onClick={() => sounds.playClick()}
                  className="flex items-center space-x-2.5 p-3 rounded-2xl bg-white hover:bg-[#FCE7F3]/70 text-xs font-semibold text-[#19111E] border border-[#BE185D]/20 shadow-sm transition-all group"
                >
                  <Linkedin className="w-4 h-4 text-[#BE185D] group-hover:scale-110 transition-transform" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => sounds.playHover()}
                  onClick={() => sounds.playClick()}
                  className="flex items-center space-x-2.5 p-3 rounded-2xl bg-white hover:bg-[#FCE7F3]/70 text-xs font-semibold text-[#19111E] border border-[#BE185D]/20 shadow-sm transition-all group"
                >
                  <Github className="w-4 h-4 text-[#BE185D] group-hover:scale-110 transition-transform" />
                  <span>GitHub</span>
                </a>
              </div>

              <div className="pt-2 text-xs font-mono text-[#665C6B] flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#BE185D]" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Interactive Transmission Form */}
          <div className="lg:col-span-7">
            <Card3D
              intensity={8}
              className="p-6 sm:p-8 glass-panel-elevated bg-white/95 border-[#BE185D]/30 shadow-glass-hover"
            >
              <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-[#BE185D] mb-4">
                <MessageSquare className="w-4 h-4" />
                <span>Transmit Direct Message</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#665C6B] mb-1.5 font-semibold">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Turing"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8FA] border border-[#BE185D]/20 text-xs text-[#19111E] placeholder-[#665C6B]/50 focus:outline-none focus:border-[#BE185D] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#665C6B] mb-1.5 font-semibold">
                      YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8FA] border border-[#BE185D]/20 text-xs text-[#19111E] placeholder-[#665C6B]/50 focus:outline-none focus:border-[#BE185D] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#665C6B] mb-1.5 font-semibold">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Job Opportunity / Research Discussion"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8FA] border border-[#BE185D]/20 text-xs text-[#19111E] placeholder-[#665C6B]/50 focus:outline-none focus:border-[#BE185D] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#665C6B] mb-1.5 font-semibold">
                    MESSAGE *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, team opportunity, or collaboration idea..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8FA] border border-[#BE185D]/20 text-xs text-[#19111E] placeholder-[#665C6B]/50 focus:outline-none focus:border-[#BE185D] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  onMouseEnter={() => sounds.playHover()}
                  className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl bg-gradient-to-r from-[#BE185D] via-[#DB2777] to-[#9D174D] text-white font-semibold text-xs shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 font-mono"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Encrypting & Transmitting...
                    </span>
                  ) : isSuccess ? (
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" /> Message Transmitted Successfully!
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" /> Send Message
                    </span>
                  )}
                </button>
              </form>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
};
