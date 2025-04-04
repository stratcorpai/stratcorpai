
import { FC } from 'react';
import AssessmentChatEngine from './chat/AssessmentChatEngine';

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
    <div className="h-full">
      <AssessmentChatEngine
        autoAssessMode={autoAssessMode}
        completedCount={completedCount}
        assessmentTypes={assessmentTypes}
        onCompleteAutoAssessment={onCompleteAutoAssessment}
      />
    </div>
  );
};

export default AssessmentChat;
