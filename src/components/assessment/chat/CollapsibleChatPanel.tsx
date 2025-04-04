
import { useState, useEffect } from 'react';
import { MessageCircle, X, Minimize2, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AssessmentChatEngine from './AssessmentChatEngine';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

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
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  
  // Open chat automatically if in autoAssessMode
  useEffect(() => {
    if (autoAssessMode) {
      setIsOpen(true);
    }
  }, [autoAssessMode]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // For mobile, we'll use Sheet component
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
          <AssessmentChatEngine
            autoAssessMode={autoAssessMode}
            completedCount={completedCount}
            assessmentTypes={assessmentTypes}
            onCompleteAutoAssessment={onCompleteAutoAssessment}
          />
        </SheetContent>
      </Sheet>
    );
  }

  // For desktop, we'll use Collapsible component integrated into the page
  return (
    <div className="w-full border rounded-lg overflow-hidden shadow-sm">
      <Collapsible
        open={isOpen}
        onOpenChange={toggleChat}
        className="w-full"
      >
        <CollapsibleTrigger asChild>
          <div className="bg-stratified p-3 flex justify-between items-center cursor-pointer hover:bg-stratified-dark text-white transition-colors">
            <span className="font-medium flex items-center">
              <MessageCircle className="h-4 w-4 mr-2" />
              AI Assistant
            </span>
            <div className="flex items-center">
              {isOpen ? (
                <Minimize2 className="h-4 w-4" />
              ) : (
                <Maximize2 className="h-4 w-4" />
              )}
            </div>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="bg-white border-t border-gray-200" style={{ height: '400px' }}>
            <AssessmentChatEngine
              autoAssessMode={autoAssessMode}
              completedCount={completedCount}
              assessmentTypes={assessmentTypes}
              onCompleteAutoAssessment={onCompleteAutoAssessment}
            />
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default CollapsibleChatPanel;
