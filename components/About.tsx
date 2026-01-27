
import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2 relative">
          <Reveal>
            <div className="relative glass p-4 rounded-[40px]">
              <div className="aspect-square rounded-[30px] overflow-hidden">
                <img
                  src="/images/origin-story.png"
                  alt="The Origin Marketing Co. Team"
                  className="w-full h-full object-cover grayscale opacity-80"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-indigo-600 text-white p-10 rounded-[30px] shadow-2xl hidden md:block">
                <span className="text-4xl font-black italic tracking-tighter">Est. 2026</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:w-1/2">
          <Reveal>
            <span className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4 block">The Origin Story</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
              A Partnership <span className="text-white/40 italic">Built on Results.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-xl text-white/60 leading-relaxed mb-8">
              Origin Marketing Co. was founded by two brothers with a simple mission: to give small business owners the same high-end marketing tools that big corporations use.
            </p>
            <p className="text-xl text-white/60 leading-relaxed">
              We believe in transparency, hard work, and building long-term partnerships with the businesses that power our community.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
