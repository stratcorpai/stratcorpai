
import React from 'react';
import CollapsibleChatPanel from './chat/CollapsibleChatPanel';

type ChatSectionProps = {
  completedAssessments: string[];
  assessmentTypes: string[];
  onCompleteAutoAssessment: (type: string, result: any) => void;
};

const ChatSection: React.FC<ChatSectionProps> = ({
  completedAssessments,
  assessmentTypes,
  onCompleteAutoAssessment
}) => {
  return (
    <section 
      id="conversational-assessment" 
      className="border-t border-gray-200 py-8 md:py-12"
    >
      <div className="container-custom max-w-4xl">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Conversational Assessment</h2>
          <p className="text-gray-600">
            Chat with our AI assistant to complete assessments through natural conversation or get insights about your completed assessments.
          </p>
        </div>
        <CollapsibleChatPanel
          completedCount={completedAssessments.length}
          assessmentTypes={assessmentTypes}
          onCompleteAutoAssessment={onCompleteAutoAssessment}
        />
      </div>
    </section>
  );
};

export default ChatSection;
