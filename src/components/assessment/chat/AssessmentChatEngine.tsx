
import { useState, useRef, useEffect } from 'react';
import { toast } from 'sonner';
import { Card, CardContent } from '@/components/ui/card';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { motion } from 'framer-motion';
import type { Message } from './ChatMessage';
import { processAutoAssessmentInput, generateAutoAssessResponse, generateAutoAssessmentResult, getNextTopicPrompt } from '@/utils/autoAssessmentUtils';
import { createSummaryResponse, createStrengthsResponse, createOpportunitiesResponse, createRecommendationsResponse, createAssessmentSpecificResponse, createGeneralResponse } from '@/utils/chatResponseUtils';

type AssessmentChatEngineProps = {
  autoAssessMode?: boolean;
  completedCount?: number;
  assessmentTypes?: string[];
  onCompleteAutoAssessment?: (type: string, result: any) => void;
};

const AssessmentChatEngine = ({ 
  autoAssessMode = false, 
  completedCount = 0,
  assessmentTypes = [],
  onCompleteAutoAssessment 
}: AssessmentChatEngineProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [currentAutoAssessType, setCurrentAutoAssessType] = useState<string | null>(null);
  const [autoAssessProgress, setAutoAssessProgress] = useState(0);
  const [detectedKeywords, setDetectedKeywords] = useState<Record<string, number>>({});
  const [typingIndicatorId, setTypingIndicatorId] = useState<string | null>(null);
  
  // Load stored assessment results
  const savedResults = JSON.parse(localStorage.getItem('stratifiedAssessments') || '{}');
  
  // Initial message setup
  useEffect(() => {
    let initialMessage: Message;
    
    if (autoAssessMode) {
      // Start auto-assess mode with specific message
      initialMessage = {
        id: '1',
        role: 'assistant',
        content: "I'll help you complete assessments through our conversation! This is a more natural way to gather insights about your organization. I'll ask you questions about your organization, and based on your responses, I'll automatically generate assessment results. Let's start with learning about your organization - could you tell me about your company's size, industry, and main challenges?",
        timestamp: new Date()
      };
      
      // Pre-fill some detected keywords
      setDetectedKeywords({
        'company_size': 0,
        'industry': 0,
        'challenges': 0,
        'strategy': 0,
        'digital': 0,
        'ai': 0
      });
    } else if (completedCount === 0) {
      // No assessments completed
      initialMessage = {
        id: '1',
        role: 'assistant',
        content: "Welcome to the StratCorp AI assistant! Complete assessments to unlock more capabilities. I can help answer questions about the assessment process or provide general guidance based on your needs.",
        timestamp: new Date()
      };
    } else if (completedCount < assessmentTypes.length) {
      // Some assessments completed
      initialMessage = {
        id: '1',
        role: 'assistant',
        content: `You've completed ${completedCount} of ${assessmentTypes.length} assessments. I can discuss your current results or help you with the remaining assessments. What would you like to know?`,
        timestamp: new Date()
      };
    } else {
      // All assessments completed
      initialMessage = {
        id: '1',
        role: 'assistant',
        content: "Congratulations on completing all assessments! I'm your StratCorp AI assistant, ready to discuss your assessment results and provide further insights. How can I help you today?",
        timestamp: new Date()
      };
    }
    
    setMessages([initialMessage]);
  }, [autoAssessMode, completedCount, assessmentTypes.length]);
  
  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Simulates the typing effect
  const simulateTyping = async (response: string) => {
    // Add typing indicator
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
    
    // Simulate thinking/typing time proportional to message length
    const typingDelay = Math.min(1000 + response.length * 10, 3000);
    await new Promise(resolve => setTimeout(resolve, typingDelay));
    
    // Replace typing indicator with actual message
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
  
  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    
    // Add user message
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
        // Process for auto-assessment mode
        const { updatedKeywords, nextAssessType } = processAutoAssessmentInput(inputValue, detectedKeywords);
        setDetectedKeywords(updatedKeywords);
        
        // Calculate progress based on keywords
        const keywordCount = Object.values(updatedKeywords).reduce((sum, count) => sum + Math.min(count, 3), 0);
        const maxPossibleCount = Object.keys(updatedKeywords).length * 3; // Cap at 3 mentions per keyword
        const progress = Math.min(Math.round((keywordCount / maxPossibleCount) * 100), 100);
        setAutoAssessProgress(progress);
        
        // Check if we have enough data for an assessment
        if (nextAssessType && nextAssessType !== currentAutoAssessType) {
          setCurrentAutoAssessType(nextAssessType);
          
          // Generate assessment result for this type
          const result = generateAutoAssessmentResult(nextAssessType, updatedKeywords);
          
          // Notify parent component
          if (onCompleteAutoAssessment) {
            onCompleteAutoAssessment(nextAssessType, result);
          }
          
          // Response indicates assessment completion
          response = `Based on our conversation, I've completed an assessment of your organization's ${nextAssessType.replace(/-/g, ' ')}. You can view the detailed results in your assessment dashboard.
          
Would you like to continue our conversation to generate more assessments? I still need to learn more about ${getNextTopicPrompt(nextAssessType)}.`;
        } else {
          // Continue gathering information
          response = generateAutoAssessResponse(inputValue, updatedKeywords, progress);
        }
      } else {
        // Standard chat response
        response = await generateAIResponse(userMessage.content, savedResults);
      }
      
      // Simulate typing effect for the response
      await simulateTyping(response);
      
    } catch (error) {
      console.error('Error generating response:', error);
      toast.error('Failed to generate a response. Please try again.');
      setTypingIndicatorId(null);
    } finally {
      setIsLoading(false);
    }
  };
  
  const resetConversation = () => {
    let initialMessage: Message;
    
    if (autoAssessMode) {
      initialMessage = {
        id: Date.now().toString(),
        role: 'assistant',
        content: "I've reset our conversation. Let's start again with your organization's details. Could you tell me about your company's size, industry, and main challenges?",
        timestamp: new Date()
      };
      // Reset auto-assessment progress
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
  
  const generateAIResponse = async (userMessage: string, assessmentResults: any) => {
    // In a real implementation, this would use the Azure OpenAI or Claude API
    // Here we'll return contextually relevant responses based on the message and results
    
    const messageLower = userMessage.toLowerCase();
    
    // Prepare responses based on common question patterns
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
      // If user asks about a specific assessment type
      const matchingType = Object.keys(assessmentResults).find(
        type => messageLower.includes(type.replace('-', ' '))
      );
      
      if (matchingType) {
        return createAssessmentSpecificResponse(matchingType, assessmentResults[matchingType]);
      }
    }
    
    // Default response for other questions
    return createGeneralResponse(userMessage, assessmentResults);
  };
  
  return (
    <div className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <Card className="border shadow-lg overflow-hidden">
          <ChatHeader 
            autoAssessMode={autoAssessMode}
            autoAssessProgress={autoAssessProgress}
            currentAutoAssessType={currentAutoAssessType}
            savedResults={savedResults}
          />
          
          <CardContent className="p-6">
            <div className="flex flex-col h-[400px]">
              <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                {messages.map((message) => (
                  <ChatMessage key={message.id} message={message} />
                ))}
                <div ref={messagesEndRef} />
              </div>
              
              <ChatInput
                value={inputValue}
                onChange={setInputValue}
                onSend={handleSendMessage}
                onReset={resetConversation}
                isLoading={isLoading}
                autoAssessMode={autoAssessMode}
                completedCount={completedCount}
                assessmentTypesCount={assessmentTypes.length}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AssessmentChatEngine;
