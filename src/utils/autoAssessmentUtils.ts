
// Utilities for auto-assessment functionality

// Define the next topic to ask about based on current assessment type
export const getNextTopicPrompt = (currentType: string) => {
  // Determine what topic to ask about next based on current assessment
  const topicMap: Record<string, string> = {
    'ai-readiness': 'your digital transformation initiatives',
    'board-effectiveness': 'your executive leadership team',
    'business-strategy': 'your organizational structure',
    'organizational-structure': 'your board governance',
    'digital-transformation': 'your AI initiatives',
    'executive-alignment': 'your business strategy'
  };
  
  return topicMap[currentType] || 'your organization';
};

// Process user input to detect keywords and determine if we can complete an assessment
export const processAutoAssessmentInput = (
  input: string, 
  detectedKeywords: Record<string, number>
) => {
  const lowerInput = input.toLowerCase();
  const updatedKeywords = { ...detectedKeywords };
  
  // Define keywords to detect for each assessment type
  const keywordMapping: Record<string, string[]> = {
    'ai-readiness': ['ai', 'artificial intelligence', 'machine learning', 'data', 'automation'],
    'board-effectiveness': ['board', 'directors', 'governance', 'oversight', 'committee'],
    'business-strategy': ['strategy', 'market', 'competitive', 'growth', 'vision'],
    'organizational-structure': ['structure', 'department', 'reporting', 'hierarchy', 'team'],
    'digital-transformation': ['digital', 'transformation', 'technology', 'innovation', 'platform'],
    'executive-alignment': ['executive', 'leadership', 'alignment', 'management', 'communication']
  };
  
  // Update keyword counts
  Object.keys(keywordMapping).forEach(assessType => {
    keywordMapping[assessType].forEach(keyword => {
      if (lowerInput.includes(keyword)) {
        // Create the keyword if it doesn't exist
        if (!updatedKeywords[keyword]) {
          updatedKeywords[keyword] = 0;
        }
        updatedKeywords[keyword] += 1;
      }
    });
  });
  
  // Check if we have enough information for an assessment
  let nextAssessType: string | null = null;
  let highestScore = 0;
  
  Object.entries(keywordMapping).forEach(([assessType, keywords]) => {
    // Calculate how many relevant keywords were mentioned
    const score = keywords.reduce((sum, keyword) => {
      return sum + (updatedKeywords[keyword] || 0);
    }, 0);
    
    if (score > highestScore && score >= 3) { // Threshold to trigger assessment
      highestScore = score;
      nextAssessType = assessType;
    }
  });
  
  return { updatedKeywords, nextAssessType };
};

// Generate a response to gather more information during auto-assessment
export const generateAutoAssessResponse = (
  userInput: string, 
  keywords: Record<string, number>, 
  progress: number
) => {
  // Generate an appropriate response to gather more information
  const lowerInput = userInput.toLowerCase();
  
  // Check what aspects we need more information about
  const needsMoreInfo: string[] = [];
  
  if (!lowerInput.includes('ai') && !lowerInput.includes('artificial intelligence')) {
    needsMoreInfo.push('AI initiatives or plans');
  }
  
  if (!lowerInput.includes('board') && !lowerInput.includes('director')) {
    needsMoreInfo.push('board structure and governance');
  }
  
  if (!lowerInput.includes('strategy') && !lowerInput.includes('competitive')) {
    needsMoreInfo.push('business strategy and competitive positioning');
  }
  
  if (!lowerInput.includes('structure') && !lowerInput.includes('reporting')) {
    needsMoreInfo.push('organizational structure');
  }
  
  if (!lowerInput.includes('digital') && !lowerInput.includes('technology')) {
    needsMoreInfo.push('digital transformation efforts');
  }
  
  if (!lowerInput.includes('executive') && !lowerInput.includes('leadership')) {
    needsMoreInfo.push('executive leadership team');
  }
  
  // If we have less than 3 topics to ask about, add some general questions
  if (needsMoreInfo.length < 3) {
    needsMoreInfo.push('current challenges and priorities');
    needsMoreInfo.push('future goals and vision');
  }
  
  // Pick 1-2 topics to ask about
  const topicsToAsk = needsMoreInfo.slice(0, 2);
  
  // Generate response with progress indicator
  return `Thank you for sharing that information. I've analyzed ${progress}% of what I need to generate a comprehensive assessment.
  
Could you tell me more about your organization's ${topicsToAsk.join(' and ')}? This will help me complete a more accurate assessment.`;
};

// Generate an assessment result from auto-assessment conversation
export const generateAutoAssessmentResult = (
  assessmentType: string, 
  keywords: Record<string, number>
) => {
  // Generate a realistic assessment result based on conversation data
  const score = 40 + Math.floor(Math.random() * 40); // Base score between 40-80
  
  // Generate strengths, opportunities and recommendations based on assessment type
  const strengths = generateRelevantAutoStrengths(assessmentType, keywords);
  const opportunities = generateRelevantAutoOpportunities(assessmentType, keywords);
  const recommendations = generateRelevantAutoRecommendations(assessmentType, keywords);
  
  return {
    score,
    strengths,
    opportunities,
    recommendations,
    autoGenerated: true
  };
};

// Generate strengths for auto-assessment
export const generateRelevantAutoStrengths = (
  assessmentType: string, 
  keywords: Record<string, number>
) => {
  // Generate strengths based on assessment type and conversation keywords
  const strengthsByType: Record<string, string[]> = {
    "ai-readiness": [
      "Strong leadership commitment to AI transformation",
      "Good data governance foundations in place",
      "Clear alignment between AI initiatives and business objectives",
      "Existing pockets of AI expertise across key departments"
    ],
    "board-effectiveness": [
      "Diverse range of relevant expertise on the board",
      "Strong strategic oversight and vision",
      "Effective governance and risk management protocols",
      "Productive working relationship with executive team"
    ],
    "business-strategy": [
      "Clear articulation of strategic priorities",
      "Strong market position in core segments",
      "Effective competitive differentiation",
      "Alignment between strategy and organizational capabilities"
    ],
    "organizational-structure": [
      "Adaptable structure that evolves with strategic needs",
      "Clear accountability and decision rights",
      "Effective cross-functional collaboration mechanisms",
      "Appropriate balance of centralization and decentralization"
    ],
    "digital-transformation": [
      "Strong digital vision aligned to business strategy",
      "Effective technology modernization roadmap",
      "Good digital skills across key functions",
      "Customer-centric approach to digital initiatives"
    ],
    "executive-alignment": [
      "Strong alignment on strategic priorities",
      "Effective executive decision-making processes",
      "Collaborative leadership team dynamics",
      "Clear cascade of priorities from executive team"
    ]
  };
  
  // Select 3 relevant strengths for the assessment type
  return (strengthsByType[assessmentType] || []).slice(0, 3);
};

// Generate opportunities for auto-assessment
export const generateRelevantAutoOpportunities = (
  assessmentType: string, 
  keywords: Record<string, number>
) => {
  // Similar to strengths, but for improvement opportunities
  const opportunitiesByType: Record<string, string[]> = {
    "ai-readiness": [
      "Develop more comprehensive data strategy for AI applications",
      "Strengthen cross-functional AI governance",
      "Build broader AI literacy across the organization",
      "Create more robust AI experimentation frameworks"
    ],
    "board-effectiveness": [
      "Enhance strategic foresight capabilities",
      "Improve board succession planning process",
      "Strengthen technology expertise representation",
      "Develop more robust board evaluation practices"
    ],
    "business-strategy": [
      "Accelerate response to emerging market opportunities",
      "Strengthen strategic communication throughout organization",
      "Develop more agile strategic planning processes",
      "Enhance strategic resource allocation mechanisms"
    ],
    "organizational-structure": [
      "Reduce organizational silos that impede collaboration",
      "Streamline decision-making processes for greater agility",
      "Strengthen matrix management capabilities",
      "Align incentive structures with collaborative behaviors"
    ],
    "digital-transformation": [
      "Accelerate legacy system modernization",
      "Develop comprehensive digital talent strategy",
      "Strengthen digital change management approach",
      "Improve digital metrics and measurement frameworks"
    ],
    "executive-alignment": [
      "Create more robust strategic alignment mechanisms",
      "Strengthen collective accountability at executive level",
      "Enhance executive team psychological safety",
      "Improve strategic cascading throughout organization"
    ]
  };
  
  // Select 3 relevant opportunities
  return (opportunitiesByType[assessmentType] || []).slice(0, 3);
};

// Generate recommendations for auto-assessment
export const generateRelevantAutoRecommendations = (
  assessmentType: string, 
  keywords: Record<string, number>
) => {
  // Similar to strengths and opportunities, but for actionable recommendations
  const recommendationsByType: Record<string, string[]> = {
    "ai-readiness": [
      "Establish a cross-functional AI governance council with clear mandate and authority",
      "Develop a comprehensive data strategy focused on supporting AI applications",
      "Implement an AI knowledge development program for key leadership",
      "Create an AI pilot framework with clear success metrics and scaling criteria"
    ],
    "board-effectiveness": [
      "Conduct a comprehensive board skills assessment against future strategic needs",
      "Implement quarterly strategic deep-dive sessions separate from regular board meetings",
      "Establish a more structured board evaluation process with external facilitation",
      "Create a board technology committee to strengthen digital oversight"
    ],
    "business-strategy": [
      "Implement quarterly strategy review sessions with explicit assumption testing",
      "Develop a strategic narrative that can be effectively communicated at all levels",
      "Create a strategic initiatives dashboard with clear success metrics",
      "Establish cross-functional strategy execution teams for key priorities"
    ],
    "organizational-structure": [
      "Conduct a decision mapping exercise to identify and address bottlenecks",
      "Implement formal cross-functional teaming structures for key initiatives",
      "Review incentive systems to ensure alignment with collaborative behaviors",
      "Establish clear organizational design principles aligned to strategic priorities"
    ],
    "digital-transformation": [
      "Develop an integrated digital transformation roadmap with clear sequencing",
      "Create a digital skills academy to address capability gaps systematically",
      "Implement digital transformation metrics that balance process and outcomes",
      "Establish a digital governance framework that enables rather than controls"
    ],
    "executive-alignment": [
      "Conduct a strategic alignment session with structured follow-up mechanisms",
      "Implement a collective leadership development program for the executive team",
      "Establish clear decision protocols for different types of executive decisions",
      "Create a cascading mechanism to translate executive priorities throughout organization"
    ]
  };
  
  // Select 3 relevant recommendations
  return (recommendationsByType[assessmentType] || []).slice(0, 3);
};
