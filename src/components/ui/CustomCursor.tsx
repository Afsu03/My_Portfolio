import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate custom cursor on fine pointer devices (desktop)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      const isInteractive = !!target?.closest('button, a, input, textarea, [data-interactive="true"]');
      setIsHovered(isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Outer Glowing Pink Aura */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-gradient-to-tr from-[#F472B6]/30 to-[#FFD1E3]/20 border border-[#F472B6]/40 blur-[1px] pointer-events-none"
        animate={{
          x: pos.x - (isHovered ? 28 : 16),
          y: pos.y - (isHovered ? 28 : 16),
          width: isHovered ? 56 : 32,
          height: isHovered ? 56 : 32,
          scale: isClicking ? 0.8 : 1,
          opacity: 1
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
          mass: 0.5
        }}
      />

      {/* Core Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-[#F472B6] shadow-[0_0_12px_#F472B6] pointer-events-none"
        animate={{
          x: pos.x - 5,
          y: pos.y - 5,
          scale: isHovered ? 1.5 : (isClicking ? 0.5 : 1)
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 800,
          mass: 0.1
        }}
      />
    </div>
  );
};
