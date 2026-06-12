import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Award, ShieldAlert, Sparkles, TrendingUp, Sliders } from 'lucide-react';
import { EvaluationCriterion } from '../types';

export function EvaluationCalc() {
  const [scores, setScores] = useState<Record<string, number>>({
    tech: 8,
    comm: 8,
    lead: 7,
    exec: 8,
    prob: 8,
    arch: 7
  });

  const criteria: EvaluationCriterion[] = [
    {
      id: 'tech',
      name: 'Technical Skills',
      weight: 25,
      description: 'Code quality, depth of engineering knowledge, and framework patterns.',
      keyAspects: ['Clean TypeScript implementation', 'Modular folder architectures', 'Vite/Express bundle settings']
    },
    {
      id: 'comm',
      name: 'Communication',
      weight: 20,
      description: 'Clarity of documentation, presentation structure, and technical rationale.',
      keyAspects: ['Comprehensive system diagrams', 'Thorough setup guides', 'Structured README rationales']
    },
    {
      id: 'lead',
      name: 'Leadership',
      weight: 20,
      description: 'Evidence of ownership, initiative, and proactive decision-making.',
      keyAspects: ['Architectural justification', 'Clear trade-off considerations', 'Self-directed code craft']
    },
    {
      id: 'exec',
      name: 'Execution',
      weight: 15,
      description: 'Delivery quality, completeness, and extreme polish of the final system.',
      keyAspects: ['Stripe-grade interface clarity', 'Lighthouse score performance', 'Bug-free navigation']
    },
    {
      id: 'prob',
      name: 'Problem Solving',
      weight: 10,
      description: 'Ability to navigate real-world engineering bottlenecks and make smart trade-offs.',
      keyAspects: ['Effective caching paths', 'Optimized request queuing', 'Lazy SDK setups']
    },
    {
      id: 'arch',
      name: 'Architecture Thinking',
      weight: 10,
      description: 'Scalability planning, system design pipelines, and solid technical foresight.',
      keyAspects: ['Durable data persistence planning', 'Secure API proxy configurations', 'CI/CD roadmap foresight']
    }
  ];

  const handleScoreChange = (id: string, value: number) => {
    setScores(prev => ({ ...prev, [id]: value }));
  };

  // Calculate Weighted Score (each slider max score is 10, so score/10 * weight)
  const calculateTotal = () => {
    let sum = 0;
    criteria.forEach(crit => {
      const score = scores[crit.id] || 0;
      sum += (score / 10) * crit.weight;
    });
    return Math.round(sum * 10) / 10;
  };

  const totalWeighted = calculateTotal();

  let candidacyTier = 'Candidate Review Pool';
  let tierColor = 'text-zinc-400 border-zinc-800';
  let badgeStyle = 'bg-zinc-950 text-zinc-400';
  
  if (totalWeighted >= 90) {
    candidacyTier = 'Prime CTO Prospect';
    tierColor = 'text-rose-400 border-rose-500/30';
    badgeStyle = 'bg-rose-500 text-white animate-pulse';
  } else if (totalWeighted >= 75) {
    candidacyTier = 'Elite Architect Candidate';
    tierColor = 'text-[#06b6d4] border-[#06b6d4]/30';
    badgeStyle = 'bg-[#06b6d4] text-zinc-950';
  } else if (totalWeighted >= 60) {
    candidacyTier = 'High-potential Developer';
    tierColor = 'text-emerald-400 border-emerald-500/30';
    badgeStyle = 'bg-emerald-500 text-zinc-950';
  }

  return (
    <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-5 md:p-6 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <span className="p-2 rounded-lg bg-rose-500/10 text-rose-500">
          <Sliders className="h-5 w-5" />
        </span>
        <div>
          <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest block">Core Scoring Tool</span>
          <h3 className="text-lg font-display font-bold text-zinc-100">Interactive Selection Scorecard</h3>
        </div>
      </div>

      <p className="text-xs text-zinc-400 mb-8 leading-relaxed max-w-2xl">
        Adjust the selectors below based on your current engineering competencies. Each rating represents 
        a core dimension of evaluation, weighted to determine compliance with elite Antview CTO benchmarks.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Sliders */}
        <div className="lg:col-span-7 space-y-5">
          {criteria.map((crit) => {
            const currentScore = scores[crit.id] || 0;
            return (
              <div key={crit.id} className="bg-zinc-950/40 p-4 border border-zinc-850 rounded-xl space-y-2">
                <div className="flex justify-between items-center gap-2">
                  <div>
                    <span className="text-xs font-display font-semibold text-zinc-100">{crit.name}</span>
                    <span className="text-[10px] font-mono text-zinc-500 ml-2">({crit.weight}% Weight)</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-rose-500 bg-rose-500/10 px-2 py-0.5 rounded">
                    Score: {currentScore}/10
                  </span>
                </div>
                
                <p className="text-[10px] text-zinc-500 leading-tight">{crit.description}</p>
                
                <div className="flex items-center gap-3 pt-1">
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={currentScore}
                    onChange={(e) => handleScoreChange(crit.id, parseInt(e.target.value))}
                    className="cursor-pointer w-full accent-rose-500 h-1 bg-zinc-800 rounded-lg appearance-none"
                  />
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {crit.keyAspects.map((aspect, i) => (
                    <span key={i} className="text-[8px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded">
                      ✓ {aspect}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Score Gauge */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="bg-zinc-950 border border-zinc-850 p-6 rounded-2xl text-center space-y-6 flex-1 flex flex-col justify-center">
            <div>
              <span className="text-[10px] font-mono text-zinc-500 block uppercase tracking-wider">Overall Weighted Rating</span>
              <div className="text-4xl md:text-5xl font-mono font-extrabold text-zinc-100 mt-2 tracking-tight">
                {totalWeighted} <span className="text-zinc-650 text-base font-normal">/ 100</span>
              </div>
            </div>

            {/* Circular Gauge simulation bar */}
            <div className="relative w-full h-3 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800/50">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${totalWeighted}%` }}
                className="h-full bg-gradient-to-r from-emerald-500 via-[#06b6d4] to-rose-500 rounded-full" 
              />
            </div>

            <div className={`border p-4 rounded-xl space-y-2 bg-zinc-900/40 ${tierColor}`}>
              <span className={`text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded ${badgeStyle}`}>
                {candidacyTier}
              </span>
              <p className="text-[10px] text-zinc-400 mt-1 leading-relaxed">
                {totalWeighted >= 90 ? (
                  "Exceeds all technological, operational, and architectural standards for the Founding CTO challenge."
                ) : totalWeighted >= 75 ? (
                  "Demonstrates advanced knowledge of system scaling, architecture decisions, and task delivery."
                ) : (
                  "An evaluation scoresheet qualifying the applicant for direct development projects inside Quantum Labs."
                )}
              </p>
            </div>
          </div>

          <div className="bg-zinc-950/45 p-4 border border-zinc-850/60 rounded-xl mt-4 flex items-start gap-2.5">
            <TrendingUp className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] font-mono text-zinc-300 block font-semibold uppercase">Passing Threshold</span>
              <p className="text-[10px] text-zinc-500 leading-relaxed mt-0.5">
                The recruitment committee requires a minimum weighted assessment score of <b>75/100</b> to bypass introductory reviews and schedule phase presentations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
