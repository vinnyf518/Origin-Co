
import React from 'react';
import { motion } from 'framer-motion';
import { useQuoteForm } from '../App';

export const Hero: React.FC = () => {
  const { openQuoteForm } = useQuoteForm();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, damping: 15 } }
  };

  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden min-h-screen flex flex-col justify-center items-center text-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl"
      >
        <motion.div variants={item} className="mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-bold tracking-widest uppercase">
            Marketing & Web Solutions
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-8"
        >
          YOUR BUSINESS,<br />
          <span className="text-indigo-600">ELEVATED.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-xl md:text-2xl text-white/60 font-medium max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Origin Marketing Co. builds high-performance websites and local marketing strategies for small businesses and service professionals. We handle the digital side so you can focus on the work.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={openQuoteForm}
            className="w-full sm:w-auto px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold text-lg transition-all shadow-[0_0_40px_-10px_rgba(79,70,229,0.5)] hover:shadow-indigo-500/40 transform hover:-translate-y-1"
          >
            Get a Free Quote
          </button>
          <a
            href="#services"
            className="w-full sm:w-auto px-10 py-5 glass hover-glass rounded-2xl font-bold text-lg transition-all transform hover:-translate-y-1"
          >
            View Our Services
          </a>
        </motion.div>
      </motion.div>

      {/* Showcase Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="mt-20 glass w-full max-w-5xl h-64 md:h-96 rounded-3xl relative p-2 overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-blue-600/10 z-10 pointer-events-none" />
        <div className="w-full h-full bg-[#0a0a0a] rounded-2xl border border-white/5 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop"
            alt="Professional workspace with analytics dashboard"
            className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
          />
        </div>
      </motion.div>
    </section>
  );
};
