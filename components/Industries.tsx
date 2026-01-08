
import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';

const industries = [
  {
    name: "Home Services",
    desc: "Handymen, HVAC, Plumbers, Landscapers.",
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=500&fit=crop"
  },
  {
    name: "Professional Services",
    desc: "Lawyers, Accountants, Real Estate.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
  },
  {
    name: "Health & Wellness",
    desc: "Gyms, Salons, Local Clinics.",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=500&fit=crop"
  },
  {
    name: "Local Retail",
    desc: "Coffee Shops, Boutiques, Specialty Stores.",
    img: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400&h=500&fit=crop"
  }
];

export const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <Reveal>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                Built for <span className="text-white/40">Every Industry.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="text-xl text-white/60 font-medium">
                Whether you’re a contractor on a job site or a professional in an office, we build the tools you need to grow.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-[4/5] rounded-[32px] overflow-hidden group cursor-pointer"
            >
              <img 
                src={item.img} 
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-60 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{item.name}</h3>
                <p className="text-white/50 text-sm opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 duration-500">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
