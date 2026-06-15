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
    name: "StratCorp.AI",
    logoPath: "/assets/logo.png",
    logoAlt: "StratCorp.AI logo",
  },
  navLinks: [
    { label: "Advisory", sectionId: "investment-thesis" },
    { label: "Services", sectionId: "board-service" },
    { label: "Research", sectionId: "ai-governance" },
    { label: "Team", sectionId: "team" },
    { label: "Engage", sectionId: "engagement-paths" },
  ] as NavLink[],
  boardService: {
    stats: [
      { value: "$1B+", label: "Revenue impact, strategic technology" },
      { value: "50+", label: "Years combined senior operating experience" },
      { value: "100+", label: "Board-level decisions supported" },
    ],
  },
  frameworkNavLink: { label: "Framework", path: "/framework" },
  warRoomNavLink: { label: "War Room", path: "/war-room" },
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
      pdfUrl: "/blog/TheNextAIImperative-Sustainability_at_Scale_A.Bulisache_F.Chima_05.25.pdf",
    },
    {
      id: 3,
      title: "Geopolitics and the AI Power Play",
      publishDate: "2025-05-08",
      readTime: "10 min read",
      description:
        "AI is redrawing lines of influence, sovereignty, and security. Boards navigating global operations must treat geopolitical foresight as core to AI strategy.",
      tags: ["Geopolitics", "Risk", "Board Oversight"],
      pdfUrl: "/blog/TheNextAIImperative-Geopolitics_A.Bulisache_F.Chima_05.25.pdf",
    },
    {
      id: 2,
      title: "Capacity: From Model to Megawatt",
      publishDate: "2025-05-01",
      readTime: "9 min read",
      description:
        "Compute, energy, and infrastructure are the invisible forces shaping who scales AI and who gets left behind. Capacity is strategy, not logistics.",
      tags: ["Capacity", "Infrastructure", "Execution"],
      pdfUrl: "/blog/TheNextAIImperative-Capacity_A.Bulisache_F.Chima_05.25.pdf",
    },
    {
      id: 1,
      title: "The Next AI Imperative: Capacity, Geopolitics, and Sustainability",
      publishDate: "2025-04-01",
      readTime: "12 min read",
      description:
        "The article that launched the series — framing AI as a board-level governance challenge across capacity, geopolitics, and sustainability.",
      tags: ["AI Governance", "Board Strategy", "Operating Model"],
      pdfUrl: "/blog/TheNextAIImperative_A.Bulisache_F.Chima_04.25.pdf",
    },
  ] as GovernancePost[],
  team: {
    title: "Who we are",
    description:
      "Board governance, enterprise technology, and investor-side experience built where the cost of getting it wrong is high.",
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
    email: "partner@stratcorp.ai",
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
};
