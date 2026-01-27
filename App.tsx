
import React, { useEffect, useState, createContext, useContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Services } from './components/Services';
import { Industries } from './components/Industries';
import { Process } from './components/Process';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';
import { QuoteForm } from './components/QuoteForm';

// Create context for quote form
const QuoteFormContext = createContext<{ openQuoteForm: () => void }>({ openQuoteForm: () => {} });

export const useQuoteForm = () => useContext(QuoteFormContext);

function App() {
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const openQuoteForm = () => {
    setShowQuoteForm(true);
    document.body.style.overflow = 'hidden';
    // Add history entry so back button closes the form
    window.history.pushState({ quoteForm: true }, '', '#quote');
  };

  const closeQuoteForm = () => {
    setShowQuoteForm(false);
    document.body.style.overflow = '';
    // Go back in history if we're on the quote hash
    if (window.location.hash === '#quote') {
      window.history.back();
    }
  };

  useEffect(() => {
    // Smooth scroll behavior for internal links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        e.preventDefault();
        const element = document.querySelector(anchor.hash);
        if (element) {
          // Push to history so back button works
          window.history.pushState({ section: anchor.hash }, '', anchor.hash);
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Handle back/forward button navigation
    const handlePopState = (e: PopStateEvent) => {
      // If form is open and we're navigating away from #quote, close it
      if (window.location.hash !== '#quote') {
        setShowQuoteForm(false);
        document.body.style.overflow = '';
      }

      const hash = window.location.hash;
      if (hash && hash !== '#quote') {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (!hash) {
        // No hash means go to top of page
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('click', handleAnchorClick);
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <QuoteFormContext.Provider value={{ openQuoteForm }}>
      <div className="relative min-h-screen">
        <AnimatedBackground />
        <Navbar />
        <main>
          <Hero />
          <ProblemSolution />
          <Services />
          <Industries />
          <Process />
          <About />
          <FAQ />
        </main>
        <Footer />

        <AnimatePresence>
          {showQuoteForm && <QuoteForm onClose={closeQuoteForm} />}
        </AnimatePresence>
      </div>
    </QuoteFormContext.Provider>
  );
}

export default App;
