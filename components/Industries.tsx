
import React from 'react';
import { Reveal } from './Reveal';

const industries = [
  {
    name: "Home Services",
    desc: "Handymen, HVAC, Plumbers, Landscapers.",
    img: "https://images.unsplash.com/photo-1540479859555-17af45c78602?w=400&h=500&fit=crop&q=60"
  },
  {
    name: "Professional Services",
    desc: "Lawyers, Accountants, Real Estate.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&q=60"
  },
  {
    name: "Health & Wellness",
    desc: "Gyms, Salons, Local Clinics.",
    img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400&h=500&fit=crop&q=60"
  },
  {
    name: "Local Retail",
    desc: "Coffee Shops, Boutiques, Specialty Stores.",
    img: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400&h=500&fit=crop&q=60"
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
            <Reveal delay={0.2}>
              <p className="text-xl text-white/60 font-medium">
                Whether you're a contractor on a job site or a professional in an office, we build the tools you need to grow.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, index) => (
            <div
              key={index}
              className="relative aspect-[4/5] rounded-[32px] overflow-hidden group cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover opacity-40 md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-105 md:group-hover:opacity-60 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-2xl font-bold mb-2 md:group-hover:text-indigo-400 transition-colors">{item.name}</h3>
                <p className="text-white/50 text-sm md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
