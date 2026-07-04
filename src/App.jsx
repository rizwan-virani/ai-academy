import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Activity,
  AlertTriangle,
  BadgeCheck,
  BookOpen,
  Bot,
  Brain,
  BrainCircuit,
  Monitor,
  Briefcase,
  Check,
  CheckCheck,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Circle,
  ClipboardCheck,
  ClipboardList,
  Cpu,
  DollarSign,
  Download,
  FileCheck,
  FlaskConical,
  Gauge,
  GraduationCap,
  Info,
  Landmark,
  ListChecks,
  Lock,
  Mail,
  Megaphone,
  MessageSquare,
  Play,
  Presentation,
  Radar,
  RefreshCw,
  Rocket,
  RotateCcw,
  Scale,
  Server,
  Settings,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Siren,
  Sparkles,
  Target,
  Thermometer,
  TrendingUp,
  Trophy,
  Type,
  Wifi,
  WifiOff,
  X,
  Zap,
  ExternalLink,
  Filter,
  PlayCircle,
  Package,
  BookMarked,
  Boxes,
  ArrowUp,
  PenLine,
  Terminal,
  Copy,
  Cloud,
  Lightbulb,
  Compass,
  Layers,
  FileStack,
  Wrench,
  ArrowRight,
  LayoutTemplate,
  Users,
  LayoutGrid,
  Repeat,
  Code2,
  Home,
  Github,
  Image as ImageIcon,
  Building2,
  CircuitBoard,
  Database,
  Search,
  Swords,
  Telescope,
  Workflow,
  Send,
  User,
  Loader2,
  Square,
  Trash2,
  SlidersHorizontal,
  Hash,
} from "lucide-react";
import {
  detectOllama,
  webgpuSupported,
  loadWebLLM,
  generate as engineGenerate,
  chat as engineChat,
  chatStream as engineChatStream,
  tokenCount as engineTokenCount,
  estimateTokens,
  WEBLLM_MODELS,
  DEFAULT_WEBLLM_MODEL,
  ENGINE_INFO,
} from "./engine.js";
import {
  MISSIONS,
  MISSION_IDS,
  computeMatrix,
  tunerEval,
  tunerGrade,
  clampMeter,
  consoleGrade,
  softmax,
  predictGrade,
  loadProgress,
  saveProgress,
} from "./missions.js";
import { KNOWLEDGE_BASE } from "./knowledgeBase.js";
import { OPS_CATEGORIES, OPS_TUTORIALS } from "./operationalizing.js";
import { AIES_OVERVIEW, AIES_CATEGORIES, AIES_LABS } from "./experimentation.js";
import { PE_CATEGORIES, PE_OVERVIEW, PE_TECHNIQUES } from "./prompting.js";
import { VIBE_GROUPS, VIBE_OVERVIEW, VIBE_PAGES } from "./vibecoding.js";
import { FRONTIER_CATEGORIES, FRONTIER_OVERVIEW, FRONTIER_COMPANIES } from "./frontierAI.js";
import { CERTIFICATIONS, CERT_CATEGORIES, SETUP_STEPS, OSS_TOOLS, MEDIA } from "./resources.js";
import { GLOSSARY, GLOSSARY_CATEGORIES } from "./glossary.js";

/* ============================================================================
   OpenSource AI Learning Lab: mission-based interface with a real local engine
   repo: ai-academy
   ============================================================================ */

const ICONS = {
  Sparkles,
  Thermometer,
  Type,
  Bot,
  FlaskConical,
  Brain,
  Server,
  ShieldAlert,
  Shield,
  Radar,
  RefreshCw,
  Mail,
  Siren,
  ListChecks,
  Scale,
  FileCheck,
  ClipboardCheck,
  Landmark,
  CheckCheck,
  DollarSign,
  Rocket,
  TrendingUp,
  Presentation,
  Megaphone,
  ClipboardList,
  MessageSquare,
  Gauge,
  Target,
  Activity,
  Briefcase,
  Boxes,
  Cpu,
  Filter,
};

// Module titles describe the ACTIVITIES a student does inside them, not the
// course they map to. Course mapping is kept in the comments for reference.
const MODULES = [
  { id: "m1", title: "Core Mechanics", icon: Cpu },
  { id: "m2", title: "Prompting & Reasoning", icon: Brain },
  { id: "m3", title: "Data Governance: Privacy & Risk", icon: Shield },
  { id: "m4", title: "Data Governance: Auditing", icon: BadgeCheck },
  { id: "m5", title: "Threat Detection & Response", icon: Siren }, // ITAI 1372 AI in Cybersecurity
  { id: "m6", title: "Risk, Policy & Regulation", icon: Scale }, // ITAI 1373 AI Policy, Governance & Compliance
  { id: "m7", title: "Testing, Shipping & Monitoring", icon: Rocket }, // ITAI 2370 Operationalizing AI
  { id: "m8", title: "Business Cases & Decisions", icon: Briefcase }, // ITAI 2371 AI in Business & Strategy
  { id: "m9", title: "Planning, Metrics & Reporting", icon: GraduationCap }, // ITAI 2372/2374 Capstone & Practicum
];

const STORAGE_ENGINE = "ai-academy-engine-v1";

/* ------------------------------- Engine ctx ------------------------------- */
const EngineCtx = createContext(null);
const useEngine = () => useContext(EngineCtx);

/* --------------------------------- Atoms ---------------------------------- */

/* A little 2D scatter of words to make "words are vectors" concrete: similar
   words sit close together. Used by the predict (LLM basics) lab. */
function VectorMap({ words, highlight }) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-3">
      <p className="mb-1 text-[11px] uppercase tracking-wide text-slate-500">
        Meaning map — each word is a vector; similar words sit close together
      </p>
      <svg viewBox="0 0 100 90" className="w-full" style={{ maxHeight: 200 }}>
        {(words || []).map((w) => {
          const on = w.word === highlight;
          return (
            <g key={w.word}>
              <circle cx={w.x} cy={w.y * 0.9} r={on ? 2.2 : 1.6} className={on ? "fill-emerald-400" : "fill-indigo-400"} />
              <text x={w.x + 3} y={w.y * 0.9 + 1.4} className={on ? "fill-emerald-300" : "fill-slate-400"} style={{ fontSize: 4 }}>
                {w.word}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* Simple, reusable teaching diagrams for the lessons. `flow` draws a labeled
   pipeline (boxes + arrows); `scale` draws a spectrum with end labels. */
function LessonFigure({ figure }) {
  if (!figure) return null;
  if (figure.type === "flow") {
    return (
      <figure className="my-2 rounded-lg border border-slate-800 bg-slate-950/50 p-3">
        <div className="flex flex-wrap items-center gap-1.5">
          {figure.steps.map((s, i) => (
            <React.Fragment key={i}>
              <span className="rounded-md border border-indigo-500/30 bg-indigo-500/10 px-2 py-1 text-xs font-medium text-indigo-100">{s}</span>
              {i < figure.steps.length - 1 ? <span className="text-slate-500">→</span> : null}
            </React.Fragment>
          ))}
        </div>
        {figure.caption ? <figcaption className="mt-1.5 text-[11px] italic text-slate-500">{figure.caption}</figcaption> : null}
      </figure>
    );
  }
  if (figure.type === "scale") {
    return (
      <figure className="my-2 rounded-lg border border-slate-800 bg-slate-950/50 p-3">
        <div className="h-2 w-full rounded-full bg-gradient-to-r from-emerald-500/70 via-slate-500/40 to-rose-500/70" />
        <div className="mt-1 flex justify-between text-[11px] text-slate-400">
          <span>{figure.left}</span>
          {figure.mid ? <span className="text-slate-500">{figure.mid}</span> : null}
          <span>{figure.right}</span>
        </div>
        {figure.caption ? <figcaption className="mt-1.5 text-[11px] italic text-slate-500">{figure.caption}</figcaption> : null}
      </figure>
    );
  }
  return null;
}

/* The study material for a lab: a real mini-lesson (concepts + worked examples +
   diagrams + key terms) students read before they start doing. Collapsible so
   returning students can skip it. */
function LessonPanel({ lesson, title }) {
  const [open, setOpen] = useState(true);
  if (!lesson) return null;
  return (
    <div className="overflow-hidden rounded-xl border border-indigo-500/25 bg-indigo-500/[0.04]">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-4 py-3 hover:bg-indigo-500/[0.06]"
      >
        <span className="flex items-center gap-2 text-sm font-bold text-indigo-200">
          <BookOpen size={16} /> Lesson: {title}
        </span>
        <span className="flex items-center gap-2 text-[11px] text-slate-500">
          {open ? "hide" : "read first"}
          {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </span>
      </button>
      {open ? (
        <div className="space-y-4 border-t border-indigo-500/15 px-4 py-4 text-base leading-relaxed text-slate-300">
          {lesson.intro ? <p className="text-slate-200">{lesson.intro}</p> : null}
          {(lesson.sections || []).map((s, i) => (
            <div key={i}>
              <h4 className="mb-1 font-semibold text-slate-100">{s.heading}</h4>
              <p className="whitespace-pre-line text-slate-300">{s.body}</p>
              {s.figure ? <LessonFigure figure={s.figure} /> : null}
              {s.example ? (
                <div className="mt-2 rounded-lg border border-amber-500/25 bg-amber-500/[0.05] p-2.5 text-sm leading-relaxed">
                  <span className="font-semibold uppercase tracking-wide text-amber-300">Example </span>
                  <span className="whitespace-pre-line text-slate-300">{s.example}</span>
                </div>
              ) : null}
            </div>
          ))}
          {lesson.keyTerms && lesson.keyTerms.length ? (
            <div className="rounded-lg border border-slate-800 bg-slate-950/50 p-3">
              <h4 className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-400">
                <BadgeCheck size={13} /> Key terms
              </h4>
              <dl className="space-y-1.5">
                {lesson.keyTerms.map((t, i) => (
                  <div key={i} className="text-base">
                    <dt className="inline font-semibold text-indigo-300">{t.term}</dt>
                    <dd className="inline text-slate-400"> — {t.def}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ) : null}
          <p className="border-t border-indigo-500/10 pt-3 text-sm text-slate-500">
            When you're ready, scroll down to the lab and follow the steps.
          </p>
        </div>
      ) : null}
    </div>
  );
}

function Btn({ children, onClick, variant = "primary", icon: Icon, disabled, size = "md" }) {
  const styles = {
    primary: "bg-indigo-500 hover:bg-indigo-400 text-white",
    ghost: "bg-slate-800 hover:bg-slate-700 text-slate-200 ring-1 ring-slate-700",
    danger: "bg-rose-500 hover:bg-rose-400 text-white",
    success: "bg-emerald-500 hover:bg-emerald-400 text-white",
  };
  const sizes = { md: "px-4 py-2 text-sm", sm: "px-2.5 py-1.5 text-xs" };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition disabled:cursor-not-allowed disabled:opacity-50 ${styles[variant]} ${sizes[size]}`}
    >
      {Icon ? <Icon size={size === "sm" ? 14 : 16} /> : null}
      {children}
    </button>
  );
}

function Tag({ children, tone = "slate", icon: Icon }) {
  const tones = {
    slate: "bg-slate-800 text-slate-300 ring-slate-700",
    green: "bg-emerald-500/10 text-emerald-300 ring-emerald-500/30",
    red: "bg-rose-500/10 text-rose-300 ring-rose-500/30",
    amber: "bg-amber-500/10 text-amber-300 ring-amber-500/30",
    indigo: "bg-indigo-500/10 text-indigo-300 ring-indigo-500/30",
    blue: "bg-blue-500/10 text-blue-300 ring-blue-500/30",
  };
  return (
    <span className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-medium ring-1 ${tones[tone]}`}>
      {Icon ? <Icon size={12} /> : null}
      {children}
    </span>
  );
}

function Bar({ value, max = 100, tone = "indigo" }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  const map = { indigo: "bg-indigo-500", emerald: "bg-emerald-500", amber: "bg-amber-500", rose: "bg-rose-500" };
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
      <div className={`h-full rounded-full ${map[tone]}`} style={{ width: `${pct}%`, transition: "width .4s" }} />
    </div>
  );
}

function Slider({ label, value, min, max, step, onChange, suffix }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <label className="text-xs font-medium text-slate-300">{label}</label>
        <span className="rounded bg-slate-800 px-2 py-0.5 font-mono text-xs text-indigo-300">
          {value}
          {suffix || ""}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full accent-indigo-500"
        style={{ background: `linear-gradient(to right,#6366f1 ${pct}%,#334155 ${pct}%)` }}
      />
    </div>
  );
}

/* ------------------------- Engine status + provider ----------------------- */

function EngineProvider({ children }) {
  const [engine, setEngine] = useState({
    backend: "simulation",
    model: "simulation",
    ready: true,
    webllmEngine: null,
  });
  const [lastRun, setLastRun] = useState({ tps: 0, promptTokens: 0, evalTokens: 0 });
  const [showOnboarding, setShowOnboarding] = useState(false);

  // restore saved choice or trigger onboarding on first visit
  useEffect(() => {
    let saved = null;
    try {
      saved = JSON.parse(localStorage.getItem(STORAGE_ENGINE));
    } catch {
      saved = null;
    }
    if (!saved) {
      setShowOnboarding(true);
      return;
    }
    if (saved.backend === "ollama") {
      // re-verify Ollama is reachable; fall back to simulation if not
      detectOllama().then((r) => {
        if (r.ok && r.models.length) {
          setEngine({
            backend: "ollama",
            model: saved.model && r.models.includes(saved.model) ? saved.model : r.models[0],
            ready: true,
            webllmEngine: null,
          });
        } else {
          setEngine({ backend: "simulation", model: "simulation", ready: true, webllmEngine: null });
        }
      });
    } else if (saved.backend === "simulation") {
      setEngine({ backend: "simulation", model: "simulation", ready: true, webllmEngine: null });
    }
    // webllm cannot silently resume (weights aren't cached in JS state) → user re-loads in settings
    else if (saved.backend === "webllm") {
      setEngine({ backend: "simulation", model: "simulation", ready: true, webllmEngine: null });
    }
  }, []);

  const persist = (backend, model) => {
    try {
      localStorage.setItem(STORAGE_ENGINE, JSON.stringify({ backend, model }));
    } catch {
      /* ignore */
    }
  };

  const run = async (opts) => {
    const res = opts.messages
      ? await engineChat(engine, opts)
      : await engineGenerate(engine, opts);
    setLastRun({ tps: res.tps, promptTokens: res.promptTokens, evalTokens: res.evalTokens });
    return res;
  };

  const countTokens = async (text) => {
    const real = await engineTokenCount(engine, text);
    return real != null ? { count: real, exact: true } : { count: estimateTokens(text), exact: false };
  };

  const value = {
    engine,
    setEngine,
    persist,
    run,
    countTokens,
    lastRun,
    showOnboarding,
    setShowOnboarding,
  };
  return <EngineCtx.Provider value={value}>{children}</EngineCtx.Provider>;
}

function EngineStatusChip({ onClick }) {
  const { engine } = useEngine();
  const info = ENGINE_INFO[engine.backend];
  const tone =
    engine.backend === "ollama" ? "green" : engine.backend === "webllm" ? "indigo" : "amber";
  const Icon = engine.backend === "simulation" ? WifiOff : Wifi;
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-medium text-slate-200 transition hover:border-indigo-500"
      title="Change engine"
    >
      <Icon size={14} className={engine.backend === "simulation" ? "text-amber-400" : "text-emerald-400"} />
      <span className="font-mono">{engine.model}</span>
      <Tag tone={tone}>{info.label.split(" ")[0]}</Tag>
      <Settings size={13} className="text-slate-500" />
    </button>
  );
}

/* ------------------------------ Onboarding -------------------------------- */

function EngineCard({ id, active, onPick }) {
  const info = ENGINE_INFO[id];
  return (
    <button
      onClick={() => onPick(id)}
      className={`flex flex-col rounded-xl border p-4 text-left transition ${
        active ? "border-indigo-500 bg-indigo-500/10" : "border-slate-800 bg-slate-950/60 hover:border-slate-600"
      }`}
    >
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-lg font-bold text-slate-100">{info.label}</span>
        {id === "ollama" ? <Server size={20} className="text-emerald-400" /> : id === "webllm" ? <Cpu size={20} className="text-indigo-400" /> : <FlaskConical size={20} className="text-amber-400" />}
      </div>
      <p className="mb-4 text-sm text-slate-400">{info.tagline}</p>
      <div className="mb-3">
        <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-emerald-400">Benefits</p>
        <ul className="space-y-1.5">
          {info.benefits.map((b, i) => (
            <li key={i} className="flex gap-2 text-sm leading-snug text-slate-300">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-500" />
              {b}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-amber-400">Limitations</p>
        <ul className="space-y-1.5">
          {info.limits.map((l, i) => (
            <li key={i} className="flex gap-2 text-sm leading-snug text-slate-400">
              <AlertTriangle size={16} className="mt-0.5 shrink-0 text-amber-500" />
              {l}
            </li>
          ))}
        </ul>
      </div>
    </button>
  );
}

function OllamaSetup() {
  return (
    <div className="rounded-lg border border-slate-800 bg-black/40 p-3 font-mono text-sm leading-relaxed text-slate-300">
      <p className="text-slate-500"># 1. install from ollama.com, then pull a model</p>
      <p className="text-emerald-300">ollama pull llama3.2</p>
      <p className="mt-2 text-slate-500"># 2. allow this site to connect, then serve</p>
      <p className="text-emerald-300">
        OLLAMA_ORIGINS={typeof window !== "undefined" ? window.location.origin : "*"} ollama serve
      </p>
      <p className="mt-2 text-slate-500"># 3. click "Detect Ollama" below</p>
    </div>
  );
}

function EngineChooser({ onClose, firstRun }) {
  const { engine, setEngine, persist } = useEngine();
  const [pick, setPick] = useState(engine.backend);
  const [ollama, setOllama] = useState({ checking: false, ok: false, models: [] });
  const [ollamaModel, setOllamaModel] = useState(engine.backend === "ollama" ? engine.model : "");
  const [webllmModel, setWebllmModel] = useState(DEFAULT_WEBLLM_MODEL);
  const [loading, setLoading] = useState(null); // progress {text,pct}
  const cancelledRef = useRef(false);
  // Closing the modal cancels an in-flight WebLLM download so it can't silently
  // switch + persist the engine after the user already dismissed it.
  const close = () => { cancelledRef.current = true; onClose(); };

  const doDetect = async () => {
    setOllama({ checking: true, ok: false, models: [] });
    const r = await detectOllama();
    setOllama({ checking: false, ok: r.ok, models: r.models });
    if (r.ok && r.models.length && !ollamaModel) setOllamaModel(r.models[0]);
  };

  const apply = async () => {
    cancelledRef.current = false;
    if (pick === "simulation") {
      setEngine({ backend: "simulation", model: "simulation", ready: true, webllmEngine: null });
      persist("simulation", "simulation");
      onClose();
    } else if (pick === "ollama") {
      if (!ollama.ok || !ollamaModel) return;
      setEngine({ backend: "ollama", model: ollamaModel, ready: true, webllmEngine: null });
      persist("ollama", ollamaModel);
      onClose();
    } else if (pick === "webllm") {
      setLoading({ text: "Initializing WebGPU…", pct: 0 });
      try {
        const eng = await loadWebLLM(webllmModel, (p) =>
          setLoading({ text: p.text || "Downloading model…", pct: Math.round((p.progress || 0) * 100) })
        );
        if (cancelledRef.current) { setLoading(null); return; } // dismissed mid-download → don't switch/persist
        setEngine({ backend: "webllm", model: webllmModel, ready: true, webllmEngine: eng });
        persist("webllm", webllmModel);
        setLoading(null);
        onClose();
      } catch (e) {
        setLoading({ text: "Failed: " + (e?.message || "WebGPU unavailable"), pct: 0, error: true });
      }
    }
  };

  const gpu = webgpuSupported();

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/70 p-4">
      <div className="w-full max-w-7xl rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-indigo-500/15 p-2.5 text-indigo-300 ring-1 ring-indigo-500/30">
              <Sparkles size={22} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-100">
                {firstRun ? "Welcome, choose your AI engine" : "Engine settings"}
              </h2>
              <p className="text-sm text-slate-400">
                Pick how the labs run models. You can change this any time from the header.
              </p>
            </div>
          </div>
          {!firstRun ? (
            <button onClick={close} className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800">
              <X size={18} />
            </button>
          ) : null}
        </div>

        <div className="p-5">
          <div className="grid gap-4 md:grid-cols-3">
            <EngineCard id="ollama" active={pick === "ollama"} onPick={setPick} />
            <EngineCard id="webllm" active={pick === "webllm"} onPick={setPick} />
            <EngineCard id="simulation" active={pick === "simulation"} onPick={setPick} />
          </div>

          {/* per-engine configuration */}
          <div className="mt-5">
            {pick === "ollama" ? (
              <div className="space-y-3">
                <OllamaSetup />
                <div className="flex flex-wrap items-center gap-3">
                  <Btn onClick={doDetect} icon={Server} variant="ghost">
                    {ollama.checking ? "Detecting…" : "Detect Ollama"}
                  </Btn>
                  {ollama.ok ? (
                    <Tag tone="green" icon={ShieldCheck}>
                      Connected · {ollama.models.length} model(s)
                    </Tag>
                  ) : ollama.checking ? null : (
                    <Tag tone="amber">Not detected yet</Tag>
                  )}
                  {ollama.ok && ollama.models.length ? (
                    <select
                      value={ollamaModel}
                      onChange={(e) => setOllamaModel(e.target.value)}
                      className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-200"
                    >
                      {ollama.models.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                  ) : null}
                </div>
              </div>
            ) : null}

            {pick === "webllm" ? (
              <div className="space-y-3">
                {!gpu ? (
                  <div className="rounded-lg border border-rose-500/40 bg-rose-500/5 p-3 text-sm text-rose-300">
                    WebGPU isn't available in this browser. Use Chrome or Edge (desktop), or pick another engine.
                  </div>
                ) : (
                  <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-sm text-slate-400">
                    A real model will download once (~1–2 GB) from a public CDN, then run fully offline on your GPU.
                  </div>
                )}
                <div className="flex flex-wrap items-center gap-3">
                  <select
                    value={webllmModel}
                    onChange={(e) => setWebllmModel(e.target.value)}
                    className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-200"
                  >
                    {WEBLLM_MODELS.map((m) => (
                      <option key={m.id} value={m.id}>
                        {m.label} · {m.size}
                      </option>
                    ))}
                  </select>
                </div>
                {loading ? (
                  <div className={`rounded-lg border p-3 ${loading.error ? "border-rose-500/40 bg-rose-500/5" : "border-indigo-500/40 bg-indigo-500/5"}`}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className={loading.error ? "text-rose-300" : "text-indigo-300"}>{loading.text}</span>
                      {!loading.error ? <span className="font-mono text-slate-400">{loading.pct}%</span> : null}
                    </div>
                    {!loading.error ? <Bar value={loading.pct} /> : null}
                  </div>
                ) : null}
              </div>
            ) : null}

            {pick === "simulation" ? (
              <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-sm text-slate-400">
                No setup needed. The simulation is rule-based and reacts to your parameters, but it is not a real
                model. Switch to Ollama or WebLLM any time for genuine inference.
              </div>
            ) : null}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-slate-500">
              Your choice is saved locally in this browser only.
            </p>
            <div className="flex gap-2">
              {!firstRun ? (
                <Btn onClick={close} variant="ghost">
                  Cancel
                </Btn>
              ) : null}
              <Btn
                onClick={apply}
                icon={pick === "webllm" ? Download : Play}
                disabled={(pick === "ollama" && (!ollama.ok || !ollamaModel)) || (pick === "webllm" && !gpu) || !!(loading && !loading.error)}
              >
                {pick === "webllm" ? "Download & Use" : "Use this engine"}
              </Btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ Live metrics ------------------------------ */

function LiveMetrics({ contextMax = 8192 }) {
  const { engine, lastRun } = useEngine();
  const info = ENGINE_INFO[engine.backend];
  const used = (lastRun.promptTokens || 0) + (lastRun.evalTokens || 0);
  const ctxPct = Math.min(100, (used / contextMax) * 100);
  const license =
    engine.backend === "ollama"
      ? "Depends on model"
      : engine.backend === "webllm"
      ? "MLC / model license"
      : "N/A (mock)";
  return (
    <div className="rounded-xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-4">
      <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
        <Activity size={14} className="text-emerald-400" /> Live State Metrics
      </div>
      <div className="space-y-4 text-sm">
        <div>
          <p className="text-[11px] uppercase tracking-wide text-slate-500">Active Model</p>
          <div className="mt-1 flex items-center gap-2 font-mono text-slate-100">
            <Cpu size={14} className="text-indigo-400" /> {engine.model}
          </div>
        </div>
        <div>
          <div className="mb-1 flex items-center justify-between">
            <p className="text-[11px] uppercase tracking-wide text-slate-500">Tokens / sec</p>
            <span className="font-mono text-emerald-300">{lastRun.tps || 0} t/s</span>
          </div>
          <Bar value={Math.min(100, (lastRun.tps || 0) / 0.8)} tone="emerald" />
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-wide text-slate-500">Backend</p>
          <div className="mt-1">
            <Tag tone={engine.backend === "simulation" ? "amber" : "indigo"} icon={BadgeCheck}>
              {info.label}
            </Tag>
          </div>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-wide text-slate-500">Privacy Shield</p>
          <div className="mt-1 flex items-center gap-2 rounded-lg bg-emerald-500/10 px-2.5 py-1.5 ring-1 ring-emerald-500/30">
            <ShieldCheck size={16} className="text-emerald-400" />
            <span className="text-xs text-emerald-300">
              {info.privacy === "download-then-local" ? "Local after 1-time download" : "Local execution verified"}
            </span>
          </div>
        </div>
        <div>
          <div className="mb-1 flex items-center justify-between">
            <p className="text-[11px] uppercase tracking-wide text-slate-500">Last Run Tokens</p>
            <span className="font-mono text-xs text-slate-300">{used} / {contextMax}</span>
          </div>
          <Bar value={ctxPct} tone={ctxPct > 85 ? "rose" : "indigo"} />
        </div>
        <div className="border-t border-slate-800 pt-2 text-[11px] text-slate-500">License: {license}</div>
      </div>
    </div>
  );
}

/* ------------------------------ Mission runner ---------------------------- */

function ResultBanner({ result }) {
  if (!result) return null;
  const good = result.pass;
  return (
    <div
      className={`rounded-lg border p-4 ${
        good ? "border-emerald-500/40 bg-emerald-500/5" : "border-amber-500/40 bg-amber-500/5"
      }`}
    >
      <div className="mb-1 flex items-center justify-between">
        <span className={`flex items-center gap-2 text-sm font-bold ${good ? "text-emerald-300" : "text-amber-300"}`}>
          {good ? <Trophy size={16} /> : <Target size={16} />}
          {good ? "Objective complete" : "Not yet"}
        </span>
        <span className="font-mono text-lg font-bold text-slate-100">{result.score}<span className="text-xs text-slate-500">/100</span></span>
      </div>
      <Bar value={result.score} tone={good ? "emerald" : "amber"} />
      <p className="mt-2 text-base text-slate-300">{result.feedback}</p>
    </div>
  );
}

function OutputBlock({ outputs, running }) {
  if (running) {
    return (
      <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
        <div className="flex items-center gap-2 text-sm text-indigo-300">
          <RefreshCw size={15} className="animate-spin" /> Generating on the local engine…
        </div>
      </div>
    );
  }
  if (!outputs || !outputs.length) return null;
  return (
    <div className="space-y-2">
      {outputs.map((o, i) => (
        <div key={i} className="rounded-lg border border-slate-800 bg-slate-950/60 p-3">
          {outputs.length > 1 ? (
            <p className="mb-1 font-mono text-[10px] uppercase text-slate-500">run {i + 1}</p>
          ) : null}
          <p className="whitespace-pre-wrap text-base leading-relaxed text-slate-200">{o}</p>
        </div>
      ))}
    </div>
  );
}

/* PII detector patterns for the redact lab */
const PII_PATTERNS = {
  PERSON: { re: /\b(Robert Chen|Dana Lee|Dana|Robert|Chen|Lee)\b/g, label: "[REDACTED_NAME]" },
  PHONE: { re: /(\(?\d{3}\)?[\s.\-]\d{3}[\s.\-]\d{4})/g, label: "[REDACTED_PHONE]" },
  CREDIT_CARD: { re: /\b(?:\d[ -]?){13,16}\b/g, label: "[REDACTED_CARD]" },
  EMAIL: { re: /\b[\w.]+@[\w.]+\.\w+\b/g, label: "[REDACTED_EMAIL]" },
  SSN: { re: /\b\d{3}-\d{2}-\d{4}\b/g, label: "[REDACTED_SSN]" },
};

function applyRedaction(text, enabled) {
  let out = text;
  for (const d of enabled) {
    const p = PII_PATTERNS[d];
    if (p) out = out.replace(p.re, p.label);
  }
  return out;
}

/* The L1/L2/L3 tier selector. Rendered inside the lab, right above the activity
   controls, so switching tiers doesn't send the student scrolling. */
function TierStepper({ tiers, activeTier, cleared, onSelect }) {
  return (
    <div className="flex gap-2">
      {tiers.map((t, i) => {
        const done = cleared.includes(t.level);
        const locked = i > cleared.length;
        const active = i === activeTier;
        return (
          <button
            key={t.level}
            disabled={locked}
            onClick={() => onSelect(i)}
            className={`flex flex-1 items-center gap-2 rounded-lg border px-3 py-2 text-left text-xs transition disabled:cursor-not-allowed disabled:opacity-40 ${
              active
                ? "border-indigo-500 bg-indigo-500/10"
                : done
                ? "border-emerald-500/40 bg-emerald-500/5"
                : "border-slate-800 bg-slate-950/60"
            }`}
          >
            {done ? (
              <CheckCircle2 size={15} className="text-emerald-400" />
            ) : locked ? (
              <Lock size={14} className="text-slate-600" />
            ) : (
              <Circle size={14} className="text-slate-500" />
            )}
            <span className={done ? "text-emerald-200" : "text-slate-300"}>
              L{t.level} · {t.title}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function MissionRunner({ mission, tierIdx, onPass, cleared = [], onSelectTier }) {
  const { engine, run, countTokens, setShowOnboarding } = useEngine();
  const tier = mission.tiers[tierIdx];

  // matrix labs define factors/options once at the mission level; the tier may
  // override them. Merge so the UI and the grader see one consistent config.
  const matrixFactors = tier.factors || mission.factors || [];
  const matrixOptions = tier.options || mission.options || [];
  const matrixTier = { ...tier, factors: matrixFactors, options: matrixOptions };

  // per-tier working state, reset when tier changes
  const [params, setParams] = useState({ temperature: 0.7, top_p: 0.95, top_k: 40 });
  const [userText, setUserText] = useState("");
  const [systemText, setSystemText] = useState("");
  const [state, setState] = useState({});
  const [outputs, setOutputs] = useState([]);
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false); // "show me the answer" give-up reveal

  // the initial working state for the active tier (used on load and on reset)
  const freshState = () => ({
    enabled: [],
    regex: "",
    text: tier.seedText || "",
    guess: 0,
    actual: null,
    redacted: "",
    assign: {}, // classify: itemId -> categoryId
    selected: [], // select: chosen option ids
    order: (tier.steps || []).map((s) => s.id), // order: current sequence of ids
    weights: Object.fromEntries(matrixFactors.map((f) => [f.id, tier.defaultWeight ?? 5])), // matrix
    sigs: [], // tuner: enabled signals
    thr: tier.threshold?.default ?? 1, // tuner: sensitivity threshold
    turnIdx: 0, // console: scenario state
    meter: tier.meter?.start ?? 0,
    clog: [],
    cdone: false,
    vals: Object.fromEntries((tier.inputs || []).map((i) => [i.id, i.default])), // model
    temp: 1.0, // predict: temperature
    pickedWord: null, // predict: chosen word (pick mode)
    logits: Object.fromEntries((tier.vocab || []).map((v) => [v.word, v.logit])), // predict: weights
  });

  const resetControls = () => {
    setParams({ temperature: 0.7, top_p: 0.95, top_k: 40 });
    setUserText(tier.seedUser || "");
    setSystemText(tier.seedSystem || "");
    setState(freshState());
    setOutputs([]);
    setResult(null);
    setShowHint(false);
    setShowAnswer(false);
  };

  useEffect(() => {
    resetControls();
  }, [mission.id, tierIdx]); // eslint-disable-line

  // when an attempt fails, surface the hint automatically so students can continue
  useEffect(() => {
    if (result && result.pass === false) setShowHint(true);
  }, [result]);

  const controls = tier.controls || [];
  const engineReady = engine.ready;
  const notReal = engine.backend === "simulation";

  const options = () => ({
    temperature: params.temperature,
    top_p: params.top_p,
    top_k: params.top_k,
    num_predict: 400,
  });

  const grade = (ctx) => {
    const r = tier.check({
      engineBackend: engine.backend,
      params,
      tier: mission.kind === "matrix" ? matrixTier : tier,
      ...ctx,
    });
    setResult(r);
    if (r.pass) onPass(mission.id, tier.level, r.score);
    return r;
  };

  /* ---- engine-independent decision labs (work in every backend) ---- */
  const submitDecision = () => {
    setResult(null);
    setOutputs([]);
    grade({ state, output: "", outputs: [] });
  };

  const moveStep = (idx, dir) => {
    setState((s) => {
      const next = [...(s.order || [])];
      const j = idx + dir;
      if (j < 0 || j >= next.length) return s;
      [next[idx], next[j]] = [next[j], next[idx]];
      return { ...s, order: next };
    });
    setResult(null);
  };

  /* ---- interactive engines: tuner / console / model ---- */

  const toggleSignal = (id) => {
    setState((s) => ({
      ...s,
      sigs: (s.sigs || []).includes(id) ? s.sigs.filter((x) => x !== id) : [...(s.sigs || []), id],
    }));
    setResult(null);
  };
  const setThreshold = (v) => {
    setState((s) => ({ ...s, thr: v }));
    setResult(null);
  };
  const submitTuner = () => {
    const r = tunerGrade(tier, state.sigs || [], state.thr);
    setResult(r);
    if (r.pass) onPass(mission.id, tier.level, r.score);
  };

  const consoleChoose = (opt) => {
    if (state.cdone) return;
    const turns = tier.turns || [];
    const cur = turns[state.turnIdx];
    const meter = clampMeter(tier, (state.meter ?? 0) + (opt.delta || 0));
    const clog = [...(state.clog || []), { situation: cur.situation, choice: opt.text, note: opt.note, delta: opt.delta || 0, meter }];
    const isLast = state.turnIdx >= turns.length - 1;
    if (isLast) {
      setState((s) => ({ ...s, meter, clog, cdone: true }));
      const r = consoleGrade(tier, meter);
      setResult(r);
      if (r.pass) onPass(mission.id, tier.level, r.score);
    } else {
      setState((s) => ({ ...s, meter, clog, turnIdx: s.turnIdx + 1 }));
      setResult(null);
    }
  };
  const consoleRestart = () => {
    setState((s) => ({ ...s, turnIdx: 0, meter: tier.meter?.start ?? 0, clog: [], cdone: false }));
    setResult(null);
  };

  const setModelVal = (id, v) => {
    setState((s) => ({ ...s, vals: { ...(s.vals || {}), [id]: v } }));
    setResult(null);
  };
  const submitModel = () => {
    const out = tier.compute(state.vals || {});
    const r = { pass: !!out.pass, score: out.pass ? (out.score ?? 100) : (out.score ?? 40), feedback: out.feedback };
    setResult(r);
    if (r.pass) onPass(mission.id, tier.level, r.score);
  };

  /* ---- predict: the next-word / temperature / weights playground ---- */
  const pickWord = (w) => { setState((s) => ({ ...s, pickedWord: w })); setResult(null); };
  const setPredTemp = (v) => { setState((s) => ({ ...s, temp: v })); setResult(null); };
  const setPredLogit = (w, v) => { setState((s) => ({ ...s, logits: { ...(s.logits || {}), [w]: v } })); setResult(null); };
  const submitPredict = () => {
    const r = predictGrade(tier, state);
    setResult(r);
    if (r.pass) onPass(mission.id, tier.level, r.score);
  };

  /* ---- action dispatch by mission kind / control set ---- */

  const runChat = async (variant) => {
    setRunning(true);
    setResult(null);
    try {
      const sys = tier.lockedSystem || (controls.includes("systemInput") ? systemText : undefined);
      const outs = [];
      if (variant === "gauntlet" || variant === "batch") {
        const list = variant === "gauntlet" ? tier.gauntlet : tier.probes;
        for (let i = 0; i < list.length; i++) {
          const res = await run({
            messages: [
              ...(sys ? [{ role: "system", content: sys }] : []),
              { role: "user", content: list[i] },
            ],
            options: { ...options(), seed: i + 1 },
          });
          outs.push(res.text);
        }
      } else if (variant === "n") {
        for (let i = 0; i < (tier.runN || 3); i++) {
          const res = await run({
            messages: [
              ...(sys ? [{ role: "system", content: sys }] : []),
              { role: "user", content: tier.fixedUser || userText },
            ],
            options: { ...options(), seed: i * 7 + 3 },
          });
          outs.push(res.text);
        }
      } else {
        const res = await run({
          messages: [
            ...(sys ? [{ role: "system", content: sys }] : []),
            { role: "user", content: tier.fixedUser || userText },
          ],
          options: options(),
        });
        outs.push(res.text);
      }
      setOutputs(outs);
      grade({ outputs: outs, output: outs[0], input: controls.includes("systemInput") ? systemText : userText, runs: outs.length, state });
    } catch (e) {
      setOutputs([`⚠ Engine error: ${e?.message || e}. If using Ollama, check it's running with OLLAMA_ORIGINS set.`]);
    } finally {
      setRunning(false);
    }
  };

  const runSampling = async () => {
    setRunning(true);
    setResult(null);
    try {
      const need = tier.requiresRuns || 1;
      const outs = [];
      for (let i = 0; i < need; i++) {
        const res = await run({ prompt: mission.basePrompt, options: { ...options(), seed: i * 13 + 1 } });
        outs.push(res.text);
      }
      setOutputs(outs);
      grade({ outputs: outs, output: outs[0], runs: need, state });
    } finally {
      setRunning(false);
    }
  };

  const runTokenize = async () => {
    setRunning(true);
    setResult(null);
    const { count, exact } = await countTokens(state.text || "");
    const next = { ...state, actual: count, exact };
    setState(next);
    setOutputs([`Token count: ${count} ${exact ? "(exact, from tokenizer)" : "(estimated)"} · characters: ${(state.text || "").length}`]);
    grade({ state: next, output: "", outputs: [] });
    setRunning(false);
  };

  const runRedact = () => {
    setResult(null);
    const red = applyRedaction(tier.sample || "", state.enabled || []);
    const next = { ...state, redacted: red };
    setState(next);
    setOutputs([red]);
    grade({ state: next, output: red, outputs: [] });
  };

  const runRegex = () => {
    setResult(null);
    grade({ state, output: "", outputs: [] });
  };

  const CLIENT_KINDS = ["classify", "select", "order", "matrix", "tuner", "console", "model", "predict"];
  const isClientLab = CLIENT_KINDS.includes(mission.kind);
  const canRun =
    engineReady || mission.kind === "tokenize" || mission.kind === "redact" || isClientLab;

  return (
    <div className="space-y-4">
      {/* study material for the whole lab */}
      <LessonPanel lesson={mission.lesson} title={mission.title} />

      {/* tier selector, kept next to the activity so switching tiers needs no scrolling */}
      {onSelectTier ? (
        <TierStepper tiers={mission.tiers} activeTier={tierIdx} cleared={cleared} onSelect={onSelectTier} />
      ) : null}

      {/* objective header + step-by-step instructions for this tier */}
      <div className="rounded-xl border border-indigo-500/30 bg-indigo-500/5 p-4">
        <div className="mb-1 flex items-center gap-2">
          <Target size={15} className="text-indigo-300" />
          <span className="text-sm font-bold text-indigo-200">
            Tier {tier.level}: {tier.title}
          </span>
        </div>
        <p className="text-sm text-slate-200">{tier.objective}</p>
        {tier.howto && tier.howto.length ? (
          <div className="mt-3 rounded-lg border border-slate-700/60 bg-slate-950/40 p-3">
            <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-400">How to do it</p>
            <ol className="list-decimal space-y-1 pl-4 text-sm text-slate-300 marker:text-slate-500">
              {tier.howto.map((s, i) => (
                <li key={i} className="pl-1">{s}</li>
              ))}
            </ol>
          </div>
        ) : null}
      </div>

      {/* locked system prompt display */}
      {tier.lockedSystem ? (
        <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-3">
          <p className="mb-1 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-amber-400">
            <Lock size={12} /> Hidden system prompt (you can't edit this)
          </p>
          <p className="font-mono text-xs text-amber-200">{tier.lockedSystem}</p>
        </div>
      ) : null}

      {/* controls */}
      <div className="space-y-3">
        {controls.includes("systemInput") ? (
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-300">Your system prompt</label>
            <textarea
              value={systemText}
              onChange={(e) => setSystemText(e.target.value)}
              rows={3}
              className="w-full resize-y rounded-lg border border-slate-800 bg-slate-950/60 p-3 font-mono text-sm text-slate-200 outline-none focus:border-indigo-500"
            />
          </div>
        ) : null}

        {controls.includes("userInput") ? (
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-300">Your message to the model</label>
            <textarea
              value={userText}
              onChange={(e) => setUserText(e.target.value)}
              rows={3}
              className="w-full resize-y rounded-lg border border-slate-800 bg-slate-950/60 p-3 font-mono text-sm text-slate-200 outline-none focus:border-indigo-500"
            />
          </div>
        ) : null}

        {controls.includes("sendFixed") ? (
          <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-xs text-slate-400">
            Fixed user message: <span className="font-mono text-slate-200">{tier.fixedUser}</span>
          </div>
        ) : null}

        {(controls.includes("temperature")) ? (
          <Slider label="Temperature" value={params.temperature} min={0} max={1.5} step={0.1} onChange={(v) => setParams((p) => ({ ...p, temperature: v }))} />
        ) : null}
        {controls.includes("top_p") ? (
          <Slider label="Top-P" value={params.top_p} min={0} max={1} step={0.05} onChange={(v) => setParams((p) => ({ ...p, top_p: v }))} />
        ) : null}

        {controls.includes("textInput") ? (
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-300">Text to tokenize</label>
            <textarea
              value={state.text}
              onChange={(e) => setState((s) => ({ ...s, text: e.target.value }))}
              rows={2}
              className="w-full resize-y rounded-lg border border-slate-800 bg-slate-950/60 p-3 font-mono text-sm text-slate-200 outline-none focus:border-indigo-500"
            />
          </div>
        ) : null}
        {controls.includes("guess") ? (
          <div className="flex items-center gap-2">
            <label className="text-xs text-slate-300">Your token estimate:</label>
            <input
              type="number"
              value={state.guess}
              onChange={(e) => setState((s) => ({ ...s, guess: parseInt(e.target.value) || 0 }))}
              className="w-24 rounded-lg border border-slate-800 bg-slate-950/60 px-2 py-1 text-sm text-slate-200"
            />
          </div>
        ) : null}

        {controls.includes("detectors") ? (
          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-300">Enable PII detectors</label>
            <div className="flex flex-wrap gap-2">
              {(tier.detectorSet || []).map((d) => {
                const on = (state.enabled || []).includes(d);
                return (
                  <button
                    key={d}
                    onClick={() =>
                      setState((s) => ({
                        ...s,
                        enabled: on ? s.enabled.filter((x) => x !== d) : [...(s.enabled || []), d],
                      }))
                    }
                    className={`rounded-md px-2.5 py-1 text-xs font-medium ring-1 transition ${
                      on ? "bg-blue-500/20 text-blue-200 ring-blue-500/40" : "bg-slate-800 text-slate-400 ring-slate-700"
                    }`}
                  >
                    {d}
                  </button>
                );
              })}
            </div>
            <div className="mt-2 rounded-lg border border-slate-800 bg-slate-950/60 p-2 text-xs text-slate-400">
              Sample: <span className="text-slate-300">{tier.sample}</span>
            </div>
          </div>
        ) : null}

        {controls.includes("regexInput") ? (
          <div>
            <label className="mb-1 block text-xs font-medium text-slate-300">Your phone-detector regex (body only, e.g. \d&#123;3&#125;...)</label>
            <input
              value={state.regex}
              onChange={(e) => setState((s) => ({ ...s, regex: e.target.value }))}
              placeholder="\(?\d{3}\)?[\s.\-]\d{3}[\s.\-]\d{4}"
              className="w-full rounded-lg border border-slate-800 bg-slate-950/60 p-2.5 font-mono text-sm text-slate-200 outline-none focus:border-indigo-500"
            />
            <div className="mt-2 space-y-1">
              {(tier.testCases || []).map((c, i) => (
                <p key={i} className="font-mono text-[11px] text-slate-400">
                  {c.shouldMatch ? "✓ should match" : "✗ should NOT match"}: <span className="text-slate-300">{c.s}</span>
                </p>
              ))}
            </div>
          </div>
        ) : null}
        {controls.includes("preview") && state.redacted ? (
          <div className="rounded-lg border border-blue-500/40 bg-blue-500/10 p-3 text-sm text-blue-100">
            {state.redacted}
          </div>
        ) : null}

        {/* ---- classify: assign each item to one category ---- */}
        {mission.kind === "classify" ? (
          <div className="space-y-3">
            {tier.brief ? (
              <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-sm leading-relaxed text-slate-300">
                {tier.brief}
              </div>
            ) : null}
            <div className="flex flex-wrap gap-2 text-[11px]">
              {(tier.categories || []).map((c) => (
                <span key={c.id} className="rounded-md bg-slate-800 px-2 py-1 text-slate-300 ring-1 ring-slate-700">
                  <b className="text-slate-100">{c.label}</b>
                  {c.desc ? <span className="text-slate-500"> · {c.desc}</span> : null}
                </span>
              ))}
            </div>
            {(tier.items || []).map((it) => {
              const chosen = (state.assign || {})[it.id];
              return (
                <div key={it.id} className="rounded-lg border border-slate-800 bg-slate-950/60 p-3">
                  <p className="mb-2 text-sm leading-relaxed text-slate-200">{it.text}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {(tier.categories || []).map((c) => {
                      const on = chosen === c.id;
                      return (
                        <button
                          key={c.id}
                          onClick={() => {
                            setState((s) => ({ ...s, assign: { ...(s.assign || {}), [it.id]: c.id } }));
                            setResult(null);
                          }}
                          className={`rounded-md px-2.5 py-1 text-xs font-medium ring-1 transition ${
                            on
                              ? "bg-indigo-500/25 text-indigo-100 ring-indigo-500/50"
                              : "bg-slate-800 text-slate-400 ring-slate-700 hover:text-slate-200"
                          }`}
                        >
                          {c.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}

        {/* ---- select: choose the right set from a bank ---- */}
        {mission.kind === "select" ? (
          <div className="space-y-3">
            {tier.brief ? (
              <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-sm leading-relaxed text-slate-300 whitespace-pre-wrap">
                {tier.brief}
              </div>
            ) : null}
            <div className="space-y-1.5">
              {(tier.options || []).map((o) => {
                const on = (state.selected || []).includes(o.id);
                return (
                  <button
                    key={o.id}
                    onClick={() => {
                      setState((s) => ({
                        ...s,
                        selected: on ? s.selected.filter((x) => x !== o.id) : [...(s.selected || []), o.id],
                      }));
                      setResult(null);
                    }}
                    className={`flex w-full items-start gap-2.5 rounded-lg border p-2.5 text-left text-sm transition ${
                      on
                        ? "border-indigo-500 bg-indigo-500/10 text-slate-100"
                        : "border-slate-800 bg-slate-950/60 text-slate-300 hover:border-slate-600"
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded ${
                        on ? "bg-indigo-500 text-white" : "ring-1 ring-slate-600"
                      }`}
                    >
                      {on ? <Check size={12} /> : null}
                    </span>
                    <span className="leading-relaxed">{o.text}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ) : null}

        {/* ---- order: reorder a list into the correct sequence ---- */}
        {mission.kind === "order" ? (
          <div className="space-y-3">
            {tier.brief ? (
              <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-sm leading-relaxed text-slate-300">
                {tier.brief}
              </div>
            ) : null}
            <div className="space-y-1.5">
              {(state.order || []).map((id, idx) => {
                const step = (tier.steps || []).find((s) => s.id === id);
                return (
                  <div key={id} className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/60 p-2.5">
                    <span className="w-5 text-center font-mono text-xs text-slate-500">{idx + 1}</span>
                    <span className="flex-1 text-sm leading-relaxed text-slate-200">{step?.text}</span>
                    <div className="flex flex-col gap-0.5">
                      <button
                        disabled={idx === 0}
                        onClick={() => moveStep(idx, -1)}
                        className="rounded p-0.5 text-slate-400 hover:bg-slate-800 disabled:opacity-25"
                      >
                        <ChevronUp size={15} />
                      </button>
                      <button
                        disabled={idx === (state.order || []).length - 1}
                        onClick={() => moveStep(idx, 1)}
                        className="rounded p-0.5 text-slate-400 hover:bg-slate-800 disabled:opacity-25"
                      >
                        <ChevronDown size={15} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}

        {/* ---- matrix: weight the factors, watch the recommendation ---- */}
        {mission.kind === "matrix" ? (
          <div className="space-y-3">
            {tier.brief ? (
              <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-sm leading-relaxed text-slate-300">
                {tier.brief}
              </div>
            ) : null}
            <div className="space-y-3 rounded-lg border border-slate-800 bg-slate-950/60 p-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                How much does each factor matter? (0 = ignore, 10 = critical)
              </p>
              {matrixFactors.map((f) => (
                <Slider
                  key={f.id}
                  label={f.label}
                  value={(state.weights || {})[f.id] ?? 0}
                  min={0}
                  max={10}
                  step={1}
                  onChange={(v) => {
                    setState((s) => ({ ...s, weights: { ...(s.weights || {}), [f.id]: v } }));
                    setResult(null);
                  }}
                />
              ))}
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-3">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                Live recommendation
              </p>
              {(() => {
                const totals = computeMatrix(matrixTier, state.weights);
                const max = Math.max(1, ...totals.map((t) => t.total));
                return totals.map((o, i) => (
                  <div key={o.id} className="mb-1.5 flex items-center gap-2">
                    <span className={`w-40 text-sm ${i === 0 ? "font-bold text-emerald-300" : "text-slate-300"}`}>
                      {i === 0 ? "★ " : ""}
                      {o.label}
                    </span>
                    <span className="flex-1">
                      <Bar value={o.total} max={max} tone={i === 0 ? "emerald" : "indigo"} />
                    </span>
                    <span className="w-8 text-right font-mono text-xs text-slate-400">{o.total}</span>
                  </div>
                ));
              })()}
            </div>
          </div>
        ) : null}

        {/* ---- tuner: build & tune a detector against a labeled dataset ---- */}
        {mission.kind === "tuner" ? (() => {
          const m = tunerEval(tier, state.sigs || [], state.thr);
          const tgt = tier.target || { precision: 0.9, recall: 0.9 };
          const pOk = m.precision >= tgt.precision - 1e-9;
          const rOk = m.recall >= tgt.recall - 1e-9;
          return (
            <div className="space-y-3">
              {tier.brief ? (
                <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-sm leading-relaxed text-slate-300">{tier.brief}</div>
              ) : null}
              <div>
                <label className="mb-1.5 block text-xs font-medium text-slate-300">
                  Detection signals — switch on the clues your detector should look for
                </label>
                <div className="flex flex-wrap gap-2">
                  {(tier.signals || []).map((sig) => {
                    const on = (state.sigs || []).includes(sig.id);
                    return (
                      <button
                        key={sig.id}
                        onClick={() => toggleSignal(sig.id)}
                        title={sig.desc || ""}
                        className={`rounded-md px-2.5 py-1.5 text-xs font-medium ring-1 transition ${
                          on ? "bg-indigo-500/25 text-indigo-100 ring-indigo-500/50" : "bg-slate-800 text-slate-400 ring-slate-700 hover:text-slate-200"
                        }`}
                      >
                        {sig.label}
                      </button>
                    );
                  })}
                </div>
              </div>
              {tier.threshold ? (
                <Slider
                  label={`Sensitivity — flag an item once ${state.thr} of your signals fire`}
                  value={state.thr}
                  min={tier.threshold.min ?? 1}
                  max={tier.threshold.max ?? Math.max(1, (tier.signals || []).length)}
                  step={1}
                  onChange={setThreshold}
                />
              ) : null}
              {/* live scoreboard */}
              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  { key: "precision", label: "Precision", sub: "of flagged, how many were real", val: m.precision, ok: pOk, need: tgt.precision },
                  { key: "recall", label: "Recall", sub: "of real threats, how many caught", val: m.recall, ok: rOk, need: tgt.recall },
                ].map((x) => (
                  <div key={x.key} className="rounded-lg border border-slate-800 bg-slate-950/60 p-3">
                    <div className="mb-1 flex items-baseline justify-between">
                      <span className="text-xs font-semibold text-slate-300">{x.label}</span>
                      <span className={`font-mono text-lg font-bold ${x.ok ? "text-emerald-300" : "text-amber-300"}`}>{Math.round(x.val * 100)}%</span>
                    </div>
                    <Bar value={x.val * 100} tone={x.ok ? "emerald" : "amber"} />
                    <p className="mt-1 text-[11px] text-slate-500">{x.sub} · need {Math.round(x.need * 100)}%</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 rounded-lg border border-slate-800 bg-slate-950/60 p-2.5 text-xs">
                <span className="text-emerald-300">✓ caught {m.tp}</span>
                <span className="text-rose-300">✗ missed {m.fn}</span>
                <span className="text-amber-300">⚠ false alarms {m.fp}</span>
                <span className="text-slate-400">correctly cleared {m.tn}</span>
              </div>
              {/* dataset with live flags */}
              <div className="space-y-1">
                {(tier.items || []).map((it) => {
                  const flag = m.flagged[it.id];
                  const correct = flag === it.bad;
                  return (
                    <div key={it.id} className={`flex items-center gap-2 rounded-lg border p-2 text-sm ${correct ? "border-slate-800 bg-slate-950/60" : "border-rose-500/40 bg-rose-500/5"}`}>
                      <span className={`shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold ${flag ? "bg-amber-500/20 text-amber-200" : "bg-slate-800 text-slate-400"}`}>
                        {flag ? "FLAGGED" : "cleared"}
                      </span>
                      <span className="flex-1 text-slate-200">{it.text}</span>
                      <span className="shrink-0 text-xs" title={it.bad ? "actually a threat" : "actually safe"}>
                        {correct ? <span className="text-emerald-400">✓</span> : <span className="text-rose-400">✗</span>}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })() : null}

        {/* ---- console: play through a live scenario, managing a meter ---- */}
        {mission.kind === "console" ? (() => {
          const cfg = tier.meter || {};
          const turns = tier.turns || [];
          const cur = turns[state.turnIdx];
          const low = cfg.goodWhen !== "high";
          const lo = cfg.min ?? 0, hi = cfg.max ?? 100;
          const pct = ((state.meter - lo) / (hi - lo || 1)) * 100;
          const winning = low ? state.meter <= cfg.target : state.meter >= cfg.target;
          return (
            <div className="space-y-3">
              {tier.brief ? (
                <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-sm leading-relaxed text-slate-300">{tier.brief}</div>
              ) : null}
              {/* live meter */}
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
                <div className="mb-1 flex items-baseline justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">{cfg.label}</span>
                  <span className={`font-mono text-2xl font-bold ${winning ? "text-emerald-300" : "text-rose-300"}`}>{state.meter}{cfg.unit || ""}</span>
                </div>
                <Bar value={pct} tone={winning ? "emerald" : "rose"} />
                <p className="mt-1.5 text-[11px] text-slate-500">
                  Goal: keep {cfg.label.toLowerCase()} {low ? "at or below" : "at or above"} {cfg.target}{cfg.unit || ""}
                </p>
              </div>
              {/* history log */}
              {(state.clog || []).length ? (
                <div className="space-y-1">
                  {state.clog.map((e, i) => (
                    <div key={i} className="rounded-lg border border-slate-800 bg-slate-950/40 p-2.5 text-xs">
                      <p className="text-slate-400">You chose: <span className="text-slate-200">{e.choice}</span>
                        <span className={`ml-2 font-mono ${e.delta > 0 ? "text-rose-300" : e.delta < 0 ? "text-emerald-300" : "text-slate-500"}`}>
                          {e.delta > 0 ? `+${e.delta}` : e.delta}{cfg.unit || ""}
                        </span>
                      </p>
                      {e.note ? <p className="mt-0.5 text-slate-500">{e.note}</p> : null}
                    </div>
                  ))}
                </div>
              ) : null}
              {/* current turn */}
              {!state.cdone && cur ? (
                <div className="rounded-xl border border-indigo-500/30 bg-indigo-500/5 p-3">
                  <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-indigo-300">
                    Turn {state.turnIdx + 1} of {turns.length}
                  </p>
                  <p className="mb-3 text-base leading-relaxed text-slate-100">{cur.situation}</p>
                  <div className="space-y-1.5">
                    {cur.options.map((o) => (
                      <button
                        key={o.id}
                        onClick={() => consoleChoose(o)}
                        className="flex w-full items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 p-2.5 text-left text-sm text-slate-200 transition hover:border-indigo-500 hover:bg-slate-800"
                      >
                        <Play size={13} className="shrink-0 text-indigo-400" />
                        {o.text}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
              {state.cdone ? (
                <Btn onClick={consoleRestart} variant="ghost" icon={RotateCcw} size="sm">Replay scenario</Btn>
              ) : null}
            </div>
          );
        })() : null}

        {/* ---- model: operate a live what-if calculator ---- */}
        {mission.kind === "model" ? (() => {
          // Merge the tier's input defaults under the current state so compute
          // never sees an undefined input (e.g. during the stale first render
          // right after switching labs, before the state reset effect runs).
          const modelVals = { ...Object.fromEntries((tier.inputs || []).map((i) => [i.id, i.default])), ...(state.vals || {}) };
          const out = tier.compute(modelVals);
          return (
            <div className="space-y-3">
              {tier.brief ? (
                <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-sm leading-relaxed text-slate-300">{tier.brief}</div>
              ) : null}
              <div className="space-y-3 rounded-lg border border-slate-800 bg-slate-950/60 p-3">
                {(tier.inputs || []).map((inp) => (
                  <Slider
                    key={inp.id}
                    label={inp.label}
                    value={state.vals?.[inp.id] ?? inp.default}
                    min={inp.min}
                    max={inp.max}
                    step={inp.step}
                    suffix={inp.unit ? ` ${inp.unit}` : ""}
                    onChange={(v) => setModelVal(inp.id, v)}
                  />
                ))}
              </div>
              <div className="grid gap-2 sm:grid-cols-3">
                {(out.readouts || []).map((r, i) => (
                  <div key={i} className={`rounded-lg border p-3 ${r.good === true ? "border-emerald-500/40 bg-emerald-500/5" : r.good === false ? "border-rose-500/40 bg-rose-500/5" : "border-slate-800 bg-slate-950/60"}`}>
                    <p className="text-[11px] uppercase tracking-wide text-slate-500">{r.label}</p>
                    <p className={`mt-0.5 font-mono text-lg font-bold ${r.good === true ? "text-emerald-300" : r.good === false ? "text-rose-300" : "text-slate-100"}`}>{r.value}{r.unit || ""}</p>
                  </div>
                ))}
              </div>
              {out.goalText ? (
                <p className="text-xs text-slate-400">🎯 {out.goalText}</p>
              ) : null}
            </div>
          );
        })() : null}

        {/* ---- predict: next-word / temperature / weights playground ---- */}
        {mission.kind === "predict" ? (() => {
          const items = (tier.vocab || []).map((v) => ({
            word: v.word,
            logit: state.logits && state.logits[v.word] != null ? state.logits[v.word] : v.logit,
          }));
          const temp = tier.mode === "temp" ? (state.temp ?? 1) : 1;
          const probs = softmax(items, temp);
          const top = probs[0];
          const wr = tier.weightRange || { min: -3, max: 6, step: 0.5 };
          return (
            <div className="space-y-3">
              {tier.brief ? (
                <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-sm leading-relaxed text-slate-300">{tier.brief}</div>
              ) : null}
              {/* the sentence so far */}
              <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-4 text-center">
                <span className="text-lg text-slate-200">{tier.context} </span>
                <span className="rounded bg-indigo-500/20 px-2 py-1 text-lg font-bold text-indigo-200">
                  {tier.mode === "pick" ? (state.pickedWord || "▁▁▁▁") : top.word}
                </span>
              </div>
              {/* temperature control */}
              {tier.mode === "temp" ? (
                <Slider
                  label={`Temperature (low = safe & sure, high = wild)`}
                  value={state.temp ?? 1}
                  min={0.1}
                  max={2}
                  step={0.05}
                  onChange={setPredTemp}
                />
              ) : null}
              {/* probability bars */}
              <div className="space-y-1.5">
                <p className="text-[11px] uppercase tracking-wide text-slate-500">
                  {tier.mode === "pick" ? "Click the most likely next word" : "Probability of each next word"}
                </p>
                {probs.map((p) => {
                  const isTop = p.word === top.word;
                  const chosen = state.pickedWord === p.word;
                  return (
                    <div key={p.word} className="flex items-center gap-2">
                      {tier.mode === "pick" ? (
                        <button
                          onClick={() => pickWord(p.word)}
                          className={`w-24 shrink-0 rounded-md px-2 py-1 text-left text-xs font-medium ring-1 transition ${
                            chosen ? "bg-indigo-500/25 text-indigo-100 ring-indigo-500/50" : "bg-slate-800 text-slate-300 ring-slate-700 hover:text-white"
                          }`}
                        >
                          {p.word}
                        </button>
                      ) : (
                        <span className="w-24 shrink-0 text-sm text-slate-200">{p.word}</span>
                      )}
                      <span className="flex-1">
                        <Bar value={p.p * 100} tone={isTop ? "emerald" : "indigo"} />
                      </span>
                      <span className="w-12 text-right font-mono text-xs text-slate-400">{(p.p * 100).toFixed(1)}%</span>
                    </div>
                  );
                })}
              </div>
              {/* weight (logit) sliders for the retraining tier */}
              {tier.mode === "weights" ? (
                <div className="space-y-2 rounded-lg border border-slate-800 bg-slate-950/60 p-3">
                  <p className="text-[11px] uppercase tracking-wide text-slate-500">Model weights — drag to retrain</p>
                  {items.map((it) => (
                    <div key={it.word} className="flex items-center gap-2">
                      <span className="w-20 shrink-0 text-xs text-slate-300">{it.word}</span>
                      <input
                        type="range"
                        min={wr.min}
                        max={wr.max}
                        step={wr.step}
                        value={state.logits?.[it.word] ?? it.logit}
                        onChange={(e) => setPredLogit(it.word, parseFloat(e.target.value))}
                        className="h-2 flex-1 cursor-pointer appearance-none rounded-full bg-slate-800 accent-indigo-500"
                      />
                      <span className="w-10 text-right font-mono text-xs text-slate-400">{(state.logits?.[it.word] ?? it.logit).toFixed(1)}</span>
                    </div>
                  ))}
                </div>
              ) : null}
              {/* meaning map (word vectors) */}
              {tier.map ? <VectorMap words={tier.map} highlight={top.word} /> : null}
            </div>
          );
        })() : null}
      </div>

      {/* run button(s) */}
      {!canRun ? (
        <div className="flex items-center gap-2 rounded-lg border border-amber-500/40 bg-amber-500/5 p-3 text-sm text-amber-200">
          <AlertTriangle size={15} /> The selected engine isn't loaded.{" "}
          <button onClick={() => setShowOnboarding(true)} className="underline">Open engine settings</button>
        </div>
      ) : (
        <div className="flex flex-wrap items-center gap-2">
          {mission.kind === "sampling" ? (
            <Btn onClick={runSampling} icon={Zap} disabled={running}>
              Generate ×{tier.requiresRuns || 1}
            </Btn>
          ) : null}
          {mission.kind === "tokenize" ? (
            <Btn onClick={runTokenize} icon={Type} disabled={running}>
              Compute token count
            </Btn>
          ) : null}
          {mission.kind === "redact" && controls.includes("detectors") ? (
            <Btn onClick={runRedact} icon={Shield} disabled={running}>
              Apply redaction & submit
            </Btn>
          ) : null}
          {mission.kind === "redact" && controls.includes("regexInput") ? (
            <Btn onClick={runRegex} icon={Play} disabled={running}>
              Test regex
            </Btn>
          ) : null}
          {mission.kind === "classify" ? (
            <Btn onClick={submitDecision} icon={CheckCheck} disabled={running}>
              Check my sorting
            </Btn>
          ) : null}
          {mission.kind === "select" ? (
            <Btn onClick={submitDecision} icon={CheckCheck} disabled={running}>
              Submit selection
            </Btn>
          ) : null}
          {mission.kind === "order" ? (
            <Btn onClick={submitDecision} icon={CheckCheck} disabled={running}>
              Check the order
            </Btn>
          ) : null}
          {mission.kind === "matrix" ? (
            <Btn onClick={submitDecision} icon={CheckCheck} disabled={running}>
              Lock in weights
            </Btn>
          ) : null}
          {mission.kind === "tuner" ? (
            <Btn onClick={submitTuner} icon={CheckCheck} disabled={running}>
              Lock in detector
            </Btn>
          ) : null}
          {mission.kind === "model" ? (
            <Btn onClick={submitModel} icon={CheckCheck} disabled={running}>
              Lock in these numbers
            </Btn>
          ) : null}
          {mission.kind === "predict" ? (
            <Btn onClick={submitPredict} icon={CheckCheck} disabled={running}>
              Lock in
            </Btn>
          ) : null}
          {mission.kind === "chat" && controls.includes("runGauntlet") ? (
            <Btn onClick={() => runChat("gauntlet")} icon={ShieldAlert} disabled={running || notReal}>
              Run 3-attack gauntlet
            </Btn>
          ) : mission.kind === "chat" && controls.includes("batchProbe") ? (
            <Btn onClick={() => runChat("batch")} icon={Radar} disabled={running || notReal}>
              Fire all 4 probes
            </Btn>
          ) : mission.kind === "chat" && controls.includes("sendN") ? (
            <Btn onClick={() => runChat("n")} icon={RefreshCw} disabled={running || notReal}>
              Run ×{tier.runN || 3}
            </Btn>
          ) : mission.kind === "chat" ? (
            <Btn onClick={() => runChat("one")} icon={Play} disabled={running || notReal}>
              Send to model
            </Btn>
          ) : null}

          <Btn onClick={resetControls} variant="ghost" icon={RotateCcw} size="sm">
            Reset
          </Btn>
          <button onClick={() => setShowHint((h) => !h)} className="text-xs text-slate-400 underline">
            {showHint ? "hide hint" : "hint"}
          </button>
          <button onClick={() => setShowAnswer(true)} className="text-xs text-slate-500 underline hover:text-slate-300">
            show me the answer
          </button>
          {notReal && mission.kind === "chat" ? (
            <div className="flex w-full items-center gap-2 rounded-lg border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-xs text-amber-200">
              <Info size={14} className="shrink-0" />
              <span className="flex-1">This lab grades a <b>real</b> model's reply, so it can't be completed on the Simulation engine. Switch to Ollama or WebLLM to attempt it — or use <b>&ldquo;show me the answer&rdquo;</b> to learn the technique.</span>
              <button onClick={() => setShowOnboarding(true)} className="shrink-0 rounded-md border border-amber-400/50 px-2 py-1 font-semibold text-amber-100 hover:bg-amber-500/20">Choose engine</button>
            </div>
          ) : null}
        </div>
      )}

      {showHint ? (
        <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-3 text-xs text-slate-400">
          💡 {tier.hint}
        </div>
      ) : null}

      <OutputBlock outputs={outputs} running={running} />
      <ResultBanner result={result} />

      {/* ultimate explanation — shown when the tier is passed or the student gives up */}
      {(result?.pass || showAnswer) && (tier.explain || mission.explain) ? (
        <div className="rounded-lg border border-indigo-500/30 bg-indigo-500/5 p-4">
          <p className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-indigo-300">
            <Info size={13} /> {result?.pass ? "The full picture" : "The answer, explained"}
          </p>
          <p className="text-base leading-relaxed text-slate-200">{tier.explain || mission.explain}</p>
          {showAnswer && !result?.pass ? (
            <p className="mt-2 border-t border-indigo-500/20 pt-2 text-sm text-amber-200">
              <b>How to solve it:</b> {tier.hint}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

/* ------------------------------- Lab view --------------------------------- */

function LabView({ missionId, progress, onPass }) {
  // guard an unknown/stale mission id from the URL (#labs/<bad>) so a bad deep
  // link falls back to the first mission instead of white-screening the app
  const mid = MISSIONS[missionId] ? missionId : MISSION_IDS[0];
  const mission = MISSIONS[mid];
  const prog = progress[mid] || { cleared: [] };
  const cleared = prog.cleared || [];
  // highest unlocked tier index = number cleared (L1 always open)
  const unlocked = Math.min(mission.tiers.length - 1, cleared.length);
  const [activeTier, setActiveTier] = useState(unlocked);

  useEffect(() => {
    setActiveTier(Math.min(mission.tiers.length - 1, (progress[mid]?.cleared || []).length));
  }, [mid]); // eslint-disable-line

  return (
    <div className="grid gap-5 lg:grid-cols-3">
      <div className="space-y-4 lg:col-span-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-slate-100">{mission.title}</h2>
              <p className="mt-1 max-w-xl text-base text-slate-400">{mission.idea}</p>
            </div>
            {cleared.length === mission.tiers.length ? (
              <Tag tone="green" icon={Trophy}>Mastered</Tag>
            ) : (
              <Tag tone="indigo">{cleared.length}/{mission.tiers.length} tiers</Tag>
            )}
          </div>

          {/* learning objectives: why it matters + what you'll learn */}
          {mission.why || mission.learn ? (
            <div className="mt-4 grid gap-3 rounded-lg border border-slate-800 bg-slate-950/50 p-4 sm:grid-cols-2">
              {mission.why ? (
                <div>
                  <p className="mb-1 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-amber-400">
                    <Target size={12} /> Why this matters
                  </p>
                  <p className="text-base leading-relaxed text-slate-300">{mission.why}</p>
                </div>
              ) : null}
              {mission.learn ? (
                <div>
                  <p className="mb-1 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-emerald-400">
                    <BadgeCheck size={12} /> What you'll learn
                  </p>
                  <ul className="space-y-1">
                    {mission.learn.map((l, i) => (
                      <li key={i} className="flex gap-1.5 text-base leading-snug text-slate-300">
                        <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-emerald-500/70" />
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ) : null}

        </div>

        <MissionRunner
          mission={mission}
          tierIdx={activeTier}
          onPass={onPass}
          cleared={cleared}
          onSelectTier={setActiveTier}
        />
      </div>

      <LiveMetrics />
    </div>
  );
}

/* --------------------------------- Header --------------------------------- */

/* ============================================================================
   READER TAB (Tab 2 Methodology) — renders TEXTBOOK.methods. (Tab 1, the AI
   Knowledge Base, is rendered by KnowledgeReader from knowledgeBase.js below.)
   ============================================================================ */

const CALLOUT_TONES = {
  indigo: { box: "border-indigo-500/30 bg-indigo-500/5", title: "text-indigo-300" },
  amber: { box: "border-amber-500/30 bg-amber-500/5", title: "text-amber-300" },
  rose: { box: "border-rose-500/30 bg-rose-500/5", title: "text-rose-300" },
  emerald: { box: "border-emerald-500/30 bg-emerald-500/5", title: "text-emerald-300" },
};

function CalloutBox({ callout }) {
  const t = CALLOUT_TONES[callout.tone] || CALLOUT_TONES.indigo;
  return (
    <div className={`my-3 rounded-lg border p-3.5 ${t.box}`}>
      <p className={`mb-1 text-xs font-semibold uppercase tracking-wide ${t.title}`}>{callout.title}</p>
      <p className="text-base leading-relaxed tracking-wide text-slate-300">{callout.body}</p>
    </div>
  );
}

function Chapter({ ch }) {
  return (
    <section className="scroll-mt-24">
      <h3 className="mb-2 text-lg font-bold tracking-tight text-slate-100">{ch.heading}</h3>
      <div className="space-y-3">
        {(ch.paras || []).map((p, i) => (
          <p key={i} className="text-base leading-relaxed tracking-wide text-slate-300">{p}</p>
        ))}
      </div>
      {ch.figure ? <LessonFigure figure={ch.figure} /> : null}
      {ch.example ? (
        <div className="my-3 rounded-lg border border-amber-500/25 bg-amber-500/[0.05] p-3 text-sm leading-relaxed tracking-wide">
          <span className="font-semibold uppercase tracking-wide text-amber-300">Case study </span>
          <span className="text-slate-300">{ch.example}</span>
        </div>
      ) : null}
      {ch.callout ? <CalloutBox callout={ch.callout} /> : null}
      {ch.keyTerms && ch.keyTerms.length ? (
        <div className="my-3 rounded-lg border border-slate-800 bg-slate-950/50 p-3">
          <p className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-400">
            <BadgeCheck size={13} /> Key terms
          </p>
          <dl className="space-y-1.5">
            {ch.keyTerms.map((k, i) => (
              <div key={i} className="text-sm leading-relaxed">
                <dt className="inline font-semibold text-indigo-300">{k.term}</dt>
                <dd className="inline text-slate-400"> — {k.def}</dd>
              </div>
            ))}
          </dl>
        </div>
      ) : null}
    </section>
  );
}

/* ============================================================================
   KNOWLEDGE BASE reader — renders KNOWLEDGE_BASE (ordered block documents with
   real tables, subheadings, captions, and video links) from the ITAI 1370
   curriculum.
   ============================================================================ */

function linkify(text) {
  const parts = String(text).split(/(https?:\/\/[^\s)]+)/g);
  return parts.map((p, i) =>
    /^https?:\/\//.test(p) ? (
      <a key={i} href={p} target="_blank" rel="noreferrer" className="break-words text-indigo-400 underline decoration-indigo-500/40 underline-offset-2 hover:text-indigo-300">{p}</a>
    ) : (
      <React.Fragment key={i}>{p}</React.Fragment>
    )
  );
}

function KBTable({ headers, rows }) {
  return (
    <div className="my-5 overflow-x-auto rounded-xl border border-slate-800">
      <table className="w-full min-w-[560px] border-collapse text-[0.95rem]">
        <thead>
          <tr className="bg-slate-800/60">
            {headers.map((h, i) => (
              <th key={i} className="border-b border-slate-700 px-3.5 py-2.5 text-left align-top text-sm font-semibold uppercase tracking-wide text-indigo-200">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri} className="odd:bg-slate-900/40">
              {r.map((c, ci) => (
                <td key={ci} className="whitespace-pre-line border-b border-slate-800/70 px-3.5 py-2.5 align-top leading-relaxed tracking-wide text-slate-200">{linkify(c)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ytId(url) {
  if (!url) return null;
  const m = url.match(/[?&]v=([^&]+)/) || url.match(/youtu\.be\/([^?&]+)/) || url.match(/embed\/([^?&]+)/);
  return m ? m[1] : null;
}

function VideoCard({ v }) {
  const [playing, setPlaying] = useState(false);
  const id = ytId(v.url);
  return (
    <figure className="my-5 overflow-hidden rounded-xl border border-rose-500/25 bg-rose-500/[0.05]">
      {id && playing ? (
        <div className="relative aspect-video w-full bg-black">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
            title={v.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      ) : id ? (
        <button
          onClick={() => setPlaying(true)}
          className="group relative flex aspect-video w-full items-center justify-center bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800"
          aria-label={`Play video: ${v.title}`}
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-600/90 text-white shadow-lg shadow-rose-900/40 transition group-hover:scale-110 group-hover:bg-rose-500">
            <PlayCircle size={36} />
          </span>
          <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-slate-200">
            Click to play here — nothing loads from YouTube until you do
          </span>
        </button>
      ) : null}
      <figcaption className="flex items-start gap-3 p-3.5">
        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-rose-500/15 text-rose-300 ring-1 ring-rose-500/30">
          <PlayCircle size={18} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold uppercase tracking-wide text-rose-300">Watch</p>
          <p className="mt-0.5 text-base font-bold leading-snug text-slate-200">{v.title}</p>
          {v.source ? <p className="mt-0.5 text-sm text-slate-500">Source: {v.source}</p> : null}
          {v.url ? (
            <a href={v.url} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-rose-300 hover:text-rose-200">
              Open on YouTube <ExternalLink size={13} />
            </a>
          ) : v.cite ? (
            <p className="mt-1 text-sm leading-relaxed text-slate-500">{v.cite}</p>
          ) : null}
        </div>
      </figcaption>
    </figure>
  );
}

function KBBlock({ b }) {
  switch (b.t) {
    case "h2":
      return <h2 id={b.id} className="mb-3 mt-10 scroll-mt-28 border-b border-slate-800 pb-2 text-xl font-bold tracking-tight text-slate-100 first:mt-0">{b.text}</h2>;
    case "h3":
      return <h3 className="mb-2 mt-7 text-lg font-bold tracking-tight text-indigo-200">{b.text}</h3>;
    case "h4":
      return <h4 className="mb-2 mt-5 text-base font-semibold uppercase tracking-wide text-slate-400">{b.text}</h4>;
    case "p":
      return <p className="mb-4 text-base leading-relaxed tracking-wide text-slate-200">{linkify(b.text)}</p>;
    case "caption":
      return <p className="mb-5 mt-1 text-sm italic tracking-wide text-slate-500">{b.text}</p>;
    case "table":
      return <KBTable headers={b.headers} rows={b.rows} />;
    case "video":
      return <VideoCard v={b} />;
    default:
      return null;
  }
}

/* ============================================================================
   SHARED SIDEBAR RAIL primitives — every content section's left navigation uses
   the same intro (label + one-line description), group headers, and list items,
   so the rails read as one consistent system. Sections pass their own accent.
   ============================================================================ */

const RAIL_TONE = {
  indigo:  { active: "border-indigo-500/50 bg-indigo-500/10 text-indigo-100",    head: "text-indigo-300" },
  cyan:    { active: "border-cyan-500/50 bg-cyan-500/10 text-cyan-100",          head: "text-cyan-300" },
  fuchsia: { active: "border-fuchsia-500/50 bg-fuchsia-500/10 text-fuchsia-100", head: "text-fuchsia-300" },
  violet:  { active: "border-violet-500/50 bg-violet-500/10 text-violet-100",    head: "text-violet-300" },
  amber:   { active: "border-amber-500/50 bg-amber-500/10 text-amber-100",       head: "text-amber-300" },
  emerald: { active: "border-emerald-500/50 bg-emerald-500/10 text-emerald-100", head: "text-emerald-300" },
  rose:    { active: "border-rose-500/50 bg-rose-500/10 text-rose-100",          head: "text-rose-300" },
};

function RailIntro({ title, desc }) {
  return (
    <div>
      <h2 className="mb-1 text-sm font-semibold uppercase tracking-wide text-slate-500">{title}</h2>
      {desc ? <p className="text-sm leading-relaxed text-slate-500">{desc}</p> : null}
    </div>
  );
}

function RailGroup({ icon, name, tone = "indigo", children }) {
  const t = RAIL_TONE[tone] || RAIL_TONE.indigo;
  return (
    <div>
      <h3 className={`mb-1 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide ${t.head}`}><span aria-hidden="true" className="flex shrink-0">{icon}</span> {name}</h3>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function RailItem({ label, active, tone = "indigo", onClick }) {
  const t = RAIL_TONE[tone] || RAIL_TONE.indigo;
  return (
    <button
      onClick={onClick}
      aria-current={active ? "true" : undefined}
      className={`block w-full rounded-lg border px-3 py-2 text-left text-sm leading-snug transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
        active ? t.active : "border-slate-800 bg-slate-900/40 text-slate-300 hover:border-slate-600"
      }`}
    >
      {label}
    </button>
  );
}

function KnowledgeReader({ book, sub, onSub }) {
  const modules = book.modules;
  // module position lives in the route (#core/<id>) so Back steps between modules
  const mIdx = Math.max(0, modules.findIndex((m) => String(m.id) === String(sub)));
  const setMIdx = (v) => {
    const next = typeof v === "function" ? v(mIdx) : v;
    const clamped = Math.max(0, Math.min(modules.length - 1, next));
    onSub(String(modules[clamped].id));
  };
  const topRef = useRef(null);
  useEffect(() => {
    if (topRef.current) topRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
  }, [mIdx]);
  const mod = book.modules[mIdx];
  const sections = mod.blocks.filter((b) => b.t === "h2");
  const jump = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="grid gap-6 lg:grid-cols-4">
      {/* module rail */}
      <aside role="navigation" aria-label={book.title} className="lg:col-span-1">
        <div className="sticky top-[123px] max-h-[calc(100vh-139px)] space-y-3 overflow-y-auto pr-1">
          <RailIntro title={book.title} desc={book.subtitle} />
          <div className="space-y-1">
            {book.modules.map((m, i) => (
              <RailItem key={m.id} label={m.title} active={i === mIdx} tone="indigo" onClick={() => setMIdx(i)} />
            ))}
          </div>
        </div>
      </aside>

      {/* content */}
      <div className="lg:col-span-3">
        <div ref={topRef} className="mb-5 scroll-mt-24 rounded-xl border border-slate-800 bg-slate-900/60 p-5">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-400">Module {mod.id}</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-100">{mod.title}</h2>
          {mod.overview ? <p className="mt-2 text-base leading-relaxed tracking-wide text-slate-400">{mod.overview}</p> : null}
          {sections.length ? (
            <div className="mt-4 flex flex-wrap gap-1.5 border-t border-slate-800 pt-3">
              {sections.map((s) => (
                <button key={s.id} onClick={() => jump(s.id)} className="rounded-md bg-slate-800 px-2.5 py-1.5 text-sm font-medium text-slate-400 transition hover:bg-slate-700 hover:text-slate-200">
                  {s.text}
                </button>
              ))}
            </div>
          ) : null}
        </div>
        <article className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 sm:p-6">
          {mod.blocks.map((b, i) => <KBBlock key={i} b={b} />)}
        </article>
        {/* prev / next module */}
        <div className="mt-6 flex items-center justify-between gap-3">
          <button
            disabled={mIdx === 0}
            onClick={() => setMIdx((i) => Math.max(0, i - 1))}
            className="rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2 text-base text-slate-300 transition hover:border-indigo-500 disabled:cursor-not-allowed disabled:opacity-40"
          >
            ← Previous module
          </button>
          <span className="text-sm text-slate-500">Module {mod.id} of {book.modules.length}</span>
          <button
            disabled={mIdx === book.modules.length - 1}
            onClick={() => setMIdx((i) => Math.min(book.modules.length - 1, i + 1))}
            className="rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2 text-base text-slate-300 transition hover:border-indigo-500 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next module →
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   OPERATIONALIZING AI reader — practical how-to tutorials (OPS_TUTORIALS grouped
   by OPS_CATEGORIES). Each tutorial shows a copy-paste prompt plus a cloud route
   and a private local-model route, with a callout toward the future AI
   Experimentation Station for local-model setup.
   ============================================================================ */

const OPS_ICONS = { GraduationCap, PenLine, Briefcase, ClipboardList, Terminal, ShieldCheck, Cloud };

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable */
    }
  };
  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-1.5 rounded-md border border-slate-600 bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-200 transition hover:border-indigo-500 hover:text-white"
    >
      {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
      {copied ? "Copied" : "Copy prompt"}
    </button>
  );
}

function ExperimentationCallout({ onGo, heading, body, cta }) {
  return (
    <div data-xref="experimentation-station" className="mt-3 rounded-lg border border-cyan-500/30 bg-cyan-500/[0.06] p-3">
      <div className="flex items-start gap-2.5">
        <FlaskConical size={16} className="mt-0.5 shrink-0 text-cyan-300" />
        <p className="text-sm leading-relaxed tracking-wide text-slate-300">
          <span className="font-semibold text-cyan-200">{heading || "New to running local models?"}</span>{" "}
          {body || (
            <>A complete, step-by-step setup walkthrough — installing a local engine and building your own private AI station — lives in the{" "}
            <span className="font-semibold text-cyan-200">Experimentation Station</span>.</>
          )}
        </p>
      </div>
      {onGo ? (
        <button
          onClick={onGo}
          className="mt-2.5 ml-[26px] inline-flex items-center gap-1.5 rounded-md border border-cyan-500/40 bg-cyan-500/15 px-3 py-1.5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500/25"
        >
          {cta || "Go to the Experimentation Station"} <ArrowRight size={14} />
        </button>
      ) : null}
    </div>
  );
}

function Bullets({ items, marker: Marker, tone = "text-slate-500" }) {
  return (
    <ul className="space-y-1.5">
      {(items || []).map((it, i) => (
        <li key={i} className="flex gap-2 text-base leading-relaxed tracking-wide text-slate-300">
          <Marker size={15} className={`mt-1 shrink-0 ${tone}`} /> <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

function OpsSection({ title, icon: Icon, children }) {
  return (
    <section className="mt-6">
      <h3 className="mb-2.5 flex items-center gap-2 text-lg font-bold tracking-tight text-slate-100">
        {Icon ? <Icon size={18} className="text-indigo-300" /> : null} {title}
      </h3>
      {children}
    </section>
  );
}

function TutorialView({ t, catName, onJump, onGoStation }) {
  return (
    <article>
      {/* header */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-400">{catName}</p>
        <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-100">{t.title}</h2>
        <p className="mt-2 text-base leading-relaxed tracking-wide text-slate-300">{t.tagline}</p>
      </div>

      {/* who / why */}
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
          <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-slate-400">Who it's for</p>
          <p className="text-base leading-relaxed tracking-wide text-slate-300">{t.audience}</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
          <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-slate-400">Why it matters</p>
          <p className="text-base leading-relaxed tracking-wide text-slate-300">{t.why}</p>
        </div>
      </div>

      <OpsSection title="What you'll need" icon={CheckCircle2}>
        <Bullets items={t.need} marker={CheckCircle2} tone="text-emerald-500/70" />
      </OpsSection>

      <OpsSection title="Step by step" icon={ClipboardList}>
        <ol className="space-y-3">
          {(t.steps || []).map((s, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-500/15 text-sm font-bold text-indigo-300 ring-1 ring-indigo-500/30">{i + 1}</span>
              <div>
                <p className="text-base font-semibold text-slate-100">{s.title}</p>
                <p className="text-base leading-relaxed tracking-wide text-slate-300">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </OpsSection>

      {t.prompt ? (
        <OpsSection title="The prompt" icon={Terminal}>
          <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-950">
            <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/60 px-3 py-1.5">
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Copy-paste prompt</span>
              <CopyButton text={t.prompt} />
            </div>
            <pre className="max-h-none overflow-x-auto whitespace-pre-wrap px-4 py-3 text-[0.95rem] leading-relaxed tracking-wide text-slate-200">{t.prompt}</pre>
          </div>
          {t.promptNote ? <p className="mt-2 text-sm leading-relaxed tracking-wide text-slate-400">{t.promptNote}</p> : null}
        </OpsSection>
      ) : null}

      {t.lab ? (
        /* cloud-platform tutorial: one column of platform steps + a jump to the full hands-on lab */
        <OpsSection title="Do it on the platform" icon={Rocket}>
          <div className="rounded-xl border border-indigo-500/25 bg-indigo-500/[0.05] p-4">
            <p className="mb-1.5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-indigo-300"><Cloud size={16} /> On {t.platform || "the platform"}</p>
            <ol className="list-decimal space-y-1 pl-4 text-base leading-relaxed tracking-wide text-slate-300 marker:text-slate-500">
              {(t.cloud?.steps || []).map((s, i) => <li key={i} className="pl-1">{s}</li>)}
            </ol>
          </div>
          <ExperimentationCallout
            onGo={() => onGoStation(t.lab)}
            heading="Want the full click-by-click walkthrough?"
            body={<>The complete step-by-step setup lab for {t.platform || "this platform"} lives in the <span className="font-semibold text-cyan-200">Experimentation Station</span> — open it to build this yourself, screen by screen.</>}
            cta="Open the full setup lab"
          />
        </OpsSection>
      ) : (
        <OpsSection title="How to run it" icon={Rocket}>
          <div className="grid gap-3 md:grid-cols-2">
            {/* cloud */}
            <div className="rounded-xl border border-indigo-500/25 bg-indigo-500/[0.05] p-4">
              <p className="mb-1.5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-indigo-300"><Cloud size={16} /> In a cloud assistant</p>
              {t.cloud?.bestTool ? <p className="mb-2 text-sm leading-relaxed tracking-wide text-indigo-100/90"><span className="font-semibold">Best for this task:</span> {t.cloud.bestTool}</p> : null}
              <ol className="list-decimal space-y-1 pl-4 text-base leading-relaxed tracking-wide text-slate-300 marker:text-slate-500">
                {(t.cloud?.steps || []).map((s, i) => <li key={i} className="pl-1">{s}</li>)}
              </ol>
            </div>
            {/* local */}
            <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/[0.05] p-4">
              <p className="mb-1.5 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-emerald-300"><Cpu size={16} /> On a local model (private)</p>
              <ol className="list-decimal space-y-1 pl-4 text-base leading-relaxed tracking-wide text-slate-300 marker:text-slate-500">
                {(t.local || []).map((s, i) => <li key={i} className="pl-1">{s}</li>)}
              </ol>
              {t.localNeedsSetup ? <ExperimentationCallout onGo={() => onGoStation()} /> : null}
            </div>
          </div>
          {t.choose ? (
            <div className="mt-3 rounded-lg border border-amber-500/25 bg-amber-500/[0.05] p-3">
              <p className="text-base leading-relaxed tracking-wide text-slate-300"><span className="font-semibold text-amber-300">Which should you use? </span>{t.choose}</p>
            </div>
          ) : null}
        </OpsSection>
      )}

      {t.example ? (
        <OpsSection title="Worked example" icon={PlayCircle}>
          <div className="space-y-2">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">You paste</p>
              <pre className="overflow-x-auto whitespace-pre-wrap rounded-lg border border-slate-800 bg-slate-950/60 px-3.5 py-2.5 text-[0.95rem] leading-relaxed tracking-wide text-slate-300">{t.example.input}</pre>
            </div>
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">The AI returns</p>
              <pre className="overflow-x-auto whitespace-pre-wrap rounded-lg border border-slate-800 bg-slate-950/60 px-3.5 py-2.5 text-[0.95rem] leading-relaxed tracking-wide text-emerald-200/90">{t.example.output}</pre>
            </div>
            {t.example.note ? <p className="text-sm italic tracking-wide text-slate-500">↳ {t.example.note}</p> : null}
          </div>
        </OpsSection>
      ) : null}

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
          <p className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-emerald-300"><Lightbulb size={16} /> Pro tips</p>
          <Bullets items={t.tips} marker={Lightbulb} tone="text-emerald-500/70" />
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
          <p className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-rose-300"><AlertTriangle size={16} /> Common mistakes</p>
          <Bullets items={t.mistakes} marker={AlertTriangle} tone="text-rose-500/70" />
        </div>
      </div>

      {t.related && t.related.length ? (
        <div className="mt-6 border-t border-slate-800 pt-3">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">Related tutorials</p>
          <div className="flex flex-wrap gap-2">
            {t.related.map((rid) => {
              const r = OPS_TUTORIALS.find((x) => x.id === rid);
              if (!r) return null;
              return (
                <button key={rid} onClick={() => onJump(rid)} className="rounded-md bg-slate-800 px-2.5 py-1.5 text-sm font-medium text-slate-300 transition hover:bg-slate-700 hover:text-white">
                  {r.title} →
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </article>
  );
}

function OperationalizingReader({ sub, onSub, onGoStation }) {
  const activeId = sub || OPS_TUTORIALS[0]?.id;
  const setActiveId = onSub;
  const topRef = useRef(null);
  useEffect(() => {
    if (topRef.current) topRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
  }, [activeId]);
  const active = OPS_TUTORIALS.find((t) => t.id === activeId) || OPS_TUTORIALS[0];
  const cat = OPS_CATEGORIES.find((c) => c.id === active?.cat);
  const byCat = (id) => OPS_TUTORIALS.filter((t) => t.cat === id);
  return (
    <div className="grid gap-6 lg:grid-cols-4">
      {/* category + tutorial rail */}
      <aside role="navigation" aria-label="Operationalizing AI" className="lg:col-span-1">
        <div className="sticky top-[123px] max-h-[calc(100vh-139px)] space-y-3 overflow-y-auto pr-1">
          <RailIntro title="Operationalizing AI" desc="Practical how-to guides for putting AI to work — pick a use case." />
          {OPS_CATEGORIES.map((c) => {
            const Icon = OPS_ICONS[c.icon] || Rocket;
            const items = byCat(c.id);
            if (!items.length) return null;
            return (
              <RailGroup key={c.id} icon={<Icon size={13} />} name={c.name} tone="indigo">
                {items.map((t) => (
                  <RailItem key={t.id} label={t.title} active={t.id === activeId} tone="indigo" onClick={() => setActiveId(t.id)} />
                ))}
              </RailGroup>
            );
          })}
        </div>
      </aside>

      {/* content */}
      <div className="lg:col-span-3">
        <div ref={topRef} className="scroll-mt-24">
          {active ? <TutorialView t={active} catName={cat?.name || ""} onJump={setActiveId} onGoStation={onGoStation} /> : null}
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   AI EXPERIMENTATION STATION reader — 4 overview pages (AIES_OVERVIEW) that
   orient the reader, then category-grouped hands-on setup labs (AIES_LABS).
   ============================================================================ */

const AIES_ICONS = { Compass, Cpu, Package, Layers, FileStack, Bot, Terminal, Image: ImageIcon, Wrench, Cloud };

function StationBlock({ b }) {
  switch (b.t) {
    case "h3":
      return <h3 className="mb-2 mt-7 text-lg font-bold tracking-tight text-slate-100">{b.text}</h3>;
    case "p":
      return <p className="mb-3 text-base leading-relaxed tracking-wide text-slate-300">{linkify(b.text)}</p>;
    case "table":
      return <KBTable headers={b.headers} rows={b.rows} />;
    case "callout":
      return <CalloutBox callout={b} />;
    case "bullets":
      return (
        <ul className="my-3 space-y-1.5">
          {(b.items || []).map((it, i) => (
            <li key={i} className="flex gap-2 text-base leading-relaxed tracking-wide text-slate-300">
              <CheckCircle2 size={15} className="mt-1 shrink-0 text-emerald-500/70" /> <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    case "compare":
      return (
        <div className="my-4 grid gap-3 md:grid-cols-2">
          {[b.left, b.right].map((col, ci) => (
            <div key={ci} className={`rounded-xl border p-4 ${ci === 0 ? "border-indigo-500/25 bg-indigo-500/[0.05]" : "border-emerald-500/25 bg-emerald-500/[0.05]"}`}>
              <p className={`mb-2 text-sm font-semibold uppercase tracking-wide ${ci === 0 ? "text-indigo-300" : "text-emerald-300"}`}>{col.title}</p>
              <ul className="space-y-1.5">
                {(col.items || []).map((it, i) => (
                  <li key={i} className="text-base leading-relaxed tracking-wide text-slate-300">• {it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    case "stack":
      return (
        <div className="my-4 space-y-2">
          {(b.layers || []).map((ly, i) => (
            <div key={i} className="rounded-lg border border-slate-700 bg-slate-900/60 p-3.5">
              <p className="text-base font-bold text-indigo-200">{ly.label}</p>
              {ly.note ? <p className="mt-0.5 text-base leading-relaxed tracking-wide text-slate-400">{ly.note}</p> : null}
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
}

function StationOverview({ page }) {
  return (
    <article>
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
        <p className="text-sm font-semibold uppercase tracking-wide text-cyan-400">Experimentation Station</p>
        <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-100">{page.title}</h2>
        {page.intro ? <p className="mt-2 text-base leading-relaxed tracking-wide text-slate-300">{page.intro}</p> : null}
      </div>
      <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/40 p-5 sm:p-6">
        {(page.blocks || []).map((b, i) => <StationBlock key={i} b={b} />)}
      </div>
    </article>
  );
}

function StationLab({ lab, catName }) {
  return (
    <article>
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
        <p className="text-sm font-semibold uppercase tracking-wide text-cyan-400">{catName}</p>
        <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-100">{lab.title}</h2>
        {lab.tagline ? <p className="mt-2 text-base leading-relaxed tracking-wide text-slate-300">{lab.tagline}</p> : null}
        {(lab.difficulty || lab.time || (lab.platforms && lab.platforms.length)) ? (
          <div className="mt-3 flex flex-wrap items-center gap-1.5">
            {lab.difficulty ? <span className="rounded-full bg-emerald-500/10 px-3 py-0.5 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/30">{lab.difficulty}</span> : null}
            {lab.time ? <span className="rounded-full bg-slate-800 px-3 py-0.5 text-xs font-medium text-slate-300">⏱ {lab.time}</span> : null}
            {(lab.platforms || []).map((p, i) => (
              <span key={i} className="rounded bg-slate-800 px-2 py-0.5 text-xs font-medium uppercase tracking-wide text-slate-300">{p}</span>
            ))}
          </div>
        ) : null}
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
          <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-slate-400">What it is</p>
          <p className="text-base leading-relaxed tracking-wide text-slate-300">{lab.whatItIs}</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
          <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-slate-400">Why use it</p>
          <p className="text-base leading-relaxed tracking-wide text-slate-300">{lab.whyUseIt}</p>
        </div>
      </div>
      {lab.bestFor ? (
        <p className="mt-3 rounded-lg border border-slate-800 bg-slate-950/40 p-3 text-base leading-relaxed tracking-wide text-slate-300">
          <span className="font-semibold text-slate-200">Best for: </span>{lab.bestFor}
        </p>
      ) : null}

      {lab.prerequisites && lab.prerequisites.length ? (
        <OpsSection title="Before you start" icon={CheckCircle2}>
          <Bullets items={lab.prerequisites} marker={CheckCircle2} tone="text-emerald-500/70" />
        </OpsSection>
      ) : null}

      <OpsSection title="Step by step" icon={ClipboardList}>
        <ol className="space-y-3">
          {(lab.steps || []).map((s, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-500/15 text-sm font-bold text-cyan-300 ring-1 ring-cyan-500/30">{i + 1}</span>
              <div className="min-w-0 flex-1">
                <p className="text-base font-semibold text-slate-100">{s.title}</p>
                {s.detail ? <p className="text-base leading-relaxed tracking-wide text-slate-300">{s.detail}</p> : null}
                {s.do && s.do.length ? (
                  <ul className="mt-1.5 space-y-1">
                    {s.do.map((d, j) => (
                      <li key={j} className="flex gap-2 text-base leading-relaxed tracking-wide text-slate-300">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/70" /> <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {s.commands && s.commands.length ? (
                  <div className="mt-2 overflow-hidden rounded-lg border border-slate-700 bg-slate-950">
                    <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/60 px-3 py-1">
                      <span className="text-xs font-medium uppercase tracking-wide text-slate-500">Terminal</span>
                      <CopyButton text={s.commands.join("\n")} />
                    </div>
                    <pre className="overflow-x-auto whitespace-pre-wrap px-3.5 py-2.5 font-mono text-sm leading-relaxed text-emerald-200/90">{s.commands.join("\n")}</pre>
                  </div>
                ) : null}
                {s.check ? (
                  <p className="mt-2 flex items-start gap-1.5 rounded-md border border-emerald-500/20 bg-emerald-500/[0.06] px-2.5 py-1.5 text-base leading-relaxed text-slate-200">
                    <CheckCircle2 size={15} className="mt-1 shrink-0 text-emerald-400" /> <span><span className="font-semibold text-emerald-300">You'll know it worked when </span>{s.check}</span>
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </OpsSection>

      {lab.cloudTieIn ? (
        <OpsSection title="How it works with the cloud" icon={Cloud}>
          <p className="text-base leading-relaxed tracking-wide text-slate-300">{lab.cloudTieIn}</p>
        </OpsSection>
      ) : null}

      {lab.troubleshooting && lab.troubleshooting.length ? (
        <OpsSection title="Troubleshooting" icon={Wrench}>
          <div className="overflow-hidden rounded-xl border border-slate-800">
            {lab.troubleshooting.map((tr, i) => (
              <div key={i} className={`grid gap-1 p-3 sm:grid-cols-[1fr_1.4fr] sm:gap-4 ${i % 2 ? "bg-slate-900/20" : "bg-slate-900/50"}`}>
                <p className="flex items-start gap-1.5 text-base font-medium text-rose-200"><AlertTriangle size={15} className="mt-1 shrink-0 text-rose-400/70" /> {tr.symptom}</p>
                <p className="text-base leading-relaxed tracking-wide text-slate-300">{tr.fix}</p>
              </div>
            ))}
          </div>
        </OpsSection>
      ) : null}

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {lab.tips && lab.tips.length ? (
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <p className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-emerald-300"><Lightbulb size={16} /> Pro tips</p>
            <Bullets items={lab.tips} marker={Lightbulb} tone="text-emerald-500/70" />
          </div>
        ) : null}
        {lab.resources && lab.resources.length ? (
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
            <p className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-indigo-300"><BookMarked size={16} /> Resources</p>
            <ul className="space-y-1.5">
              {lab.resources.map((r, i) => (
                <li key={i} className="text-base leading-relaxed tracking-wide text-slate-300">
                  {r.url ? (
                    <a href={/^https?:\/\//.test(r.url) ? r.url : `https://${r.url}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300">
                      {r.label} <ExternalLink size={12} />
                    </a>
                  ) : (
                    <span>• {r.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </article>
  );
}

function ExperimentationStation({ sub, onSub }) {
  const activeId = sub || AIES_OVERVIEW[0]?.id;
  const setActiveId = onSub;
  const topRef = useRef(null);
  useEffect(() => {
    if (topRef.current) topRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
  }, [activeId]);
  const overview = AIES_OVERVIEW.find((p) => p.id === activeId);
  const lab = AIES_LABS.find((l) => l.id === activeId);
  const cat = lab ? AIES_CATEGORIES.find((c) => c.id === lab.cat) : null;
  const labsByCat = (id) => AIES_LABS.filter((l) => l.cat === id);
  return (
    <div className="grid gap-6 lg:grid-cols-4">
      <aside role="navigation" aria-label="Experimentation Station" className="lg:col-span-1">
        <div className="sticky top-[123px] max-h-[calc(100vh-139px)] space-y-3 overflow-y-auto pr-1">
          <RailIntro title="Experimentation Station" desc="Step-by-step labs for running and building with AI — your own private local stack (engines, RAG, agents) plus the big cloud studios (Colab, Model Garden, Copilot Studio)." />
          <RailGroup icon={<Compass size={13} />} name="Start Here" tone="cyan">
            {AIES_OVERVIEW.map((p) => (
              <RailItem key={p.id} label={p.title} active={activeId === p.id} tone="cyan" onClick={() => setActiveId(p.id)} />
            ))}
          </RailGroup>
          {AIES_CATEGORIES.map((c) => {
            const items = labsByCat(c.id);
            if (!items.length) return null;
            const Icon = AIES_ICONS[c.icon] || Wrench;
            return (
              <RailGroup key={c.id} icon={<Icon size={13} />} name={c.name} tone="cyan">
                {items.map((l) => (
                  <RailItem key={l.id} label={l.title} active={activeId === l.id} tone="cyan" onClick={() => setActiveId(l.id)} />
                ))}
              </RailGroup>
            );
          })}
          {!AIES_LABS.length ? <p className="px-1 pt-1 text-xs italic text-slate-500">Setup labs are being finalized…</p> : null}
        </div>
      </aside>
      <div className="lg:col-span-3">
        <div ref={topRef} className="scroll-mt-24">
          {overview ? <StationOverview page={overview} /> : lab ? <StationLab lab={lab} catName={cat?.name || ""} /> : null}
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   PROMPT ENGINEERING reader — foundation pages (PE_OVERVIEW, block-based),
   formula & technique reference pages (PE_TECHNIQUES, structured), and a
   cheat-sheet library. Rail: Foundations · Formulas · Advanced · Putting It
   Together · Cheat Sheets.
   ============================================================================ */

const PE_ICONS = { Compass, Boxes, Scale, Cpu, AlertTriangle, ClipboardList, LayoutTemplate, Sparkles };

function TemplateBlock({ title, text }) {
  return (
    <div className="my-4 overflow-hidden rounded-xl border border-indigo-500/25 bg-indigo-500/[0.04]">
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/60 px-3 py-1.5">
        <span className="text-xs font-semibold uppercase tracking-wide text-indigo-300">{title || "Template"}</span>
        <CopyButton text={text} />
      </div>
      <pre className="overflow-x-auto whitespace-pre-wrap px-4 py-3 text-[0.95rem] leading-relaxed tracking-wide text-slate-200">{text}</pre>
    </div>
  );
}

function PromptPair({ b }) {
  return (
    <div className="my-4 grid gap-3 md:grid-cols-2">
      <div className="rounded-xl border border-rose-500/25 bg-rose-500/[0.05] p-3.5">
        <p className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-rose-300"><X size={13} /> {b.bad?.label || "Weak"}</p>
        <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed tracking-wide text-slate-300">{b.bad?.text}</pre>
      </div>
      <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/[0.05] p-3.5">
        <p className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-emerald-300"><Check size={13} /> {b.good?.label || "Strong"}</p>
        <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed tracking-wide text-slate-200">{b.good?.text}</pre>
      </div>
      {b.why ? <p className="text-sm leading-relaxed tracking-wide text-slate-400 md:col-span-2"><span className="font-semibold text-slate-300">Why: </span>{b.why}</p> : null}
    </div>
  );
}

function PEBlock({ b }) {
  switch (b.t) {
    case "h3":
      return <h3 className="mb-2 mt-7 text-lg font-bold tracking-tight text-slate-100">{b.text}</h3>;
    case "p":
      return <p className="mb-3 text-base leading-relaxed tracking-wide text-slate-300">{linkify(b.text)}</p>;
    case "table":
      return <KBTable headers={b.headers} rows={b.rows} />;
    case "callout":
      return <CalloutBox callout={b} />;
    case "template":
      return <TemplateBlock title={b.title} text={b.text} />;
    case "promptpair":
      return <PromptPair b={b} />;
    case "bullets":
      return (
        <ul className="my-3 space-y-1.5">
          {(b.items || []).map((it, i) => (
            <li key={i} className="flex gap-2 text-base leading-relaxed tracking-wide text-slate-300">
              <CheckCircle2 size={15} className="mt-1 shrink-0 text-emerald-500/70" /> <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    case "steps":
      return (
        <ol className="my-3 space-y-3">
          {(b.items || []).map((s, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-fuchsia-500/15 text-sm font-bold text-fuchsia-300 ring-1 ring-fuchsia-500/30">{i + 1}</span>
              <div>
                <p className="text-base font-semibold text-slate-100">{s.title}</p>
                <p className="text-base leading-relaxed tracking-wide text-slate-300">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      );
    case "compare":
      return (
        <div className="my-4 grid gap-3 md:grid-cols-2">
          {[b.left, b.right].map((col, ci) => (
            <div key={ci} className={`rounded-xl border p-4 ${ci === 0 ? "border-rose-500/25 bg-rose-500/[0.05]" : "border-emerald-500/25 bg-emerald-500/[0.05]"}`}>
              <p className={`mb-2 text-sm font-semibold uppercase tracking-wide ${ci === 0 ? "text-rose-300" : "text-emerald-300"}`}>{col.title}</p>
              <ul className="space-y-1.5">
                {(col.items || []).map((it, i) => (
                  <li key={i} className="text-base leading-relaxed tracking-wide text-slate-300">• {it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
}

function PEOverviewPage({ page }) {
  return (
    <article>
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
        <p className="text-sm font-semibold uppercase tracking-wide text-fuchsia-400">Prompt Engineering</p>
        <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-100">{page.title}</h2>
        {page.intro ? <p className="mt-2 text-base leading-relaxed tracking-wide text-slate-300">{page.intro}</p> : null}
      </div>
      <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/40 p-5 sm:p-6">
        {(page.blocks || []).map((b, i) => <PEBlock key={i} b={b} />)}
      </div>
    </article>
  );
}

function PETechnique({ tech, catName }) {
  return (
    <article>
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
        <p className="text-sm font-semibold uppercase tracking-wide text-fuchsia-400">{catName}</p>
        <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-100">{tech.title}</h2>
        {tech.tagline ? <p className="mt-2 text-base leading-relaxed tracking-wide text-slate-300">{tech.tagline}</p> : null}
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
          <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-slate-400">What it is</p>
          <p className="text-base leading-relaxed tracking-wide text-slate-300">{tech.whatItIs}</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
          <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-slate-400">When to use it</p>
          <Bullets items={tech.whenToUse} marker={CheckCircle2} tone="text-emerald-500/70" />
        </div>
      </div>

      <OpsSection title="The structure" icon={Boxes}>
        <div className="space-y-2">
          {(tech.structure || []).map((s, i) => (
            <div key={i} className="rounded-lg border border-slate-800 bg-slate-950/40 p-3">
              <p className="text-base font-bold text-fuchsia-200">{s.part}</p>
              <p className="text-base leading-relaxed tracking-wide text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>
      </OpsSection>

      <OpsSection title="Copy-paste template" icon={LayoutTemplate}>
        <TemplateBlock title="Fill in the blanks" text={tech.template} />
      </OpsSection>

      {tech.example ? (
        <OpsSection title="Worked example" icon={PlayCircle}>
          {tech.example.scenario ? <p className="mb-2 text-base leading-relaxed tracking-wide text-slate-400"><span className="font-semibold text-slate-300">Scenario: </span>{tech.example.scenario}</p> : null}
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">The prompt</p>
          <div className="overflow-hidden rounded-lg border border-slate-700 bg-slate-950">
            <div className="flex items-center justify-end border-b border-slate-800 bg-slate-900/60 px-3 py-1"><CopyButton text={tech.example.prompt} /></div>
            <pre className="overflow-x-auto whitespace-pre-wrap px-3.5 py-2.5 text-[0.95rem] leading-relaxed tracking-wide text-slate-200">{tech.example.prompt}</pre>
          </div>
          {tech.example.output ? (
            <>
              <p className="mb-1 mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">What the AI returns</p>
              <pre className="overflow-x-auto whitespace-pre-wrap rounded-lg border border-slate-800 bg-slate-950/60 px-3.5 py-2.5 text-[0.95rem] leading-relaxed tracking-wide text-emerald-200/90">{tech.example.output}</pre>
            </>
          ) : null}
          {tech.example.note ? <p className="mt-2 text-sm italic tracking-wide text-slate-500">↳ {tech.example.note}</p> : null}
        </OpsSection>
      ) : null}

      <OpsSection title="Why it works" icon={Lightbulb}>
        <p className="text-base leading-relaxed tracking-wide text-slate-300">{tech.whyItWorks}</p>
      </OpsSection>

      {tech.tips && tech.tips.length ? (
        <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
          <p className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-emerald-300"><Lightbulb size={16} /> Tips</p>
          <Bullets items={tech.tips} marker={Lightbulb} tone="text-emerald-500/70" />
        </div>
      ) : null}
    </article>
  );
}

function PromptEngineering({ sub, onSub }) {
  const activeId = (PE_OVERVIEW.some((p) => p.id === sub) || PE_TECHNIQUES.some((t) => t.id === sub)) ? sub : PE_OVERVIEW[0]?.id;
  const setActiveId = onSub;
  const topRef = useRef(null);
  useEffect(() => {
    if (topRef.current) topRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
  }, [activeId]);
  const page = PE_OVERVIEW.find((p) => p.id === activeId);
  const tech = PE_TECHNIQUES.find((t) => t.id === activeId);
  const cat = tech ? PE_CATEGORIES.find((c) => c.id === tech.cat) : null;
  const bySection = (s) => PE_OVERVIEW.filter((p) => p.section === s);
  const byCat = (id) => PE_TECHNIQUES.filter((t) => t.cat === id);
  const secGroup = (icon, name, pages) =>
    pages.length ? (
      <RailGroup icon={icon} name={name} tone="fuchsia">
        {pages.map((p) => <RailItem key={p.id} label={p.title} active={activeId === p.id} tone="fuchsia" onClick={() => setActiveId(p.id)} />)}
      </RailGroup>
    ) : null;
  return (
    <div className="grid gap-6 lg:grid-cols-4">
      <aside role="navigation" aria-label="Prompt Engineering" className="lg:col-span-1">
        <div className="sticky top-[123px] max-h-[calc(100vh-139px)] space-y-3 overflow-y-auto pr-1">
          <RailIntro title="Prompt Engineering" desc="Techniques, formulas, and copy-paste cheat sheets for getting better results from any model." />
          {secGroup(<Compass size={13} />, "Foundations", bySection("Foundations"))}
          {PE_CATEGORIES.map((c) => {
            const items = byCat(c.id);
            if (!items.length) return null;
            const Icon = PE_ICONS[c.icon] || Sparkles;
            return (
              <RailGroup key={c.id} icon={<Icon size={13} />} name={c.name} tone="fuchsia">
                {items.map((t) => <RailItem key={t.id} label={t.title} active={t.id === activeId} tone="fuchsia" onClick={() => setActiveId(t.id)} />)}
              </RailGroup>
            );
          })}
          {secGroup(<ClipboardList size={13} />, "Putting It Together", bySection("Putting It Together"))}
          {secGroup(<LayoutTemplate size={13} />, "Cheat Sheets", bySection("Cheat Sheets"))}
        </div>
      </aside>
      <div className="lg:col-span-3">
        <div ref={topRef} className="scroll-mt-24">
          {page ? <PEOverviewPage page={page} /> : tech ? <PETechnique tech={tech} catName={cat?.name || ""} /> : null}
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   VIBE CODING reader — foundation + reference pages (VIBE_OVERVIEW, block-based)
   and the workflow-step / tool-guide / project pages (VIBE_PAGES, structured
   sections). Rail: Start Here · The Workflow · Your Toolkit · Build Something ·
   Cheat Sheets.
   ============================================================================ */

function VibeOverviewPage({ page }) {
  return (
    <article>
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
        <p className="text-sm font-semibold uppercase tracking-wide text-violet-400">Vibe Coding</p>
        <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-100">{page.title}</h2>
        {page.intro ? <p className="mt-2 text-base leading-relaxed tracking-wide text-slate-300">{page.intro}</p> : null}
      </div>
      <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/40 p-5 sm:p-6">
        {(page.blocks || []).map((b, i) => <PEBlock key={i} b={b} />)}
      </div>
    </article>
  );
}

function VibePage({ page, groupName }) {
  return (
    <article>
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
        <p className="text-sm font-semibold uppercase tracking-wide text-violet-400">{groupName}</p>
        <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-100">{page.title}</h2>
        {page.tagline ? <p className="mt-2 text-base leading-relaxed tracking-wide text-slate-200">{page.tagline}</p> : null}
        {page.intro ? <p className="mt-2 text-base leading-relaxed tracking-wide text-slate-400">{page.intro}</p> : null}
      </div>
      <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/40 p-5 sm:p-6">
        {(page.sections || []).map((s, i) => (
          <section key={i} className={i ? "mt-7" : ""}>
            <h3 className="mb-2 text-lg font-bold tracking-tight text-slate-100">{s.heading}</h3>
            {(s.paras || []).map((p, j) => <p key={j} className="mb-3 text-base leading-relaxed tracking-wide text-slate-300">{linkify(p)}</p>)}
            {s.bullets && s.bullets.length ? (
              <ul className="my-3 space-y-1.5">
                {s.bullets.map((it, j) => (
                  <li key={j} className="flex gap-2 text-base leading-relaxed tracking-wide text-slate-300"><CheckCircle2 size={15} className="mt-1 shrink-0 text-emerald-500/70" /> <span>{it}</span></li>
                ))}
              </ul>
            ) : null}
            {s.table && s.table.headers ? <KBTable headers={s.table.headers} rows={s.table.rows} /> : null}
            {s.prompt && s.prompt.text ? <TemplateBlock title={s.prompt.label} text={s.prompt.text} /> : null}
          </section>
        ))}
      </div>
      {page.keyTerms && page.keyTerms.length ? (
        <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/50 p-4">
          <p className="mb-2 flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-slate-400"><BadgeCheck size={15} /> Key terms</p>
          <dl className="space-y-1.5">
            {page.keyTerms.map((k, i) => (
              <div key={i} className="text-base leading-relaxed">
                <dt className="inline font-semibold text-violet-300">{k.term}</dt>
                <dd className="inline text-slate-400"> — {k.def}</dd>
              </div>
            ))}
          </dl>
        </div>
      ) : null}
      {page.tips && page.tips.length ? (
        <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
          <p className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-emerald-300"><Lightbulb size={16} /> Pro tips</p>
          <Bullets items={page.tips} marker={Lightbulb} tone="text-emerald-500/70" />
        </div>
      ) : null}
    </article>
  );
}

function VibeCoding({ sub, onSub }) {
  const activeId = (VIBE_OVERVIEW.some((p) => p.id === sub) || VIBE_PAGES.some((p) => p.id === sub)) ? sub : VIBE_OVERVIEW[0]?.id;
  const setActiveId = onSub;
  const topRef = useRef(null);
  useEffect(() => {
    if (topRef.current) topRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
  }, [activeId]);
  const ov = VIBE_OVERVIEW.find((p) => p.id === activeId);
  const pg = VIBE_PAGES.find((p) => p.id === activeId);
  const grp = pg ? VIBE_GROUPS.find((g) => g.id === pg.g) : null;
  const ovSection = (s) => VIBE_OVERVIEW.filter((p) => p.section === s);
  const byGroup = (g) => VIBE_PAGES.filter((p) => p.g === g);
  const group = (icon, name, items) =>
    items.length ? (
      <RailGroup icon={icon} name={name} tone="violet">
        {items.map((p) => <RailItem key={p.id} label={p.title} active={activeId === p.id} tone="violet" onClick={() => setActiveId(p.id)} />)}
      </RailGroup>
    ) : null;
  return (
    <div className="grid gap-6 lg:grid-cols-4">
      <aside role="navigation" aria-label="Vibe Coding" className="lg:col-span-1">
        <div className="sticky top-[123px] max-h-[calc(100vh-139px)] space-y-3 overflow-y-auto pr-1">
          <RailIntro title="Vibe Coding" desc="Build real software just by describing what you want — the workflow, the tools, and hands-on projects." />
          {group(<Sparkles size={13} />, "Start Here", ovSection("Start Here"))}
          {group(<Repeat size={13} />, "The Workflow", byGroup("W"))}
          {group(<Wrench size={13} />, "Your Toolkit", [...ovSection("Toolkit"), ...byGroup("T")])}
          {group(<Rocket size={13} />, "Build Something", byGroup("P"))}
          {group(<LayoutTemplate size={13} />, "Cheat Sheets", ovSection("Cheat Sheets"))}
          {!VIBE_PAGES.length ? <p className="px-1 pt-1 text-xs italic text-slate-500">Guides are being finalized…</p> : null}
        </div>
      </aside>
      <div className="lg:col-span-3">
        <div ref={topRef} className="scroll-mt-24">
          {ov ? <VibeOverviewPage page={ov} /> : pg ? <VibePage page={pg} groupName={grp?.name || ""} /> : null}
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   FRONTIER AI reader — foundation pages + company profiles + integration
   strategies + market literacy, from frontierAI.js. Rail: Start Here · The
   Frontier Giants · Challengers & Outliers · Using Them Well · Going Deeper.
   ============================================================================ */

const FRONTIER_ICONS = { Building2, Swords, Cloud, CircuitBoard };

function FrontierBlock({ b }) {
  switch (b.t) {
    case "h3":
      return <h3 className="mb-2 mt-7 text-lg font-bold tracking-tight text-slate-100">{b.text}</h3>;
    case "p":
      return <p className="mb-3 text-base leading-relaxed tracking-wide text-slate-300">{linkify(b.text)}</p>;
    case "table":
      return <KBTable headers={b.headers} rows={b.rows} />;
    case "callout":
      return <CalloutBox callout={b} />;
    case "bullets":
      return (
        <ul className="my-3 space-y-1.5">
          {(b.items || []).map((it, i) => (
            <li key={i} className="flex gap-2 text-base leading-relaxed tracking-wide text-slate-300">
              <CheckCircle2 size={15} className="mt-1 shrink-0 text-amber-500/70" /> <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    case "steps":
      return (
        <ol className="my-3 space-y-3">
          {(b.items || []).map((s, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-sm font-bold text-amber-300 ring-1 ring-amber-500/30">{i + 1}</span>
              <div>
                <p className="text-base font-semibold text-slate-100">{s.title}</p>
                <p className="text-base leading-relaxed tracking-wide text-slate-300">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      );
    case "compare":
      return (
        <div className="my-4 grid gap-3 md:grid-cols-2">
          {[b.left, b.right].map((col, ci) => (
            <div key={ci} className={`rounded-xl border p-4 ${ci === 0 ? "border-rose-500/25 bg-rose-500/[0.05]" : "border-emerald-500/25 bg-emerald-500/[0.05]"}`}>
              <p className={`mb-2 text-sm font-semibold uppercase tracking-wide ${ci === 0 ? "text-rose-300" : "text-emerald-300"}`}>{col?.title}</p>
              <ul className="space-y-1.5">
                {(col?.items || []).map((it, i) => (
                  <li key={i} className="text-base leading-relaxed tracking-wide text-slate-300">• {it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    case "fields":
      return (
        <dl className="my-4 divide-y divide-slate-800 overflow-hidden rounded-xl border border-slate-800 bg-slate-950/40">
          {(b.items || []).map((f, i) => (
            <div key={i} className="grid gap-1 p-3.5 sm:grid-cols-[10rem_1fr] sm:gap-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-amber-300">{f.label}</dt>
              <dd className="text-base leading-relaxed tracking-wide text-slate-300">{linkify(f.body)}</dd>
            </div>
          ))}
        </dl>
      );
    default:
      return null;
  }
}

function FrontierOverviewPage({ page }) {
  return (
    <article>
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-400">Frontier AI</p>
        <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-100">{page.title}</h2>
        {page.intro ? <p className="mt-2 text-base leading-relaxed tracking-wide text-slate-300">{page.intro}</p> : null}
      </div>
      <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/40 p-5 sm:p-6">
        {(page.blocks || []).map((b, i) => <FrontierBlock key={i} b={b} />)}
      </div>
    </article>
  );
}

function FrontierProfile({ company, catName }) {
  return (
    <article>
      <div className="rounded-xl border border-amber-500/20 bg-gradient-to-br from-amber-500/[0.06] to-slate-900/50 p-5">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-400">{catName}</p>
        <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-100">{company.title}</h2>
        {company.tagline ? <p className="mt-1 text-lg font-semibold text-amber-200/90">{company.tagline}</p> : null}
        {company.intro ? <p className="mt-2 text-base leading-relaxed tracking-wide text-slate-300">{company.intro}</p> : null}
      </div>
      <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/40 p-5 sm:p-6">
        {(company.blocks || []).map((b, i) => <FrontierBlock key={i} b={b} />)}
      </div>
    </article>
  );
}

/* ============================== AI Playground ============================= */

const PLAYGROUND_EXAMPLES = [
  "Explain how a rainbow forms, in simple terms.",
  "Write a short haiku about the ocean.",
  "Give me 3 surprising facts about octopuses.",
  "Explain what 'machine learning' means to a 10-year-old.",
];

const TOKEN_SAMPLES = [
  { label: "A rare word", text: "antidisestablishmentarianism" },
  { label: "Emoji", text: "I love AI 🤖🐙✨" },
  { label: "Code", text: "const sum = (a, b) => a + b;" },
  { label: "Numbers", text: "The year 2026 has 31,536,000 seconds." },
  { label: "Other languages", text: "Hola, ¿cómo estás? 你好世界" },
];

const TOKEN_CHIP_TONES = [
  "bg-rose-500/20 text-rose-100",
  "bg-indigo-500/20 text-indigo-100",
  "bg-cyan-500/20 text-cyan-100",
  "bg-amber-500/20 text-amber-100",
];

// cap how many token chips we render so a huge paste can't spawn tens of
// thousands of DOM nodes and freeze the tab (the count still reflects the total)
const TOKEN_RENDER_CAP = 400;

function tempLabel(t) {
  if (t <= 0.3) return { text: "Focused & predictable", tone: "text-cyan-300" };
  if (t <= 0.7) return { text: "Balanced", tone: "text-emerald-300" };
  if (t <= 1.1) return { text: "Creative", tone: "text-amber-300" };
  return { text: "Wild & unpredictable", tone: "text-rose-300" };
}

function ChatBubble({ role, content, busy }) {
  const isUser = role === "user";
  return (
    <div className={`flex gap-2.5 ${isUser ? "flex-row-reverse" : ""}`}>
      <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${isUser ? "bg-indigo-500/20 text-indigo-300" : "bg-rose-500/20 text-rose-300"}`}>
        {isUser ? <User size={15} /> : <Bot size={15} />}
      </div>
      <div className={`group relative max-w-[85%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed ${isUser ? "bg-indigo-500/15 text-slate-100" : "bg-slate-900 text-slate-200"}`}>
        {content ? (
          <span className="whitespace-pre-wrap">{content}</span>
        ) : busy ? (
          <span className="inline-flex items-center gap-1.5 text-slate-500"><Loader2 size={14} className="animate-spin" /> thinking…</span>
        ) : null}
        {!isUser && content && !busy && (
          <button onClick={() => navigator.clipboard?.writeText(content)} className="absolute -right-1 -top-1 hidden rounded-md border border-slate-700 bg-slate-950 p-1 text-slate-400 hover:text-white group-hover:block" title="Copy">
            <Copy size={12} />
          </button>
        )}
      </div>
    </div>
  );
}

function ChatPlayground() {
  const { engine, setShowOnboarding } = useEngine();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [system, setSystem] = useState("");
  const [showSystem, setShowSystem] = useState(false);
  const [temperature, setTemperature] = useState(0.7);
  const [maxTokens, setMaxTokens] = useState(256);
  const [busy, setBusy] = useState(false);
  const [stats, setStats] = useState(null);
  const abortRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, busy]);

  // abort any in-flight generation if the user leaves this page (unmount), so
  // the stream can't orphan itself and wedge the shared WebLLM engine.
  useEffect(() => () => { abortRef.current?.abort(); }, []);

  const isSim = engine.backend === "simulation";
  const info = ENGINE_INFO[engine.backend];

  const send = async (text) => {
    const content = (text ?? input).trim();
    if (!content || busy) return;
    setInput("");
    const history = [...messages, { role: "user", content }];
    setMessages([...history, { role: "assistant", content: "" }]);
    setBusy(true);
    setStats(null);
    const ctrl = new AbortController();
    abortRef.current = ctrl;
    const msgs = [];
    if (system.trim()) msgs.push({ role: "system", content: system.trim() });
    history.forEach((m) => msgs.push({ role: m.role, content: m.content }));
    try {
      const res = await engineChatStream(
        engine,
        { messages: msgs, options: { temperature, num_predict: maxTokens } },
        (delta) =>
          setMessages((cur) => {
            const copy = cur.slice();
            const last = copy[copy.length - 1];
            copy[copy.length - 1] = { role: "assistant", content: last.content + delta };
            return copy;
          }),
        ctrl.signal,
      );
      // On a user Stop, token/tps totals would be inaccurate (esp. simulation,
      // which returns the full count), so only report stats for a full run.
      if (!ctrl.signal.aborted) setStats({ tps: res.tps, evalTokens: res.evalTokens, promptTokens: res.promptTokens });
      setMessages((cur) => {
        const copy = cur.slice();
        const last = copy[copy.length - 1];
        if (last && last.role === "assistant" && !last.content) {
          if (res.text) copy[copy.length - 1] = { role: "assistant", content: res.text };
          else copy.pop(); // nothing was generated → drop the empty bubble
        }
        return copy;
      });
    } catch (e) {
      const aborted = ctrl.signal.aborted;
      setMessages((cur) => {
        const copy = cur.slice();
        const last = copy[copy.length - 1];
        if (last && last.role === "assistant" && !last.content) {
          if (aborted) copy.pop(); // intentional Stop, not an error → drop the empty bubble
          else copy[copy.length - 1] = { role: "assistant", content: `⚠ ${e?.message || "Generation failed."}` };
        }
        return copy;
      });
    } finally {
      setBusy(false);
      abortRef.current = null;
    }
  };

  const onKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const clear = () => {
    if (busy) return;
    setMessages([]);
    setStats(null);
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-bold tracking-tight text-slate-100">Chat Playground</h2>
        <p className="mt-1 text-base leading-relaxed text-slate-400">
          Have a real conversation with an AI model — then change how it thinks with the dials below. Everything runs on{" "}
          <b className="text-slate-300">your device</b>: nothing you type is sent to us or anyone else.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-800 bg-slate-950/60 px-4 py-3">
        <div className="flex items-center gap-2 text-sm">
          {isSim ? <FlaskConical size={16} className="text-amber-400" /> : engine.backend === "webllm" ? <Cpu size={16} className="text-rose-400" /> : <Server size={16} className="text-emerald-400" />}
          <span className="text-slate-400">Engine:</span>
          <span className="font-semibold text-slate-100">{info.label}</span>
          <span className="font-mono text-xs text-slate-500">{engine.model}</span>
        </div>
        <button onClick={() => setShowOnboarding(true)} className="inline-flex items-center gap-1.5 rounded-lg border border-rose-500/40 bg-rose-500/10 px-3 py-1.5 text-xs font-semibold text-rose-200 hover:bg-rose-500/20">
          <Settings size={13} /> {isSim ? "Load a real model" : "Change model"}
        </button>
      </div>
      {isSim && (
        <CalloutBox callout={{ tone: "amber", title: "You're on the Simulation engine", body: "Simulation is a rule-based mock so the playground works instantly with zero setup — but it isn't a real model. Click “Load a real model” above to run a genuine open model in your browser (WebGPU) or connect Ollama, then come back and feel the difference." }} />
      )}

      <div ref={scrollRef} className="max-h-[46vh] min-h-[220px] space-y-3 overflow-y-auto rounded-xl border border-slate-800 bg-slate-950/40 p-4">
        {messages.length === 0 ? (
          <div className="py-6 text-center">
            <Bot size={30} className="mx-auto mb-3 text-slate-600" />
            <p className="mb-3 text-sm text-slate-400">Start with an example, or type your own message below.</p>
            <div className="mx-auto flex max-w-xl flex-wrap justify-center gap-2">
              {PLAYGROUND_EXAMPLES.map((ex) => (
                <button key={ex} onClick={() => send(ex)} className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-slate-300 hover:border-rose-500 hover:text-white">
                  {ex}
                </button>
              ))}
            </div>
          </div>
        ) : (
          messages.map((m, i) => <ChatBubble key={i} role={m.role} content={m.content} busy={busy && i === messages.length - 1 && m.role === "assistant"} />)
        )}
      </div>

      {stats && !busy && (
        <p className="text-xs text-slate-500">
          Generated {stats.evalTokens} tokens{stats.tps ? ` · ~${stats.tps} tokens/sec` : ""}
          {stats.promptTokens ? ` · ${stats.promptTokens} prompt tokens` : ""}.{" "}
          {engine.backend === "webllm" ? "All on your GPU." : engine.backend === "ollama" ? "All on your machine." : "(simulated)"}
        </p>
      )}

      <div className="space-y-4 rounded-xl border border-slate-800 bg-slate-900/40 p-4">
        <div>
          <div className="mb-1 flex items-center justify-between">
            <label className="flex items-center gap-1.5 text-xs font-medium text-slate-200"><Thermometer size={14} className="text-rose-400" /> Temperature</label>
            <span className="text-sm">
              <span className="font-mono text-slate-300">{temperature.toFixed(2)}</span> <span className={tempLabel(temperature).tone}>· {tempLabel(temperature).text}</span>
            </span>
          </div>
          <input type="range" min="0" max="2" step="0.05" value={temperature} onChange={(e) => setTemperature(parseFloat(e.target.value))} className="w-full accent-rose-500" />
          <p className="mt-1 text-xs text-slate-500">Low = focused and repeatable. High = more surprising and creative — but also more likely to wander or make things up.</p>
        </div>
        <div>
          <div className="mb-1 flex items-center justify-between">
            <label className="flex items-center gap-1.5 text-xs font-medium text-slate-200"><SlidersHorizontal size={14} className="text-rose-400" /> Max response length</label>
            <span className="font-mono text-sm text-slate-300">{maxTokens} tokens</span>
          </div>
          <input type="range" min="32" max="1024" step="32" value={maxTokens} onChange={(e) => setMaxTokens(parseInt(e.target.value, 10))} className="w-full accent-rose-500" />
        </div>
        <div>
          <button onClick={() => setShowSystem((s) => !s)} className="text-xs font-medium text-rose-300 hover:text-rose-200">
            {showSystem ? "− Hide" : "+ Add"} a system prompt (sets the AI's role and rules)
          </button>
          {showSystem && (
            <textarea value={system} onChange={(e) => setSystem(e.target.value)} rows={2} placeholder="e.g. You are a patient tutor who explains things with simple analogies." className="mt-2 w-full resize-y rounded-lg border border-slate-700 bg-slate-950 p-2.5 text-sm text-slate-200 placeholder:text-slate-600 focus:border-rose-500 focus:outline-none" />
          )}
        </div>
      </div>

      <div className="flex items-end gap-2">
        <textarea value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={onKey} rows={2} placeholder="Type a message…  (Enter to send, Shift+Enter for a new line)" className="min-w-0 flex-1 resize-y rounded-lg border border-slate-700 bg-slate-950 p-3 text-sm text-slate-100 placeholder:text-slate-600 focus:border-rose-500 focus:outline-none" />
        <div className="flex flex-col gap-2">
          {busy ? (
            <button onClick={() => abortRef.current?.abort()} className="inline-flex items-center gap-1.5 rounded-lg bg-slate-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-600">
              <Square size={14} /> Stop
            </button>
          ) : (
            <button onClick={() => send()} disabled={!input.trim()} className="inline-flex items-center gap-1.5 rounded-lg bg-rose-600 px-4 py-2.5 text-sm font-semibold text-white enabled:hover:bg-rose-500 disabled:opacity-40">
              <Send size={14} /> Send
            </button>
          )}
          <button onClick={clear} disabled={busy || messages.length === 0} className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 px-4 py-2 text-xs font-medium text-slate-300 enabled:hover:border-slate-500 disabled:opacity-40">
            <Trash2 size={13} /> Clear
          </button>
        </div>
      </div>

      <CalloutBox callout={{ tone: "rose", title: "Try this experiment", body: "Ask the same question a few times at temperature 0.1, then again at 1.5. At low temperature the answers stay nearly identical; crank it up and they get wilder and less predictable. That single dial is one of the most important controls in all of generative AI." }} />
    </div>
  );
}

function TokenExplorer() {
  const [text, setText] = useState('Tokenization splits text into subword pieces — like "unbelievable". Notice how spaces attach to the next word, and rare words break apart. Try an emoji 🐙 or a number like 1234567.');
  const [enc, setEnc] = useState(null);
  const [failed, setFailed] = useState(false);
  const [tokens, setTokens] = useState(null);

  useEffect(() => {
    let alive = true;
    import("gpt-tokenizer")
      .then((m) => { if (alive) setEnc({ encode: m.encode, decode: m.decode }); })
      .catch(() => { if (alive) setFailed(true); });
    return () => { alive = false; };
  }, []);

  useEffect(() => {
    if (!enc) return;
    try {
      const ids = enc.encode(text);
      setTokens(ids.map((id) => ({ id, piece: enc.decode([id]) })));
    } catch {
      setTokens(null);
    }
  }, [enc, text]);

  const count = tokens ? tokens.length : estimateTokens(text);
  const chars = text.length;
  const ratio = count ? (chars / count).toFixed(1) : "0";

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-bold tracking-tight text-slate-100">Token Explorer</h2>
        <p className="mt-1 text-base leading-relaxed text-slate-400">
          A model never sees letters or whole words — it sees <b className="text-slate-300">tokens</b>: chunks of text, often
          pieces of words. Type below and watch your text split into the exact tokens a model would read.
        </p>
      </div>

      <CalloutBox callout={{ tone: "indigo", title: "Why tokens matter", body: "Tokens are the unit models count, bill, and budget in. “Context windows” and API prices are measured in tokens, not words. Common words are usually a single token, while rare words, names, and numbers get split into several — which is part of why they can trip models up." }} />

      <textarea value={text} onChange={(e) => setText(e.target.value)} rows={4} className="w-full resize-y rounded-lg border border-slate-700 bg-slate-950 p-3 text-sm text-slate-100 focus:border-rose-500 focus:outline-none" />

      <div className="flex flex-wrap gap-2 text-xs">
        {TOKEN_SAMPLES.map((s) => (
          <button key={s.label} onClick={() => setText(s.text)} className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-slate-300 hover:border-rose-500 hover:text-white">{s.label}</button>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 rounded-lg border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm">
        <span className="flex items-center gap-1.5"><Hash size={14} className="text-rose-400" /> <b className="text-slate-100">{count}</b> <span className="text-slate-400">tokens</span></span>
        <span className="flex items-center gap-1.5"><Type size={14} className="text-slate-400" /> <b className="text-slate-100">{chars}</b> <span className="text-slate-400">characters</span></span>
        <span className="text-slate-400">≈ <b className="text-slate-100">{ratio}</b> chars/token</span>
        {!enc && !failed && <span className="text-slate-500">loading tokenizer…</span>}
        {failed && <span className="text-amber-400">tokenizer unavailable — showing an estimate</span>}
      </div>

      {tokens && (
        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
          <div className="flex flex-wrap gap-1 font-mono text-sm leading-loose">
            {tokens.slice(0, TOKEN_RENDER_CAP).map((t, i) => {
              const disp = t.piece.replace(/\n/g, "↵").replace(/\t/g, "→");
              if (disp === "") {
                // byte-level BPE fragment of a multi-byte character (emoji/CJK) → decodes to ""
                return (
                  <span key={i} className="rounded bg-slate-700/40 px-1 py-0.5 text-slate-500" title={`token #${i + 1} · id ${t.id} · a byte-fragment of a multi-byte character`}>·</span>
                );
              }
              return (
                <span key={i} className={`rounded px-1 py-0.5 ${TOKEN_CHIP_TONES[i % TOKEN_CHIP_TONES.length]}`} style={{ whiteSpace: "pre" }} title={`token #${i + 1} · id ${t.id}`}>
                  {disp}
                </span>
              );
            })}
          </div>
          {tokens.length > TOKEN_RENDER_CAP && (
            <p className="mt-2 text-xs text-slate-500">Showing the first {TOKEN_RENDER_CAP} of {tokens.length} tokens.</p>
          )}
        </div>
      )}

      <CalloutBox callout={{ tone: "rose", title: "Representative, not exact", body: "This uses a widely-used GPT-style tokenizer as a clear example. Different model families split text a little differently, but the core idea — text becomes subword tokens, and spaces usually ride along with the next word — is universal." }} />
    </div>
  );
}

function PlaygroundAbout() {
  const gpu = webgpuSupported();
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-bold tracking-tight text-slate-100">How This Works</h2>
        <p className="mt-1 text-base leading-relaxed text-slate-400">
          The Playground lets you actually <i>use</i> AI — not just read about it — right here, with nothing sent to a
          server. You pick one of three engines from the model button in the header.
        </p>
      </div>

      <div className={`flex items-center gap-2 rounded-lg border px-4 py-3 text-sm ${gpu ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-200" : "border-amber-500/30 bg-amber-500/10 text-amber-200"}`}>
        {gpu ? <CheckCircle2 size={16} className="shrink-0" /> : <AlertTriangle size={16} className="shrink-0" />}
        {gpu ? "Your browser supports WebGPU — you can run a real model right in this tab." : "Your browser doesn't expose WebGPU. Use Chrome or Edge on a desktop/laptop to run a model in-browser, or use the Simulation engine (works everywhere)."}
      </div>

      {["simulation", "webllm", "ollama"].map((id) => {
        const info = ENGINE_INFO[id];
        const Icon = id === "ollama" ? Server : id === "webllm" ? Cpu : FlaskConical;
        return (
          <div key={id} className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
            <div className="mb-1 flex items-center gap-2">
              <Icon size={18} className="text-rose-400" />
              <h3 className="text-lg font-semibold text-slate-100">{info.label}</h3>
            </div>
            <p className="mb-2 text-sm text-slate-400">{info.tagline}</p>
            <ul className="space-y-1">
              {info.benefits.map((b, i) => <li key={`b${i}`} className="flex gap-2 text-sm text-slate-300"><CheckCircle2 size={15} className="mt-0.5 shrink-0 text-emerald-500" />{b}</li>)}
              {info.limits.map((l, i) => <li key={`l${i}`} className="flex gap-2 text-sm text-slate-400"><AlertTriangle size={15} className="mt-0.5 shrink-0 text-amber-500" />{l}</li>)}
            </ul>
          </div>
        );
      })}

      <CalloutBox callout={{ tone: "amber", title: "These small models can be wrong", body: "The in-browser models are tiny compared to cloud AI, so they make mistakes and sometimes make things up (that's called hallucination). That isn't a flaw to hide — noticing it is part of what you're here to learn. For a fuller local setup with bigger models, see the Experimentation Station." }} />
      <CalloutBox callout={{ tone: "emerald", title: "Your privacy", body: "This site has no account and no tracking. The Simulation and Ollama engines never touch the network. WebLLM does one initial model download from a public CDN, then runs fully offline in your browser — your prompts and chats never leave your device." }} />
    </div>
  );
}

function AIPlayground({ sub, onSub }) {
  const activeId = sub || "chat";
  const setActiveId = onSub;
  const topRef = useRef(null);
  useEffect(() => {
    if (topRef.current) topRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
  }, [activeId]);
  const PAGES = [
    { id: "chat", label: "Chat Playground" },
    { id: "tokens", label: "Token Explorer" },
    { id: "about", label: "How This Works" },
  ];
  return (
    <div className="grid gap-6 lg:grid-cols-4">
      <aside role="navigation" aria-label="AI Playground" className="lg:col-span-1">
        <div className="sticky top-[123px] max-h-[calc(100vh-139px)] space-y-3 overflow-y-auto pr-1">
          <RailIntro title="AI Playground" desc="Talk to a real AI model running in your own browser, tune how it thinks, and see how it reads your words — no install, no account, nothing sent to a server." />
          <RailGroup icon={<Bot size={13} />} name="Play & Explore" tone="rose">
            {PAGES.map((p) => (
              <RailItem key={p.id} label={p.label} active={activeId === p.id} tone="rose" onClick={() => setActiveId(p.id)} />
            ))}
          </RailGroup>
        </div>
      </aside>
      <div ref={topRef} className="lg:col-span-3">
        {activeId === "tokens" ? <TokenExplorer /> : activeId === "about" ? <PlaygroundAbout /> : <ChatPlayground />}
      </div>
    </div>
  );
}

function FrontierAI({ sub, onSub }) {
  const activeId = (FRONTIER_OVERVIEW.some((p) => p.id === sub) || FRONTIER_COMPANIES.some((c) => c.id === sub)) ? sub : FRONTIER_OVERVIEW[0]?.id;
  const setActiveId = onSub;
  const topRef = useRef(null);
  useEffect(() => {
    if (topRef.current) topRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
  }, [activeId]);
  const page = FRONTIER_OVERVIEW.find((p) => p.id === activeId);
  const company = FRONTIER_COMPANIES.find((c) => c.id === activeId);
  const cat = company ? FRONTIER_CATEGORIES.find((c) => c.id === company.cat) : null;
  const bySection = (s) => FRONTIER_OVERVIEW.filter((p) => p.section === s);
  const byCat = (id) => FRONTIER_COMPANIES.filter((c) => c.cat === id);
  const secGroup = (icon, name, pages) =>
    pages.length ? (
      <RailGroup icon={icon} name={name} tone="amber">
        {pages.map((p) => <RailItem key={p.id} label={p.title} active={activeId === p.id} tone="amber" onClick={() => setActiveId(p.id)} />)}
      </RailGroup>
    ) : null;
  return (
    <div className="grid gap-6 lg:grid-cols-4">
      <aside role="navigation" aria-label="Frontier AI" className="lg:col-span-1">
        <div className="sticky top-[123px] max-h-[calc(100vh-139px)] space-y-3 overflow-y-auto pr-1">
          <RailIntro title="Frontier AI" desc="The leading-edge models — plus the labs, cloud powers, and chips behind them. Who's who, when to use which, and how to read the hype." />
          {secGroup(<Compass size={13} />, "Start Here", bySection("Start Here"))}
          {FRONTIER_CATEGORIES.map((c) => {
            const lead = FRONTIER_OVERVIEW.filter((p) => p.cat === c.id);
            const items = byCat(c.id);
            if (!lead.length && !items.length) return null;
            const Icon = FRONTIER_ICONS[c.icon] || Building2;
            return (
              <RailGroup key={c.id} icon={<Icon size={13} />} name={c.name} tone="amber">
                {lead.map((p) => <RailItem key={p.id} label={p.title} active={p.id === activeId} tone="amber" onClick={() => setActiveId(p.id)} />)}
                {items.map((co) => <RailItem key={co.id} label={co.title} active={co.id === activeId} tone="amber" onClick={() => setActiveId(co.id)} />)}
              </RailGroup>
            );
          })}
          {secGroup(<Workflow size={13} />, "Using Them Well", bySection("Using Them Well"))}
          {secGroup(<Telescope size={13} />, "Going Deeper", bySection("Going Deeper"))}
        </div>
      </aside>
      <div className="lg:col-span-3">
        <div ref={topRef} className="scroll-mt-24">
          {page ? <FrontierOverviewPage page={page} /> : company ? <FrontierProfile company={company} catName={cat?.name || "Frontier AI"} /> : null}
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   TAB 3: Resource Hub & Education Centre.
   ============================================================================ */

const CATEGORY_ICON = { Foundational: GraduationCap, Engineering: Cpu, Data: Database, Security: Shield, Governance: Landmark, Business: Briefcase };
const CATEGORY_TONE = {
  Foundational: "text-indigo-300 ring-indigo-500/40 bg-indigo-500/10",
  Engineering: "text-cyan-300 ring-cyan-500/40 bg-cyan-500/10",
  Data: "text-sky-300 ring-sky-500/40 bg-sky-500/10",
  Security: "text-rose-300 ring-rose-500/40 bg-rose-500/10",
  Governance: "text-amber-300 ring-amber-500/40 bg-amber-500/10",
  Business: "text-violet-300 ring-violet-500/40 bg-violet-500/10",
};

function ResourcePage({ title, intro, children }) {
  return (
    <article>
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-400">Resource Hub</p>
        <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-100">{title}</h2>
        {intro ? <p className="mt-2 text-base leading-relaxed tracking-wide text-slate-300">{intro}</p> : null}
      </div>
      <div className="mt-4">{children}</div>
    </article>
  );
}

function CertExplorer() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const shown = CERTIFICATIONS.filter((c) => {
    if (filter !== "All" && c.category !== filter) return false;
    if (!q) return true;
    return `${c.name} ${c.vendor} ${c.code} ${c.audience}`.toLowerCase().includes(q);
  });
  return (
    <ResourcePage
      title="Certification Explorer"
      intro="A filterable catalog of current AI and machine-learning certifications — from free foundational literacy to advanced engineering, security, and governance credentials. Each card links to the official page; costs are approximate and worth confirming there before you enroll."
    >
      <div className="space-y-4">
        {/* search + filters */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-3.5">
          <div className="relative">
            <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, vendor, or exam code…"
              className="w-full rounded-lg border border-slate-700 bg-slate-950/60 py-2 pl-9 pr-3 text-base text-slate-200 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none"
            />
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-400"><Filter size={13} /> Filter</span>
            {["All", ...CERT_CATEGORIES].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-md px-2.5 py-1 text-sm font-medium ring-1 transition ${
                  filter === cat ? "bg-emerald-500/20 text-emerald-100 ring-emerald-500/50" : "bg-slate-800 text-slate-400 ring-slate-700 hover:text-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
            <span className="ml-auto text-sm text-slate-500">{shown.length} of {CERTIFICATIONS.length}</span>
          </div>
        </div>

        {/* cards — one per certification */}
        {shown.length ? (
          <div className="grid gap-4 md:grid-cols-2">
            {shown.map((c) => {
              const Icon = CATEGORY_ICON[c.category] || BadgeCheck;
              return (
                <div key={c.id} className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/50 p-4 transition hover:border-slate-700">
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <span className={`inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-xs font-semibold uppercase tracking-wide ring-1 ${CATEGORY_TONE[c.category] || CATEGORY_TONE.Foundational}`}>
                      <Icon size={12} /> {c.category}
                    </span>
                    <span className="rounded bg-slate-800 px-2 py-0.5 text-xs font-medium text-slate-400">{c.level}</span>
                  </div>
                  <h3 className="text-base font-bold leading-snug text-slate-100">{c.name}</h3>
                  <p className="mt-0.5 text-sm text-slate-400">{c.vendor}</p>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-400">
                    {c.code ? <span><span className="text-slate-500">Exam:</span> <span className="font-mono text-slate-300">{c.code}</span></span> : null}
                    <span><span className="text-slate-500">Cost:</span> {c.cost}</span>
                  </div>
                  <p className="mt-2.5 text-base leading-relaxed tracking-wide text-slate-300">{c.audience}</p>
                  <div className="mt-2.5">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">What it covers</p>
                    <ul className="space-y-0.5">
                      {c.focus.map((d, i) => (
                        <li key={i} className="flex gap-1.5 text-sm leading-snug text-slate-300">
                          <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-emerald-500/70" /> {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {c.note ? <p className="mt-2.5 text-sm italic leading-relaxed text-slate-500">{c.note}</p> : null}
                  <div className="mt-auto flex items-center justify-between gap-2 border-t border-slate-800 pt-2.5 mt-3">
                    <span className="min-w-0 truncate text-xs text-slate-500">Prereqs: {c.prereqs}</span>
                    <a href={c.url} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-emerald-300 hover:text-emerald-200">
                      Official page <ExternalLink size={13} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 text-center text-base text-slate-400">No certifications match your search.</p>
        )}
      </div>
    </ResourcePage>
  );
}

function GlossaryDesk() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const topRef = useRef(null);
  const q = query.trim().toLowerCase();
  const shown = GLOSSARY.filter((g) => {
    if (filter !== "All" && g.category !== filter) return false;
    if (!q) return true;
    return `${g.term} ${g.aliases.join(" ")} ${g.short} ${g.definition}`.toLowerCase().includes(q);
  });
  if (q) {
    // when a term is searched (or a "see also" jumps here), float the exact
    // term/alias match to the top so the clicked definition is the first card
    const isExact = (g) => g.term.toLowerCase() === q || g.aliases.some((a) => a.toLowerCase() === q);
    shown.sort((a, b) => (isExact(a) ? 0 : 1) - (isExact(b) ? 0 : 1));
  }
  const jump = (term) => {
    setFilter("All");
    setQuery(term);
    if (topRef.current) topRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };
  return (
    <ResourcePage
      title="AI Glossary"
      intro="Plain-language definitions for the AI terms you'll meet across this site and the wider world — from “token” and “temperature” to “RAG,” “fine-tuning,” and “alignment.” Search or filter by topic, and follow the “see also” links to related ideas."
    >
      <div ref={topRef} className="space-y-4 scroll-mt-24">
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-3.5">
          <div className="relative">
            <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search terms and definitions…"
              className="w-full rounded-lg border border-slate-700 bg-slate-950/60 py-2 pl-9 pr-3 text-base text-slate-200 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none"
            />
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-400"><Filter size={13} /> Topic</span>
            {["All", ...GLOSSARY_CATEGORIES].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-md px-2.5 py-1 text-sm font-medium ring-1 transition ${
                  filter === cat ? "bg-emerald-500/20 text-emerald-100 ring-emerald-500/50" : "bg-slate-800 text-slate-400 ring-slate-700 hover:text-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
            <span className="ml-auto text-sm text-slate-500">{shown.length} of {GLOSSARY.length}</span>
          </div>
        </div>

        {shown.length ? (
          <div className="space-y-3">
            {shown.map((g) => (
              <div key={g.id} className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <h3 className="text-base font-bold text-slate-100">{g.term}</h3>
                  {g.aliases.length ? <span className="text-xs text-slate-500">({g.aliases.join(", ")})</span> : null}
                  <span className="ml-auto shrink-0 rounded-md bg-slate-800 px-2 py-0.5 text-xs font-medium text-slate-400">{g.category}</span>
                </div>
                <p className="mt-1.5 text-base leading-relaxed tracking-wide text-slate-300">{g.definition}</p>
                {g.seeAlso.length ? (
                  <div className="mt-2 flex flex-wrap items-center gap-1.5 text-xs">
                    <span className="text-slate-500">See also:</span>
                    {g.seeAlso.map((s) => (
                      <button key={s} onClick={() => jump(s)} className="rounded-full border border-slate-700 px-2 py-0.5 text-slate-300 transition hover:border-emerald-500 hover:text-emerald-200">{s}</button>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        ) : (
          <p className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 text-center text-base text-slate-400">
            No terms match your search. <button onClick={() => { setQuery(""); setFilter("All"); }} className="text-emerald-300 hover:text-emerald-200">Clear filters</button>
          </p>
        )}
      </div>
    </ResourcePage>
  );
}

function SetupGuide({ onGoStation }) {
  return (
    <ResourcePage
      title="Local Lab Setup"
      intro="A sovereign AI station means running real models on your own machine — private, offline, and free, with no coding required. Below is the quick-start for each engine. When you want the full, click-by-click walkthrough, open its step-by-step lab in the Experimentation Station."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {SETUP_STEPS.map((s) => (
          <div key={s.id} className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/50 p-4">
            <div className="mb-1 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/30">
                <Server size={16} />
              </span>
              <div>
                <h3 className="text-base font-bold text-slate-100">{s.tool}</h3>
                <p className="text-xs uppercase tracking-wide text-slate-500">{s.role}</p>
              </div>
            </div>
            <p className="mt-2 text-base leading-relaxed tracking-wide text-slate-300">{s.what}</p>
            <ol className="mt-3 list-decimal space-y-1 pl-4 text-base leading-relaxed text-slate-300 marker:text-slate-500">
              {s.steps.map((st, i) => <li key={i} className="pl-1">{st}</li>)}
            </ol>
            <p className="mt-3 rounded-lg border border-slate-800 bg-slate-950/50 p-2.5 text-sm leading-relaxed text-slate-400">💡 {s.note}</p>
            {s.lab && onGoStation ? (
              <button
                onClick={() => onGoStation(s.lab)}
                className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-500/20"
              >
                Open the full step-by-step lab <ArrowRight size={14} />
              </button>
            ) : null}
          </div>
        ))}
      </div>
    </ResourcePage>
  );
}

function OSSDirectory({ onGoStation }) {
  return (
    <ResourcePage
      title="Open-Source Toolkit"
      intro="Every tool below is free and open (or free-to-use), runs locally, and covers one job in a private AI workflow — from generating text and transcribing speech to parsing documents and creating images. Each links to its official site, and where we have a full walkthrough, a one-click jump into the step-by-step setup lab."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {OSS_TOOLS.map((t) => (
          <div key={t.id} className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/50 p-3.5">
            <h3 className="flex items-center gap-1.5 text-base font-bold text-slate-100">
              <Package size={15} className="text-emerald-300" /> {t.name}
            </h3>
            <span className="mb-2 mt-1 w-fit rounded bg-slate-800 px-1.5 py-0.5 text-xs font-medium uppercase tracking-wide text-slate-400">{t.category}</span>
            <p className="flex-1 text-sm leading-relaxed tracking-wide text-slate-300">{t.desc}</p>
            <p className="mt-2 text-xs text-slate-500">License: <span className="font-mono text-emerald-400/90">{t.license}</span></p>
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t border-slate-800 pt-2">
              {t.url ? (
                <a href={t.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white">
                  Official site <ExternalLink size={12} />
                </a>
              ) : null}
              {t.lab && onGoStation ? (
                <button onClick={() => onGoStation(t.lab)} className="inline-flex items-center gap-1 text-sm font-medium text-emerald-300 hover:text-emerald-200">
                  Full setup lab <ArrowRight size={13} />
                </button>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </ResourcePage>
  );
}

function MediaDesk() {
  return (
    <ResourcePage
      title="Media Desk"
      intro="Hand-picked free videos, explainers, and courses that go deeper on the site's topics — click any card to open it."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {MEDIA.map((m) => {
          const isVideo = /Video|Lecture/i.test(m.type);
          return (
            <a
              key={m.id}
              href={m.url}
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/50 p-4 transition hover:border-emerald-500/50 hover:bg-slate-900"
            >
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-emerald-300 ring-1 ring-slate-700 group-hover:text-emerald-200">
                {isVideo ? <PlayCircle size={20} /> : <ExternalLink size={18} />}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-bold leading-snug text-slate-100 group-hover:text-white">{m.title}</h3>
                  <span className="rounded bg-slate-800 px-1.5 py-0.5 text-xs font-medium uppercase tracking-wide text-slate-400">{m.type}</span>
                </div>
                {m.creator ? <p className="mt-0.5 text-sm text-slate-500">{m.creator}</p> : null}
                <p className="mt-1.5 text-base leading-relaxed tracking-wide text-slate-300">{m.desc}</p>
                <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-emerald-400/90">
                  <span className="text-slate-500">Reinforces</span> {m.maps}
                  <ExternalLink size={14} className="ml-auto shrink-0 text-slate-600 transition group-hover:text-emerald-300" />
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </ResourcePage>
  );
}

function InfrastructureCentre({ sub, onSub, onGoStation }) {
  const PAGES = [
    { id: "certs", group: "Certifications", label: "Certification Explorer" },
    { id: "glossary", group: "Reference", label: "AI Glossary" },
    { id: "setup", group: "Build Your Own AI Lab", label: "Local Lab Setup" },
    { id: "oss", group: "Build Your Own AI Lab", label: "Open-Source Toolkit" },
    { id: "media", group: "Keep Learning", label: "Media Desk" },
  ];
  const GROUPS = [
    { name: "Certifications", icon: <BadgeCheck size={13} /> },
    { name: "Reference", icon: <BookMarked size={13} /> },
    { name: "Build Your Own AI Lab", icon: <Server size={13} /> },
    { name: "Keep Learning", icon: <PlayCircle size={13} /> },
  ];
  const activeId = PAGES.some((p) => p.id === sub) ? sub : "certs";
  const setActiveId = onSub;
  const topRef = useRef(null);
  useEffect(() => {
    if (topRef.current) topRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
  }, [activeId]);
  return (
    <div className="grid gap-6 lg:grid-cols-4">
      <aside role="navigation" aria-label="Resource Hub" className="lg:col-span-1">
        <div className="sticky top-[123px] max-h-[calc(100vh-139px)] space-y-3 overflow-y-auto pr-1">
          <RailIntro title="Resource Hub" desc="A certification explorer, a plain-language AI glossary, a build-your-own-lab guide, an open-source toolkit, and a curated media desk." />
          {GROUPS.map((g) => (
            <RailGroup key={g.name} icon={g.icon} name={g.name} tone="emerald">
              {PAGES.filter((p) => p.group === g.name).map((p) => (
                <RailItem key={p.id} label={p.label} active={p.id === activeId} tone="emerald" onClick={() => setActiveId(p.id)} />
              ))}
            </RailGroup>
          ))}
        </div>
      </aside>
      <div className="lg:col-span-3">
        <div ref={topRef} className="scroll-mt-24">
          {activeId === "certs" ? <CertExplorer /> : null}
          {activeId === "glossary" ? <GlossaryDesk /> : null}
          {activeId === "setup" ? <SetupGuide onGoStation={onGoStation} /> : null}
          {activeId === "oss" ? <OSSDirectory onGoStation={onGoStation} /> : null}
          {activeId === "media" ? <MediaDesk /> : null}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------- Top tab bar ------------------------------ */

const TOP_TABS = [
  { id: "home", label: "Home", icon: Home },
  { id: "core", label: "Knowledge Base", icon: BookOpen },
  { id: "frontier", label: "Frontier AI", icon: Radar },
  { id: "prompt", label: "Prompt Engineering", icon: Sparkles },
  { id: "play", label: "AI Playground", icon: Bot },
  { id: "ops", label: "Operationalizing AI", icon: Rocket },
  { id: "vibe", label: "Vibe Coding", icon: Code2 },
  { id: "aies", label: "Experimentation Station", icon: Cpu },
  { id: "infra", label: "Resource Hub", icon: Server },
  { id: "labs", label: "Interactive Labs", icon: FlaskConical },
];

function TabBar({ active, onSelect }) {
  return (
    <div className="border-b border-slate-700/60 bg-slate-900/95 shadow-lg shadow-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-[1500px] gap-1.5 overflow-x-auto px-4 py-2">
        {TOP_TABS.map((t) => {
          const on = active === t.id;
          return (
            <button
              key={t.id}
              onClick={() => onSelect(t.id)}
              className={`flex items-center gap-2 whitespace-nowrap rounded-lg px-3.5 py-2 text-sm font-semibold transition ${
                on
                  ? "bg-indigo-500/25 text-white ring-1 ring-inset ring-indigo-400/60 shadow-sm shadow-indigo-950/50"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <t.icon size={16} className={on ? "text-indigo-300" : "text-slate-400"} /> {t.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Header({ onSettings, onProgress, onHome }) {
  return (
    <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1500px] flex-wrap items-center justify-between gap-3 px-5 py-3">
        <button onClick={onHome} className="flex items-center gap-3 rounded-lg text-left transition hover:opacity-80" aria-label="Go to home">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-300 ring-1 ring-indigo-500/30">
            <Sparkles size={24} />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-slate-100">OpenSource AI Learning Lab</h1>
            <p className="text-xs text-slate-400">Learn AI by doing: run it, break it, govern it.</p>
          </div>
        </button>
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={onProgress}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-medium text-slate-200 hover:border-indigo-500"
          >
            <Trophy size={14} className="text-amber-400" /> Progress
          </button>
          <EngineStatusChip onClick={onSettings} />
          <div className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2">
            <ShieldCheck size={14} className="text-emerald-400" />
            <span className="text-xs font-medium text-emerald-300">Local-first · no cloud</span>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ------------------------------- Sidebar ---------------------------------- */

function Sidebar({ active, onSelect, progress }) {
  const [open, setOpen] = useState(() => Object.fromEntries(MODULES.map((m) => [m.id, true])));
  return (
    <aside className="w-full shrink-0 lg:w-1/3">
      <div className="space-y-3">
        {MODULES.map((mod) => {
          const ids = MISSION_IDS.filter((id) => MISSIONS[id].module === mod.id);
          if (!ids.length) return null;
          const isOpen = open[mod.id];
          return (
            <div key={mod.id} className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60">
              <button
                onClick={() => setOpen((o) => ({ ...o, [mod.id]: !o[mod.id] }))}
                className="flex w-full items-center justify-between px-4 py-3 hover:bg-slate-800/40"
              >
                <span className="flex items-center gap-2.5">
                  <span className="rounded-lg bg-indigo-500/10 p-1.5 text-indigo-300 ring-1 ring-indigo-500/30">
                    <mod.icon size={16} />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wide text-slate-100">{mod.title}</span>
                </span>
                {isOpen ? <ChevronDown size={16} className="text-slate-500" /> : <ChevronRight size={16} className="text-slate-500" />}
              </button>
              {isOpen ? (
                <div className="space-y-1 border-t border-slate-800 p-2">
                  {ids.map((id) => {
                    const m = MISSIONS[id];
                    const Icon = ICONS[m.icon] || Circle;
                    const cleared = (progress[id]?.cleared || []).length;
                    const done = cleared === m.tiers.length;
                    const isActive = active === id;
                    return (
                      <button
                        key={id}
                        onClick={() => onSelect(id)}
                        className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition ${
                          isActive ? "bg-indigo-500/15 text-indigo-200 ring-1 ring-indigo-500/40" : "text-slate-300 hover:bg-slate-800/60"
                        }`}
                      >
                        <Icon size={15} className={isActive ? "text-indigo-300" : "text-slate-500"} />
                        <span className="flex-1">{m.title}</span>
                        {done ? (
                          <Trophy size={14} className="text-amber-400" />
                        ) : (
                          <span className="font-mono text-[10px] text-slate-600">{cleared}/{m.tiers.length}</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </aside>
  );
}

/* --------------------------- Progress dashboard --------------------------- */

function ProgressModal({ onClose, progress, onReset }) {
  const totalTiers = MISSION_IDS.reduce((n, id) => n + MISSIONS[id].tiers.length, 0);
  const done = MISSION_IDS.reduce((n, id) => n + (progress[id]?.cleared || []).length, 0);
  const pct = Math.round((done / totalTiers) * 100);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
          <div className="flex items-center gap-2">
            <Trophy size={18} className="text-amber-400" />
            <h3 className="text-base font-bold text-slate-100">Lab Progress</h3>
          </div>
          <button onClick={onClose} className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800"><X size={18} /></button>
        </div>
        <div className="space-y-4 p-6">
          <div>
            <div className="mb-1 flex items-center justify-between text-sm">
              <span className="text-slate-300">Overall completion</span>
              <span className="font-mono font-bold text-emerald-300">{done}/{totalTiers} tiers</span>
            </div>
            <Bar value={pct} tone="emerald" />
          </div>
          <div className="space-y-2">
            {MISSION_IDS.map((id) => {
              const m = MISSIONS[id];
              const c = (progress[id]?.cleared || []).length;
              return (
                <div key={id} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm">
                  <span className="text-slate-300">{m.title}</span>
                  <span className="flex items-center gap-1">
                    {m.tiers.map((t) => (
                      <span
                        key={t.level}
                        className={`h-2.5 w-2.5 rounded-full ${(progress[id]?.cleared || []).includes(t.level) ? "bg-emerald-500" : "bg-slate-700"}`}
                        title={`L${t.level}`}
                      />
                    ))}
                    <span className="ml-1 font-mono text-[11px] text-slate-500">{c}/{m.tiers.length}</span>
                  </span>
                </div>
              );
            })}
          </div>
          <div className="flex justify-end">
            <Btn onClick={onReset} variant="ghost" icon={RotateCcw} size="sm">Reset progress</Btn>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------- App ----------------------------------- */

/* ============================================================================
   HOME — the landing page. A single scrollable page (no rail): mission, what
   this is / isn't, who it's for, a clickable section directory, how to navigate,
   an interactive "what can my computer run?" check, and an open-source callout.
   ============================================================================ */

const HOME_DIRECTORY = [
  { id: "core", icon: BookOpen, name: "Knowledge Base", blurb: "How AI actually works, in plain language — from what a model is, to how it's trained, used, and governed." },
  { id: "frontier", icon: Radar, name: "Frontier AI", blurb: "Meet the leading-edge models and the whole stack behind them — the labs, the cloud powers, and the chip makers. Who's who, when to use which, and how to read the hype." },
  { id: "prompt", icon: Sparkles, name: "Prompt Engineering", blurb: "Stop settling for mediocre answers. The formulas and techniques that steer AI to exactly what you want." },
  { id: "play", icon: Bot, name: "AI Playground", blurb: "Actually use AI right here — chat with a real model running in your browser, turn the dials, and watch how it reads your words." },
  { id: "vibe", icon: Code2, name: "Vibe Coding", blurb: "Build real, working software just by describing it in plain English — no coding background required." },
  { id: "ops", icon: Rocket, name: "Operationalizing AI", blurb: "Turn AI into real daily workflows: automate the tedious, analyze at scale, and decide with data." },
  { id: "aies", icon: Cpu, name: "Experimentation Station", blurb: "Set up your own private AI lab — run genuine open models on your own machine, offline and free." },
  { id: "infra", icon: Server, name: "Resource Hub", blurb: "A certification explorer, local-setup guides, an open-source toolkit, and a curated media desk." },
  { id: "labs", icon: FlaskConical, name: "Interactive Labs", blurb: "Hands-on drills where you steer a live AI system, tweak the dials, and learn by doing." },
];

const HOME_TIERS = {
  "8": { label: "8 GB RAM", sub: "A standard laptop", items: ["In-browser (WebGPU) model tests — zero install", "Small, snappy 3B-parameter models (Gemma, Phi)", "Local speech-to-text (Whisper)", "Prompt engineering and lighter vibe coding"] },
  "16": { label: "16–24 GB RAM", sub: "An M-series Mac or a solid PC", items: ["“Chat with your documents” (AnythingLLM / RAG)", "Capable 8B–14B local models", "Intermediate vibe coding and simple agents", "Comfortably runs most of this lab"] },
  "32": { label: "32 GB+ RAM", sub: "A power station", items: ["Autonomous multi-agent workflows", "Heavy visual generation (ComfyUI)", "Large models with big context windows", "Everything here, comfortably"] },
};

function HardwareEstimator() {
  const [tier, setTier] = useState("16");
  const t = HOME_TIERS[tier];
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 sm:p-6">
      <h3 className="flex items-center gap-2 text-lg font-bold tracking-tight text-slate-100"><Cpu size={18} className="text-cyan-300" /> What can my computer run?</h3>
      <p className="mt-1 text-base leading-relaxed tracking-wide text-slate-400">Pick your memory to see what's realistic. (Not sure? On Windows it's “Memory” in Task Manager; on a Mac it's under  → About This Mac.)</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {Object.entries(HOME_TIERS).map(([k, v]) => (
          <button
            key={k}
            onClick={() => setTier(k)}
            className={`rounded-lg border px-3.5 py-2 text-sm font-semibold transition ${
              tier === k ? "border-cyan-400/60 bg-cyan-500/20 text-white ring-1 ring-inset ring-cyan-400/50" : "border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500 hover:text-white"
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>
      <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/50 p-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-cyan-300">{t.label} <span className="text-slate-500 normal-case">· {t.sub}</span></p>
        <ul className="mt-2 space-y-1.5">
          {t.items.map((it, i) => (
            <li key={i} className="flex gap-2 text-base leading-relaxed tracking-wide text-slate-300"><CheckCircle2 size={15} className="mt-1 shrink-0 text-emerald-500/70" /> <span>{it}</span></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function HomePage({ onNavigate }) {
  const IS_NOT = [
    "A coding bootcamp — you won't be memorizing Python or JavaScript syntax.",
    "A pile of cloud wrappers with a monthly bill and your data on someone else's servers.",
    "Dense academic theory or filler no one actually uses.",
    "A product that tracks you, shows ads, or upsells you.",
  ];
  const IS = [
    "A hands-on studio for directing AI in structured, plain English.",
    "A blueprint for private, local-first tools that keep your data on your own machine.",
    "Concrete, do-it-now setup guides — most you can finish in under ten minutes.",
    "A genuinely free, open, no-strings educational resource.",
  ];
  const PERSONAS = [
    { icon: Briefcase, title: "The professional", body: "Analysts, operations leads, and marketers who want to automate heavy workloads without hiring a developer." },
    { icon: ShieldCheck, title: "The privacy-conscious student & researcher", body: "People handling sensitive data or unpublished work that simply cannot be pasted into a public cloud." },
    { icon: Boxes, title: "The curious builder", body: "Tinkerers and hobbyists ready to break out of the browser chatbox and run real AI infrastructure themselves." },
  ];
  const STEPS = [
    { title: "Check your machine first", detail: "Every setup page lists the memory it needs. Use the “What can my computer run?” check below to see what your laptop can handle before you dive in." },
    { title: "Read the “why” before the “how”", detail: "Every guide follows the same shape — what it is, why it matters, resources, then step-by-step. Understand the value first; then run the steps." },
    { title: "Keep it side-by-side", detail: "Put this site on half your screen and your terminal, editor, or AI tool on the other half. Treat each page as a live workspace drill, not a passive read." },
  ];
  return (
    <div className="mx-auto max-w-5xl space-y-12 py-2">
      {/* hero */}
      <section className="rounded-2xl border border-slate-800 bg-gradient-to-b from-indigo-500/[0.08] to-slate-900/40 p-6 sm:p-8">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/40 bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-200">
          <Sparkles size={13} /> Free · Open-source · Local-first
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">Learn AI by doing.<br className="hidden sm:block" /> Run it, build with it, own it.</h1>
        <p className="mt-3 max-w-3xl text-lg leading-relaxed tracking-wide text-slate-300">
          The OpenSource AI Learning Lab is a free, open engineering sandbox where you learn modern AI hands-on — understand how models really work, write prompts that actually deliver, build software just by describing it, and stand up your own private AI systems on your own machine.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {["100% free", "No account needed", "No tracking, no cookies", "No ads, ever", "Open-source", "Runs on your machine"].map((c) => (
            <span key={c} className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-200"><CheckCircle2 size={12} /> {c}</span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <button onClick={() => onNavigate("core")} className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-950/40 transition hover:bg-indigo-500">
            Start with the Knowledge Base <ArrowRight size={16} />
          </button>
          <button onClick={() => onNavigate("vibe")} className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-indigo-500 hover:text-white">
            <Code2 size={16} /> Jump into Vibe Coding
          </button>
        </div>
      </section>

      {/* the new definition of hirable */}
      <section className="rounded-2xl border border-indigo-500/25 bg-gradient-to-br from-indigo-500/[0.10] via-slate-900/40 to-slate-900/50 p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-300/90">The new definition of <span className="text-sky-300">hirable</span></p>
        <p className="mt-3 text-2xl font-bold leading-snug tracking-tight text-slate-100 sm:text-[2rem]">
          <span className="bg-gradient-to-r from-sky-300 to-indigo-300 bg-clip-text text-transparent">Hirable</span>: the ability to do work that <span className="font-extrabold text-sky-300">neither</span> a human nor <span className="font-extrabold text-sky-300">AI</span> can do alone.
        </p>
        <div className="mt-5 flex items-start gap-3 rounded-xl border border-slate-700/60 bg-slate-950/50 p-4">
          <BrainCircuit size={22} className="mt-0.5 shrink-0 text-sky-300" />
          <p className="text-base leading-relaxed tracking-wide text-slate-200 sm:text-lg">
            <span className="font-semibold text-sky-300">The translation for hireability:</span> you are not competing with AI. You are competing with other humans who use AI. <span className="font-semibold text-sky-300">The one with the better process wins.</span>
          </p>
        </div>
      </section>

      {/* what it is / isn't */}
      <section>
        <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-100">What this is — and what it isn't</h2>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-rose-500/25 bg-rose-500/[0.05] p-5">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-rose-300">What it's not</p>
            <ul className="space-y-2">
              {IS_NOT.map((it, i) => (
                <li key={i} className="flex gap-2 text-base leading-relaxed tracking-wide text-slate-300"><X size={16} className="mt-1 shrink-0 text-rose-400/80" /> <span>{it}</span></li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/[0.05] p-5">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-emerald-300">What it is</p>
            <ul className="space-y-2">
              {IS.map((it, i) => (
                <li key={i} className="flex gap-2 text-base leading-relaxed tracking-wide text-slate-300"><CheckCircle2 size={16} className="mt-1 shrink-0 text-emerald-400/80" /> <span>{it}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* who it's for */}
      <section>
        <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-100">Who it's built for</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {PERSONAS.map((p) => (
            <div key={p.title} className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-300 ring-1 ring-indigo-500/30"><p.icon size={18} /></span>
              <h3 className="mt-3 text-base font-bold text-slate-100">{p.title}</h3>
              <p className="mt-1 text-base leading-relaxed tracking-wide text-slate-400">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* section directory */}
      <section>
        <h2 className="mb-1 text-2xl font-bold tracking-tight text-slate-100">Your map of the lab</h2>
        <p className="mb-3 text-base leading-relaxed tracking-wide text-slate-400">Seven sections, roughly in learning order. Click any one to jump straight in.</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {HOME_DIRECTORY.map((s, i) => (
            <button key={s.id} onClick={() => onNavigate(s.id)} className="group flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-left transition hover:border-indigo-500/60 hover:bg-slate-900">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-300 ring-1 ring-indigo-500/30"><s.icon size={18} /></span>
              <div className="min-w-0">
                <p className="flex items-center gap-1.5 text-base font-bold text-slate-100">
                  <span className="text-slate-500">{i + 1}.</span> {s.name}
                  <ArrowRight size={14} className="text-slate-600 transition group-hover:translate-x-0.5 group-hover:text-indigo-300" />
                </p>
                <p className="mt-0.5 text-base leading-relaxed tracking-wide text-slate-400">{s.blurb}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* how to navigate + hardware check */}
      <section className="grid gap-4 lg:grid-cols-2">
        <div>
          <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-100">How to use this site</h2>
          <ol className="space-y-3">
            {STEPS.map((s, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-500/15 text-sm font-bold text-indigo-300 ring-1 ring-indigo-500/30">{i + 1}</span>
                <div>
                  <p className="text-base font-semibold text-slate-100">{s.title}</p>
                  <p className="text-base leading-relaxed tracking-wide text-slate-300">{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-4 flex items-start gap-2.5 rounded-lg border border-amber-500/30 bg-amber-500/[0.06] p-3.5">
            <Monitor size={17} className="mt-0.5 shrink-0 text-amber-300" />
            <p className="text-base leading-relaxed tracking-wide text-slate-300">
              <span className="font-semibold text-amber-200">Best on a computer, in Chrome.</span> This site is built for a desktop or laptop using Google Chrome. The interactive labs and some layouts rely on a larger screen and Chrome's features, so a phone, tablet, or other browser may not display or run everything correctly.
            </p>
          </div>
        </div>
        <HardwareEstimator />
      </section>

      {/* open-source callout */}
      <section className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-slate-200 ring-1 ring-slate-700"><Github size={22} /></span>
            <div>
              <h3 className="text-lg font-bold text-slate-100">Open-source, all the way down</h3>
              <p className="mt-1 max-w-2xl text-base leading-relaxed tracking-wide text-slate-400">Every page, lab, and dataset here is transparently version-controlled on GitHub. Spot a bug, an outdated command, or a way to make a guide clearer? Pull requests and ideas are genuinely welcome.</p>
            </div>
          </div>
          <a href="https://github.com/rizwan-virani/ai-academy" target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-slate-600 bg-slate-800 px-4 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-indigo-500 hover:text-white">
            <Github size={16} /> View on GitHub <ExternalLink size={13} />
          </a>
        </div>
      </section>

      <p className="pb-2 text-center text-sm text-slate-500">Built by Rizwan Virani · An open, independent educational resource.</p>
    </div>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full border border-indigo-400/40 bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-xl shadow-indigo-950/50 transition-all duration-200 hover:bg-indigo-500 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp size={18} /> Top
    </button>
  );
}

function Shell() {
  const { showOnboarding, setShowOnboarding } = useEngine();
  // Navigation is synced with the browser's history so Back/Forward move through
  // where you've been on the site — both between sections (the "tab") and between
  // pages within a section (the "sub"). The URL hash reads #tab or #tab/sub, so
  // every page is also directly linkable and bookmarkable.
  const routeFromHash = () => {
    const raw = (typeof window !== "undefined" ? window.location.hash : "").replace(/^#\/?/, "");
    const i = raw.indexOf("/");
    const t = i === -1 ? raw : raw.slice(0, i);
    // guard decode: a malformed percent-sequence (e.g. #core/%zz from a mangled
    // copy-pasted link) must not throw during the useState initializer and crash
    let s = null;
    if (i !== -1) {
      const rawSub = raw.slice(i + 1);
      try { s = decodeURIComponent(rawSub) || null; } catch { s = rawSub || null; }
    }
    return { tab: TOP_TABS.some((x) => x.id === t) ? t : "home", sub: s };
  };
  const [route, setRoute] = useState(routeFromHash);
  const { tab, sub } = route;
  const nav = (t, s = null) => {
    const cur = routeFromHash();
    if (typeof window !== "undefined" && (cur.tab !== t || cur.sub !== s)) {
      window.history.pushState({ tab: t, sub: s }, "", "#" + t + (s ? "/" + encodeURIComponent(s) : ""));
      window.scrollTo(0, 0);
    }
    setRoute({ tab: t, sub: s });
  };
  const setTab = (t) => nav(t, null); // switching sections resets to that section's start
  const setSub = (s) => nav(tab, s); // move within the current section
  const goStation = (labId) => nav("aies", labId || null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    // stamp the current entry so the first Back returns here rather than leaving
    window.history.replaceState({ tab, sub }, "");
    const onPop = (e) => {
      const r = e.state && "tab" in e.state ? { tab: e.state.tab, sub: e.state.sub ?? null } : routeFromHash();
      setRoute({ tab: TOP_TABS.some((x) => x.id === r.tab) ? r.tab : "home", sub: r.sub || null });
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const [progress, setProgress] = useState(() => loadProgress());
  const [showProgress, setShowProgress] = useState(false);

  const onPass = (missionId, level) => {
    setProgress((prev) => {
      const cur = prev[missionId]?.cleared || [];
      if (cur.includes(level)) return prev;
      const next = { ...prev, [missionId]: { cleared: [...cur, level].sort() } };
      saveProgress(next);
      return next;
    });
  };

  const resetProgress = () => {
    setProgress({});
    saveProgress({});
    setShowProgress(false);
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-950">
      <div className="sticky top-0 z-40">
        <Header onSettings={() => setShowOnboarding(true)} onProgress={() => setShowProgress(true)} onHome={() => setTab("home")} />
        <TabBar active={tab} onSelect={setTab} />
      </div>

      <div className="mx-auto w-full max-w-[1500px] flex-1 px-5 py-5">
        {tab === "home" ? (
          <HomePage onNavigate={setTab} />
        ) : tab === "labs" ? (
          <div className="flex flex-col gap-5 lg:flex-row">
            <Sidebar active={sub || MISSION_IDS[0]} onSelect={setSub} progress={progress} />
            <main className="min-w-0 flex-1">
              <LabView missionId={sub || MISSION_IDS[0]} progress={progress} onPass={onPass} />
            </main>
          </div>
        ) : tab === "core" ? (
          <KnowledgeReader book={KNOWLEDGE_BASE} sub={sub} onSub={setSub} />
        ) : tab === "frontier" ? (
          <FrontierAI sub={sub} onSub={setSub} />
        ) : tab === "prompt" ? (
          <PromptEngineering sub={sub} onSub={setSub} />
        ) : tab === "play" ? (
          <AIPlayground sub={sub} onSub={setSub} />
        ) : tab === "ops" ? (
          <OperationalizingReader sub={sub} onSub={setSub} onGoStation={goStation} />
        ) : tab === "vibe" ? (
          <VibeCoding sub={sub} onSub={setSub} />
        ) : tab === "aies" ? (
          <ExperimentationStation sub={sub} onSub={setSub} />
        ) : tab === "infra" ? (
          <InfrastructureCentre sub={sub} onSub={setSub} onGoStation={goStation} />
        ) : null}
      </div>

      {/* disclaimer footer */}
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-[1500px] px-5 py-8 text-xs leading-relaxed text-slate-500">
          <p>
            <b className="text-slate-400">OpenSource AI Learning Lab</b> · A free, open, hands-on hub for learning
            modern AI end to end — how models actually work, prompt engineering, vibe coding, putting AI to work in
            real workflows, and running your own private models locally. Designed and authored by Rizwan Virani.
          </p>
          <p className="mt-4">
            This is my personal website and an independent educational resource. All views, content, and materials here
            are entirely my own. They do not represent the views, positions, endorsements, or policies of my employer or
            of any other person, organization, or institution.
          </p>
          <p className="mt-4">
            When connected to Ollama or WebLLM, this app runs <b>real open-source models locally</b>, on your own
            machine or in your browser via WebGPU, with no cloud inference; the simulation engine is a rule-based
            teaching mock. WebLLM performs a one-time model download from a public CDN; Ollama and simulation transmit
            nothing. Outputs are for learning and must not be relied on as professional, legal, medical, financial, or
            security advice. Not affiliated with, endorsed by, or sponsored by Meta, Mistral AI, Google, Ollama, or any
            other vendor; "Llama," "Mistral," "Gemma," "Phi," "Qwen," "Ollama," and "WebLLM" are trademarks of their
            respective owners, used only to identify the technologies this coursework teaches about.
          </p>
          <p className="mt-4">
            This site was designed and engineered with development assistance from Anthropic's large language model.
          </p>
          <div className="mt-5 border-t border-slate-800 pt-4">
            This work is licensed under a{" "}
            <a
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300"
            >
              Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
            </a>
            .<br />© 2026 Rizwan Virani. Some rights reserved.
          </div>
        </div>
      </footer>

      {showOnboarding ? (
        <EngineChooser firstRun={!localStorageHasEngine()} onClose={() => setShowOnboarding(false)} />
      ) : null}
      {showProgress ? (
        <ProgressModal onClose={() => setShowProgress(false)} progress={progress} onReset={resetProgress} />
      ) : null}
      <BackToTop />
    </div>
  );
}

function localStorageHasEngine() {
  try {
    return !!localStorage.getItem(STORAGE_ENGINE);
  } catch {
    return false;
  }
}

export default function App() {
  return (
    <EngineProvider>
      <Shell />
    </EngineProvider>
  );
}
