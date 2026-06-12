import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Award, ShieldAlert, Sparkles, User, ShieldCheck } from 'lucide-react';

export function PlaquePreview() {
  const [candidateName, setCandidateName] = useState('');
  const [pledgeChecked, setPledgeChecked] = useState(false);

  return (
    <div className="bg-zinc-950 border border-zinc-850 rounded-2xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-rose-500/5 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#06b6d4]/5 blur-3xl rounded-full" />

      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="text-[10px] font-mono text-rose-500 tracking-widest uppercase block mb-3">Commemorative Gallery</span>
        <h3 className="text-xl md:text-2xl font-display font-bold text-white tracking-tight">The Hall of Leadership</h3>
        <p className="text-xs text-zinc-400 mt-2 font-light">
          Built to permanently record the names of technical leaders who transcend pure system code and lead operational execution.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Plaque Rendering */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="w-full max-w-md aspect-[1.618] plaque-texture border-4 border-zinc-800/80 rounded-2xl p-6 md:p-8 shadow-2xl relative flex flex-col justify-between overflow-hidden group">
            {/* Glossy light reflex */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.03] to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1200 pointer-events-none" />
            
            {/* Small corner detail rings */}
            <span className="absolute top-2.5 left-2.5 w-1.5 h-1.5 rounded-full bg-zinc-800 border border-zinc-700" />
            <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-zinc-800 border border-zinc-700" />
            <span className="absolute bottom-2.5 left-2.5 w-1.5 h-1.5 rounded-full bg-zinc-800 border border-zinc-700" />
            <span className="absolute bottom-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-zinc-800 border border-zinc-700" />

            <div className="text-center space-y-1.5">
              <span className="text-[8px] font-mono tracking-widest text-[#06b6d4] uppercase block">FOUNDING CHIEF TECHNOLOGY OFFICER</span>
              <div className="h-px bg-zinc-800/60 w-32 mx-auto" />
            </div>

            {/* Simulated Engraved text with dynamic placeholder */}
            <div className="text-center my-6">
              <div className="text-lg md:text-2xl font-display font-bold tracking-widest text-zinc-300 uppercase select-none transition-all">
                {candidateName ? (
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-white drop-shadow-[0_2px_4px_rgba(225,29,72,0.4)] block font-medium"
                  >
                    [ {candidateName} ]
                  </motion.span>
                ) : (
                  <span className="text-zinc-650 animate-pulse block font-light">
                    [ To Be Announced ]
                  </span>
                )}
              </div>
              <span className="text-[9px] font-mono text-zinc-500 block mt-3">Antview Technologies — Founding Technical Leadership</span>
            </div>

            <div className="text-center">
              <div className="h-px bg-zinc-800/60 w-16 mx-auto mb-1.5" />
              <span className="text-[7px] font-mono text-zinc-650 tracking-wider block uppercase">QUANTUM LABS · 2026</span>
            </div>
          </div>
        </div>

        {/* Right Side: Configuration panel with engagement controls */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-zinc-900/60 p-5 border border-zinc-850 rounded-xl space-y-4">
            <div>
              <label htmlFor="plaque-name" className="block text-[11px] font-mono text-rose-500 uppercase tracking-wider mb-2 font-semibold">Commemorative Engraving</label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 h-3.5 w-3.5 text-zinc-500" />
                <input
                  id="plaque-name"
                  type="text"
                  maxLength={25}
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  placeholder="Enter name to engrave..."
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-9 pr-4 py-2.5 text-xs text-zinc-200 outline-none focus:border-rose-500/40"
                />
              </div>
              <span className="text-[9px] text-zinc-500 font-mono mt-1.5 block">Engrave your name to preview what your official plaques would look like upon challenge approval.</span>
            </div>

            <div className="flex items-start gap-2.5 pt-2 border-t border-zinc-850">
              <input
                id="plaque-pledge"
                type="checkbox"
                checked={pledgeChecked}
                onChange={(e) => setPledgeChecked(e.target.checked)}
                className="cursor-pointer mt-0.5 accent-rose-500 h-3 w-3 rounded text-rose-500"
              />
              <label htmlFor="plaque-pledge" className="cursor-pointer text-[10px] text-zinc-400 leading-normal select-none">
                I solemnly commit to the philosophy of execution-first craftsmanship: <b>&quot;ship real things that matter, avoiding empty placeholder logs or code slop.&quot;</b>
              </label>
            </div>

            {candidateName && pledgeChecked && (
              <motion.div 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-rose-500/5 border border-rose-500/15 rounded-lg flex items-center gap-2.5 text-rose-400"
              >
                <ShieldCheck className="h-4 w-4 shrink-0" />
                <span className="text-[9px] font-mono uppercase tracking-wider">Candidacy Engraving Configuration Active</span>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
