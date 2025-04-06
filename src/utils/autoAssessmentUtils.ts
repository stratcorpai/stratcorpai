
// Main auto-assessment utilities file that exports all functionality from the refactored files
export { getNextTopicPrompt } from './assessment/topicUtils';
export { 
  processAutoAssessmentInput,
  generateAutoAssessResponse
} from './assessment/keywordUtils';
export { 
  generateAutoAssessmentResult,
  generateRelevantAutoStrengths,
  generateRelevantAutoOpportunities,
  generateRelevantAutoRecommendations
} from './assessment/resultUtils';
