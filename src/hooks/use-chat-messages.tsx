
import { useState, useRef } from 'react';
import { toast } from 'sonner';
import { Message } from '@/components/assessment/chat/ChatMessage';
import { 
  processAutoAssessmentInput, 
  generateAutoAssessResponse, 
  generateAutoAssessmentResult, 
  getNextTopicPrompt 
} from '@/utils/autoAssessmentUtils';
import { 
  createSummaryResponse, 
  createStrengthsResponse, 
  createOpportunitiesResponse, 
  createRecommendationsResponse, 
  createAssessmentSpecificResponse, 
  createGeneralResponse 
} from '@/utils/chatResponseUtils';

type UseChatMessagesProps = {
  autoAssessMode?: boolean;
  completedCount?: number;
  assessmentTypes?: string[];
  onCompleteAutoAssessment?: (type: string, result: any) => void;
};

export const useChatMessages = ({
  autoAssessMode = false,
  completedCount = 0,
  assessmentTypes = [],
  onCompleteAutoAssessment
}: UseChatMessagesProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [currentAutoAssessType, setCurrentAutoAssessType] = useState<string | null>(null);
  const [autoAssessProgress, setAutoAssessProgress] = useState(0);
  const [detectedKeywords, setDetectedKeywords] = useState<Record<string, number>>({});
  const [typingIndicatorId, setTypingIndicatorId] = useState<string | null>(null);
  
  const savedResults = JSON.parse(localStorage.getItem('stratifiedAssessments') || '{}');

  // Initialize chat with appropriate initial message
  const initializeChat = () => {
    let initialMessage: Message;
    
    if (autoAssessMode) {
      initialMessage = {
        id: '1',
        role: 'assistant',
        content: "I'll help you complete assessments through our conversation! This is a more natural way to gather insights about your organization. I'll ask you questions about your organization, and based on your responses, I'll automatically generate assessment results. Let's start with learning about your organization - could you tell me about your company's size, industry, and main challenges?",
        timestamp: new Date()
      };
      
      setDetectedKeywords({
        'company_size': 0,
        'industry': 0,
        'challenges': 0,
        'strategy': 0,
        'digital': 0,
        'ai': 0
      });
    } else if (completedCount === 0) {
      initialMessage = {
        id: '1',
        role: 'assistant',
        content: "Welcome to the StratCorp AI assistant! Complete assessments to unlock more capabilities. I can help answer questions about the assessment process or provide general guidance based on your needs.",
        timestamp: new Date()
      };
    } else if (completedCount < assessmentTypes.length) {
      initialMessage = {
        id: '1',
        role: 'assistant',
        content: `You've completed ${completedCount} of ${assessmentTypes.length} assessments. I can discuss your current results or help you with the remaining assessments. What would you like to know?`,
        timestamp: new Date()
      };
    } else {
      initialMessage = {
        id: '1',
        role: 'assistant',
        content: "Congratulations on completing all assessments! I'm your StratCorp AI assistant, ready to discuss your assessment results and provide further insights. How can I help you today?",
        timestamp: new Date()
      };
    }
    
    setMessages([initialMessage]);
  };
  
  // Simulate typing animation for more natural AI responses
  const simulateTyping = async (response: string) => {
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

  // Generate AI response based on user message and assessment results
  const generateAIResponse = async (userMessage: string, assessmentResults: any) => {
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
  
  // Handle sending a new message
  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    
    try {
      let response;
      
      if (autoAssessMode) {
        const { updatedKeywords, nextAssessType } = processAutoAssessmentInput(inputValue, detectedKeywords);
        setDetectedKeywords(updatedKeywords);
        
        const keywordCount = Object.values(updatedKeywords).reduce((sum, count) => sum + Math.min(count, 3), 0);
        const maxPossibleCount = Object.keys(updatedKeywords).length * 3;
        const progress = Math.min(Math.round((keywordCount / maxPossibleCount) * 100), 100);
        setAutoAssessProgress(progress);
        
        if (nextAssessType && nextAssessType !== currentAutoAssessType) {
          setCurrentAutoAssessType(nextAssessType);
          
          const result = generateAutoAssessmentResult(nextAssessType, updatedKeywords);
          
          if (onCompleteAutoAssessment) {
            onCompleteAutoAssessment(nextAssessType, result);
          }
          
          response = `Based on our conversation, I've completed an assessment of your organization's ${nextAssessType.replace(/-/g, ' ')}. You can view the detailed results in your assessment dashboard.
          
Would you like to continue our conversation to generate more assessments? I still need to learn more about ${getNextTopicPrompt(nextAssessType)}.`;
        } else {
          response = generateAutoAssessResponse(inputValue, updatedKeywords, progress);
        }
      } else {
        response = await generateAIResponse(userMessage.content, savedResults);
      }
      
      await simulateTyping(response);
    } catch (error) {
      console.error('Error generating response:', error);
      toast.error('Failed to generate a response. Please try again.');
      setTypingIndicatorId(null);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Reset conversation to initial state
  const resetConversation = () => {
    let initialMessage: Message;
    
    if (autoAssessMode) {
      initialMessage = {
        id: Date.now().toString(),
        role: 'assistant',
        content: "I've reset our conversation. Let's start again with your organization's details. Could you tell me about your company's size, industry, and main challenges?",
        timestamp: new Date()
      };
      setAutoAssessProgress(0);
      setDetectedKeywords({});
      setCurrentAutoAssessType(null);
    } else {
      initialMessage = {
        id: Date.now().toString(),
        role: 'assistant',
        content: "I've reset our conversation. How else can I help you with your assessment results?",
        timestamp: new Date()
      };
    }
    
    setMessages([initialMessage]);
  };

  return {
    messages,
    inputValue,
    isLoading,
    messagesEndRef,
    currentAutoAssessType,
    autoAssessProgress,
    savedResults,
    setInputValue,
    handleSendMessage,
    resetConversation,
    initializeChat
  };
};
