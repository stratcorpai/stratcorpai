
import { FC } from 'react';
import { MessageCircle } from 'lucide-react';
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
    <div className="h-full border rounded-lg shadow-sm overflow-hidden">
      <div className="bg-stratified p-3 flex justify-between items-center text-white">
        <span className="font-medium flex items-center">
          <MessageCircle className="h-4 w-4 mr-2" />
          AI Assistant
        </span>
      </div>
      <div className="bg-white border-t border-gray-200" style={{ height: '400px' }}>
        <AssessmentChatEngine
          autoAssessMode={autoAssessMode}
          completedCount={completedCount}
          assessmentTypes={assessmentTypes}
          onCompleteAutoAssessment={onCompleteAutoAssessment}
        />
      </div>
    </div>
  );
};

export default AssessmentChat;
