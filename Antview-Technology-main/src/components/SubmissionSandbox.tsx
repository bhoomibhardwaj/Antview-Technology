import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, Code2, Globe, FileText, Compass, Cpu, 
  Terminal, ShieldCheck, AlertTriangle, List, CheckCircle2 
} from 'lucide-react';
import { CandidateSubmission } from '../types';

export function SubmissionSandbox() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [repoUrl, setRepoUrl] = useState('');
  const [liveUrl, setLiveUrl] = useState('');
  const [docText, setDocText] = useState('');
  const [roadmapText, setRoadmapText] = useState('');
  const [techExplanation, setTechExplanation] = useState('');
  
  const [logs, setLogs] = useState<string[]>([]);
  const [runningDiagnostics, setRunningDiagnostics] = useState(false);
  const [diagnosticsSuccess, setDiagnosticsSuccess] = useState<boolean | null>(null);
  
  const [submissions, setSubmissions] = useState<CandidateSubmission[]>([]);

  // Seed initial submissions from local storage or mockup
  useEffect(() => {
    const saved = localStorage.getItem('antview_cto_submissions');
    if (saved) {
      try {
        setSubmissions(JSON.parse(saved));
      } catch (e) {
        // Fallback
      }
    } else {
      const defaultSub: CandidateSubmission[] = [
        {
          id: 'sub-001',
          fullName: 'Alexander Chen',
          email: 'alex.chen@cyber.io',
          repoUrl: 'https://github.com/alechen/antview-core',
          liveUrl: 'https://antview-demo.cyber.io',
          docText: 'Modular full-stack deployment detailing bun servers, edge configurations, and vector embeddings.',
          roadmapText: 'Multi-tenant database scaling, edge-native web sockets, load balancing pathways.',
          techStack: ['React', 'Bun', 'PostgreSQL', 'Vercel'],
          timestamp: '2026-06-11T14:32:00Z',
          score: 83.5,
          status: 'pending'
        }
      ];
      setSubmissions(defaultSub);
      localStorage.setItem('antview_cto_submissions', JSON.stringify(defaultSub));
    }
  }, []);

  const simulateDiagnostics = () => {
    if (!fullName || !email || !repoUrl || !liveUrl) {
      setLogs(['[ERROR] Check fails: Name, Email, Repo URL and Live URL are required to launch compilation checks.']);
      setDiagnosticsSuccess(false);
      return;
    }

    setRunningDiagnostics(true);
    setDiagnosticsSuccess(null);
    setLogs([]);

    const logSteps = [
      `[INIT] Initiating CTO Challenge submission checks for applicant: ${fullName}...`,
      '[NETWORK] Syncing repositories and fetching HEAD configurations...',
      `[SSL] Validating production server certificate at: ${liveUrl}...`,
      '[SSL] Production SSL payload response code: 200 OK.',
      '[VITE-BUILD] Bundling local modules using Esbuild transpilation protocols...',
      '[TS-CHECK] Performing strict typescript parameter declaration reviews...',
      '[LINT] Reviewing modules. 0 critical execution bugs flagged.',
      '[LIVETEST] Attempting container ingress simulations. Latency rating: 42ms.',
      '[SUCCESS] All initial diagnostics pass compilation check metrics!'
    ];

    let i = 0;
    const interval = setInterval(() => {
      setLogs(prev => [...prev, logSteps[i]]);
      i++;
      if (i >= logSteps.length) {
        clearInterval(interval);
        setRunningDiagnostics(false);
        setDiagnosticsSuccess(true);
      }
    }, 400);
  };

  const submitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!diagnosticsSuccess) {
      alert('Please run diagnostics and verify your builds build successfully first.');
      return;
    }

    const newSub: CandidateSubmission = {
      id: `sub-${Math.floor(100 + Math.random() * 900)}`,
      fullName,
      email,
      repoUrl,
      liveUrl,
      docText,
      roadmapText,
      techStack: ['React', 'Vite', 'Express', 'Google GenAI SDK'],
      timestamp: new Date().toISOString(),
      score: 75 + Math.random() * 20, // Simulated score helper
      status: 'pending'
    };

    const updated = [...submissions, newSub];
    setSubmissions(updated);
    localStorage.setItem('antview_cto_submissions', JSON.stringify(updated));

    // Reset Form
    setFullName('');
    setEmail('');
    setRepoUrl('');
    setLiveUrl('');
    setDocText('');
    setRoadmapText('');
    setTechExplanation('');
    setDiagnosticsSuccess(null);
    setLogs([]);
  };

  return (
    <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-5 md:p-6 shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <span className="p-2 rounded-lg bg-rose-500/10 text-rose-500">
          <Terminal className="h-5 w-5" />
        </span>
        <div>
          <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest block">Deliverable Registry</span>
          <h3 className="text-lg font-display font-bold text-zinc-100">CTO Submissions Sandbox</h3>
        </div>
      </div>

      <p className="text-xs text-zinc-400 mb-8 leading-relaxed max-w-3xl">
        Ready to take the challenge? Compile your 5 mandatory deliverables described in Section 07, 
        input your repository and live server endpoints below, and run live diagnostic compile validation tests.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Form panel */}
        <form onSubmit={submitApplication} className="space-y-4">
          <div className="bg-zinc-950 p-4 border border-zinc-850 rounded-xl space-y-4">
            <span className="text-[10px] font-mono text-rose-500 uppercase block font-semibold">1. Identity Information</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="challenger-name" className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1">Full Name</label>
                <input
                  id="challenger-name"
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g., Alexander Chen"
                  className="w-full bg-zinc-900 border border-zinc-800/80 rounded-lg px-3 py-2 text-xs text-zinc-200 outline-none focus:border-rose-500/50"
                />
              </div>
              <div>
                <label htmlFor="challenger-email" className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1">Contact Email</label>
                <input
                  id="challenger-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g., alex@chen.com"
                  className="w-full bg-zinc-900 border border-zinc-800/80 rounded-lg px-3 py-2 text-xs text-zinc-200 outline-none focus:border-rose-500/50"
                />
              </div>
            </div>
          </div>

          <div className="bg-zinc-950 p-4 border border-zinc-850 rounded-xl space-y-4">
            <span className="text-[10px] font-mono text-rose-500 uppercase block font-semibold">2. Production Endpoints</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="challenger-repo" className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Code2 className="h-3 w-3 text-rose-500" />
                  GitHub Codebase URL
                </label>
                <input
                  id="challenger-repo"
                  type="url"
                  required
                  value={repoUrl}
                  onChange={(e) => setRepoUrl(e.target.value)}
                  placeholder="https://github.com/..."
                  className="w-full bg-zinc-900 border border-zinc-800/80 rounded-lg px-3 py-2 text-xs text-zinc-200 outline-none focus:border-rose-500/50"
                />
              </div>
              <div>
                <label htmlFor="challenger-live" className="block text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Globe className="h-3 w-3 text-[#06b6d4]" />
                  Deployed Live Site URL
                </label>
                <input
                  id="challenger-live"
                  type="url"
                  required
                  value={liveUrl}
                  onChange={(e) => setLiveUrl(e.target.value)}
                  placeholder="https://antview-demo..."
                  className="w-full bg-zinc-900 border border-zinc-800/80 rounded-lg px-3 py-2 text-xs text-zinc-200 outline-none focus:border-rose-500/50"
                />
              </div>
            </div>
          </div>

          <div className="bg-zinc-950 p-4 border border-zinc-850 rounded-xl space-y-4">
            <span className="text-[10px] font-mono text-rose-500 uppercase block font-semibold">3. Architectural Documents</span>
            <div className="space-y-3">
              <div>
                <label htmlFor="challenger-doc" className="block text-[10px] font-mono text-zinc-500 uppercase mb-1 flex items-center gap-1">
                  <FileText className="h-3 w-3" />
                  Technical Architecture Explanation
                </label>
                <textarea
                  id="challenger-doc"
                  rows={2}
                  value={docText}
                  onChange={(e) => setDocText(e.target.value)}
                  placeholder="Briefly state your primary server-side proxy models, DB mappings, and caching targets..."
                  className="w-full bg-zinc-900 border border-zinc-800/80 rounded-lg p-3 text-xs text-zinc-200 outline-none focus:border-rose-500/50"
                />
              </div>
              <div>
                <label htmlFor="challenger-roadmap" className="block text-[10px] font-mono text-zinc-500 uppercase mb-1 flex items-center gap-1">
                  <Compass className="h-3 w-3" />
                  Product Roadmap (V2 Scaling Roadmap)
                </label>
                <textarea
                  id="challenger-roadmap"
                  rows={2}
                  value={roadmapText}
                  onChange={(e) => setRoadmapText(e.target.value)}
                  placeholder="Explain future multi-tenant database partitions, webhook resilience workflows, or telemetry paths..."
                  className="w-full bg-zinc-900 border border-zinc-800/80 rounded-lg p-3 text-xs text-zinc-200 outline-none focus:border-rose-500/50"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              id="btn-run-diagnostics"
              type="button"
              disabled={runningDiagnostics}
              onClick={simulateDiagnostics}
              className="cursor-pointer flex-1 bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 font-mono text-zinc-450 hover:text-zinc-200 py-3 rounded-lg text-xs transition-all flex items-center justify-center gap-2"
            >
              <Cpu className="h-4.5 w-4.5" />
              Run Compilation Diagnostics
            </button>
            <button
              id="btn-submit-challenger"
              type="submit"
              disabled={!diagnosticsSuccess || runningDiagnostics}
              className={`cursor-pointer flex-1 font-display font-semibold py-3 rounded-lg text-xs transition-all flex items-center justify-center gap-2 ${
                diagnosticsSuccess 
                  ? 'bg-rose-600 hover:bg-rose-700 text-white shadow-lg shadow-rose-600/15'
                  : 'bg-zinc-850 text-zinc-500 border border-zinc-800 cursor-not-allowed'
              }`}
            >
              <Send className="h-3 w-3" />
              Register Submission
            </button>
          </div>
        </form>

        {/* Right Panel: Diagnostics shell and list of submissions */}
        <div className="space-y-6">
          {/* Diagnostics CLI/Console */}
          <div className="bg-zinc-950 rounded-xl border border-zinc-850 p-4 font-mono text-[11px] leading-relaxed relative min-h-[180px]">
            <span className="absolute top-2 right-3 font-mono text-[9px] text-zinc-650 tracking-wider">DIAGNOSTICS_PORT_3000</span>
            <div className="border-b border-zinc-900 pb-2 mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <span className="text-zinc-500 uppercase text-[9px] font-semibold tracking-wider">Antview Live Verification Logger</span>
            </div>

            <div className="space-y-2 h-[155px] overflow-y-auto font-mono text-zinc-400">
              {logs.length === 0 && (
                <div className="text-zinc-600 text-center py-10">
                  Console idle. Press <b className="text-zinc-500">[Run Compilation Diagnostics]</b> to initiate automated validation.
                </div>
              )}
              {logs.map((log, index) => {
                let color = 'text-zinc-400';
                if (log.startsWith('[SUCCESS]')) color = 'text-emerald-400';
                if (log.startsWith('[ERROR]')) color = 'text-rose-500';
                if (log.startsWith('[INIT]')) color = 'text-[#06b6d4]';
                return (
                  <div key={index} className={`${color}`}>
                    {log}
                  </div>
                );
              })}
              {runningDiagnostics && (
                <div className="animate-pulse text-rose-500 flex items-center gap-1.5 mt-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                  Executing framework check...
                </div>
              )}
            </div>
          </div>

          {/* Submissions Registry (Local board) */}
          <div className="bg-zinc-950 border border-zinc-850 p-4 rounded-xl">
            <span className="text-[10px] font-mono text-zinc-500 uppercase block mb-3 font-semibold tracking-wider flex items-center gap-1.5">
              <List className="h-3.5 w-3.5 text-rose-500" />
              Recruitment Assessment Registry
            </span>

            <div className="space-y-3 max-h-[220px] overflow-y-auto prag-scroll">
              {submissions.map((sub) => (
                <div key={sub.id} className="bg-zinc-900/60 p-3 rounded-lg border border-zinc-800/40 text-[11px] space-y-2">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <span className="font-semibold text-zinc-100 block">{sub.fullName}</span>
                      <span className="text-[9px] text-zinc-500 block -mt-0.5">{sub.email}</span>
                    </div>
                    <span className="bg-orange-500/10 text-orange-400 border border-orange-500/20 text-[9px] font-mono px-2 py-0.5 rounded uppercase">
                      {sub.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[10px] border-t border-zinc-900/60 pt-2 text-zinc-450">
                    <div>
                      <span className="block text-zinc-650">Score Rating</span>
                      <span className="font-mono text-zinc-300 font-semibold">{sub.score.toFixed(1)}/100</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-zinc-650">Verified At</span>
                      <span className="font-mono text-zinc-500">{new Date(sub.timestamp).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
