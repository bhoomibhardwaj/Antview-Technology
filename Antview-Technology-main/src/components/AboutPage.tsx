import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  History, Eye, Target, Compass, Award, 
  Cpu, Terminal, ShieldAlert, Zap, Globe 
} from 'lucide-react';

interface RoadmapMilestone {
  year: string;
  title: string;
  techArea: string;
  description: string;
  status: 'In Development' | 'R&D Phase' | 'Simulations' | 'Ready';
  readinessScore: number;
  specs: string[];
}

export function AboutPage() {
  const [selectedMilestone, setSelectedMilestone] = useState<number>(0);

  const milestones: RoadmapMilestone[] = [
    {
      year: '2026',
      title: 'Semantic Parsing Pipelines',
      techArea: 'Cognitive Automation',
      description: 'Deploying high-fidelity LLM agent orchestrations capable of extracting and structuralizing multi-tenant complex corporate filings with sub-second accuracy.',
      status: 'Ready',
      readinessScore: 98,
      specs: ['99.4% Extraction Precision', 'Low-Cold-Start Node Functions', 'JSON Schema Validation Engine']
    },
    {
      year: '2027',
      title: 'Agentic Swarm Orchestration',
      techArea: 'Intelligent Systems',
      description: 'Developing multi-agent consensus protocols where standard software development workflows are automated dynamically. Automated bug resolving, compiling, and testing.',
      status: 'In Development',
      readinessScore: 78,
      specs: ['Autonomous Peer Consensus', 'Git Repo Autopilot Integrations', 'Interactive Diagnostic sandboxes']
    },
    {
      year: '2028',
      title: 'Edge-Native Sync Protocols',
      techArea: 'Next-Gen Protocols',
      description: 'Ultra-low latency data synchronization layers running entirely on cloudflare edge workers. Eliminating roundtrip databases in regional hubs via instant decentralized delta sync.',
      status: 'In Development',
      readinessScore: 60,
      specs: ['Sub-15ms regional replication', 'CRDT data-mesh integrity', 'Zero cold-start edge routes']
    },
    {
      year: '2029',
      title: 'Quantum Computing Compilers',
      techArea: 'Quantum Labs Synergy',
      description: 'Partnering with Quantum Labs to compile traditional instruction sets into quantum-state equivalents. Harnessing QPU capabilities for massive combinatorial logistics.',
      status: 'R&D Phase',
      readinessScore: 35,
      specs: ['Quantum Gate compilation pipelines', 'Error Correction Simulators', 'Quantum-Classical hybrid hooks']
    },
    {
      year: '2030',
      title: 'Universal AI Core Node Nesting',
      techArea: 'Intelligent Systems',
      description: 'Architecting fully decentralized cloud-run virtual machines powered by native hardware orchestration to support direct local intelligence without heavy cloud dependencies.',
      status: 'Simulations',
      readinessScore: 15,
      specs: ['Self-healing system nodes', 'Local hardware neural offloading', 'Zero-knowledge private workflows']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 font-sans">
      {/* Intro Header */}
      <div className="text-center mb-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.05),transparent_70%)] pointer-events-none" />
        <span className="text-xs font-mono text-rose-500 tracking-widest uppercase block mb-3">Our Core Profile</span>
        <h1 id="about-heading" className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
          An Elite Development Force
        </h1>
        <p className="text-zinc-400 font-light max-w-3xl mx-auto mt-4 text-sm md:text-base leading-relaxed">
          Antview Technologies was established with a singular mission: to bridge the gap between complex technical complexity and intuitive customer engagement. Working directly under the Quantum Labs ecosystem, we engineering custom performance systems with bulletproof standard controls.
        </p>
      </div>

      {/* Story grid & vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {/* Company Backstory */}
        <div className="bg-zinc-900/40 p-8 rounded-2xl border border-zinc-850 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="p-2.5 rounded-lg bg-rose-500/10 text-rose-500">
                <History className="h-5 w-5" />
              </span>
              <h2 className="text-xl font-display font-bold text-zinc-100">Our Backstory</h2>
            </div>
            <p className="text-sm text-zinc-400 font-light leading-relaxed mb-4">
              Originating as an internal development department inside Quantum Labs, our engineers solved massive scaling concerns for decentralized processing nodes. Realizing that private enterprise organizations desperately needed identical level of custom engineering clarity, we spun off as a dedicated operational entity: Antview Technologies.
            </p>
            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              Today, our teams assemble web applications, real-time sync systems, mobile layers, and fine-tuned AI engines. We maintain dedicated physical offices under the shadow of the core Quantum compiler hub, ensuring our standard and code remains ahead of contemporary frameworks.
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-zinc-800/60 flex justify-between items-center text-xs font-mono text-zinc-500">
            <span>FOUNDED: 2024</span>
            <span>ECOSYSTEM: QUANTUM LABS</span>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="space-y-6">
          <div className="bg-zinc-900/40 p-6 rounded-2xl border border-zinc-850 flex gap-4">
            <span className="p-3 bg-cyan-500/10 text-cyan-400 rounded-xl h-fit">
              <Eye className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-base font-display font-bold text-zinc-100 mb-2">Our Vision</h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                To empower global scaling businesses with elite-grade custom platforms. We envision an enterprise workspace where system latency approaches physical limits, and interactive systems understand customer intent natively.
              </p>
            </div>
          </div>

          <div className="bg-zinc-900/40 p-6 rounded-2xl border border-zinc-850 flex gap-4">
            <span className="p-3 bg-rose-500/10 text-rose-500 rounded-xl h-fit">
              <Target className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-base font-display font-bold text-zinc-100 mb-2">Our Mission</h3>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                To build with architectural honesty. Never write bloat state, never hide missing capacity under heavy frameworks, and always ship fully documented, performance-audited software models designed to endure years of operational traffic.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-rose-500/10 to-cyan-500/10 border border-zinc-800 p-6 rounded-2xl">
            <h4 className="text-xs font-mono text-rose-400 uppercase tracking-widest mb-2 flex items-center gap-2">
              <Zap className="h-3.5 w-3.5 animate-pulse" />
              Ecosystem Synthesis
            </h4>
            <p className="text-xs text-zinc-350 leading-relaxed font-light">
              We compile and scale direct web channels for the hardware and research developed by <b>Quantum Labs Inc</b>. This dynamic collaboration gives our customers prior access to machine-learning models, optimized data-transfer systems, and experimental compiler pipelines before they Hit the mainstream cloud portals.
            </p>
          </div>
        </div>
      </div>

      {/* Leading Tech Roadmap Interactive Title */}
      <div className="border-t border-zinc-900 pt-16 mb-12">
        <div className="text-center md:text-left md:flex justify-between items-end gap-4 mb-10">
          <div>
            <span className="text-xs font-mono text-rose-500 tracking-widest uppercase block mb-2">Technical Projections</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
              Leading Tech Roadmap: 2026 – 2030
            </h2>
          </div>
          <p className="text-xs text-zinc-400 font-light max-w-sm mt-3 md:mt-0 leading-relaxed">
            Select milestone nodes on the interactive timeline to review our technical development objectives, predictive simulations, and active target statistics.
          </p>
        </div>

        {/* Timeline representation */}
        <div className="bg-zinc-950 p-6 md:p-8 rounded-2xl border border-zinc-900 shadow-2xl">
          {/* Year selector node line */}
          <div className="relative mb-12 mt-4">
            {/* Thread line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-zinc-800 -translate-y-1/2 z-0" />
            
            {/* Active Highlight Line filler */}
            <div 
              className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-rose-500 to-cyan-500 -translate-y-1/2 z-0 transition-all duration-500" 
              style={{ width: `${(selectedMilestone / (milestones.length - 1)) * 100}%` }}
            />

            <div className="relative z-10 flex justify-between">
              {milestones.map((item, idx) => {
                const isSelected = selectedMilestone === idx;
                const isCompleted = idx < selectedMilestone;
                return (
                  <button
                    key={item.year}
                    onClick={() => setSelectedMilestone(idx)}
                    className="cursor-pointer group focus:outline-none flex flex-col items-center"
                  >
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center font-mono text-xs font-semibold tracking-tighter transition-all ${
                      isSelected 
                        ? 'bg-rose-500 border-rose-400 text-white shadow-xl shadow-rose-500/45 scale-125' 
                        : isCompleted
                          ? 'bg-zinc-900 border-rose-500/50 text-rose-400 hover:border-rose-400'
                          : 'bg-zinc-950 border-zinc-800 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300'
                    }`}>
                      {item.year}
                    </div>
                    <span className={`text-[10px] font-mono mt-2 hidden sm:block font-medium ${isSelected ? 'text-rose-500' : 'text-zinc-500'}`}>
                      {item.techArea.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Details Card */}
          <div className="bg-zinc-900/60 rounded-xl border border-zinc-800 p-6 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMilestone}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              >
                {/* Year Indicator & basic header info */}
                <div className="md:col-span-4 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded uppercase">
                      {milestones[selectedMilestone].techArea}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-medium ${
                      milestones[selectedMilestone].status === 'Ready' ? 'bg-emerald-500/10 text-emerald-400' :
                      milestones[selectedMilestone].status === 'In Development' ? 'bg-amber-500/10 text-amber-400' :
                      'bg-cyan-500/10 text-cyan-400'
                    }`}>
                      {milestones[selectedMilestone].status}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-zinc-100 mb-1">
                    {milestones[selectedMilestone].title}
                  </h3>
                  <span className="text-4xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-cyan-400 block mt-2">
                    Yr {milestones[selectedMilestone].year}
                  </span>

                  {/* Readiness Progress tracker */}
                  <div className="mt-5">
                    <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 mb-1.5">
                      <span>R&D Readiness Score</span>
                      <span>{milestones[selectedMilestone].readinessScore}%</span>
                    </div>
                    <div className="w-full bg-zinc-950 h-1.5 rounded-full overflow-hidden border border-zinc-850">
                      <div 
                        className="h-full bg-gradient-to-r from-rose-500 to-cyan-500 rounded-full transition-all duration-500"
                        style={{ width: `${milestones[selectedMilestone].readinessScore}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Description and technical stats */}
                <div className="md:col-span-8 md:border-l border-zinc-800/80 md:pl-6 space-y-4">
                  <p className="text-xs text-zinc-400 leading-relaxed font-light font-sans">
                    {milestones[selectedMilestone].description}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-3">Target Technical Specifications:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {milestones[selectedMilestone].specs.map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-zinc-950 p-2.5 rounded border border-zinc-800">
                          <Cpu className="h-3.5 w-3.5 text-rose-500 shrink-0" />
                          <span className="text-[11px] font-mono text-zinc-300">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
