import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Network, Terminal, Shield, Award, Menu, X, Sun, Moon } from 'lucide-react';

export type PageView = 'home' | 'about' | 'services' | 'portfolio' | 'careers' | 'contact' | 'cto';

interface HeaderProps {
  currentView: PageView;
  setView: (view: PageView) => void;
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
}

export function Header({ currentView, setView, theme, setTheme }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'careers', label: 'Careers' },
    { id: 'contact', label: 'Contact' },
  ] as const;

  const handleNavClick = (id: PageView) => {
    setView(id);
    setMobileMenuOpen(false);
  };

  return (
    <header id="site-header" className="sticky top-0 z-50 backdrop-blur-md bg-brand-charcoal/85 border-b border-zinc-850 px-4 md:px-8 py-3.5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logos Container */}
        <div className="flex items-center gap-4">
          {/* Quantum Labs logo */}
          <div className="flex items-center gap-2 border-r border-zinc-850 pr-4">
            <svg width="28" height="28" viewBox="0 0 100 100" className="text-cyan-400">
              <defs>
                <linearGradient id="q-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="35" fill="none" stroke="url(#q-grad)" strokeWidth="8" strokeDasharray="180 50" />
              <path d="M72,72 L88,88" stroke="url(#q-grad)" strokeWidth="9" strokeLinecap="round" />
              <circle cx="50" cy="50" r="15" fill="none" stroke="#22d3ee" strokeWidth="2" opacity="0.6" />
            </svg>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-[10px] tracking-wider text-zinc-100 block">QUANTUM</span>
              <span className="text-[8px] font-mono tracking-widest text-[#06b6d4] block -mt-1">LABS</span>
            </div>
          </div>

          {/* Antview Logo */}
          <div className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 100 100" className="text-rose-600">
              <path d="M15 85 L50 15 L85 85" fill="none" stroke="#e11d48" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M30 60 L70 60" fill="none" stroke="#e11d48" strokeWidth="8" strokeLinecap="round" />
              <path d="M50 15 C 35 15, 25 5, 25 5" fill="none" stroke="#be123c" strokeWidth="4" strokeLinecap="round" />
              <path d="M50 15 C 65 15, 75 5, 75 5" fill="none" stroke="#be123c" strokeWidth="4" strokeLinecap="round" />
            </svg>
            <div>
              <span className="font-display font-bold text-zinc-100 tracking-wider text-xs md:text-sm block">ANTVIEW</span>
              <span className="text-[7px] md:text-[8px] font-sans tracking-[0.25em] text-rose-500 block -mt-1 uppercase">TECHNOLOGIES</span>
            </div>
          </div>
        </div>

        {/* Global Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-950/40 p-1.5 rounded-lg border border-zinc-850">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`cursor-pointer px-3.5 py-1.5 rounded text-xs font-display font-medium tracking-wide transition-all relative ${
                  isActive ? 'text-zinc-100' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-desktop-bg"
                    className="absolute inset-0 bg-rose-650/15 border border-rose-500/30 rounded"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button & Theme Toggle (Desktop) */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="cursor-pointer p-2 bg-zinc-950 hover:bg-zinc-900 border border-zinc-850 hover:border-zinc-700 rounded-lg text-zinc-400 hover:text-zinc-200 transition-all flex items-center justify-center"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-amber-400 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="h-4 w-4 text-indigo-400 transition-transform hover:-rotate-12" />
            )}
          </button>

          <button
            id="tab-cto-challenge"
            onClick={() => handleNavClick('cto')}
            className={`cursor-pointer px-4 py-2 rounded-lg text-xs font-display font-semibold tracking-wide transition-all flex items-center gap-2 border ${
              currentView === 'cto' 
                ? 'bg-rose-650/20 border-rose-500 text-white shadow-md shadow-rose-650/10' 
                : 'bg-zinc-950 text-zinc-300 border-zinc-850 hover:border-zinc-700 hover:bg-zinc-900'
            }`}
          >
            <Award className="h-3.5 w-3.5 text-rose-550" />
            CTO Selection Portal
            <span className="bg-rose-500 text-white text-[8px] px-1 rounded-sm ml-0.5 animate-pulse">LIVE</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="cursor-pointer p-2 bg-zinc-900 border border-zinc-800 rounded text-zinc-400 hover:text-zinc-200 transition-all flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-amber-400" />
            ) : (
              <Moon className="h-4 w-4 text-indigo-400" />
            )}
          </button>

          {currentView !== 'cto' && (
            <button
              onClick={() => handleNavClick('cto')}
              className="cursor-pointer p-1.5 bg-rose-600/10 border border-rose-500/30 rounded text-rose-400 text-xs font-semibold flex items-center gap-1"
            >
              <Award className="h-3.5 w-3.5" />
              CTO Track
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="cursor-pointer p-2 bg-zinc-900 border border-zinc-800 rounded text-zinc-400 hover:text-zinc-200"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-zinc-850 mt-3 pt-3 overflow-hidden"
          >
            <div className="flex flex-col gap-1.5 pb-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`cursor-pointer text-left px-4 py-2.5 rounded-lg text-xs font-display font-medium tracking-wide transition-colors ${
                    currentView === item.id 
                      ? 'bg-rose-500/10 border border-rose-500/30 text-rose-400' 
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('cto')}
                className={`cursor-pointer text-left px-4 py-2.5 rounded-lg text-xs font-display font-semibold tracking-wide transition-all flex items-center gap-2 border mt-1 ${
                  currentView === 'cto' 
                    ? 'bg-rose-650/25 border-rose-500 text-rose-400' 
                    : 'bg-zinc-950/80 border-zinc-850 hover:border-zinc-850 text-rose-450'
                }`}
              >
                <Award className="h-3.5 w-3.5" />
                CTO Selection Challenge
                <span className="bg-rose-500 text-white text-[8px] px-1 rounded-sm ml-auto animate-pulse">Official</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

