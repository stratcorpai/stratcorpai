
// Utilities for determining next assessment topics and prompts

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
