
import { FC } from 'react';
import CollapsibleChatPanel from './chat/CollapsibleChatPanel';

type AssessmentChatProps = {
  autoAssessMode?: boolean;
  completedCount?: number;
  assessmentTypes?: string[];
  onCompleteAutoAssessment?: (type: string, result: any) => void;
};

const AssessmentChat: FC<AssessmentChatProps> = ({ 
  autoAssessMode = false, 
  completedCount = 0,
  assessmentTypes = [],
  onCompleteAutoAssessment 
}: AssessmentChatProps) => {
  return (
    <div className="container-custom max-w-4xl mb-10">
      <CollapsibleChatPanel
        autoAssessMode={autoAssessMode}
        completedCount={completedCount}
        assessmentTypes={assessmentTypes}
        onCompleteAutoAssessment={onCompleteAutoAssessment}
      />
    </div>
  );
};

export default AssessmentChat;
