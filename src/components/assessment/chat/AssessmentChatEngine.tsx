
import { useEffect } from 'react';
import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { useChatMessages } from '@/hooks/use-chat-messages';

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
  const {
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
  } = useChatMessages({
    autoAssessMode,
    completedCount,
    assessmentTypes,
    onCompleteAutoAssessment
  });
  
  // Initialize chat on component mount
  useEffect(() => {
    initializeChat();
  }, [autoAssessMode, completedCount, assessmentTypes.length]);
  
  // Scroll to bottom of chat when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  return (
    <div className="h-full flex flex-col">
      <ChatHeader 
        autoAssessMode={autoAssessMode}
        autoAssessProgress={autoAssessProgress}
        currentAutoAssessType={currentAutoAssessType}
        savedResults={savedResults}
      />
      
      <div className="flex-1 overflow-y-auto p-6">
        <div className="space-y-4">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      <div className="p-4 border-t">
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
    </div>
  );
};

export default AssessmentChatEngine;
