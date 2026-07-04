/* glossary.js — plain-language AI glossary for the OpenSource AI Learning Lab.
   Authored + adversarially fact-checked via workflow; assembled by assemble-glossary.mjs. */

export const GLOSSARY_CATEGORIES = ["Foundations","Language Models","Generation & Sampling","Prompting","Training & Fine-Tuning","Retrieval & Data","Agents & Tools","Running AI Locally","Safety & Ethics","Multimodal","Operations & Deployment","Business & Legal"];

export const GLOSSARY = [
  {
    "id": "acceptable-use-policy",
    "term": "Acceptable Use Policy (AUP)",
    "aliases": [
      "AUP"
    ],
    "category": "Business & Legal",
    "short": "Rules listing what you may not do with an AI service",
    "definition": "An Acceptable Use Policy is the part of a provider's terms that lists prohibited uses of their AI — for example, generating malware, harassment, or certain disallowed content. Breaking it can get your access suspended or revoked. It sits alongside the license and works to reduce real-world harm and the provider's legal risk.",
    "seeAlso": [
      "License",
      "Model Provider",
      "Copyright"
    ]
  },
  {
    "id": "agent-framework",
    "term": "Agent Framework",
    "aliases": [
      "agent toolkit"
    ],
    "category": "Agents & Tools",
    "short": "A software toolkit for building and running AI agents",
    "definition": "An agent framework is a software toolkit that gives developers ready-made building blocks for creating agents — handling the loop of calling the model, running tools, managing memory, and coordinating steps so they don't have to code it all from scratch. It's like a kit of pre-built parts for assembling an agent instead of machining every screw yourself. These frameworks package common patterns like tool use and planning into reusable pieces.",
    "seeAlso": [
      "AI Agent",
      "Orchestration",
      "Tool Use",
      "Agentic Workflow"
    ]
  },
  {
    "id": "agentic-workflow",
    "term": "Agentic Workflow",
    "aliases": [
      "agentic"
    ],
    "category": "Agents & Tools",
    "short": "A task an AI completes through autonomous, multi-step, tool-using loops",
    "definition": "An agentic workflow is a way of getting work done where an AI doesn't produce a single answer but instead moves through multiple steps on its own — planning, using tools, checking results, and adjusting — until the goal is met. It contrasts with a one-shot prompt where you ask once and get one reply. Writing code, running it, reading the errors, fixing them, and running it again, all driven by the AI, is a classic agentic workflow.",
    "seeAlso": [
      "AI Agent",
      "Orchestration",
      "ReAct",
      "Autonomy"
    ]
  },
  {
    "id": "agent-memory",
    "term": "Agent Memory",
    "aliases": [
      "memory"
    ],
    "category": "Agents & Tools",
    "short": "How an agent stores and recalls information across steps or sessions",
    "definition": "Agent memory is how an AI agent holds on to information beyond a single reply — remembering earlier steps in a task, facts it has learned, or your preferences across conversations. Short-term memory is the working context the model can see right now (the details of the current task), while long-term memory saves things to an outside store (like a database) so they can be looked up later. Without memory, an agent would forget everything the moment each step ends, like a worker with no notepad.",
    "seeAlso": [
      "AI Agent",
      "Autonomy",
      "Planning",
      "Orchestration"
    ]
  },
  {
    "id": "ai-agent",
    "term": "AI Agent",
    "aliases": [
      "agent"
    ],
    "category": "Agents & Tools",
    "short": "An AI system that pursues a goal by taking actions on its own",
    "definition": "An AI agent is a software system built around a language model that doesn't just answer a single question — it works toward a goal by deciding what to do next, taking an action (like searching the web or running code), looking at the result, and repeating until the task is done. Think of the difference between a chatbot that replies once and an assistant you hand a job to and let figure out the steps. The language model acts as the 'brain' that chooses each move, while the surrounding program actually carries the moves out.",
    "seeAlso": [
      "Tool Use",
      "Autonomy",
      "Agentic Workflow",
      "ReAct"
    ]
  },
  {
    "id": "ai-governance",
    "term": "AI Governance",
    "aliases": [],
    "category": "Safety & Ethics",
    "short": "The policies and oversight guiding how AI is built and used",
    "definition": "AI governance is the set of policies, rules, and oversight structures an organization or government uses to guide how AI is developed and deployed. It answers questions like who is allowed to build a system, what checks it must pass before launch, and who is held responsible when something goes wrong. Think of it as the rulebook and the referees for AI, spanning internal company standards all the way up to national laws.",
    "seeAlso": [
      "Responsible AI",
      "Data Privacy",
      "Fairness",
      "Transparency"
    ]
  },
  {
    "id": "ai-safety",
    "term": "AI Safety",
    "aliases": [],
    "category": "Safety & Ethics",
    "short": "The field focused on preventing AI from causing harm",
    "definition": "AI safety is the broad field dedicated to making sure AI systems don't cause harm — whether through everyday errors, deliberate misuse, or powerful future systems behaving in unintended ways. It includes hands-on work like testing models and adding guardrails, as well as longer-term research into keeping increasingly capable systems reliable and under human control. Alignment — making a system pursue the goals we intend — is one core piece of AI safety.",
    "seeAlso": [
      "Alignment",
      "Red Teaming",
      "Guardrails"
    ]
  },
  {
    "id": "algorithm",
    "term": "Algorithm",
    "aliases": [],
    "category": "Foundations",
    "short": "A step-by-step recipe a computer follows to solve a task",
    "definition": "An algorithm is a precise set of steps for solving a problem or completing a task, much like a cooking recipe. In AI, algorithms describe both how a model learns from data and how it makes predictions afterward. The word is general: sorting a list of names and training a neural network are both carried out by algorithms.",
    "seeAlso": [
      "Model",
      "Machine Learning (ML)",
      "Training"
    ]
  },
  {
    "id": "alignment",
    "term": "Alignment",
    "aliases": [
      "AI alignment",
      "value alignment"
    ],
    "category": "Safety & Ethics",
    "short": "Making an AI's goals and behavior match human intentions and values",
    "definition": "Alignment is the effort to make sure an AI system actually does what its designers and users intend, and respects human values while doing it. A well-aligned model follows the spirit of a request, not just the literal words — for instance, refusing a harmful shortcut even when that shortcut technically answers the question. Misalignment is the opposite: a capable system pursuing the wrong goal, or taking harmful steps to reach a good one.",
    "seeAlso": [
      "Guardrails",
      "AI Safety",
      "Responsible AI",
      "Human-in-the-loop"
    ]
  },
  {
    "id": "api",
    "term": "API",
    "aliases": [
      "Application Programming Interface"
    ],
    "category": "Agents & Tools",
    "short": "A defined way for two software programs to talk to each other",
    "definition": "An API (Application Programming Interface) is a set of rules that lets one piece of software request something from another in a predictable way — like a restaurant menu: you order from defined options and the kitchen sends back the result, without needing to know how it's cooked. AI agents lean on APIs constantly to fetch data or trigger actions, such as calling a maps service for directions. Many AI models are themselves used through an API.",
    "seeAlso": [
      "Tool Use",
      "Function Calling",
      "Model Context Protocol (MCP)",
      "AI Agent"
    ]
  },
  {
    "id": "api-endpoint",
    "term": "API Endpoint",
    "aliases": [
      "Endpoint",
      "API"
    ],
    "category": "Operations & Deployment",
    "short": "A web address your app calls to get an AI model's response",
    "definition": "An API endpoint is a specific web address (URL) where a program can send a request and get a response back. For AI, it is usually the door you knock on to reach a model: your app sends the text or data, and the model's answer comes back through that same endpoint. An API (application programming interface) is simply the agreed set of rules for how two programs talk to each other.",
    "seeAlso": [
      "Inference Server",
      "Rate Limit",
      "Latency",
      "Deployment"
    ]
  },
  {
    "id": "artificial-general-intelligence",
    "term": "Artificial General Intelligence (AGI)",
    "aliases": [
      "AGI"
    ],
    "category": "Business & Legal",
    "short": "A hypothetical AI as broadly capable as a human across tasks",
    "definition": "AGI is a still-hypothetical AI that could handle virtually any intellectual task a person can, instead of being good at just one narrow thing. Today's systems are \"narrow\": a chatbot can't drive a car, and a chess engine can't write an essay. There is no agreed-upon test for when AGI would be reached, and experts genuinely disagree about whether or when it might arrive.",
    "seeAlso": [
      "Frontier Model",
      "Benchmark",
      "Responsible Scaling Policy (RSP)"
    ]
  },
  {
    "id": "artificial-intelligence",
    "term": "Artificial Intelligence (AI)",
    "aliases": [
      "AI"
    ],
    "category": "Foundations",
    "short": "Computers doing tasks that normally need human intelligence",
    "definition": "Artificial Intelligence is the broad field of building computer systems that can perform tasks we usually associate with human thinking, such as recognizing images, understanding language, or making decisions. It is an umbrella term: everything from a chess program to a chatbot counts as AI. Most of today's AI works by learning patterns from examples rather than following rules a person wrote out by hand.",
    "seeAlso": [
      "Machine Learning (ML)",
      "Generative AI",
      "Algorithm"
    ]
  },
  {
    "id": "attention",
    "term": "Attention",
    "aliases": [
      "Self-attention"
    ],
    "category": "Language Models",
    "short": "How a model decides which words matter most to each other",
    "definition": "Attention is the mechanism that lets a model focus on the most relevant words when making sense of a passage. For example, in 'The trophy didn't fit in the suitcase because it was too big,' attention helps the model link 'it' to 'trophy' rather than 'suitcase.' It works by scoring how strongly each word should influence every other word, so meaning that depends on context is captured.",
    "seeAlso": [
      "Transformer",
      "Token",
      "Embedding"
    ]
  },
  {
    "id": "audio-model",
    "term": "Audio Model",
    "aliases": [],
    "category": "Multimodal",
    "short": "AI that understands or generates sound, speech, or music",
    "definition": "An audio model is an AI system that works with sound as its data — this can mean understanding speech, generating music, adding sound effects, or cleaning up noisy recordings. Audio is one modality (data type) that multimodal systems often combine with text or images. Speech-to-text and text-to-speech are two of the most common audio tasks.",
    "seeAlso": [
      "Speech-to-Text (ASR)",
      "Text-to-Speech (TTS)",
      "Modality"
    ]
  },
  {
    "id": "autonomy",
    "term": "Autonomy",
    "aliases": [],
    "category": "Agents & Tools",
    "short": "How much an AI can act on its own without human approval",
    "definition": "Autonomy describes how much an AI system is allowed to decide and act on its own before a human steps in. A low-autonomy assistant suggests a draft and waits for you to approve each step; a high-autonomy agent might carry out a whole multi-step task and only report back at the end. More autonomy can save effort, but it also raises the stakes if the system makes a mistake, which is why many systems keep a human in the loop for important actions.",
    "seeAlso": [
      "AI Agent",
      "Human-in-the-loop",
      "Guardrails",
      "Agentic Workflow"
    ]
  },
  {
    "id": "backpropagation",
    "term": "Backpropagation",
    "aliases": [
      "backprop"
    ],
    "category": "Training & Fine-Tuning",
    "short": "How a model works out which numbers to adjust, and how much",
    "definition": "Backpropagation is the technique that works backward from the model's error to figure out how much each internal number contributed to that mistake. It hands those blame assignments to gradient descent, which then adjusts the numbers to do better next time. Think of tracing a wrong final answer back through every step of your work to find where it went off, so each step can be corrected.",
    "seeAlso": [
      "Gradient Descent",
      "Loss Function",
      "Weights",
      "Learning Rate"
    ]
  },
  {
    "id": "batching",
    "term": "Batching (Batch Inference)",
    "aliases": [
      "batch inference",
      "batch processing"
    ],
    "category": "Operations & Deployment",
    "short": "Grouping many requests to process them together efficiently",
    "definition": "Batching bundles several requests together and runs them through the model in one pass instead of one at a time. Because the specialized chips that typically run AI (GPUs) work most efficiently on many items at once, batching raises throughput and lowers the cost per request. The trade-off is that a request may wait a brief moment for others to join its batch, which can slightly increase latency.",
    "seeAlso": [
      "Throughput",
      "Inference Server",
      "Latency",
      "Scaling"
    ]
  },
  {
    "id": "beam-search",
    "term": "Beam Search",
    "aliases": [],
    "category": "Generation & Sampling",
    "short": "Explore several candidate sentences, keep the best",
    "definition": "Instead of committing to one word at a time, beam search keeps several partial sentences alive at once (the 'beams') and extends each, then keeps the most promising overall combinations. By looking a few steps ahead it can find wording that scores better as a whole than always grabbing the single best next word would. It's common in tasks like translation, but tends to produce safe, less varied text, so chat-style models usually prefer sampling.",
    "seeAlso": [
      "Greedy Decoding",
      "Sampling"
    ]
  },
  {
    "id": "benchmark",
    "term": "Benchmark",
    "aliases": [],
    "category": "Business & Legal",
    "short": "A standard test used to measure and compare model performance",
    "definition": "A benchmark is a standardized test used to measure how well AI models perform at a task — like answering science questions or writing code — so different models can be compared on the same scale. Benchmarks are useful for tracking progress, but imperfect: a model can score well on a test yet stumble in real use, and benchmark questions can accidentally end up in training data and inflate scores.",
    "seeAlso": [
      "Model Card",
      "Training Data",
      "Frontier Model"
    ]
  },
  {
    "id": "bias",
    "term": "Bias",
    "aliases": [
      "algorithmic bias"
    ],
    "category": "Safety & Ethics",
    "short": "AI systematically favoring or harming certain groups unfairly",
    "definition": "Bias is when an AI system produces results that are systematically unfair to certain people or groups. It usually creeps in through the data the system learned from — for example, if past hiring records mostly favored one group, a resume-screening AI can learn to repeat that pattern. Bias is often subtle and unintentional, which is exactly why people test for it deliberately rather than assuming a system is neutral.",
    "seeAlso": [
      "Fairness",
      "Responsible AI",
      "Alignment"
    ]
  },
  {
    "id": "caching",
    "term": "Caching",
    "aliases": [
      "cache"
    ],
    "category": "Operations & Deployment",
    "short": "Reusing saved results to answer repeat requests faster",
    "definition": "Caching stores the result of some work so that if the same request comes again, the system can hand back the saved answer instead of redoing everything. This cuts both latency (wait time) and cost. For AI, caching can mean remembering the answer to an identical question, or reusing parts of a prompt the model has already processed.",
    "seeAlso": [
      "Latency",
      "Token Cost",
      "Throughput",
      "API Endpoint"
    ]
  },
  {
    "id": "captioning",
    "term": "Captioning",
    "aliases": [
      "image captioning"
    ],
    "category": "Multimodal",
    "short": "Automatically writing a text description of an image or video",
    "definition": "Captioning is when an AI looks at an image or video and writes a short sentence describing what it shows, like 'a child flying a kite in a park.' It is a bridge from the visual world to written language, and it powers helpful features such as alt-text descriptions for people who use screen readers. Video captioning does the same thing across moving scenes.",
    "seeAlso": [
      "Vision-Language Model (VLM)",
      "Vision Model",
      "OCR"
    ]
  },
  {
    "id": "chain-of-thought",
    "term": "Chain-of-Thought",
    "aliases": [
      "CoT"
    ],
    "category": "Prompting",
    "short": "Prompting the AI to reason step by step before answering",
    "definition": "Chain-of-thought prompting asks the AI to work through a problem step by step instead of jumping straight to an answer — often by adding a cue like \"Let's think step by step.\" Laying out the reasoning tends to improve accuracy on math, logic, and multi-step questions, much like showing your work on a test. The trade-off is a longer, slower response.",
    "seeAlso": [
      "Prompt Engineering",
      "Prompt Chaining",
      "Instruction Following"
    ]
  },
  {
    "id": "chunking",
    "term": "Chunking",
    "aliases": [],
    "category": "Retrieval & Data",
    "short": "Splitting long documents into bite-sized pieces for retrieval",
    "definition": "Chunking is the practice of breaking a long document into smaller passages, say a few paragraphs each, before storing them for search. Smaller pieces make retrieval more precise, because the system can pull the one relevant paragraph instead of a whole 100-page manual. Choosing the chunk size is a balancing act: too big and you retrieve extra noise, too small and each piece loses its context.",
    "seeAlso": [
      "Retrieval-Augmented Generation (RAG)",
      "Embedding",
      "Indexing",
      "Knowledge Base"
    ]
  },
  {
    "id": "completion",
    "term": "Completion",
    "aliases": [
      "generation",
      "output"
    ],
    "category": "Generation & Sampling",
    "short": "The text the model produces in response to your prompt",
    "definition": "A completion is the model's generated answer, built by predicting one next word after another until it decides to stop. The name comes from the model's core skill: it 'completes' the text you started with something that fits. Whether you asked a question, requested a summary, or pasted code, what comes back is the completion.",
    "seeAlso": [
      "Prompt vs Completion",
      "Max Tokens",
      "Stop Sequence",
      "Streaming"
    ]
  },
  {
    "id": "compute",
    "term": "Compute",
    "aliases": [],
    "category": "Business & Legal",
    "short": "The processing power and hardware used to train and run AI",
    "definition": "\"Compute\" is shorthand for the raw computing power — the specialized chips, machines, and electricity — needed to train and operate AI models. Training a large model can require thousands of processors running for weeks, which is why compute is one of the biggest costs in the AI business. More compute generally allows bigger, more capable models, though each additional amount tends to add less improvement than the last.",
    "seeAlso": [
      "Training Data",
      "Parameter Count",
      "Frontier Model",
      "Model Provider"
    ]
  },
  {
    "id": "context-length",
    "term": "Context Length",
    "aliases": [
      "context window",
      "context size"
    ],
    "category": "Running AI Locally",
    "short": "How much text a model can consider at once — its short-term memory",
    "definition": "Context length is the maximum amount of text — your prompt, the conversation so far, and the reply — that a model can hold in mind at one time, measured in tokens (chunks of words). When running locally, a longer context length lets the model handle bigger documents but uses more memory and runs slower. If a chat grows past this limit, the oldest parts typically drop out of the window and the model effectively 'forgets' them.",
    "seeAlso": [
      "VRAM",
      "System Requirements",
      "Local Inference",
      "Tokens per Second"
    ]
  },
  {
    "id": "context-window",
    "term": "Context Window",
    "aliases": [
      "context length"
    ],
    "category": "Language Models",
    "short": "How much text a model can consider at one time",
    "definition": "The context window is the maximum amount of text, measured in tokens, that a model can take in and pay attention to at once. It works like short-term memory: anything inside the window can shape the response, but text that falls outside it is effectively forgotten. A larger context window lets a model work through longer documents or conversations without losing track of earlier details.",
    "seeAlso": [
      "Token",
      "Attention",
      "Large Language Model (LLM)"
    ]
  },
  {
    "id": "copyright",
    "term": "Copyright",
    "aliases": [],
    "category": "Business & Legal",
    "short": "Legal ownership of creative works, central to AI data disputes",
    "definition": "Copyright is the legal right that gives creators control over copying and reusing their original works, such as books, art, music, and code. In AI it raises two big questions: was it lawful to train a model on copyrighted material, and can AI-generated output itself be copyrighted? These questions are being actively argued in courts and are not fully settled.",
    "seeAlso": [
      "Training Data",
      "Fair Use",
      "Intellectual Property (IP)",
      "License"
    ]
  },
  {
    "id": "corpus",
    "term": "Corpus",
    "aliases": [
      "text corpus"
    ],
    "category": "Retrieval & Data",
    "short": "The whole body of text or data a system draws from",
    "definition": "A corpus is a large, collected body of text or data used for training or searching, for instance all the articles on a website or every transcript from a support team. In retrieval, the corpus is the full pool of material that gets chunked, embedded, and indexed so the AI can search it. It's essentially the raw library before it is organized for fast lookup.",
    "seeAlso": [
      "Knowledge Base",
      "Chunking",
      "Indexing",
      "Data Labeling"
    ]
  },
  {
    "id": "cosine-similarity",
    "term": "Cosine Similarity",
    "aliases": [],
    "category": "Retrieval & Data",
    "short": "How closely two meaning-vectors point the same way",
    "definition": "Cosine similarity measures how similar two embeddings are by looking at the angle between them rather than their length. The score runs from 1 (pointing the same direction, very similar), through 0 (unrelated), to -1 (opposite). Search systems use it to rank which stored items are closest in meaning to your query.",
    "seeAlso": [
      "Embedding",
      "Vector",
      "Semantic Search",
      "Nearest Neighbor Search"
    ]
  },
  {
    "id": "data-labeling",
    "term": "Data Labeling",
    "aliases": [
      "data annotation",
      "labeling"
    ],
    "category": "Retrieval & Data",
    "short": "Tagging examples so a model can learn from them",
    "definition": "Data labeling is the human (sometimes AI-assisted) work of tagging raw data with the correct answers, such as marking which emails are spam, drawing boxes around cars in photos, or rating whether a response was helpful. These labels become the answer key a model learns from during training. High-quality labels are one of the biggest factors in how well an AI system ends up performing.",
    "seeAlso": [
      "Corpus",
      "Knowledge Base",
      "Indexing"
    ]
  },
  {
    "id": "data-privacy",
    "term": "Data Privacy",
    "aliases": [
      "privacy"
    ],
    "category": "Safety & Ethics",
    "short": "Protecting people's personal information used by AI systems",
    "definition": "Data privacy is about protecting people's personal information — names, faces, messages, health records — and giving them control over how it is collected and used. AI raises the stakes because models are often trained on huge amounts of data that may include private details, and they can sometimes reveal or memorize that information later. Good practice includes getting consent, stripping out identifying details, and limiting who can access the data.",
    "seeAlso": [
      "Responsible AI",
      "AI Governance",
      "Transparency"
    ]
  },
  {
    "id": "dataset",
    "term": "Dataset",
    "aliases": [
      "Training Data",
      "Data Set"
    ],
    "category": "Foundations",
    "short": "The collection of examples used to train or test a model",
    "definition": "A dataset is the organized collection of examples an AI system learns from, such as a folder of labeled photos or a large body of text. The quality, size, and variety of a dataset strongly shape how well the resulting model works, because a model can only learn from what it has seen. Datasets are often split into one part for training and a separate part for testing how well the model performs on new data.",
    "seeAlso": [
      "Training",
      "Supervised Learning",
      "Machine Learning (ML)"
    ]
  },
  {
    "id": "decoder",
    "term": "Decoder",
    "aliases": [],
    "category": "Language Models",
    "short": "The part that generates output text one token at a time",
    "definition": "A decoder is the part of a model that produces text, generating one token at a time and feeding each new token back in to help choose the next. Most chat and writing models today are decoder-based, since their main job is to continue or create language. It contrasts with an encoder, which focuses on understanding input rather than producing new output.",
    "seeAlso": [
      "Encoder",
      "Next-token Prediction",
      "Transformer"
    ]
  },
  {
    "id": "deepfake",
    "term": "Deepfake",
    "aliases": [],
    "category": "Safety & Ethics",
    "short": "AI-generated fake video, image, or audio that looks real",
    "definition": "A deepfake is a piece of media — a video, image, or voice recording — that AI has synthesized or altered to convincingly show something that never actually happened. The word blends 'deep learning' (the AI technique behind it) with 'fake.' Deepfakes can be harmless entertainment, but they also power scams, political misinformation, and impersonation, which is why reliably detecting and labeling them has become an important safety goal.",
    "seeAlso": [
      "Watermarking",
      "Responsible AI",
      "Data Privacy"
    ]
  },
  {
    "id": "deep-learning",
    "term": "Deep Learning",
    "aliases": [],
    "category": "Foundations",
    "short": "Machine learning that uses many-layered neural networks",
    "definition": "Deep Learning is a powerful branch of machine learning that uses neural networks with many stacked layers, which is where the word 'deep' comes from. Each layer learns to recognize increasingly complex patterns: for an image, early layers might detect edges, later ones detect shapes, and final ones recognize whole objects. It powers much of modern AI, including image recognition and the large language models behind chatbots.",
    "seeAlso": [
      "Neural Network",
      "Machine Learning (ML)",
      "Parameter (Weight)",
      "GPU"
    ]
  },
  {
    "id": "delimiters",
    "term": "Delimiters",
    "aliases": [],
    "category": "Prompting",
    "short": "Markers that separate your instructions from the text to work on",
    "definition": "Delimiters are symbols or tags — like triple quotes, XML-style tags, or rows of dashes — used to clearly mark where one part of a prompt ends and another begins. They help the AI tell your instructions apart from the content it should act on, such as wrapping a document in triple quotes before asking a question about it. This reduces confusion and also makes prompts a little harder to hijack.",
    "seeAlso": [
      "Prompt Engineering",
      "Prompt Injection",
      "Grounding a prompt"
    ]
  },
  {
    "id": "deployment",
    "term": "Deployment",
    "aliases": [
      "deploy",
      "going live",
      "production"
    ],
    "category": "Operations & Deployment",
    "short": "Putting a model into real use where people can access it",
    "definition": "Deployment is the step of taking a trained model or app and making it available for real use—\"in production,\" meaning the live environment that real users touch. It involves packaging the model, placing it on servers, and connecting it to an endpoint so requests can reach it. A model that only runs on a developer's laptop is not deployed until other people can actually use it.",
    "seeAlso": [
      "Inference Server",
      "API Endpoint",
      "Monitoring"
    ]
  },
  {
    "id": "diffusion-model",
    "term": "Diffusion Model",
    "aliases": [],
    "category": "Multimodal",
    "short": "Creates images by gradually turning random noise into a picture",
    "definition": "A diffusion model is a type of AI that generates images (and sometimes audio or video) by starting from random static — like the snow on an untuned TV — and cleaning it up step by step until a clear picture emerges. During training it watched real images get blurred into noise, then practiced doing the reverse. Many popular text-to-image tools are built on diffusion models.",
    "seeAlso": [
      "Text-to-Image",
      "Image Generation",
      "Text-to-Video"
    ]
  },
  {
    "id": "distillation",
    "term": "Distillation",
    "aliases": [
      "knowledge distillation",
      "model distillation"
    ],
    "category": "Training & Fine-Tuning",
    "short": "Training a small model to copy a big model's behavior",
    "definition": "Distillation trains a smaller 'student' model to imitate a larger, more capable 'teacher' model, packing much of the teacher's skill into a lighter form. The student learns from the teacher's outputs, not just raw data, which helps it punch above its size. The payoff is a model that is cheaper and faster to run while keeping a good deal of the original's quality.",
    "seeAlso": [
      "Quantization",
      "Weights",
      "Fine-tuning",
      "Pretraining"
    ]
  },
  {
    "id": "embedding",
    "term": "Embedding",
    "aliases": [
      "vector embedding",
      "embeddings"
    ],
    "category": "Retrieval & Data",
    "short": "Turning text or images into meaning-capturing lists of numbers",
    "definition": "An embedding is a list of numbers that represents the meaning of a piece of text, an image, or other data. Things with similar meaning get similar number patterns, so 'car' and 'automobile' land close together while 'car' and 'banana' land far apart. Computers can't compare meaning directly, so embeddings give them a way to measure how related two things are by comparing their numbers.",
    "seeAlso": [
      "Vector",
      "Cosine Similarity",
      "Semantic Search",
      "Vector Database"
    ]
  },
  {
    "id": "encoder",
    "term": "Encoder",
    "aliases": [],
    "category": "Language Models",
    "short": "The part that reads input and builds an understanding of it",
    "definition": "An encoder is the part of a model that reads an input and turns it into a rich internal representation, a set of numbers that captures its meaning. It is well suited to tasks about understanding text, such as judging whether a review is positive or negative, or finding related documents. Some models use only an encoder, while others pair it with a decoder that generates new text.",
    "seeAlso": [
      "Decoder",
      "Transformer",
      "Embedding"
    ]
  },
  {
    "id": "epoch",
    "term": "Epoch",
    "aliases": [],
    "category": "Training & Fine-Tuning",
    "short": "One full pass of the model through the training data",
    "definition": "An epoch is one complete run through the entire training dataset during learning. Models usually need several epochs, seeing the same data more than once, to gradually improve, much like re-reading a textbook a few times to absorb it. Too few epochs and the model hasn't learned enough; too many and it may start memorizing instead of generalizing (overfitting).",
    "seeAlso": [
      "Overfitting",
      "Gradient Descent",
      "Learning Rate",
      "Hyperparameter"
    ]
  },
  {
    "id": "evaluation",
    "term": "Evaluation (Eval)",
    "aliases": [
      "eval",
      "evals"
    ],
    "category": "Operations & Deployment",
    "short": "Systematically testing how good a model's outputs are",
    "definition": "Evaluation is the practice of measuring how well an AI system does its job, using test cases and clear criteria instead of gut feeling. Evals can check accuracy on questions with known answers, or judge fuzzier qualities like helpfulness and safety—sometimes with human reviewers, or even another model acting as the grader. Running evals before and after a change tells you whether an update actually made things better or worse.",
    "seeAlso": [
      "Monitoring",
      "Deployment"
    ]
  },
  {
    "id": "explainability",
    "term": "Explainability (Interpretability)",
    "aliases": [
      "interpretability",
      "XAI",
      "explainable AI"
    ],
    "category": "Safety & Ethics",
    "short": "Being able to understand why an AI made a given decision",
    "definition": "Explainability is the ability to understand and describe why an AI system produced a particular output or decision. Many modern models are 'black boxes' — they hand back an answer without showing their reasoning — which becomes a serious problem when the stakes are high, like a denied loan or a flagged medical scan. Explainability techniques try to pry that box open, for example by highlighting which words or features most influenced the result.",
    "seeAlso": [
      "Transparency",
      "Responsible AI",
      "Bias"
    ]
  },
  {
    "id": "fairness",
    "term": "Fairness",
    "aliases": [
      "algorithmic fairness"
    ],
    "category": "Safety & Ethics",
    "short": "Treating different people and groups equitably in AI outcomes",
    "definition": "Fairness in AI is the goal of a system treating different people and groups equitably, without systematically advantaging or disadvantaging anyone based on traits like race, gender, or age. It is closely tied to bias: fairness is the goal, and bias is the failure to reach it. Fairness is surprisingly hard to pin down, because there are several reasonable definitions of 'fair' that can quietly conflict with one another.",
    "seeAlso": [
      "Bias",
      "Responsible AI",
      "AI Governance"
    ]
  },
  {
    "id": "fair-use",
    "term": "Fair Use",
    "aliases": [],
    "category": "Business & Legal",
    "short": "A US legal doctrine allowing some copying without permission",
    "definition": "Fair use is a principle in US copyright law that permits limited use of protected material without the owner's permission for purposes like commentary, research, or teaching. Some AI companies argue that training models on copyrighted data qualifies as fair use, while many creators strongly disagree. Courts weigh several factors case by case, so it is not a blanket free pass.",
    "seeAlso": [
      "Copyright",
      "Training Data",
      "Intellectual Property (IP)"
    ]
  },
  {
    "id": "few-shot",
    "term": "Few-shot",
    "aliases": [
      "few-shot prompting"
    ],
    "category": "Prompting",
    "short": "Giving the AI a few examples so it copies the pattern",
    "definition": "Few-shot means including a small number of examples in your prompt to show the AI the pattern you want before asking it to do the real task. For instance, you might show two or three sentences already labeled \"happy\" or \"sad,\" then ask it to label a new one. Seeing examples helps the model match your desired style and format more reliably than a bare instruction alone.",
    "seeAlso": [
      "Zero-shot",
      "One-shot Prompting",
      "In-context Learning"
    ]
  },
  {
    "id": "fine-tuning",
    "term": "Fine-tuning",
    "aliases": [
      "fine tuning",
      "finetuning"
    ],
    "category": "Training & Fine-Tuning",
    "short": "Extra training that specializes a ready-made model on focused data",
    "definition": "Fine-tuning takes a model that already learned general patterns and trains it a little more on a smaller, focused dataset so it gets better at a specific task, tone, or domain. Rather than build a model from scratch, you nudge an existing one toward your needs, like teaching an experienced cook your family's recipes. It is far faster and cheaper than training a whole new model from zero.",
    "seeAlso": [
      "Transfer Learning",
      "LoRA (Low-Rank Adaptation)",
      "Pretraining",
      "RLHF (Reinforcement Learning from Human Feedback)"
    ]
  },
  {
    "id": "foundation-model",
    "term": "Foundation Model",
    "aliases": [],
    "category": "Language Models",
    "short": "A large general-purpose model adapted to many different tasks",
    "definition": "A foundation model is a large model trained broadly on general data so it can later be adapted to many different jobs, instead of being built for just one. The same base model might be tuned to write code, answer support questions, or summarize legal text. Large language models are one common kind of foundation model, though the idea also covers models for images, audio, and more.",
    "seeAlso": [
      "Large Language Model (LLM)",
      "Pretraining",
      "Parameters"
    ]
  },
  {
    "id": "frontier-model",
    "term": "Frontier Model",
    "aliases": [],
    "category": "Business & Legal",
    "short": "The most capable, cutting-edge AI models being built today",
    "definition": "A frontier model is one of the largest, most capable AI systems at the leading edge of what is currently possible. Because these models are so powerful and their behavior is hard to fully predict, they draw extra attention around safety testing and regulation. The \"frontier\" keeps moving forward, so which specific models count as frontier changes over time.",
    "seeAlso": [
      "Compute",
      "Parameter Count",
      "Responsible Scaling Policy (RSP)",
      "Artificial General Intelligence (AGI)"
    ]
  },
  {
    "id": "function-calling",
    "term": "Function Calling",
    "aliases": [
      "tool calling"
    ],
    "category": "Agents & Tools",
    "short": "The model outputs a structured request to run a specific function",
    "definition": "Function calling is the mechanism that makes tool use work. A developer describes some functions to the model (like get_weather(city)), and when it's useful, the model responds with a structured request — the function name plus the inputs to use — instead of plain prose. Your program then actually runs that function and hands the result back to the model. It's how a model that can only produce text gets to trigger real actions in software; the model asks for the action, but your code performs it.",
    "seeAlso": [
      "Tool Use",
      "API",
      "AI Agent",
      "Model Context Protocol (MCP)"
    ]
  },
  {
    "id": "generative-ai",
    "term": "Generative AI",
    "aliases": [
      "GenAI"
    ],
    "category": "Foundations",
    "short": "AI that creates new content like text, images, or audio",
    "definition": "Generative AI refers to models that produce new content, such as writing, images, music, code, or video, rather than just sorting or scoring existing data. It learns patterns from large amounts of examples and then generates fresh output that fits those patterns, like writing a paragraph in response to your request. The chatbots and image generators people use today are examples of generative AI.",
    "seeAlso": [
      "Artificial Intelligence (AI)",
      "Deep Learning",
      "Model",
      "Inference"
    ]
  },
  {
    "id": "gguf",
    "term": "GGUF",
    "aliases": [
      ".gguf"
    ],
    "category": "Running AI Locally",
    "short": "A single-file format that packages a local AI model for easy loading",
    "definition": "GGUF is a file format for storing an AI model so tools like llama.cpp and Ollama can load and run it. Think of it like an .mp3 for AI models: one standardized file that holds the model's learned values plus the extra information needed to run them. When you download a model to run locally, you'll often grab a .gguf file, frequently offered in several compressed sizes.",
    "seeAlso": [
      "llama.cpp",
      "Quantization",
      "Model Quantization level (Q4)",
      "Open-weight Model"
    ]
  },
  {
    "id": "gpu",
    "term": "GPU",
    "aliases": [
      "Graphics Processing Unit",
      "GPUs"
    ],
    "category": "Foundations",
    "short": "A chip that does many calculations at once, key for AI",
    "definition": "A GPU (Graphics Processing Unit) is a computer chip originally built for rendering video-game graphics, which turns out to be excellent for AI because it can perform thousands of calculations at the same time. Training and running large models involves enormous amounts of parallel math, so GPUs make the work dramatically faster than ordinary processors. This speed is a big reason modern AI became practical.",
    "seeAlso": [
      "Training",
      "Deep Learning",
      "Inference"
    ]
  },
  {
    "id": "gradient-descent",
    "term": "Gradient Descent",
    "aliases": [],
    "category": "Training & Fine-Tuning",
    "short": "Step-by-step method for reducing a model's mistakes",
    "definition": "Gradient descent is the core method a model uses to learn: it repeatedly nudges its internal numbers in the direction that lowers its error a little at a time. Picture standing on a foggy hillside and always stepping downhill to reach the valley, where the valley is the point of fewest mistakes. The 'gradient' is the math that senses which way is downhill from wherever the model currently stands, so each step can head that way.",
    "seeAlso": [
      "Loss Function",
      "Learning Rate",
      "Backpropagation",
      "Weights"
    ]
  },
  {
    "id": "greedy-decoding",
    "term": "Greedy Decoding",
    "aliases": [
      "greedy search",
      "argmax decoding"
    ],
    "category": "Generation & Sampling",
    "short": "Always take the single most likely next word",
    "definition": "Greedy decoding is the simplest way to generate text: at every step, just pick the one word the model rates as most likely and move on. It's fast and tends to give the same answer for the same input, which is handy when you want consistency. The downside is it can sound flat or repetitive, and by always grabbing the best next word it can miss a better overall sentence.",
    "seeAlso": [
      "Sampling",
      "Beam Search",
      "Temperature"
    ]
  },
  {
    "id": "grounding",
    "term": "Grounding",
    "aliases": [],
    "category": "Retrieval & Data",
    "short": "Tying an AI's answer to real, verifiable sources",
    "definition": "Grounding means anchoring an AI's response in specific, trusted source material instead of letting it answer purely from memory. A grounded system retrieves real documents and bases its answer on them, often pointing to where each fact came from. This reduces hallucinations, which are confident-sounding but made-up statements, and makes answers easier to trust and check.",
    "seeAlso": [
      "Retrieval-Augmented Generation (RAG)",
      "Knowledge Base",
      "Hallucination",
      "Semantic Search"
    ]
  },
  {
    "id": "grounding-a-prompt",
    "term": "Grounding a prompt",
    "aliases": [
      "grounding"
    ],
    "category": "Prompting",
    "short": "Giving the AI trusted facts to base its answer on",
    "definition": "Grounding a prompt means supplying the AI with specific, reliable information — like a document, data, or reference text — and asking it to base its answer on that rather than on memory alone. This helps keep answers accurate and reduces \"hallucinations,\" where the model confidently makes something up. For example, pasting a company's return policy and then asking questions about it grounds the reply in real facts.",
    "seeAlso": [
      "Delimiters",
      "In-context Learning",
      "Prompt Engineering"
    ]
  },
  {
    "id": "guardrails",
    "term": "Guardrails",
    "aliases": [],
    "category": "Agents & Tools",
    "short": "Rules and limits that keep an AI's actions safe and on-task",
    "definition": "Guardrails are the rules, limits, and checks placed around an AI system to keep its behavior safe, appropriate, and within bounds — like the barriers on a bowling lane that stop the ball from rolling into the gutter. They might block an agent from certain actions (such as deleting files), filter out unsafe responses, or require approval before a high-risk step. Guardrails matter more as agents gain autonomy and can act in the real world.",
    "seeAlso": [
      "Autonomy",
      "Human-in-the-loop",
      "AI Agent",
      "Agentic Workflow"
    ]
  },
  {
    "id": "hallucination",
    "term": "Hallucination",
    "aliases": [
      "confabulation"
    ],
    "category": "Generation & Sampling",
    "short": "Confident output that is made-up or wrong",
    "definition": "A hallucination is when a model states something false, invented, or unsupported while sounding perfectly confident, like citing a book that doesn't exist. It happens because the model is trained to produce plausible-sounding text, not to look up guaranteed facts, so a smooth, wrong answer can look just as convincing as a correct one. This is why important claims from any model should be checked against a trusted source.",
    "seeAlso": [
      "Completion",
      "Sampling",
      "Temperature"
    ]
  },
  {
    "id": "human-in-the-loop",
    "term": "Human-in-the-loop",
    "aliases": [
      "HITL",
      "human oversight"
    ],
    "category": "Safety & Ethics",
    "short": "Keeping a person involved to review or approve AI decisions",
    "definition": "Human-in-the-loop means keeping a person actively involved in an AI system's decisions instead of letting it run entirely on its own. The AI might suggest, draft, or flag something — but a human reviews, corrects, or approves it before anything final happens. This is common in high-stakes settings like medical diagnosis or content moderation, where a mistake by an unsupervised system could cause real harm.",
    "seeAlso": [
      "Alignment",
      "Guardrails",
      "Responsible AI"
    ]
  },
  {
    "id": "hyperparameter",
    "term": "Hyperparameter",
    "aliases": [
      "hyperparameters"
    ],
    "category": "Training & Fine-Tuning",
    "short": "A setting you choose before training that guides how it learns",
    "definition": "A hyperparameter is a knob you set before training begins, such as the learning rate, the batch size (how many examples the model looks at before each update), or the number of epochs, that controls how the learning process behaves. Unlike weights, which the model figures out on its own, hyperparameters are chosen by the people running the training. Picking good ones is part experience and part experiment, and it can decide whether a model learns well or not at all.",
    "seeAlso": [
      "Learning Rate",
      "Epoch",
      "Weights",
      "Overfitting"
    ]
  },
  {
    "id": "image-generation",
    "term": "Image Generation",
    "aliases": [
      "image synthesis"
    ],
    "category": "Multimodal",
    "short": "AI creating new images from prompts or other inputs",
    "definition": "Image generation is the broad term for having an AI create new pictures rather than just recognizing ones that already exist. The input might be a text description, another image to transform, or a rough sketch to fill in. It covers everything from making art and product mockups to editing photos, and many popular tools rely on diffusion models.",
    "seeAlso": [
      "Text-to-Image",
      "Diffusion Model",
      "Text-to-Video"
    ]
  },
  {
    "id": "in-context-learning",
    "term": "In-context Learning",
    "aliases": [
      "ICL"
    ],
    "category": "Prompting",
    "short": "The AI adapting from examples in the prompt, without retraining",
    "definition": "In-context learning is the AI's ability to pick up a new task purely from the instructions and examples you put in the prompt, without changing anything inside the model itself. The \"learning\" lasts only for that conversation — nothing is permanently saved. It's why showing a few examples works: the model adapts on the fly, then forgets once the prompt is gone.",
    "seeAlso": [
      "Few-shot",
      "Zero-shot",
      "Prompt"
    ]
  },
  {
    "id": "indexing",
    "term": "Indexing",
    "aliases": [
      "index"
    ],
    "category": "Retrieval & Data",
    "short": "Pre-organizing data so searches are fast",
    "definition": "Indexing is the step of organizing and pre-processing data so it can be searched quickly later, much like the index at the back of a book lets you jump to a topic without reading every page. For retrieval systems, this often means computing embeddings for every chunk and arranging them so similar items can be found without comparing against everything one by one. Good indexing is what keeps search fast even across millions of documents.",
    "seeAlso": [
      "Vector Database",
      "Embedding",
      "Nearest Neighbor Search",
      "Chunking"
    ]
  },
  {
    "id": "inference",
    "term": "Inference",
    "aliases": [],
    "category": "Foundations",
    "short": "Using an already-trained model to get answers",
    "definition": "Inference is what happens when you actually use a trained model: you give it a new input and it produces an output, such as answering your question or classifying a photo. Unlike training, the model isn't learning or changing during inference; it is simply applying what it already learned. Every time you type a prompt to a chatbot and get a reply, you are running inference.",
    "seeAlso": [
      "Training",
      "Model"
    ]
  },
  {
    "id": "inference-server",
    "term": "Inference Server",
    "aliases": [
      "model server",
      "model serving"
    ],
    "category": "Operations & Deployment",
    "short": "Software that hosts a trained model and answers requests",
    "definition": "An inference server is the software that loads a trained model into memory and runs it to answer incoming requests—\"inference\" just means using a finished model to make a prediction or generate output. It sits behind an API endpoint, takes each request, runs the model, and sends the result back. A good inference server squeezes out fast responses while handling many users at once.",
    "seeAlso": [
      "API Endpoint",
      "Latency",
      "Batching (Batch Inference)",
      "Scaling"
    ]
  },
  {
    "id": "instruction-following",
    "term": "Instruction Following",
    "aliases": [],
    "category": "Prompting",
    "short": "How well an AI does what your prompt actually tells it to",
    "definition": "Instruction following describes how reliably an AI carries out the directions in your prompt — obeying constraints like \"answer in one sentence\" or \"use only bullet points.\" Modern models are specially trained to be good at this, but they can still miss or overlook parts of complicated requests. Clear, specific instructions generally get followed more faithfully than vague ones.",
    "seeAlso": [
      "Prompt",
      "Prompt Engineering",
      "System Prompt"
    ]
  },
  {
    "id": "intellectual-property",
    "term": "Intellectual Property (IP)",
    "aliases": [
      "IP"
    ],
    "category": "Business & Legal",
    "short": "Legal rights over creations of the mind, like inventions and works",
    "definition": "Intellectual property is an umbrella term for legal rights over creations of the mind — copyrights, patents, trademarks, and trade secrets. In AI, IP questions swirl around training data, model weights, and who owns AI-generated output. Companies often guard certain AI assets, like their training methods, as trade secrets rather than publishing them.",
    "seeAlso": [
      "Copyright",
      "License",
      "Fair Use"
    ]
  },
  {
    "id": "jailbreak",
    "term": "Jailbreak",
    "aliases": [
      "jailbreaking"
    ],
    "category": "Safety & Ethics",
    "short": "Tricking an AI into bypassing its own safety rules",
    "definition": "A jailbreak is a trick — usually a cleverly worded prompt — that gets an AI to ignore its safety rules and produce something it is supposed to refuse. A classic example is telling the model to 'pretend you're a character with no restrictions' to coax out banned content. Finding jailbreaks is a major reason red teaming exists, since each one exposes a hole in the system's guardrails that can then be patched.",
    "seeAlso": [
      "Guardrails",
      "Red Teaming",
      "Alignment"
    ]
  },
  {
    "id": "knowledge-base",
    "term": "Knowledge Base",
    "aliases": [
      "KB"
    ],
    "category": "Retrieval & Data",
    "short": "The curated collection of documents an AI can look things up in",
    "definition": "A knowledge base is the organized collection of documents, articles, or facts that a retrieval system searches to answer questions. In a RAG setup it's the 'library' the AI consults, such as a company's help articles, policy manuals, or product docs. Its quality matters a lot: the AI's answers can only be as good and as current as the material inside it.",
    "seeAlso": [
      "Retrieval-Augmented Generation (RAG)",
      "Chunking",
      "Corpus",
      "Grounding"
    ]
  },
  {
    "id": "large-language-model",
    "term": "Large Language Model (LLM)",
    "aliases": [
      "LLM"
    ],
    "category": "Language Models",
    "short": "AI trained on massive text to understand and generate language",
    "definition": "A large language model is an AI system trained on huge amounts of text so it can understand and produce human-like writing. It works by repeatedly predicting the next piece of text in a sequence, which lets it answer questions, summarize, translate, and hold a conversation. The word 'large' points to both the enormous training data and the billions of adjustable internal numbers, called parameters, that it tunes while learning.",
    "seeAlso": [
      "Transformer",
      "Parameters",
      "Next-token Prediction",
      "Foundation Model"
    ]
  },
  {
    "id": "latency",
    "term": "Latency",
    "aliases": [
      "response time",
      "lag"
    ],
    "category": "Operations & Deployment",
    "short": "How long you wait between asking the model and getting an answer",
    "definition": "Latency is the delay between sending a request to an AI system and receiving its response, usually measured in milliseconds or seconds. Lower latency feels snappy; higher latency feels sluggish. For a chatbot, latency includes how long until the first word appears and how quickly the rest of the reply streams in.",
    "seeAlso": [
      "Throughput",
      "Caching",
      "Inference Server",
      "Monitoring"
    ]
  },
  {
    "id": "learning-rate",
    "term": "Learning Rate",
    "aliases": [],
    "category": "Training & Fine-Tuning",
    "short": "How big a step the model takes when it adjusts itself",
    "definition": "The learning rate controls how large each adjustment is when the model updates its internal numbers during training. Set it too high and the model overshoots and never settles; set it too low and learning crawls along and takes forever. Choosing a good learning rate is one of the most important tuning decisions, like picking a sensible stride when walking downhill.",
    "seeAlso": [
      "Gradient Descent",
      "Hyperparameter",
      "Epoch",
      "Loss Function"
    ]
  },
  {
    "id": "license",
    "term": "License",
    "aliases": [],
    "category": "Business & Legal",
    "short": "The legal rulebook for how you may use a model or dataset",
    "definition": "A license is the set of legal terms stating what you are and aren't allowed to do with something — here, an AI model, its code, or its data. One license might permit free commercial use, another might restrict you to research only, and another might forbid certain harmful uses. Always read the license before building a product on a model, because it decides whether your intended use is even permitted.",
    "seeAlso": [
      "Open Source vs Open Weight",
      "Copyright"
    ]
  },
  {
    "id": "llama-cpp",
    "term": "llama.cpp",
    "aliases": [
      "llama cpp"
    ],
    "category": "Running AI Locally",
    "short": "The open-source engine that runs many local AI models efficiently",
    "definition": "llama.cpp is a free, open-source program that runs AI language models efficiently on ordinary hardware, including plain processors (CPUs) without a dedicated graphics card. Many friendlier apps, such as Ollama, are built on top of it. It became well known for making it possible to run surprisingly large models on modest machines, largely by using compression and other memory-saving techniques.",
    "seeAlso": [
      "Ollama",
      "GGUF",
      "Quantization",
      "Local Inference"
    ]
  },
  {
    "id": "llmops",
    "term": "LLMOps (Large Language Model Operations)",
    "aliases": [
      "LLM Ops"
    ],
    "category": "Operations & Deployment",
    "short": "MLOps specialized for running large language models in production",
    "definition": "LLMOps is MLOps focused on the special challenges of large language models—the AI systems that generate text. On top of normal model operations, it handles things unique to LLMs, like managing prompts, controlling token costs, adding safety guardrails, and evaluating open-ended answers that have no single correct response. For example, tracking which version of a prompt produces better replies is an LLMOps concern.",
    "seeAlso": [
      "Token Cost",
      "Evaluation (Eval)",
      "Monitoring"
    ]
  },
  {
    "id": "load-balancing",
    "term": "Load Balancing",
    "aliases": [
      "load balancer"
    ],
    "category": "Operations & Deployment",
    "short": "Spreading incoming requests across many servers",
    "definition": "Load balancing distributes incoming requests across several servers so that no single one gets overwhelmed. A load balancer acts like a traffic officer at a busy intersection, directing each request to whichever server has room to handle it. This keeps responses fast and prevents one machine's failure from taking the whole service down.",
    "seeAlso": [
      "Scaling",
      "Throughput",
      "Inference Server",
      "Latency"
    ]
  },
  {
    "id": "local-inference",
    "term": "Local Inference",
    "aliases": [
      "running models locally"
    ],
    "category": "Running AI Locally",
    "short": "Running an AI model on your own computer instead of a cloud server",
    "definition": "Inference means using an already-trained AI model to produce answers, as opposed to training, which is the separate, one-time process of teaching it in the first place. Local inference means that answering work happens on your own machine — your laptop, desktop, or phone — rather than on a company's remote servers. The upside is privacy and no internet requirement; the trade-off is that your own hardware has to be powerful enough to do the job.",
    "seeAlso": [
      "On-device",
      "Offline",
      "Ollama",
      "VRAM"
    ]
  },
  {
    "id": "logits",
    "term": "Logits",
    "aliases": [],
    "category": "Generation & Sampling",
    "short": "The model's raw scores for each possible next word",
    "definition": "Before a model announces a next word, it produces a raw numeric score for every word it knows; these scores are called logits. They aren't probabilities yet: they can be negative and don't add up to 100%. A step called softmax turns them into clean percentages, and settings like temperature actually work by stretching or squashing these logits first.",
    "seeAlso": [
      "Softmax",
      "Temperature",
      "Sampling"
    ]
  },
  {
    "id": "lora",
    "term": "LoRA (Low-Rank Adaptation)",
    "aliases": [
      "LoRA"
    ],
    "category": "Training & Fine-Tuning",
    "short": "A cheap fine-tuning trick that trains small add-on layers",
    "definition": "LoRA, or Low-Rank Adaptation, is a shortcut for fine-tuning that freezes the original model and trains only a small set of lightweight new numbers added alongside it. Because you update far fewer values, it needs much less memory and time, yet often performs nearly as well as full fine-tuning. The tiny result can be saved as a small file and snapped onto the base model when you need it.",
    "seeAlso": [
      "Fine-tuning",
      "Weights",
      "Quantization",
      "Hyperparameter"
    ]
  },
  {
    "id": "loss-function",
    "term": "Loss Function",
    "aliases": [
      "cost function",
      "objective function"
    ],
    "category": "Training & Fine-Tuning",
    "short": "A score measuring how wrong the model's answers are",
    "definition": "A loss function is a formula that measures how far the model's output is from the desired answer, producing a single number where lower means better. Training is essentially the ongoing effort to make this number as small as possible. Think of it as the model's report card: the signal that tells it whether it is improving or getting worse.",
    "seeAlso": [
      "Gradient Descent",
      "Backpropagation",
      "Overfitting",
      "Epoch"
    ]
  },
  {
    "id": "machine-learning",
    "term": "Machine Learning (ML)",
    "aliases": [
      "ML"
    ],
    "category": "Foundations",
    "short": "Software that learns patterns from examples instead of fixed rules",
    "definition": "Machine Learning is a type of AI where a computer learns to do a task by studying many examples, rather than being given step-by-step instructions. For instance, instead of writing rules to catch spam, you show the system thousands of emails labeled 'spam' or 'not spam' and it figures out the patterns itself. The result of this learning is a model that can then handle new, unseen cases.",
    "seeAlso": [
      "Artificial Intelligence (AI)",
      "Model",
      "Training",
      "Deep Learning"
    ]
  },
  {
    "id": "max-tokens",
    "term": "Max Tokens",
    "aliases": [
      "max_tokens",
      "maximum length",
      "max output tokens"
    ],
    "category": "Generation & Sampling",
    "short": "A ceiling on how long the model's answer can be",
    "definition": "Max tokens is a limit you set on how much text the model is allowed to generate, measured in tokens (the small chunks of words models read and write, where a token is often a short word or piece of one). If the answer reaches that ceiling it simply stops, even mid-sentence, so setting it too low can cut a response off. It's mainly a way to control length, speed, and cost.",
    "seeAlso": [
      "Stop Sequence",
      "Completion",
      "Streaming"
    ]
  },
  {
    "id": "mlops",
    "term": "MLOps (Machine Learning Operations)",
    "aliases": [
      "ML Ops"
    ],
    "category": "Operations & Deployment",
    "short": "Practices for reliably shipping and maintaining ML models in production",
    "definition": "MLOps is a set of practices and tools for taking machine learning models out of the lab and running them reliably in the real world. It borrows ideas from software engineering—like version control, automated testing, and continuous updates—and applies them to the messy lifecycle of data, training, and models. Think of it as the assembly line and maintenance crew that keeps a model working after it is first built.",
    "seeAlso": [
      "Deployment",
      "Monitoring",
      "Evaluation (Eval)"
    ]
  },
  {
    "id": "modality",
    "term": "Modality",
    "aliases": [],
    "category": "Multimodal",
    "short": "One type or channel of data, like text, images, or sound",
    "definition": "A modality is a single kind of information an AI system can work with, such as written text, images, audio, or video. Humans naturally combine modalities — we read words, see pictures, and hear sounds all at once. In AI, naming the modality helps describe what a model can handle, and a model that spans several of them is called multimodal.",
    "seeAlso": [
      "Multimodal",
      "Audio Model",
      "Vision Model"
    ]
  },
  {
    "id": "model",
    "term": "Model",
    "aliases": [],
    "category": "Foundations",
    "short": "The trained system that turns inputs into predictions",
    "definition": "In AI, a model is the end product of training: the thing that has 'learned' and can now make predictions or generate output. You can think of it as a very complex function that takes an input, like a sentence, and returns an output, like a translation. Many models store what they have learned as a large collection of numbers called parameters.",
    "seeAlso": [
      "Training",
      "Inference",
      "Parameter (Weight)",
      "Machine Learning (ML)"
    ]
  },
  {
    "id": "model-card",
    "term": "Model Card",
    "aliases": [],
    "category": "Business & Legal",
    "short": "A short \"nutrition label\" describing a model's abilities and limits",
    "definition": "A model card is a short document a provider publishes to describe an AI model in plain terms: what it's good at, the kind of data it was trained on, how it was tested, its known weaknesses, and its intended uses. Think of it like a nutrition label or a spec sheet — it helps you decide whether the model fits your needs before you rely on it. Reading one is a quick way to spot a model's blind spots up front.",
    "seeAlso": [
      "Benchmark",
      "Training Data",
      "Model Provider",
      "Responsible Scaling Policy (RSP)"
    ]
  },
  {
    "id": "model-context-protocol",
    "term": "Model Context Protocol (MCP)",
    "aliases": [
      "MCP"
    ],
    "category": "Agents & Tools",
    "short": "An open standard for connecting AI models to tools and data sources",
    "definition": "The Model Context Protocol is an open standard that gives AI applications a common way to plug into external tools, files, and data — like a universal adapter. Instead of every app inventing its own custom connection for each tool, a tool can be exposed once as an 'MCP server' and any MCP-compatible AI can use it. It's often compared to a USB-C port for AI: one shared shape that many different things can connect through.",
    "seeAlso": [
      "Tool Use",
      "Function Calling",
      "API",
      "AI Agent"
    ]
  },
  {
    "id": "model-provider",
    "term": "Model Provider",
    "aliases": [],
    "category": "Business & Legal",
    "short": "The company or group that builds and offers an AI model",
    "definition": "A model provider is the organization that develops an AI model and makes it available — often through an API (a service other apps connect to over the internet) or as a downloadable file. The provider typically sets the pricing, the usage rules, and the safety limits. Choosing one is a business decision that weighs cost, capability, reliability, and trust.",
    "seeAlso": [
      "License",
      "Acceptable Use Policy (AUP)",
      "Frontier Model",
      "Compute"
    ]
  },
  {
    "id": "model-quantization-level",
    "term": "Model Quantization level (Q4)",
    "aliases": [
      "Q4",
      "4-bit quantization",
      "Q4_K_M"
    ],
    "category": "Running AI Locally",
    "short": "A label showing how compressed a model is (Q4 means about 4 bits)",
    "definition": "When you download a local model you'll see labels like Q4, Q5, or Q8. The number is roughly how many bits are used to store each of the model's values — lower means a smaller, faster file that is slightly less accurate, while higher stays closer to the original but takes more space. Q4 (about 4 bits per value) is a popular middle ground that runs well on everyday computers while keeping good quality. Extra suffixes like Q4_K_M simply describe the exact compression method used.",
    "seeAlso": [
      "Quantization",
      "GGUF",
      "VRAM",
      "System Requirements"
    ]
  },
  {
    "id": "monitoring",
    "term": "Monitoring",
    "aliases": [
      "observability"
    ],
    "category": "Operations & Deployment",
    "short": "Watching a live system's health, speed, cost, and quality",
    "definition": "Monitoring is keeping an ongoing eye on a deployed AI system to catch problems as they happen. It tracks signals like response times, error rates, spending, and traffic, and can also watch output quality to spot when a model starts drifting or misbehaving. Alerts fire when something crosses a danger line, much like a warning light on a car's dashboard.",
    "seeAlso": [
      "Evaluation (Eval)",
      "Latency",
      "Scaling"
    ]
  },
  {
    "id": "multi-agent-system",
    "term": "Multi-agent System",
    "aliases": [
      "multi-agent"
    ],
    "category": "Agents & Tools",
    "short": "Several AI agents working together, each with its own role",
    "definition": "A multi-agent system uses more than one AI agent, each often specialized for a role, working together on a larger task — much like a team where one member researches, another writes, and another reviews. The agents can hand work to each other and combine their results, sometimes with one 'orchestrator' agent directing the rest. Splitting a big job into focused roles can produce better results than asking a single agent to do everything.",
    "seeAlso": [
      "AI Agent",
      "Orchestration",
      "Agentic Workflow",
      "Autonomy"
    ]
  },
  {
    "id": "multimodal",
    "term": "Multimodal",
    "aliases": [],
    "category": "Multimodal",
    "short": "AI that works with more than one type of data at once",
    "definition": "Multimodal AI can take in or produce more than one kind of information — such as text, images, audio, and video — instead of being limited to just one. For example, a multimodal model might look at a photo and answer questions about it in writing, or listen to speech and reply with text. The word 'modality' simply means a type or channel of data, so 'multimodal' means several types working together.",
    "seeAlso": [
      "Modality",
      "Vision Model",
      "Vision-Language Model (VLM)"
    ]
  },
  {
    "id": "nearest-neighbor-search",
    "term": "Nearest Neighbor Search",
    "aliases": [
      "ANN",
      "approximate nearest neighbor",
      "k-NN"
    ],
    "category": "Retrieval & Data",
    "short": "Finding the closest matches to a query in vector space",
    "definition": "Nearest neighbor search is the task of finding the stored items whose vectors are closest to a query's vector, meaning the most similar in meaning. Checking every item exactly can be slow, so systems often use approximate nearest neighbor (ANN) methods that trade a tiny bit of accuracy for enormous speed. This is the core operation happening inside a vector database during semantic search.",
    "seeAlso": [
      "Vector Database",
      "Cosine Similarity",
      "Indexing",
      "Semantic Search"
    ]
  },
  {
    "id": "neural-network",
    "term": "Neural Network",
    "aliases": [
      "Artificial Neural Network",
      "ANN"
    ],
    "category": "Foundations",
    "short": "A web of simple math units loosely inspired by the brain",
    "definition": "A neural network is a computing structure made of many small connected units, loosely inspired by how neurons in the brain pass along signals. Each connection has an adjustable strength called a weight, and by tuning these strengths during training the network learns to turn inputs, like the pixels of a photo, into useful outputs, like the label 'cat'. Stacking many layers of these units creates the deep neural networks behind most modern AI.",
    "seeAlso": [
      "Deep Learning",
      "Parameter (Weight)",
      "Machine Learning (ML)"
    ]
  },
  {
    "id": "next-token-prediction",
    "term": "Next-token Prediction",
    "aliases": [
      "autoregressive generation"
    ],
    "category": "Language Models",
    "short": "Generating text by repeatedly guessing the next token",
    "definition": "Next-token prediction is the core task most language models are trained on: given the text so far, estimate which token is likely to come next. By doing this over and over (predict a token, add it, then predict again), the model can build whole sentences and paragraphs. This simple objective, repeated across vast amounts of text, is what teaches models grammar, facts, and reasoning patterns.",
    "seeAlso": [
      "Token",
      "Pretraining",
      "Decoder",
      "Perplexity"
    ]
  },
  {
    "id": "ocr",
    "term": "OCR",
    "aliases": [
      "Optical Character Recognition"
    ],
    "category": "Multimodal",
    "short": "Reads printed or handwritten text out of an image",
    "definition": "OCR, short for Optical Character Recognition, is technology that finds the text inside a picture or scanned document and turns it into editable, searchable words. For example, snapping a photo of a receipt and getting back the typed numbers uses OCR. It differs from captioning, which describes a scene rather than reading the actual letters within it.",
    "seeAlso": [
      "Vision Model",
      "Captioning",
      "Modality"
    ]
  },
  {
    "id": "offline",
    "term": "Offline",
    "aliases": [
      "offline AI"
    ],
    "category": "Running AI Locally",
    "short": "Working with no internet connection at all",
    "definition": "Offline means the AI runs with no internet connection needed — once you've downloaded the model, everything happens on your own machine. This is a key appeal of local AI: it keeps working on a plane or in a remote area, and your prompts never leave your computer. Contrast this with cloud AI, which sends your text to a company's servers over the internet.",
    "seeAlso": [
      "On-device",
      "Local Inference",
      "Ollama"
    ]
  },
  {
    "id": "ollama",
    "term": "Ollama",
    "aliases": [],
    "category": "Running AI Locally",
    "short": "A free tool that downloads and runs AI models on your own computer",
    "definition": "Ollama is a popular free application that makes running open AI models on your own machine simple. You give it a short command (or use its app), it downloads the model for you, and then you can chat with it — no cloud account needed. It handles the fiddly technical setup behind the scenes, which is why beginners often start here.",
    "seeAlso": [
      "llama.cpp",
      "Local Inference",
      "Open-weight Model",
      "GGUF"
    ]
  },
  {
    "id": "on-device",
    "term": "On-device",
    "aliases": [
      "on-device AI",
      "edge AI"
    ],
    "category": "Running AI Locally",
    "short": "AI that runs directly on your phone, laptop, or gadget",
    "definition": "On-device means the AI runs directly on the hardware in your hand or on your desk — a phone, laptop, or other device — rather than in the cloud. It is closely related to local inference, but the phrase is used especially for smaller gadgets like smartphones. The benefits are privacy, speed, and offline use; the limit is that small devices can usually only run smaller models.",
    "seeAlso": [
      "Local Inference",
      "Offline",
      "System Requirements",
      "WebGPU"
    ]
  },
  {
    "id": "one-shot-prompting",
    "term": "One-shot Prompting",
    "aliases": [
      "one-shot"
    ],
    "category": "Prompting",
    "short": "Giving the AI exactly one example to follow",
    "definition": "One-shot prompting sits between zero-shot and few-shot: you provide a single example of the task before asking the AI to do it for real. That one example demonstrates the format or style you want without cluttering the prompt. It's handy when even a single sample makes your expectations clear.",
    "seeAlso": [
      "Zero-shot",
      "Few-shot",
      "In-context Learning"
    ]
  },
  {
    "id": "open-source-vs-open-weight",
    "term": "Open Source vs Open Weight",
    "aliases": [],
    "category": "Business & Legal",
    "short": "Open source shares everything; open weight shares only the finished model",
    "definition": "These two labels describe how \"open\" an AI model really is. Truly open source traditionally means you get everything needed to rebuild and change it — the code, and often the training recipe and data. \"Open weight\" means the company releases only the finished model's learned settings (its \"weights,\" the numbers it tuned during training) so you can run and adapt it, while keeping the data and full recipe private. Many models marketed as \"open\" are actually just open weight.",
    "seeAlso": [
      "License",
      "Parameter Count",
      "Training Data",
      "Model Provider"
    ]
  },
  {
    "id": "open-weight-model",
    "term": "Open-weight Model",
    "aliases": [
      "open weights",
      "open-weights model"
    ],
    "category": "Running AI Locally",
    "short": "A model whose learned values are published for anyone to download and run",
    "definition": "An AI model learns its skills by adjusting a huge set of internal numbers called weights (also called parameters). An open-weight model is one whose maker publishes those weights so anyone can download, run, and build on it. This is what makes local AI possible — you cannot run a model on your own computer if its weights stay locked on a company's servers. Note this is not quite the same as fully 'open source,' since the training data or code may still be kept private.",
    "seeAlso": [
      "Parameters (7B, 13B, 70B)",
      "Local Inference",
      "Ollama",
      "GGUF"
    ]
  },
  {
    "id": "orchestration",
    "term": "Orchestration",
    "aliases": [],
    "category": "Agents & Tools",
    "short": "Coordinating the steps, tools, and models that make an AI system work",
    "definition": "Orchestration is the coordination layer that decides the order of steps in an AI system — which model runs, which tool gets called, what happens with each result, and what to do if something fails. If an agent is a worker, orchestration is the manager scheduling the work and passing results between stages. In a multi-agent system it also routes tasks between the different agents.",
    "seeAlso": [
      "Agentic Workflow",
      "Multi-agent System",
      "Planning",
      "AI Agent"
    ]
  },
  {
    "id": "overfitting",
    "term": "Overfitting",
    "aliases": [],
    "category": "Training & Fine-Tuning",
    "short": "When a model memorizes training data but fails on new data",
    "definition": "Overfitting happens when a model learns its training examples so closely, including their random quirks and noise, that it performs poorly on new, unseen data. It is like a student who memorizes the exact practice questions but is stumped by a slightly different one on the real test. The goal is a model that captures general patterns, not one that just parrots back what it already saw.",
    "seeAlso": [
      "Epoch",
      "Loss Function",
      "Transfer Learning",
      "Learning Rate"
    ]
  },
  {
    "id": "parameter-count",
    "term": "Parameter Count",
    "aliases": [
      "parameters"
    ],
    "category": "Business & Legal",
    "short": "How many internal values a model has; a rough size measure",
    "definition": "Parameters are the internal adjustable numbers a model tunes during training to store what it has learned; the parameter count (often stated in billions) is a rough measure of a model's size. More parameters can mean more capability, but also higher cost to run. It's only a rough guide — a smaller, well-trained model can outperform a larger, poorly trained one.",
    "seeAlso": [
      "Compute",
      "Frontier Model",
      "Open Source vs Open Weight",
      "Benchmark"
    ]
  },
  {
    "id": "parameters",
    "term": "Parameters",
    "aliases": [
      "weights"
    ],
    "category": "Language Models",
    "short": "The adjustable numbers a model learns during training",
    "definition": "Parameters are the internal numbers a model adjusts as it learns, its knobs and dials, often called weights. Training nudges billions of these values until the model makes good predictions, and together they store everything the model has learned. A model's size is often described by its parameter count, and more parameters can mean more capability but also a higher cost to run.",
    "seeAlso": [
      "Pretraining",
      "Large Language Model (LLM)",
      "Transformer"
    ]
  },
  {
    "id": "parameters-2",
    "term": "Parameters (7B, 13B, 70B)",
    "aliases": [
      "weights",
      "model size",
      "7B",
      "billions of parameters"
    ],
    "category": "Running AI Locally",
    "short": "The count of learned values in a model; more usually means smarter but heavier",
    "definition": "Parameters are the internal numbers a model adjusts as it learns, and their count is the usual way to describe a model's size. Labels like 7B, 13B, or 70B mean 7 billion, 13 billion, or 70 billion parameters. More parameters generally means a more capable model, but also a bigger file and heavier hardware demands — so running locally is a balancing act between capability and what your computer can handle.",
    "seeAlso": [
      "Open-weight Model",
      "VRAM",
      "System Requirements",
      "Quantization"
    ]
  },
  {
    "id": "parameter",
    "term": "Parameter (Weight)",
    "aliases": [
      "Weight",
      "Weights",
      "Parameters"
    ],
    "category": "Foundations",
    "short": "The adjustable numbers a model learns during training",
    "definition": "Parameters are the internal numbers a model adjusts as it learns, and together they hold everything the model 'knows'; the most common kind are called weights. During training these values are tuned so the model's outputs match the examples more closely. Large modern models can have billions of parameters, which is one reason they need so much data and computing power.",
    "seeAlso": [
      "Model",
      "Training",
      "Neural Network"
    ]
  },
  {
    "id": "perplexity",
    "term": "Perplexity",
    "aliases": [],
    "category": "Language Models",
    "short": "A score of how well a model predicts text (lower is better)",
    "definition": "Perplexity measures how well a language model predicts a piece of text, based on how 'surprised' it is by the words that actually come next. Lower perplexity means the model found the text more predictable, which usually signals a stronger model. As a rough intuition, a perplexity of 10 means the model was, on average, about as unsure as if it were choosing among 10 equally likely options at each step.",
    "seeAlso": [
      "Next-token Prediction",
      "Token",
      "Large Language Model (LLM)"
    ]
  },
  {
    "id": "planning",
    "term": "Planning",
    "aliases": [],
    "category": "Agents & Tools",
    "short": "Breaking a goal into an ordered set of steps to reach it",
    "definition": "Planning is when an AI agent breaks a big goal into a sequence of smaller steps before or while acting — deciding what to do first, second, and third. Asked to plan a trip, for example, it might first settle on dates, then search flights, then book a hotel. Some agents make a full plan up front, while others plan a little, act, see what happens, and adjust the plan as they go.",
    "seeAlso": [
      "AI Agent",
      "ReAct",
      "Orchestration",
      "Agentic Workflow"
    ]
  },
  {
    "id": "pretraining",
    "term": "Pretraining",
    "aliases": [],
    "category": "Language Models",
    "short": "The first, broad learning phase on huge amounts of data",
    "definition": "Pretraining is the initial phase in which a model learns general patterns of language by processing enormous amounts of text, usually by practicing next-word prediction. It needs no human-labeled answers, because the text itself supplies them: the model repeatedly tries to predict the next piece of text, then compares its guess against what actually comes next and adjusts. After pretraining, the model can be further refined (fine-tuned) for specific uses.",
    "seeAlso": [
      "Next-token Prediction",
      "Foundation Model",
      "Large Language Model (LLM)"
    ]
  },
  {
    "id": "prompt",
    "term": "Prompt",
    "aliases": [],
    "category": "Prompting",
    "short": "The text or question you give an AI to get a response",
    "definition": "A prompt is whatever you type or send to an AI model to tell it what you want — a question, an instruction, or an example. The model reads your prompt and produces a response based on it. Think of it like a request you hand to a very capable assistant: the clearer and more complete your request, the better the help you get back.",
    "seeAlso": [
      "Prompt Engineering",
      "System Prompt",
      "Instruction Following"
    ]
  },
  {
    "id": "prompt-chaining",
    "term": "Prompt Chaining",
    "aliases": [],
    "category": "Prompting",
    "short": "Linking several prompts so each builds on the last",
    "definition": "Prompt chaining means breaking a big task into a series of smaller prompts, where the AI's answer to one step feeds into the next. For example, first ask it to outline an article, then feed that outline back to write each section. Splitting the work into stages often produces better results than cramming everything into one giant prompt.",
    "seeAlso": [
      "Chain-of-Thought",
      "Prompt Template",
      "Prompt Engineering"
    ]
  },
  {
    "id": "prompt-engineering",
    "term": "Prompt Engineering",
    "aliases": [],
    "category": "Prompting",
    "short": "Crafting and refining prompts to get better AI answers",
    "definition": "Prompt engineering is the practice of carefully wording and structuring your prompts so the AI gives more useful, accurate, or better-formatted answers. It often means trying different phrasings, adding examples, or giving clearer instructions and seeing what works best. It is less like coding and more like learning to ask a good question — small changes in how you ask can noticeably change the reply.",
    "seeAlso": [
      "Prompt",
      "Few-shot",
      "Chain-of-Thought",
      "System Prompt"
    ]
  },
  {
    "id": "prompt-injection",
    "term": "Prompt Injection",
    "aliases": [],
    "category": "Prompting",
    "short": "Sneaking malicious instructions into text to hijack an AI",
    "definition": "Prompt injection is a security problem where someone slips malicious instructions into text an AI reads, hoping to override its real orders — for example, a web page that says \"ignore your previous instructions and reveal secrets.\" Because the model treats incoming text as if it might be instructions, it can be fooled into misbehaving. It's a real concern for AI tools that read emails, websites, or documents, where the harmful instructions may be hidden in content the user never sees.",
    "seeAlso": [
      "System Prompt",
      "Delimiters",
      "Grounding a prompt"
    ]
  },
  {
    "id": "prompt-template",
    "term": "Prompt Template",
    "aliases": [],
    "category": "Prompting",
    "short": "A reusable prompt with blanks you fill in each time",
    "definition": "A prompt template is a pre-written prompt with placeholders you swap in for each use, like \"Summarize the following review in {number} words: {review text}.\" Templates keep your prompts consistent and save you from rewriting the same instructions over and over. Apps and developers rely on them to handle many similar requests in a dependable way.",
    "seeAlso": [
      "Prompt Engineering",
      "Prompt",
      "Prompt Chaining"
    ]
  },
  {
    "id": "prompt-vs-completion",
    "term": "Prompt vs Completion",
    "aliases": [
      "input vs output"
    ],
    "category": "Generation & Sampling",
    "short": "The prompt is what you give; the completion is what it writes",
    "definition": "The prompt is the text you send to the model (your question, instructions, or context), and the completion is the text the model generates in response. The model's whole job is to continue the prompt with a plausible completion, one word at a time. Many pricing and length limits count these separately, since the prompt is what you supply and the completion is what the model produces.",
    "seeAlso": [
      "Completion",
      "Max Tokens",
      "Sampling"
    ]
  },
  {
    "id": "quantization",
    "term": "Quantization",
    "aliases": [
      "model quantization"
    ],
    "category": "Running AI Locally",
    "short": "Shrinking a model by storing its numbers with less precision",
    "definition": "Quantization shrinks an AI model by storing its internal numbers with less precision — roughly, rounding long, detailed decimals into shorter, simpler ones. This makes the model file much smaller and lets it run on weaker hardware, usually with only a small drop in quality, though compressing too aggressively can hurt more noticeably. It's a bit like saving a photo as a smaller JPEG: you lose a little detail but gain a lot of convenience.",
    "seeAlso": [
      "Model Quantization level (Q4)",
      "VRAM",
      "GGUF",
      "Parameters (7B, 13B, 70B)"
    ]
  },
  {
    "id": "rate-limit",
    "term": "Rate Limit",
    "aliases": [
      "throttling",
      "quota"
    ],
    "category": "Operations & Deployment",
    "short": "A cap on how many requests you can make in a period",
    "definition": "A rate limit is a ceiling on how often you are allowed to call a service within a given window of time—say, a maximum number of requests per minute. Providers use it to keep the system fair and stable so no single user can overwhelm it. If you exceed the limit, extra requests are refused or delayed until the window resets, so well-built apps slow down and retry politely.",
    "seeAlso": [
      "API Endpoint",
      "Throughput",
      "Token Cost",
      "Scaling"
    ]
  },
  {
    "id": "react",
    "term": "ReAct",
    "aliases": [
      "Reason + Act",
      "Reasoning and Acting"
    ],
    "category": "Agents & Tools",
    "short": "A pattern where an agent alternates reasoning with taking actions",
    "definition": "ReAct (short for 'Reason + Act') is a popular pattern for building agents in which the model repeatedly thinks about what to do, takes one action such as a tool call, observes the result, then thinks again — looping until it reaches an answer. Interleaving reasoning with real actions keeps the agent grounded in actual results instead of guessing everything up front. For instance: think 'I need the population,' search for it, read the result, then continue.",
    "seeAlso": [
      "AI Agent",
      "Tool Use",
      "Planning",
      "Agentic Workflow"
    ]
  },
  {
    "id": "red-teaming",
    "term": "Red Teaming",
    "aliases": [],
    "category": "Safety & Ethics",
    "short": "Deliberately attacking an AI to find its weaknesses before others do",
    "definition": "Red teaming is when people intentionally try to make an AI system misbehave — to uncover flaws, unsafe outputs, or ways it can be tricked — so those problems can be fixed before release. The name comes from military exercises where a 'red team' plays the attacker. For an AI, it might mean testing many cleverly worded prompts to see whether the model can be pushed into giving dangerous, biased, or false answers.",
    "seeAlso": [
      "Jailbreak",
      "Guardrails",
      "AI Safety"
    ]
  },
  {
    "id": "reinforcement-learning",
    "term": "Reinforcement Learning",
    "aliases": [
      "RL"
    ],
    "category": "Foundations",
    "short": "Learning by trial and error through rewards and penalties",
    "definition": "Reinforcement learning is machine learning where a system learns by trying actions and receiving rewards or penalties, gradually favoring the choices that lead to better outcomes. It is how AI is often trained to play games or control robots, much like training a pet with treats for good behavior. Over many attempts, the system discovers a strategy that earns the most reward.",
    "seeAlso": [
      "Supervised Learning",
      "Unsupervised Learning",
      "Machine Learning (ML)"
    ]
  },
  {
    "id": "repetition-penalty",
    "term": "Repetition Penalty",
    "aliases": [
      "frequency penalty",
      "presence penalty"
    ],
    "category": "Generation & Sampling",
    "short": "Nudges the model to stop repeating itself",
    "definition": "A repetition penalty lowers the chances of words the model has already used, so it's less likely to loop or restate the same phrase over and over. Related settings, sometimes called frequency and presence penalties, either scale the discouragement by how often a word has appeared or apply a flat nudge toward introducing new words. Used gently these keep writing fresh; turned up too high they can push the model into odd word choices.",
    "seeAlso": [
      "Temperature",
      "Sampling",
      "Top-p (Nucleus Sampling)"
    ]
  },
  {
    "id": "reranking",
    "term": "Reranking",
    "aliases": [
      "re-ranking",
      "reranker"
    ],
    "category": "Retrieval & Data",
    "short": "A second pass that reorders search hits by true relevance",
    "definition": "Reranking is a second, more careful step that takes an initial set of search results and reorders them by how relevant they truly are to your question. A fast first pass grabs a handful of candidate passages, then a slower, smarter model scores each one and pushes the best to the top. This two-stage approach gives you both speed and quality, so the AI reads the most useful passages first.",
    "seeAlso": [
      "Semantic Search",
      "Nearest Neighbor Search",
      "Retrieval-Augmented Generation (RAG)",
      "Vector Database"
    ]
  },
  {
    "id": "responsible-ai",
    "term": "Responsible AI",
    "aliases": [
      "ethical AI"
    ],
    "category": "Safety & Ethics",
    "short": "Building and using AI in ways that are safe, fair, and accountable",
    "definition": "Responsible AI is an umbrella term for designing, building, and deploying AI systems in ways that are safe, fair, transparent, and respectful of people's rights. It covers practical questions like: Is this system biased? Can we explain its decisions? Who is accountable if it causes harm? Rather than a single technique, it's a mindset and a set of practices applied across the whole life of a project.",
    "seeAlso": [
      "AI Governance",
      "Fairness",
      "Transparency",
      "Bias"
    ]
  },
  {
    "id": "responsible-scaling-policy",
    "term": "Responsible Scaling Policy (RSP)",
    "aliases": [
      "RSP"
    ],
    "category": "Business & Legal",
    "short": "A safety framework tying model capability to required safeguards",
    "definition": "A Responsible Scaling Policy is a public commitment some AI companies make that links how powerful a model they will release to the safety measures they have in place. As models cross capability thresholds — for example, becoming able to meaningfully assist with dangerous tasks — stronger safeguards and testing are required before deployment. It is a voluntary form of self-governance, not a law.",
    "seeAlso": [
      "Frontier Model",
      "Model Card",
      "Artificial General Intelligence (AGI)"
    ]
  },
  {
    "id": "retrieval-augmented-generation",
    "term": "Retrieval-Augmented Generation (RAG)",
    "aliases": [
      "RAG"
    ],
    "category": "Retrieval & Data",
    "short": "Look up relevant info first, then let the AI answer using it",
    "definition": "RAG is a technique where an AI system first searches a collection of documents for material relevant to your question, then hands that text to a language model to write the answer. Instead of relying only on what the model memorized during training, it 'reads' the right sources first, like an open-book exam. This can make answers more accurate and lets the AI draw on up-to-date or private information it was never trained on.",
    "seeAlso": [
      "Vector Database",
      "Semantic Search",
      "Grounding",
      "Knowledge Base"
    ]
  },
  {
    "id": "rlhf",
    "term": "RLHF (Reinforcement Learning from Human Feedback)",
    "aliases": [
      "RLHF"
    ],
    "category": "Training & Fine-Tuning",
    "short": "Training a model to favor answers humans rate as better",
    "definition": "RLHF, short for Reinforcement Learning from Human Feedback, is a method where people rank or rate a model's responses and the model learns to produce more of what humans prefer. Typically a separate 'reward model' first learns to predict those human ratings, and then the main model is tuned to score well against it. This is a big part of how a raw, blunt language model becomes a helpful, polite assistant.",
    "seeAlso": [
      "Fine-tuning",
      "Loss Function",
      "Pretraining",
      "Learning Rate"
    ]
  },
  {
    "id": "role-prompting",
    "term": "Role Prompting",
    "aliases": [
      "persona prompting"
    ],
    "category": "Prompting",
    "short": "Telling the AI to act as a specific person or expert",
    "definition": "Role prompting means asking the AI to take on a particular character or area of expertise, such as \"Act as an experienced travel guide\" or \"You are a patient math tutor.\" Framing the task with a role nudges the model toward a fitting tone, vocabulary, and level of detail. It's a simple way to steer the style of an answer without spelling out every preference.",
    "seeAlso": [
      "System Prompt",
      "Prompt Engineering",
      "Instruction Following"
    ]
  },
  {
    "id": "sampling",
    "term": "Sampling",
    "aliases": [],
    "category": "Generation & Sampling",
    "short": "Rolling weighted dice to pick each next word",
    "definition": "A language model doesn't know one 'correct' next word; it produces a list of possible next words, each with a probability. Sampling means choosing the next word by drawing from that list of chances, like rolling weighted dice, instead of always taking the single most likely option. This is what lets a model give varied, natural-sounding answers rather than the same rigid response every time.",
    "seeAlso": [
      "Temperature",
      "Greedy Decoding",
      "Top-p (Nucleus Sampling)",
      "Logits"
    ]
  },
  {
    "id": "scaling",
    "term": "Scaling",
    "aliases": [
      "autoscaling",
      "scaling out"
    ],
    "category": "Operations & Deployment",
    "short": "Adding or removing capacity to match demand",
    "definition": "Scaling means adjusting how much computing power serves a system so it can handle changing demand. Scaling out adds more machines and scaling up swaps in more powerful ones when traffic surges; scaling down removes capacity when things are quiet to save money. Autoscaling does this automatically based on live load, like a store opening more checkout lanes when a line forms and closing them when it clears.",
    "seeAlso": [
      "Throughput",
      "Load Balancing",
      "Inference Server",
      "Monitoring"
    ]
  },
  {
    "id": "seed-determinism",
    "term": "Seed / Determinism",
    "aliases": [
      "seed",
      "random seed",
      "reproducibility"
    ],
    "category": "Generation & Sampling",
    "short": "A fixed number that makes random output repeatable",
    "definition": "Because sampling involves randomness, the same prompt can give different answers each time. A seed is a starting number for that randomness: reuse the same seed with the same settings and you can get the same output again, which is called determinism and is useful for testing and debugging. Note that seeds only pin down the randomness under your control; other factors behind the scenes can still cause small differences.",
    "seeAlso": [
      "Sampling",
      "Temperature",
      "Greedy Decoding"
    ]
  },
  {
    "id": "semantic-search",
    "term": "Semantic Search",
    "aliases": [
      "meaning-based search"
    ],
    "category": "Retrieval & Data",
    "short": "Search that matches meaning, not just exact keywords",
    "definition": "Semantic search finds results based on what you mean rather than the exact words you typed. Ask for 'ways to lower my energy bill' and it can surface a document about 'reducing electricity costs' even though none of those words match. It works by comparing embeddings, the numeric representations of meaning, so related ideas are recognized as close even when the wording is different.",
    "seeAlso": [
      "Embedding",
      "Cosine Similarity",
      "Vector Database",
      "Retrieval-Augmented Generation (RAG)"
    ]
  },
  {
    "id": "softmax",
    "term": "Softmax",
    "aliases": [],
    "category": "Generation & Sampling",
    "short": "Turns raw scores into probabilities that add up to 100%",
    "definition": "Softmax is the math step that converts the model's raw scores (logits) into a tidy set of probabilities, where every option gets a percentage and the whole list adds up to 100%. It gives higher scores a larger share while still leaving smaller ones a nonzero chance. This probability list is exactly what sampling methods then draw from to choose the next word.",
    "seeAlso": [
      "Logits",
      "Sampling",
      "Temperature"
    ]
  },
  {
    "id": "speech-to-text",
    "term": "Speech-to-Text (ASR)",
    "aliases": [
      "ASR",
      "Automatic Speech Recognition",
      "speech recognition"
    ],
    "category": "Multimodal",
    "short": "Converts spoken audio into written words",
    "definition": "Speech-to-text, also called Automatic Speech Recognition (ASR), listens to spoken audio and writes down what was said as text. It powers voice typing, video subtitles, and the voice assistants that need to understand your words. In short, you talk and the AI produces a written transcript.",
    "seeAlso": [
      "Text-to-Speech (TTS)",
      "Audio Model",
      "Modality"
    ]
  },
  {
    "id": "stop-sequence",
    "term": "Stop Sequence",
    "aliases": [
      "stop token",
      "stop string"
    ],
    "category": "Generation & Sampling",
    "short": "A marker that tells the model to stop generating",
    "definition": "A stop sequence is a bit of text you designate as a finish line: the moment the model is about to produce it, generation halts and that marker usually isn't included in the output. For example, if you're generating one item at a time, you might set a newline or a label like 'User:' as the stop sequence so the model doesn't run on into the next turn. It's a precise way to end a response at the right spot rather than relying only on a length limit.",
    "seeAlso": [
      "Max Tokens",
      "Completion"
    ]
  },
  {
    "id": "streaming",
    "term": "Streaming",
    "aliases": [
      "token streaming"
    ],
    "category": "Generation & Sampling",
    "short": "Sending the answer piece by piece as it's written",
    "definition": "Streaming means the model sends its answer to you in small pieces as it generates them, instead of waiting until the whole thing is finished. That's why you often see text appear word by word, like watching someone type. It doesn't make the model think faster, but it lets you start reading sooner and feels more responsive.",
    "seeAlso": [
      "Completion",
      "Max Tokens"
    ]
  },
  {
    "id": "supervised-learning",
    "term": "Supervised Learning",
    "aliases": [],
    "category": "Foundations",
    "short": "Learning from examples that come with the correct answers",
    "definition": "Supervised learning is machine learning where each training example comes with the right answer, called a label, so the model learns by comparing its guesses to the truth. For example, to build a system that reads handwritten digits, you show it many images each tagged with the correct number. It is a bit like a student studying with an answer key.",
    "seeAlso": [
      "Unsupervised Learning",
      "Reinforcement Learning",
      "Dataset",
      "Machine Learning (ML)"
    ]
  },
  {
    "id": "system-prompt",
    "term": "System Prompt",
    "aliases": [
      "system message"
    ],
    "category": "Prompting",
    "short": "Behind-the-scenes instructions that set the AI's overall behavior",
    "definition": "A system prompt is a special set of instructions given to the AI before your conversation starts, setting its overall role, tone, and rules — for example, \"You are a friendly tutor who explains things simply.\" You usually don't see it, but it shapes how the AI responds to everything you say afterward. It's like a job description handed to an assistant before the customer walks in.",
    "seeAlso": [
      "Prompt",
      "Role Prompting",
      "Instruction Following"
    ]
  },
  {
    "id": "system-requirements",
    "term": "System Requirements",
    "aliases": [
      "hardware requirements",
      "specs"
    ],
    "category": "Running AI Locally",
    "short": "The hardware your computer needs to run a given model",
    "definition": "System requirements are the minimum hardware and software your computer needs to run a particular model smoothly — mainly memory (VRAM or regular RAM), disk space for the model file, and enough processing power. Bigger models demand more; smaller or more compressed ones demand less. Checking these before downloading saves you from grabbing a model your machine simply cannot run.",
    "seeAlso": [
      "VRAM",
      "Parameters (7B, 13B, 70B)",
      "Model Quantization level (Q4)",
      "Local Inference"
    ]
  },
  {
    "id": "temperature",
    "term": "Temperature",
    "aliases": [
      "temp"
    ],
    "category": "Generation & Sampling",
    "short": "A dial from focused-and-safe to wild-and-creative",
    "definition": "Temperature is a setting that controls how adventurous the model is when picking words. A low temperature makes it favor the most likely, 'safe' choices, so answers are focused and more consistent; a high temperature flattens the odds so less likely words get a real chance, making output more varied and creative (but also more prone to going off the rails). Think of it as a creativity knob: turn it down for facts and code, up for brainstorming and poetry.",
    "seeAlso": [
      "Sampling",
      "Top-p (Nucleus Sampling)",
      "Top-k",
      "Greedy Decoding"
    ]
  },
  {
    "id": "text-to-image",
    "term": "Text-to-Image",
    "aliases": [
      "txt2img"
    ],
    "category": "Multimodal",
    "short": "Turns a written description into a generated picture",
    "definition": "Text-to-image is the task of creating a brand-new picture from a written prompt, such as 'a red bicycle on a rainy street at night.' The AI reads your words and produces an image that tries to match them, usually powered by a diffusion model behind the scenes. You describe what you want in plain language, and the system paints it for you.",
    "seeAlso": [
      "Image Generation",
      "Diffusion Model",
      "Text-to-Video"
    ]
  },
  {
    "id": "text-to-speech",
    "term": "Text-to-Speech (TTS)",
    "aliases": [
      "TTS",
      "speech synthesis"
    ],
    "category": "Multimodal",
    "short": "Reads written text aloud in a natural-sounding voice",
    "definition": "Text-to-speech, or TTS, does the reverse of speech recognition: it takes written words and turns them into spoken audio in a human-like voice. It is what lets a screen reader read a webpage aloud or a navigation app speak directions. Modern TTS can sound remarkably natural, with realistic pacing and tone.",
    "seeAlso": [
      "Speech-to-Text (ASR)",
      "Audio Model",
      "Voice Cloning"
    ]
  },
  {
    "id": "text-to-video",
    "term": "Text-to-Video",
    "aliases": [
      "txt2vid"
    ],
    "category": "Multimodal",
    "short": "Turns a written prompt into a short generated video",
    "definition": "Text-to-video is the task of creating a moving clip straight from a written description, such as 'a paper airplane gliding across a classroom.' The AI has to imagine not just how the scene looks but how it changes over time, keeping objects steady and believable as they move. It is a more demanding cousin of text-to-image.",
    "seeAlso": [
      "Video Generation",
      "Text-to-Image",
      "Diffusion Model"
    ]
  },
  {
    "id": "throughput",
    "term": "Throughput",
    "aliases": [
      "capacity"
    ],
    "category": "Operations & Deployment",
    "short": "How many requests a system can handle in a given time",
    "definition": "Throughput measures how much work a system can get through in a set period—for example, how many requests, or how many tokens (small chunks of text), an AI service can process per second. It is about total volume, not the speed of any single answer. A drive-through with many lanes has high throughput even if each individual car still takes a minute.",
    "seeAlso": [
      "Latency",
      "Scaling",
      "Batching (Batch Inference)",
      "Inference Server"
    ]
  },
  {
    "id": "token",
    "term": "Token",
    "aliases": [],
    "category": "Language Models",
    "short": "A chunk of text (a word or word-piece) a model reads and writes",
    "definition": "A token is the small unit of text that a language model actually processes. It is often a whole word, but can also be just part of one (like 'un', 'believ', 'able') or a single character. Splitting text this way lets a model handle any word, even one it has never seen, by combining familiar pieces. Models measure the length of their input and output in tokens rather than letters or words.",
    "seeAlso": [
      "Tokenization",
      "Vocabulary",
      "Context Window",
      "Next-token Prediction"
    ]
  },
  {
    "id": "token-cost",
    "term": "Token Cost",
    "aliases": [
      "token pricing",
      "cost per token"
    ],
    "category": "Operations & Deployment",
    "short": "What you pay based on the amount of text a model reads and writes",
    "definition": "Most language models charge by the token—a token being a small chunk of text, roughly a few characters or part of a word. Token cost is the price for the tokens you send in (the prompt) plus the tokens the model generates back (the answer). Longer prompts and longer answers cost more, which is why trimming needless text is a simple way to save money.",
    "seeAlso": [
      "Rate Limit",
      "Caching",
      "Throughput"
    ]
  },
  {
    "id": "tokenization",
    "term": "Tokenization",
    "aliases": [
      "tokenizing",
      "tokens"
    ],
    "category": "Retrieval & Data",
    "short": "Splitting text into the small units an AI reads",
    "definition": "Tokenization is the process of breaking text into small pieces called tokens, often whole words, parts of words, or punctuation, because language models read and count text in these units rather than in letters or full sentences. For example, 'unhappiness' might split into 'un', 'happi', and 'ness'. How text is tokenized affects how much of it fits in a model's working memory and how usage is measured.",
    "seeAlso": [
      "Embedding",
      "Vector",
      "Chunking"
    ]
  },
  {
    "id": "tokens-per-second",
    "term": "Tokens per Second",
    "aliases": [
      "tokens/sec",
      "tok/s",
      "inference speed"
    ],
    "category": "Running AI Locally",
    "short": "How fast a model generates text; higher feels snappier",
    "definition": "Tokens per second measures how fast a model produces text, where a token is a chunk of a word (roughly a few characters). Higher numbers mean the reply appears faster and feels more responsive, while lower numbers feel sluggish. When running locally, this speed depends on your hardware plus the model's size and compression — smaller or more heavily quantized models run faster.",
    "seeAlso": [
      "Context Length",
      "VRAM",
      "Model Quantization level (Q4)",
      "Local Inference"
    ]
  },
  {
    "id": "tool-use",
    "term": "Tool Use",
    "aliases": [],
    "category": "Agents & Tools",
    "short": "Letting an AI reach outside itself to use search, code, or calculators",
    "definition": "Tool use is when an AI model is allowed to reach beyond its own text and use external helpers — a calculator, a web search, a database, or code — to get something done. On its own a model can't truly browse the live web or do reliable math, so it requests a tool, gets a real result back, and folds that into its answer. For example, instead of guessing today's weather, an agent with tool use calls a weather service and reports the actual number.",
    "seeAlso": [
      "Function Calling",
      "AI Agent",
      "API",
      "Model Context Protocol (MCP)"
    ]
  },
  {
    "id": "top-k",
    "term": "Top-k",
    "aliases": [
      "top k"
    ],
    "category": "Generation & Sampling",
    "short": "Only consider the k most likely next words",
    "definition": "Top-k limits the model's choices to a fixed number of the most likely next words before it picks one. For example, top-k of 40 means 'ignore everything except the 40 best candidates, then sample from those.' It's a simple way to cut off unlikely, off-topic words, though unlike top-p the size of the shortlist stays fixed no matter how confident the model is.",
    "seeAlso": [
      "Top-p (Nucleus Sampling)",
      "Temperature",
      "Sampling"
    ]
  },
  {
    "id": "top-p",
    "term": "Top-p (Nucleus Sampling)",
    "aliases": [
      "top p",
      "nucleus sampling"
    ],
    "category": "Generation & Sampling",
    "short": "Keep the smallest group of words that covers p of the odds",
    "definition": "Top-p narrows the candidate words before the model picks one. It sorts the possible next words from most to least likely and keeps only the smallest group at the top whose combined probability reaches a threshold p (say 0.9, or 90%), then samples from just that group. This adapts automatically: when the model is confident the group is tiny, and when it's unsure the group grows to include more options.",
    "seeAlso": [
      "Top-k",
      "Temperature",
      "Sampling"
    ]
  },
  {
    "id": "training",
    "term": "Training",
    "aliases": [
      "Model Training"
    ],
    "category": "Foundations",
    "short": "Teaching a model by adjusting it to fit many examples",
    "definition": "Training is the process of teaching a model by showing it data and gradually adjusting its internal numbers (parameters) so its answers get better. Each time the model makes a mistake, it nudges those numbers slightly to reduce the error, repeating this over and over across huge amounts of data. Training is usually the most time-consuming and computing-heavy part of building an AI system.",
    "seeAlso": [
      "Model",
      "Dataset",
      "Inference",
      "GPU"
    ]
  },
  {
    "id": "training-data",
    "term": "Training Data",
    "aliases": [],
    "category": "Business & Legal",
    "short": "The examples a model learns from during training",
    "definition": "Training data is the large collection of text, images, or other examples an AI model studies in order to learn patterns. Its quality and content shape what the model knows and the biases it may carry — \"garbage in, garbage out.\" Where this data comes from, and whether its original creators agreed to its use, sits at the heart of many AI copyright disputes.",
    "seeAlso": [
      "Copyright",
      "Fair Use",
      "Model Card",
      "Compute"
    ]
  },
  {
    "id": "transfer-learning",
    "term": "Transfer Learning",
    "aliases": [],
    "category": "Training & Fine-Tuning",
    "short": "Reusing knowledge from one task to learn a new one faster",
    "definition": "Transfer learning means taking a model that already learned useful patterns from one large task and reusing that knowledge as a head start for a different, often smaller task. Because it doesn't begin from zero, it learns the new job faster and with less data, like a pianist picking up a new instrument quickly thanks to existing musical skill. Fine-tuning is the most common way people put transfer learning into practice.",
    "seeAlso": [
      "Fine-tuning",
      "Pretraining",
      "LoRA (Low-Rank Adaptation)",
      "Distillation"
    ]
  },
  {
    "id": "transformer",
    "term": "Transformer",
    "aliases": [],
    "category": "Language Models",
    "short": "The neural network design behind most modern language models",
    "definition": "A transformer is the type of neural network (a math system loosely inspired by how brain cells connect) that powers most modern language models. Its key idea is an 'attention' mechanism that lets it weigh how much every word in a passage relates to every other word, all at once, instead of reading strictly one word at a time. This design made it practical to train far larger and more capable models than earlier approaches could.",
    "seeAlso": [
      "Attention",
      "Encoder",
      "Decoder",
      "Large Language Model (LLM)"
    ]
  },
  {
    "id": "transparency",
    "term": "Transparency",
    "aliases": [],
    "category": "Safety & Ethics",
    "short": "Being open about how an AI works and where it's used",
    "definition": "Transparency means being open about how an AI system works, what data it was trained on, what its limits are, and when people are dealing with a machine rather than a human. This openness helps users, regulators, and the public make informed choices and hold builders accountable. It overlaps with explainability but is broader — it's about honest disclosure around the whole system, not just explaining one specific decision.",
    "seeAlso": [
      "Explainability (Interpretability)",
      "Responsible AI",
      "Watermarking"
    ]
  },
  {
    "id": "unsupervised-learning",
    "term": "Unsupervised Learning",
    "aliases": [],
    "category": "Foundations",
    "short": "Finding patterns in data that has no labels",
    "definition": "Unsupervised learning is machine learning where the data has no correct answers attached, so the model looks for structure or patterns on its own. A common use is grouping similar items together, such as sorting customers into segments based on their buying habits without being told the groups in advance. It is like tidying a messy drawer by noticing which things naturally belong together.",
    "seeAlso": [
      "Supervised Learning",
      "Reinforcement Learning",
      "Machine Learning (ML)"
    ]
  },
  {
    "id": "vector",
    "term": "Vector",
    "aliases": [],
    "category": "Retrieval & Data",
    "short": "An ordered list of numbers a computer can compare",
    "definition": "A vector is simply an ordered list of numbers, like [0.12, -0.98, 0.44]. In AI, a vector often represents a point in a 'meaning space,' where each number is one coordinate. Because vectors can be compared and measured mathematically, they let computers judge how close or far apart two ideas are, which is the foundation of embeddings and semantic search.",
    "seeAlso": [
      "Embedding",
      "Cosine Similarity",
      "Vector Database",
      "Semantic Search"
    ]
  },
  {
    "id": "vector-database",
    "term": "Vector Database",
    "aliases": [
      "vector store",
      "vector DB"
    ],
    "category": "Retrieval & Data",
    "short": "A database built to find items by meaning, not exact words",
    "definition": "A vector database stores information as lists of numbers called embeddings that capture meaning, and it specializes in quickly finding the entries whose numbers are most similar to a query. This lets it answer 'what is closest in meaning to this?' across millions of items in a fraction of a second. It's the storage engine that makes semantic search and RAG practical at large scale.",
    "seeAlso": [
      "Embedding",
      "Vector",
      "Nearest Neighbor Search",
      "Indexing"
    ]
  },
  {
    "id": "video-generation",
    "term": "Video Generation",
    "aliases": [
      "video synthesis"
    ],
    "category": "Multimodal",
    "short": "AI creating moving video clips from text or images",
    "definition": "Video generation is having an AI produce short moving clips rather than a single still image. You might give it a text prompt or a starting picture, and it creates a series of frames that flow together into motion. It is much harder than making one image, because everything must stay consistent from frame to frame, and many systems build on diffusion models.",
    "seeAlso": [
      "Text-to-Video",
      "Image Generation",
      "Diffusion Model"
    ]
  },
  {
    "id": "vision-language-model",
    "term": "Vision-Language Model (VLM)",
    "aliases": [
      "VLM"
    ],
    "category": "Multimodal",
    "short": "Understands images and text together to answer or describe",
    "definition": "A vision-language model, or VLM, is a multimodal AI that connects what it sees in an image with language. You can show it a picture and ask questions about it in writing, and it answers in words — for instance, 'What is the person holding?' The model links visual details to text, essentially blending a vision model with a language model.",
    "seeAlso": [
      "Multimodal",
      "Vision Model",
      "Captioning"
    ]
  },
  {
    "id": "vision-model",
    "term": "Vision Model",
    "aliases": [
      "computer vision model"
    ],
    "category": "Multimodal",
    "short": "AI that understands the content of images",
    "definition": "A vision model is an AI system that looks at images and makes sense of them — recognizing objects, reading scenes, or spotting patterns. Unlike an image generator that creates pictures, a vision model's job is to understand pictures that already exist. For example, it might tell you a photo contains a dog, two people, and a beach.",
    "seeAlso": [
      "Vision-Language Model (VLM)",
      "Captioning",
      "OCR"
    ]
  },
  {
    "id": "vocabulary",
    "term": "Vocabulary",
    "aliases": [],
    "category": "Language Models",
    "short": "The fixed set of tokens a model knows",
    "definition": "A model's vocabulary is the fixed list of all the tokens it recognizes, meaning every word-piece it can read or produce. Any text a user types is broken down into these known pieces, and the model's output is assembled from them as well. The vocabulary is decided before training and typically ranges from tens of thousands to well over a hundred thousand tokens.",
    "seeAlso": [
      "Token",
      "Tokenization",
      "Embedding"
    ]
  },
  {
    "id": "voice-cloning",
    "term": "Voice Cloning",
    "aliases": [
      "voice synthesis"
    ],
    "category": "Multimodal",
    "short": "Recreating a specific person's voice from audio samples",
    "definition": "Voice cloning is a text-to-speech technique that copies the sound of a particular person's voice so an AI can speak new sentences in that voice. It usually learns the person's tone and style from a sample recording. Because it can imitate real people, it raises consent and misuse concerns, so getting permission and using it responsibly matters.",
    "seeAlso": [
      "Text-to-Speech (TTS)",
      "Audio Model"
    ]
  },
  {
    "id": "vram",
    "term": "VRAM",
    "aliases": [
      "video RAM",
      "GPU memory"
    ],
    "category": "Running AI Locally",
    "short": "Memory on your graphics card that holds the model while it runs",
    "definition": "VRAM is the dedicated memory built into a graphics card (GPU). To run an AI model quickly, the model generally needs to fit inside VRAM, so how much you have is often the single biggest factor in what you can run locally. If a model is too big for your VRAM, it either slows down a lot (spilling over into ordinary system memory) or won't load at all — which is why people reach for smaller or more compressed models.",
    "seeAlso": [
      "System Requirements",
      "Model Quantization level (Q4)",
      "Context Length",
      "Parameters (7B, 13B, 70B)"
    ]
  },
  {
    "id": "watermarking",
    "term": "Watermarking",
    "aliases": [
      "digital watermarking"
    ],
    "category": "Safety & Ethics",
    "short": "Hidden signals that mark content as AI-generated",
    "definition": "Watermarking is the practice of embedding a hidden signal into AI-generated content — text, images, audio, or video — that is meant to be hard to remove, so the content can later be identified as machine-made. The mark is usually invisible to a casual viewer but detectable by software built to look for it. It is one proposed defense against deepfakes and misinformation, though current methods are not foolproof and can sometimes be stripped out or evaded.",
    "seeAlso": [
      "Deepfake",
      "Transparency",
      "Responsible AI"
    ]
  },
  {
    "id": "webgpu",
    "term": "WebGPU",
    "aliases": [],
    "category": "Running AI Locally",
    "short": "A web standard that lets AI run inside your browser using the GPU",
    "definition": "WebGPU is a modern web technology that lets websites tap into your computer's graphics card (GPU) for heavy calculations. For local AI, it means a model can run right inside your web browser with no installation, while still using your hardware for speed. It is what powers 'try it in your browser' AI demos that keep your data on your own machine.",
    "seeAlso": [
      "Local Inference",
      "On-device",
      "VRAM",
      "Offline"
    ]
  },
  {
    "id": "weights",
    "term": "Weights",
    "aliases": [
      "parameters",
      "model weights"
    ],
    "category": "Training & Fine-Tuning",
    "short": "The adjustable numbers that store what a model has learned",
    "definition": "Weights are the many adjustable numbers inside a model that determine how it turns an input into an output. Training is the process of slowly tuning these numbers until the model behaves well, and together they hold everything the model effectively 'knows.' When people share or download a model, they are essentially sharing its weights.",
    "seeAlso": [
      "Backpropagation",
      "Gradient Descent",
      "Quantization",
      "Fine-tuning"
    ]
  },
  {
    "id": "zero-shot",
    "term": "Zero-shot",
    "aliases": [
      "zero-shot prompting"
    ],
    "category": "Prompting",
    "short": "Asking the AI to do a task with no examples given",
    "definition": "Zero-shot means you ask the AI to do something without showing it any examples first — you just describe the task and let it respond, such as \"Translate this sentence into French\" with no sample translations provided. It works because the model already absorbed patterns from huge amounts of text during training, so it can often handle a new task cold. It is the simplest and most common way people prompt.",
    "seeAlso": [
      "Few-shot",
      "One-shot Prompting",
      "In-context Learning"
    ]
  }
];
