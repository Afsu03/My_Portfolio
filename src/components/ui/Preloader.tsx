import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Terminal } from 'lucide-react';
import { sounds } from '../../utils/sound';

interface PreloaderProps {
  onComplete: () => void;
}

const bootLogs = [
  "INITIALIZING NEURAL SUBSYSTEMS...",
  "LOADING WEBGL GEOMETRIES & SHADERS...",
  "CALIBRATING MULTI-AGENT PIPELINES...",
  "SYNCHRONIZING REPOSITORIES @Afsu03...",
  "SYSTEM NOMINAL. LAUNCHING PORTFOLIO."
];

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    sounds.playChime();
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 800);
          }, 300);
          return 100;
        }
        // Random speed steps for organic high-tech loading feel
        const inc = Math.floor(Math.random() * 8) + 3;
        const next = Math.min(100, prev + inc);
        
        // Advance log messages based on progress
        const nextLogIndex = Math.min(
          bootLogs.length - 1,
          Math.floor((next / 100) * bootLogs.length)
        );
        setLogIndex(nextLogIndex);

        return next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#FAF9FC]"
          exit={{
            opacity: 0,
            y: -40,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
        >
          {/* Subtle Pink Ambient Glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#FFD1E3]/50 to-[#F472B6]/20 blur-[120px] pointer-events-none" />

          {/* Center Boot Content */}
          <div className="relative z-10 flex flex-col items-center max-w-md w-full px-6 text-center">
            {/* Holographic Monogram */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative mb-8"
            >
              <div className="w-20 h-20 rounded-2xl bg-white shadow-[0_10px_30px_rgba(244,114,182,0.25)] border border-[#F472B6]/30 flex items-center justify-center text-3xl font-display font-extrabold text-[#F472B6] relative overflow-hidden">
                <span className="relative z-10">AK</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD1E3]/40 via-transparent to-[#F472B6]/20 animate-pulse-glow" />
              </div>
              <div className="absolute -top-1 -right-1">
                <Sparkles className="w-5 h-5 text-[#F472B6] animate-bounce" />
              </div>
            </motion.div>

            {/* Name & Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl font-display font-bold text-[#181424] tracking-tight mb-1"
            >
              AFSANA KATHOON A
            </motion.h2>
            <p className="text-xs uppercase tracking-[0.25em] text-[#F472B6] font-mono mb-8 font-semibold">
              AI Systems & Full Stack
            </p>

            {/* Progress Bar Container */}
            <div className="w-full bg-[#FFE4EE]/60 h-1.5 rounded-full overflow-hidden mb-4 border border-[#F472B6]/20 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-[#FDA4AF] via-[#F472B6] to-[#EC4899] rounded-full relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-0 bottom-0 w-2 bg-white shadow-[0_0_8px_#ffffff]" />
              </motion.div>
            </div>

            {/* Progress Percentage & Status */}
            <div className="w-full flex items-center justify-between font-mono text-xs text-[#6B6580] mb-6">
              <div className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-[#F472B6] animate-ping" />
                <span className="text-[11px] uppercase tracking-wider text-[#181424]/70 font-semibold">SYSTEM BOOT</span>
              </div>
              <span className="text-[#F472B6] font-bold tracking-wider">{progress}%</span>
            </div>

            {/* Futuristic Terminal Log */}
            <div className="flex items-center space-x-2 text-[11px] font-mono text-[#6B6580] bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#F472B6]/15 shadow-sm">
              <Terminal className="w-3.5 h-3.5 text-[#F472B6]" />
              <span className="truncate">{bootLogs[logIndex]}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
