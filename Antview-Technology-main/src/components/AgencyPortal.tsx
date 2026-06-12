import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Laptop, Smartphone, Palette, Cpu, Play, 
  Workflow, Layers, Code, ArrowRight, CheckCircle2, 
  ChevronRight, Calendar, Users, Send, Building, ShieldCheck
} from 'lucide-react';
import { Service, PortfolioProject } from '../types';
import { PageView } from './Header';

interface AgencyPortalProps {
  onEnterChallenge: () => void;
  currentSection?: 'home' | 'services' | 'portfolio' | 'contact';
  onNavigate?: (view: PageView) => void;
}

export function AgencyPortal({ onEnterChallenge, currentSection = 'home', onNavigate }: AgencyPortalProps) {
  const [selectedService, setSelectedService] = useState<string>('web');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Web Development',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const services: Service[] = [
    {
      id: 'web',
      title: 'Web Development',
      iconName: 'Laptop',
      description: 'Modern, highly performant, and secure web applications built for scale.',
      details: [
        'Vite & React Ecosystem',
        'Next-generation Performance Optimization',
        'Headless CMS & Commerce integrations',
        'Edge-native Serverless rendering'
      ]
    },
    {
      id: 'mobile',
      title: 'Mobile App Development',
      iconName: 'Smartphone',
      description: 'Cross-platform mobile apps combining native capabilities with high-fidelity design.',
      details: [
        'React Native & Flutter expertise',
        'Offline-first synchronization',
        'Biometric Auth & Native hardware access',
        'App Store & Play Store pipeline automation'
      ]
    },
    {
      id: 'design',
      title: 'UI/UX Design',
      iconName: 'Palette',
      description: 'Research-driven, pixel-perfect user experiences that convert and delight.',
      details: [
        'In-depth User Journey Mapping',
        'Interactive Figma & Framer prototyping',
        'Comprehensive Custom Design Systems',
        'Responsive layout architectures'
      ]
    },
    {
      id: 'ai',
      title: 'AI Solutions',
      iconName: 'Cpu',
      description: 'Intelligent automation, agent systems, and machine-learning integrations.',
      details: [
        'Gemini SDK & LLM Fine-tuning',
        'Semantic Search & Vector Embeddings',
        'Cognitive Data Extraction pipelines',
        'Agentic Workflow orchestration'
      ]
    },
    {
      id: 'automation',
      title: 'Automation',
      iconName: 'Workflow',
      description: 'Business process automation and robotic system orchestrations at scale.',
      details: [
        'Automated CI/CD deployment pipelines',
        'External API bridge design',
        'Real-time webhook architectures',
        'Data cleaning & cron-based workers'
      ]
    },
    {
      id: 'saas',
      title: 'SaaS Development',
      iconName: 'Layers',
      description: 'Multi-tenant scalable platforms engineered for seamless user onboarding.',
      details: [
        'Robust Tiered Subscription management',
        'Secure Multi-tenant data segregation',
        'Optimized microservice API contracts',
        'Unified centralized event streaming'
      ]
    },
    {
      id: 'custom',
      title: 'Custom Software',
      iconName: 'Code',
      description: 'Bespoke solutions custom engineered to solve complex system bottlenecks.',
      details: [
        'Extensible Event-driven microservices',
        'Real-time WebSockets & collaboration engines',
        'Complex relational data modeling',
        'Enterprise legacy logic migration'
      ]
    }
  ];

  const portfolio: PortfolioProject[] = [
    {
      id: 'linear-clone',
      title: 'Axiom Task Engine',
      category: 'SaaS / Web App',
      tech: ['React', 'TypeScript', 'Tailwind', 'WebSockets'],
      description: 'A high-performance project management tool featuring instant sub-100ms sync state synchronization, offline database persistence and gorgeous keyboard navigation.',
      metrics: 'Sub-40ms Event Sync',
      achievement: '4.8/5 CSAT Score'
    },
    {
      id: 'ai-analyst',
      title: 'Cognitive Finance Parser',
      category: 'AI / Automation',
      tech: ['Gemini API', 'NodeJS', 'VectorDB'],
      description: 'Intelligent parsed agent extracting semantic fields from structured and unstructured client financial statements with automated audit validation.',
      metrics: '99.4% Parsing Acc',
      achievement: 'Saved 250+ Dev Hours'
    },
    {
      id: 'ecom-pipeline',
      title: 'Vanguard Retail Portal',
      category: 'Web / E-commerce',
      tech: ['Vite', 'Edge Workers', 'Stripe'],
      description: 'Global lightweight consumer checkout flows styled with minimalist precision. Absolute Vercel-grade Lighthouse scoring with full responsive elasticity.',
      metrics: '100% Lighthouse Perf',
      achievement: '320% Traffic Scale'
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 1200);
  };

  const currentServiceObj = services.find(s => s.id === selectedService) || services[0];

  return (
    <div className="min-h-screen bg-brand-charcoal text-zinc-100 font-sans">
      
      {/* Hero Section */}
      {currentSection === 'home' && (
        <>
          <section className="relative pt-12 pb-24 md:py-32 px-4 overflow-hidden border-b border-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(225,29,72,0.06),transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-full text-xs font-mono mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
            OPERATING UNDER THE QUANTUM LABS ECOSYSTEM
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight mb-6">
            We Deliver Premium <span className="text-rose-500">Digital Engines</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
            Antview Technologies combines cutting-edge engineering with purposeful design. 
            We build modern, performant products for client partners who demand Vercel-grade performance 
            and Stripe-grade clarity.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={onEnterChallenge}
              className="cursor-pointer group flex items-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-display font-semibold px-6 py-3.5 rounded-lg transition-all shadow-lg shadow-rose-600/20 w-full sm:w-auto justify-center"
            >
              Explore CTO Challenge
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#services-section"
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.('services');
              }}
              className="cursor-pointer flex items-center justify-center font-display font-medium text-zinc-300 hover:text-white px-6 py-3.5 border border-zinc-800 hover:border-zinc-700 rounded-lg transition-all w-full sm:w-auto"
            >
              Our Agency Services
            </a>
          </div>
        </div>
      </section>

      {/* Corporate Pitch / Alignment Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-b border-zinc-900/60">
        <div>
          <span className="text-xs font-mono text-rose-500 tracking-widest uppercase block mb-2">Our Manifesto</span>
          <h2 className="text-3xl font-display font-bold text-zinc-100 tracking-tight mb-5">
            We Do Not Just Talk — We Build.
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-4 font-light">
            Operating as the elite development arm of <b>Quantum Labs</b>, Antview Technologies is built upon the philosophy of execution-first technology. Our teams collaborate on complex system architectures, deploying web, mobile, and AI solutions for global clients.
          </p>
          <div className="space-y-3.5 mt-6">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
              <span className="text-sm text-zinc-300"><b>Stripe-grade clarity</b> and highly interactive design patterns.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
              <span className="text-sm text-zinc-300"><b>Apple-grade attention to detail</b> in every micro-interaction.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
              <span className="text-sm text-zinc-300"><b>Sub-100ms response targets</b> optimized for mobile-first environments.</span>
            </div>
          </div>
        </div>
        <div className="bg-zinc-900/80 p-6 rounded-2xl border border-zinc-800 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-rose-500/5 blur-xl rounded-full" />
          <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-zinc-800">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-500" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-xs font-mono text-zinc-500 ml-2">system-core-shell # antview-info</span>
          </div>
          <div className="space-y-4 font-mono text-xs text-zinc-300">
            <div className="flex justify-between border-b border-zinc-800/40 pb-2">
              <span className="text-zinc-500">CRITICAL_MANDATE:</span>
              <span className="text-rose-400 font-semibold">Ship Real Things That Matter</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800/40 pb-2">
              <span className="text-zinc-500">PARENT_ORGANIZATION:</span>
              <span>Quantum Labs Ecosystem</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800/40 pb-2">
              <span className="text-zinc-500">PRIMARY_FOCUS:</span>
              <span>Full-Stack & Intelligent Systems</span>
            </div>
            <div className="flex justify-between border-b border-zinc-800/40 pb-2">
              <span className="text-zinc-500">CHIEF_OFFICER_RECRUIT:</span>
              <span className="text-rose-500 animate-pulse">CTO Selection Active</span>
            </div>
            <button
              onClick={onEnterChallenge}
              className="cursor-pointer mt-4 w-full bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-400 font-display font-medium rounded-lg py-2.5 transition-all text-center block"
            >
              Review CTO Recruitment Info
            </button>
          </div>
        </div>
      </section>
        </>
      )}

      {/* Services Section */}
      {currentSection === 'services' && (
        <section id="services-section" className="py-24 px-4 bg-zinc-950 border-b border-zinc-900/60 scroll-mt-14 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-mono text-rose-500 tracking-widest uppercase block mb-3">Capabilities Matrix</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-white">
              Surgical Capabilities Custom-Built for Enterprises
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-light max-w-2xl mx-auto mt-4">
              We operate across all standard vertical tech structures. Choose a core capability to see how our systems execute in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Sidebar selection */}
            <div className="lg:col-span-5 space-y-2">
              {services.map((service) => {
                const isActive = service.id === selectedService;
                return (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`cursor-pointer w-full text-left p-4 rounded-xl border transition-all duration-250 flex items-center gap-4 ${
                      isActive 
                        ? 'bg-rose-500/10 border-rose-500/40 text-white glow-red' 
                        : 'bg-zinc-900/20 border-zinc-900 hover:border-zinc-800 hover:bg-zinc-900/40 text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <div className={`p-2.5 rounded-lg transition-colors ${
                      isActive ? 'bg-rose-500 text-white' : 'bg-zinc-800 text-zinc-400'
                    }`}>
                      {service.id === 'web' && <Laptop className="h-5 w-5" />}
                      {service.id === 'mobile' && <Smartphone className="h-5 w-5" />}
                      {service.id === 'design' && <Palette className="h-5 w-5" />}
                      {service.id === 'ai' && <Cpu className="h-5 w-5" />}
                      {service.id === 'automation' && <Workflow className="h-5 w-5" />}
                      {service.id === 'saas' && <Layers className="h-5 w-5" />}
                      {service.id === 'custom' && <Code className="h-5 w-5" />}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold text-sm">{service.title}</h3>
                      <p className="text-[11px] text-zinc-500 mt-0.5 line-clamp-1">{service.description}</p>
                    </div>
                    <ChevronRight className={`h-4 w-4 transition-transform ${isActive ? 'rotate-90 text-rose-500' : 'text-zinc-650'}`} />
                  </button>
                );
              })}
            </div>

            {/* Display panel */}
            <div className="lg:col-span-7 bg-zinc-900/40 rounded-2xl border border-zinc-800/80 p-6 md:p-8 relative">
              <span className="absolute top-4 right-4 font-mono text-[10px] text-zinc-600 block">SYSTEM_SPECS_v1.0.4</span>
              
              <div className="flex items-center gap-3 mb-6">
                <span className="p-2 rounded-lg bg-rose-600/15 text-rose-500">
                  {currentServiceObj.id === 'web' && <Laptop className="h-6 w-6" />}
                  {currentServiceObj.id === 'mobile' && <Smartphone className="h-6 w-6" />}
                  {currentServiceObj.id === 'design' && <Palette className="h-6 w-6" />}
                  {currentServiceObj.id === 'ai' && <Cpu className="h-6 w-6" />}
                  {currentServiceObj.id === 'automation' && <Workflow className="h-6 w-6" />}
                  {currentServiceObj.id === 'saas' && <Layers className="h-6 w-6" />}
                  {currentServiceObj.id === 'custom' && <Code className="h-6 w-6" />}
                </span>
                <h3 className="text-xl font-display font-bold text-zinc-100">{currentServiceObj.title}</h3>
              </div>

              <p className="text-zinc-400 font-light mb-8 leading-relaxed">
                {currentServiceObj.description}
              </p>

              <div className="border-t border-zinc-800/50 pt-6">
                <h4 className="text-xs font-mono text-zinc-500 tracking-wider mb-4 uppercase">Direct Architectural Standards:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentServiceObj.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 bg-zinc-900/60 p-3 rounded-lg border border-zinc-800/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                      <span className="text-xs text-zinc-300 font-mono">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic Interactive UI Widget inside display panel */}
              <div className="mt-8 bg-zinc-950 p-4 rounded-xl border border-rose-500/15 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                <div>
                  <span className="text-[10px] font-mono text-rose-400 uppercase block tracking-wider">Simulation Output</span>
                  <p className="text-xs text-zinc-400 font-sans mt-0.5">Test response speed of our {currentServiceObj.title} systems.</p>
                </div>
                <div className="flex gap-4">
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-zinc-500 block">Response Metric</span>
                    <span className="text-lg font-mono text-green-400 font-semibold">
                      {currentServiceObj.id === 'web' || currentServiceObj.id === 'design' ? '0.04s' : currentServiceObj.id === 'ai' ? '0.92s' : '0.12s'}
                    </span>
                  </div>
                  <div className="h-8 border-r border-zinc-800" />
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-zinc-500 block">System Integrity</span>
                    <span className="text-lg font-mono text-rose-500 font-semibold">99.98%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Featured Engagements (Portfolio) */}
      {currentSection === 'portfolio' && (
        <section className="py-24 px-4 bg-brand-charcoal border-b border-zinc-1000">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <span className="text-xs font-mono text-rose-500 tracking-widest uppercase block mb-3">Selected Deliverables</span>
              <h2 className="text-3xl font-display font-bold text-white tracking-tight">Our Production Standards</h2>
            </div>
            <p className="text-zinc-400 font-light text-sm max-w-md">
              A brief preview of live enterprise services. True engineering depth configured directly into responsive customer canvases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.map((proj) => (
              <div key={proj.id} className="bg-zinc-900/30 p-6 rounded-2xl border border-zinc-800/80 hover:border-zinc-700/60 transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-mono text-rose-500 bg-rose-500/10 px-2 py-0.5 rounded-full">{proj.category}</span>
                    <span className="text-[10px] font-mono text-zinc-500">PROD_LIVE</span>
                  </div>
                  <h3 className="text-lg font-display font-bold group-hover:text-rose-450 transition-colors">{proj.title}</h3>
                  <p className="text-zinc-400 font-light text-xs mt-3 leading-relaxed">{proj.description}</p>
                </div>

                <div className="mt-6 pt-5 border-t border-zinc-900 flex justify-between items-center">
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 block">Performance Target</span>
                    <span className="text-xs font-mono text-zinc-300 font-medium">{proj.metrics}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-zinc-500 block">Key Achievement</span>
                    <span className="text-xs font-sans text-emerald-400">{proj.achievement}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Interactive Contact & Collaboration Form */}
      {currentSection === 'contact' && (
        <section className="py-24 px-4 bg-zinc-950/40">
        <div className="max-w-3xl mx-auto bg-zinc-900/40 rounded-2xl border border-zinc-800 p-6 md:p-10">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-display font-extrabold text-white">Initiate Client Engagement</h2>
            <p className="text-xs text-zinc-400 mt-2">Submit your enterprise specifications to our core evaluation coordinators.</p>
          </div>

          {submitted ? (
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-8 bg-zinc-950 border border-emerald-500/20 rounded-xl text-center"
            >
              <div className="mx-auto w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-400 border border-emerald-500/30 mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-base font-display font-semibold text-zinc-100">Transmission Successfully Synced</h3>
              <p className="text-xs text-zinc-400 mt-2 max-w-md mx-auto">
                Thank you for reaching out to Antview Technologies. One of our technical coordinators will contact you within 2 business hours.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="cursor-pointer mt-6 text-xs text-zinc-500 hover:text-zinc-300 font-mono underline"
              >
                Send another specs transmission
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5">Your Name <span className="text-rose-500">*</span></label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder="e.g., Sarah Jenkins"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-xs text-zinc-200 placeholder:text-zinc-650 focus:border-rose-500/50 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5">Email Address <span className="text-rose-500">*</span></label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    placeholder="e.g., client@enterprise.com"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-xs text-zinc-200 placeholder:text-zinc-650 focus:border-rose-500/50 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-company" className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5 font-medium">Company Name</label>
                  <input
                    id="contact-company"
                    type="text"
                    value={contactForm.company}
                    onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                    placeholder="e.g., Enterprise Inc."
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-xs text-zinc-200 placeholder:text-zinc-650 focus:border-rose-500/50 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-project-type" className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5">Target Requirement</label>
                  <select
                    id="contact-project-type"
                    value={contactForm.projectType}
                    onChange={(e) => setContactForm({ ...contactForm, projectType: e.target.value })}
                    className="cursor-pointer w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-2.5 text-xs text-zinc-300 focus:border-rose-500/50 outline-none transition-colors"
                  >
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>AI / Machine Learning</option>
                    <option>SaaS Systems</option>
                    <option>Custom Automation</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1.5 font-medium">Brief Specifications</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  placeholder="Outline key systems requirements, scaling expectations, and timelines..."
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-4 text-xs text-zinc-200 placeholder:text-zinc-650 focus:border-rose-500/50 outline-none transition-colors font-sans"
                />
              </div>

              <button
                id="btn-submit-engagement"
                type="submit"
                disabled={sending}
                className="cursor-pointer w-full bg-rose-600 hover:bg-rose-700 text-white font-display font-semibold py-3 rounded-lg text-xs transition-colors shadow-lg shadow-rose-600/10 flex items-center justify-center gap-2"
              >
                {sending ? (
                  <>
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    Syncing specifications...
                  </>
                ) : (
                  <>
                    <Send className="h-3 w-3" />
                    Transmit Specifications
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>
      )}

      {/* Footer info line matching guidelines */}
      <footer className="border-t border-zinc-900 bg-brand-charcoal py-8 px-4 text-center">
        <span className="text-[10px] font-mono text-zinc-600 uppercase block tracking-wider">
          Antview Technologies · Authorized Subsidiary of Quantum Labs
        </span>
      </footer>
    </div>
  );
}
