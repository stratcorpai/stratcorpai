
// Utilities for processing and analyzing keywords in user input

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
