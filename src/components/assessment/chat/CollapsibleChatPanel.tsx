
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Minimize2, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AssessmentChatEngine from './AssessmentChatEngine';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const [isMinimized, setIsMinimized] = useState(false);
  const isMobile = useIsMobile();
  
  // Open chat automatically if in autoAssessMode
  useEffect(() => {
    if (autoAssessMode) {
      setIsOpen(true);
      setIsMinimized(false);
    }
  }, [autoAssessMode]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const minimizeChat = () => {
    setIsMinimized(true);
  };

  const maximizeChat = () => {
    setIsMinimized(false);
  };

  return (
    <>
      {/* Chat Button (only shown when chat is closed) */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Button 
            onClick={toggleChat}
            className="bg-stratified hover:bg-stratified-dark text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </motion.div>
      )}
      
      {/* Collapsible Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={isMinimized ? { x: 0, y: 0, width: "auto", height: "auto" } : { x: 300, opacity: 0 }}
            animate={isMinimized 
              ? { x: 0, y: 0, width: "auto", height: "auto", opacity: 1 }
              : { x: 0, opacity: 1 }
            }
            exit={{ x: 300, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className={`fixed ${isMinimized ? 'bottom-6 right-6 z-50' : 'bottom-0 right-0 md:right-6 md:bottom-6 z-40'} shadow-2xl rounded-lg overflow-hidden`}
            style={{
              width: isMinimized ? 'auto' : isMobile ? '100%' : '400px',
              height: isMinimized ? 'auto' : isMobile ? '60vh' : '600px',
              maxHeight: isMinimized ? 'auto' : '80vh',
            }}
          >
            {isMinimized ? (
              // Minimized state
              <Button 
                onClick={maximizeChat}
                className="bg-stratified hover:bg-stratified-dark text-white rounded-full w-12 h-12 flex items-center justify-center"
              >
                <Maximize2 className="h-5 w-5" />
              </Button>
            ) : (
              // Expanded state
              <div className="bg-white rounded-lg flex flex-col w-full h-full">
                <div className="bg-stratified text-white p-3 flex justify-between items-center">
                  <span className="font-medium flex items-center">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    StratCorp AI Assistant
                  </span>
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-7 w-7 text-white hover:bg-white/20 rounded-full p-0"
                      onClick={minimizeChat}
                    >
                      <Minimize2 className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-7 w-7 text-white hover:bg-white/20 rounded-full p-0"
                      onClick={toggleChat}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex-1 overflow-auto">
                  <AssessmentChatEngine
                    autoAssessMode={autoAssessMode}
                    completedCount={completedCount}
                    assessmentTypes={assessmentTypes}
                    onCompleteAutoAssessment={onCompleteAutoAssessment}
                  />
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CollapsibleChatPanel;
