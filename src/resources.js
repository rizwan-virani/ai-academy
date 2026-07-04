/* ============================================================================
   resources.js — data for the Resource Hub.
     CERTIFICATIONS → the certification explorer (filterable, one card per cert)
     SETUP_STEPS    → code-free local-lab setup guide
     OSS_TOOLS      → free open-source software directory
     MEDIA          → curated media desk
   CERTIFICATIONS is compiled from source-verified research (assemble-certs.mjs);
   each card links to the official page — do not hand-edit the array, regenerate.
   ============================================================================ */

export const CERT_CATEGORIES = ["Foundational","Engineering","Data","Security","Governance","Business"];

export const CERTIFICATIONS = [
  {
    "id": "amazon-web-services-aws-aws-certified-ai-pract",
    "name": "AWS Certified AI Practitioner",
    "vendor": "Amazon Web Services (AWS)",
    "code": "AIF-C01",
    "level": "Foundational",
    "category": "Foundational",
    "cost": "≈ $100",
    "prereqs": "None. AWS suggests up to 6 months of exposure to AI/ML technologies on AWS but no hands-on build experience is required.",
    "audience": "For non-technical and semi-technical professionals (business analysts, product/project managers, sales, IT support, marketers) who work alongside AI/ML solutions and need to understand AI, ML, and generative AI concepts and use cases.",
    "focus": [
      "Fundamentals of AI, ML & generative AI",
      "Prompt engineering basics",
      "Responsible & secure AI",
      "AWS AI/ML services (e.g., Bedrock, SageMaker)"
    ],
    "url": "https://aws.amazon.com/certification/certified-ai-practitioner/",
    "note": "Foundational GenAI-era credential; 90 min, 65 questions, valid 3 years."
  },
  {
    "id": "comptia-comptia-ai-essentials",
    "name": "CompTIA AI Essentials",
    "vendor": "CompTIA",
    "code": "",
    "level": "Foundational",
    "category": "Foundational",
    "cost": "≈ $129 (12-month license)",
    "prereqs": "None",
    "audience": "Non-technical professionals and beginners who want to use AI assistants like ChatGPT, Copilot, and Gemini responsibly and effectively in everyday work.",
    "focus": [
      "Generative AI & LLM basics",
      "Effective prompting",
      "Responsible/safe data use",
      "Workplace AI use cases"
    ],
    "url": "https://www.comptia.org/en-us/certifications/ai-essentials/",
    "note": "Self-paced eLearning course (~2-3 hrs), not a proctored exam; issues a CompTIA CompCert competency certificate, not a full certification."
  },
  {
    "id": "deeplearning-ai-via-coursera-ai-for-everyone",
    "name": "AI For Everyone",
    "vendor": "DeepLearning.AI (via Coursera)",
    "code": "",
    "level": "Foundational",
    "category": "Foundational",
    "cost": "≈ $49 (Coursera certificate; free to audit; financial aid available)",
    "prereqs": "None",
    "audience": "Non-technical professionals, managers, and executives who want to understand AI terminology and how to apply AI in an organization without any coding.",
    "focus": [
      "AI/ML terminology",
      "How AI projects work",
      "Applying AI in a company",
      "Societal impact of AI"
    ],
    "url": "https://www.deeplearning.ai/courses/ai-for-everyone",
    "note": "Self-paced online course/certificate (not a proctored professional exam); created by Andrew Ng."
  },
  {
    "id": "ec-council-artificial-intelligence-essentials",
    "name": "Artificial Intelligence Essentials",
    "vendor": "EC-Council",
    "code": "112-59",
    "level": "Foundational",
    "category": "Foundational",
    "cost": "≈ $199",
    "prereqs": "None",
    "audience": "Non-technical professionals, students, managers, and decision-makers who want baseline AI literacy and responsible-use skills for working alongside AI tools.",
    "focus": [
      "AI fundamentals & building blocks",
      "Everyday/workplace AI tools",
      "Prompt crafting",
      "AI ethics & responsible AI"
    ],
    "url": "https://www.eccouncil.org/ai-courses/artificial-intelligence-essentials-aie/",
    "note": "Newly launched (Feb 2026) as the foundational tier of EC-Council's Enterprise AI Credential Suite; non-technical, 75-question / 2-hour exam, self-paced with 20+ labs."
  },
  {
    "id": "google-grow-with-google-coursera-google-ai-ess",
    "name": "Google AI Essentials",
    "vendor": "Google (Grow with Google / Coursera)",
    "code": "",
    "level": "Foundational",
    "category": "Foundational",
    "cost": "≈ $49 (Coursera, per month; 7-day free trial, most finish within one month)",
    "prereqs": "None",
    "audience": "For anyone in any role who wants basic AI literacy and practical everyday AI skills, with zero technical experience required.",
    "focus": [
      "Intro to AI",
      "AI productivity tools",
      "Prompting",
      "Responsible AI"
    ],
    "url": "https://grow.google/ai-essentials/",
    "note": "Self-paced Coursera certificate of completion (not a proctored certification); under 5-10 hours; financial aid available."
  },
  {
    "id": "ibm-skillsbuild-artificial-intelligence-fundam",
    "name": "Artificial Intelligence Fundamentals",
    "vendor": "IBM SkillsBuild",
    "code": "",
    "level": "Foundational",
    "category": "Foundational",
    "cost": "Free",
    "prereqs": "None (free IBM SkillsBuild registration; open to adult learners 18+ plus high-school and college students)",
    "audience": "For beginners and non-technical learners who want a conceptual grounding in AI concepts, ethics, and applications, earning a shareable Credly digital badge.",
    "focus": [
      "AI concepts (ML, deep learning, NLP, computer vision)",
      "Neural networks & chatbots",
      "AI ethics",
      "IBM Watson Studio"
    ],
    "url": "https://www.credly.com/org/ibm-skillsbuild/badge/artificial-intelligence-fundamentals",
    "note": "Free self-paced learning badge (not a proctored exam); ~10+ hours of prescribed courses with graded quizzes, a final assessment, and practice simulations; issued as a Credly digital badge."
  },
  {
    "id": "isaca-artificial-intelligence-fundamentals-cer",
    "name": "Artificial Intelligence Fundamentals Certificate",
    "vendor": "ISACA",
    "code": "",
    "level": "Foundational",
    "category": "Foundational",
    "cost": "≈ $120 (member) / $144 (non-member)",
    "prereqs": "None",
    "audience": "For students, recent graduates, career-changers, and non-technical professionals seeking a foundational understanding of AI concepts, uses, and risks.",
    "focus": [
      "AI concepts and principles",
      "AI implementations, software and algorithms",
      "AI risks and ethics"
    ],
    "url": "https://www.isaca.org/credentialing/artificial-intelligence-fundamentals-certificate",
    "note": "Self-paced certificate (not a full certification); online course plus a 2-hour remotely proctored exam (65% to pass, 50% AI Concepts / 50% AI Implementations), earns 5 CPE."
  },
  {
    "id": "microsoft-microsoft-365-certified-copilot-and-",
    "name": "Microsoft 365 Certified: Copilot and Agent Administration Fundamentals",
    "vendor": "Microsoft",
    "code": "AB-900",
    "level": "Foundational",
    "category": "Foundational",
    "cost": "≈ $99 (region-dependent)",
    "prereqs": "None (Microsoft 365 admin-center familiarity helps)",
    "audience": "Administrators and IT-adjacent professionals who support, secure, and manage a Microsoft 365 environment with Copilot and agents.",
    "focus": [
      "Core Microsoft 365 features",
      "Data protection & governance for Copilot",
      "Administering Copilot & agents",
      "Security, identity & access"
    ],
    "url": "https://learn.microsoft.com/en-us/credentials/certifications/copilot-and-agent-administration-fundamentals/",
    "note": "Fundamentals-level admin credential; 45-minute proctored exam."
  },
  {
    "id": "microsoft-microsoft-certified-azure-ai-fundame",
    "name": "Microsoft Certified: Azure AI Fundamentals",
    "vendor": "Microsoft",
    "code": "AI-901",
    "level": "Foundational",
    "category": "Foundational",
    "cost": "≈ $99",
    "prereqs": "None",
    "audience": "For beginners and non-specialists who want to demonstrate foundational understanding of AI, machine learning, computer vision, NLP, and generative AI concepts on Azure.",
    "focus": [
      "AI workloads & responsible AI",
      "Machine learning on Azure",
      "Computer vision & NLP",
      "Generative AI on Microsoft Foundry"
    ],
    "url": "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/",
    "note": "Current entry-level AI cert. The certification is NOT retired, but its exam changed: exam AI-900 retired June 30, 2026 and is replaced by exam AI-901 (updated April 15, 2026). Fundamentals credentials do not expire."
  },
  {
    "id": "oracle-oracle-cloud-infrastructure-2025-certif",
    "name": "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    "vendor": "Oracle",
    "code": "1Z0-1122-25",
    "level": "Foundational",
    "category": "Foundational",
    "cost": "Free (Oracle offers this exam at no cost)",
    "prereqs": "None",
    "audience": "For beginners, IT professionals, and non-technical learners who want an entry-level, vendor-recognized grounding in AI/ML concepts and Oracle's OCI AI services.",
    "focus": [
      "AI/ML/deep learning basics",
      "Generative AI & LLMs",
      "OCI AI services (Vision, Speech, Language, Document Understanding)",
      "OCI Generative AI & Oracle 23ai"
    ],
    "url": "https://education.oracle.com/oracle-cloud-infrastructure-2025-certified-ai-foundations-associate/trackp_OCI25AICFA",
    "note": "Unproctored foundational exam; 40 MCQs / 60 min / 65% pass, valid 2 years. Free to take. Oracle's official page flags this 2025 edition (1Z0-1122-25) to retire May 29, 2026, when a refreshed edition is expected to supersede it."
  },
  {
    "id": "amazon-web-services-aws-aws-certified-machine-",
    "name": "AWS Certified Machine Learning Engineer - Associate",
    "vendor": "Amazon Web Services (AWS)",
    "code": "MLA-C01",
    "level": "Associate",
    "category": "Engineering",
    "cost": "≈ $150",
    "prereqs": "None required. AWS recommends ~1 year of experience with Amazon SageMaker and ML engineering AWS services, plus 1 year of hands-on AWS experience.",
    "audience": "For ML engineers, MLOps engineers, data engineers, and data scientists who build, deploy, operationalize, and maintain ML pipelines and models on AWS; this is the active successor to the retiring ML - Specialty.",
    "focus": [
      "Data preparation for ML",
      "ML model development & training",
      "Deployment & orchestration (SageMaker)",
      "ML solution monitoring, security & MLOps"
    ],
    "url": "https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/",
    "note": "Successor to the retiring MLS-C01; 130 min, 65 questions, valid 3 years."
  },
  {
    "id": "databricks-databricks-certified-generative-ai-",
    "name": "Databricks Certified Generative AI Engineer Associate",
    "vendor": "Databricks",
    "code": "",
    "level": "Associate",
    "category": "Engineering",
    "cost": "≈ $200",
    "prereqs": "None required; ~6+ months hands-on generative AI / LLM experience on Databricks recommended",
    "audience": "For developers and ML engineers who design, build, and deploy LLM-powered generative AI applications (RAG, agents) on Databricks.",
    "focus": [
      "LLM application design & RAG",
      "Data preparation for GenAI",
      "App development & deployment",
      "Governance, evaluation & monitoring"
    ],
    "url": "https://www.databricks.com/learn/certification/genai-engineer-associate",
    "note": ""
  },
  {
    "id": "ibm-ibm-certified-watsonx-generative-ai-engine",
    "name": "IBM Certified watsonx Generative AI Engineer - Associate",
    "vendor": "IBM",
    "code": "C1000-185",
    "level": "Associate",
    "category": "Engineering",
    "cost": "≈ $200",
    "prereqs": "None required; 6-12 months hands-on watsonx.ai experience recommended",
    "audience": "For AI engineers and developers who build, customize, deploy, and govern generative AI and foundation-model solutions on the IBM watsonx platform.",
    "focus": [
      "Foundation models & LLMs",
      "Prompt engineering",
      "watsonx.ai, watsonx.data & RAG",
      "AI governance"
    ],
    "url": "https://www.ibm.com/training/certification/ibm-certified-watsonx-generative-ai-engineer-associate-C9007000",
    "note": "Proctored Pearson VUE exam (revised for 2025); official IBM page confirms the name, and the C1000-185 code plus ~$200 fee are corroborated by multiple third-party sources (fee not shown on the IBM page itself)."
  },
  {
    "id": "microsoft-microsoft-certified-ai-agent-builder",
    "name": "Microsoft Certified: AI Agent Builder Associate",
    "vendor": "Microsoft",
    "code": "AB-620",
    "level": "Associate",
    "category": "Engineering",
    "cost": "≈ $165",
    "prereqs": "Copilot Studio experience; Power Platform / Dataverse familiarity",
    "audience": "Developers and advanced builders who design, extend, and integrate custom enterprise agents in Microsoft Copilot Studio.",
    "focus": [
      "Building custom agents in Copilot Studio",
      "Knowledge, topics & triggers",
      "Integrations (APIs, RAG, connectors)",
      "Deploying enterprise agents"
    ],
    "url": "https://learn.microsoft.com/en-us/credentials/certifications/ai-agent-builder-associate/",
    "note": "Developer / agent-builder track (low-code)."
  },
  {
    "id": "microsoft-microsoft-certified-azure-ai-apps-an",
    "name": "Microsoft Certified: Azure AI Apps and Agents Developer Associate",
    "vendor": "Microsoft",
    "code": "AI-103",
    "level": "Associate",
    "category": "Engineering",
    "cost": "≈ $99 (beta) / ≈ $165 (at general availability)",
    "prereqs": "None required; recommends Python development experience plus familiarity with generative AI and Azure services.",
    "audience": "For AI engineers/developers who build, manage, and deploy generative-AI apps and AI agents on Azure using Microsoft Foundry.",
    "focus": [
      "Generative AI & agentic solutions",
      "Microsoft Foundry",
      "Computer vision & text analysis",
      "Information extraction / RAG"
    ],
    "url": "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-apps-and-agents-developer-associate/",
    "note": "Current successor to the retired AI-102. Exam AI-103 ('Developing AI Apps and Agents on Azure'); the certification page is live and schedulable via Pearson VUE (120 min), but the exam is still in beta with no confirmed general-availability date, so the standard $165 price and GA timing are not yet finalized."
  },
  {
    "id": "nvidia-nvidia-certified-associate-ai-infrastru",
    "name": "NVIDIA-Certified Associate: AI Infrastructure and Operations",
    "vendor": "NVIDIA",
    "code": "NCA-AIIO",
    "level": "Associate",
    "category": "Engineering",
    "cost": "≈ $125",
    "prereqs": "None",
    "audience": "Professionals who deploy and operate the computing infrastructure that AI runs on.",
    "focus": [
      "AI compute infrastructure",
      "GPUs & data-center operations",
      "AI workload deployment",
      "Monitoring & operations"
    ],
    "url": "https://www.nvidia.com/en-us/learn/certification/ai-infrastructure-operations-associate/",
    "note": ""
  },
  {
    "id": "nvidia-nvidia-certified-associate-generative-a",
    "name": "NVIDIA-Certified Associate: Generative AI and LLMs",
    "vendor": "NVIDIA",
    "code": "NCA-GENL",
    "level": "Associate",
    "category": "Engineering",
    "cost": "≈ $125",
    "prereqs": "None",
    "audience": "Developers building applications with generative AI and large language models using NVIDIA's tools.",
    "focus": [
      "Generative AI & LLM fundamentals",
      "Building & integrating AI apps",
      "Prompt & model workflows",
      "NVIDIA AI software stack"
    ],
    "url": "https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-associate/",
    "note": ""
  },
  {
    "id": "google-cloud-professional-machine-learning-eng",
    "name": "Professional Machine Learning Engineer",
    "vendor": "Google Cloud",
    "code": "",
    "level": "Professional",
    "category": "Engineering",
    "cost": "≈ $200",
    "prereqs": "None required; 3+ years industry experience incl. 1+ year on Google Cloud recommended",
    "audience": "For ML/AI engineers who design, build, productionize, and operate machine learning and generative AI solutions on Google Cloud (Vertex AI, MLOps).",
    "focus": [
      "ML/AI solution architecture",
      "Model training and serving",
      "MLOps and pipelines",
      "Generative AI on Vertex AI"
    ],
    "url": "https://cloud.google.com/learn/certification/machine-learning-engineer",
    "note": "Proctored exam (50-60 MCQ/multi-select, 2 hrs), valid 2 years; refreshed in 2026 to add more generative-AI content."
  },
  {
    "id": "nvidia-nvidia-certified-professional-agentic-a",
    "name": "NVIDIA-Certified Professional: Agentic AI (NCP-AAI)",
    "vendor": "NVIDIA",
    "code": "NCP-AAI",
    "level": "Professional",
    "category": "Engineering",
    "cost": "≈ $200",
    "prereqs": "1–2 years of AI/ML experience with hands-on agentic-AI production work; expertise in agent development and multi-agent frameworks recommended.",
    "audience": "ML engineers, solutions architects, and AI developers who design and deploy production agentic-AI systems.",
    "focus": [
      "Agent architecture & design",
      "Agent development & knowledge integration",
      "Deployment & operations",
      "AI ethics & safety"
    ],
    "url": "https://www.nvidia.com/en-us/learn/certification/agentic-ai-professional/",
    "note": "Newly launched (2026) professional AI cert; NVIDIA's cert index lists it live with $200/2-hr detail, though the individual page still showed transitional 'Coming soon' — verify registration on Certiverse before relying on it."
  },
  {
    "id": "nvidia-nvidia-certified-professional-generativ",
    "name": "NVIDIA-Certified Professional: Generative AI LLMs (NCP-GENL)",
    "vendor": "NVIDIA",
    "code": "NCP-GENL",
    "level": "Professional",
    "category": "Engineering",
    "cost": "≈ $200",
    "prereqs": "2–3 years of practical AI/ML experience with LLMs; transformer architectures, prompt engineering, distributed parallelism, and parameter-efficient fine-tuning.",
    "audience": "ML engineers, data scientists, and GenAI specialists who train, fine-tune, and deploy large language models at scale.",
    "focus": [
      "LLM architecture & fine-tuning",
      "Model optimization",
      "GPU acceleration",
      "Deployment & production monitoring"
    ],
    "url": "https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-professional/",
    "note": "Newly launched (2026) professional AI cert; NVIDIA's cert index lists it live with $200/2-hr detail, though the individual page still showed transitional 'Coming soon' — verify registration on Certiverse before relying on it. A separate associate-level NCA-GENL (≈ $125) also exists."
  },
  {
    "id": "comptia-comptia-data-v2",
    "name": "CompTIA Data+ (V2)",
    "vendor": "CompTIA",
    "code": "DA0-002",
    "level": "Associate",
    "category": "Data",
    "cost": "≈ $255",
    "prereqs": "None formal; 18-24 months as a data analyst recommended",
    "audience": "Early-career data analysts proving they can turn raw data into insights through analysis, visualization, and governance.",
    "focus": [
      "Data concepts & environments",
      "Data acquisition & prep",
      "Data analysis & statistics",
      "Visualization, reporting & governance"
    ],
    "url": "https://www.comptia.org/en-us/certifications/data/v2/",
    "note": "Current version DA0-002 launched Oct 14, 2025; supersedes the earlier DA0-001, which is being retired."
  },
  {
    "id": "databricks-databricks-certified-machine-learni",
    "name": "Databricks Certified Machine Learning Associate",
    "vendor": "Databricks",
    "code": "",
    "level": "Associate",
    "category": "Data",
    "cost": "≈ $200",
    "prereqs": "None required; ~6+ months hands-on Databricks ML experience recommended",
    "audience": "For data scientists and ML practitioners who use Databricks to build and deploy basic machine learning models and want to validate foundational Databricks ML skills.",
    "focus": [
      "Databricks ML & AutoML",
      "ML workflows & feature engineering",
      "Model development, tuning & evaluation",
      "Model deployment"
    ],
    "url": "https://www.databricks.com/learn/certification/machine-learning-associate",
    "note": ""
  },
  {
    "id": "comptia-comptia-dataai-formerly-datax",
    "name": "CompTIA DataAI (formerly DataX)",
    "vendor": "CompTIA",
    "code": "DY0-001",
    "level": "Expert",
    "category": "Data",
    "cost": "≈ $526 (US list price)",
    "prereqs": "None formal; 5+ years in data science recommended",
    "audience": "Highly experienced data scientists validating expert-level competency in advanced modeling, machine learning, MLOps, and applied data/AI science.",
    "focus": [
      "Mathematics & statistics",
      "Modeling & analysis",
      "Machine learning",
      "Data science operations/MLOps"
    ],
    "url": "https://www.comptia.org/en-us/certifications/dataai/",
    "note": "Same DY0-001 exam originally launched as DataX (July 25, 2024); officially rebranded to DataAI on Jan 21, 2026 with greater AI/ML/MLOps emphasis. Expert tier, pass/fail only. Estimated retirement ~2027."
  },
  {
    "id": "isc2-building-ai-strategy-certificate",
    "name": "Building AI Strategy Certificate",
    "vendor": "ISC2",
    "code": "",
    "level": "Foundational",
    "category": "Security",
    "cost": "Paid certificate (member discounts)",
    "prereqs": "None",
    "audience": "Cybersecurity professionals exploring where AI and cybersecurity meet.",
    "focus": [
      "AI/ML security foundations",
      "AI threats & mitigation",
      "Secure-by-design AI",
      "AI governance & regulations"
    ],
    "url": "https://www.isc2.org/professional-development/certificates/build-ai-strategy",
    "note": "Self-paced certificate (six on-demand courses, 16 CPE) — not a proctored exam."
  },
  {
    "id": "ec-council-certified-offensive-ai-security-pro",
    "name": "Certified Offensive AI Security Professional",
    "vendor": "EC-Council",
    "code": "",
    "level": "Professional",
    "category": "Security",
    "cost": "≈ $2,199 (training + labs + exam bundle; standalone exam price not separately published)",
    "prereqs": "None formally required; offensive-security/pentest experience recommended",
    "audience": "Penetration testers, red teamers, and security engineers who test AI/LLM systems for vulnerabilities and harden AI infrastructure.",
    "focus": [
      "AI red teaming & pentesting",
      "Prompt injection & LLM exploitation",
      "OWASP LLM Top 10 & MITRE ATLAS",
      "Securing agentic AI & AI pipelines"
    ],
    "url": "https://www.eccouncil.org/ai-courses/certified-offensive-ai-security-professional-coasp/",
    "note": "Newly launched (Feb 2026); maps to the 'Defend' pillar of the ADG framework. Exam is ~6 hours, 70 items (65 MCQ + 5 hands-on). The ≈$2,199 is a partner training bundle; exam-only price and exam code not officially confirmed."
  },
  {
    "id": "comptia-comptia-secai",
    "name": "CompTIA SecAI+",
    "vendor": "CompTIA",
    "code": "CY0-001",
    "level": "Specialty",
    "category": "Security",
    "cost": "≈ $359",
    "prereqs": "Cybersecurity background recommended",
    "audience": "Cybersecurity professionals integrating AI into security operations, governance, and compliance.",
    "focus": [
      "AI concepts for cybersecurity",
      "Securing AI systems",
      "AI-assisted security operations",
      "AI governance, risk & compliance"
    ],
    "url": "https://www.comptia.org/en-us/certifications/secai/",
    "note": "Newly launched (Feb 2026) — the first vendor-neutral certification at the AI–cybersecurity intersection."
  },
  {
    "id": "isaca-advanced-in-ai-security-management-aaism",
    "name": "Advanced in AI Security Management (AAISM)",
    "vendor": "ISACA",
    "code": "",
    "level": "Expert",
    "category": "Security",
    "cost": "≈ $459 (member) / $599 (non-member) + $50 application fee",
    "prereqs": "Must hold an active CISM or CISSP certification.",
    "audience": "For security managers and CISM/CISSP holders who must govern and secure enterprise AI systems and manage AI-specific security risk.",
    "focus": [
      "AI Governance and Program Management",
      "AI Risk Management",
      "AI Technologies and Controls"
    ],
    "url": "https://www.isaca.org/credentialing/aaism",
    "note": "Newly launched (2025); billed by ISACA as the first AI-centric security management certification. Requires an active CISM or CISSP."
  },
  {
    "id": "ec-council-certified-responsible-ai-governance",
    "name": "Certified Responsible AI Governance & Ethics",
    "vendor": "EC-Council",
    "code": "612-51",
    "level": "Professional",
    "category": "Governance",
    "cost": "≈ $450 (exam voucher; not published on official site)",
    "prereqs": "None formally listed",
    "audience": "GRC analysts, compliance officers, risk managers, and policy professionals who embed AI ethics, governance, and regulatory compliance across the AI lifecycle.",
    "focus": [
      "AI governance frameworks & operating models",
      "NIST AI RMF & ISO/IEC 42001 compliance",
      "AI & third-party/supply-chain risk",
      "AI assurance, auditing & privacy"
    ],
    "url": "https://www.eccouncil.org/ai-courses/certified-responsible-ai-governance-ethics-crage/",
    "note": "Newly launched (Feb 2026); maps to the 'Govern' pillar of the ADG framework. Exam is 100 questions / 3 hours (code 612-51). Official pricing not published; ≈$450 per secondary sources (draft's extra $100 application fee is unconfirmed)."
  },
  {
    "id": "iapp-artificial-intelligence-governance-profes",
    "name": "Artificial Intelligence Governance Professional (AIGP)",
    "vendor": "IAPP",
    "code": "AIGP",
    "level": "Professional",
    "category": "Governance",
    "cost": "≈ $649 (member) / $799 (non-member)",
    "prereqs": "None",
    "audience": "For AI governance, privacy, risk, legal, and compliance professionals across any industry who need to understand and execute responsible AI governance.",
    "focus": [
      "AI foundations & responsible AI principles",
      "AI laws & governance frameworks (e.g. EU AI Act)",
      "AI lifecycle governance & risk management",
      "Emerging AI governance concerns"
    ],
    "url": "https://iapp.org/certify/aigp/",
    "note": "First major AI governance certification; maintained via 20 CPE credits every 2 years plus a certification maintenance fee (~$250/2-yr for non-members, waived with IAPP membership)."
  },
  {
    "id": "isaca-advanced-in-ai-audit-aaia",
    "name": "Advanced in AI Audit (AAIA)",
    "vendor": "ISACA",
    "code": "",
    "level": "Expert",
    "category": "Governance",
    "cost": "≈ $459 (member) / $599 (non-member) + $50 application fee",
    "prereqs": "Must hold an active CISA, or another qualifying designation (CIA, US/Canadian/Australian/Japanese CPA, ACCA/FCCA, ICAEW ACA/FCA, CA ANZ, HKICPA, etc.) in an IT audit/advisory role.",
    "audience": "For experienced IT auditors and audit/risk professionals who need to assess, govern, and audit AI systems.",
    "focus": [
      "AI Governance and Risk",
      "AI Operations",
      "AI Auditing Tools and Techniques"
    ],
    "url": "https://www.isaca.org/credentialing/aaia",
    "note": "Launched 2025; ISACA's advanced AI-audit credential. Requires a prerequisite designation such as CISA. 90-question exam, 200-800 scaled scoring (pass 450)."
  },
  {
    "id": "isaca-advanced-in-ai-risk-aair",
    "name": "Advanced in AI Risk (AAIR)",
    "vendor": "ISACA",
    "code": "",
    "level": "Expert",
    "category": "Governance",
    "cost": "≈ $459 (member) / $599 (non-member) + $50 application fee",
    "prereqs": "Must hold an active ISACA CISA, CISM, CRISC, CGEIT, or CDPSE, or another recognized designation (CISSP, CIA, CPA, CGMA, ACCA, PMI-RMP, CA ANZ, etc.).",
    "audience": "For IT risk professionals who must identify, assess, and manage AI-related risk and advise management on AI risk strategy.",
    "focus": [
      "AI Risk Governance and Framework Integration",
      "AI Life Cycle Risk Management",
      "AI Risk Program Management"
    ],
    "url": "https://www.isaca.org/credentialing/aair",
    "note": "Newly launched (2025); AI-focused IT-risk credential. Requires a prerequisite risk/audit designation such as CRISC or CISA."
  },
  {
    "id": "google-cloud-generative-ai-leader",
    "name": "Generative AI Leader",
    "vendor": "Google Cloud",
    "code": "",
    "level": "Foundational",
    "category": "Business",
    "cost": "≈ $99",
    "prereqs": "None",
    "audience": "For business leaders, managers, and non-technical professionals in any role who want to understand how generative AI can transform their organization and lead gen-AI initiatives.",
    "focus": [
      "Fundamentals of gen AI",
      "Google Cloud gen AI offerings",
      "Improving model output",
      "Gen AI business strategy"
    ],
    "url": "https://cloud.google.com/learn/certification/generative-ai-leader",
    "note": "Proctored exam (50-60 MCQ, 90 min), valid 3 years; no prerequisites."
  },
  {
    "id": "microsoft-microsoft-applied-skills-generate-re",
    "name": "Microsoft Applied Skills: Generate Reports with AI Research Agents",
    "vendor": "Microsoft",
    "code": "APL-6501",
    "level": "Foundational",
    "category": "Business",
    "cost": "Free",
    "prereqs": "Familiarity with prompts in Microsoft Copilot",
    "audience": "Business users proving they can produce data-driven business reports using the Researcher agent in Microsoft Copilot.",
    "focus": [
      "Scoping & sourcing a report",
      "Refining with the Researcher agent",
      "Finalizing a business report"
    ],
    "url": "https://learn.microsoft.com/en-us/credentials/applied-skills/generate-reports-with-ai-research-agents/",
    "note": "Free, hands-on lab credential (Applied Skills) — not a proctored exam."
  },
  {
    "id": "microsoft-microsoft-applied-skills-streamline-",
    "name": "Microsoft Applied Skills: Streamline Business Workflows with AI Chat",
    "vendor": "Microsoft",
    "code": "APL-6500",
    "level": "Foundational",
    "category": "Business",
    "cost": "Free",
    "prereqs": "Comfort with Microsoft 365 Copilot and Office apps",
    "audience": "Business users proving hands-on skill at streamlining everyday work with Microsoft 365 Copilot across Word, PowerPoint, Outlook, and Excel.",
    "focus": [
      "Copilot for web productivity",
      "Copilot in Word & PowerPoint",
      "Copilot in Outlook",
      "Copilot in Excel"
    ],
    "url": "https://learn.microsoft.com/en-us/credentials/applied-skills/streamline-business-workflows-with-ai-chat/",
    "note": "Free, hands-on lab credential (Applied Skills) — not a proctored exam."
  },
  {
    "id": "microsoft-microsoft-certified-ai-business-prof",
    "name": "Microsoft Certified: AI Business Professional",
    "vendor": "Microsoft",
    "code": "AB-730",
    "level": "Foundational",
    "category": "Business",
    "cost": "≈ $99 (region-dependent)",
    "prereqs": "None (basic Microsoft 365 familiarity helps)",
    "audience": "Business users and information workers who use generative-AI tools like Microsoft 365 Copilot to work smarter — no coding involved.",
    "focus": [
      "Generative AI fundamentals",
      "Writing effective prompts",
      "Drafting & analyzing business content with Copilot",
      "Microsoft 365 Copilot, Researcher & Analyst"
    ],
    "url": "https://learn.microsoft.com/en-us/credentials/certifications/ai-business-professional/",
    "note": "No-code, beginner-level; 45-minute proctored exam."
  },
  {
    "id": "microsoft-microsoft-certified-ai-transformatio",
    "name": "Microsoft Certified: AI Transformation Leader",
    "vendor": "Microsoft",
    "code": "AB-731",
    "level": "Foundational",
    "category": "Business",
    "cost": "≈ $99 (region-dependent)",
    "prereqs": "None (change/adoption leadership experience helps)",
    "audience": "Business decision-makers and leaders guiding AI adoption, strategy, and responsible use across an organization — no coding involved.",
    "focus": [
      "Business value of generative AI",
      "Spotting AI opportunities",
      "AI adoption & implementation strategy",
      "Responsible AI & aligning AI to goals"
    ],
    "url": "https://learn.microsoft.com/en-us/credentials/certifications/ai-transformation-leader/",
    "note": "No-code, leadership-focused; 45-minute proctored exam."
  },
  {
    "id": "ec-council-certified-ai-program-manager",
    "name": "Certified AI Program Manager",
    "vendor": "EC-Council",
    "code": "312-41",
    "level": "Professional",
    "category": "Business",
    "cost": "≈ $450 (exam voucher; not published on official site)",
    "prereqs": "None formally listed; aimed at experienced professionals",
    "audience": "Program/project managers and business leaders who translate AI strategy into execution, aligning teams, governance, and delivery for measurable ROI.",
    "focus": [
      "AI strategy & roadmap",
      "Organizational readiness & maturity",
      "Change management & workforce enablement",
      "Measuring AI adoption/ROI"
    ],
    "url": "https://www.eccouncil.org/ai-courses/certified-ai-program-manager-caipm/",
    "note": "Newly launched (Feb 2026); maps to the 'Adopt' pillar of EC-Council's ADG framework. Exam is 100 questions / 3 hours. Official pricing not published; cost is an estimate."
  },
  {
    "id": "project-management-institute-pmi-pmi-certified",
    "name": "PMI Certified Professional in Managing AI (PMI-CPMAI)",
    "vendor": "Project Management Institute (PMI)",
    "code": "",
    "level": "Professional",
    "category": "Business",
    "cost": "≈ $699 (bundled with the required prep course; member savings available — exact member/non-member split not confirmed on the official page)",
    "prereqs": "No formal prerequisite; project-management background assumed. Bundle includes a ~21-hour self-paced prep course.",
    "audience": "Project managers and leaders who need to run AI/ML initiatives responsibly using a structured methodology, governance, and business alignment.",
    "focus": [
      "CPMAI methodology / lifecycle",
      "AI governance & ethics",
      "Business value of AI",
      "Managing AI projects"
    ],
    "url": "https://www.pmi.org/certifications/ai-project-management-cpmai",
    "note": "PMI's dedicated AI project-management credential (built on the CPMAI methodology); valid 3 years, renewed with PDUs. Exact pricing could not be confirmed from PMI's own page (access blocked); cost figure is from secondary sources."
  },
  {
    "id": "salesforce-salesforce-certified-agentforce-spe",
    "name": "Salesforce Certified Agentforce Specialist",
    "vendor": "Salesforce",
    "code": "AI-201",
    "level": "Specialty",
    "category": "Business",
    "cost": "≈ $200 (retake ≈ $100)",
    "prereqs": "None (Salesforce platform and Agentforce familiarity recommended)",
    "audience": "Salesforce professionals who build, configure, and optimize Agentforce AI agents on the Salesforce/CRM platform.",
    "focus": [
      "AI agents & reasoning engine",
      "Prompt Builder / prompt engineering",
      "Data Cloud grounding & retrievers",
      "Agent testing & deployment"
    ],
    "url": "https://trailhead.salesforce.com/en/credentials/agentforcespecialist",
    "note": "Current flagship Salesforce AI credential (60 scored questions, 105 min, 73% to pass); exam fee was waived through Dec 31, 2025."
  }
];

export const SETUP_STEPS = [
  {
    id: "ollama",
    lab: "lab1",
    tool: "Ollama",
    role: "The runtime engine (command-line)",
    what:
      "Ollama is the simplest way to run open-weights models on your own machine. It downloads a model file, loads it onto your CPU or GPU, and exposes it locally so tools like this lab can talk to it — all offline, with nothing leaving your computer.",
    steps: [
      "Download the Ollama installer from ollama.com and install it like any normal app.",
      "It runs quietly in the background; you'll see its icon in your system tray/menu bar.",
      "Pull a model (a one-time download) — start with a small one like Llama 3.2 or Gemma.",
      "In this lab, open Local System Config and click Detect — your pulled models appear automatically.",
    ],
    note: "To let a browser page (like this one) connect, Ollama needs one permission setting; the config panel shows the exact line to use.",
  },
  {
    id: "lmstudio",
    lab: "lab2",
    tool: "LM Studio",
    role: "The runtime engine (graphical)",
    what:
      "LM Studio is a friendly desktop app that does what Ollama does but with a full graphical interface — a model browser, a chat window, and a one-click local server. Ideal if you prefer buttons to a terminal.",
    steps: [
      "Download LM Studio from lmstudio.ai and install it.",
      "Use the built-in search to find and download an open model (it shows which fit your hardware).",
      "Chat with the model directly inside LM Studio, or start its local server tab.",
      "Point a compatible app at that local server to use the model elsewhere.",
    ],
    note: "LM Studio and Ollama are interchangeable runtime engines — pick whichever interface you prefer. Both keep everything on your machine.",
  },
  {
    id: "anythingllm",
    lab: "lab8",
    tool: "AnythingLLM",
    role: "Documents & memory (RAG)",
    what:
      "AnythingLLM sits on top of a runtime engine and adds a private knowledge base: you drop in your own documents, and it lets a local model answer questions grounded in them (retrieval-augmented generation) — a private 'chat with your files.'",
    steps: [
      "Install AnythingLLM and connect it to your Ollama or LM Studio engine.",
      "Create a workspace and upload your documents (PDFs, notes, spreadsheets).",
      "It quietly converts them into an embedding store (a searchable index of meaning).",
      "Ask questions; the model answers using your documents as its source, with citations.",
    ],
    note: "This is the local, private version of the enterprise 'AI over our own data' pattern — your files never leave your machine.",
  },
  {
    id: "webgpu",
    lab: "lab7",
    tool: "In-browser (WebGPU)",
    role: "Zero-install engine",
    what:
      "Modern browsers can run a small real model directly on your graphics card using a technology called WebGPU — no installation at all. This lab's WebLLM option uses exactly this: a one-time model download, then fully offline inference inside the tab.",
    steps: [
      "Use a recent Chrome or Edge browser on a machine with a capable GPU.",
      "In Local System Config, choose the in-browser engine and pick a small model.",
      "Wait for the one-time download (roughly 1–2 GB) from a public CDN.",
      "After that, the model runs entirely in your browser — offline and private.",
    ],
    note: "The easiest possible on-ramp: no terminal, no installer. The trade-off is that browser models are small, so they're best for the lightweight labs.",
  },
];

export const OSS_TOOLS = [
  { id: "ollama", name: "Ollama", category: "Text generation", license: "MIT", desc: "One-command local runtime for open-weights chat models. The backbone of a private AI station.", url: "https://ollama.com", lab: "lab1" },
  { id: "llamacpp", name: "llama.cpp", category: "Text generation", license: "MIT", desc: "The ultra-efficient C/C++ inference engine that runs quantized models even on modest hardware; powers many other tools.", url: "https://github.com/ggml-org/llama.cpp" },
  { id: "lmstudio", name: "LM Studio", category: "Text generation", license: "Proprietary (free)", desc: "Graphical desktop app for finding, downloading, and chatting with local models. Free to use.", url: "https://lmstudio.ai", lab: "lab2" },
  { id: "anythingllm", name: "AnythingLLM", category: "Documents / RAG", license: "MIT", desc: "Private 'chat with your documents' workspace with a built-in embedding store, on top of a local engine.", url: "https://anythingllm.com", lab: "lab8" },
  { id: "whisper", name: "Whisper (whisper.cpp)", category: "Speech-to-text", license: "MIT", desc: "OpenAI's open speech-recognition model, runnable locally for private, offline transcription in many languages.", url: "https://github.com/ggml-org/whisper.cpp", lab: "lab18" },
  { id: "docling", name: "Docling / Unstructured", category: "Document parsing", license: "Apache 2.0 / MIT", desc: "Turns messy PDFs, Word docs, and slides into clean structured text and vectors for downstream AI use.", url: "https://github.com/docling-project/docling", lab: "lab9" },
  { id: "sd", name: "Stable Diffusion (ComfyUI / AUTOMATIC1111)", category: "Image generation", license: "Open (CreativeML / MIT tooling)", desc: "Open image-diffusion models with free local interfaces for generating and editing images entirely offline.", url: "https://github.com/comfyanonymous/ComfyUI", lab: "lab17" },
  { id: "chromadb", name: "Chroma / FAISS", category: "Vector store", license: "Apache 2.0 / MIT", desc: "Open vector databases that store document embeddings so a model can retrieve relevant context — the engine behind local RAG.", url: "https://www.trychroma.com", lab: "lab10" },
];

export const MEDIA = [
  {
    "id": "md1",
    "title": "But what is a neural network? | Deep learning chapter 1",
    "creator": "3Blue1Brown",
    "type": "Video",
    "desc": "An animated, math-light walkthrough of what a neural network actually is, using the example of recognizing handwritten digits to show how neurons, layers, weights, and biases work together.",
    "url": "https://www.youtube.com/watch?v=aircAruvnKk",
    "maps": "Knowledge Base"
  },
  {
    "id": "md2",
    "title": "Transformers, the tech behind LLMs | Deep Learning Chapter 5",
    "creator": "3Blue1Brown",
    "type": "Video",
    "desc": "A visual introduction to the transformer architecture that powers GPT and other large language models, breaking down how these systems turn text into predictions.",
    "url": "https://www.youtube.com/watch?v=wjZofJX0v4M",
    "maps": "Knowledge Base"
  },
  {
    "id": "md3",
    "title": "[1hr Talk] Intro to Large Language Models",
    "creator": "Andrej Karpathy",
    "type": "Lecture",
    "desc": "A one-hour, general-audience tour of how large language models are trained and fine-tuned into assistants, plus where the technology is heading and its security risks.",
    "url": "https://www.youtube.com/watch?v=zjkBMFhNj_g",
    "maps": "Knowledge Base"
  },
  {
    "id": "md4",
    "title": "Generative AI in a Nutshell - how to survive and thrive in the age of AI",
    "creator": "Henrik Kniberg",
    "type": "Video",
    "desc": "An 18-minute whiteboard explainer that condenses a full day of AI training into a friendly overview of what generative AI is and how anyone can use it well.",
    "url": "https://www.youtube.com/watch?v=2IK3DFHRFfw",
    "maps": "Knowledge Base"
  },
  {
    "id": "md5",
    "title": "AI Risk Management Framework",
    "creator": "NIST (U.S. National Institute of Standards and Technology)",
    "type": "Official guidance",
    "desc": "The U.S. government's official, voluntary framework that helps any organization identify and manage the risks of building or using AI, organized around four functions: Govern, Map, Measure, and Manage.",
    "url": "https://www.nist.gov/itl/ai-risk-management-framework",
    "maps": "Knowledge Base"
  },
  {
    "id": "md6",
    "title": "What is AI Ethics?",
    "creator": "IBM Technology",
    "type": "Explainer",
    "desc": "A short lightboard video that explains what AI ethics means and why companies need principles around trust, fairness, and transparency to avoid biased or harmful AI outcomes.",
    "url": "https://www.youtube.com/watch?v=aGwYtUzMQUk",
    "maps": "Knowledge Base"
  },
  {
    "id": "md7",
    "title": "AI, Machine Learning, Deep Learning and Generative AI Explained",
    "creator": "IBM Technology",
    "type": "Video",
    "desc": "A clear overview of how AI, machine learning, deep learning, and generative AI relate to and build on one another.",
    "url": "https://www.youtube.com/watch?v=qYNweeDHiyU",
    "maps": "Knowledge Base"
  },
  {
    "id": "md8",
    "title": "How Large Language Models Work",
    "creator": "IBM Technology",
    "type": "Video",
    "desc": "Explains in plain terms what a large language model is, how it's trained on huge amounts of text, and how it predicts language to answer questions.",
    "url": "https://www.youtube.com/watch?v=5sLYAQS9sWQ",
    "maps": "Knowledge Base"
  },
  {
    "id": "md9",
    "title": "What are Transformers (Machine Learning Model)?",
    "creator": "IBM Technology",
    "type": "Video",
    "desc": "Introduces the transformer, the neural-network design that powers modern LLMs, and why it was such a breakthrough for understanding language.",
    "url": "https://www.youtube.com/watch?v=ZXiruGOCn9s",
    "maps": "Knowledge Base"
  },
  {
    "id": "md10",
    "title": "What are Word Embeddings?",
    "creator": "IBM Technology",
    "type": "Video",
    "desc": "Shows how words are turned into numbers that capture meaning, so an AI can tell which words and ideas are related.",
    "url": "https://www.youtube.com/watch?v=wgfSDrqYMJ4",
    "maps": "Knowledge Base"
  },
  {
    "id": "md11",
    "title": "AI Act | Shaping Europe's digital future",
    "creator": "European Commission",
    "type": "Official guidance",
    "desc": "The European Commission's official plain-language overview of the EU AI Act, explaining how it sorts AI systems into risk levels (from banned uses to minimal-risk) and what rules apply to each.",
    "url": "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai",
    "maps": "Frontier AI"
  },
  {
    "id": "md12",
    "title": "Arena Leaderboard",
    "creator": "Arena Intelligence (originally UC Berkeley LMSYS)",
    "type": "Explainer",
    "desc": "A live, crowdsourced leaderboard where people vote on anonymous head-to-head chatbot responses to rank today's top AI models, giving a real-world sense of which models perform best.",
    "url": "https://arena.ai/leaderboard",
    "maps": "Frontier AI"
  },
  {
    "id": "md13",
    "title": "What are AI Agents?",
    "creator": "IBM Technology",
    "type": "Video",
    "desc": "Explains how AI agents can plan steps and use tools on their own to complete tasks, going beyond a simple chatbot.",
    "url": "https://www.youtube.com/watch?v=F8NKVhkZZWI",
    "maps": "Frontier AI"
  },
  {
    "id": "md14",
    "title": "Prompt Engineering Guide",
    "creator": "DAIR.AI",
    "type": "Guide",
    "desc": "A free, well-organized website that teaches how to write effective prompts for AI chatbots, from the basics up to advanced techniques.",
    "url": "https://www.promptingguide.ai",
    "maps": "Prompt Engineering"
  },
  {
    "id": "md15",
    "title": "Prompt Engineering Tutorial – Master ChatGPT and LLM Responses",
    "creator": "freeCodeCamp.org (Ania Kubów)",
    "type": "Video",
    "desc": "A roughly one-hour beginner course that explains what prompt engineering is and how to phrase requests so ChatGPT and other AI tools give you better answers.",
    "url": "https://www.youtube.com/watch?v=_ZvnD73m40o",
    "maps": "Prompt Engineering"
  },
  {
    "id": "md16",
    "title": "4 Methods of Prompt Engineering",
    "creator": "IBM Technology",
    "type": "Video",
    "desc": "Walks through practical ways to word your instructions so an AI gives better, more reliable results.",
    "url": "https://www.youtube.com/watch?v=1c9iyoVIwDs",
    "maps": "Prompt Engineering"
  },
  {
    "id": "md17",
    "title": "What is Retrieval-Augmented Generation (RAG)?",
    "creator": "IBM Technology",
    "type": "Video",
    "desc": "Shows how connecting an AI model to an external, trusted knowledge source makes its answers more accurate and up to date.",
    "url": "https://www.youtube.com/watch?v=T-D1OfcDW1M",
    "maps": "Operationalizing AI"
  },
  {
    "id": "md18",
    "title": "Fine-Tuning Large Language Models with InstructLab",
    "creator": "IBM Technology",
    "type": "Video",
    "desc": "Explains fine-tuning: further training a general AI model on specialized data so it performs better for a specific job.",
    "url": "https://www.youtube.com/watch?v=pu3-PeBG0YU",
    "maps": "Operationalizing AI"
  },
  {
    "id": "md19",
    "title": "What is MLOps?",
    "creator": "IBM Technology",
    "type": "Video",
    "desc": "Introduces the practices teams use to build, deploy, and keep machine-learning models running reliably in the real world.",
    "url": "https://www.youtube.com/watch?v=OejCJL2EC3k",
    "maps": "Operationalizing AI"
  },
  {
    "id": "md20",
    "title": "Andrej Karpathy: From Vibe Coding to Agentic Engineering w/ Stephanie Zhan",
    "creator": "Sequoia Capital",
    "type": "Video",
    "desc": "A talk by Andrej Karpathy, who coined the term, explaining 'vibe coding' — building software by describing what you want to an AI in plain language — and where the practice is heading.",
    "url": "https://www.youtube.com/watch?v=96jN2OCOfLs",
    "maps": "Vibe Coding"
  },
  {
    "id": "md21",
    "title": "Ollama",
    "creator": "Ollama",
    "type": "Guide",
    "desc": "The official site and getting-started page for downloading Ollama and running open AI models privately on your own computer, no cloud account needed.",
    "url": "https://ollama.com",
    "maps": "Experimentation Station"
  },
  {
    "id": "md22",
    "title": "Learn Ollama in 15 Minutes - Run LLM Models Locally for FREE",
    "creator": "Tech With Tim",
    "type": "Video",
    "desc": "A short, beginner-friendly walkthrough that installs Ollama and shows you how to download and chat with a free local AI model in about fifteen minutes.",
    "url": "https://www.youtube.com/watch?v=UtSSMs6ObqY",
    "maps": "Experimentation Station"
  },
  {
    "id": "md23",
    "title": "What is a Vector Database?",
    "creator": "IBM Technology",
    "type": "Video",
    "desc": "Explains the database that stores meaning-based numbers and lets AI quickly find similar items — the engine behind RAG and local document search.",
    "url": "https://www.youtube.com/watch?v=t9IDoenf-lo",
    "maps": "Experimentation Station"
  },
  {
    "id": "md24",
    "title": "AI for Everyone",
    "creator": "Andrew Ng / DeepLearning.AI",
    "type": "Course",
    "desc": "A non-technical course by AI pioneer Andrew Ng that explains what AI can and cannot do and how to spot places to apply it, aimed at anyone regardless of coding ability.",
    "url": "https://www.deeplearning.ai/courses/ai-for-everyone",
    "maps": "Resource Hub"
  },
  {
    "id": "md25",
    "title": "Artificial Intelligence Fundamentals",
    "creator": "IBM SkillsBuild",
    "type": "Course",
    "desc": "A free entry-level IBM learning path that introduces core AI ideas like machine learning, natural language processing, computer vision, and AI ethics, and awards a shareable digital credential.",
    "url": "https://skillsbuild.org/college-students/course-catalog/artificial-intelligence-fundamentals",
    "maps": "Resource Hub"
  }
];
