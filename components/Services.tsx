
import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from './Reveal';

const services = [
  {
    title: "Custom Web Design",
    subtitle: "Modern, mobile-friendly websites designed to turn visitors into leads.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Local SEO & Google Visibility",
    subtitle: "We optimize your business so you show up when local customers search for your services.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: "Brand Identity & Content",
    subtitle: "Professional logos, copywriting, and messaging that make you the obvious choice in your market.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.172-1.172a4 4 0 115.656 5.656L15.343 13" />
      </svg>
    )
  },
  {
    title: "Managed Hosting & Support",
    subtitle: "We handle the updates, security, and technical headaches so your site is always online.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-20 text-center">
            Our Core <span className="text-indigo-600">Services</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.01 }}
              transition={{ type: 'spring', damping: 20 }}
              className="group p-10 rounded-[32px] glass hover-glass transition-all duration-500"
            >
              <div className="w-16 h-16 bg-indigo-600/10 text-indigo-500 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-xl shadow-transparent group-hover:shadow-indigo-600/20">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-lg text-white/50 leading-relaxed">{service.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
