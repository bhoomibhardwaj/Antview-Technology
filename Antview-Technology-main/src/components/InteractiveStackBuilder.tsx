import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Layers, Check, RefreshCw, Sparkles, AlertCircle, Info } from 'lucide-react';

interface TechItem {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'ai' | 'infra';
  description: string;
  scalability: number;
  velocity: number;
  recommended: boolean;
}

export function InteractiveStackBuilder() {
  const [selectedTechs, setSelectedTechs] = useState<Record<string, string>>({
    frontend: 'react-vite',
    backend: 'express-node',
    database: 'postgres-drizzle',
    ai: 'gemini-genai',
    infra: 'cloudrun-docker'
  });

  const [metrics, setMetrics] = useState({
    scalabilityScore: 85,
    velocityScore: 90,
    costEfficiency: 88,
    statusText: 'Optimal Startup Architecture'
  });

  const availableTechs: TechItem[] = [
    // Frontend
    { id: 'react-vite', name: 'React + Vite', category: 'frontend', description: 'Blazing fast bundler coupled with modular component architecture.', scalability: 90, velocity: 95, recommended: true },
    { id: 'nextjs', name: 'Next.js App Router', category: 'frontend', description: 'Full-stack framework featuring SSR, edge optimization and routes.', scalability: 95, velocity: 85, recommended: true },
    { id: 'remix', name: 'Remix', category: 'frontend', description: 'Standard routing compiler built around browser APIs and web fetch.', scalability: 88, velocity: 80, recommended: false },
    
    // Backend
    { id: 'express-node', name: 'Express + Node TS', category: 'backend', description: 'Standard, flexible, rapid API creation built with lightweight TS.', scalability: 85, velocity: 90, recommended: true },
    { id: 'fastify', name: 'Fastify', category: 'backend', description: 'Extremely fast Node-native API frame with strict schema validation.', scalability: 92, velocity: 80, recommended: false },
    { id: 'bun', name: 'Bun Server', category: 'backend', description: 'All-in-one high-performance modern JS toolkit and runtime wrapper.', scalability: 90, velocity: 90, recommended: false },

    // Database
    { id: 'postgres-drizzle', name: 'PostgreSQL + Drizzle', category: 'database', description: 'Type-safe SQL schemas & relations combining high query speeds.', scalability: 94, velocity: 92, recommended: true },
    { id: 'firestore', name: 'Firebase Firestore', category: 'database', description: 'Real-time serverless Document persistence with low setup requirements.', scalability: 90, velocity: 95, recommended: true },
    { id: 'redis', name: 'Key-Value Memory Cache', category: 'database', description: 'Lightning caching and task queue queues running completely in memory.', scalability: 96, velocity: 85, recommended: false },

    // AI Integrations
    { id: 'gemini-genai', name: 'Google GenAI SDK', category: 'ai', description: 'Modern, highly optimized SDK providing streaming, routing and safety.', scalability: 98, velocity: 95, recommended: true },
    { id: 'langchain', name: 'LangChain Agents', category: 'ai', description: 'Extensive ecosystem wrapping LLM structures with dynamic orchestrators.', scalability: 80, velocity: 75, recommended: false },

    // Infrastructure / Hosting
    { id: 'cloudrun-docker', name: 'Cloud Run Containers', category: 'infra', description: 'Serverless containers routing traffic directly over optimized systems.', scalability: 98, velocity: 90, recommended: true },
    { id: 'vercel', name: 'Vercel Edge Platform', category: 'infra', description: 'Lightweight static & serverless global edge router networks.', scalability: 95, velocity: 98, recommended: true },
    { id: 'k8s', name: 'Kubernetes Cluster', category: 'infra', description: 'Highly robust container arrangement optimized for deep enterprise budgets.', scalability: 99, velocity: 40, recommended: false }
  ];

  useEffect(() => {
    // Recalculate metrics on selection change
    let scaleSum = 0;
    let velSum = 0;
    let count = 0;

    Object.entries(selectedTechs).forEach(([category, techId]) => {
      const tech = availableTechs.find(t => t.id === techId);
      if (tech) {
        scaleSum += tech.scalability;
        velSum += tech.velocity;
        count++;
      }
    });

    const averageScale = count ? Math.round(scaleSum / count) : 80;
    const averageVel = count ? Math.round(velSum / count) : 80;
    
    // cost efficiency logic
    let costEff = 90;
    if (selectedTechs.infra === 'k8s') costEff -= 40; // expensive
    if (selectedTechs.database === 'redis') costEff -= 10;
    if (selectedTechs.frontend === 'nextjs') costEff += 5;

    let status = 'Highly Balanced Architecture';
    if (averageScale > 94 && averageVel < 75) {
      status = 'Enterprise Grade (High Rigour, Low Velocity)';
    } else if (averageVel > 92 && averageScale > 90) {
      status = 'Elite Founder / Rapid Scaling Architecture';
    } else if (selectedTechs.infra === 'k8s') {
      status = 'Heavy Infrastructure Alert (Requires Ops Oversight)';
    }

    setMetrics({
      scalabilityScore: averageScale,
      velocityScore: averageVel,
      costEfficiency: costEff,
      statusText: status
    });
  }, [selectedTechs]);

  const setTech = (category: string, id: string) => {
    setSelectedTechs(prev => ({ ...prev, [category]: id }));
  };

  const resetToOfficialChallengeStack = () => {
    setSelectedTechs({
      frontend: 'react-vite',
      backend: 'express-node',
      database: 'postgres-drizzle',
      ai: 'gemini-genai',
      infra: 'cloudrun-docker'
    });
  };

  return (
    <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-5 md:p-6 shadow-xl relative overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest block">Interactive Sandbox</span>
          <h3 className="text-lg font-display font-bold text-zinc-100 flex items-center gap-2">
            <Layers className="h-4 w-4 text-rose-500" />
            CTO Architecture Stack Configurator
          </h3>
        </div>
        <button
          onClick={resetToOfficialChallengeStack}
          className="cursor-pointer text-[10px] font-mono border border-zinc-800 hover:border-zinc-700 bg-zinc-950 px-3 py-1.5 rounded-lg text-zinc-400 hover:text-zinc-200 transition-colors flex items-center gap-1.5"
        >
          <RefreshCw className="h-3 w-3" />
          Reset to Antview Default
        </button>
      </div>

      <p className="text-xs text-zinc-400 leading-relaxed max-w-3xl mb-8">
        As the founding CTO, your architecture choice directly dictates developer speed, operational budgets, 
        and scaling parameters. Click below to select each architectural tier and visualize the output metrics.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Choices */}
        <div className="lg:col-span-8 space-y-6">
          {(['frontend', 'backend', 'database', 'ai', 'infra'] as const).map((category) => {
            const currentSelected = selectedTechs[category];
            const items = availableTechs.filter(t => t.category === category);
            
            return (
              <div key={category} className="bg-zinc-950/50 p-4 border border-zinc-850 rounded-xl">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block mb-3 font-semibold">
                  {category} layer
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {items.map((item) => {
                    const isSelected = item.id === currentSelected;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setTech(category, item.id)}
                        className={`cursor-pointer text-left p-3 rounded-lg border transition-all text-xs flex flex-col justify-between h-full ${
                          isSelected 
                            ? 'bg-rose-500/10 border-rose-500/35 text-white ring-1 ring-rose-500/20' 
                            : 'bg-zinc-900/30 border-zinc-800/60 hover:border-zinc-800 hover:bg-zinc-900/50 text-zinc-400 hover:text-zinc-300'
                        }`}
                      >
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-semibold">{item.name}</span>
                            {item.recommended && (
                              <span className="text-[8px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1 rounded">REC</span>
                            )}
                          </div>
                          <p className="text-[10px] text-zinc-500 leading-tight line-clamp-2">{item.description}</p>
                        </div>
                        {isSelected && (
                          <div className="flex justify-end mt-2 pt-1.5 border-t border-rose-500/10">
                            <Check className="h-3 w-3 text-rose-500" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side: Realtime metrics */}
        <div className="lg:col-span-4 space-y-5">
          <div className="bg-zinc-950 border border-zinc-850 p-5 rounded-2xl">
            <span className="text-[10px] font-mono text-rose-500 block mb-1">Architecture Diagnostic</span>
            <div className="text-zinc-200 mt-2 font-display font-bold text-sm border-b border-zinc-850 pb-3 block">
              {metrics.statusText}
            </div>

            <div className="space-y-4 pt-4">
              {/* Scalability Progress */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-zinc-500">System Elasticity</span>
                  <span className="text-zinc-300">{metrics.scalabilityScore}%</span>
                </div>
                <div className="h-2 bg-zinc-900 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: '50%' }}
                    animate={{ width: `${metrics.scalabilityScore}%` }}
                    className="h-full bg-rose-500 rounded-full" 
                  />
                </div>
                <span className="text-[9px] font-mono text-zinc-500 mt-1 block">Determines traffic survival thresholds.</span>
              </div>

              {/* Developer Velocity Progress */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-zinc-500">Developer Velocity</span>
                  <span className="text-zinc-300">{metrics.velocityScore}%</span>
                </div>
                <div className="h-2 bg-zinc-900 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: '50%' }}
                    animate={{ width: `${metrics.velocityScore}%` }}
                    className="h-full bg-[#06b6d4] rounded-full" 
                  />
                </div>
                <span className="text-[9px] font-mono text-zinc-500 mt-1 block">Reflects framework tooling overhead.</span>
              </div>

              {/* Cost Efficiency Progress */}
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-zinc-500">Cost Efficiency</span>
                  <span className="text-zinc-300">{metrics.costEfficiency}%</span>
                </div>
                <div className="h-2 bg-zinc-900 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: '50%' }}
                    animate={{ width: `${metrics.costEfficiency}%` }}
                    className="h-full bg-emerald-500 rounded-full" 
                  />
                </div>
                <span className="text-[9px] font-mono text-zinc-500 mt-1 block">Reflects server operational base loads.</span>
              </div>
            </div>
          </div>

          <div className="bg-zinc-950/40 p-4 border border-zinc-850 rounded-xl space-y-2.5">
            <div className="flex items-start gap-2.5">
              <Info className="h-4 w-4 text-[#06b6d4] shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-mono text-zinc-300 block font-semibold uppercase">Official Rec. Status</span>
                <p className="text-[10px] text-zinc-500 leading-relaxed mt-0.5">
                  The recommended Antview stack balances rapid startup velocity with deep enterprise reliability, fully integrating custom server-side endpoints with the modern Google GenAI APIs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
