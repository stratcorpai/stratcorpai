
import { Message } from "@/components/assessment/chat/ChatMessage";
import { toast } from "sonner";

// Simulate typing animation for more natural AI responses
export const simulateTyping = async (
  response: string,
  setTypingIndicatorId: (id: string | null) => void,
  setMessages: (updater: (prev: Message[]) => Message[]) => void
) => {
  const typingId = Date.now().toString();
  setTypingIndicatorId(typingId);
  
  const typingMessage: Message = {
    id: typingId,
    role: 'assistant',
    content: '',
    timestamp: new Date(),
    isTyping: true
  };
  
  setMessages(prev => [...prev, typingMessage]);
  
  const typingDelay = Math.min(1000 + response.length * 10, 3000);
  await new Promise(resolve => setTimeout(resolve, typingDelay));
  
  setTypingIndicatorId(null);
  
  const assistantMessage: Message = {
    id: Date.now().toString(),
    role: 'assistant',
    content: response,
    timestamp: new Date()
  };
  
  setMessages(prev => prev.map(msg => 
    msg.id === typingId ? assistantMessage : msg
  ));
};

// Initialize chat with appropriate initial message
export const getInitialChatMessage = (
  autoAssessMode: boolean, 
  completedCount: number, 
  assessmentTypes: string[]
): Message => {
  if (autoAssessMode) {
    return {
      id: '1',
      role: 'assistant',
      content: "I'll help you complete assessments through our conversation! This is a more natural way to gather insights about your organization. I'll ask you questions about your organization, and based on your responses, I'll automatically generate assessment results. Let's start with learning about your organization - could you tell me about your company's size, industry, and main challenges?",
      timestamp: new Date()
    };
  } else if (completedCount === 0) {
    return {
      id: '1',
      role: 'assistant',
      content: "Welcome to the StratCorp AI assistant! Complete assessments to unlock more capabilities. I can help answer questions about the assessment process or provide general guidance based on your needs.",
      timestamp: new Date()
    };
  } else if (completedCount < assessmentTypes.length) {
    return {
      id: '1',
      role: 'assistant',
      content: `You've completed ${completedCount} of ${assessmentTypes.length} assessments. I can discuss your current results or help you with the remaining assessments. What would you like to know?`,
      timestamp: new Date()
    };
  } else {
    return {
      id: '1',
      role: 'assistant',
      content: "Congratulations on completing all assessments! I'm your StratCorp AI assistant, ready to discuss your assessment results and provide further insights. How can I help you today?",
      timestamp: new Date()
    };
  }
};

// Handle errors in chat message processing
export const handleChatError = (error: any) => {
  console.error('Error generating response:', error);
  toast.error('Failed to generate a response. Please try again.');
};
