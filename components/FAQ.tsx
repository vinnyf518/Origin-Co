
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from './Reveal';

const faqs = [
  {
    q: "Do I own my website?",
    a: "Absolutely. Unlike some agencies, you own your domain and your content. We are just here to build and manage it for you."
  },
  {
    q: "How long does a project take?",
    a: "Most standard websites are ready for launch within 10–14 business days from the initial strategy call."
  },
  {
    q: "Do you offer monthly marketing plans?",
    a: "Yes. We offer ongoing SEO, content management, and maintenance packages to keep your business growing month after month."
  },
  {
    q: "What if I already have a website?",
    a: "No problem. We can redesign and optimize your existing site, or migrate your content to a new high-performance platform. We'll evaluate what you have and recommend the best path forward."
  },
  {
    q: "How do I get started?",
    a: "Just click the 'Get a Quote' button and fill out the short form. We'll schedule a free discovery call to learn about your business and goals."
  }
];

export const FAQ: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <h2 className="text-5xl font-bold tracking-tighter mb-16 text-center">Common Questions</h2>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Reveal key={index} delay={index * 0.1} width="100%">
              <div 
                className={`rounded-3xl glass transition-all duration-300 ${active === index ? 'bg-white/5 border-indigo-500/30' : ''}`}
              >
                <button
                  onClick={() => setActive(active === index ? null : index)}
                  className="w-full flex items-center justify-between p-8 text-left"
                >
                  <span className="text-xl font-bold">{faq.q}</span>
                  <motion.span
                    animate={{ rotate: active === index ? 180 : 0 }}
                    className="flex-shrink-0 ml-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.span>
                </button>
                <AnimatePresence>
                  {active === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 text-lg text-white/50 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
