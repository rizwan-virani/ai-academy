/* ============================================================================
   textbook.js — the written academic content for the reader tabs.
   ----------------------------------------------------------------------------
   Two "books" render in the top-level tabs:
     core     → Tab 1: Knowledge Core (Modules A, B, C)
     methods  → Tab 2: Methodology & Compliance (Modules D, E)

   Shape (rendered by <TextbookReader> in App.jsx):
     book = { id, title, subtitle, modules: [module] }
     module = { id, title, summary, chapters: [chapter] }
     chapter = {
       id, heading,
       paras: [string],          // body paragraphs
       figure?: { type, ... },   // reuses <LessonFigure> (flow | scale)
       example?: string,         // amber worked-example callout
       callout?: { tone, title, body },   // tone: indigo | amber | rose | emerald
       keyTerms?: [{ term, def }],
     }
   ============================================================================ */

/* ------------------------------------------------------------------ MODULE A */
const moduleA = {
  id: "A",
  title: "The Technology Stack & the Hardware Revolution",
  summary:
    "How artificial intelligence went from hand-written rules to trillion-weight neural networks — and why that leap was made of silicon, not just ideas. This module traces the intellectual history, explains the hardware that finally made deep learning practical, and lays out the modern infrastructure stack you interact with every time you open a chat window.",
  chapters: [
    {
      id: "A1",
      heading: "1. Two schools of thought: symbolic vs. connectionist AI",
      paras: [
        "For its first thirty years, artificial intelligence meant symbolic AI: the belief that intelligence could be captured as explicit rules and logical symbols written by human experts. If you could just write down enough IF-THEN rules — if the patient has a fever AND a rash, then consider measles — a machine could reason its way to expert conclusions. This produced the 'expert systems' of the 1970s and 1980s, hand-built knowledge bases that codified the judgment of doctors, geologists, and engineers into thousands of brittle rules.",
        "The rival tradition, connectionism, took inspiration from the brain rather than from logic. Instead of programming rules, you build a network of simple interconnected units (artificial neurons) and let it LEARN the rules by adjusting the connection strengths between units until its outputs match examples. Nobody writes the knowledge down; the network discovers it from data. Today's large language models are the triumphant descendants of the connectionist school — but that victory took half a century, because the approach was starved of two things it desperately needed: data and computing power.",
      ],
      figure: {
        type: "flow",
        steps: ["Symbolic AI (hand-written rules)", "Expert systems", "AI winters", "Connectionism + data + GPUs", "Deep learning"],
        caption: "The long arc from rules you write to patterns a network learns.",
      },
      keyTerms: [
        { term: "Symbolic AI", def: "intelligence as explicit human-written rules and logic (expert systems)." },
        { term: "Connectionism", def: "intelligence learned by adjusting the weights of a neural network from data." },
      ],
    },
    {
      id: "A2",
      heading: "2. The AI winters: when the promises outran the hardware",
      paras: [
        "Twice — roughly in the mid-1970s and again in the late 1980s — funding and enthusiasm for AI collapsed. These 'AI winters' are usually told as stories of over-promising researchers, and there is truth in that. But the deeper cause was physical: the algorithms of connectionism were essentially correct, yet the hardware of the era could not run them at any useful scale. A neural network with a few dozen neurons was all a 1980s machine could train, and a few dozen neurons cannot do anything impressive.",
        "The key algorithm, backpropagation (the method for figuring out how to nudge each weight to reduce error), was known by the mid-1980s. What was missing was the raw arithmetic throughput to apply it to networks large enough to matter, and datasets large enough to teach them. The winters were not a failure of ideas; they were a hardware bottleneck wearing the costume of an idea problem. Understanding this is the single most important lesson of AI history, because it explains why the thaw, when it came, came so suddenly.",
      ],
      callout: {
        tone: "amber",
        title: "Why this matters",
        body: "The lesson of the winters is that AI progress is gated by compute and data as much as by cleverness. When you hear a bold claim about what AI 'will' do next, the sober question is always: does the hardware exist to run it, and does the data exist to train it?",
      },
    },
    {
      id: "A3",
      heading: "3. The silicon paradigm shift: why GPUs changed everything",
      paras: [
        "The thaw arrived from an unexpected direction — the video-game industry. A Graphics Processing Unit (GPU) was designed to draw millions of pixels at once, and drawing pixels turns out to be, mathematically, an enormous pile of the same operation: multiply a lot of numbers and add them up, over and over, all at the same time. That operation — vector-matrix multiplication — is also the exact operation at the heart of a neural network. Every layer of a network takes a vector of numbers (the input) and multiplies it by a matrix of weights to produce the next vector. A network is millions of these multiply-add operations.",
        "Here is the crucial contrast. A CPU (Central Processing Unit) is built for versatility and speed on a SINGLE stream of instructions: a handful of very fast, very clever cores that do one thing after another in sequence. Ask a CPU to multiply a million pairs of numbers and it will do them more or less one at a time, brilliantly, but linearly. A GPU is built the opposite way: thousands of simpler cores that each do modest arithmetic, but all AT ONCE. This is parallel processing. For a task that is one clever decision, the CPU wins. For a task that is a million identical simple operations — like running a neural network — the GPU is not a little faster; it is hundreds of times faster.",
        "This is why the same billion weights that would take a CPU days to run through can be computed by a GPU in a fraction of a second. The 2012 moment when a GPU-trained network crushed the field at image recognition was not a new idea — backpropagation was decades old — it was the moment the hardware finally matched the algorithm. TPUs (Tensor Processing Units), Google's custom chips, push this even further by building the multiply-add-a-matrix operation directly into silicon, stripping away everything a GPU carries that isn't needed for AI.",
      ],
      figure: {
        type: "scale",
        left: "CPU: a few fast cores, in sequence",
        mid: "→",
        right: "GPU/TPU: thousands of cores, all at once",
        caption: "Neural networks are a mountain of identical multiply-adds — exactly what parallel hardware devours.",
      },
      example:
        "Picture adding up a thousand columns of figures. A CPU is one world-champion accountant doing each column at blistering speed, one after another. A GPU is a thousand ordinary clerks each handed one column, all working simultaneously. For one hard column, hire the champion. For a thousand simple columns, the clerks finish while the champion is still on column three. Training a model is always the thousand-columns problem.",
      keyTerms: [
        { term: "GPU", def: "Graphics Processing Unit — thousands of simple cores that do massive parallel arithmetic." },
        { term: "CPU", def: "Central Processing Unit — a few fast cores optimized for sequential, general-purpose work." },
        { term: "TPU", def: "Tensor Processing Unit — a chip purpose-built for the matrix math of neural networks." },
        { term: "Parallel processing", def: "doing many operations at the same instant rather than one after another." },
        { term: "Vector-matrix multiplication", def: "the core operation of every neural-network layer; a vector times a weight matrix." },
      ],
    },
    {
      id: "A4",
      heading: "4. The modern stack: from physical silicon to the chat box",
      paras: [
        "When you type into an AI tool, your words pass down through four distinct layers of technology, and understanding these layers is what turns AI from magic into an engineering system you can reason about, buy, and govern. From the bottom up:",
        "The Physical Silicon Infrastructure Layer is the actual hardware — the GPUs and TPUs, the data-center racks, the power and cooling, or, in the case of this course, the chip inside your own laptop. Nothing runs without it, and its cost and scarcity shape the entire industry above it.",
        "The Model Weights Kernel Layer is the model itself: the file of learned numbers (the weights) that constitutes 'Llama 3' or 'Gemma' or 'Mistral.' This file is inert on its own — it is just a very large spreadsheet of numbers. It encodes everything the model knows, but it cannot do anything by itself.",
        "The Local Runtime Execution Engine Layer is the software that brings the weights to life: programs like Ollama and llama.cpp that load the weights onto your hardware, feed your tokens through them, and stream back the next-word predictions. This is the engine that runs the model, and it is what makes 'local, private AI' possible at all.",
        "The Application Interface Wrapper Layer is the friendly face on top — the chat window, the buttons, the memory of your conversation, the document uploader. It is what most people think of as 'the AI,' but it is the thinnest layer of all, sitting on three layers of infrastructure it usually hides. This very learning lab is an application-layer wrapper that can point down at a runtime engine (Ollama or an in-browser engine) running real open weights on real silicon.",
      ],
      figure: {
        type: "flow",
        steps: ["App/Interface wrapper", "Runtime engine (Ollama, llama.cpp)", "Model weights (Llama, Gemma, Mistral)", "Physical silicon (GPU/TPU/your laptop)"],
        caption: "The four-layer stack under every chat box. This app is the top layer; you can point it at the layers below.",
      },
      callout: {
        tone: "indigo",
        title: "The governance angle",
        body: "Each layer is a place where control, cost, and risk live. Who owns the silicon? Who trained the weights and on what data? Which runtime touches your data? Which wrapper logs your prompts? Data governance is largely the discipline of asking those four questions, layer by layer.",
      },
    },
  ],
};

/* ------------------------------------------------------------------ MODULE B */
const moduleB = {
  id: "B",
  title: "Model Landscapes & Frontier Dynamics",
  summary:
    "Who actually builds these models, how the state-of-the-art 'frontier' is defined, the deep divide between open weights and closed APIs, and where the technology and its enormous physical footprint may be heading. A field guide to the organizations, the licenses, and the horizon.",
  chapters: [
    {
      id: "B1",
      heading: "1. What a 'frontier model' actually is",
      paras: [
        "A frontier model is a model operating at the leading edge of capability — the largest, most capable systems in existence at a given moment, the ones that define what is currently possible. The term is deliberately relative: today's frontier model is next year's ordinary model. What makes something 'frontier' is not a fixed benchmark but a position at the capability threshold, usually bought with staggering amounts of compute, data, and money. Training a single frontier model can cost tens to hundreds of millions of dollars in hardware and electricity alone.",
        "Frontier models matter for governance because they concentrate capability — and therefore risk and power — in the small number of organizations that can afford to build them. A handful of labs sit at the frontier, and their choices about what to release, how to restrict it, and what to charge ripple across the entire economy. Below the frontier sits a rich ecosystem of smaller, cheaper, often open models that are 'good enough' for most real work — which is exactly why this course teaches you to run them yourself.",
      ],
      keyTerms: [
        { term: "Frontier model", def: "a model at the current leading edge of capability; the term is relative and moves every year." },
        { term: "Capability threshold", def: "the current ceiling of what models can reliably do; the frontier sits at this edge." },
      ],
    },
    {
      id: "B2",
      heading: "2. A field guide to the frontier organizations",
      paras: [
        "OpenAI (the GPT series) is a capped-profit company backed heavily by Microsoft; it pioneered the modern chat interface and operates a closed, API-only model with aggressive commercial scaling. Anthropic (the Claude series) was founded by former OpenAI researchers with a explicit safety-first charter and significant backing from Amazon and Google; it is also closed and API-first, with a strong public emphasis on interpretability and alignment research.",
        "Google DeepMind (the Gemini series) is the merged AI division of a search-and-advertising giant with unmatched data, its own TPU silicon, and deep research roots. Meta (the Llama series) took the opposite strategic path: it releases open-weights models the public can download and run, betting that a broad open ecosystem serves its interests better than a closed API — a decision that single-handedly created the local-AI movement this course is built on. Mistral AI, a French company, is the leading European lab and a champion of efficient, high-quality open-weights models, positioning itself around sovereignty and openness.",
        "These are not neutral engineering shops; each has a funding structure, a national context, and a commercial or ideological alignment that shapes what it builds and releases. A governance professional reads a model's origin the way a journalist reads a source: whose money, whose incentives, whose jurisdiction?",
      ],
      callout: {
        tone: "indigo",
        title: "Reading the directory",
        body: "Notice the split down the middle: OpenAI, Anthropic, and Google run closed API models you rent; Meta and Mistral release open weights you own. That single architectural choice — open vs. closed — cascades into everything: cost, privacy, control, and legal risk. It is the subject of the next chapter.",
      },
    },
    {
      id: "B3",
      heading: "3. Open weights vs. closed source: the great divide",
      paras: [
        "A closed model (GPT, Claude, Gemini) lives on the provider's servers. You send your text over the internet, it runs on their silicon, and the answer comes back. You never see the weights; you rent access through an API and pay per token. This buys you the most capable models with zero setup — and it means your data leaves your building, you depend on the provider's uptime and pricing, and the model can change or vanish beneath you at any time.",
        "An open-weights model (Llama, Gemma, Mistral) is a file you download. You can run it on your own laptop or server, fully offline, with no one watching. This is the architecture that makes genuine data sovereignty possible: your prompts never leave your machine. The trade-offs are real — open models are usually a step behind the closed frontier, and you are responsible for the hardware and the setup. Note the careful term 'open weights,' not 'open source': you get the trained numbers, but usually not the training data or the full recipe, so it is open in the sense that matters for deployment but not fully transparent.",
        "The divide is simultaneously architectural (where the computation happens), legal (what the license permits — Apache 2.0 and MIT are permissive; some 'open' licenses restrict commercial scale or use), and about security (a closed model is a black box you must trust; an open model can be inspected, audited, and contained inside your own network). For an organization handling sensitive data, the open/closed decision is often the first and most consequential AI governance decision it will make.",
      ],
      figure: {
        type: "scale",
        left: "Closed API: most capable, data leaves you",
        mid: "the core trade-off",
        right: "Open weights: you own it, fully private",
      },
      keyTerms: [
        { term: "Open weights", def: "the trained model numbers are downloadable and runnable by anyone; training data usually is not." },
        { term: "Closed / API model", def: "the model runs only on the provider's servers; you rent access and your data leaves your machine." },
        { term: "Permissive license", def: "e.g. Apache 2.0 or MIT — allows broad commercial use and modification." },
        { term: "Data sovereignty", def: "keeping full control of your data by never sending it off your own infrastructure." },
      ],
    },
    {
      id: "B4",
      heading: "4. The future horizon: AGI, ASI, and the physical bill",
      paras: [
        "Two speculative milestones dominate the discourse. Artificial General Intelligence (AGI) refers to a system that matches human ability across essentially all cognitive tasks, rather than being narrowly good at one. Artificial Superintelligence (ASI) refers to a system that decisively exceeds the best human minds across the board. Both are contested — experts disagree sharply on whether current approaches even point toward them, and on timelines ranging from years to never. The honest scholarly position is uncertainty, and a governance professional should treat confident predictions in either direction with suspicion.",
        "Nearer term and far more concrete is the physical cost of scaling. Frontier training runs consume electricity measured in megawatts sustained over months; the largest data centers draw as much power as a small city. Cooling those chips consumes staggering volumes of water — a single large facility can use millions of liters. The carbon footprint of training and then serving these models to billions of queries is now a first-order environmental issue, not a footnote. As models scale, the binding constraint is shifting from algorithms to energy: the frontier is increasingly limited by how many megawatts and how much water a company can secure.",
        "The plausible near future is less about robot superintelligence and more about human-AI collaboration frameworks: systems that augment expert workflows, with humans retaining judgment and accountability. That framing — AI as a powerful, fallible instrument under human oversight — is the one this entire course is built to prepare you for, and it is the one the compliance frameworks in the next tab are designed to enforce.",
      ],
      callout: {
        tone: "rose",
        title: "The environmental cost is real",
        body: "Every query has a physical price in electricity and water. Running small open models locally (as this course teaches) is dramatically more efficient than routing everything to a mega-cluster — a genuine, if partial, sustainability argument for the local-first approach.",
      },
      keyTerms: [
        { term: "AGI", def: "Artificial General Intelligence — human-level ability across essentially all cognitive tasks." },
        { term: "ASI", def: "Artificial Superintelligence — decisively beyond the best humans across the board." },
        { term: "Compute-bound", def: "when progress is limited by available hardware and energy rather than by ideas." },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ MODULE C */
const moduleC = {
  id: "C",
  title: "Limitations, Bias & Workplace Safety",
  summary:
    "The failure modes every professional must understand before trusting AI with real work: why models fabricate, how bias enters through the data pipeline, and how generative tools are reshaping the labor economy and creating new data-leak risks. This is the module that turns an enthusiastic user into a responsible one.",
  chapters: [
    {
      id: "C1",
      heading: "1. The anatomy of a hallucination",
      paras: [
        "A hallucination is a confident, fluent, and completely fabricated answer. It is the defining failure mode of large language models, and understanding its cause is non-negotiable for anyone using AI professionally. The cause is structural, not a bug: recall that a model works by producing a probability distribution over the next word and sampling from it. It is a next-token prediction engine, optimized to produce text that is PLAUSIBLE — text that looks like what a human would write. It is not optimized to produce text that is TRUE, and it has no built-in mechanism for checking a claim against reality.",
        "When the model is asked something it has solid, well-represented knowledge about, the most probable continuation happens to be the correct one, and you get a right answer. But when there is a gap in its training — an obscure fact, a recent event, a specific citation, a made-up premise — the probability distribution still has to point somewhere. The model has no way to output 'I don't know' unless that behavior was trained into it, so it confidently generates the most plausible-sounding continuation, which is a fabrication. The fluency is exactly what makes it dangerous: the fake citation, the invented statistic, and the real one are written in the same authoritative voice.",
        "This is not epistemic grounding. Humans, however imperfectly, have a sense of the boundary of their own knowledge and a habit of checking claims against a model of the world. A base language model has neither; it has only the statistics of language. Techniques like retrieval-augmented generation (giving it a source to quote) and self-consistency checking (asking repeatedly and watching for disagreement) are engineering patches over this fundamental gap — patches you will build by hand in the Interactive Labs.",
      ],
      example:
        "A now-infamous professional failure: in 2023 two lawyers submitted a court brief written with an AI tool that cited six judicial decisions. Every one of the six was fabricated — plausible case names, plausible citations, entirely invented. The model was not lying; it was producing text that looked exactly like legal citations, because that is what it optimizes for. The lawyers were sanctioned. The lesson: fluency is not truth, and unverified AI output has real professional consequences.",
      keyTerms: [
        { term: "Hallucination", def: "a confident, fluent, fabricated answer produced when the model lacks real knowledge." },
        { term: "Next-token prediction", def: "the model's actual objective — plausible continuation, not verified truth." },
        { term: "Epistemic grounding", def: "a sense of the boundary of one's own knowledge; base LLMs lack it." },
      ],
    },
    {
      id: "C2",
      heading: "2. Training-data bias and the data-quality axiom",
      paras: [
        "Everything a model 'knows' it learned from its training data, and the oldest axiom in computer science governs the result: Garbage In, Garbage Out (GIGO). If the data is biased, incomplete, or low-quality, the model faithfully learns and amplifies those flaws — no amount of clever architecture repairs bad data. This is the single most important idea in AI data governance, and it is why the discipline exists.",
        "The dominant training source is a raw scraping of the public internet, and the internet is not a neutral, representative sample of humanity. It over-represents some languages, cultures, viewpoints, and eras, and it contains the full historical record of human prejudice. A model trained on it will, unless carefully corrected, reproduce historical patterns of bias: associating certain job titles with certain genders, certain names with certain risk levels, certain dialects with lower quality. These associations are not the model 'deciding' to be biased; they are statistical residue of a biased corpus, learned exactly as faithfully as everything else.",
        "The countermeasure is a disciplined data pipeline: sourcing, then data sanitization and pre-processing before training. This means de-duplication, filtering out toxic and low-quality content, balancing under-represented groups, removing personal data, and documenting provenance. Much of it is automated, but the choices about what counts as 'quality' are human and value-laden — which is precisely why they must be governed, audited, and documented rather than left implicit. You will build a live version of this pipeline in the Bias Auditing lab.",
      ],
      figure: {
        type: "flow",
        steps: ["Raw internet scrape (biased)", "Sanitize / filter / de-dupe / balance", "Clean training data", "Model that reflects the data"],
        caption: "Garbage in, garbage out — governance lives in the middle step.",
      },
      callout: {
        tone: "amber",
        title: "GIGO in one sentence",
        body: "A model is a mirror of its training data. If you would not trust the data, do not trust the model — and the only way to know whether to trust the data is to demand its provenance and its sanitization record.",
      },
      keyTerms: [
        { term: "GIGO", def: "Garbage In, Garbage Out — flawed input data produces a flawed model, always." },
        { term: "Training-data bias", def: "prejudice or skew in the data that the model learns and amplifies." },
        { term: "Data sanitization", def: "cleaning, filtering, de-duplicating, and balancing data before training." },
        { term: "Provenance", def: "the documented origin and history of a dataset." },
      ],
    },
    {
      id: "C3",
      heading: "3. Workplace safety, automation, and the economics of augmentation",
      paras: [
        "Generative AI is reshaping the labor economy, and the honest picture is neither the utopia nor the apocalypse of the headlines. The most useful distinction is between displacement (a tool doing a whole job a person used to do) and augmentation (a tool making a person dramatically more productive at their job). The evidence so far points much more toward augmentation than wholesale displacement: the tasks most affected are specific, repetitive, language-heavy sub-tasks — drafting routine documents, summarizing, first-pass coding, template correspondence — rather than entire professions.",
        "The impact is uneven across domains. Administrative and clerical roles centered on routine document production see the most task-level automation. Legal work sees heavy augmentation of research and drafting, but the professional accountability — and the liability — stays firmly with the human. Technical roles see AI handling boilerplate so engineers focus on architecture and judgment. The consistent pattern is that AI absorbs the routine and the human moves up to oversight, exception-handling, and accountability — which raises the value of exactly the governance skills this course teaches.",
        "Alongside the economic shift comes an acute new safety risk: data leakage. When an employee pastes a confidential document, customer records, or proprietary code into a public AI tool, that data may leave the organization's control, be logged by the provider, and potentially be exposed. Preventing this is a core workplace-safety obligation. The controls are concrete: a clear acceptable-use policy, technical blocking of sensitive data, mandatory use of approved (ideally local, private) tools for confidential material, and redaction of personal and secret data before any text reaches an outside model. Those controls are exactly what you will build and tune in the Data Governance labs.",
      ],
      example:
        "A common real failure: an engineer pastes a block of proprietary source code into a free public chatbot to debug it. The code — a trade secret — is now on a third party's servers, potentially logged and used to improve their model. No malware, no hacker; just one convenient paste. This is why 'never put confidential data into a public tool' is the first rule of every corporate AI policy, and why running models locally matters so much.",
      keyTerms: [
        { term: "Displacement", def: "AI performing an entire job a human previously did." },
        { term: "Augmentation", def: "AI making a human substantially more productive at their existing job." },
        { term: "Data leakage", def: "confidential data escaping the organization by being fed into an outside tool." },
        { term: "Acceptable-use policy", def: "the rules governing how staff may (and may not) use AI tools." },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ MODULE D */
const moduleD = {
  id: "D",
  title: "The Advanced Prompt-Engineering Manual",
  summary:
    "A practitioner's manual for controlling a model through the only interface you have: the prompt. This module replaces casual 'chatting' with disciplined, structured instruction, and lays out the three core reasoning methodologies — zero-shot, few-shot, and chain-of-thought — with the rules for when to deploy each.",
  chapters: [
    {
      id: "D1",
      heading: "1. From conversation to architecture: the structured prompt",
      paras: [
        "Most people talk to AI the way they talk to a person — casually, incompletely, trusting the listener to fill gaps. This works for trivial requests and fails for serious ones, because the model is not a colleague who shares your context; it is a text-completion engine that will fill your gaps with whatever is statistically likely, not with what you meant. Prompt engineering is the discipline of removing that ambiguity by structuring the instruction like a specification rather than a chat.",
        "A well-architected prompt has identifiable components, and naming them turns prompting from guesswork into engineering. The Role sets who the model should act as ('You are a senior compliance auditor'), which conditions its vocabulary and priorities. The Context / historical background supplies the facts it needs and cannot guess. The Priming text or examples demonstrate the desired pattern. The Objective / task states, unambiguously, the one thing to produce. The Constraints bound the output ('under 200 words,' 'do not invent facts,' 'refuse if the data is missing'). The Syntax / output outline dictates the exact format ('return valid JSON with these keys'). A prompt that names all six leaves the model far less room to drift.",
      ],
      figure: {
        type: "flow",
        steps: ["Role", "Context", "Priming/examples", "Objective", "Constraints", "Output syntax"],
        caption: "The anatomy of a structured prompt. Casual chat supplies one or two of these; engineering supplies all six.",
      },
      example:
        "Casual: 'summarize this contract.' Structured: 'You are a contracts paralegal (role). Here is a services agreement (context: ...). Summarize it for a non-lawyer executive (objective), in under 150 words (constraint), as three bullet points covering term, payment, and termination (output syntax). Do not offer legal advice or invent clauses (constraint).' The second version is reproducible; the first is a gamble.",
      keyTerms: [
        { term: "Role", def: "the persona/expertise you instruct the model to adopt." },
        { term: "Constraint", def: "an explicit limit on the output (length, format, forbidden behavior)." },
        { term: "Output syntax", def: "the exact required structure of the answer (e.g. JSON, bullet list)." },
      ],
    },
    {
      id: "D2",
      heading: "2. Reasoning methodologies: zero-shot, few-shot, chain-of-thought",
      paras: [
        "Zero-shot prompting asks the model to perform a task with instructions only and no examples ('Classify this review as positive or negative'). It is the fastest approach and works well when the task is common and unambiguous. Its weakness is that the model must guess your exact intent and format from words alone, so it is unreliable for anything nuanced or specifically formatted.",
        "Few-shot (in-context) learning includes a handful of worked examples of input → output directly in the prompt. The model infers the pattern from the demonstrations and applies it — including subtleties that are hard to state in words, like a specific tone, an edge-case rule, or a normalization ('a couple' → 2). Few-shot is the workhorse of reliable production prompting: when zero-shot drifts, showing two or three examples usually fixes it. The cost is tokens (examples make the prompt longer and more expensive) and the effort of curating good examples.",
        "Chain-of-thought (CoT) prompting explicitly instructs the model to reason step by step before giving a final answer ('Think through this step by step, showing each calculation, then state the answer'). This matters because the model generates one token at a time; forcing it to write out intermediate steps means each step becomes context that constrains the next, dramatically improving accuracy on multi-step problems (arithmetic, logic, planning). The deployment rule: use CoT when the task has multiple dependent steps and correctness matters more than brevity; skip it when you need a fast, direct answer to a simple question. You can even combine CoT with self-verification — asking the model to check its own steps — to catch its own errors.",
      ],
      callout: {
        tone: "indigo",
        title: "Deployment rules of thumb",
        body: "Zero-shot for simple, common tasks. Few-shot when the format or nuance matters and zero-shot drifts. Chain-of-thought when the problem has multiple steps and accuracy is worth the extra tokens. These aren't mutually exclusive — production prompts routinely stack all three.",
      },
      keyTerms: [
        { term: "Zero-shot", def: "instructions only, no examples; fast but less reliable for nuance." },
        { term: "Few-shot", def: "a few worked examples in the prompt; the model copies the pattern." },
        { term: "Chain-of-thought", def: "instructing the model to reason step-by-step before answering, improving multi-step accuracy." },
        { term: "In-context learning", def: "the model adapting its behavior from examples given in the prompt, without retraining." },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ MODULE E */
const moduleE = {
  id: "E",
  title: "Compliance Frameworks & Global Regulations",
  summary:
    "The legal and organizational architecture that governs how AI may be built and deployed: the EU AI Act's risk tiers and fines, the NIST AI Risk Management Framework's four functions, and the global standards (ISO/IEC 42001, vendor auditing, model cards) that turn principles into checklists.",
  chapters: [
    {
      id: "E1",
      heading: "1. The European Union AI Act: a risk-tiered legal architecture",
      paras: [
        "The EU AI Act is the world's first comprehensive AI law, and its central idea is elegant: regulate an AI system in proportion to the harm it could do, not to how advanced it is. It sorts every system into one of four risk tiers, and the tier determines the obligations. This risk-based structure has become the template that governance professionals worldwide use to reason about AI, whether or not the EU has jurisdiction.",
        "Unacceptable-risk systems are banned outright: government social scoring, real-time mass biometric surveillance, and AI designed to manipulate vulnerable people. High-risk systems — AI that makes consequential decisions about people's lives, such as hiring, lending, education, medical devices, and critical infrastructure — are permitted but carry the heaviest obligations: risk management, high-quality documented data, human oversight, transparency, and conformity assessment before deployment. Limited-risk systems, chiefly those that interact with people (chatbots) or generate synthetic media (deepfakes), carry transparency duties: they must disclose that they are AI or AI-generated. Minimal-risk systems — spam filters, AI in video games, most everyday tools — are essentially unregulated.",
        "The enforcement teeth are severe and deliberately modeled on GDPR. Non-compliance fines scale with the violation: using a banned system can draw penalties up to the tens of millions of euros or a substantial percentage of global annual turnover, whichever is higher, with lower (but still large) tiers for other breaches. Obligations phase in over a multi-year timeline after the Act's entry into force, with the prohibitions taking effect first and the high-risk obligations following. The practical takeaway for any organization: classify your AI systems by tier now, because your obligations — and your exposure — follow directly from that classification.",
      ],
      figure: {
        type: "flow",
        steps: ["Unacceptable → banned", "High-risk → heavy obligations", "Limited → must disclose", "Minimal → largely free"],
        caption: "The EU AI Act sorts by potential harm; the tier decides the rules and the fines.",
      },
      keyTerms: [
        { term: "EU AI Act", def: "the first comprehensive AI law; regulates systems by risk tier." },
        { term: "High-risk system", def: "AI making consequential decisions about people; allowed but heavily regulated." },
        { term: "Conformity assessment", def: "the check a high-risk system must pass before it can be deployed." },
      ],
    },
    {
      id: "E2",
      heading: "2. The NIST AI Risk Management Framework: Govern, Map, Measure, Manage",
      paras: [
        "Where the EU AI Act is law, the NIST AI RMF (Risk Management Framework 1.0) is voluntary guidance — but it has become the de facto operational playbook for building trustworthy AI, especially in the United States. Its power is that it is not a set of rules to obey but a set of functions to perform continuously, organized into four pillars that form a cycle rather than a checklist you finish once.",
        "GOVERN is the foundation and runs through everything else: establishing the culture, policies, roles, and accountability structures for managing AI risk across the organization. It answers 'who is responsible, and by what policy?' MAP builds context: identifying where and how AI is used, who the stakeholders are, what could go wrong, and what the intended benefits and possible harms are. You cannot manage a risk you have not mapped, so this pillar is about drawing the complete picture of your AI footprint before anything is deployed.",
        "MEASURE applies quantitative and qualitative methods to assess the risks that MAP identified: testing for accuracy, bias, robustness, and security; establishing metrics; and — critically — implementing continuous monitoring, because an AI system's risk profile drifts over time as the world changes around it. MANAGE acts on those measurements: prioritizing risks, allocating resources, deciding which systems to deploy, restrict, or retire, and responding to incidents. The cycle then feeds back: what you manage informs how you govern, and the loop runs continuously for the life of every system.",
      ],
      callout: {
        tone: "emerald",
        title: "A deployment checklist mindset",
        body: "In practice, GOVERN produces your AI policy and named owners; MAP produces an inventory of every AI system and its risks; MEASURE produces test results and a monitoring dashboard; MANAGE produces go/no-go decisions and an incident plan. If you can point to those four artifacts, you are running the RMF.",
      },
      keyTerms: [
        { term: "NIST AI RMF", def: "voluntary US framework for trustworthy AI, organized as Govern/Map/Measure/Manage." },
        { term: "Govern", def: "the culture, policy, roles, and accountability for AI risk — the foundation pillar." },
        { term: "Map", def: "identifying context, uses, stakeholders, and potential harms of AI systems." },
        { term: "Measure", def: "testing and continuously monitoring the identified risks." },
        { term: "Manage", def: "acting on measurements: prioritizing, deploying, restricting, and responding." },
      ],
    },
    {
      id: "E3",
      heading: "3. Global standards: ISO/IEC 42001, vendor audits, and model cards",
      paras: [
        "ISO/IEC 42001 is the international standard for an AI Management System (AIMS) — the AI-specific sibling of the well-known ISO 27001 for information security. Rather than governing a single model, it certifies that an ORGANIZATION has a systematic, auditable process for managing AI responsibly across its whole lifecycle: policies, risk assessments, controls, and continual improvement. Certification against 42001 is becoming a way for a company to prove to customers, regulators, and partners that its AI governance is real and independently verified, not just a web page of principles.",
        "Third-party vendor auditing is the discipline of extending that scrutiny to the AI you buy rather than build. Most organizations consume AI through vendors, and a vendor's weak governance becomes your risk. A mature auditing protocol demands evidence: the vendor's data provenance and handling, its bias and security testing, its incident history, its certifications (like 42001 or SOC 2), and contractual guarantees about data use and liability. The vendor's answers — and their willingness to provide evidence rather than assurances — are what a real audit evaluates.",
        "The model card is the standardized disclosure document at the center of these workflows: a structured sheet describing a model's intended purpose, its training data and provenance, its performance and its measured bias, its known limitations and out-of-scope uses, and its human-oversight provisions. Model-card evaluation is a legal and technical workflow — reading the card critically, checking what is present against what is required, and flagging both missing disclosures and alarming claims. You will run exactly this evaluation, at speed, in the Model-Card Compliance Scanner lab.",
      ],
      keyTerms: [
        { term: "ISO/IEC 42001", def: "the international standard for an auditable AI Management System across an organization." },
        { term: "AI Management System (AIMS)", def: "an organization's systematic process for governing AI over its lifecycle." },
        { term: "Vendor audit", def: "demanding governance evidence from an AI supplier before trusting their system." },
        { term: "Model card", def: "a standardized disclosure sheet describing a model's purpose, data, limits, and oversight." },
      ],
    },
  ],
};

/* --------------------------------------------------------------------- BOOKS */
export const TEXTBOOK = {
  core: {
    id: "core",
    title: "Knowledge Core",
    subtitle: "The foundations: how AI works, who builds it, and where it fails.",
    modules: [moduleA, moduleB, moduleC],
  },
  methods: {
    id: "methods",
    title: "Methodology & Compliance",
    subtitle: "The operational craft: engineering prompts and governing AI under real frameworks.",
    modules: [moduleD, moduleE],
  },
};
