
import {
  createSummaryResponse,
  createStrengthsResponse,
  createOpportunitiesResponse,
  createRecommendationsResponse,
  createAssessmentSpecificResponse,
  createGeneralResponse
} from "@/utils/chatResponseUtils";

// Generate AI response based on user message and assessment results
export const generateAIResponse = async (
  userMessage: string, 
  assessmentResults: any
) => {
  const messageLower = userMessage.toLowerCase();
  
  if (messageLower.includes('summary') || messageLower.includes('overview')) {
    return createSummaryResponse(assessmentResults);
  }
  
  if (messageLower.includes('strength') || messageLower.includes('strong')) {
    return createStrengthsResponse(assessmentResults);
  }
  
  if (messageLower.includes('weakness') || messageLower.includes('opportunity') || messageLower.includes('improve')) {
    return createOpportunitiesResponse(assessmentResults);
  }
  
  if (messageLower.includes('recommend') || messageLower.includes('action') || messageLower.includes('next step')) {
    return createRecommendationsResponse(assessmentResults);
  }
  
  if (Object.keys(assessmentResults).some(assessType => messageLower.includes(assessType.replace('-', ' ')))) {
    const matchingType = Object.keys(assessmentResults).find(
      type => messageLower.includes(type.replace('-', ' '))
    );
    
    if (matchingType) {
      return createAssessmentSpecificResponse(matchingType, assessmentResults[matchingType]);
    }
  }
  
  return createGeneralResponse(userMessage, assessmentResults);
};
