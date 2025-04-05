
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
      className="border-t border-gray-200 mb-8"
    >
      <div className="container-custom max-w-4xl py-6">
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
