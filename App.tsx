
import React, { useEffect } from 'react';
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

function App() {
  useEffect(() => {
    // Smooth scroll behavior for internal links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.origin === window.location.origin) {
        e.preventDefault();
        const element = document.querySelector(anchor.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    window.addEventListener('click', handleAnchorClick);
    return () => window.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
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
    </div>
  );
}

export default App;
