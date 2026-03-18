export interface NavLink {
  label: string;
  sectionId: string;
}

export interface GovernancePost {
  id: number;
  title: string;
  publishDate: string;
  readTime: string;
  description: string;
  tags: string[];
  isFeatured?: boolean;
  pdfUrl: string;
}

export const siteContent = {
  brand: {
    name: "Stratified Advisory",
    logoPath: "/assets/logo.png",
    logoAlt: "Stratified Advisory logo",
  },
  navLinks: [
    { label: "Advisory", sectionId: "investment-thesis" },
    { label: "Services", sectionId: "board-service" },
    { label: "Research", sectionId: "ai-governance" },
    { label: "Team", sectionId: "team" },
    { label: "Engage", sectionId: "engagement-paths" },
  ] as NavLink[],
  hero: {
    eyebrow: "Board Advisory · AI, Cyber, Transformation",
    titleLine1: "When AI decisions are",
    titleLine2: "board decisions",
    description:
      "We help boards turn uncertainty into decision quality: mandate clarity, capital discipline, execution control.",
    primaryCta: {
      label: "Start a discussion",
      target: "engagement-paths",
    },
    secondaryCta: {
      label: "AI Governance Framework",
      target: "/framework",
    },
    engagementBullets: [
      "Mandate and decision rights",
      "Options, downside risk, and trade-offs",
      "Governance architecture and accountability",
      "Execution cadence and board checkpoints",
    ],
  },
  investmentThesis: {
    title: "Three tests for every major commitment",
    intro:
      "Can we afford it? Will it work? Can we defend it? This model keeps speed without governance drift.",
    principles: [
      {
        title: "Efficiency",
        shortDescription: "Resource discipline at scale.",
        fullDescription:
          "Cost, capability, and operating constraints quantified so decisions stay viable without overcommitting capital or talent.",
      },
      {
        title: "Effectiveness",
        shortDescription: "Outcome focus tied to mandate.",
        fullDescription:
          "Options framed against measurable outcomes, competitive position, and implementation feasibility.",
      },
      {
        title: "Responsibility",
        shortDescription: "Risk and governance from day one.",
        fullDescription:
          "Regulatory, ethical, and control requirements built into decision design to cut downside while preserving speed.",
      },
    ],
    advantageTitle: "From ambition to governed execution",
    advantageDescription:
      "Explicit board choices, clear trade-offs, commitments leadership can execute.",
  },
  boardService: {
    eyebrow: "Operating interventions",
    title: "Governance, resilience, execution",
    description:
      "Three tracks: where value is created, where risk sits, where decisions stall.",
    serviceGroups: [
      {
        key: "governance",
        title: "Governance architecture",
        summary: "Who decides what, with which controls and thresholds.",
        points: [
          "AI governance and oversight architecture",
          "Regulatory and compliance alignment",
        ],
      },
      {
        key: "resilience",
        title: "Resilience and risk posture",
        summary: "Technical and geopolitical exposure as board-managed risk.",
        points: [
          "Cyber resilience strategy",
          "Risk-adjusted investment and portfolio prioritization",
        ],
      },
      {
        key: "execution",
        title: "Execution control",
        summary: "Strategic intent to operating cadence and milestone control.",
        points: [
          "Transformation governance",
          "Board-executive decision support",
        ],
      },
    ],
    services: [
      {
        title: "AI Governance and Oversight",
        shortDescription: "Governance architecture for enterprise AI.",
        fullDescription:
          "Define decision rights, controls, and escalation pathways so AI programs remain aligned with enterprise risk appetite.",
      },
      {
        title: "Cyber Resilience Strategy",
        shortDescription: "Board-ready cyber risk posture.",
        fullDescription:
          "Translate technical exposure into board-level scenarios, response readiness, and resilience investment priorities.",
      },
      {
        title: "Transformation Governance",
        shortDescription: "Operating cadence for complex change.",
        fullDescription:
          "Establish steering structures, milestone checkpoints, and accountability models that keep transformation on track.",
      },
      {
        title: "Investment and Portfolio Prioritization",
        shortDescription: "Capital allocation for technology programs.",
        fullDescription:
          "Prioritize initiatives by risk-adjusted value and execution confidence to improve portfolio-level outcomes.",
      },
      {
        title: "Regulatory and Compliance Alignment",
        shortDescription: "Regulatory readiness by design.",
        fullDescription:
          "Align AI and cyber programs to evolving regulation while maintaining business momentum and governance clarity.",
      },
      {
        title: "Leadership Decision Support",
        shortDescription: "Board-executive alignment on critical choices.",
        fullDescription:
          "Prepare high-stakes decisions with structured options, trade-offs, and implementation implications.",
      },
    ],
    stats: [
      { value: "$1B+", label: "Revenue impact, strategic technology" },
      { value: "50+", label: "Years combined senior operating experience" },
      { value: "100+", label: "Board-level decisions supported" },
    ],
    ctaTitle: "Decision quality before execution risk compounds",
    ctaDescription:
      "AI, cyber, or transformation inflection points: we help structure choices, assign accountability, de-risk execution.",
  },
  governance: {
    title: "Evidence before commitment",
    subtitle: "Research and frameworks for board-level decisions",
    description:
      "Capacity, geopolitics, sustainability: proof inputs that affect board decisions.",
    featuredLabel: "Featured",
    featuredButtonLabel: "Read perspective",
    pillarsTitle: "Core research stream",
    articleButtonLabel: "Read perspective",
    partnership: {
      title: "Partnerships",
      description:
        "Institutions and expert partners: practical governance capabilities for boards and executives.",
      bullets: [
        "Thought leadership and governance frameworks",
        "Program delivery for enterprise clients",
        "Board and executive education",
      ],
      cardTitle: "Collaborate with us",
      cardDescription: "Build governance capability at scale.",
      buttonLabel: "Explore collaboration",
    },
    frameworkCta: {
      label: "View AI Governance Framework",
      path: "/framework",
      description:
        "BRIDGE-AI: 9-slide executive path and 14-step deep narrative.",
    },
  },
  frameworkNavLink: { label: "Framework", path: "/framework" },
  governancePosts: [
    {
      id: 7,
      title: "Governing Intelligence at Scale",
      publishDate: "2025-10-01",
      readTime: "Full anthology",
      description:
        "The complete Next AI Imperative series — six essays on capacity, geopolitics, sustainability, ethics, and capital — as a single strategic framework for boards, investors, and policy leaders.",
      tags: ["Framework", "Board Governance", "AI Strategy"],
      isFeatured: true,
      pdfUrl: "/blog/TheNextAIImperative-Governing_Intelligence_at_Scale_A.Bulisache_F.Chima_10.25.pdf",
    },
    {
      id: 6,
      title: "PE's AI Infrastructure Play: From Megawatts to Multiples",
      publishDate: "2025-09-20",
      readTime: "10 min read",
      description:
        "How private equity is financing, structuring, and governing the global AI infrastructure build-out — and why disciplined underwriting separates megawatts from multiples.",
      tags: ["Private Equity", "Infrastructure", "Capital"],
      pdfUrl: "/blog/Stratified_Perspectives-PE_AI_Infrastructure_A.Bulisache_F.Chima_09.25.pdf",
    },
    {
      id: 5,
      title: "Ethics, Sovereignty, and Cyber-Resilient Systems",
      publishDate: "2025-09-02",
      readTime: "11 min read",
      description:
        "A strategic blueprint at the intersection of defense, diplomacy, and disruption — aligning ethics, security, and sovereignty into a governance architecture for AI.",
      tags: ["Ethics", "Cybersecurity", "Sovereignty"],
      pdfUrl: "/blog/TheNextAIImperative-Ethics_Sovereignty_Cyber-Resilient_Systems_A.Bulisache_F.Chima_09.25.pdf",
    },
    {
      id: 4,
      title: "Sustainability at Scale",
      publishDate: "2025-05-20",
      readTime: "8 min read",
      description:
        "AI's energy, water, and resource footprint is no longer invisible. Boards must align AI ambitions with sustainability commitments before regulators and investors force the issue.",
      tags: ["Sustainability", "ESG", "Enterprise AI"],
      pdfUrl: "/blog/TheNextAIImperative- Sustainability at Scale, A.Bulisache, F.Chima 05.25.pdf",
    },
    {
      id: 3,
      title: "Geopolitics and the AI Power Play",
      publishDate: "2025-05-08",
      readTime: "10 min read",
      description:
        "AI is redrawing lines of influence, sovereignty, and security. Boards navigating global operations must treat geopolitical foresight as core to AI strategy.",
      tags: ["Geopolitics", "Risk", "Board Oversight"],
      pdfUrl: "/blog/TheNextAIImperative-Geopolitics, A.Bulisache, F.Chima, 05.25.pdf",
    },
    {
      id: 2,
      title: "Capacity: From Model to Megawatt",
      publishDate: "2025-05-01",
      readTime: "9 min read",
      description:
        "Compute, energy, and infrastructure are the invisible forces shaping who scales AI and who gets left behind. Capacity is strategy, not logistics.",
      tags: ["Capacity", "Infrastructure", "Execution"],
      pdfUrl: "/blog/TheNextAIImperative- Capacity, A.Bulisache, F.Chima, 05.25.pdf",
    },
    {
      id: 1,
      title: "The Next AI Imperative: Capacity, Geopolitics, and Sustainability",
      publishDate: "2025-04-01",
      readTime: "12 min read",
      description:
        "The article that launched the series — framing AI as a board-level governance challenge across capacity, geopolitics, and sustainability.",
      tags: ["AI Governance", "Board Strategy", "Operating Model"],
      pdfUrl: "/blog/TheNextAIImperative, A.Bulisache, F.Chima, 04.25.pdf",
    },
  ] as GovernancePost[],
  team: {
    title: "Who we are",
    description:
      "Board governance, enterprise technology, and investor-side experience — built in environments where the cost of getting it wrong is high.",
    expertiseTitle: "Expertise",
    focusTitle: "Where we operate",
    focusDescription:
      "Enterprise and scale-up boards, PE/VC portfolios, and regulated industries navigating AI, cyber, and transformation decisions.",
  },
  engagementPaths: {
    title: "Choose your path",
    description:
      "We route each path to the right decision architecture.",
    items: [
      {
        key: "board",
        label: "Primary path",
        heading: "Board advisory",
        body: "Decision rights, governance architecture, oversight cadence before scaling risk.",
        ctaVariant: "board-advisory" as const,
        ctaText: "Start board advisory",
        audienceTag: "Board",
        intentLabel: "Mandate clarity and governance design",
      },
      {
        key: "investor",
        label: "Investor path",
        heading: "Investor and operating partner support",
        body: "Portfolio diagnostics, prioritization, risk-adjusted transformation.",
        ctaVariant: "consulting" as const,
        ctaText: "Start investor discussion",
        audienceTag: "Investor",
        intentLabel: "Portfolio value and risk framing",
      },
      {
        key: "partner",
        label: "Collaboration path",
        heading: "Partnership and collaboration",
        body: "Alliances, ecosystem programs, co-delivery for governance capability at scale.",
        ctaVariant: "partnership" as const,
        ctaText: "Explore partnership",
        audienceTag: "Partner",
        intentLabel: "Collaboration and capability build",
      },
    ],
  },
  contact: {
    email: "andreea@stratifiedadvisory.com",
    regions: "US | EMEA | ASIA",
    ctaConfig: {
      "board-advisory": {
        text: "Board advisory",
        title: "Board Advisory",
        description: "Mandate clarity, decision rights, execution oversight.",
        audienceTag: "Board",
        intentLabel: "Mandate and governance architecture",
      },
      consulting: {
        text: "Strategic consulting",
        title: "Strategic Consulting",
        description: "Portfolio diagnostics, prioritization, risk-adjusted transformation.",
        audienceTag: "Investor",
        intentLabel: "Portfolio and strategic prioritization",
      },
      partnership: {
        text: "Partnership",
        title: "Partnership",
        description: "Collaboration models for institutional capability building.",
        audienceTag: "Partner",
        intentLabel: "Collaboration and ecosystem model",
      },
      general: {
        text: "Contact us",
        title: "General Inquiry",
        description: "Share your context; we will route your inquiry.",
        audienceTag: "General",
        intentLabel: "General inquiry",
      },
    },
  },
  footer: {
    description:
      "Board advisory: AI governance, cyber resilience, transformation execution.",
    legal:
      "Data is handled with strict confidentiality and used only to respond to your request.",
    legacyPathCandidates: [
      "/investment-thesis",
      "/ai-governance",
      "/board-service",
      "/team",
      "/partnership",
      "/contact",
      "/research",
      "/insights",
      "/about",
      "/services",
    ],
  },
};

