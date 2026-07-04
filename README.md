# opensource ai learning lab

**A free, open-source hub for learning modern AI by doing — run it, prompt it, build with it, and own it.**
A single home base that pairs deep written guides — how models work, prompt engineering, vibe coding, operationalizing AI, and standing up your own private local models — with dozens of hands-on interactive labs, all driven by real (or simulated) open-source models on your own machine.

> Designed and authored by **Rizwan Virani.**

---

## What this is

A free, open, hands-on hub for learning modern AI end to end. It spans an encyclopedic knowledge base (how large language models work, the model landscape, and the limits and risks of AI), a full prompt-engineering manual, a guide to operationalizing AI in real workflows, a beginner-to-builder Vibe Coding course (build software just by describing it), an Experimentation Station for setting up your own private local-AI stack, a resource hub of certifications and tools, and dozens of interactive labs where you drive real (or simulated) open-source models. It is completely free, requires no account, and can run entirely on your own computer with no data leaving the machine.

## What this is not

- **Not** a connection to a hosted AI service or a proprietary model. It runs open-source models locally — via Ollama or an in-browser WebGPU engine — or a built-in rule-based simulation. **No cloud, no API keys, no accounts.**
- **Not** an official product of, and not affiliated with, endorsed by, or sponsored by Meta, Mistral AI, Google, Ollama, or any other vendor. Their names are used only to identify the open technologies this coursework teaches about.
- **Not** a source of professional, legal, medical, financial, or security advice. Outputs are for learning — the exercises teach judgment, not answers to trust blindly.

---

## At a glance

| | |
| --- | --- |
| **Type** | An end-to-end, hands-on AI learning hub |
| **Audience** | Students, professionals, and curious builders — no experience assumed |
| **Cost** | Free and open-source |
| **Accounts** | None — progress is stored locally in your browser |
| **AI engines** | Ollama or in-browser WebLLM (real local models), or a built-in simulation |
| **Privacy** | Local-first — no cloud inference, nothing transmitted |

## What's inside

| Tab | What you get |
| --- | --- |
| **Home** | An orientation map: what this is, who it's for, a directory of every section, and an interactive “what can my computer run?” check. |
| **Knowledge Base** | An encyclopedic, plain-language reader on how AI works — from what a model is to how it's trained, used, and governed. |
| **Frontier AI** | A guided tour of the leading-edge models and the whole stack behind them — the labs (OpenAI, Anthropic, Google, and the challengers), the cloud "hyperscalers" that host and fund them, and the chip makers (Nvidia, AMD, and more) — plus when to use frontier vs. local models, how to combine them, and how to read benchmarks and costs. |
| **Prompt Engineering** | A complete manual: the foundations, the formulas (CRAFT, RTF, RISEN), advanced techniques, and a copy-paste cheat-sheet library. |
| **Operationalizing AI** | 30 how-to tutorials for using AI in real work, each with a cloud route (Copilot/Claude/ChatGPT/Gemini) and a private local route. |
| **Vibe Coding** | The ultimate beginner's guide to building real software just by describing it — the workflow, the tools, and five hands-on projects. |
| **Experimentation Station** | Extreme-detail setup labs for running your own private local-AI stack: model engines, RAG, agents, coding, media, and hardware. |
| **Resource Hub** | A filterable certification explorer, local-setup guides, an open-source software directory with licenses, and a curated media desk. |
| **Interactive Labs** | Dozens of hands-on labs where you drive a live AI system, tune the dials, and learn by doing — each with a full lesson and instant grading. |

## Features

| Area | What you get |
| --- | --- |
| **Real local models** | Point the labs at Ollama or an in-browser WebLLM engine to run genuine open-source models, or use the built-in simulation with zero setup — all engine-independent. |
| **Interactive labs** | Build detectors, tune sampling, play through incident and governance scenarios, and drive a live next-word predictor — real reactive systems graded on what you do, not multiple-choice. |
| **Written curriculum** | Textbook-grade modules with worked examples, diagrams, and glossaries, covering AI mechanics, prompt engineering, and compliance law. |
| **Certification explorer** | A filterable catalog of AI governance and technical credentials (IAPP AIGP, ISACA, ISC2, CompTIA, and the cloud providers) with domains, cost, and career value. |
| **Progress tracking** | Tiered lessons unlock as you master them, with all progress saved privately in your browser — no account, no server. |
| **Local-first & private** | Runs on your own machine with no cloud inference; the simulation and Ollama transmit nothing, and WebLLM downloads a model once and then runs offline. |

## How to use it

1. **Open the Knowledge Core** and read the foundations — how models work, the landscape, and the risks — before you touch the labs.
2. **Pick your AI engine** from Local System Config: the built-in simulation (nothing to install), an in-browser model, or your own Ollama install.
3. **Work the Interactive Labs**, tier by tier — read the lesson, follow the steps, and let the instant grading and hints guide you.
4. **Study the Methodology and Compliance** tabs to connect the mechanics to real prompt-engineering and governance practice.
5. **Plan your credentials** with the Certification Explorer, and build your own local AI station with the setup guide.

## Run it locally

This is a Vite + React application. Install dependencies and start the dev server:

```bash
# from the repository root:
npm install
npm run dev
# then open the printed local URL (default http://localhost:5173)
```

Build a static production bundle with `npm run build`, and preview it with `npm run preview`. Best experienced on a desktop or laptop in Google Chrome; the interactive labs use sliders, drag interactions, and (optionally) WebGPU.

## Project structure

```
.
├── index.html                  # Vite entry point
├── package.json                # dependencies and dev/build scripts
├── vite.config.js              # build config (React + Tailwind plugins, Pages base path)
├── LICENSE                     # dual license (MIT code + CC BY-NC-SA content)
├── README.md
└── src/
    ├── main.jsx                # React entry
    ├── index.css               # Tailwind + global styles
    ├── App.jsx                 # the 4-tab shell, lab runner, and all UI components
    ├── engine.js               # the local-inference layer (Ollama, WebLLM, simulation)
    ├── missions.js             # the interactive labs: content, engines, and grading
    ├── textbook.js             # the written curriculum (Knowledge Core + Methodology)
    └── resources.js            # certifications, local-setup guide, software, media
```

## License

This project is **dual-licensed**:

- The **software framework and interface code** are licensed under the **MIT License**.
- The **educational curriculum content** (written textbook modules, lesson text, lab scenarios, and datasets) is licensed under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License** (CC BY-NC-SA 4.0).

See the [LICENSE](LICENSE) file for full terms.

---

*This is my personal website and an independent educational resource. All views and content are entirely my own and do not represent the views, positions, endorsements, or policies of my employer or of any other person, organization, or institution. It runs open-source models locally with no cloud inference. Not affiliated with, endorsed by, or sponsored by Meta, Mistral AI, Google, Ollama, or any other vendor; "Llama," "Mistral," "Gemma," "Phi," "Qwen," "Ollama," and "WebLLM" are trademarks of their respective owners, used only to identify the technologies this site teaches about. Released for free public use.*
