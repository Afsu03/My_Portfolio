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
        const inc = Math.floor(Math.random() * 8) + 3;
        const next = Math.min(100, prev + inc);
        
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
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#FAF8FA]"
          exit={{
            opacity: 0,
            y: -40,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
        >
          {/* Rich Royal Pink Ambient Glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#FCE7F3]/70 to-[#BE185D]/25 blur-[120px] pointer-events-none" />

          {/* Center Boot Content */}
          <div className="relative z-10 flex flex-col items-center max-w-md w-full px-6 text-center">
            {/* Holographic Monogram */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative mb-8"
            >
              <div className="w-20 h-20 rounded-2xl bg-white shadow-[0_10px_30px_rgba(190,24,93,0.3)] border border-[#BE185D]/30 flex items-center justify-center text-3xl font-display font-extrabold text-[#BE185D] relative overflow-hidden">
                <span className="relative z-10">AK</span>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FCE7F3]/40 via-transparent to-[#BE185D]/20 animate-pulse-glow" />
              </div>
              <div className="absolute -top-1 -right-1">
                <Sparkles className="w-5 h-5 text-[#BE185D] animate-bounce" />
              </div>
            </motion.div>

            {/* Name & Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl font-display font-bold text-[#19111E] tracking-tight mb-1"
            >
              AFSANA KATHOON A
            </motion.h2>
            <p className="text-xs uppercase tracking-[0.25em] text-[#BE185D] font-mono mb-8 font-semibold">
              AI Systems & Full Stack
            </p>

            {/* Progress Bar Container */}
            <div className="w-full bg-[#FCE7F3] h-1.5 rounded-full overflow-hidden mb-4 border border-[#BE185D]/20 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-[#DB2777] via-[#BE185D] to-[#9D174D] rounded-full relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-0 bottom-0 w-2 bg-white shadow-[0_0_8px_#ffffff]" />
              </motion.div>
            </div>

            {/* Progress Percentage & Status */}
            <div className="w-full flex items-center justify-between font-mono text-xs text-[#665C6B] mb-6">
              <div className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-[#BE185D] animate-ping" />
                <span className="text-[11px] uppercase tracking-wider text-[#19111E]/70 font-semibold">SYSTEM BOOT</span>
              </div>
              <span className="text-[#BE185D] font-bold tracking-wider">{progress}%</span>
            </div>

            {/* Futuristic Terminal Log */}
            <div className="flex items-center space-x-2 text-[11px] font-mono text-[#665C6B] bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#BE185D]/15 shadow-sm">
              <Terminal className="w-3.5 h-3.5 text-[#BE185D]" />
              <span className="truncate">{bootLogs[logIndex]}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
