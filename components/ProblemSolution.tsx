
import React from 'react';
import { Reveal } from './Reveal';

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <Reveal>
            <h2 className="text-5xl md:text-6xl font-bold leading-[0.9] tracking-tighter mb-8">
              Marketing Shouldn’t Be a <span className="text-white/40 italic">Full-Time Job.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-xl text-white/60 leading-relaxed mb-8">
              You’re an expert at what you do, but finding new customers online is a different game. Most small businesses have a website that looks dated or, worse, doesn't show up on Google at all.
            </p>
          </Reveal>
          <Reveal delay={0.5}>
            <div className="p-8 border-l-2 border-indigo-600 bg-indigo-600/5 rounded-r-2xl">
              <p className="text-lg font-medium text-white italic">
                "At Origin Marketing Co., we bridge that gap. We provide the professional digital presence you need to build trust and keep your schedule full."
              </p>
            </div>
          </Reveal>
        </div>
        
        <Reveal delay={0.6}>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative glass rounded-3xl overflow-hidden aspect-video">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
                alt="Team collaboration on digital strategy"
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
