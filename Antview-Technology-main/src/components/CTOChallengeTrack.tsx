import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, Laptop, UserCheck, Code2, 
  Layers, Sliders, Send, Award, FileSpreadsheet, 
  MessageSquare, Users, Sparkles, ChevronRight, CheckCircle2,
  ListTodo
} from 'lucide-react';
import { InteractiveStackBuilder } from './InteractiveStackBuilder';
import { EvaluationCalc } from './EvaluationCalc';
import { SubmissionSandbox } from './SubmissionSandbox';
import { PlaquePreview } from './PlaquePreview';

export function CTOChallengeTrack() {
  const [activeSection, setActiveSection] = useState<number>(0);
  const [timelineChecked, setTimelineChecked] = useState<Record<string, boolean>>({
    p1: true,
    p2: true,
    p3: false,
    p4: false,
    p5: false,
    p6: false,
    p7: false,
  });

  const sections = [
    { id: 0, num: '01', title: 'About Quantum Labs', icon: Building2 },
    { id: 1, num: '02', title: 'About Antview Technologies', icon: Laptop },
    { id: 2, num: '03', title: 'The CTO Position', icon: UserCheck },
    { id: 3, num: '04', title: 'The Challenge Brief', icon: Code2 },
    { id: 4, num: '05', title: 'Website Requirements', icon: Layers },
    { id: 5, num: '06', title: 'Evaluation Matrix', icon: Sliders },
    { id: 6, num: '07', title: 'Submission Requirements', icon: ListTodo },
    { id: 7, num: '08', title: 'Challenge Timeline', icon: FileSpreadsheet },
    { id: 8, num: '09', title: 'Recognition & Benefits', icon: Award },
    { id: 9, num: '10', title: 'Hall of Leadership', icon: Sparkles },
    { id: 10, num: '11', title: 'Final Message', icon: MessageSquare },
    { id: 11, num: '12', title: 'Acknowledgements', icon: Users },
  ];

  const toggleTimeline = (id: string) => {
    setTimelineChecked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const currentSectionInfo = sections[activeSection];

  return (
    <div className="min-h-screen bg-brand-charcoal text-zinc-100 font-sans pb-24">
      {/* Top Banner */}
      <section className="relative bg-zinc-950 border-b border-zinc-900 py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(225,29,72,0.08),transparent_55%)]" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
          <div>
            <span className="text-[10px] font-mono text-rose-500 tracking-widest block uppercase font-semibold">
              OFFICIAL LEADERSHIP ASSESSMENT PROGRAM · QUANTUM LABS × ANTVIEW TECHNOLOGIES
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight mt-2 text-white uppercase">
              CTO Selection Challenge
            </h1>
          </div>
          <div className="bg-rose-500/10 border border-rose-500/20 text-rose-400 font-mono text-xs px-3.5 py-2 rounded-lg flex items-center gap-2">
            <span className="w-2 h-2 bg-rose-500 rounded-full animate-ping" />
            Recruitment Active
          </div>
        </div>
      </section>

      {/* Main Grid content with Sidebar and main component */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Navigation Sidebar */}
        <div className="lg:col-span-4 bg-zinc-900/15 border border-zinc-800/80 rounded-2xl p-4 space-y-1">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest pl-3 block mb-3 font-semibold">
            Handbook Navigation
          </span>
          {sections.map((sect) => {
            const Icon = sect.icon;
            const isActive = sect.id === activeSection;
            return (
              <button
                key={sect.id}
                onClick={() => setActiveSection(sect.id)}
                className={`cursor-pointer w-full text-left px-3 py-2.5 rounded-lg text-xs font-display flex items-center justify-between transition-all ${
                  isActive 
                    ? 'bg-rose-600/15 border border-rose-500/30 text-rose-400 font-medium' 
                    : 'text-zinc-400 border border-transparent hover:bg-zinc-900/60 hover:text-zinc-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-zinc-500">{sect.num}</span>
                  <Icon className={`h-4.5 w-4.5 ${isActive ? 'text-rose-500' : 'text-zinc-500'}`} />
                  <span>{sect.title}</span>
                </div>
                {isActive && <ChevronRight className="h-3.5 w-3.5" />}
              </button>
            );
          })}
        </div>

        {/* Content Panel */}
        <div className="lg:col-span-8 bg-zinc-900/10 border border-zinc-800/50 rounded-2xl p-6 md:p-8 min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              {/* SECTION HEADER */}
              <div className="border-b border-zinc-850 pb-5">
                <span className="font-mono text-xs text-rose-500 font-bold uppercase tracking-wider block">
                  SECTION {currentSectionInfo.num}
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight text-white mt-1.5 uppercase">
                  {currentSectionInfo.title}
                </h2>
              </div>

              {/* 1. About Quantum Labs */}
              {activeSection === 0 && (
                <div className="space-y-6">
                  <div className="bg-rose-500/5 p-5 border border-rose-500/15 rounded-xl">
                    <h3 className="font-display font-bold text-lg text-rose-450 mb-3">Who We Are</h3>
                    <p className="text-zinc-300 font-light text-sm leading-relaxed">
                      Quantum Labs is an execution-first technology ecosystem where developers, designers, founders, AI builders and innovators collaborate to create real-world projects, products, startups and opportunities. We do not just talk — we build.
                    </p>
                  </div>
                  
                  <div className="bg-zinc-950 p-5 rounded-xl border border-zinc-850 space-y-4">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-semibold">ECOSYSTEM FOCUS</span>
                    <p className="text-zinc-400 text-xs leading-relaxed">
                      Every project inside Quantum Labs carries a single mandate: <b>ship real things that matter</b>. From day one, members engage in live projects, gain hands-on experience and contribute to a growing portfolio of technology products.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="bg-zinc-950/60 p-4 border border-zinc-900 rounded-xl space-y-2">
                      <span className="text-[9px] font-mono text-[#06b6d4] uppercase block">Mission Statement</span>
                      <p className="text-xs text-zinc-300">
                        Transform ideas into products, products into startups and startups into real-world opportunities.
                      </p>
                    </div>
                    <div className="bg-zinc-950/60 p-4 border border-zinc-900 rounded-xl space-y-2">
                      <span className="text-[9px] font-mono text-rose-500 uppercase block">Vision Blueprint</span>
                      <p className="text-xs text-zinc-300">
                        Build one of the most execution-focused technology ecosystems — a place where builders create history.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. About Antview Technologies */}
              {activeSection === 1 && (
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-display font-semibold text-zinc-100">The Dedicated Technology Agency</h3>
                    <p className="text-zinc-400 font-light text-xs md:text-sm leading-relaxed">
                      Antview Technologies is the dedicated technology and development agency operating under the Quantum Labs ecosystem. We serve clients across industries, delivering premium digital solutions that combine cutting-edge engineering with purposeful design.
                    </p>
                  </div>

                  <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-850/80">
                    <span className="text-[9px] font-mono text-rose-500 uppercase block font-semibold">Primary Goal</span>
                    <p className="text-xs text-zinc-300 mt-1 font-sans">
                      <b>Long-Term Goal:</b> Become a globally recognised technology company synonymous with quality, innovation and execution excellence.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase block font-semibold">Agency Services Matrix</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div className="p-3 bg-zinc-900 border border-zinc-850 rounded-lg text-xs">
                        <b className="text-zinc-200">Web Development</b>
                        <p className="text-zinc-450 mt-1">Modern, performant websites & apps.</p>
                      </div>
                      <div className="p-3 bg-zinc-900 border border-zinc-850 rounded-lg text-xs">
                        <b className="text-zinc-200">Mobile Apps</b>
                        <p className="text-zinc-450 mt-1">Cross-platform iOS / Android ports.</p>
                      </div>
                      <div className="p-3 bg-zinc-900 border border-zinc-850 rounded-lg text-xs">
                        <b className="text-zinc-200">AI solutions</b>
                        <p className="text-zinc-450 mt-1">Intelligent automation & machine learning.</p>
                      </div>
                      <div className="p-3 bg-zinc-900 border border-zinc-850 rounded-lg text-xs">
                        <b className="text-zinc-200">Custom Systems</b>
                        <p className="text-zinc-450 mt-1">Bespoke technical workflows.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 3. The CTO Position */}
              {activeSection === 2 && (
                <div className="space-y-6">
                  <p className="text-zinc-300 font-light text-xs md:text-sm leading-relaxed">
                    A Chief Technology Officer is not simply a senior developer. The CTO is the singular technical voice of the organisation — translating vision into architecture, architecture into execution, and execution into competitive advantage.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-zinc-950 p-4 border border-zinc-850 rounded-xl space-y-1.5">
                      <b className="text-[#06b6d4] text-xs font-display">Technical Leader</b>
                      <p className="text-[11px] text-zinc-450">Sets the overall technical direction and engineering standards.</p>
                    </div>
                    <div className="bg-zinc-950 p-4 border border-zinc-850 rounded-xl space-y-1.5">
                      <b className="text-[#06b6d4] text-xs font-display">System Architect</b>
                      <p className="text-[11px] text-zinc-450">Designs scalable, resilient and future-proof infrastructure.</p>
                    </div>
                    <div className="bg-zinc-950 p-4 border border-zinc-850 rounded-xl space-y-1.5">
                      <b className="text-rose-500 text-xs font-display">Decision Maker</b>
                      <p className="text-[11px] text-zinc-450">Makes high-stakes technical calls with speed and conviction.</p>
                    </div>
                    <div className="bg-zinc-950 p-4 border border-zinc-850 rounded-xl space-y-1.5">
                      <b className="text-rose-500 text-xs font-display">Team Builder</b>
                      <p className="text-[11px] text-zinc-450">Recruits, mentors and retains world-class engineering talent.</p>
                    </div>
                    <div className="bg-zinc-950 p-4 border border-zinc-850 rounded-xl space-y-1.5">
                      <b className="text-emerald-400 text-xs font-display">Technology Strategist</b>
                      <p className="text-[11px] text-zinc-450">Aligns the technology roadmap with business goals.</p>
                    </div>
                    <div className="bg-zinc-950 p-4 border border-zinc-850 rounded-xl space-y-1.5">
                      <b className="text-emerald-400 text-xs font-display">Execution Driver</b>
                      <p className="text-[11px] text-zinc-450">Ensures delivery — on time, on spec and on quality.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* 4. The Challenge Brief */}
              {activeSection === 3 && (
                <div className="space-y-6">
                  <div className="bg-rose-500/5 p-5 border border-rose-500/20 rounded-2xl space-y-3">
                    <h3 className="font-display font-semibold text-white">Your Elite Mission</h3>
                    <p className="text-xs text-rose-350 leading-relaxed font-mono font-medium">
                      &quot;Build the Official Antview Technologies Website.&quot;
                    </p>
                    <p className="text-zinc-300 text-xs font-light leading-relaxed">
                      This is not a tutorial exercise. This is the live, public-facing digital presence of a growing technology agency. Your submission must demonstrate leadership, technical depth, planning rigour and the ability to execute at a professional standard.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs font-mono text-zinc-500 uppercase">Why This Structured Challenge?</h4>
                    <p className="text-zinc-450 text-xs leading-relaxed font-light">
                      The best CTOs are not identified through resumes or interviews alone. They are identified through what they build. This challenge gives every candidate an equal opportunity to prove their capabilities through tangible, measurable output.
                    </p>
                  </div>
                </div>
              )}

              {/* 5. Website Requirements */}
              {activeSection === 4 && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-850 text-xs space-y-2">
                      <span className="text-[#06b6d4] font-mono text-[10px] block uppercase font-bold">Required Pages</span>
                      <ul className="space-y-1 text-zinc-305 font-mono text-[10px]">
                        <li>• Home</li>
                        <li>• About</li>
                        <li>• Services</li>
                        <li>• Portfolio</li>
                        <li>• Careers</li>
                        <li>• Contact</li>
                      </ul>
                    </div>

                    <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-850 text-xs space-y-2 col-span-2">
                      <span className="text-rose-500 font-mono text-[10px] block uppercase font-bold">Quality & Design Targets</span>
                      <ul className="grid grid-cols-2 gap-1 text-zinc-305 font-mono text-[10px]">
                        <li>• Premium responsive UI</li>
                        <li>• Mobile-First architecture</li>
                        <li>• SEO structures & performance</li>
                        <li>• Sub-100ms smooth animations</li>
                        <li>• Brand credibility</li>
                      </ul>
                      <div className="border-t border-zinc-900 pt-2 text-[9px] text-zinc-500 font-sans leading-relaxed">
                        <b>Inspiration sources:</b> Stripe, Linear, Vercel, Apple, and Framer. Stripe-grade clarity, Vercel-grade performance.
                      </div>
                    </div>
                  </div>

                  {/* INSERT stack configurator */}
                  <InteractiveStackBuilder />
                </div>
              )}

              {/* 6. Evaluation Matrix */}
              {activeSection === 5 && (
                <div className="space-y-8">
                  <p className="text-zinc-300 font-light text-xs md:text-sm leading-relaxed">
                    Candidates are assessed across six distinct visual and logical dimensions. Each reflects a core competency expected of our founding Chief Technology Officer.
                  </p>

                  {/* INSERT scorecard */}
                  <EvaluationCalc />
                </div>
              )}

              {/* 7. Submission Requirements */}
              {activeSection === 6 && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
                    <div className="bg-zinc-950 p-3.5 rounded-lg border border-zinc-850 text-center">
                      <span className="text-rose-500 font-mono font-bold text-base">01</span>
                      <span className="text-[10px] block mt-1 text-zinc-100 uppercase">Live Site</span>
                    </div>
                    <div className="bg-zinc-950 p-3.5 rounded-lg border border-zinc-850 text-center">
                      <span className="text-rose-500 font-mono font-bold text-base">02</span>
                      <span className="text-[10px] block mt-1 text-zinc-100 uppercase">Codebase</span>
                    </div>
                    <div className="bg-zinc-950 p-3.5 rounded-lg border border-zinc-850 text-center">
                      <span className="text-rose-500 font-mono font-bold text-base">03</span>
                      <span className="text-[10px] block mt-1 text-zinc-100 uppercase">Architecture Doc</span>
                    </div>
                    <div className="bg-zinc-950 p-3.5 rounded-lg border border-zinc-850 text-center">
                      <span className="text-rose-500 font-mono font-bold text-base">04</span>
                      <span className="text-[10px] block mt-1 text-zinc-100 uppercase">V2 Roadmap</span>
                    </div>
                    <div className="bg-zinc-950 p-3.5 rounded-lg border border-zinc-850 text-center">
                      <span className="text-rose-500 font-mono font-bold text-base">05</span>
                      <span className="text-[10px] block mt-1 text-zinc-100 uppercase">Stack Explain</span>
                    </div>
                  </div>

                  {/* INSERT Submission Sandbox */}
                  <SubmissionSandbox />
                </div>
              )}

              {/* 8. Challenge Timeline */}
              {activeSection === 7 && (
                <div className="space-y-6">
                  <p className="text-zinc-300 font-light text-xs md:text-sm leading-relaxed">
                    The challenge follows a structured seven-phase process culminating in a live presentation to the Antview Technologies leadership team.
                  </p>

                  <div className="relative border-l border-zinc-850 pl-5 ml-2.5 space-y-6">
                    {[
                      { id: 'p1', phase: 1, title: 'Research & Competitor Audits', info: 'Study Antview Technologies, competitor layouts, and enterprise target audiences.' },
                      { id: 'p2', phase: 2, title: 'Planning & Framework setup', info: 'Define architecture models, tech stack specifications, and mapping project timelines.' },
                      { id: 'p3', phase: 3, title: 'Detailed UI Design Wireframes', info: 'Create wireframe drafts, setup design systems and precise high-fidelity layout mockups.' },
                      { id: 'p4', phase: 4, title: 'Development & API proxy loops', info: 'Build client assets, structure express router proxy paths, and wrap Gemini API calls.' },
                      { id: 'p5', phase: 5, title: 'Testing & Performance Audits', info: 'Perform cross-device testing, execute lighthouse score audits, and assert mobile compliance.' },
                      { id: 'p6', phase: 6, title: 'Deployment & CI/CD pipeline configuration', info: 'Deploy finalized bundles to production cloud run clusters, mapping certificates.' },
                      { id: 'p7', phase: 7, title: 'Executive Presentation & Q&A', info: 'Present engineered product to ecosystem coordinators, justifying technical choices.' },
                    ].map((step) => (
                      <div key={step.id} className="relative">
                        <span className="absolute -left-[27px] top-0 w-3.5 h-3.5 rounded-full border border-rose-500 bg-brand-charcoal flex items-center justify-center">
                          {timelineChecked[step.id] && <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />}
                        </span>
                        
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <span className="text-[9px] font-mono text-rose-500 uppercase tracking-widest block font-bold">
                              Phase {step.phase}
                            </span>
                            <b className="text-zinc-100 text-xs block mt-0.5">{step.title}</b>
                            <p className="text-[11px] text-zinc-500 leading-normal mt-0.5">{step.info}</p>
                          </div>
                          <button
                            onClick={() => toggleTimeline(step.id)}
                            className="cursor-pointer text-[9px] font-mono bg-zinc-950 border border-zinc-850 px-2 py-1 rounded text-zinc-400 hover:text-zinc-200"
                          >
                            {timelineChecked[step.id] ? 'Completed ✓' : 'Mark active'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 9. Recognition & Benefits */}
              {activeSection === 8 && (
                <div className="space-y-6">
                  <p className="text-zinc-300 font-light text-xs md:text-sm leading-relaxed">
                    The individual selected as Founding Chief Technology Officer receives formal recognition, deep equity authority, and exclusive organizational executive benefits.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-850/60 text-xs space-y-1">
                      <b className="text-rose-500">Official CTO Appointment</b>
                      <p className="text-zinc-450 text-[11px]">Formal selection as Founding Chief Technology Officer of Antview Technologies.</p>
                    </div>
                    <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-850/60 text-xs space-y-1">
                      <b className="text-rose-500">Ecosystem Recognition</b>
                      <p className="text-zinc-450 text-[11px]">Direct mention and authoritative status cross the complete Quantum Labs network.</p>
                    </div>
                    <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-850/60 text-xs space-y-1">
                      <b className="text-[#06b6d4]">Priority Project Access</b>
                      <p className="text-zinc-450 text-[11px]">Immediate first rights on all future premium paid enterprise agency contracts.</p>
                    </div>
                    <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-850/60 text-xs space-y-1">
                      <b className="text-[#06b6d4]">Authority & Team Building</b>
                      <p className="text-zinc-450 text-[11px]">Direct recruiting mandate to vet and assemble future high-tier development squads.</p>
                    </div>
                  </div>

                  <div className="bg-rose-500/5 p-4 rounded-xl border border-rose-500/15">
                    <span className="text-[10px] font-mono text-rose-500 block font-semibold mb-2 uppercase">Official Executive Mandates</span>
                    <ul className="space-y-1.5 text-zinc-305 font-mono text-[9px] leading-relaxed">
                      <li>• Lead all technical initiatives across Antview Technologies</li>
                      <li>• Identify, recruit and mentor future developers and technical staff</li>
                      <li>• Actively define the organisation&apos;s technology strategy & roadmaps</li>
                      <li>• Review and approve all project architectures and technical proposals</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* 10. Hall of Leadership */}
              {activeSection === 9 && (
                <div className="space-y-6">
                  {/* Plaque Preview */}
                  <PlaquePreview />
                </div>
              )}

              {/* 11. Final Message */}
              {activeSection === 10 && (
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-zinc-950 to-brand-charcoal p-8 rounded-2xl border border-zinc-850 text-center relative max-w-xl mx-auto">
                    <span className="text-[40px] font-display text-rose-500/20 absolute top-2 left-6 block font-serif">&quot;</span>
                    <p className="text-sm md:text-base text-zinc-200 italic font-medium leading-relaxed my-4 relative z-10">
                      &quot;A title is not given. A title is earned through leadership, consistency, and execution.&quot;
                    </p>
                    <span className="text-[10px] font-mono text-rose-500 block uppercase font-bold tracking-wider">
                      The Antview Recruitment Committee
                    </span>
                    <p className="text-[11px] text-zinc-550 leading-relaxed mt-3 px-6">
                      The Chief Technology Officer selected through this challenge will become one of the founding pillars of Antview Technologies and will help build the future of the organisation.
                    </p>
                  </div>
                </div>
              )}

              {/* 12. Acknowledgements */}
              {activeSection === 11 && (
                <div className="space-y-6">
                  <div className="p-8 bg-zinc-950 border border-zinc-900 rounded-2xl text-center space-y-4 max-w-md mx-auto">
                    <b className="text-rose-500 text-[10px] font-mono tracking-widest block uppercase font-bold">Document Certification</b>
                    <h4 className="text-zinc-200 font-display font-bold text-lg select-none">Kuwar Aman Maurya</h4>
                    <span className="text-[9px] font-mono text-zinc-500 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full uppercase tracking-wider block w-max mx-auto">
                      Founder — Quantum Labs
                    </span>
                    <p className="text-[11px] text-zinc-450 leading-relaxed pt-2">
                      Thank you to every builder, developer and innovator who is part of the Quantum Labs ecosystem. This challenge exists because we believe in identifying greatness through work, not words.
                    </p>
                  </div>
                </div>
              )}

              {/* SECTION NAVIGATION BUTTONS */}
              <div className="border-t border-zinc-850 pt-5 flex justify-between gap-4">
                <button
                  onClick={() => setActiveSection(prev => Math.max(0, prev - 1))}
                  disabled={activeSection === 0}
                  className={`cursor-pointer font-mono text-[10px] uppercase tracking-wider px-3.5 py-2 rounded-lg border ${
                    activeSection === 0
                      ? 'border-zinc-900 text-zinc-700 cursor-not-allowed'
                      : 'border-zinc-800 text-zinc-400 hover:text-zinc-200 bg-zinc-950/40'
                  }`}
                >
                  ← Previous Section
                </button>
                <button
                  onClick={() => setActiveSection(prev => Math.min(sections.length - 1, prev + 1))}
                  disabled={activeSection === sections.length - 1}
                  className={`cursor-pointer font-mono text-[10px] uppercase tracking-wider px-3.5 py-2 rounded-lg border ${
                    activeSection === sections.length - 1
                      ? 'border-zinc-900 text-zinc-700 cursor-not-allowed'
                      : 'border-rose-500/20 text-rose-400 hover:text-rose-350 bg-rose-500/5'
                  }`}
                >
                  Next Section →
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
