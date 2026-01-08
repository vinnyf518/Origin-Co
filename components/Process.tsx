
import React from 'react';
import { Reveal } from './Reveal';

const steps = [
  {
    number: "01",
    title: "The Discovery Call",
    description: "We learn about your business goals and your target audience in a strategy-focused conversation."
  },
  {
    number: "02",
    title: "The Build Phase",
    description: "Our team designs your high-performance site and sets up your local marketing foundation."
  },
  {
    number: "03",
    title: "The Launch & Growth",
    description: "We go live and provide ongoing support to ensure your phone keeps ringing month after month."
  }
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-24 text-center">
            Our Three-Step <span className="text-indigo-600">Origin Process</span>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-[1px] bg-white/10 -z-10" />
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-start lg:items-center text-left lg:text-center group">
              <Reveal delay={index * 0.2}>
                <div className="w-20 h-20 bg-black border border-white/10 rounded-3xl flex items-center justify-center text-3xl font-black text-indigo-500 mb-8 group-hover:border-indigo-500/50 group-hover:text-white transition-all duration-500 glass">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-white/50 text-lg leading-relaxed">{step.description}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
