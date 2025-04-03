
// Generate response for chat based on user input and assessment results

// Create a summary response aggregating all assessment data
export const createSummaryResponse = (results: any) => {
  const assessmentNames = {
    'ai-readiness': 'AI Readiness',
    'board-effectiveness': 'Board Effectiveness',
    'business-strategy': 'Business Strategy',
    'organizational-structure': 'Organizational Structure',
    'digital-transformation': 'Digital Transformation',
    'executive-alignment': 'Executive Alignment'
  };
  
  // Calculate average score
  const scores = Object.values(results).map((r: any) => r.score);
  const averageScore = scores.reduce((a: number, b: number) => a + b, 0) / scores.length;
  
  // Determine areas of strength and weakness
  const sortedAssessments = Object.entries(results)
    .sort((a: any, b: any) => b[1].score - a[1].score);
  
  const topAssessments = sortedAssessments.slice(0, 2);
  const bottomAssessments = sortedAssessments.slice(-2);
  
  const topAreas = topAssessments
    .map(([type, data]: [string, any]) => 
      `${assessmentNames[type as keyof typeof assessmentNames]} (${data.score})`
    );
  
  const bottomAreas = bottomAssessments
    .map(([type, data]: [string, any]) => 
      `${assessmentNames[type as keyof typeof assessmentNames]} (${data.score})`
    );
  
  return `
Based on your completed assessments, here's a comprehensive overview:

Your organization's average score across all assessments is **${Math.round(averageScore)}** out of 100.

**Areas of Strength:**
- ${topAreas.join('\n- ')}

**Areas for Development:**
- ${bottomAreas.join('\n- ')}

The results suggest your organization has substantial capabilities in ${topAssessments[0][0].replace('-', ' ')}, while there are opportunities to strengthen your approach to ${bottomAssessments[0][0].replace('-', ' ')}.

Would you like me to provide more specific insights on any particular area?
  `;
};

// Create a response focusing on organizational strengths
export const createStrengthsResponse = (results: any) => {
  // Gather all strengths across assessments
  const allStrengths: string[] = [];
  
  Object.entries(results).forEach(([type, data]: [string, any]) => {
    if (data.strengths) {
      data.strengths.forEach((strength: string) => {
        allStrengths.push(`**${type.replace('-', ' ')}**: ${strength}`);
      });
    }
  });
  
  return `
Based on your assessments, here are your organization's key strengths:

${allStrengths.join('\n\n')}

These strengths provide a foundation for your organization to build upon. Would you like recommendations on how to further leverage these strengths?
  `;
};

// Create a response focusing on improvement opportunities
export const createOpportunitiesResponse = (results: any) => {
  // Gather all opportunities across assessments
  const allOpportunities: string[] = [];
  
  Object.entries(results).forEach(([type, data]: [string, any]) => {
    if (data.opportunities) {
      data.opportunities.forEach((opportunity: string) => {
        allOpportunities.push(`**${type.replace('-', ' ')}**: ${opportunity}`);
      });
    }
  });
  
  return `
Your assessments identified these key opportunities for development:

${allOpportunities.join('\n\n')}

Addressing these areas could significantly enhance your organization's effectiveness. Would you like more specific suggestions on how to address any of these opportunities?
  `;
};

// Create a response focusing on recommendations
export const createRecommendationsResponse = (results: any) => {
  // Gather top recommendations across assessments
  const priorityRecommendations: string[] = [];
  
  // Sort assessments by score (lowest first for priority focus)
  const sortedAssessments = Object.entries(results)
    .sort((a: any, b: any) => a[1].score - b[1].score)
    .slice(0, 3); // Focus on top 3 areas needing improvement
  
  sortedAssessments.forEach(([type, data]: [string, any]) => {
    if (data.recommendations && data.recommendations.length > 0) {
      priorityRecommendations.push(`**${type.replace('-', ' ')} (Score: ${data.score})**: ${data.recommendations[0]}`);
    }
  });
  
  return `
Based on your assessment results, here are the highest-priority recommendations:

${priorityRecommendations.join('\n\n')}

These recommendations target your most significant opportunity areas. Would you like me to develop a more detailed action plan for any of these recommendations?
  `;
};

// Create a response for a specific assessment type
export const createAssessmentSpecificResponse = (assessmentType: string, assessmentData: any) => {
  const formattedType = assessmentType.replace('-', ' ');
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  const formattedTitle = formattedType.split(' ').map(capitalize).join(' ');
  
  return `
## ${formattedTitle} Assessment Results

**Overall Score:** ${assessmentData.score}/100

**Key Strengths:**
${assessmentData.strengths.map((s: string) => `- ${s}`).join('\n')}

**Opportunities for Development:**
${assessmentData.opportunities.map((o: string) => `- ${o}`).join('\n')}

**Recommendations:**
${assessmentData.recommendations.map((r: string) => `- ${r}`).join('\n')}

Would you like to explore any specific aspect of this assessment in more detail?
  `;
};

// Create a generic response when no specific pattern is matched
export const createGeneralResponse = (userMessage: string, results: any) => {
  // Generic responses based on message sentiment and context
  const responses = [
    `Thank you for your question. Based on your assessment results, I'd suggest focusing on improving your ${Object.keys(results)[0].replace('-', ' ')} capabilities first, as it appears to be an area where targeted improvements could yield significant benefits.`,
    
    `Looking at your results holistically, your organization appears to be at a pivotal stage where strategic improvements in key areas could yield substantial results. The assessments suggest that balancing short-term operational excellence with long-term strategic vision will be crucial.`,
    
    `Your assessment results indicate varying levels of maturity across different dimensions. This is quite normal, and suggests a targeted approach to organizational development rather than broad-based initiatives would be most effective.`,
    
    `I notice from your assessments that there appears to be some alignment between challenges in organizational structure and executive alignment. This often indicates an opportunity for meaningful structural reforms that better support your strategic objectives.`
  ];
  
  // Select a somewhat random but contextual response
  const responseIndex = Math.floor(userMessage.length % responses.length);
  return responses[responseIndex];
};
