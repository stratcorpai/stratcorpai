
import { useState, useRef } from 'react';
import { toast } from 'sonner';
import { Message } from '@/components/assessment/chat/ChatMessage';
import { UseChatMessagesProps } from '@/types/chat-types';
import { 
  processAutoAssessmentInput, 
  generateAutoAssessResponse, 
  generateAutoAssessmentResult, 
  getNextTopicPrompt 
} from '@/utils/autoAssessmentUtils';
import { simulateTyping, getInitialChatMessage, handleChatError } from '@/utils/chat/chatMessageUtils';
import { generateAIResponse } from '@/utils/chat/aiResponseGenerator';

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
    const initialMessage = getInitialChatMessage(autoAssessMode, completedCount, assessmentTypes);
    
    if (autoAssessMode) {
      setDetectedKeywords({
        'company_size': 0,
        'industry': 0,
        'challenges': 0,
        'strategy': 0,
        'digital': 0,
        'ai': 0
      });
    }
    
    setMessages([initialMessage]);
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
      
      await simulateTyping(response, setTypingIndicatorId, setMessages);
    } catch (error) {
      handleChatError(error);
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
