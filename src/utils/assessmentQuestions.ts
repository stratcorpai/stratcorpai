
// Assessment questions with improved content and psychological underpinnings

type AssessmentQuestion = {
  id: string;
  section: string;
  text: string;
  description: string;
  type: "text" | "radio";
  options?: { value: string; label: string }[];
};

export function generateQuestionsForAssessment(assessmentType: string): AssessmentQuestion[] {
  const questionsByType: Record<string, AssessmentQuestion[]> = {
    "ai-readiness": [
      {
        id: "ai-1",
        section: "Current AI Landscape",
        text: "What level of AI maturity would you attribute to your organization?",
        description: "Consider your organization's current capabilities, leadership understanding, and strategic implementation of AI technologies.",
        type: "radio",
        options: [
          { value: "nascent", label: "Nascent - Limited awareness or ad-hoc experiments" },
          { value: "emerging", label: "Emerging - Pilot projects with limited integration" },
          { value: "developing", label: "Developing - Systematic implementation in select areas" },
          { value: "advanced", label: "Advanced - Well-integrated AI across multiple functions" },
          { value: "transformative", label: "Transformative - AI-driven organization with mature capabilities" }
        ]
      },
      {
        id: "ai-2",
        section: "Current AI Landscape",
        text: "What primary barriers are impeding your organization's AI adoption?",
        description: "Consider technical, cultural, talent, and strategic barriers that are most significant.",
        type: "text"
      },
      {
        id: "ai-3",
        section: "Data & Infrastructure",
        text: "How would you characterize your organization's data ecosystem?",
        description: "Reflect on data quality, accessibility, governance, and infrastructure readiness for AI applications.",
        type: "radio",
        options: [
          { value: "fragmented", label: "Fragmented - Siloed data with poor governance" },
          { value: "emerging", label: "Emerging - Beginning to centralize with basic governance" },
          { value: "structured", label: "Structured - Organized data systems with defined governance" },
          { value: "integrated", label: "Integrated - Well-organized, accessible data ecosystem" },
          { value: "optimized", label: "Optimized - Advanced data architecture with strong governance" }
        ]
      },
      {
        id: "ai-4",
        section: "Data & Infrastructure",
        text: "Describe your current technology stack and its readiness for AI integration.",
        description: "Include primary systems, integration capabilities, and modernization efforts.",
        type: "text"
      },
      {
        id: "ai-5",
        section: "Organizational Readiness",
        text: "How would you assess your organization's change management capabilities?",
        description: "Consider previous technology transformations and the organization's adaptability to change.",
        type: "radio",
        options: [
          { value: "resistant", label: "Resistant - Strong opposition to change with poor adoption history" },
          { value: "cautious", label: "Cautious - Slow to adopt with moderate success" },
          { value: "receptive", label: "Receptive - Generally accepting with good adoption rates" },
          { value: "embracing", label: "Embracing - Proactively seeks change with strong adoption" },
          { value: "transformative", label: "Transformative - Change-driven culture with excellent adoption" }
        ]
      },
      {
        id: "ai-6",
        section: "Organizational Readiness",
        text: "What AI skills and talent currently exist within your organization?",
        description: "Detail both technical and strategic AI capabilities across your organization.",
        type: "text"
      },
      {
        id: "ai-7",
        section: "Strategic Vision",
        text: "How clearly articulated is your organization's AI strategy?",
        description: "Consider whether there's a formal strategy, alignment with business goals, and leadership buy-in.",
        type: "radio",
        options: [
          { value: "none", label: "None - No formal AI strategy exists" },
          { value: "exploratory", label: "Exploratory - Initial discussions without formal plans" },
          { value: "developing", label: "Developing - Strategy in development with emerging clarity" },
          { value: "defined", label: "Defined - Clear strategy with good business alignment" },
          { value: "comprehensive", label: "Comprehensive - Thorough strategy with full organizational alignment" }
        ]
      },
      {
        id: "ai-8",
        section: "Strategic Vision",
        text: "What specific business outcomes do you aim to achieve through AI implementation?",
        description: "Detail the primary objectives, metrics for success, and expected timeframes.",
        type: "text"
      }
    ],
    "board-effectiveness": [
      {
        id: "board-1",
        section: "Board Composition & Dynamics",
        text: "How diverse is your board in terms of skills, backgrounds, and perspectives?",
        description: "Consider diversity across multiple dimensions: expertise, industry experience, gender, ethnicity, age, and cognitive diversity.",
        type: "radio",
        options: [
          { value: "limited", label: "Limited - Homogeneous backgrounds and viewpoints" },
          { value: "emerging", label: "Emerging - Some diversity but significant gaps remain" },
          { value: "moderate", label: "Moderate - Good diversity in some dimensions but not others" },
          { value: "strong", label: "Strong - Well-balanced diversity across most dimensions" },
          { value: "exemplary", label: "Exemplary - Comprehensive diversity creating rich perspectives" }
        ]
      },
      {
        id: "board-2",
        section: "Board Composition & Dynamics",
        text: "How would you characterize the quality of debate and decision-making on your board?",
        description: "Consider psychological safety, constructive challenge, and the board's ability to reach effective decisions.",
        type: "text"
      },
      {
        id: "board-3",
        section: "Strategic Oversight",
        text: "How effectively does your board engage with long-term strategic issues?",
        description: "Consider the balance between operational oversight and forward-looking strategic guidance.",
        type: "radio",
        options: [
          { value: "operational", label: "Operational - Primarily focused on short-term performance" },
          { value: "reactive", label: "Reactive - Strategic discussions only when prompted" },
          { value: "periodic", label: "Periodic - Regular but limited strategic engagement" },
          { value: "proactive", label: "Proactive - Regular, in-depth strategic involvement" },
          { value: "visionary", label: "Visionary - Deeply involved in long-term strategic direction" }
        ]
      },
      {
        id: "board-4",
        section: "Strategic Oversight",
        text: "How does your board assess and respond to disruptive market forces?",
        description: "Consider how the board identifies, discusses, and addresses emerging threats and opportunities.",
        type: "text"
      },
      {
        id: "board-5",
        section: "Risk & Governance",
        text: "How mature is your board's approach to risk oversight?",
        description: "Consider the board's risk identification, monitoring, and mitigation capabilities.",
        type: "radio",
        options: [
          { value: "basic", label: "Basic - Minimal formal risk oversight" },
          { value: "developing", label: "Developing - Emerging risk processes with gaps" },
          { value: "established", label: "Established - Systematic risk management processes" },
          { value: "advanced", label: "Advanced - Comprehensive risk oversight with forward-looking approach" },
          { value: "leading", label: "Leading - Sophisticated risk governance with strategic integration" }
        ]
      },
      {
        id: "board-6",
        section: "Risk & Governance",
        text: "How does your board balance compliance requirements with strategic value-creation?",
        description: "Describe how the board manages its dual responsibilities of oversight and value creation.",
        type: "text"
      },
      {
        id: "board-7",
        section: "Performance & Evaluation",
        text: "How robustly does your board evaluate its own effectiveness?",
        description: "Consider the formality, frequency, and impact of board evaluations.",
        type: "radio",
        options: [
          { value: "minimal", label: "Minimal - No formal evaluation process" },
          { value: "basic", label: "Basic - Occasional evaluations with limited depth" },
          { value: "structured", label: "Structured - Regular evaluations with moderate analysis" },
          { value: "comprehensive", label: "Comprehensive - Detailed regular evaluations with action plans" },
          { value: "transformative", label: "Transformative - Continuous improvement culture with regular in-depth evaluations" }
        ]
      },
      {
        id: "board-8",
        section: "Performance & Evaluation",
        text: "What specific improvements would most enhance your board's effectiveness?",
        description: "Identify the highest-impact changes that would improve your board's performance.",
        type: "text"
      }
    ],
    "business-strategy": [
      {
        id: "strat-1",
        section: "Strategic Clarity",
        text: "How clearly defined is your organization's strategic direction?",
        description: "Consider specificity, articulation, and organizational understanding of the strategy.",
        type: "radio",
        options: [
          { value: "undefined", label: "Undefined - No clear strategic direction" },
          { value: "vague", label: "Vague - General direction without specific goals" },
          { value: "developing", label: "Developing - Defined but not fully articulated or understood" },
          { value: "clear", label: "Clear - Well-defined and generally understood" },
          { value: "crystallized", label: "Crystallized - Precisely defined, widely understood and internalized" }
        ]
      },
      {
        id: "strat-2",
        section: "Strategic Clarity",
        text: "Describe your organization's core value proposition and competitive differentiation.",
        description: "Articulate what makes your organization unique and valuable to customers/stakeholders.",
        type: "text"
      },
      {
        id: "strat-3",
        section: "Market Understanding",
        text: "How sophisticated is your organization's understanding of market dynamics?",
        description: "Consider depth of customer insights, competitive intelligence, and trend forecasting.",
        type: "radio",
        options: [
          { value: "limited", label: "Limited - Minimal market analysis or insights" },
          { value: "basic", label: "Basic - Fundamental understanding without deep insights" },
          { value: "developing", label: "Developing - Good understanding of current market dynamics" },
          { value: "advanced", label: "Advanced - Deep market insights with forward-looking analysis" },
          { value: "comprehensive", label: "Comprehensive - Sophisticated market intelligence driving strategy" }
        ]
      },
      {
        id: "strat-4",
        section: "Market Understanding",
        text: "What are the most significant market shifts affecting your industry?",
        description: "Identify technological, competitive, regulatory or customer changes impacting your business.",
        type: "text"
      },
      {
        id: "strat-5",
        section: "Strategic Execution",
        text: "How effectively does your organization translate strategy into action?",
        description: "Consider alignment between strategic priorities and operational execution.",
        type: "radio",
        options: [
          { value: "disconnected", label: "Disconnected - Strategy rarely influences operations" },
          { value: "inconsistent", label: "Inconsistent - Occasional alignment with significant gaps" },
          { value: "developing", label: "Developing - Improving alignment with some success" },
          { value: "aligned", label: "Aligned - Good translation of strategy into operations" },
          { value: "integrated", label: "Integrated - Seamless connection between strategy and execution" }
        ]
      },
      {
        id: "strat-6",
        section: "Strategic Execution",
        text: "What key initiatives are currently underway to execute your strategy?",
        description: "Describe major programs, their progress, and their strategic relevance.",
        type: "text"
      },
      {
        id: "strat-7",
        section: "Strategic Adaptation",
        text: "How agile is your organization in adapting its strategy to changing conditions?",
        description: "Consider your track record of strategic pivots and responsiveness to disruption.",
        type: "radio",
        options: [
          { value: "rigid", label: "Rigid - Rarely adapts strategy regardless of changes" },
          { value: "reluctant", label: "Reluctant - Slow to recognize need for strategic shifts" },
          { value: "responsive", label: "Responsive - Adapts when necessary but with delay" },
          { value: "proactive", label: "Proactive - Regularly reviews and updates strategy" },
          { value: "agile", label: "Agile - Continuously evolves strategy with market dynamics" }
        ]
      },
      {
        id: "strat-8",
        section: "Strategic Adaptation",
        text: "What strategic capabilities does your organization need to develop for future success?",
        description: "Identify capabilities gaps that limit your strategic options.",
        type: "text"
      }
    ],
    "organizational-structure": [
      {
        id: "org-1",
        section: "Structural Design",
        text: "How well does your organization's structure support your strategic objectives?",
        description: "Consider alignment between organizational design and strategic priorities.",
        type: "radio",
        options: [
          { value: "misaligned", label: "Misaligned - Structure actively hinders strategic execution" },
          { value: "legacy", label: "Legacy - Structure shaped by history rather than strategy" },
          { value: "evolving", label: "Evolving - Structure partially aligned with some limitations" },
          { value: "supportive", label: "Supportive - Structure generally enables strategic execution" },
          { value: "optimized", label: "Optimized - Structure deliberately designed to maximize strategic effectiveness" }
        ]
      },
      {
        id: "org-2",
        section: "Structural Design",
        text: "Describe the primary strengths and weaknesses of your current organizational structure.",
        description: "Consider efficiency, decision-making, communication, and innovation implications.",
        type: "text"
      },
      {
        id: "org-3",
        section: "Decision Rights & Governance",
        text: "How clear are decision-making authorities in your organization?",
        description: "Consider clarity, efficiency, and appropriateness of decision rights allocation.",
        type: "radio",
        options: [
          { value: "ambiguous", label: "Ambiguous - Unclear who makes decisions, causing delays" },
          { value: "inconsistent", label: "Inconsistent - Varies widely across the organization" },
          { value: "defined", label: "Defined - Generally clear but with some friction points" },
          { value: "streamlined", label: "Streamlined - Well-defined with efficient processes" },
          { value: "optimized", label: "Optimized - Precisely calibrated for both speed and quality" }
        ]
      },
      {
        id: "org-4",
        section: "Decision Rights & Governance",
        text: "Where do you see the most significant decision-making bottlenecks in your organization?",
        description: "Identify specific processes or functions where decisions are delayed or suboptimal.",
        type: "text"
      },
      {
        id: "org-5",
        section: "Cross-Functional Collaboration",
        text: "How effectively do different functions collaborate within your organization?",
        description: "Consider both formal and informal collaboration mechanisms and their effectiveness.",
        type: "radio",
        options: [
          { value: "siloed", label: "Siloed - Minimal collaboration between functions" },
          { value: "limited", label: "Limited - Collaboration occurs but with significant friction" },
          { value: "developing", label: "Developing - Improving collaboration with some success" },
          { value: "collaborative", label: "Collaborative - Good cross-functional teamwork" },
          { value: "integrated", label: "Integrated - Seamless collaboration across organizational boundaries" }
        ]
      },
      {
        id: "org-6",
        section: "Cross-Functional Collaboration",
        text: "What structural or cultural barriers most impede effective collaboration?",
        description: "Identify systems, processes, incentives or norms that limit teamwork.",
        type: "text"
      },
      {
        id: "org-7",
        section: "Adaptability & Resilience",
        text: "How adaptable is your organizational structure to changing conditions?",
        description: "Consider your organization's ability to reorganize in response to market shifts.",
        type: "radio",
        options: [
          { value: "rigid", label: "Rigid - Structure rarely changes despite changing needs" },
          { value: "resistant", label: "Resistant - Changes to structure are difficult and disruptive" },
          { value: "evolving", label: "Evolving - Periodic structural changes with moderate effectiveness" },
          { value: "responsive", label: "Responsive - Regularly adjusts structure with good results" },
          { value: "dynamic", label: "Dynamic - Continuously evolves structure as conditions change" }
        ]
      },
      {
        id: "org-8",
        section: "Adaptability & Resilience",
        text: "What structural changes would most improve your organization's effectiveness?",
        description: "Identify the highest-impact organizational design modifications.",
        type: "text"
      }
    ],
    "digital-transformation": [
      {
        id: "digi-1",
        section: "Digital Vision",
        text: "How clearly defined is your organization's digital transformation vision?",
        description: "Consider specificity, articulation, and organizational understanding of digital goals.",
        type: "radio",
        options: [
          { value: "undefined", label: "Undefined - No clear digital vision" },
          { value: "emergent", label: "Emergent - Basic vision without detailed strategy" },
          { value: "developing", label: "Developing - Vision defined but not fully operationalized" },
          { value: "articulated", label: "Articulated - Clear vision with good organizational alignment" },
          { value: "compelling", label: "Compelling - Inspiring vision driving organizational change" }
        ]
      },
      {
        id: "digi-2",
        section: "Digital Vision",
        text: "What are the primary strategic objectives of your digital transformation?",
        description: "Articulate the core business outcomes you seek through digital initiatives.",
        type: "text"
      },
      {
        id: "digi-3",
        section: "Technology Landscape",
        text: "How would you characterize your current technology infrastructure?",
        description: "Consider legacy systems, technical debt, and modernization efforts.",
        type: "radio",
        options: [
          { value: "legacy", label: "Legacy - Dominated by outdated systems requiring replacement" },
          { value: "transitional", label: "Transitional - Mix of legacy and modern with significant gaps" },
          { value: "modernizing", label: "Modernizing - Ongoing updates with positive momentum" },
          { value: "contemporary", label: "Contemporary - Largely modern with limited legacy constraints" },
          { value: "leading-edge", label: "Leading-edge - Advanced infrastructure enabling digital innovation" }
        ]
      },
      {
        id: "digi-4",
        section: "Technology Landscape",
        text: "What are your most significant technical challenges or barriers to digital transformation?",
        description: "Identify technology-related obstacles impeding your digital progress.",
        type: "text"
      },
      {
        id: "digi-5",
        section: "Organizational Capabilities",
        text: "How would you assess your organization's digital capabilities and talent?",
        description: "Consider both technical skills and digital transformation leadership.",
        type: "radio",
        options: [
          { value: "limited", label: "Limited - Significant capability gaps across the organization" },
          { value: "developing", label: "Developing - Building capabilities but with notable gaps" },
          { value: "moderate", label: "Moderate - Good capabilities in some areas but uneven" },
          { value: "strong", label: "Strong - Robust capabilities with minor gaps" },
          { value: "exceptional", label: "Exceptional - Comprehensive capabilities enabling transformation" }
        ]
      },
      {
        id: "digi-6",
        section: "Organizational Capabilities",
        text: "How does your organization develop or acquire the skills needed for digital transformation?",
        description: "Describe your talent strategy for building digital capabilities.",
        type: "text"
      },
      {
        id: "digi-7",
        section: "Digital Culture",
        text: "How would you characterize your organization's digital culture?",
        description: "Consider innovation mindset, risk tolerance, and adaptability to change.",
        type: "radio",
        options: [
          { value: "resistant", label: "Resistant - Cultural barriers actively impede digital change" },
          { value: "traditional", label: "Traditional - Cautious approach with limited digital embrace" },
          { value: "transitioning", label: "Transitioning - Culture evolving with some resistance" },
          { value: "receptive", label: "Receptive - Generally supportive culture enabling digital adoption" },
          { value: "transformative", label: "Transformative - Culture actively drives digital innovation" }
        ]
      },
      {
        id: "digi-8",
        section: "Digital Culture",
        text: "What cultural shifts would most accelerate your digital transformation?",
        description: "Identify key mindset or behavioral changes needed in your organization.",
        type: "text"
      }
    ],
    "executive-alignment": [
      {
        id: "exec-1",
        section: "Strategic Alignment",
        text: "How aligned is your executive team on strategic priorities?",
        description: "Consider agreement on vision, goals, and key strategic choices.",
        type: "radio",
        options: [
          { value: "misaligned", label: "Misaligned - Significant disagreement on core direction" },
          { value: "partially-aligned", label: "Partially aligned - Agreement on some elements but not others" },
          { value: "aligned", label: "Aligned - General agreement with some differences in emphasis" },
          { value: "strongly-aligned", label: "Strongly aligned - Clear consensus on strategic direction" },
          { value: "unified", label: "Unified - Complete alignment with shared ownership" }
        ]
      },
      {
        id: "exec-2",
        section: "Strategic Alignment",
        text: "What are the most significant points of strategic disagreement among your executive team?",
        description: "Identify specific strategic questions where alignment is most needed.",
        type: "text"
      },
      {
        id: "exec-3",
        section: "Team Dynamics",
        text: "How would you characterize your executive team's collaboration?",
        description: "Consider trust, psychological safety, and collective problem-solving.",
        type: "radio",
        options: [
          { value: "dysfunctional", label: "Dysfunctional - Significant tension limiting effectiveness" },
          { value: "guarded", label: "Guarded - Limited trust with territorial behavior" },
          { value: "cooperative", label: "Cooperative - Professional collaboration on required matters" },
          { value: "collaborative", label: "Collaborative - Good teamwork with shared objectives" },
          { value: "high-performing", label: "High-performing - Exceptional trust and collective leadership" }
        ]
      },
      {
        id: "exec-4",
        section: "Team Dynamics",
        text: "What factors most influence your executive team's interpersonal dynamics?",
        description: "Consider history, personalities, incentives, and organizational context.",
        type: "text"
      },
      {
        id: "exec-5",
        section: "Decision Making",
        text: "How would you assess your executive team's decision-making processes?",
        description: "Consider clarity, efficiency, and quality of executive decisions.",
        type: "radio",
        options: [
          { value: "ineffective", label: "Ineffective - Decisions often delayed or suboptimal" },
          { value: "inconsistent", label: "Inconsistent - Variable decision quality and process" },
          { value: "functional", label: "Functional - Generally effective but with improvement opportunities" },
          { value: "effective", label: "Effective - Good decision processes with quality outcomes" },
          { value: "exemplary", label: "Exemplary - Excellent decisions through robust processes" }
        ]
      },
      {
        id: "exec-6",
        section: "Decision Making",
        text: "What are the most challenging types of decisions for your executive team?",
        description: "Identify specific decision categories where improvement is needed.",
        type: "text"
      },
      {
        id: "exec-7",
        section: "Organizational Influence",
        text: "How effectively does your executive team drive change throughout the organization?",
        description: "Consider the team's collective ability to lead and implement change.",
        type: "radio",
        options: [
          { value: "limited", label: "Limited - Minimal ability to drive organizational change" },
          { value: "variable", label: "Variable - Some executives effective, others less so" },
          { value: "developing", label: "Developing - Improving change leadership capabilities" },
          { value: "influential", label: "Influential - Good ability to lead organizational change" },
          { value: "transformational", label: "Transformational - Exceptional change leadership" }
        ]
      },
      {
        id: "exec-8",
        section: "Organizational Influence",
        text: "What would most improve your executive team's collective effectiveness?",
        description: "Identify specific changes that would enhance team performance.",
        type: "text"
      }
    ]
  };
  
  // Default questions if the assessment type doesn't have custom questions
  const defaultQuestions: AssessmentQuestion[] = [
    {
      id: "general-1",
      section: "Organization Overview",
      text: "Describe your organization's industry, size, and primary business activities.",
      description: "Include information about your market position, customer segments, and core offerings.",
      type: "text"
    },
    {
      id: "general-2",
      section: "Organization Overview",
      text: "What are your organization's primary strategic objectives for the next 1-3 years?",
      description: "Detail your most important business goals and priorities.",
      type: "text"
    },
    {
      id: "general-3",
      section: "Current Challenges",
      text: "What are the most significant external challenges facing your organization?",
      description: "Consider market dynamics, competitive threats, regulatory changes, etc.",
      type: "text"
    },
    {
      id: "general-4",
      section: "Current Challenges",
      text: "What internal challenges are most limiting your organization's performance?",
      description: "Consider operational, cultural, talent, or governance challenges.",
      type: "text"
    },
    {
      id: "general-5",
      section: "Adaptive Capacity",
      text: "How would you rate your organization's ability to adapt to change?",
      description: "Consider past performance during significant market or organizational shifts.",
      type: "radio",
      options: [
        { value: "rigid", label: "Rigid - Significant difficulty adapting to change" },
        { value: "reactive", label: "Reactive - Adapts when necessary but with struggle" },
        { value: "responsive", label: "Responsive - Generally adapts well with some friction" },
        { value: "agile", label: "Agile - Adapts quickly with limited disruption" },
        { value: "transformative", label: "Transformative - Thrives on change as a competitive advantage" }
      ]
    },
    {
      id: "general-6",
      section: "Adaptive Capacity",
      text: "What factors most enable or constrain your organization's adaptability?",
      description: "Identify specific elements of culture, structure, leadership, etc. that impact adaptability.",
      type: "text"
    },
    {
      id: "general-7",
      section: "Assessment Focus",
      text: "What specific outcomes do you hope to achieve from this assessment?",
      description: "Detail your priorities for organizational improvement based on this assessment.",
      type: "text"
    },
    {
      id: "general-8",
      section: "Assessment Focus",
      text: "How will you measure the success of improvement initiatives?",
      description: "Describe metrics or indicators you'll use to track progress.",
      type: "text"
    }
  ];
  
  return questionsByType[assessmentType] || defaultQuestions;
}
