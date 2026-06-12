import React from 'react';
import { motion } from 'motion/react';
import { 
  Award, Briefcase, ChevronRight, GraduationCap, 
  Flame, HardHat, FileText, Sparkles, Server, Layout, Binary 
} from 'lucide-react';

interface JobOpportunity {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  icon: React.ReactNode;
  requirements: string[];
}

interface CareersPageProps {
  onEnterChallenge: () => void;
}

export function CareersPage({ onEnterChallenge }: CareersPageProps) {
  const jobs: JobOpportunity[] = [
    {
      id: 'arch',
      title: 'Senior Systems Architect',
      department: 'Infrastructure & Core Solutions',
      location: 'Hybrid / Berlin',
      type: 'Full-Time',
      salary: '€140k – €170k',
      description: 'Lead development of next-generation high-perf event synchronization layers. Integrate direct websocket pipelines for heavy delta client calculations.',
      icon: <Server className="h-4 w-4 text-rose-500" />,
      requirements: ['7+ Yrs System programming', 'Massive scale stream handler experience', 'Rust/C++ or high-end Go expertise']
    },
    {
      id: 'front',
      title: 'Frontend Interaction Engineer',
      department: 'Customer Canvas Division',
      location: 'Remote (EU / US)',
      type: 'Full-Time',
      salary: '€95k – €120k',
      description: 'Craft beautiful, sub-60ms canvas interactions and interfaces. Maintain and lead visual excellence across high-fidelity dashboards.',
      icon: <Layout className="h-4 w-4 text-cyan-400" />,
      requirements: ['Pristine React & Motion layout knowledge', 'High-attention to detail (pixel layout fidelity)', 'Strong Tailwind CSS design orchestration']
    },
    {
      id: 'ai-special',
      title: 'AI Swarm and Orchestration Specialist',
      department: 'Quantum Labs Synergy Lab',
      location: 'Onsite / Zurich',
      type: 'Full-Time',
      salary: '€120k – €155k',
      description: 'Oversee integration of custom semantic parses, Fine-tune local models, and build autonomous swarming consensus nodes backing system operations.',
      icon: <Binary className="h-4 w-4 text-purple-400" />,
      requirements: ['Expert with Google GenAI SDK', 'Knowledge of vector database indexing pipelines', 'Deep research background in multi-agent environments']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 font-sans">
      {/* Prime Advertisement for the CTO Recruitment Challenge */}
      <div className="bg-gradient-to-br from-zinc-900 via-zinc-950 to-rose-950/20 border border-rose-500/20 rounded-3xl p-6 md:p-12 mb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/5 blur-3xl rounded-full" />
        <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-cyan-500/5 blur-3xl rounded-full" />
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-full text-[10px] font-mono mb-6">
              <Award className="h-3 w-3 animate-pulse" />
              NOW RECRUITING: CHIEF TECHNOLOGY OFFICER
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              Are You our Next <span className="text-rose-500 font-display">CTO</span>?
            </h1>
            <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed mt-4 max-w-2xl">
              Antview Technologies, in deep alliance with Quantum Labs, is selecting our lead tech sentinel through our proprietary <b>CTO Selection Challenge</b>. Instead of conventional interviews, design an optimal technical ecosystem, weigh candidate metrics, and launch your sandbox application.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={onEnterChallenge}
                className="cursor-pointer group bg-rose-600 hover:bg-rose-700 text-white font-display font-semibold transition-all px-6 py-3.5 rounded-lg text-xs tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-rose-600/15"
              >
                Access CTO Selection Portal
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono px-3">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                ACTIVE DEBATE CONVENED
              </div>
            </div>
          </div>

          {/* Interactive Stat Visualizer Box */}
          <div className="lg:col-span-5 bg-zinc-950/80 p-6 rounded-2xl border border-zinc-800">
            <h3 className="text-xs font-mono text-zinc-400 uppercase tracking-widest border-b border-zinc-800/60 pb-3 mb-4 flex items-center gap-2">
              <Flame className="h-3.5 w-3.5 text-rose-500" />
              Recruitment Directives
            </h3>
            
            <div className="space-y-3.5 text-xs font-mono">
              <div className="flex justify-between items-center bg-zinc-900/60 p-2.5 rounded border border-zinc-850">
                <span className="text-zinc-500">Evaluation Steps:</span>
                <span className="text-rose-400 font-medium">4 Levels</span>
              </div>
              <div className="flex justify-between items-center bg-zinc-900/60 p-2.5 rounded border border-zinc-850">
                <span className="text-zinc-500">Plaque Registration:</span>
                <span className="text-zinc-300 font-medium font-sans">Official Quantum Plaque</span>
              </div>
              <div className="flex justify-between items-center bg-zinc-900/60 p-2.5 rounded border border-zinc-850">
                <span className="text-zinc-500">Passing Threshold:</span>
                <span className="text-emerald-400 font-medium">85.0 points</span>
              </div>
              <div className="flex justify-between items-center bg-zinc-900/60 p-2.5 rounded border border-zinc-850">
                <span className="text-zinc-500">Simulators Integrated:</span>
                <span className="text-cyan-400 font-medium">3 Modules Loaded</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Standard Job Roles */}
      <div className="border-t border-zinc-900 pt-16">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono text-rose-500 tracking-widest uppercase block mb-2">Build With Us</span>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
            Our Open Positions
          </h2>
          <p className="text-zinc-400 font-light mt-3 text-sm leading-relaxed">
            We are always seeking skilled software developers, cloud engineers, and technical designers who want to ship clean platforms under sub-200ms constraints. Apply to open spots below.
          </p>
        </div>

        {/* Jobs List */}
        <div className="space-y-4">
          {jobs.map((job) => (
            <div 
              key={job.id}
              className="bg-zinc-900/40 p-6 rounded-2xl border border-zinc-850 hover:border-zinc-800 transition-all grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
            >
              {/* Job title & General specs */}
              <div className="lg:col-span-4 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 bg-zinc-950 rounded border border-zinc-800 shrink-0">
                    {job.icon}
                  </span>
                  <h3 className="text-base font-display font-semibold text-zinc-150">
                    {job.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 text-[10px] font-mono text-zinc-550 pt-1">
                  <span className="bg-zinc-950 px-2 py-0.5 rounded border border-zinc-850">{job.department}</span>
                  <span className="bg-zinc-950 px-2 py-0.5 rounded border border-zinc-850">{job.location}</span>
                </div>
              </div>

              {/* Job brief description */}
              <div className="lg:col-span-5 text-xs text-zinc-400 leading-relaxed font-light">
                {job.description}
                
                {/* Requirements check list */}
                <div className="mt-4 pt-3 border-t border-zinc-850 space-y-1.5">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase block tracking-wider mb-1">Target Requirements Matrix:</span>
                  {job.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-rose-500 rounded-full" />
                      <span className="text-[11px] font-mono text-zinc-350">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Job Apply Button Area */}
              <div className="lg:col-span-3 lg:text-right flex flex-col justify-between h-full space-y-4 lg:space-y-0 lg:items-end">
                <div>
                  <span className="text-[9px] font-mono text-zinc-500 block">Baseline Base Salary</span>
                  <span className="text-sm font-semibold text-zinc-200 font-mono">{job.salary}</span>
                </div>

                <button
                  onClick={() => alert(`Registration standard initiated. Please apply via our general intake form or build your score in the CTO Challenge to proceed!`)}
                  className="cursor-pointer bg-zinc-950 hover:bg-zinc-900 border border-zinc-850 text-zinc-300 hover:text-white font-mono text-[11px] px-4 py-2 rounded-lg transition-all"
                >
                  Apply for Role
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
