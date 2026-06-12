import React, { useState } from 'react';
import { Header, PageView } from './components/Header';
import { AgencyPortal } from './components/AgencyPortal';
import { AboutPage } from './components/AboutPage';
import { CareersPage } from './components/CareersPage';
import { CTOChallengeTrack } from './components/CTOChallengeTrack';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentView, setView] = useState<PageView>('home');
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return 'dark';
    }
    return 'dark';
  });

  React.useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-brand-charcoal text-zinc-100 flex flex-col selection:bg-rose-500/30 selection:text-white">
      {/* Universal header containing high-fidelity animated vector logos */}
      <Header currentView={currentView} setView={setView} theme={theme} setTheme={setTheme} />

      {/* Main Container with animate transition */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {['home', 'services', 'portfolio', 'contact'].includes(currentView) ? (
            <motion.div
              key={currentView}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <AgencyPortal 
                currentSection={currentView as 'home' | 'services' | 'portfolio' | 'contact'} 
                onEnterChallenge={() => setView('cto')} 
                onNavigate={setView}
              />
            </motion.div>
          ) : currentView === 'about' ? (
            <motion.div
              key="about-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <AboutPage />
            </motion.div>
          ) : currentView === 'careers' ? (
            <motion.div
              key="careers-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <CareersPage onEnterChallenge={() => setView('cto')} />
            </motion.div>
          ) : (
            <motion.div
              key="cto-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              <CTOChallengeTrack />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

