/* ============================================================================
   FRONTIER AI — the leading-edge cloud AI models and the whole stack behind
   them, explained for a non-technical audience: foundation pages, the model
   labs (giants + challengers), the cloud "hyperscalers" that host and fund
   them, the chip makers that supply the hardware, plus how to combine models
   and read benchmarks/costs. Authored + fact-checked by the Frontier AI
   pipeline and assembled by assemble-frontier2.mjs — do not hand-edit; regen.
   ============================================================================ */

export const FRONTIER_CATEGORIES = [
  { id: "giants", name: "The Frontier Giants", icon: "Building2", blurb: "The three labs at the leading edge — who they are and what each is best at." },
  { id: "challengers", name: "Challengers & Outliers", icon: "Swords", blurb: "The dark horses reshaping the field — raw compute, extreme efficiency, and open weights." },
  { id: "hyperscalers", name: "The Cloud Powers", icon: "Cloud", blurb: "The cloud giants that host the models, fund the labs, and build their own AI too." },
  { id: "chips", name: "AI Chips & Silicon", icon: "CircuitBoard", blurb: "The picks-and-shovels of the AI boom — the specialized chips every model runs on." },
];

export const FRONTIER_OVERVIEW = [
  {
    "id": "what-is-frontier",
    "title": "What \"Frontier AI\" Actually Means",
    "intro": "Welcome to the frontier. In this section we'll get to know the most powerful AI systems in the world today — where they come from, what they can do, and how to think about them clearly. Let's start with the term itself, because \"frontier AI\" gets thrown around a lot without anyone explaining what it means.",
    "blocks": [
      {
        "t": "h3",
        "text": "The short version"
      },
      {
        "t": "p",
        "text": "Frontier AI means the absolute leading edge — the most advanced, largest-scale artificial intelligence systems that exist right now. These are the models you may know by their brand names, and they sit at the top of a category researchers call foundation models. A foundation model is one big, general-purpose AI trained on an enormous pile of data — text, code, images, and more — that countless apps and tools then build on top of. Think of it like the foundation of a house: you pour one massive, sturdy base, and then many different rooms and features get built above it. The chatbot you type into, the writing helper inside your email, the coding assistant a developer uses — many of them are just different rooms built on the same foundation model underneath."
      },
      {
        "t": "p",
        "text": "So frontier is not a fixed line on a map. It's a moving edge. What counts as frontier today may be ordinary in a couple of years, because the whole field keeps pushing forward. And at any given moment it isn't one single champion — it's a small cluster of comparable models from different companies, each ahead on some things and behind on others. Only a handful truly qualify, and three things set them apart."
      },
      {
        "t": "h3",
        "text": "Criterion 1 — Hyper-scale compute"
      },
      {
        "t": "p",
        "text": "Compute is just shorthand for computing power — the raw horsepower used to build and run a model. Frontier models are trained inside gigantic data centers (warehouse-sized buildings packed with computers) using thousands of specialized chips called GPUs. GPU stands for graphics processing unit. These chips were originally designed to draw graphics for video games, because games need to do many small calculations at the same time. It turned out that AI needs exactly that same kind of massively parallel math, so GPUs became the workhorses of AI — the engines that do the heavy lifting."
      },
      {
        "t": "p",
        "text": "Training one frontier model can mean running thousands of these chips around the clock for many months. That single training run — the one-time process of teaching the model — can cost hundreds of millions of dollars in chips, electricity, and cooling, and the price has been climbing fast year over year. Why it matters: this price tag is a wall. It means only very well-funded organizations can play at this level, which is a big reason the frontier is dominated by a few large companies. It's not that no one else is smart enough — it's that almost no one else can afford the hardware and the power bill. In fact, the supply of electricity to run these data centers is becoming just as much of a bottleneck as the chips themselves."
      },
      {
        "t": "callout",
        "tone": "amber",
        "title": "KEY INSIGHT",
        "body": "The frontier is defined as much by money, hardware, and electricity as by cleverness. Building a top-tier model is less like writing a great app and more like launching a space mission — the barrier to entry is enormous."
      },
      {
        "t": "h3",
        "text": "Criterion 2 — Generalist intelligence"
      },
      {
        "t": "p",
        "text": "For most of computing history, AI was narrow. A narrow AI does one thing, even if it does it superbly — a program that plays chess, a system that predicts tomorrow's weather, a filter that spots spam email. Hand a chess engine a spreadsheet and it has no idea what to do; that was never its job. Frontier models are different. They are generalists. A single one of these models can write and debug computer code (debug means find and fix errors in the code), analyze a spreadsheet, translate between languages, read and explain a chart or photo, draft an essay, and hold a conversation — all without being rebuilt for each task."
      },
      {
        "t": "p",
        "text": "Why it matters: this flexibility is what makes frontier models feel genuinely new. One system, many jobs. That said, generalist does not mean flawless. Being good at everything also means these models can be confidently wrong about anything — they sometimes state false things in a fluent, believable way (a behavior often called hallucination, which we'll cover later). Breadth is a strength and a trap at the same time."
      },
      {
        "t": "h3",
        "text": "Criterion 3 — The bleeding edge"
      },
      {
        "t": "p",
        "text": "The last criterion is the hardest to pin down but the most exciting. Frontier models regularly show raw new reasoning abilities that simply weren't there in earlier systems — chaining together several steps of logic, working through a tricky problem, catching their own mistakes. Some of these abilities weren't deliberately programmed in. They appeared as the models grew larger, sometimes surprising even the researchers who built them. Engineers call these surprises emergent abilities — skills that emerge from sheer scale rather than being hand-coded."
      },
      {
        "t": "p",
        "text": "Why it matters: this is the part of AI that is still genuinely unpredictable. It's why the field moves so fast, and also why honest experts — including the people building these systems — will tell you they don't fully understand everything their own models can and can't do. Keep that in mind whenever anyone speaks about frontier AI with total certainty, in either direction."
      },
      {
        "t": "h3",
        "text": "The satellite analogy"
      },
      {
        "t": "p",
        "text": "This site also teaches you to run your own AI models locally — right on your laptop, using free tools like Ollama, with your data never leaving your machine. (Ollama is a free program that downloads an AI model onto your own computer and runs it there.) Those local models and these frontier models are both AI, but they play very different roles, and one picture makes the difference click."
      },
      {
        "t": "callout",
        "tone": "indigo",
        "title": "DRONES VS. SATELLITES",
        "body": "A local model on your laptop is like a private drone — small, fast, free to fly, completely under your control, and perfect for jobs in your own backyard. A frontier model is like a deep-space satellite — gargantuan, staggeringly expensive, owned and operated by a massive organization, but able to see a horizon no drone could ever reach."
      },
      {
        "t": "p",
        "text": "Neither is better in the abstract. They're built for different missions. Sometimes you want the private drone in your own hands; sometimes you need the reach of the satellite. A recurring theme of this section is knowing which one to reach for — and that includes a real privacy trade-off. When you use a cloud frontier model (cloud just means it runs on the company's distant computers, not yours), your words travel over the internet to those servers to be processed, and depending on the service and your settings, that data may be stored or even used to help train future models. That isn't a scandal — it's simply how a satellite works. But it's a genuine consideration, and it's exactly why running your own local drone is worth learning too."
      },
      {
        "t": "compare",
        "left": {
          "title": "Local models (your drone)",
          "items": [
            "Run on your own hardware — free to use after the initial download.",
            "Your data stays on your machine; strong privacy.",
            "Quick to start for small jobs, and work with no internet connection.",
            "Less powerful overall; struggle with the hardest reasoning and long, complex tasks."
          ]
        },
        "right": {
          "title": "Frontier models (the satellite)",
          "items": [
            "Among the most capable AI available, with exceptional breadth and reasoning.",
            "No hardware to buy — you rent access over the internet.",
            "Your data leaves your device and is processed on a company's servers.",
            "Cost money per use, can be overkill for simple tasks, and depend on someone else's service staying online."
          ]
        }
      },
      {
        "t": "h3",
        "text": "What the rest of this section covers"
      },
      {
        "t": "p",
        "text": "Now that frontier AI means something concrete, we'll get specific. In the pages ahead you'll meet the big companies that dominate the frontier and the model families they've built — profiles that give each one honest credit for its strengths and an honest accounting of its weaknesses, because every giant has both, and no single company leads at everything. Then we'll look at the scrappy challengers pushing the leaders from behind, how to combine cloud and local models so you get the best of both, and finally how to read the two things everyone argues about: benchmarks (the standardized tests used to compare models) and cost (what all this power actually runs you). Let's go meet the satellites."
      },
      {
        "t": "bullets",
        "items": [
          "The giants — profiles of the major companies and their model families, strengths and limits alike.",
          "The challengers — the fast-moving newcomers and open alternatives keeping the leaders honest.",
          "Combining models — using local and frontier AI together, and when each one is the right tool.",
          "Benchmarks — how AI models get scored, and why those scores can mislead if you read them wrong.",
          "Cost — what frontier AI actually charges for, and how to think about paying for intelligence."
        ]
      }
    ],
    "section": "Start Here"
  },
  {
    "id": "parameters",
    "title": "What \"Billions of Parameters\" Really Means",
    "intro": "You have probably seen a headline bragging that some AI model has \"billions\" or even \"trillions\" of parameters. This page finally makes that number mean something real, using pictures you already understand.",
    "blocks": [
      {
        "t": "h3",
        "text": "First, what is a parameter?"
      },
      {
        "t": "p",
        "text": "A parameter is just a tiny internal number that the model adjusts for itself while it is learning. That is the whole idea. Picture an enormous soundboard in a recording studio, the kind with rows and rows of little knobs and sliders. Each knob can be nudged up or down a little. A modern AI model is like a soundboard with billions of those knobs, and every knob is one parameter."
      },
      {
        "t": "p",
        "text": "Nobody sets these knobs by hand. That would take longer than the age of the universe. Instead, the model tunes them itself during a process called training, which we cover elsewhere in this section. Here is the short version, because it explains what the knobs are actually for."
      },
      {
        "t": "h3",
        "text": "How the knobs get tuned"
      },
      {
        "t": "p",
        "text": "Remember the core job of a language model: given some text, guess the next word. (More precisely it guesses the next small chunk of text, but \"next word\" is close enough and easier to hold in your head.) A model with untrained, random knobs is terrible at this. It might follow \"The sky is\" with \"purple banana.\""
      },
      {
        "t": "steps",
        "items": [
          {
            "title": "Read a bit of real text",
            "detail": "The model is shown a genuine sentence from its training data, with the next word temporarily hidden."
          },
          {
            "title": "Make a guess",
            "detail": "Using its current knob settings, it predicts what that next word should be."
          },
          {
            "title": "Check the answer",
            "detail": "It compares its guess to the real word and measures how wrong it was."
          },
          {
            "title": "Nudge the knobs",
            "detail": "It tweaks huge numbers of parameters a tiny amount so that next time the guess would be a little better."
          },
          {
            "title": "Repeat, billions of times",
            "detail": "Across a mountain of text, this loop slowly turns random knobs into a finely tuned instrument."
          }
        ]
      },
      {
        "t": "p",
        "text": "Do that enough times and the knob settings quietly come to encode grammar, facts, tone, reasoning habits, and countless patterns in how people write. That collection of learned patterns is what feels like the model \"knowing\" things. Another useful image is the brain: a brain learns by strengthening and weakening the connections between its neurons, the nerve cells that pass along signals. A model's parameters play a similar role — they are the connection strengths that get tuned by experience."
      },
      {
        "t": "callout",
        "tone": "amber",
        "title": "THE KEY IDEA",
        "body": "Parameters are not knowledge that was typed in. They are dials the model set for itself, one tiny nudge at a time, so that its next-word guesses got better and better."
      },
      {
        "t": "h3",
        "text": "A scale ladder, so the numbers mean something"
      },
      {
        "t": "p",
        "text": "\"A billion\" is a hard number to feel. This ladder gives you rough tiers, what each tier can do, and — importantly for the rest of this site — where it actually runs. Treat the counts as ballpark ranges, not exact figures; the pattern matters more than any single number, and the tiers blur into one another at the edges."
      },
      {
        "t": "table",
        "headers": [
          "Size tier",
          "Rough parameter count",
          "What it can do",
          "Where it runs"
        ],
        "rows": [
          [
            "Tiny / small",
            "Millions to a few billion",
            "Handles focused tasks — simple chat, summarizing, autocomplete-style help; can be surprisingly capable for its size",
            "Your own laptop or phone"
          ],
          [
            "Big open model",
            "Tens of billions",
            "A solid all-around assistant: reasoning, coding help, longer writing, with real depth",
            "A strong personal computer or a modest server"
          ],
          [
            "Frontier model",
            "Hundreds of billions to over a trillion",
            "The leading-edge cloud models — deepest reasoning, broadest knowledge, most nuance",
            "Large data centers only"
          ]
        ]
      },
      {
        "t": "p",
        "text": "One note on that top row. The exact size of a frontier model is often kept secret, and \"a trillion parameters\" gets thrown around loosely. So read the biggest numbers as a general signal of scale, not a spec you can verify."
      },
      {
        "t": "h3",
        "text": "So do more parameters just mean a better model?"
      },
      {
        "t": "p",
        "text": "Roughly, yes — up to a point. More parameters give a model more room to store patterns, facts, and shades of nuance, the same way a bigger soundboard can capture a richer, more detailed mix. That is a big part of why the frontier models feel so capable."
      },
      {
        "t": "p",
        "text": "But the gains come with diminishing returns — a fancy way of saying each new batch of knobs helps a little less than the batch before it. Doubling the knobs does not double the smarts. And extra capacity only pays off if the model was trained well. A giant soundboard is worthless in the hands of someone who never learned to mix."
      },
      {
        "t": "callout",
        "tone": "rose",
        "title": "BIGGER IS NOT AUTOMATICALLY SMARTER",
        "body": "A smaller model trained on cleaner data with a smarter design can beat a bigger, clumsier one. Parameter count is one ingredient, not the final score."
      },
      {
        "t": "h3",
        "text": "Weights, open-weight, and why frontier models live in data centers"
      },
      {
        "t": "p",
        "text": "You will hear the word \"weights\" constantly. Weights are simply the saved values of all those parameters — the exact position of every knob after training is finished. When people say a model \"has 70 billion weights,\" they mean 70 billion tuned dials, saved to a file. (In everyday talk, \"weights\" and \"parameters\" are used almost interchangeably.)"
      },
      {
        "t": "bullets",
        "items": [
          "Weights — the saved settings of every parameter, the finished knob positions that make the model what it is.",
          "Open-weight — the company published those settings, so anyone can download the model and run it on their own hardware. (This is not the same as fully open-source; the maker may still attach rules about how you use it.)",
          "Closed-weight — the settings stay private inside the company, and you use the model only through their cloud service. Most frontier models today are closed-weight."
        ]
      },
      {
        "t": "p",
        "text": "Here is the practical punchline. Every parameter has to be loaded into memory and pushed through math to answer even one question. Billions of parameters need enormous amounts of memory and computing power — far more than a normal laptop has. That is exactly why frontier models live in giant data centers and you cannot run them at home. Smaller open-weight models of a few billion parameters, by contrast, can fit on a personal computer, which is why a free tool like Ollama can download one and run it entirely on your own machine."
      },
      {
        "t": "callout",
        "tone": "emerald",
        "title": "WHY THIS MATTERS FOR PRIVACY",
        "body": "A cloud frontier model sends your words to another company's servers, where — depending on their policy — they may be stored or reviewed. A small open-weight model running locally keeps your words on your own device. It is a genuine trade-off between raw power and privacy, and neither choice is wrong."
      },
      {
        "t": "h3",
        "text": "One last caveat: parameters are not the whole story"
      },
      {
        "t": "p",
        "text": "It is tempting to rank models by parameter count alone, but that misses too much. The quality of the training data matters enormously — a model trained on careful, well-curated text tends to learn better habits than one fed a messy pile of everything. Design matters too. Architecture, meaning the blueprint for how a model is wired together, can make a big difference. One popular design, called Mixture-of-Experts, lets a model hold a huge total number of parameters yet only wake up a small, relevant slice of them for each question, so it stays faster and cheaper to run. We will meet a model family built around exactly that idea when we get to DeepSeek. The takeaway: parameter counts are a useful clue about a model's scale, but a smart, well-trained model can punch well above its size."
      }
    ],
    "section": "Start Here"
  },
  {
    "id": "frontier-vs-local",
    "title": "Frontier vs. Local: When to Use Which",
    "intro": "The most important skill in practical AI isn't picking the \"best\" model — it's matching the right kind of model to the job in front of you. This page shows you when to reach for a giant cloud model and when a smaller one running on your own computer is the smarter choice.",
    "blocks": [
      {
        "t": "h3",
        "text": "Two kinds of AI, defined plainly"
      },
      {
        "t": "p",
        "text": "Before we compare them, let's be crystal clear about what each one is. These are two very different ways to use AI, and understanding the difference is the whole game."
      },
      {
        "t": "bullets",
        "items": [
          "Frontier (cloud) model — a giant, leading-edge AI you access over the internet through a company's service, like the GPT family from OpenAI, the Claude family from Anthropic, or the Gemini family from Google. You type into a website or app, but the actual model lives in the company's data center on massive, expensive hardware. Think of it like electricity from the power grid — you don't own the plant, you just plug in and pay for what you use.",
          "Local model — a smaller, open-weight AI you download and run entirely on your own computer, often using a free tool called Ollama. Open-weight means the company published the model's internal settings (its weights — the millions of numbers the model learned during training) for anyone to download and run. Once it's on your machine, it works fully offline, with no internet and no company on the other end. Think of it like a generator in your garage — smaller than the grid, but it's yours and it runs even when the power's out."
        ]
      },
      {
        "t": "callout",
        "tone": "indigo",
        "title": "SIZE ISN'T EVERYTHING",
        "body": "On the hardest tasks, the biggest frontier models still tend to lead — but \"more capable\" and \"right for the job\" are not the same thing. A freight truck is more capable than a bicycle, yet you wouldn't ride a truck to the corner store."
      },
      {
        "t": "h3",
        "text": "Side by side"
      },
      {
        "t": "p",
        "text": "Here's how the two compare across the dimensions that actually matter when you're deciding. Neither column is the overall winner — notice how each one wins some rows and loses others."
      },
      {
        "t": "table",
        "headers": [
          "Dimension",
          "Frontier (cloud) model",
          "Local model"
        ],
        "rows": [
          [
            "Raw capability",
            "Generally the strongest available on hard reasoning, writing, and complex problem-solving",
            "Good and improving quickly; the best open-weight models handle a lot, but tend to trail the giants on the toughest tasks"
          ],
          [
            "Cost",
            "Pay per use — a subscription, or a charge based on how much text you send and receive; small amounts add up at scale",
            "No per-use fee after download; you're using hardware you already own (and its electricity)"
          ],
          [
            "Privacy / data control",
            "Your input leaves your machine and travels to the company's servers under their terms",
            "Nothing leaves your computer — you keep full control of your data"
          ],
          [
            "Speed",
            "Usually fast, running on the company's powerful hardware (though it depends on your connection and how busy the service is)",
            "Depends on your computer; can be quick on capable hardware and slower on older or lighter machines"
          ],
          [
            "Setup effort",
            "Almost none — open a website or app and start typing",
            "Some setup: install a tool, download the model, learn a few basics"
          ],
          [
            "Works offline",
            "No — it needs an internet connection",
            "Yes — runs on a plane, in a vault, anywhere with no signal"
          ],
          [
            "Customization",
            "Some tuning is offered, but within the limits the vendor sets",
            "High — you can swap models freely and adjust how they run"
          ],
          [
            "Best-fit tasks",
            "Hardest reasoning, very large documents, images or audio alongside text, top-quality output",
            "Routine, private, repetitive, or offline work"
          ]
        ]
      },
      {
        "t": "callout",
        "tone": "emerald",
        "title": "THE BENEFITS AT A GLANCE",
        "body": "Frontier models give you top-tier capability with almost no setup and no hardware to babysit. Local models give you privacy, offline reliability, and no per-use cost — you own the whole thing outright."
      },
      {
        "t": "h3",
        "text": "A quick decision guide"
      },
      {
        "t": "p",
        "text": "When a real task lands on your desk, run through these two lists. Usually one of them will light up clearly."
      },
      {
        "t": "p",
        "text": "Reach for a FRONTIER model when:"
      },
      {
        "t": "bullets",
        "items": [
          "You need maximum reasoning and top quality — a subtle analysis, a hard coding problem, or writing that has to be genuinely excellent.",
          "You need a huge context window — the amount of text a model can \"hold in mind\" at once. Frontier models can often take in a whole book or a large stack of documents in a single go.",
          "You need multimodal input — that just means the model can take in more than plain text, such as images, charts, or audio, not only typed words.",
          "The data is non-sensitive and you're comfortable sending it to a vendor — a public blog draft, a brainstorm, a general question.",
          "You'd rather not buy, run, or maintain any hardware — you just want to plug in and go."
        ]
      },
      {
        "t": "p",
        "text": "Reach for a LOCAL model when:"
      },
      {
        "t": "bullets",
        "items": [
          "The data is confidential or regulated — medical records, student data, legal files, trade secrets, anything covered by rules like HIPAA (health-privacy law) or FERPA (student-record privacy law) that must not leave your control.",
          "You need offline or air-gapped operation — air-gapped means a computer deliberately kept off the internet for security. Local models still work there; cloud models simply can't reach it.",
          "You want no per-use cost and full control — no meter running, and no vendor terms changing under you.",
          "The task is routine enough for a smaller model — summarizing your own notes, drafting a simple email, sorting text, quick lookups. A smaller model handles plenty of everyday work just fine."
        ]
      },
      {
        "t": "callout",
        "tone": "rose",
        "title": "THE PRIVACY RULE TO REMEMBER",
        "body": "Anything you type into a public cloud model leaves your machine and lands on someone else's servers. Never paste confidential company data, passwords or secret keys, or other people's personal information into a public cloud model. When in doubt, keep it local."
      },
      {
        "t": "h3",
        "text": "Why this matters — and where to learn the local side"
      },
      {
        "t": "p",
        "text": "The honest takeaway is that neither option is simply better. They're different tools for different jobs, and skilled people keep both in the toolbox. A journalist protecting a source, a clinic handling patient records, or a company guarding a product secret leans local for privacy and control. Someone tackling a gnarly analysis, working with images, or drafting polished prose may lean frontier for raw capability. The real skill is knowing which is which before you start typing."
      },
      {
        "t": "p",
        "text": "If running a model on your own computer sounds intimidating, don't worry — it's more approachable than it looks. This site's Experimentation Station walks you through setting up local models step by step, from installing Ollama to running your first fully offline chat, so you can feel the difference for yourself."
      },
      {
        "t": "callout",
        "tone": "amber",
        "title": "THE BEST OF BOTH WORLDS",
        "body": "You don't always have to choose. A powerful pattern is \"build with frontier, run with local\" — use a giant cloud model to design and refine, then a private local model for the day-to-day. We cover this Sovereign Hybrid approach later in this section."
      }
    ],
    "section": "Start Here"
  },
  {
    "id": "pick-the-right-one",
    "title": "Using Them Separately: Pick the Right Specialist",
    "intro": "Here's a freeing idea: you don't have to choose a single AI company and stick with it forever. Think of the frontier models as a team of specialist consultants — each strong at certain things — and simply call on whichever one fits the job in front of you.",
    "blocks": [
      {
        "t": "h3",
        "text": "The mindset: consultants, not a spouse"
      },
      {
        "t": "p",
        "text": "When people first explore AI, they often assume they must pick one company — one account, one loyalty — and treat everything else as a rival to avoid. That's not how professionals actually work. A smart small business doesn't hire one person to do the accounting, the legal contracts, the marketing photos, and the plumbing. It hires a specialist for each. The frontier models — the leading-edge, cloud-hosted AI systems from a handful of big labs — reward the same approach. Each one has genuine strengths, and each has honest weak spots. Matching the tool to the task usually beats forcing your favorite to do everything."
      },
      {
        "t": "p",
        "text": "A quick vocabulary note before the guidance. Context means how much material an AI can hold in mind at once — like the size of the desk it can spread papers across. Multimodal means it can work with more than just text — it can also look at images, listen to audio, or watch video. Open-weights means the model's inner settings are published, so you can download it and run it on your own computer instead of sending your words to someone else's servers. A training snapshot is the fixed slice of information a model learned from when it was built — like a textbook printed on a certain date, which doesn't know about anything that happened afterward. Keep those ideas handy; they explain why different models shine at different jobs."
      },
      {
        "t": "h3",
        "text": "A cheat sheet: your job, and a strong pick"
      },
      {
        "t": "p",
        "text": "The table below is a starting map, not a law. Every model listed can attempt every job — this simply points you toward a reasonable first choice for common tasks. Treat the strong pick as a sensible place to start, not the only right answer."
      },
      {
        "t": "table",
        "headers": [
          "Your job",
          "Strong pick",
          "Why"
        ],
        "rows": [
          [
            "Writing or fixing code, building an app, or auditing a huge stack of documents",
            "Anthropic (Claude family)",
            "A common favorite for clean, careful code and for staying coherent across very long inputs, so it can hold a big pile of documents or a whole codebase in mind at once. It comes in tiers — Haiku (fast and cheap), Sonnet (balanced), and Opus (most capable) — so you can trade speed against depth."
          ],
          [
            "Uploading massive audio, video, or reference archives to summarize",
            "Google (Gemini family)",
            "Built for very large context and strong multimodal work — it can take in long recordings, images, and big reference collections and pull them together. It also ties in neatly with Google's search and workspace tools."
          ],
          [
            "Rapid logical brainstorming, hard reasoning problems, or natural-sounding voice conversation",
            "OpenAI (GPT family)",
            "A strong, well-rounded generalist that's quick to think out loud, wrestle with tricky logic, and hold a smooth spoken conversation. It's also the most widely supported by other apps and plug-ins."
          ],
          [
            "Real-time internet and news analysis",
            "xAI (Grok family)",
            "Wired tightly to a live social feed and current web information, so it leans toward what's happening right now rather than a fixed training snapshot."
          ],
          [
            "Cheap, high-volume text processing at scale",
            "DeepSeek",
            "Designed to be very low-cost per word, which makes it attractive when you need to churn through large amounts of routine text without a big bill. Recent versions are also open-weight, so it increasingly overlaps with the run-it-yourself option below."
          ],
          [
            "Private, offline, you-own-it work",
            "Open-weights (Llama, Mistral, and others) run locally",
            "You download the model and run it on your own machine, so your data never leaves your computer — the right call when privacy or working offline matters most."
          ]
        ]
      },
      {
        "t": "h3",
        "text": "How to read that table fairly"
      },
      {
        "t": "p",
        "text": "Notice that each option leads on only certain jobs, and none of them wins everything. Claude's long-context skill is handy for a giant document review, but you'd probably reach for Gemini if that review included hours of video — and rival models often match or beat it on raw coding tests, so it's a favorite, not a lock. GPT is a superb generalist and often the easiest to talk to, yet it isn't automatically the sharpest on every hard problem. Grok's live-news wiring is genuinely useful for right-now questions, but that same freshness can pull in noisy or low-quality posts. DeepSeek's low price is real, and its open-weight versions are surprisingly capable, though a bargain option can still lag the very top labs on the hardest tasks. That's the honest picture: real strengths, real trade-offs, spread around."
      },
      {
        "t": "callout",
        "tone": "emerald",
        "title": "THE HABIT TO BUILD",
        "body": "For any task, ask what the job actually needs — long memory, live information, images and audio, low cost, or privacy — then pick the specialist that leads on that need."
      },
      {
        "t": "h3",
        "text": "Don't forget the privacy angle"
      },
      {
        "t": "p",
        "text": "The cloud models in that table are powerful partly because they run on enormous servers you'll never own. The honest trade-off is that your words travel to those servers to be processed. For most everyday questions that's perfectly fine, and the big labs publish policies about how they handle your data — though those policies differ, so it's worth a quick read of who keeps what, and for how long. But if you're working with sensitive material — a client's private records, unpublished research, personal health details — that's exactly when the open-weights option earns its place. Running a model like Llama or Mistral on your own machine keeps the whole conversation local. It usually won't match the very top cloud models on the hardest problems, but nothing leaves your desk, and that's sometimes worth more than raw horsepower."
      },
      {
        "t": "h3",
        "text": "The one rule that outlasts the version numbers"
      },
      {
        "t": "p",
        "text": "These models improve constantly, and they leapfrog one another all the time. The company that leads at coding this season might trail next season, and a cheap challenger can suddenly close the gap. So don't memorize a fixed ranking and cling to it. Instead, judge by the task in front of you today, and when a job matters, try two or three models on the same prompt and compare the results yourself. You'll learn more from one honest side-by-side test than from any leaderboard — and you'll get very good, very fast, at hiring the right specialist for the job."
      },
      {
        "t": "callout",
        "tone": "amber",
        "title": "PREFERENCES SHIFT",
        "body": "Today's best pick for a task may not be next month's. Re-check by the current job, run a quick comparison of a couple of models, and let the results — not loyalty — decide."
      }
    ],
    "section": "Using Them Well"
  },
  {
    "id": "hybrid-pipeline",
    "title": "Using Them Together: The Hybrid Pipeline",
    "intro": "Most people pick one AI and stick with it. But you can often do something smarter: chain several models together, letting each handle the phase it's strongest at. Here's how to think of your AI tools as a team instead of a single hire.",
    "blocks": [
      {
        "t": "h3",
        "text": "The big idea: an assembly line of AIs"
      },
      {
        "t": "p",
        "text": "Imagine a car factory. No single worker builds the whole car. One station stamps the metal, the next welds the frame, another paints it, and a final crew inspects everything. Each station is a specialist, and the half-finished car rolls from one to the next. A hybrid pipeline treats AI models the same way. Instead of asking one model to do everything, you line up two or three models and pass the work down the line. The key phrase to remember is this: the OUTPUT of one model becomes the INPUT of the next."
      },
      {
        "t": "p",
        "text": "Why bother? Because the frontier models — the leading-edge AI systems from companies like Google, OpenAI, and Anthropic — each have a slightly different character. One might be especially good at reading enormous amounts of material at once. Another might be a particularly steady hand at writing working software. A third might have a crisp touch for polishing words and fitting into the everyday tools you already use. None of these strengths is permanent or exclusive — the models trade places often, and they overlap a lot. But at any given moment, letting each one lean into what it does well tends to beat forcing a single model to be a jack-of-all-trades."
      },
      {
        "t": "callout",
        "tone": "amber",
        "title": "THE PATTERN, NOT THE BRAND",
        "body": "The specific models named below are just examples, and their rankings shift constantly. The lesson is the assembly-line pattern itself — hand each phase to whichever tool is best at it today. The brands will keep changing; the pattern won't."
      },
      {
        "t": "h3",
        "text": "A three-phase pipeline you can picture"
      },
      {
        "t": "p",
        "text": "Here's a concrete example. Say you want to turn a messy pile of research into a finished, working web app — a small website that does something useful. That's actually three very different jobs, so we hand each to a model suited for it. (Quick note on a term you'll see: context window means how much text a model can hold in its head at one time. A model with a large context window can read a whole folder of documents in one go, while a smaller one would run out of room. Several of today's frontier models offer large windows, so this isn't unique to any one brand — but some go especially big.)"
      },
      {
        "t": "steps",
        "items": [
          {
            "title": "Phase 1 — Research and ingestion",
            "detail": "Ingestion just means feeding material in for the model to absorb. Use a model known for a large context window, such as one from Google's Gemini family, which is often cited for the biggest windows available. Feed it everything at once: a folder of interview transcripts, reference PDFs, meeting notes, spreadsheets. Ask it to read the whole pile and produce one clean, detailed summary report — the key findings, themes, and facts. Its job is to digest a mountain of raw material into a single, organized document you can actually use."
          },
          {
            "title": "Phase 2 — Build",
            "detail": "Take that summary report and hand it to a model with a strong reputation for writing code, such as one from Anthropic's Claude family, working inside your code editor (the program a developer uses to write software). Tell it: here's the research, now build a working web app around it. Because it's starting from a clean, focused report instead of the original chaos, it can concentrate on writing solid, functioning software. Coding is a genuine strength here — though the other frontier families code well too, so this is a preference, not a rule."
          },
          {
            "title": "Phase 3 — Polish and optimize",
            "detail": "Run the finished code and text through a third model, such as one from OpenAI's GPT family, which is known for versatility and for plugging into a wide range of everyday tools. Ask it to tighten the writing, draft marketing copy to describe the app, and generate automated test scripts — small programs that check the app for bugs on their own. This is the inspection-and-finishing station: the product already works, and now you're making it shine."
          }
        ]
      },
      {
        "t": "p",
        "text": "Notice how each phase leaned on a different strength — one model's memory, another's building skill, a third's finishing polish — and how the report from Phase 1 fed Phase 2, whose app fed Phase 3. That handoff is the whole trick."
      },
      {
        "t": "h3",
        "text": "A worked example anyone can follow"
      },
      {
        "t": "p",
        "text": "You don't have to be a programmer to use this. Suppose you're a teacher who recorded fifteen interviews with local business owners and wants to turn them into a short article and a slide deck for your class. Phase 1: drop all fifteen transcripts into a large-context model and ask for a summary with the three or four themes that came up most, plus a memorable quote for each. Phase 2: hand that summary to a strong writing model and ask it to draft a warm, readable 600-word article built around those themes. Phase 3: pass the article to a third model and ask it to condense each section into slide bullet points and suggest a catchy title. Three tools, three passes, and you never asked any one of them to do the whole job at once."
      },
      {
        "t": "h3",
        "text": "Why an assembly line beats one giant model"
      },
      {
        "t": "compare",
        "left": {
          "title": "Watch-outs",
          "items": [
            "More moving parts — you're copying results between tools, so mistakes can slip through if you don't glance at each hand-off.",
            "Each model has its own data and privacy rules. If your material is sensitive, remember that cloud models typically send your text to a company's servers — check each provider's policy, or run a local model on your own machine for that phase.",
            "Costs and logins can add up when you juggle several paid services instead of one.",
            "A weak summary in Phase 1 quietly affects everything downstream — a rough start travels the whole line."
          ]
        },
        "right": {
          "title": "Strengths",
          "items": [
            "Each phase uses a strong tool for that specific job, so quality usually rises.",
            "You can inspect the work between stages and fix problems early, before they compound.",
            "It's modular — swap out any single model without rebuilding the whole workflow.",
            "You sidestep the weakness of any one model by never asking it to do something it's weak at."
          ]
        }
      },
      {
        "t": "callout",
        "tone": "emerald",
        "title": "MIX AND MATCH FREELY",
        "body": "There's nothing sacred about the exact three models above. Prefer a different tool for any phase? Swap it in. As long as the output of one becomes clean input for the next, the pipeline still works."
      },
      {
        "t": "callout",
        "tone": "rose",
        "title": "MIND THE HAND-OFFS",
        "body": "The pipeline is only as strong as its weakest stage — and its riskiest moments are the copy-paste hand-offs. Read what comes out of each phase before you feed it to the next."
      },
      {
        "t": "p",
        "text": "Start small. Try a simple two-model version first: one model to summarize a batch of documents, another to write something from that summary. Once you feel the rhythm of passing work down the line, adding a third specialist — or swapping the whole lineup for tools you like better — becomes second nature."
      }
    ],
    "section": "Using Them Well"
  },
  {
    "id": "sovereign-hybrid",
    "title": "The Sovereign Hybrid: Frontier + Local",
    "intro": "Here is the idea that ties this whole section together: you don't have to choose between the raw power of the cloud and the privacy of your own machine. You can borrow the best of both — and this page shows you how.",
    "blocks": [
      {
        "t": "p",
        "text": "On the earlier \"Frontier vs. Local\" page, we drew a line in the sand. A frontier model is one of the huge, top-tier AI systems that lives on a company's servers in the cloud — you rent its brainpower over the internet, and it is remarkably capable. A local model is a smaller AI that runs entirely on your own computer, using a free tool called Ollama (a program that downloads and runs open models on your machine, offline). Frontier models tend to be the most capable; local models are the most private. It looked like a straight trade-off — power on one side, privacy on the other."
      },
      {
        "t": "p",
        "text": "But there is a third option — call it Option C, the Sovereign Hybrid. It is the signature move of this whole approach, and once it clicks, it changes how you think about using AI with anything sensitive."
      },
      {
        "t": "h3",
        "text": "The core idea: use the cloud to build, use local to run"
      },
      {
        "t": "p",
        "text": "Think of it like hiring a world-class architect to design your house, and then living in that house completely on your own. The architect draws the plans and then leaves — they never move in. Here, the frontier model is the architect. You use its strong reasoning to construct the machine: to write the clean, complex code, design how your data will be organized, and build the templates and scaffolding (the reusable skeleton of a project that you fill in later). That is the part where borrowing a very capable cloud AI genuinely pays off."
      },
      {
        "t": "p",
        "text": "Then you take that finished framework — the whole working tool you just built — move it onto your own computer, and switch to a local model to actually operate it on your real, confidential data. The frontier model helped you build the tool. It never touches the sensitive information the tool later processes."
      },
      {
        "t": "h3",
        "text": "Data sovereignty — the payoff"
      },
      {
        "t": "p",
        "text": "The prize here is something called data sovereignty. In plain terms: your sensitive data never leaves your control. It stays on hardware you own, in a room you can see, and no one else — no company, no server, no internet connection — ever gets a copy. You borrowed the cloud's capability to construct the machine, but when it is time to run real data through it, you are fully self-contained. Nothing is uploaded, so there are no outside terms of service, data-retention policies, or breaches to worry about for that data."
      },
      {
        "t": "callout",
        "tone": "emerald",
        "title": "THE PRIVACY WIN",
        "body": "The cloud model sees only your project's blueprints — code, structure, and templates. Your actual confidential records are handled offline by a local model, so they never travel across the internet or land on anyone else's server."
      },
      {
        "t": "h3",
        "text": "How it works, step by step"
      },
      {
        "t": "steps",
        "items": [
          {
            "title": "Build in the cloud",
            "detail": "Work with a frontier model to design and write the whole framework — the code, the database structure (how information is stored and connected), the templates, and the logic. Feed it only fake or generic sample data at this stage, never the real thing. You are using its reasoning to construct the machine, not to process your secrets."
          },
          {
            "title": "Bring it local",
            "detail": "Download that finished framework onto your own computer, and set up a local model with Ollama so an AI can run entirely on your hardware. This is exactly the setup taught on the Experimentation Station page — so you will already know how to do it."
          },
          {
            "title": "Run offline on real data",
            "detail": "Turn on the machine you built and feed it your genuine confidential data. Once a local model is downloaded, it runs without any internet connection — you can even unplug entirely. The local model does the everyday work, and nothing ever leaves your control."
          }
        ]
      },
      {
        "t": "h3",
        "text": "A picture you can hold in your head"
      },
      {
        "t": "p",
        "text": "Imagine a small medical clinic that wants an internal tool to summarize and organize patient records. Patient data is about as sensitive as it gets, and sending it to an outside company may not even be legal under health-privacy rules. So the clinic uses a frontier model to build the tool — the capable cloud AI writes clean code, designs how records will be filed, and creates the templates, all using made-up sample patients. Then the clinic downloads that tool, sets up a local model on an office computer, and only then loads the real patient files, offline. The capable cloud AI built the machine; the private machine handles the private data. The same recipe fits a law office with confidential case files, an accountant with client tax records, or a therapist with session notes."
      },
      {
        "t": "table",
        "headers": [
          "Stage",
          "Which model",
          "What it touches"
        ],
        "rows": [
          [
            "Building the tool",
            "Frontier (cloud)",
            "Code, structure, templates, and fake sample data"
          ],
          [
            "Running the tool",
            "Local (offline)",
            "Your real, confidential data — only on your machine"
          ]
        ]
      },
      {
        "t": "h3",
        "text": "An honest look at the trade-offs"
      },
      {
        "t": "p",
        "text": "This is not magic, and it is fair to name the catches. A local model is genuinely less capable than a frontier one, so the everyday running-the-data work will be simpler — and sometimes rougher — than what the cloud could do. There is real setup effort, too: you have to build the framework carefully and get Ollama running, and you own the maintenance afterward. And you have to be disciplined at the boundary. The build stage is the one moment your project meets the cloud, so it must use only fake or scrubbed sample data. Frontier models have their own honest downsides worth remembering — ongoing cost, dependence on a company's servers, and behavior that can shift as the model is updated — which is exactly why keeping real data on the local side is worth the effort."
      },
      {
        "t": "callout",
        "tone": "rose",
        "title": "MIND THE HANDOFF",
        "body": "The whole privacy promise depends on keeping real confidential data out of the build stage. Design and test with fake examples in the cloud; save the genuine records for the offline machine."
      },
      {
        "t": "p",
        "text": "If you are ready to try the local half of this, head to the Experimentation Station, where installing Ollama and running your first local model is walked through from scratch. That is the piece that makes the Sovereign Hybrid real — and it is simpler to get going than most people expect."
      }
    ],
    "section": "Using Them Well"
  },
  {
    "id": "benchmarks",
    "title": "Model Cards & Benchmarks",
    "intro": "Every AI company insists its newest model is \"the smartest.\" This page hands you the two tools that cut through the marketing — a model's official card and its standardized benchmarks — and shows you how to read them so you can see the real, steady march of improvement for yourself.",
    "blocks": [
      {
        "t": "h3",
        "text": "What a model card is"
      },
      {
        "t": "p",
        "text": "When a lab releases a frontier model — a frontier model is one of the most capable systems available at the time — it usually publishes a short document called a model card or a system card. The two names mean nearly the same thing; a system card often just leans a little more toward safety testing. Think of it as the model's official report card and spec sheet rolled into one. It is not an ad; it is the maker's own structured description of what they built."
      },
      {
        "t": "p",
        "text": "A helpful way to picture it: the card is like the nutrition label plus the owner's manual for a model. The label tells you what is inside and how it performs; the manual tells you what it is for and where it can go wrong."
      },
      {
        "t": "bullets",
        "items": [
          "Intended use — what the model is meant to do, and the tasks the makers designed it for.",
          "Training overview — roughly how it was built and what kind of data it learned from, described in general terms, because the exact recipe is usually kept private.",
          "Evaluation results — how it scored on various standardized tests, so you can compare it to other models.",
          "Known limitations and failure modes — the situations where it tends to get things wrong, such as making up facts or struggling with certain languages or tasks.",
          "Safety and risk evaluations — checks the lab ran to see whether the model could be misused or behave in harmful ways."
        ]
      },
      {
        "t": "callout",
        "tone": "amber",
        "title": "WHY IT MATTERS",
        "body": "A model card is the closest thing you get to an honest, first-party description of a model — more trustworthy than a glossy launch post. Just remember it is still written by the company that made the model, so read it as informed but not fully neutral."
      },
      {
        "t": "h3",
        "text": "What a benchmark is, and how to read a score"
      },
      {
        "t": "p",
        "text": "A benchmark is a standardized test that many different models take, using the same questions under similar conditions, so their results can be compared side by side. It is the AI world's version of everyone sitting the same exam. One long-famous example is MMLU — a broad multiple-choice test spanning 57 subjects such as history, law, medicine, and math."
      },
      {
        "t": "p",
        "text": "Reading a score is simpler than it looks. Suppose a model scores 88% on MMLU. That means it answered about 88 out of every 100 of these exam-style questions correctly. For comparison, a knowledgeable human expert lands around 90% — so an 88% is already in expert territory. Every number like this is approximate and, as reported around release, exact figures vary by source and by how the test was run."
      },
      {
        "t": "h3",
        "text": "Three benchmarks worth knowing"
      },
      {
        "t": "p",
        "text": "MMLU tests broad book-knowledge, but it is only one lens. These three round out the picture by measuring human preference, real software skill, and genuine reasoning."
      },
      {
        "t": "table",
        "headers": [
          "Benchmark",
          "What it tests",
          "Why it matters"
        ],
        "rows": [
          [
            "LMSYS Chatbot Arena",
            "Real people chat with two anonymous models and vote for the better answer, without knowing which is which.",
            "It reflects actual human preference in everyday use, not just exam scores."
          ],
          [
            "SWE-bench Verified",
            "Fix a real bug in a real software project, on its own, with no hints.",
            "It measures practical, real-world coding skill rather than textbook trivia."
          ],
          [
            "GPQA",
            "Answer PhD-level science questions written to be google-proof, meaning the answers cannot be found by a quick web search.",
            "It rewards genuine reasoning, since the answers cannot simply be looked up."
          ]
        ]
      },
      {
        "t": "h3",
        "text": "How to compare fairly"
      },
      {
        "t": "p",
        "text": "A comparison only means something when it is apples to apples: the same benchmark, run under the same conditions. Two scores from two different tests tell you nothing when placed next to each other, and even scores on the same test can be misleading if the setups differ."
      },
      {
        "t": "callout",
        "tone": "rose",
        "title": "WATCH FOR CHERRY-PICKING",
        "body": "Companies naturally highlight their best numbers, and the measurement method matters — one model's score may use a fancier prompting technique (a more elaborate way of wording and staging the question) than another's, so a small gap can be meaningless. Watch too for teaching to the test, called contamination, where the test questions leak into the training data and inflate a model's score."
      },
      {
        "t": "h3",
        "text": "The climb — how models have gone up and up"
      },
      {
        "t": "p",
        "text": "Here is the heart of the story. Using MMLU as a common yardstick, you can watch each model family climb generation over generation. All numbers below are approximate and as-reported around each release; exact figures vary by source and measurement method. Read them for the trend, not the decimals."
      },
      {
        "t": "p",
        "text": "The GPT and ChatGPT family:"
      },
      {
        "t": "table",
        "headers": [
          "Model (era)",
          "MMLU (approx.)"
        ],
        "rows": [
          [
            "GPT-3.5 (2022)",
            "~70%"
          ],
          [
            "GPT-4 (2023)",
            "~86%"
          ],
          [
            "GPT-4o (2024)",
            "~88%"
          ],
          [
            "Latest frontier (2025)",
            "~90%+"
          ]
        ]
      },
      {
        "t": "p",
        "text": "The Claude family:"
      },
      {
        "t": "table",
        "headers": [
          "Model (era)",
          "MMLU (approx.)"
        ],
        "rows": [
          [
            "Claude 2 (2023)",
            "~78%"
          ],
          [
            "Claude 3 Opus (2024)",
            "~86.8%"
          ],
          [
            "Claude 3.5 Sonnet (2024)",
            "~88–90%"
          ],
          [
            "Latest (2025)",
            "~90%+"
          ]
        ]
      },
      {
        "t": "p",
        "text": "The Gemini family:"
      },
      {
        "t": "table",
        "headers": [
          "Model (era)",
          "MMLU (approx.)"
        ],
        "rows": [
          [
            "Gemini 1.0 Ultra (2023)",
            "~90%"
          ],
          [
            "Gemini 1.5 Pro (2024)",
            "~85–86%"
          ],
          [
            "Gemini 2.x (2025)",
            "~90%+"
          ]
        ]
      },
      {
        "t": "p",
        "text": "Notice two things. First, all three families are now crowded up near the same 90% ceiling. Second, a small percentage gap near the top — say 88% versus 90% — is usually meaningless once you allow for measurement noise, meaning the small random wobble you get from re-running a test a slightly different way. The real story is the jump from about 70% to about 90% in just a couple of years."
      },
      {
        "t": "callout",
        "tone": "amber",
        "title": "KEY LESSON",
        "body": "MMLU essentially got solved — the term is saturated — as models reached human-expert level, so the industry retired it as a headline number and moved to harder tests like GPQA, MMLU-Pro, SWE-bench, competition math such as AIME, and Humanity's Last Exam. That churn — a benchmark gets saturated, then a harder one replaces it — is exactly what people mean when they say the models keep going up and up."
      },
      {
        "t": "h3",
        "text": "Caveats and practical advice"
      },
      {
        "t": "p",
        "text": "Benchmarks are useful guides, not verdicts. A model can top a leaderboard and still be a poor fit for the particular thing you need it to do, because your work rarely looks like a standardized exam."
      },
      {
        "t": "callout",
        "tone": "emerald",
        "title": "WHAT TO ACTUALLY DO",
        "body": "Lean on human-preference results like Chatbot Arena and real-task results like SWE-bench over raw exam scores, and always test a model on your own real work before you trust it. A benchmark win is a hint, not a promise."
      }
    ],
    "section": "Going Deeper"
  },
  {
    "id": "token-economics",
    "title": "Price vs. Intelligence: Token Economics",
    "intro": "Every time you use an AI model through a cloud service, you are paying by the word — sort of. This page explains how that pricing really works, and the one habit that keeps your bill sensible: matching the size of the model to the size of the job.",
    "blocks": [
      {
        "t": "h3",
        "text": "First, what is a token?"
      },
      {
        "t": "p",
        "text": "A token is a small chunk of text — the basic unit an AI model reads and writes in. It is usually a little less than a full word; on average, one token works out to roughly three-quarters of a word in English. Common short words are often a single token, while longer or unusual words get split into several pieces. You can picture it as the model reading and writing in syllable-sized bites rather than whole words at a time."
      },
      {
        "t": "p",
        "text": "This matters for your wallet because cloud AI services — the companies that let you send text to a model over the internet and get a reply — charge by the token. The more tokens flow in and out, the more you pay. So the length of what you send and what you get back is the meter that is running."
      },
      {
        "t": "callout",
        "tone": "indigo",
        "title": "QUICK RULE OF THUMB",
        "body": "About 100 tokens is roughly 75 words — an approximation, since the exact split varies by wording. So a one-page memo is on the order of a few hundred tokens, and a long report can be many thousands."
      },
      {
        "t": "h3",
        "text": "Input versus output: you pay for both"
      },
      {
        "t": "p",
        "text": "There are two sides to every AI request, and you are billed for each. Input is everything you send in — your question, your instructions, and any documents or context you paste. Output is everything the model writes back — its answer. Both are counted in tokens, and both cost money."
      },
      {
        "t": "p",
        "text": "Here is the twist most people miss: output usually costs more per token than input. Writing is treated as more expensive than reading. That means a model asked to write a long essay from a short prompt can cost more than a model asked to read a long document and give a one-line answer — even though the second job feels bigger to a human. When you are estimating cost, pay special attention to how much text you are asking the model to produce, not just how much you are feeding it."
      },
      {
        "t": "bullets",
        "items": [
          "Input — the text you send: your prompt, instructions, and any pasted context. Charged per token.",
          "Output — the text the model returns: its answer. Also charged per token, and usually at a higher rate than input.",
          "A short prompt that triggers a very long answer can be surprisingly pricey; a huge document that yields a tiny answer can be cheap."
        ]
      },
      {
        "t": "h3",
        "text": "The tiered strategy — the heart of it"
      },
      {
        "t": "p",
        "text": "Every major AI lab sells its models in tiers, like a product line that runs from an economy option to a premium one. At the light end are small models that are cheap and fast but less capable. In the middle are balanced, general-purpose models. At the top are flagship models built for the hardest reasoning, which cost the most per token. The whole game of token economics is simple to state: match the tier to the job. You do not buy a freight truck to carry a single grocery bag, and you do not send a genuinely hard problem to a bargain model."
      },
      {
        "t": "p",
        "text": "To make this concrete, here is how three of the best-known labs line up their families. Anthropic makes the Claude models; its current flagship-class options are Claude Opus and Claude Fable, both part of the Claude 5 generation and both aimed at top-tier, demanding work. Google's Gemini line uses Pro as its top tier. Note that model names and generations change often, so treat the specific names as examples of a stable pattern — light, balanced, and flagship — rather than a fixed list."
      },
      {
        "t": "table",
        "headers": [
          "Tier",
          "OpenAI",
          "Anthropic (Claude)",
          "Google (Gemini)",
          "Good for",
          "Relative cost"
        ],
        "rows": [
          [
            "Light and fast",
            "mini / nano-class GPT",
            "Claude Haiku",
            "Gemini Flash",
            "simple sorting, extraction, quick rewrites",
            "cheap"
          ],
          [
            "Balanced workhorse",
            "mainstream GPT",
            "Claude Sonnet",
            "Gemini Pro",
            "everyday drafting, summarizing, most tasks",
            "moderate"
          ],
          [
            "Flagship / deep reasoning",
            "OpenAI's reasoning models",
            "Claude Opus and Fable",
            "Gemini Pro (top tier)",
            "hard strategy, complex reasoning, high-stakes work",
            "premium"
          ]
        ]
      },
      {
        "t": "p",
        "text": "Read the table across, not down. The rows are what matter — a light model from any lab plays the same role, and so does a flagship from any lab. Anthropic offers Opus and Fable together at the flagship level, both suited to the hardest reasoning; Gemini uses Pro at its top tier. The columns simply show that each lab has a comparable option at each rung of the ladder."
      },
      {
        "t": "h3",
        "text": "How to route your work"
      },
      {
        "t": "p",
        "text": "Choosing a tier is really just sizing up the task first, then picking the smallest model that can do it well. Here is a plain guide."
      },
      {
        "t": "bullets",
        "items": [
          "Is the task mechanical — sorting items, pulling a name or date out of text, a quick tidy-up rewrite? Reach for a light-and-fast model.",
          "Is it everyday knowledge work — drafting an email, summarizing a report, answering a normal question? A balanced workhorse handles the great majority of these.",
          "Is it genuinely hard — multi-step strategy, tricky logic, or high-stakes work where a mistake is costly? That is when a flagship model earns its higher price.",
          "When unsure, start one tier lower than your instinct. If the answer falls short, move up. It is cheaper to escalate than to overpay by default."
        ]
      },
      {
        "t": "p",
        "text": "You do not always have to make this call yourself. Many AI apps now include a router — a piece of software that looks at each request, sends the easy ones to a cheap model automatically, and escalates only the hard ones to a flagship. Think of it like a hospital triage nurse: routine cases are handled quickly and cheaply, and only the complicated ones get sent to the specialist. A good router quietly does the tier-matching for you, request by request."
      },
      {
        "t": "callout",
        "tone": "amber",
        "title": "THE KEY INSIGHT",
        "body": "The single biggest lever on your AI bill is matching model size to task difficulty. Reaching for a flagship model on a job a light model could have handled is the most common way people overspend — often by a wide margin."
      },
      {
        "t": "h3",
        "text": "A governance bonus"
      },
      {
        "t": "p",
        "text": "Choosing smaller and cheaper models does more than save money — it can also lower your risk. Governance, in this context, means keeping data safe and staying within your organization's rules about where information is allowed to go. The two goals line up more often than you might expect."
      },
      {
        "t": "p",
        "text": "A lighter model usually needs less context to do a simple job, so you send less sensitive text out to a cloud service in the first place. And some small models can run locally — meaning on your own computer or your organization's own hardware, rather than being sent over the internet to an outside company. When a model runs locally, your data never leaves your control, which is often the strongest privacy protection available. So the same discipline that keeps costs down — using the smallest capable model, and keeping work close to home when you can — tends to reduce how much of your data you expose."
      },
      {
        "t": "callout",
        "tone": "emerald",
        "title": "TWO WINS AT ONCE",
        "body": "Right-sizing your model choice trims both your bill and your data exposure. The cheapest option and the safest option are frequently the same one."
      },
      {
        "t": "callout",
        "tone": "rose",
        "title": "A FAIR CAVEAT",
        "body": "Undersizing has a cost too. A light model asked to do genuinely hard work can produce wrong or shallow answers — and a bad answer on a high-stakes task is far more expensive than the tokens you saved. Match the tier honestly to the difficulty."
      },
      {
        "t": "callout",
        "tone": "indigo",
        "title": "TREAT NUMBERS AS APPROXIMATE",
        "body": "All figures here — the token-to-word ratio and the cheap-to-premium cost ladder — are rough and shift over time. Focus on the trend (light costs less, output costs more, flagship costs most), not on precise numbers, which vary by provider and by the way each source measures them."
      }
    ],
    "section": "Going Deeper"
  },
  {
    "id": "horizon",
    "title": "The Horizon: Where Cloud AI Is Going Next",
    "intro": "Predicting technology is a good way to look silly later, so let's stay grounded. But a few shifts are already visible on the horizon, and knowing what to watch for — and what to be careful about — will help you use these tools wisely as they arrive.",
    "blocks": [
      {
        "t": "p",
        "text": "For most of their short history, cloud AI models — the powerful models you reach over the internet, running on a company's distant computers rather than your own — have lived inside a text box. You type a question, they type back an answer, and that's the whole interaction. The next wave is about breaking out of that box: models that can act on your behalf, models that can work for a long time on their own, and models that remember more of what you've told them. That's exciting and genuinely useful, but each new power comes with a new responsibility for you, the person in charge. And a fair warning up front: much of this is still early and uneven, so treat the demos you see as a preview, not a finished product. Let's walk through the big ones."
      },
      {
        "t": "table",
        "headers": [
          "What to watch for",
          "In plain terms",
          "The catch"
        ],
        "rows": [
          [
            "Computer use",
            "The AI looks at your screen and clicks and types for you.",
            "It can click the wrong thing — supervise it."
          ],
          [
            "Deep research",
            "It works for a long time, reads many sources, and writes a cited report.",
            "Cited is not the same as correct — spot-check it."
          ],
          [
            "Cheaper reasoning",
            "Careful step-by-step thinking shows up in more everyday tools.",
            "Cheap does not mean flawless."
          ],
          [
            "Longer memory",
            "It holds more of your conversation and documents at once.",
            "More of your data sits with the provider."
          ],
          [
            "More capable agents",
            "It carries out multi-step tasks, not just single answers.",
            "Longer chains mean more chances to go astray."
          ]
        ]
      },
      {
        "t": "h3",
        "text": "Native Computer Use: AI that clicks and types for you"
      },
      {
        "t": "p",
        "text": "The clearest change coming is what the industry calls computer use. Instead of only writing text back to you, the model can actually look at a picture of your screen, move the mouse pointer, click buttons, and fill in web forms — roughly the way a human assistant would if you handed them your laptop. Ask it to book a table, rename a batch of files, or copy numbers from a website into a spreadsheet, and it tries to do the steps itself rather than just telling you how. Several of the big labs are building this, so you'll likely meet it under different product names rather than as one universal feature."
      },
      {
        "t": "p",
        "text": "The appeal is obvious: this is a machine for automating busywork, the small repetitive chores that eat up an afternoon. Early versions of this already exist, and they are impressive in short demos. But be honest about where they are today — they are still slow, they misread cluttered screens, and they sometimes click the wrong thing with total confidence. Think of it less like a seasoned employee and more like a brand-new intern who is fast but needs watching."
      },
      {
        "t": "callout",
        "tone": "rose",
        "title": "SUPERVISE THE CLICKS",
        "body": "A model that can click can also click something you didn't intend — deleting a file, sending a message, or confirming a purchase. Grant it access narrowly, watch what it does, and never let it operate unattended in an account where a wrong click really matters, like your bank or email."
      },
      {
        "t": "p",
        "text": "There's a privacy angle too. To use your computer, the model has to see your screen, and with a cloud model that screen image travels to a company's servers to be processed. That may be perfectly fine for booking a restaurant, and genuinely uncomfortable for handling medical records or a client's private files. This is one of the clearest reasons the skill of thinking about where your data goes — which this site teaches — only becomes more valuable, not less."
      },
      {
        "t": "h3",
        "text": "Autonomous deep research: an assistant that works for hours"
      },
      {
        "t": "p",
        "text": "The second shift changes how long the AI works before it answers. Today most models reply in a few seconds. The emerging pattern, often called deep research, is the opposite: you give the model a meaty question, and it goes off to work in the background for many minutes — sometimes a good part of an hour — visiting many web pages, comparing what different sources say, and then handing back a long, organized report with citations, which are notes pointing to where each claim came from. Autonomous here just means it keeps going on its own without you nudging it at every step."
      },
      {
        "t": "p",
        "text": "Done well, this is like having a tireless research assistant. Ask it to compare five products, summarize the state of a scientific debate, or gather background on a company, and you get a structured briefing instead of a single paragraph. Here is how one of these long-running research jobs typically unfolds:"
      },
      {
        "t": "steps",
        "items": [
          {
            "title": "You set the question",
            "detail": "You describe what you want to know and, ideally, how thorough or narrow it should be."
          },
          {
            "title": "It makes a plan",
            "detail": "The model breaks your question into smaller sub-questions to chase down one by one."
          },
          {
            "title": "It searches and reads",
            "detail": "It runs many web searches and opens page after page, pulling out the relevant bits."
          },
          {
            "title": "It cross-checks",
            "detail": "It compares sources against each other to spot agreement, disagreement, and gaps."
          },
          {
            "title": "It writes it up",
            "detail": "It returns an organized report with citations pointing to where each fact came from."
          }
        ]
      },
      {
        "t": "callout",
        "tone": "amber",
        "title": "CITED IS NOT THE SAME AS CORRECT",
        "body": "A footnote makes a report look authoritative, but the model can still misread a source or point to one that's wrong. Treat the citations as a starting point to spot-check, not a guarantee — click a few and confirm they say what the report claims."
      },
      {
        "t": "h3",
        "text": "Also worth watching: cheaper thinking, longer memory, more capable agents"
      },
      {
        "t": "p",
        "text": "A few quieter trends will shape your everyday experience even if they don't make headlines. Each is a real improvement, and each has a catch."
      },
      {
        "t": "bullets",
        "items": [
          "Cheaper reasoning — reasoning here means the deliberate, step-by-step problem solving a model does before answering, rather than blurting out the first thing. That careful mode used to be reserved for expensive premium models, and it is getting dramatically cheaper to run, so more of the everyday tools you already use should start thinking things through — often at no extra cost to you. Cheaper does not mean flawless, though, so the same double-checking still applies.",
          "Longer memory — models can hold much more of a conversation, or a much bigger stack of documents, in mind at once, so you repeat yourself less. The trade-off is that the more of your information sits with a cloud provider, the more it matters who can see it and for how long.",
          "More capable agents — an agent is simply an AI that carries out a multi-step task rather than answering one question, chaining several actions together to reach a goal. They're getting steadier, but a longer chain of steps also means more places for a small early mistake to snowball into a wrong result."
        ]
      },
      {
        "t": "p",
        "text": "Notice the theme running through all of these. Every capability that makes the AI more powerful also hands it more of your data, more independence, or more chances to go astray — which is exactly why staying in the loop stays important. It's also worth remembering that no single company leads on all of this at once; the field is genuinely competitive, and today's front-runner on one feature is often behind on another."
      },
      {
        "t": "h3",
        "text": "The durable human skills"
      },
      {
        "t": "p",
        "text": "It's easy to read a page like this and feel like the machines are about to make people unnecessary. The honest picture is calmer than that. As these tools get more capable and more autonomous, the value doesn't drain out of the human in the chair — it moves. The prize shifts away from doing every step yourself and toward three skills that don't go out of date."
      },
      {
        "t": "bullets",
        "items": [
          "Directing — knowing how to describe what you actually want clearly enough that a capable assistant can deliver it.",
          "Checking — reviewing the work with a healthy skepticism, so a confident-sounding mistake doesn't slip through unnoticed.",
          "Protecting — deciding what information is safe to hand a cloud model and what should stay on your own machine."
        ]
      },
      {
        "t": "callout",
        "tone": "emerald",
        "title": "YOU'RE ALREADY LEARNING THE RIGHT THINGS",
        "body": "Directing these tools, checking their work, and guarding your data are precisely the habits this site is built to teach — including the option to run your own local models when privacy matters most. The horizon is worth watching, and you're well-equipped to meet it."
      }
    ],
    "section": "Going Deeper"
  },
  {
    "id": "cloud-powers-intro",
    "title": "The Cloud Powers: Who Hosts and Funds the Frontier",
    "intro": "Behind every frontier AI model stands a handful of enormous companies that own the buildings, the machines, and often the money that make it possible. Before we meet them one by one, let's understand what they are and why they hold so much quiet power.",
    "blocks": [
      {
        "t": "h3",
        "text": "What is a hyperscaler?"
      },
      {
        "t": "p",
        "text": "A hyperscaler is a company that runs enormous global networks of data centers. A data center is a warehouse-sized building filled with tens or hundreds of thousands of computers, all humming away, connected to fast internet, and cooled by industrial air-conditioning so they don't overheat. Picture a giant windowless warehouse where, instead of shelves of boxes, there are aisle after aisle of computers stacked in tall racks. A hyperscaler owns many of these buildings, spread across the world, and rents out slices of that capacity to anyone who needs it. In a real sense, these companies are the landlords of the modern internet — when you use an app, stream a show, or store photos in the cloud, there's a good chance it's living inside a hyperscaler's data center."
      },
      {
        "t": "p",
        "text": "You'll hear one word constantly in the AI world: compute. Compute just means raw computing power — the horsepower a machine has to do calculations, the way horsepower measures the muscle of a car engine. Building and running a frontier AI model takes a staggering amount of it, far more than a normal website or app. There are two big jobs that eat compute. Training is the long, expensive process of teaching a model by feeding it mountains of data, a bit like sending it through years of school at once. Inference is what happens afterward, every time you ask the finished model a question and it answers. Both need compute, and today the biggest supplies of it sit inside the hyperscalers' data centers. So the question of who controls the world's compute is really the question of who can build powerful AI at all."
      },
      {
        "t": "h3",
        "text": "Why hyperscalers matter to frontier AI"
      },
      {
        "t": "p",
        "text": "You might expect the famous AI labs — the ones that make the models you've heard of — to be the center of this story. They are, but they don't stand alone. Each one is closely tied to at least one hyperscaler, for three reasons worth understanding."
      },
      {
        "t": "p",
        "text": "First, frontier models are simply too big to run anywhere else. Training a cutting-edge model can require thousands of specialized computers working together for weeks or months. No lab can keep that kind of hardware in a closet. So the labs rent capacity from, or partner with, a hyperscaler to get the compute they need. The hyperscaler supplies the buildings, the machines, the electricity, and the cooling; the lab supplies the ideas and the model."
      },
      {
        "t": "p",
        "text": "Second, the hyperscalers haven't just rented space to the labs — they've invested tens of billions of dollars directly into them. This is where the relationships get interesting. The labs are often described as independent, but financially they are woven tightly into one or more cloud giants. Here are the main pairings to remember. These ties are large but not exclusive: a lab can take money from more than one backer and can run on more than one cloud, and these arrangements shift over time."
      },
      {
        "t": "table",
        "headers": [
          "AI lab",
          "Main hyperscaler backer(s)"
        ],
        "rows": [
          [
            "OpenAI (makes GPT and ChatGPT)",
            "Microsoft (its largest early backer)"
          ],
          [
            "Anthropic (makes Claude)",
            "Amazon and Google"
          ],
          [
            "Google DeepMind",
            "Google itself (an in-house lab)"
          ]
        ]
      },
      {
        "t": "callout",
        "tone": "amber",
        "title": "KEY INSIGHT",
        "body": "The money and the compute tend to flow together. A hyperscaler invests in a lab, and the lab then commits to spending on that hyperscaler's data centers — so much of the investment loops back as cloud spending. It's a tight circle worth keeping in mind."
      },
      {
        "t": "p",
        "text": "This closeness creates something called lock-in — the practical difficulty of leaving once you've built your whole operation on one provider. When a lab's models, tools, and habits are all wired into one cloud, switching to another would be slow and costly, a bit like being fluent in a language and suddenly having to work in a different one. Lock-in isn't automatically bad, but it does mean the lab and its cloud partner need each other more with every passing year."
      },
      {
        "t": "p",
        "text": "Third, and most surprising, the hyperscalers increasingly build their own AI models and even design their own chips — the specialized processors that do the heavy lifting inside a data center. That quietly turns them into competitors of the very labs they fund. A company might invest billions in a lab's model while, one floor down, its own engineers build a rival model and a custom chip to run it more cheaply. This isn't necessarily dishonest — it's just the nature of a business that wants to control its own future — but it creates a genuine tension. Keep an eye on it as you read the profiles."
      },
      {
        "t": "callout",
        "tone": "indigo",
        "title": "A FAIR NOTE",
        "body": "None of this makes the hyperscalers villains or the labs pawns. These partnerships gave the labs resources they could never have assembled alone. The point is simply that independence and dependence coexist here, and it's healthy to see both."
      },
      {
        "t": "h3",
        "text": "Who you'll meet next"
      },
      {
        "t": "p",
        "text": "With that map in hand, we'll look at three players up close. The first two are classic hyperscalers with decades of history; the third is a newer, stranger kind of company built specifically for the AI moment."
      },
      {
        "t": "bullets",
        "items": [
          "Microsoft — the software giant behind Windows and Office, and the hyperscaler most closely tied to OpenAI. Its cloud platform, Azure, became a central home for frontier AI.",
          "Amazon — the company behind the online store, and the operator of the largest cloud platform in the world, Amazon Web Services (AWS). It is a major backer of Anthropic and a builder of its own AI chips.",
          "CoreWeave — a much younger company and a different animal entirely. It is what people call a neocloud: a business that does essentially one thing, rent out GPU computing power, rather than the thousand services a full hyperscaler offers. A GPU (graphics processing unit) is a chip originally built to draw video-game graphics that turned out to be ideal for AI work, because it can do huge numbers of calculations at the same time. Where Microsoft and Amazon do a thousand things, CoreWeave does one thing at massive scale."
        ]
      },
      {
        "t": "p",
        "text": "As you read each profile, hold the three ideas from this page in your mind: who supplies the compute, who supplies the money, and who might quietly be building a competitor. Those three questions unlock almost everything about how the frontier of AI is really powered."
      }
    ],
    "cat": "hyperscalers"
  },
  {
    "id": "chips-intro",
    "title": "The Chips That Power AI: Picks and Shovels",
    "intro": "Every AI model you have ever used runs on specialized computer chips, and the companies that make those chips sit at the very center of the AI economy. Let's meet them, starting with an old story about a gold rush.",
    "blocks": [
      {
        "t": "h3",
        "text": "The picks-and-shovels idea"
      },
      {
        "t": "p",
        "text": "When gold was discovered in California in 1849, thousands of hopeful miners rushed west dreaming of striking it rich. Most of them did not. The people who reliably got rich were the merchants selling the picks, the shovels, and the sturdy denim jeans, the tools every miner needed no matter who actually found gold. Selling the tools turned out to be a steadier business than digging for the treasure."
      },
      {
        "t": "p",
        "text": "Today's AI boom has its own picks and shovels: the specialized computer chips that every AI model is trained and run on. Whether or not any particular AI lab wins the race, all of them need enormous amounts of this hardware. (Training means teaching a model by feeding it mountains of examples; running, sometimes called inference, means using the finished model to answer your questions. Both take huge amounts of chip power, which the industry simply calls compute.) That makes the chipmakers something like the merchants of 1849, and possibly the most dependable winners of the entire AI rush."
      },
      {
        "t": "callout",
        "tone": "amber",
        "title": "KEY INSIGHT",
        "body": "You can be unsure which AI company will win and still notice that every one of them buys the same kind of chips. The companies selling those chips profit from all sides of the race at once."
      },
      {
        "t": "h3",
        "text": "Two kinds of AI chips"
      },
      {
        "t": "p",
        "text": "AI is, underneath it all, math, a truly staggering amount of it. The chips that do this math come in two broad flavors, and the difference between them explains much of what is happening in the industry right now. Both types live in giant buildings called data centers, warehouses full of computers that companies rent out over the internet as the cloud."
      },
      {
        "t": "bullets",
        "items": [
          "GPU (graphics processing unit) is the general-purpose workhorse of AI. A GPU was originally invented to draw video-game graphics, which requires doing many small calculations at the same time. It turned out that AI needs the exact same kind of many-things-at-once math, so GPUs became the standard tool. They are flexible: the same chip can train almost any AI model. Today they are made mainly by Nvidia and, as the leading challenger, AMD.",
          "Custom AI chip, also called an ASIC (application-specific integrated circuit), is a chip designed from scratch to do one job and only that job: AI math. Because it is purpose-built, it can be more efficient and cheaper to run than a general-purpose GPU, but it is less flexible, like a kitchen gadget that does one task perfectly instead of a Swiss Army knife. Google's TPU and Amazon's Trainium are the best-known examples."
        ]
      },
      {
        "t": "table",
        "headers": [
          "",
          "GPU (like Nvidia's)",
          "Custom AI chip / ASIC (like Google's TPU)"
        ],
        "rows": [
          [
            "Built for",
            "Many kinds of work; originally graphics",
            "One job: AI math"
          ],
          [
            "Flexibility",
            "High, runs almost any AI model",
            "Lower, tuned for specific tasks"
          ],
          [
            "Who buys it",
            "Almost everyone, across the industry",
            "Mostly the company that designed it"
          ],
          [
            "Analogy",
            "A Swiss Army knife",
            "A single perfect-fit tool"
          ]
        ]
      },
      {
        "t": "h3",
        "text": "Why one company came to dominate"
      },
      {
        "t": "p",
        "text": "For much of the AI boom, one name has stood above the rest in AI chips: Nvidia. Fast hardware is part of the story. Nvidia's data-center GPUs, from the earlier H100 and H200 through its more recent Blackwell generation, are prized for their speed, and each new generation raises the bar again. But the deeper reason is software. Nvidia makes something called CUDA, a software layer that lets AI programs talk to its chips. Over many years, nearly all AI code came to be written for CUDA. So even a competitor with an equally fast chip faces a mountain of existing software built for Nvidia's way of doing things."
      },
      {
        "t": "callout",
        "tone": "indigo",
        "title": "WHAT IS A MOAT?",
        "body": "A moat is a durable advantage that rivals struggle to cross, named after the water ring around a castle. CUDA is Nvidia's moat: not the chip itself, but the whole world of software already built around it."
      },
      {
        "t": "h3",
        "text": "Why everyone is racing to build their own"
      },
      {
        "t": "p",
        "text": "Depending so heavily on one supplier is uncomfortable. Nvidia's chips have been scarce, with demand routinely outrunning supply, and they are expensive. So the biggest technology companies, the ones that already run massive data centers, have started designing their own custom AI chips. Building your own hardware can save enormous amounts of money at scale, and it reduces lock-in, the situation where you are stuck relying on a single outside company that sets the price and controls the waiting list. Even if a homegrown chip is less flexible than an Nvidia GPU, using it for the specific work you do most often can pay off handsomely."
      },
      {
        "t": "p",
        "text": "The field is bigger than just the giants, too. AMD makes its own line of data-center GPUs, the Instinct family, positioning itself as the main general-purpose alternative to Nvidia. Newer companies such as Groq and Cerebras are building unusual chip designs aimed at running AI models very fast, and Microsoft has developed its own custom AI chip called Maia. Not all of these efforts will succeed, but together they show how much room the industry sees beyond a single dominant supplier."
      },
      {
        "t": "callout",
        "tone": "rose",
        "title": "DO NOT MIX THESE UP",
        "body": "In data centers, Google's AI chips are called TPUs (Tensor Processing Units). That is a completely different thing from the Google Tensor chip inside Pixel phones. Same word, different products: one runs giant models in the cloud, the other runs a phone."
      },
      {
        "t": "h3",
        "text": "Who we will meet next"
      },
      {
        "t": "p",
        "text": "The next four pages profile the key players making the picks and shovels of AI, each with genuine strengths and honest limits. Here is the lineup so you know where we are headed."
      },
      {
        "t": "bullets",
        "items": [
          "Nvidia, the dominant GPU maker, with the CUDA software moat that keeps most AI code loyal to its chips.",
          "AMD, the main challenger in general-purpose GPUs, working to give the industry a serious second choice with its Instinct line.",
          "Google's TPUs, the custom AI chips that power much of Google's own AI, one of the earliest and most mature ASIC efforts.",
          "Amazon's Trainium and Inferentia, Amazon's home-grown chips (one tuned for training models, one for running them) built to cut costs across its huge cloud."
        ]
      }
    ],
    "cat": "chips"
  }
];

export const FRONTIER_COMPANIES = [
  {
    "id": "openai",
    "cat": "giants",
    "title": "OpenAI",
    "tagline": "The Scale Pioneer",
    "intro": "OpenAI is the company that put modern AI in front of the whole world with ChatGPT, and today it powers a huge slice of the AI apps people use every day. Here's who they are, what they're great at, and where an honest reviewer would raise an eyebrow.",
    "blocks": [
      {
        "t": "p",
        "text": "Before we get to the profile, a couple of terms you'll see below. A frontier model is one of the biggest, most capable AI systems available at any given moment — the leading edge of what the technology can do. And a model family is a group of related models that share the same underlying design but come in different sizes and specialties, the way a car maker sells a compact, a sedan, and a truck built on shared engineering. OpenAI's best-known family is called GPT, and the friendly chat app built on top of it is ChatGPT."
      },
      {
        "t": "callout",
        "tone": "indigo",
        "title": "WHAT IS A REASONING MODEL?",
        "body": "Most AI answers in one quick pass, like blurting out the first thing that comes to mind. A reasoning model is tuned to slow down and work through a problem in steps before giving its answer — closer to showing your work on a math test. This helps a lot with logic, multi-step problems, and careful math, though it can be slower and cost more."
      },
      {
        "t": "fields",
        "items": [
          {
            "label": "Genesis Story",
            "body": "OpenAI began in 2015 as a non-profit research lab with a lofty mission: to make sure advanced AI benefits all of humanity, not just a few. To fund the enormous cost of building frontier models, it later grew a commercial side and took major multi-billion-dollar investment from Microsoft, which became one of its largest shareholders. Today that non-profit foundation still holds a controlling role over a for-profit company built to advance the same mission — an unusual hybrid, and one that has drawn plenty of debate about whether mission and money can stay aligned."
          },
          {
            "label": "Flagship Roster",
            "body": "The core is the GPT family, which most people meet through ChatGPT. Alongside it are dedicated reasoning models that deliberately think step-by-step before answering, aimed at harder problems in logic and math. There's also strong, natural-sounding voice technology for real-time spoken conversation. The lineup spans smaller, faster, cheaper models up to larger, more capable ones, so you can trade cost against horsepower."
          },
          {
            "label": "Ecosystem Sweet Spot",
            "body": "OpenAI has the broadest developer and business ecosystem of any AI company — a large share of the AI features tucked inside other apps are built on it. Companies plug the model into their own products through an API, short for application programming interface: a developer connection, like an electrical outlet that lets an outside app draw on OpenAI's AI as a power source. Its real-time voice is also a standout."
          },
          {
            "label": "Best At",
            "body": "Complex multi-step reasoning, logic, and math, where working through the problem in stages pays off. Fluent, fast spoken conversation that feels natural. And being the dependable default engine behind high-volume, everyday apps used by millions."
          },
          {
            "label": "When to Use",
            "body": "Reach for it as a powerful all-rounder — especially for hard logic, breaking a complicated problem into pieces, or fast back-and-forth voice interaction. If you want a capable jack-of-all-trades with a huge supporting ecosystem, this is a safe first choice."
          },
          {
            "label": "The Honest Review",
            "body": "OpenAI offers unmatched breadth, capability, and ecosystem reach, and it's widely trusted for good reason. It is not automatically the best at everything, though — rivals routinely match or beat it on particular tasks, and OpenAI ships new models so often that even fans can find it confusing to tell which one to use. As the commercial front-runner, its consumer data-use and tracking terms are also less transparent than some rivals', and costs can add up when you run a lot of requests. Treat the consumer product accordingly — it's great for everyday tasks, but don't paste confidential trade secrets into it."
          }
        ]
      },
      {
        "t": "callout",
        "tone": "rose",
        "title": "PRIVACY WATCH-OUT",
        "body": "With cloud AI, your typed words travel to the company's servers to be answered. OpenAI's consumer terms around data use are less clear than some competitors', so keep genuinely sensitive or confidential material out of the free chat product — this is exactly the kind of task where running your own local model shines."
      }
    ]
  },
  {
    "id": "anthropic",
    "cat": "giants",
    "title": "Anthropic",
    "tagline": "The Safety-First Builder",
    "intro": "Anthropic is one of the handful of companies building frontier AI — the leading-edge models that power tools like chatbots and coding assistants. Its whole identity is built around one idea: make AI that is powerful, but careful.",
    "blocks": [
      {
        "t": "p",
        "text": "Before we dig into the company, let's define two words you'll see a lot on this page. A model is the trained AI system itself — the engine that reads your words and writes a response. Anthropic's family of models is called Claude, and you talk to Claude through an app or website the same way you'd chat with a person."
      },
      {
        "t": "callout",
        "tone": "indigo",
        "title": "TWO TERMS TO KNOW",
        "body": "Constitutional AI means the model is trained against a written list of principles — a kind of constitution — and taught to check its own answers against those safety and ethics rules. Context window means how much text the model can hold in mind at once, like short-term memory for a single conversation."
      },
      {
        "t": "p",
        "text": "Anthropic pioneered that Constitutional AI approach, and it shapes everything the company makes. The aim is a model that reasons about whether a response is helpful and safe before it hands the answer back to you — rather than relying only on humans to flag every bad output after the fact. It's worth saying plainly: Anthropic is not the only lab that takes safety seriously. Every major AI company invests heavily in it. Anthropic simply made safety its founding headline, and that framing still runs through its products."
      },
      {
        "t": "fields",
        "items": [
          {
            "label": "Genesis Story",
            "body": "Anthropic was founded in 2021 by a group of researchers who left OpenAI — the makers of ChatGPT — because they worried AI was being commercialized faster than it was being made safe. They started their own lab to put safety research first. It is now funded significantly by both Amazon and Google, a notable arrangement since those two are also rivals in the AI race. Anthropic remains independently controlled by its founders."
          },
          {
            "label": "Flagship Roster",
            "body": "The Claude family comes in tiers so you can trade speed against brainpower. Think of them like engine sizes: Haiku is the small, fast, inexpensive one for quick everyday tasks; Sonnet is the balanced middle choice for most work; and Opus is the top tier, reserved for the hardest problems. Each tier gets refreshed over time, so it is the tiers — not any single version number — that matter."
          },
          {
            "label": "Ecosystem Sweet Spot",
            "body": "Anthropic leans toward businesses and developers rather than flashy consumer features. That focus is a strength for law firms, banks, and hospitals that answer to regulators and need auditable control over their data — but it also means fewer of the everyday consumer apps and gadgets that competitors ship."
          },
          {
            "label": "Best At",
            "body": "Working through very large amounts of text in a single pass — thanks to a large context window, Claude can hold a long document in mind at once. It is also known for following detailed instructions carefully, writing clean and readable software code, and offering strict data-governance controls that let organizations decide exactly how their information is stored and used."
          },
          {
            "label": "When to Use",
            "body": "Reach for Claude when you need to analyze a long document — a contract, a research paper, a dense report — or when you're writing and debugging code. It is a strong pick for Vibe Coding, where you describe what you want in plain English and let the AI draft the software for you."
          },
          {
            "label": "The Honest Review",
            "body": "Claude is genuinely well-respected for safety, tidy code, and careful enterprise data practices. But there are real trade-offs. That same caution can make it hedge or refuse borderline requests that a person would find harmless. Its consumer apps and third-party integrations are smaller than what OpenAI and Google offer. And it is not automatically best at everything — on plenty of tasks a rival model is just as good or better. Treat it as one strong option among several capable peers, not the default winner."
          }
        ]
      },
      {
        "t": "callout",
        "tone": "amber",
        "title": "A NOTE ON FAIRNESS",
        "body": "This very learning site was built using Anthropic's model — so we are leaning hard against hype here. Every frontier lab has genuine strengths and genuine weaknesses, and Claude is no exception."
      },
      {
        "t": "h3",
        "text": "The privacy angle"
      },
      {
        "t": "p",
        "text": "Because Claude runs in the cloud — on Anthropic's computers, not yours — the text you send travels off your device to be processed. Anthropic publishes fairly clear policies about how business data is handled, and enterprise plans (the paid tiers built for companies) can be set up so your data is not used to train future models. That said, any cloud model means trusting someone else with your words, and the same caution applies to every cloud provider, not just this one. This is exactly why this site also teaches running smaller models locally on your own machine, where nothing ever leaves your computer."
      }
    ]
  },
  {
    "id": "google",
    "cat": "giants",
    "title": "Google DeepMind",
    "tagline": "The Multimodal Master",
    "intro": "Google DeepMind is Google's flagship AI lab, and its models are built to do something most rivals only partly manage — take in not just text, but images, audio, and video, all at once. If you have a mountain of material and detailed questions about it, this is a family worth knowing.",
    "blocks": [
      {
        "t": "h3",
        "text": "Two words to know first"
      },
      {
        "t": "p",
        "text": "Before the profile, two pieces of jargon you'll see below. Multimodal means the model handles more than words — you can hand it a photo, a sound clip, or a video and it can make sense of them the same way it reads text. Think of a person who can read a document, look at a diagram, and listen to a recording, then discuss all three together. A context window is how much material the model can hold in mind at one time, measured in tokens (roughly, chunks of words — a token is a little under one whole word on average). A big context window is like a desk large enough to spread out every page of a book at once, instead of flipping through a few pages at a time."
      },
      {
        "t": "callout",
        "tone": "amber",
        "title": "WHY THE NAME",
        "body": "The group was formed by merging Google's internal AI teams with DeepMind, the London lab famous for AlphaGo, the program that beat one of the world's best human players at the board game Go. That heritage means deep scientific research sits at the core of the group."
      },
      {
        "t": "h3",
        "text": "Company profile"
      },
      {
        "t": "fields",
        "items": [
          {
            "label": "Genesis Story",
            "body": "Created by combining Google's in-house AI teams with DeepMind, the research lab behind AlphaGo. Today it is Google's top scientific-AI group, blending pure research with the muscle of one of the world's largest technology companies."
          },
          {
            "label": "Flagship Roster",
            "body": "The Gemini family, offered in tiers so you can trade speed for depth. Flash tiers are fast and inexpensive for high-volume everyday work; Pro tiers are the balanced middle choice; and larger tiers push for maximum capability on the hardest tasks."
          },
          {
            "label": "Ecosystem Sweet Spot",
            "body": "Gemini is woven directly into Google's everyday products — Search, the Workspace tools like Docs and Gmail, and Android phones. If you already live inside Google's world, the AI tends to show up right where you already work."
          },
          {
            "label": "Best At",
            "body": "Natively processing large video, audio, and image files inside a single prompt, holding on to enormous amounts of material thanks to its very large context window, and connecting smoothly to Google's products. Having all three of these strengths at once is hard for rivals to match."
          },
          {
            "label": "When to Use",
            "body": "Reach for it when you want to upload something huge and ask precise questions about specific parts — a two-hour lecture video, a long podcast, or a whole semester of readings dropped into one prompt. It shines when the challenge is the sheer volume of reference material."
          },
          {
            "label": "The Honest Review",
            "body": "The enormous context window, strong multimodal skills, and deep product integration make it excellent for working across large reference material. But some users find its high-level code organization or its precise, step-by-step instruction-following a notch behind rivals that specialize there, and leaning heavily on the Google ecosystem can create lock-in — a situation where your work and habits are so tied to one company's tools that switching later becomes costly or awkward."
          }
        ]
      },
      {
        "t": "h3",
        "text": "What that big context window really buys you"
      },
      {
        "t": "p",
        "text": "Because Gemini can take in so much at once, you often don't have to chop your material into small pieces and feed it in bit by bit. You can drop in the whole thing and ask about page 40 or the moment 90 minutes into a video, and it can usually find its way there. That's genuinely useful for research, study, and reviewing long documents. One honest caution, though: a bigger window doesn't guarantee the model will catch every tiny detail buried in the middle of a huge amount of text, so it's still wise to spot-check the answers that really matter."
      },
      {
        "t": "compare",
        "left": {
          "title": "Watch-outs",
          "items": [
            "Precise, step-by-step instruction-following can lag behind rivals that focus on it.",
            "High-level code structure is sometimes a step behind more specialized coding models.",
            "Deep Google-ecosystem ties can create lock-in that's hard to unwind later.",
            "A very large context window still may miss fine details, so verify what matters."
          ]
        },
        "right": {
          "title": "Strengths",
          "items": [
            "Best-in-class at handling images, audio, and video directly in one prompt.",
            "Very large context window lets you load huge reference material at once.",
            "Tight integration with Search, Workspace, and Android puts the AI where you work.",
            "Strong scientific research heritage from the team behind AlphaGo."
          ]
        }
      },
      {
        "t": "callout",
        "tone": "rose",
        "title": "PRIVACY WATCH-OUT",
        "body": "Gemini is a cloud service, so the video, audio, and documents you upload leave your device and travel to Google's servers. Check the terms and settings for how your data may be stored or used, and avoid sending sensitive material you wouldn't want off your own computer — this is one reason people also learn to run smaller models locally."
      }
    ]
  },
  {
    "id": "xai",
    "cat": "challengers",
    "title": "xAI",
    "tagline": "The Compute Beast",
    "intro": "xAI is one of the newest of the big frontier AI companies, and it made a name for itself in two ways: by building one of the largest computer clusters on the planet, and by giving its chatbot a blunter, less-buttoned-up personality than most rivals. Its family of models is called Grok.",
    "blocks": [
      {
        "t": "p",
        "text": "Before the profile, two pieces of jargon worth unpacking. A GPU cluster is a giant warehouse full of specialized AI chips called GPUs (graphics processing units), all wired together to work as one enormous brain. Training and running a frontier model — that is, a leading-edge model at the cutting edge of what AI can do — takes staggering amounts of this raw number-crunching power, so the size of a company's cluster is a real competitive advantage. xAI's cluster carries the nickname Colossus, it sits in a converted factory in Memphis, and its sheer scale is a big part of the company's identity."
      },
      {
        "t": "p",
        "text": "The second term is real-time data ingestion. Most AI models learn from a snapshot of the internet frozen at some point in the past, so they can be a bit behind on current events. Real-time ingestion means the model can also pull in what is happening on the internet right now. Grok is tightly connected to the live feed of X (the social platform formerly called Twitter, which is now part of the same company as xAI), so it can comment on breaking news and trending conversations as they unfold."
      },
      {
        "t": "fields",
        "items": [
          {
            "label": "Genesis Story",
            "body": "xAI was founded by Elon Musk in 2023 as a challenger to the established AI labs. The pitch was speed and scale: raise enormous funding, build a colossal supercomputer fast, and ship a model with a distinct, less-filtered voice. In 2025 xAI and the social platform X were combined into one company, tightening the link between the model and the live feed."
          },
          {
            "label": "Flagship Roster",
            "body": "The company's models are the Grok family, offered in a range of sizes from lighter, faster versions to larger, more capable flagship ones. Newer Grok releases have added the ability to understand images and to search X and the wider web live while answering a question."
          },
          {
            "label": "Ecosystem Sweet Spot",
            "body": "Grok lives most naturally inside X, where it can tap the live feed of posts. It is also available on the web, in a standalone app, and through a developer interface (an API, the plumbing that lets other apps send requests to the model), so it can be built into other products."
          },
          {
            "label": "Best At",
            "body": "Fast analysis of live internet trends and breaking news. Because it can reach into what people are posting and searching right now, it shines when the freshest possible information matters more than a polished, cautious tone."
          },
          {
            "label": "When to Use",
            "body": "Reach for Grok when recency is the whole point — tracking a developing story, gauging public reaction to an event, or summarizing a conversation that is trending this hour. It is a strong scout for what is happening on the internet at this moment."
          },
          {
            "label": "The Honest Review",
            "body": "The raw compute behind Colossus and the up-to-the-minute information are genuine strengths, and few rivals are wired quite so directly into a live social feed. But the deliberately less-filtered style, and a shorter track record in serious business settings than the older labs, mean you should double-check its outputs and be cautious using it for sensitive or high-stakes professional work."
          }
        ]
      },
      {
        "t": "callout",
        "tone": "amber",
        "title": "WHY RECENCY IS ITS EDGE",
        "body": "Most models answer from a fixed snapshot of the past; Grok's tie to a live feed lets it speak to the present moment. That is a real differentiator when the news is only minutes old."
      },
      {
        "t": "p",
        "text": "One fairness note, so you keep this in perspective. Live web search is not unique to xAI anymore — the other major model families can also look things up on the internet while they answer. What sets Grok apart is how directly it is plugged into X specifically, which makes it especially good at reading the pulse of that platform. That is a genuine strength for social-media trends, and a narrower one if your question has nothing to do with what people are posting."
      },
      {
        "t": "p",
        "text": "A word on that less-filtered style, stated fairly. Many AI models are tuned to be very careful and to add lots of caveats. Grok is intentionally tuned to be blunter and more willing to give a direct opinion. Some readers find that refreshing and more honest-feeling; others find it means the answers need closer checking. Neither reaction is wrong — it is a design choice, and the right question is simply whether that choice fits your task."
      },
      {
        "t": "callout",
        "tone": "rose",
        "title": "VERIFY BEFORE YOU RELY",
        "body": "Live internet data can carry rumors and errors that spread fast, and a blunter model may state uncertain things with confidence. Treat Grok's take on a breaking story as a strong lead to confirm, not a final verdict — especially for anything professional or high-stakes."
      },
      {
        "t": "p",
        "text": "On privacy, the usual cloud caution applies here as it does with every model in this section: your prompts travel to xAI's servers to be answered, and a tight connection to a live social platform means your questions live inside a busy, public-facing ecosystem. Read the current terms for how your data may be used, and for anything genuinely private, that is exactly the kind of task the local-model lessons elsewhere on this site are built for."
      }
    ]
  },
  {
    "id": "deepseek",
    "cat": "challengers",
    "title": "DeepSeek",
    "tagline": "The Efficiency Maverick",
    "intro": "DeepSeek is the lab that shook up the AI world by showing you don't need the biggest budget to build a top-tier model. Its clever, cost-cutting designs turned it into a case study that nearly every other company now studies closely.",
    "blocks": [
      {
        "t": "p",
        "text": "Most of the leading AI companies have spent enormous sums — think hundreds of millions of dollars — training their smartest models. DeepSeek, a research lab, drew global attention by building models that could hold their own against those giants for a small fraction of the cost. That single fact reframed a big question in AI: is raw spending the only path to a great model, or can clever engineering do just as much? DeepSeek's answer leans firmly toward clever engineering."
      },
      {
        "t": "h3",
        "text": "First, one key idea: Mixture-of-Experts"
      },
      {
        "t": "p",
        "text": "To understand what makes DeepSeek special, it helps to know one term that comes up a lot: Mixture-of-Experts, usually shortened to MoE. Imagine a giant hospital. If every patient who walked in had to be examined by every single doctor on staff at once, it would be slow and outrageously expensive. Instead, a receptionist routes each patient to just the two or three specialists who actually matter for their problem. MoE works the same way. Instead of waking up the entire giant model for every question, the model is split into many smaller expert sub-models, and only the few experts relevant to your specific question light up. The model is still huge overall, but only a slice of it does the work at any given moment."
      },
      {
        "t": "callout",
        "tone": "amber",
        "title": "WHY MoE MATTERS",
        "body": "Because only a fraction of the model runs per question, MoE models are much cheaper and faster to operate while still being very large and capable. It is the engine behind DeepSeek's famously low costs."
      },
      {
        "t": "p",
        "text": "One more term worth knowing: open weights. The weights are the millions of internal numbers a model learns during training — essentially its finished brain. When a company publishes those weights openly, other people can download the model and run it on their own computers, free of charge. DeepSeek publishes what people often call open-ish weights: the finished models are downloadable, but the company keeps some of the recipe (like the exact training data and process) private. Even so, being this open is unusual among the frontier labs and a big part of DeepSeek's appeal."
      },
      {
        "t": "h3",
        "text": "Company profile"
      },
      {
        "t": "fields",
        "items": [
          {
            "label": "Genesis Story",
            "body": "DeepSeek is a China-based research lab that made headlines by training models competitive with the frontier — the leading edge of AI — for a small fraction of the usual cost. It turned efficiency itself into its calling card and became a widely discussed case study across the industry."
          },
          {
            "label": "Flagship Roster",
            "body": "Its best-known families are the V3 line (general-purpose chat and text models) and the R1 line (reasoning-focused models that show their work by thinking through a problem step by step before answering). Both lean heavily on the Mixture-of-Experts design."
          },
          {
            "label": "Ecosystem Sweet Spot",
            "body": "DeepSeek shines for people and organizations who care about cost and openness. Because it publishes open weights, developers and hobbyists can download its models and run them themselves rather than paying per use to a hosted service."
          },
          {
            "label": "Best At",
            "body": "Maximum cost-efficiency for large-scale text work — summarizing, drafting, coding help, and answering questions at high volume without a punishing bill. It is also living proof that smart design can rival brute-force scale."
          },
          {
            "label": "When to Use",
            "body": "Reach for DeepSeek when you have a lot of text work to do and want strong results at the lowest cost, or when you specifically want a capable model you can run and control yourself. It is a natural fit for budget-conscious projects and for tinkerers who want to experiment."
          },
          {
            "label": "The Honest Review",
            "body": "The value and openness are genuinely remarkable, and the engineering earned its reputation. Like every lab, it is not automatically the strongest choice for every task — rivals may still lead on certain kinds of reasoning, coding, or polish, and the pecking order keeps shifting. And note plainly, without politics: DeepSeek is a China-based lab, so for confidential corporate or regulated data, be careful which hosted service you send that data to. A strong option is to run its open weights locally so nothing ever leaves your own machine."
          }
        ]
      },
      {
        "t": "h3",
        "text": "DeepSeek at a glance"
      },
      {
        "t": "table",
        "headers": [
          "What to know",
          "In plain terms"
        ],
        "rows": [
          [
            "Core idea",
            "Rival the biggest models at a fraction of the cost through clever design, not just more spending."
          ],
          [
            "Signature technique",
            "Mixture-of-Experts — only the relevant slice of a huge model runs per question."
          ],
          [
            "Main model families",
            "V3 (general text and chat) and R1 (step-by-step reasoning)."
          ],
          [
            "Openness",
            "Downloadable open weights; some of the training recipe stays private."
          ],
          [
            "Biggest strength",
            "Cost-efficiency and the freedom to run it yourself."
          ],
          [
            "Watch-out",
            "China-based hosting — match your data's sensitivity to where you send it."
          ]
        ]
      },
      {
        "t": "callout",
        "tone": "emerald",
        "title": "THE LOCAL OPTION",
        "body": "Because the weights are open, you can run DeepSeek's models on your own hardware — the Sovereign Hybrid idea. Your data stays put, giving you frontier-style capability with full privacy and control."
      },
      {
        "t": "p",
        "text": "A quick note on that privacy point, without any drama. A hosted service means someone else's servers do the computing, and your questions travel there to be answered — that is true of nearly every cloud AI, no matter the company. The practical takeaway is simply to match the sensitivity of your data to where you send it. Casual questions are fine anywhere, but confidential or regulated information deserves a careful choice, and running the open weights locally is one of the cleanest ways to keep it entirely in your own hands."
      }
    ]
  },
  {
    "id": "meta-mistral",
    "cat": "challengers",
    "title": "Meta & Mistral",
    "tagline": "The Open-Weights Heavyweights",
    "intro": "Most of the AI giants keep their best models locked inside their own servers. Meta and Mistral do something different — they hand you the actual model to keep, run, and even take apart. That single choice is a big part of what makes the private, offline AI you can run on your own computer possible.",
    "blocks": [
      {
        "t": "h3",
        "text": "First, what does \"open-weights\" mean?"
      },
      {
        "t": "p",
        "text": "When an AI model is trained, everything it learned gets stored as a giant list of numbers called weights — think of them as the finished recipe the model wrote for itself after reading a huge amount of text. Most frontier companies treat that recipe as a trade secret: you can rent access to it through their website or app, but you never see or hold the recipe itself. An open-weights model is the opposite. The company publishes the actual model file for anyone to download."
      },
      {
        "t": "p",
        "text": "Once you have that file, you can run the model on your own laptop or server, look inside it, adjust it for your own needs (that adjustment is called fine-tuning), and use it completely offline. Nothing you type has to leave your machine. This is exactly what powers local AI tools like Ollama — a free program that runs downloaded models on your own computer — and it is the backbone of this site's Experimentation Station, where you run models yourself instead of sending your words to someone else's cloud."
      },
      {
        "t": "callout",
        "tone": "emerald",
        "title": "WHY IT MATTERS",
        "body": "Open-weights means privacy (your data stays with you), no per-use fee (you already have the file), and no lock-in (no single company can raise the price or take it away). You own the tool, not just a subscription to it."
      },
      {
        "t": "p",
        "text": "Meta is the parent company of Facebook, Instagram, and WhatsApp; its open model family is called Llama. Mistral is a smaller, independent company based in France, and its models carry its own name — including a clever design called Mixtral. They are different organizations, but they share a mission that sets them apart from the closed giants: put capable AI directly in people's hands. They are not the only open-weights players — strong open models also come from other labs around the world — but Meta and Mistral are the two names Western users meet most often, and they are why a serious open-source AI scene exists at all."
      },
      {
        "t": "fields",
        "items": [
          {
            "label": "Genesis Story",
            "body": "Meta, the social-media company behind Facebook and Instagram, decided to release its Llama models as open-weights files that anyone could download and run — a striking move for a company its size. Mistral was founded by a small team of experienced AI researchers in France, with the explicit goal of building strong open models as a European alternative to the big American labs."
          },
          {
            "label": "Flagship Roster",
            "body": "Meta's lineup is the Llama family, offered in a range of sizes from small enough for a laptop to large enough for a data center. Mistral offers the Mistral family plus Mixtral, a design that quietly splits work among several specialist sub-models and only wakes up the ones a given task needs — so it stays fast without giving up much quality. That approach is called a mixture of experts."
          },
          {
            "label": "Ecosystem Sweet Spot",
            "body": "These are among the models people most often run at home or inside their own company's walls. They are common default choices inside local-AI tools like Ollama, and they are a foundation of this site's hands-on Experimentation Station."
          },
          {
            "label": "Best At",
            "body": "Being the bridge between frontier AI and your own private stack. When you want a genuinely capable assistant that you fully own — one that runs on your hardware, works offline, and never phones home — this is the category to reach for."
          },
          {
            "label": "When to Use",
            "body": "Use them when privacy, cost, or control matter more than squeezing out the absolute last bit of raw ability: personal projects, sensitive or regulated data, offline work, or building your own tools without paying per request. They are also a friendly place to learn how AI actually works, because you can open the hood."
          },
          {
            "label": "The Honest Review",
            "body": "For privacy, control, and long-run cost, open-weights models are hard to beat, because you host them yourself and answer to no one. The very peak of raw capability still tends to belong to the closed frontier giants, and the largest open models need real hardware to run well. But the gap is closing fast, and for most everyday work these models are already more than enough. One caution: \"open-weights\" does not always mean \"do anything you want\" — some releases come with license terms, so it is worth a quick read before commercial use."
          }
        ]
      },
      {
        "t": "h3",
        "text": "How they compare to the closed giants"
      },
      {
        "t": "compare",
        "left": {
          "title": "Watch-outs",
          "items": [
            "The single most powerful model on the market is usually still a closed one from a frontier lab, though the lead is narrowing.",
            "The biggest, best open models need a capable computer or server to run smoothly — a modest laptop can only handle the smaller versions.",
            "You are your own tech support: there is no company help desk when you self-host.",
            "Anyone can modify open weights, so a random downloaded copy may not behave the way the maker intended — stick to official releases from the company or a trusted host.",
            "A license may still apply, so the freedom is real but not always unlimited."
          ]
        },
        "right": {
          "title": "Strengths",
          "items": [
            "Strong privacy: your data never has to leave your device.",
            "No per-use fees — once you have the file, running it is essentially free.",
            "No lock-in: no company can cut you off, raise the price, or retire the model out from under you.",
            "More transparency: you can inspect the model and fine-tune it for your own purposes.",
            "Works fully offline, on a plane or an air-gapped network with no internet at all."
          ]
        }
      },
      {
        "t": "callout",
        "tone": "amber",
        "title": "THE BIG PICTURE",
        "body": "Meta and Mistral won't always win the crown for raw intelligence — but they hand you a capable model you truly own. That trade, capability you control versus capability you rent, is the heart of the choice between cloud and local AI."
      }
    ]
  },
  {
    "id": "microsoft",
    "cat": "hyperscalers",
    "title": "Microsoft",
    "tagline": "The OpenAI Partner and Platform Giant",
    "intro": "Microsoft may be the company that put AI in front of more people than anyone else on earth — not by building the flashiest model, but by tucking AI helpers inside the everyday software billions already use. Here is how one of the world's largest software companies became a central player in the AI boom.",
    "blocks": [
      {
        "t": "p",
        "text": "A quick bit of vocabulary before we start. The cloud just means renting computers over the internet instead of buying your own — think of it like renting a car for a trip rather than owning one that sits in your garage. Microsoft's cloud service is called Azure, and businesses use it to run software, store data, and, increasingly, tap into powerful AI models without owning any of the expensive hardware themselves."
      },
      {
        "t": "p",
        "text": "You will also see the word Copilot a lot here. That is Microsoft's brand name for its AI assistants — the little helper that can draft an email, summarize a document, or suggest the next line of computer code. When we say model, we mean the underlying AI brain that actually does the thinking. And when we say a frontier model, we mean one of the largest, most capable AI systems being built — the cutting edge, the kind that powers tools like ChatGPT. Microsoft both rents other companies' models to customers and, more recently, builds its own."
      },
      {
        "t": "fields",
        "items": [
          {
            "label": "Genesis Story",
            "body": "Microsoft has been a software giant for decades, famous for Windows and Office. It became a central force in the AI boom by investing well over ten billion dollars in OpenAI, the lab behind ChatGPT, and then weaving that AI into nearly all of its products."
          },
          {
            "label": "What They Offer",
            "body": "Three big things. First, the Azure cloud, where any business can rent OpenAI's models and run them safely. Second, Copilot assistants built into Windows, Microsoft 365 (Word, Excel, Outlook, and the rest of Office), and GitHub — the platform programmers use to store and write code. Third, and newer, its own models: the small and efficient Phi family, its in-house frontier models called MAI (its AI group is led by Mustafa Suleyman, a well-known figure who co-founded an earlier AI lab), and even its own custom AI chip called Maia."
          },
          {
            "label": "Where You Meet It",
            "body": "Almost certainly, you already have. If you use Microsoft 365, Windows, GitHub Copilot, or the Copilot built into the Bing search engine or the Edge web browser, Microsoft's AI is quietly working in the background."
          },
          {
            "label": "Best At",
            "body": "Distribution and integration — putting AI directly in front of hundreds of millions of people inside tools they already know and open every day. For companies, it also offers a trusted, enterprise-grade place to run AI, meaning it is built for the security, privacy, and reliability that large organizations demand."
          },
          {
            "label": "The Catch",
            "body": "Its position is genuinely complicated. Microsoft is at once OpenAI's biggest backer and, through its own MAI models, a growing competitor. And leaning heavily on the Microsoft and Azure ecosystem can create lock-in — a situation where switching to a rival later becomes painful and costly because so much of your work already lives inside one company's tools."
          },
          {
            "label": "The Honest Review",
            "body": "Microsoft has unrivaled reach and enterprise trust, and offers the easiest on-ramp to AI for most organizations. But it is more a platform and distributor than a pure research lab; its own frontier models are newer and less proven than the leaders'; and its relationship with OpenAI — part partner, part rival — is famously complex."
          }
        ]
      },
      {
        "t": "h3",
        "text": "How the pieces fit together"
      },
      {
        "t": "p",
        "text": "It helps to picture Microsoft's AI strategy as three layers stacked on top of each other. At the bottom is the plumbing — the Azure cloud and, increasingly, Microsoft's own Maia chips, which are the specialized hardware that AI runs on. In the middle sit the models, both the ones Microsoft rents from OpenAI and the Phi and MAI models it builds itself. At the top is Copilot, the friendly face most people actually touch. The genius of the plan is that Microsoft can swap or mix the middle layer — using OpenAI today, its own models tomorrow — without most users ever noticing, because the Copilot experience stays the same."
      },
      {
        "t": "table",
        "headers": [
          "Layer",
          "What it is",
          "Where you notice it"
        ],
        "rows": [
          [
            "Copilot (the face)",
            "The AI assistant you talk to",
            "Word, Excel, Windows, GitHub, Edge"
          ],
          [
            "Models (the brains)",
            "OpenAI's models plus Microsoft's own Phi and MAI",
            "Behind the scenes, powering Copilot"
          ],
          [
            "Azure and Maia (the plumbing)",
            "Cloud computers and custom AI chips",
            "Rented by businesses; invisible to most users"
          ]
        ]
      },
      {
        "t": "callout",
        "tone": "amber",
        "title": "KEY INSIGHT",
        "body": "Microsoft's real superpower is not building the smartest model — it is distribution. When AI ships inside Windows and Office, it reaches more people than any standalone app ever could."
      },
      {
        "t": "h3",
        "text": "The partner-and-rival puzzle"
      },
      {
        "t": "p",
        "text": "The most unusual thing about Microsoft's role is that it wears two hats at once. It is OpenAI's largest financial backer and sells OpenAI's models to businesses on Azure — yet it also builds MAI, its own frontier models that could one day compete with OpenAI. Imagine investing heavily in a star chef's restaurant while quietly opening a kitchen of your own next door. That tension is real, and it is worth keeping in mind whenever you hear the two companies discussed. It does not make Microsoft's AI good or bad — it just means the company is hedging its bets rather than depending on any single partner forever."
      },
      {
        "t": "callout",
        "tone": "indigo",
        "title": "PARTNER AND RIVAL",
        "body": "Microsoft funds OpenAI and resells its models on Azure, yet also builds competing MAI models of its own. Holding both roles at once is genuinely unusual, and it shapes how the two companies work together."
      }
    ]
  },
  {
    "id": "amazon",
    "cat": "hyperscalers",
    "title": "Amazon",
    "tagline": "The Anthropic Backer and Cloud King",
    "intro": "You may know Amazon as the store where a package lands on your porch, but its biggest and most profitable business is quietly renting out computing power to the rest of the world. That business, called AWS, has become one of the most important places where frontier AI actually lives and runs.",
    "blocks": [
      {
        "t": "p",
        "text": "A quick bit of vocabulary before we start. A cloud platform is a giant collection of computers, owned by one company, that other businesses rent by the hour instead of buying and running their own machines. Think of it like renting an apartment instead of building a house — you get the space you need without the cost and hassle of owning the whole building. Amazon Web Services, almost always shortened to AWS, is the biggest such landlord in the world, and it quietly powers a huge share of the apps and websites you use every day."
      },
      {
        "t": "p",
        "text": "Amazon became a frontier AI power in two ways. First, it invested a very large amount of money — on the order of eight billion dollars, and by later agreements far more — in Anthropic, the lab that makes the Claude models, becoming one of its most important backers. Second, it built its own full AI stack. A stack just means the whole chain of pieces needed to make AI work, from top to bottom: a marketplace of models, its own models, and even its own specialized chips. When a company controls that many layers, it can offer AI to customers more cheaply and reliably."
      },
      {
        "t": "h3",
        "text": "The AI app store, and Amazon's own chips"
      },
      {
        "t": "p",
        "text": "The centerpiece is AWS Bedrock, which is best understood as an app store for AI models. Instead of signing a separate contract with each AI lab, a business can go to one place and rent many different companies' models side by side — Anthropic's Claude, Meta's Llama, Amazon's own models, and others — all with a single bill and one set of security controls. That neutrality is the selling point. You are not locked into one model-maker, which matters because the best model for a job changes often, and switching later can be slow and costly."
      },
      {
        "t": "p",
        "text": "Amazon also designs its own AI chips. A chip here is the specialized brain that does the heavy math AI depends on. Amazon makes two flavors. Trainium is built for training — the slow, expensive process of teaching a model by showing it enormous amounts of data. Inferentia is built for inference — the everyday work of running a finished model to answer your questions. (Trainium can do inference too, but its headline job is training.) Because Amazon designs these chips itself, it can run AI on AWS more cheaply than if it bought every chip from an outside supplier. Anthropic now trains Claude on enormous clusters of Amazon's Trainium chips — a huge build effort nicknamed Project Rainier — a sign of how tightly the two companies are woven together."
      },
      {
        "t": "callout",
        "tone": "amber",
        "title": "KEY INSIGHT",
        "body": "Amazon plays two roles at once — it is one of Anthropic's biggest financial backers and, through its Nova models, a model-maker competing in the same space. That dual role is powerful but comes with built-in tension."
      },
      {
        "t": "table",
        "headers": [
          "Piece",
          "What it is, in plain terms"
        ],
        "rows": [
          [
            "AWS",
            "The world's largest cloud — rented computing power that hosts a big slice of the internet."
          ],
          [
            "Bedrock",
            "A one-stop marketplace to rent many labs' AI models with a single bill and shared security."
          ],
          [
            "Nova",
            "Amazon's own family of AI models — solid and cost-effective, but not the category leaders."
          ],
          [
            "Trainium / Inferentia",
            "Amazon's home-grown AI chips — Trainium leans toward training, Inferentia toward running models."
          ],
          [
            "Project Rainier",
            "A giant cluster of Trainium chips that Anthropic uses to train the Claude models."
          ]
        ]
      },
      {
        "t": "fields",
        "items": [
          {
            "label": "Genesis Story",
            "body": "Amazon built AWS, the world's largest cloud platform, and turned it into an AI powerhouse. It became a frontier player by investing about eight billion dollars (and, by later agreements, far more) in Anthropic and by building its own end-to-end AI stack."
          },
          {
            "label": "What They Offer",
            "body": "AWS Bedrock, a marketplace for renting many labs' models from one place; its own Nova family of models; and its own AI chips — Trainium for training and Inferentia for running models — that make AI cheaper on AWS. Anthropic trains Claude on huge clusters of Trainium chips."
          },
          {
            "label": "Where You Meet It",
            "body": "Almost any app or business built on AWS or Bedrock — which is a very large slice of the internet — and the newer AI-powered features in Amazon's Alexa voice assistant."
          },
          {
            "label": "Best At",
            "body": "Being the neutral, enterprise-grade app store of AI models through Bedrock, driving down cost with its own chips, and reaching the enormous number of businesses that already run on AWS."
          },
          {
            "label": "The Catch",
            "body": "Like Microsoft, Amazon is both a major investor in a lab and a model-maker itself, which can create conflicting incentives. Its own Nova models are solid and cost-effective, but they are not the category leaders."
          },
          {
            "label": "The Honest Review",
            "body": "For businesses that want model choice, cost control, and strong enterprise security, AWS is often the go-to home for AI. But Amazon is less of a consumer-facing AI brand than its rivals, and its in-house models trail the frontier leaders in raw capability."
          }
        ]
      },
      {
        "t": "h3",
        "text": "How to think about Amazon in the AI landscape"
      },
      {
        "t": "p",
        "text": "If Amazon has a signature move, it is quiet infrastructure. Most people will never open an app called AWS, yet a great many of the AI features they touch are running on it behind the scenes. That is Amazon's strength and its limitation in one breath — it wins the businesses and stays invisible to the public. Here is the balanced picture."
      },
      {
        "t": "compare",
        "left": {
          "title": "Watch-outs",
          "items": [
            "In-house Nova models are capable and affordable, but not frontier leaders.",
            "Weak as a consumer AI brand — most people never see AWS directly.",
            "Being both a major Anthropic backer and a competing model-maker creates mixed incentives.",
            "Its strengths mainly benefit businesses, not everyday individual users."
          ]
        },
        "right": {
          "title": "Strengths",
          "items": [
            "Bedrock lets customers mix and match models without getting locked into one maker.",
            "Custom Trainium and Inferentia chips lower the cost of running AI.",
            "Deep reach into the huge number of businesses already on AWS.",
            "Enterprise-grade security and reliability built up over many years."
          ]
        }
      }
    ]
  },
  {
    "id": "coreweave",
    "cat": "hyperscalers",
    "title": "CoreWeave",
    "tagline": "The GPU Neocloud",
    "intro": "CoreWeave is one of the newest names in cloud computing, and it has one of the most colorful origin stories in AI. Its whole business is renting out raw computing power for AI — and it got there almost by accident, after starting life as a cryptocurrency-mining operation.",
    "blocks": [
      {
        "t": "p",
        "text": "To understand CoreWeave, it helps to unpack three words. A GPU (graphics processing unit) is a specialized computer chip that can perform a huge number of calculations at the same time. It was originally built to draw video-game graphics, but it turned out to be perfect for AI, which involves crunching mountains of math all at once. The cloud simply means renting computing power over the internet instead of buying and running the machines yourself — like renting a car by the hour instead of owning one. And compute is the everyday shorthand people use for that raw computing power: the chips, machines, and electricity it takes to run a big AI model."
      },
      {
        "t": "p",
        "text": "CoreWeave is what the industry now calls a neocloud — literally a new (neo) cloud company. Unlike the traditional cloud giants, which offer hundreds of different services, a neocloud does essentially one thing: rent out vast amounts of GPU power for AI. That narrow focus is the entire point of the business."
      },
      {
        "t": "callout",
        "tone": "amber",
        "title": "KEY INSIGHT",
        "body": "The big cloud giants are like department stores that sell everything. A neocloud like CoreWeave is a specialty shop that stocks one product — AI computing power — in enormous quantities, and tries to have it available when everyone else is sold out."
      },
      {
        "t": "h3",
        "text": "How a neocloud differs from a hyperscaler"
      },
      {
        "t": "p",
        "text": "A hyperscaler is one of the giant, do-everything cloud companies — Amazon, Microsoft, and Google run the best-known ones. They operate massive data centers (warehouse-sized buildings full of computers) and offer a sprawling menu of services: storage, databases, websites, email, and much more. A neocloud deliberately skips almost all of that and pours its energy into a single job — delivering GPU power for AI at scale, and delivering it fast."
      },
      {
        "t": "table",
        "headers": [
          "",
          "Hyperscaler",
          "Neocloud (CoreWeave)"
        ],
        "rows": [
          [
            "What it sells",
            "Hundreds of cloud services",
            "Mainly GPU compute for AI"
          ],
          [
            "Main customer",
            "Almost every kind of business",
            "AI labs and other AI builders"
          ],
          [
            "Biggest strength",
            "Breadth and stability",
            "Speed and specialized scale"
          ],
          [
            "Track record",
            "Decades, deep pockets",
            "Young and still proving itself"
          ]
        ]
      },
      {
        "t": "h3",
        "text": "The Profile"
      },
      {
        "t": "fields",
        "items": [
          {
            "label": "Genesis Story",
            "body": "CoreWeave began as a cryptocurrency-mining operation, a business that requires piles of GPUs to run. When the AI boom arrived and demand for those very same chips exploded, the company repurposed its stockpile of GPUs into a specialized AI cloud. Nvidia — the leading maker of AI chips — became an investor, and CoreWeave went public in 2025, meaning it began selling shares of itself on the stock market to anyone who wants to buy them."
          },
          {
            "label": "What They Offer",
            "body": "Fast, large-scale access to the latest Nvidia GPUs. Because renting out GPUs is all they do, they are often quicker to get new chips into customers' hands — and to tune their systems specifically for AI training — than the traditional giant clouds, which have to spread their attention across many products. Training means the slow, expensive process of teaching an AI model by feeding it huge amounts of data; it is the single most compute-hungry stage of building a model."
          },
          {
            "label": "Where You Meet It",
            "body": "Almost never directly. CoreWeave is upstream infrastructure — the power behind the power — the kind of plumbing most people never touch. Big AI labs, and even Microsoft, have rented enormous amounts of computing capacity from CoreWeave to train and run their models. You benefit from the results every time you use those AI tools, without ever knowing CoreWeave was involved."
          },
          {
            "label": "Best At",
            "body": "Raw, specialized GPU capacity at massive scale, available faster than the legacy clouds can often supply it. When a lab needs a mountain of chips right now to train a new model, CoreWeave is built to say yes quickly — that speed and focus is its whole selling point."
          },
          {
            "label": "The Catch",
            "body": "It is a young company that has grown fast on a lot of borrowed money (debt), and much of its revenue comes from just a handful of giant clients — so if even one of them pulled back, it would sting. It is also tightly bound to its Nvidia relationship for the chips it resells. All of this means its fortunes rise and fall with the AI-compute boom; a serious downturn would hit it harder than a diversified giant."
          },
          {
            "label": "The Honest Review",
            "body": "CoreWeave is a vivid, real-world example of the picks-and-shovels opportunity in AI, and a genuinely important supplier of the computing power the whole field runs on. But it is a newer, higher-risk business than the established cloud giants, and it is a behind-the-scenes provider — not a product you would ever sign up for and use yourself. Judge it as an intriguing but unproven specialist, not as a household name."
          }
        ]
      },
      {
        "t": "compare",
        "left": {
          "title": "Watch-outs",
          "items": [
            "Heavy debt: it borrowed a lot to buy chips fast, which raises the stakes if demand cools.",
            "Concentrated revenue: a few large customers account for much of its income.",
            "Nvidia dependence: it relies on one supplier for the chips at the heart of its business.",
            "Boom-tied: its success is closely linked to the AI-compute rush continuing."
          ]
        },
        "right": {
          "title": "Strengths",
          "items": [
            "Speed: often gets the newest Nvidia chips to customers faster than legacy clouds.",
            "Specialization: its systems are tuned specifically for demanding AI training.",
            "Scale: built to supply huge amounts of GPU power on short notice.",
            "Credibility: an Nvidia investment and major clients signal real demand for what it does."
          ]
        }
      },
      {
        "t": "callout",
        "tone": "emerald",
        "title": "PICKS AND SHOVELS",
        "body": "In a gold rush, some of the surest money comes from selling picks and shovels to the miners. CoreWeave sells the shovels of the AI rush — the computing power every lab needs — without having to bet on which lab strikes gold."
      },
      {
        "t": "callout",
        "tone": "rose",
        "title": "A YOUNGER, RISKIER BET",
        "body": "Fast growth funded by debt cuts both ways: it powers CoreWeave's rise, but it also makes the company more fragile than a cash-rich hyperscaler if AI demand ever slows."
      }
    ]
  },
  {
    "id": "nvidia",
    "cat": "chips",
    "title": "Nvidia",
    "tagline": "The King of AI Chips",
    "intro": "If frontier AI is a gold rush, Nvidia sells the shovels — and almost everyone digging is using them. This one company makes the chips that nearly every major AI model is trained on.",
    "blocks": [
      {
        "t": "h3",
        "text": "First, three words worth knowing"
      },
      {
        "t": "p",
        "text": "A GPU is a graphics processing unit — a specialized computer chip. It was originally built to draw video-game images on your screen, which requires doing millions of tiny math problems at the same time rather than one after another. That knack for doing enormous amounts of math in parallel — meaning many calculations running side by side at once — turned out to be exactly what training AI needs, so the same chips that once rendered game worlds now power AI. Think of a regular processor as one very fast chef, and a GPU as a kitchen with thousands of line cooks all chopping at once."
      },
      {
        "t": "p",
        "text": "CUDA is Nvidia's software platform — the toolkit and programming language that lets developers actually put those chips to work. Nearly all AI code in the world is written for CUDA. That matters because it creates what is called lock-in: switching away from Nvidia is not just about buying a different chip; you would also have to rewrite mountains of software, so leaving becomes so costly that most people simply stay."
      },
      {
        "t": "callout",
        "tone": "amber",
        "title": "KEY TERM: MOAT",
        "body": "A moat is a durable advantage a rival struggles to cross, like the water around a castle. Nvidia's fastest-chips lead is one moat, but CUDA — the software everyone already builds on — may be the deeper one."
      },
      {
        "t": "fields",
        "items": [
          {
            "label": "The Backstory",
            "body": "Nvidia was founded in 1993 to make graphics chips for video games. Decades later, when researchers discovered those same chips were ideal for the parallel math that AI depends on, Nvidia rode that wave to become one of the most valuable companies in the world."
          },
          {
            "label": "Flagship Silicon",
            "body": "Its data-center AI GPUs are the industry standard: the H100 and H200, and the newer Blackwell generation. A data center is a warehouse full of computers that companies rent or own to do heavy computing. These chips are not the graphics cards a gamer buys — they are room-filling, rack-mounted systems that cost far more, and they are the chips nearly every frontier model is trained on."
          },
          {
            "label": "Who Runs On It",
            "body": "Essentially everyone. OpenAI, Anthropic, Google, Meta, and the big cloud providers buy Nvidia GPUs by the hundreds of thousands. When a lab announces a giant new model, it was almost certainly trained on Nvidia hardware — even companies that also design their own chips still buy Nvidia in large volumes."
          },
          {
            "label": "Strengths",
            "body": "Two things at once: among the fastest AI chips available, and CUDA, the software platform virtually all AI code is written for. The chips win on raw speed, and the software keeps the whole industry building on Nvidia — a hardware-plus-software combination rivals have found very hard to match."
          },
          {
            "label": "The Trade-offs",
            "body": "The chips are extremely expensive and, in periods of heavy demand, frequently in short supply, so even wealthy companies can wait in line for them. And because so much code is tied to CUDA, moving to another vendor — another supplier — is genuinely painful, which is precisely why competitors and cloud giants are racing to build alternatives."
          },
          {
            "label": "The Honest Take",
            "body": "Nvidia is the clear leader and the safest bet in AI hardware today, with a software moat that is hard to overstate. But that dominance is a double-edged sword: it tends to mean high prices, tight supply when demand spikes, and an entire industry motivated to loosen Nvidia's grip — so its lead is strong but not guaranteed forever."
          }
        ]
      },
      {
        "t": "h3",
        "text": "Why one chipmaker sits at the center of it all"
      },
      {
        "t": "p",
        "text": "Here is the quiet reason Nvidia is so powerful. Its lead is not only about having the fastest chip this year — chip leads can and do change hands. The stickier advantage is that the world's AI software was written to run on Nvidia. A competitor could ship a faster or cheaper chip tomorrow and still struggle, because customers would have to rewrite years of work to use it. That is why you will keep hearing about rivals building their own chips: not because Nvidia is weak, but because depending on a single supplier makes everyone nervous — and gives them a reason to look for options."
      },
      {
        "t": "compare",
        "left": {
          "title": "Watch-outs",
          "items": [
            "Chips are very expensive, straining even large budgets.",
            "Supply can be tight when demand spikes, so buyers wait in line.",
            "CUDA lock-in makes moving to another vendor slow and costly.",
            "Heavy reliance on one supplier is a risk the whole industry feels."
          ]
        },
        "right": {
          "title": "Strengths",
          "items": [
            "Among the fastest and most proven AI chips in the market.",
            "CUDA — the software nearly all AI is built on.",
            "Trusted by every major lab and cloud, so it is the safe default.",
            "A hardware-plus-software combination rivals have struggled to copy."
          ]
        }
      }
    ]
  },
  {
    "id": "amd",
    "cat": "chips",
    "title": "AMD",
    "tagline": "The Challenger",
    "intro": "If Nvidia is the runaway leader in AI chips, AMD is the determined challenger trying to catch up. It is a veteran chipmaker that has spent decades as Nvidia's rival — and it now wants to give AI companies a real alternative.",
    "blocks": [
      {
        "t": "p",
        "text": "A quick bit of vocabulary before we start. An AI accelerator is a specialized chip built to do the enormous number of calculations that building and running AI models require — think of it as a heavy-duty engine designed for one very specific, very demanding job. Most of these chips are a type called a GPU (graphics processing unit), which was originally invented to draw video-game graphics but turned out to be perfect for AI math too, because both jobs involve doing huge amounts of similar arithmetic all at once. AMD and Nvidia are the two best-known makers of these chips, and for years they competed mainly over gaming graphics cards before AI became the bigger prize."
      },
      {
        "t": "p",
        "text": "Two more words you will see below. Memory, on an AI chip, is the on-board workspace where the model and its data sit while the chip is working — the bigger the workspace, the more of a large model can fit on a single chip instead of being split awkwardly across several. And a data center is the warehouse-sized building, packed with thousands of these chips, where AI models are actually built and served to users. AMD has made generous memory one of its main selling points, and the data center is where the real money in AI chips is now."
      },
      {
        "t": "fields",
        "items": [
          {
            "label": "The Backstory",
            "body": "AMD (Advanced Micro Devices) is a long-established chipmaker and Nvidia's historic rival in both gaming graphics and data-center processors. Having spent years as the scrappy underdog, it is now pushing hard to break Nvidia's grip on the AI chip market — the most valuable prize in the industry today."
          },
          {
            "label": "Flagship Silicon",
            "body": "Its Instinct line of AI accelerators — the MI300 series and the generations that follow it — is built to go head-to-head with Nvidia's top data-center GPUs. A recurring theme is offering more on-board memory for the money, which appeals to teams running very large models, since a chip with a roomier workspace can sometimes hold a big model on its own rather than needing several chips wired together."
          },
          {
            "label": "Who Runs On It",
            "body": "A growing list of cloud providers and AI companies are adopting AMD as a second source — a deliberate backup supplier so they are not dependent on Nvidia alone. Microsoft and Meta are among the notable users putting AMD chips to work at large scale, a strong signal that AMD is a serious option and not just a curiosity."
          },
          {
            "label": "Strengths",
            "body": "Strong raw performance and generous memory at competitive prices make it an attractive deal. It also offers an increasingly capable open software toolkit called ROCm as an alternative to Nvidia's software — open meaning the underlying code is public for anyone to inspect and improve, which gives developers another path to build on and lessens their dependence on any single vendor."
          },
          {
            "label": "The Trade-offs",
            "body": "Its software ecosystem is still catching up to the maturity of Nvidia's, so getting everything running smoothly can take more effort and troubleshooting. And despite real progress, AMD remains the clear number two rather than the industry's default choice, which means less code, tooling, and community experience is built around it."
          },
          {
            "label": "The Honest Take",
            "body": "AMD is the most credible challenger to Nvidia and a healthy force for competition and lower prices across the industry. But it still trails on software maturity and mind share — the informal sense among developers of which chip is the safe default — and moving a project off Nvidia takes genuine work. It is a strong alternative, not yet an effortless swap."
          }
        ]
      },
      {
        "t": "callout",
        "tone": "amber",
        "title": "WHY A SECOND SOURCE MATTERS",
        "body": "When one company makes the chips everyone needs, buyers face long waits and high prices. A credible rival like AMD gives customers leverage and keeps the whole market healthier — even for people who never buy an AMD chip."
      },
      {
        "t": "h3",
        "text": "The software gap, explained"
      },
      {
        "t": "p",
        "text": "The recurring sticking point for AMD is not the chip itself — it is the software. A chip is only as useful as the software that lets developers actually program it and get their AI models running on it. Nvidia's software toolkit, called CUDA, has had many years and a huge community building on top of it, so most AI code quietly assumes CUDA is there. That accumulated head start is often called Nvidia's moat — a business term for an advantage that is hard for rivals to cross, like the water-filled ditch around a castle. AMD's answer, ROCm, is open and improving quickly, but it is younger, so teams switching over sometimes hit rough edges and have to do extra tinkering to get their existing code working. That gap, more than raw chip performance, is what still keeps AMD in the challenger's seat."
      },
      {
        "t": "h3",
        "text": "How AMD stacks up at a glance"
      },
      {
        "t": "table",
        "headers": [
          "What matters",
          "Where AMD stands"
        ],
        "rows": [
          [
            "Raw performance",
            "Competitive with Nvidia's top data-center GPUs; strong on paper and in real workloads."
          ],
          [
            "On-board memory",
            "Often more generous for the price — a genuine edge for very large models."
          ],
          [
            "Price",
            "Positioned as the better value, giving buyers a bargaining chip against Nvidia."
          ],
          [
            "Software maturity",
            "ROCm is capable and improving fast, but younger and less battle-tested than CUDA."
          ],
          [
            "Mind share",
            "The clear number two; Nvidia is still most developers' default assumption."
          ]
        ]
      },
      {
        "t": "p",
        "text": "Put it all together and AMD occupies a specific, important role. It does not have to beat Nvidia outright to matter — it just has to be a good-enough alternative that buyers can credibly threaten to walk away. That pressure alone pushes prices down and innovation up across the entire AI hardware business. For a non-technical reader, the takeaway is simple: AMD is the reason Nvidia cannot completely name its own terms, and that competition quietly benefits everyone who uses AI, whether they ever think about the chips underneath or not."
      }
    ]
  },
  {
    "id": "google-tpu",
    "cat": "chips",
    "title": "Google TPU",
    "tagline": "The In-House Powerhouse",
    "intro": "Most companies building AI rent or buy their chips from an outside supplier. Google took a different path and designed its own. The result is the TPU, a custom chip built specifically for the heavy math that powers modern AI.",
    "blocks": [
      {
        "t": "p",
        "text": "First, a quick term. TPU stands for Tensor Processing Unit. A tensor is just a fancy word for a big grid of numbers, and modern AI does an enormous amount of grid-of-numbers math. A processing unit is a chip that does calculations. So a TPU is a chip whose whole reason for existing is to crunch AI math quickly and cheaply. Engineers call this kind of purpose-built chip an ASIC, short for application-specific integrated circuit, which simply means a chip designed to do one job rather than a bit of everything. Think of a TPU as a kitchen appliance built to do exactly one task extremely well, versus a general-purpose tool you can point at any problem."
      },
      {
        "t": "callout",
        "tone": "amber",
        "title": "NAME CLASH",
        "body": "The data-center TPU described here is not the same product as the Google Tensor chip inside Pixel phones. They share the brand word Tensor, but one is a cloud accelerator that lives by the thousands in a data center, and the other is a full smartphone processor. Don't let the shared name confuse them."
      },
      {
        "t": "p",
        "text": "A data center, by the way, is a warehouse-sized building packed with computers that run over the internet. When people say AI runs in the cloud, this is the physical place they mean. Google started building the TPU nearly a decade ago for a practical reason. At its scale, running AI for products like Search, Translate, and Photos was becoming expensive. Buying general-purpose chips from outside worked, but designing a chip tuned only for its own AI needs promised to be cheaper and more energy-efficient. That bet is the heart of this whole story."
      },
      {
        "t": "fields",
        "items": [
          {
            "label": "The Backstory",
            "body": "Google began designing its own AI chip nearly a decade ago because it needed cheaper, more power-efficient AI math at massive scale for its own products. Rather than keep buying general-purpose hardware, it built silicon tuned specifically to its needs."
          },
          {
            "label": "Flagship Silicon",
            "body": "Successive TPU generations, such as the v5 line and the newer Trillium and Ironwood chips. Unlike many AI chips that started life as graphics hardware and were adapted for AI, TPUs were custom-designed from the ground up purely for AI work, and each generation aims to do more math per watt of electricity than the last."
          },
          {
            "label": "Who Runs On It",
            "body": "Google itself is the biggest user: its Gemini AI models are both trained and run on TPUs. Outside developers can use them too, by renting TPU time through Google Cloud, Google's pay-as-you-go computing service."
          },
          {
            "label": "Strengths",
            "body": "Strong efficiency and cost when running at huge scale, which is exactly the scale Google operates at. It also benefits from tight vertical integration, meaning Google designs the chip, the data center, and the AI model together so they fit like puzzle pieces."
          },
          {
            "label": "The Trade-offs",
            "body": "You generally cannot buy a TPU to put in your own machine. You rent it on Google Cloud, which makes it less flexible and more tied to Google's ecosystem than a general-purpose graphics chip you can own. It also has a smaller community of outside developers than the market-leading alternatives from Nvidia."
          },
          {
            "label": "The Honest Take",
            "body": "The TPU is proof that a company at Google's scale can design custom in-house chips that rival Nvidia's, with real efficiency and cost wins. But it is a rent-only, Google-ecosystem option, not a chip most people can own or use independently."
          }
        ]
      },
      {
        "t": "h3",
        "text": "Training versus inference: what the chip is actually doing"
      },
      {
        "t": "p",
        "text": "AI chips do two different jobs, and it helps to name them. Training is the slow, expensive phase where a model learns, digesting mountains of examples until it gets good. Inference is the fast, everyday phase where the finished model answers your question or writes your email. Different TPU generations lean toward different jobs. Google's Trillium chips are versatile all-rounders, while the newer Ironwood generation is tuned especially for inference, the part that happens billions of times a day once a model is live. The word compute, which you will hear constantly in AI, just means raw calculating horsepower, and both training and inference are hungry for it."
      },
      {
        "t": "h3",
        "text": "Why build your own chip at all?"
      },
      {
        "t": "p",
        "text": "The obvious alternative is to buy GPUs from Nvidia. A GPU, or graphics processing unit, was originally invented to draw video-game images, but it turned out to be brilliant at AI math too, and Nvidia dominates that market. Google decided it was worth the effort and expense to design its own chip instead, for one big reason: control. When you design the whole stack yourself, you can squeeze out efficiency that a one-size-fits-all chip cannot match. That is the promise. The catch is that building world-class chips is enormously hard and costly, which is why only a handful of companies the size of Google even attempt it."
      },
      {
        "t": "h3",
        "text": "Vertical integration, in plain terms"
      },
      {
        "t": "p",
        "text": "One phrase worth unpacking is vertical integration. It means one company controls many layers of the stack instead of stitching together parts from different suppliers. Because Google designs the chip, the building it lives in, and the AI model that runs on it, each layer can be tuned to the others. It is the difference between a carmaker that builds the engine, body, and software in-house versus one that bolts together parts from many vendors. The in-house approach can be more efficient, but it also commits you to that one company's way of doing things."
      },
      {
        "t": "h3",
        "text": "Rent, don't own"
      },
      {
        "t": "p",
        "text": "Here is the practical limitation for outsiders. You cannot buy a data-center TPU and plug it into your own server the way you can buy an Nvidia GPU. You rent it, by the hour, on Google Cloud. That is convenient if you already live in Google's world, but it means your AI work becomes tied to one provider, an effect people call lock-in, being stuck with a vendor because moving away would be costly or painful. It also means TPUs have a smaller outside-developer community than Nvidia's, whose tools and tutorials are everywhere, so you may find fewer worked examples and helping hands when you get stuck."
      },
      {
        "t": "table",
        "headers": [
          "Question",
          "TPU (Google)",
          "GPU (Nvidia)"
        ],
        "rows": [
          [
            "Can you buy one?",
            "No, you rent it on Google Cloud",
            "Yes, buy it or rent it almost anywhere"
          ],
          [
            "Designed originally for",
            "AI math from day one",
            "Graphics, later adapted for AI"
          ],
          [
            "Outside-developer community",
            "Smaller",
            "Large and well established"
          ],
          [
            "Best fit",
            "Big AI jobs inside Google's ecosystem",
            "Broad, flexible, works almost everywhere"
          ]
        ]
      },
      {
        "t": "callout",
        "tone": "indigo",
        "title": "WHY IT MATTERS",
        "body": "The TPU shows that the biggest cloud companies, called hyperscalers because they run computing at planet-scale, can build their own AI chips instead of relying entirely on Nvidia. That competition can push efficiency up and prices down for everyone."
      }
    ]
  },
  {
    "id": "amazon-silicon",
    "cat": "chips",
    "title": "Amazon Silicon",
    "tagline": "Trainium and Inferentia",
    "intro": "Amazon doesn't just rent out computers in the cloud — it designs its own AI chips too. Through its cloud arm, AWS, the company builds custom silicon aimed at making AI cheaper and loosening its dependence on any single chipmaker.",
    "blocks": [
      {
        "t": "p",
        "text": "AWS stands for Amazon Web Services — the part of Amazon that rents out computing power over the internet. When a company needs servers, storage, or AI horsepower, it can rent them from AWS by the hour instead of buying and running its own machines. Because AWS runs so much AI itself and for its customers, Amazon is one of the largest buyers of AI chips on the planet — so it decided to design some of its own to control both the cost and the supply. A chip, by the way, is the small slab of silicon that does the actual calculating; designing your own means you get to shape it around exactly the work you do most."
      },
      {
        "t": "callout",
        "tone": "amber",
        "title": "TRAINING VS. INFERENCE",
        "body": "Training is the expensive, one-time job of teaching a model — like putting a student through years of school. Inference is using the finished model to answer a question — like that graduate now doing their job every day. Amazon built a separate chip family for each."
      },
      {
        "t": "fields",
        "items": [
          {
            "label": "The Backstory",
            "body": "Amazon runs one of the world's largest cloud businesses through AWS, which makes it one of the biggest buyers of AI chips anywhere. To cut its own costs and avoid leaning entirely on outside chipmakers like Nvidia — the company whose chips most AI is trained on today — AWS began designing custom AI silicon in-house, tuned specifically for the work its cloud does most."
          },
          {
            "label": "Flagship Silicon",
            "body": "Two custom chip families, both available only to rent on AWS. Trainium is built for training — the heavy job of teaching a model. Inferentia is built for inference — running a finished model so it can answer questions quickly and cheaply, over and over, for millions of users. Each family has gone through several generations, getting faster and more efficient with each one."
          },
          {
            "label": "Who Runs On It",
            "body": "Amazon's own services, plus AWS customers who want lower-cost AI computing without buying hardware. Most notably, Anthropic — the maker of Claude — trains models on enormous Trainium clusters (a cluster is just a huge number of chips wired together to act as one giant machine) in an effort known as Project Rainier, part of its partnership with Amazon. That shows these chips can handle serious frontier-scale work, not just small jobs."
          },
          {
            "label": "Strengths",
            "body": "Meaningfully lower cost for AI workloads run on AWS, which matters a lot when training and inference bills grow huge. Amazon also benefits from vertical integration — a fancy way of saying it controls the whole stack. It designs the chip, runs the cloud around it, and builds its own services on top, so it can tune all three to work together and squeeze out extra efficiency instead of stitching together parts from different vendors."
          },
          {
            "label": "The Trade-offs",
            "body": "Like Google's TPUs, these chips are rent-only inside AWS — you can't buy one and put it in your own building, so you're committing to Amazon's cloud to use them. They're also less flexible than general-purpose GPUs (the do-everything AI chips, mostly from Nvidia), and their software support is narrower. Amazon's toolkit for these chips, called AWS Neuron, is younger than Nvidia's long-established CUDA, so not every AI tool runs on them without extra work."
          },
          {
            "label": "The Honest Take",
            "body": "This is a smart cost-and-independence play that is already powering real frontier training, most visibly for Anthropic. But it's an AWS-only, behind-the-scenes option rather than a chip most people would choose by name, and its software ecosystem is younger and less broadly supported than Nvidia's. Think of it as a quiet workhorse inside Amazon's cloud rather than a household name."
          }
        ]
      },
      {
        "t": "h3",
        "text": "Why the software matters as much as the chip"
      },
      {
        "t": "p",
        "text": "CUDA is Nvidia's software toolkit — the set of programming tools that lets developers run their AI code on Nvidia chips. Over many years it became the standard almost everyone builds around, so most AI tools and libraries assume you're using it. Amazon's answer is a toolkit called AWS Neuron, which does the same job for Trainium and Inferentia. It works, and it connects to popular AI frameworks, but it's newer — which is exactly why Amazon's chips have a smaller ecosystem. Fewer tools work with them right out of the box, even when the underlying hardware is perfectly capable. This gap is a big part of why a strong chip can still be a harder sell than its raw speed suggests."
      },
      {
        "t": "h3",
        "text": "The two chips at a glance"
      },
      {
        "t": "table",
        "headers": [
          "Chip Family",
          "Its Job",
          "Everyday Analogy"
        ],
        "rows": [
          [
            "Trainium",
            "Training — teaching the model",
            "Sending a student through school"
          ],
          [
            "Inferentia",
            "Inference — using the finished model",
            "That graduate answering questions on the job"
          ]
        ]
      },
      {
        "t": "h3",
        "text": "The balanced view"
      },
      {
        "t": "compare",
        "left": {
          "title": "Watch-outs",
          "items": [
            "Rent-only on AWS — you can't own the chip, and using it ties you to Amazon's cloud.",
            "Less flexible than general-purpose GPUs for unusual or experimental work.",
            "Younger software ecosystem (AWS Neuron) than Nvidia's CUDA, so some tools need extra effort or don't run at all.",
            "A behind-the-scenes option most users never pick by name."
          ]
        },
        "right": {
          "title": "Strengths",
          "items": [
            "Meaningfully cheaper for AI workloads on AWS, which adds up fast at scale.",
            "Vertical integration — Amazon tunes the chip, the cloud, and its services together.",
            "Reduces Amazon's reliance on any single outside chipmaker for supply and pricing.",
            "Already proven on frontier-scale training through Anthropic's Project Rainier."
          ]
        }
      },
      {
        "t": "callout",
        "tone": "indigo",
        "title": "THE TAKEAWAY",
        "body": "Amazon's silicon is less about beating Nvidia head-to-head and more about giving AWS a cheaper, self-controlled path for the AI work it runs at massive scale."
      }
    ]
  }
];
