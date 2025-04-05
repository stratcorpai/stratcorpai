
import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AssessmentChatEngine from './AssessmentChatEngine';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

type CollapsibleChatPanelProps = {
  autoAssessMode?: boolean;
  completedCount?: number;
  assessmentTypes?: string[];
  onCompleteAutoAssessment?: (type: string, result: any) => void;
};

const CollapsibleChatPanel = ({
  autoAssessMode = false,
  completedCount = 0,
  assessmentTypes = [],
  onCompleteAutoAssessment
}: CollapsibleChatPanelProps) => {
  const [isOpen, setIsOpen] = useState(true); // Default to expanded
  const isMobile = useIsMobile();
  
  // For mobile, we'll use Sheet component with a trigger button
  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button 
            className="fixed bottom-6 right-6 z-50 bg-stratified hover:bg-stratified-dark text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
            onClick={() => setIsOpen(true)}
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[80vh] p-0 pt-10">
          <div className="h-full flex flex-col">
            <AssessmentChatEngine
              autoAssessMode={autoAssessMode}
              completedCount={completedCount}
              assessmentTypes={assessmentTypes}
              onCompleteAutoAssessment={onCompleteAutoAssessment}
            />
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  // For desktop, we'll return the fully expanded chat with full height
  return (
    <div className="w-full border rounded-lg overflow-hidden shadow-sm" style={{ height: '600px' }}>
      <div className="bg-stratified p-3 flex justify-between items-center text-white">
        <span className="font-medium flex items-center">
          <MessageCircle className="h-4 w-4 mr-2" />
          AI Assistant
        </span>
      </div>
      <div className="bg-white border-t border-gray-200" style={{ height: 'calc(100% - 48px)' }}>
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

export default CollapsibleChatPanel;
