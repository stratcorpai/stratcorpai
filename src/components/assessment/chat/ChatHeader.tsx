
import { FC } from "react";
import { Bot } from "lucide-react";
import { CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ClipboardCheck } from "lucide-react";
import ChatOverviewDialog from "./ChatOverviewDialog";

interface ChatHeaderProps {
  autoAssessMode: boolean;
  autoAssessProgress?: number;
  currentAutoAssessType?: string | null;
  savedResults: Record<string, any>;
}

const ChatHeader: FC<ChatHeaderProps> = ({
  autoAssessMode,
  autoAssessProgress = 0,
  currentAutoAssessType = null,
  savedResults
}) => {
  return (
    <div className="bg-stratified text-white p-6">
      <div className="flex items-center justify-between">
        <CardTitle className="flex items-center text-xl">
          <Bot className="mr-2 h-5 w-5" />
          StratCorp AI Assistant
          {autoAssessMode && (
            <Badge variant="outline" className="ml-2 bg-white/10 text-white">Auto-Assess Mode</Badge>
          )}
        </CardTitle>
        
        {!autoAssessMode && Object.keys(savedResults).length > 0 && (
          <ChatOverviewDialog savedResults={savedResults} />
        )}
      </div>
      
      {autoAssessMode && (
        <div className="mt-4">
          <div className="flex justify-between text-xs mb-1">
            <span>Assessment Progress</span>
            <span>{autoAssessProgress}%</span>
          </div>
          <Progress value={autoAssessProgress} className="h-2 bg-white/20" />
          
          {currentAutoAssessType && (
            <div className="mt-2 text-sm flex items-center">
              <ClipboardCheck className="h-4 w-4 mr-1" />
              <span>
                Completed: {currentAutoAssessType.replace(/-/g, ' ')} assessment
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatHeader;
