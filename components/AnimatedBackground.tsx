
import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base Radial Gradients */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/20 blur-[120px] rounded-full"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -40, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-900/20 blur-[120px] rounded-full"
      />
      
      {/* Light Beams */}
      <div className="absolute inset-0 opacity-[0.15]">
        <div className="absolute top-0 left-1/4 w-[1px] h-screen bg-gradient-to-b from-transparent via-white to-transparent transform -rotate-12" />
        <div className="absolute top-0 left-2/4 w-[1px] h-screen bg-gradient-to-b from-transparent via-indigo-400 to-transparent transform rotate-6" />
        <div className="absolute top-0 left-3/4 w-[1px] h-screen bg-gradient-to-b from-transparent via-blue-400 to-transparent transform -rotate-45" />
      </div>

      {/* Grid Overlay with Indigo Accent */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
      {/* Radial fade for grid edges */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%)'
        }}
      />
    </div>
  );
};
