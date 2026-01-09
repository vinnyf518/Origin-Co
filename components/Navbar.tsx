
import React from 'react';
import { motion } from 'framer-motion';
import { useQuoteForm } from '../App';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const { openQuoteForm } = useQuoteForm();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-full px-8 py-3">
        <div className="flex items-center gap-3">
          <Logo size={40} />
          <span className="font-bold text-xl tracking-tight uppercase">Origin</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#industries" className="hover:text-white transition-colors">Industries</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
        </div>

        <button
          onClick={openQuoteForm}
          className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-indigo-500 hover:text-white transition-all transform hover:scale-105 active:scale-95"
        >
          Get a Quote
        </button>
      </div>
    </motion.nav>
  );
};
