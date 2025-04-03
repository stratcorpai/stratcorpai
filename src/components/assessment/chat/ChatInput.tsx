
import { FC, KeyboardEvent } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, RefreshCw } from "lucide-react";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  onReset: () => void;
  isLoading: boolean;
  autoAssessMode: boolean;
  completedCount: number;
  assessmentTypesCount: number;
}

const ChatInput: FC<ChatInputProps> = ({
  value,
  onChange,
  onSend,
  onReset,
  isLoading,
  autoAssessMode,
  completedCount,
  assessmentTypesCount
}) => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="border-t pt-4">
      <div className="flex items-center gap-2">
        <Textarea
          placeholder="Type your message..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          className="min-h-9 resize-none"
          disabled={isLoading}
        />
        
        <div className="flex gap-2">
          <Button
            onClick={onSend}
            disabled={isLoading || !value.trim()}
            className="bg-stratified hover:bg-stratified-dark text-white"
          >
            {isLoading ? (
              <RefreshCw className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
          
          <Button
            variant="outline"
            onClick={onReset}
            className="px-2"
            title="Reset conversation"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <p className="text-xs text-gray-500 mt-2">
        {autoAssessMode 
          ? "Just chat naturally about your organization. I'll automatically generate assessments based on our conversation."
          : `This AI assistant has ${completedCount === assessmentTypesCount ? 'full' : 'limited'} access to your assessment results and can provide personalized insights.`
        }
      </p>
    </div>
  );
};

export default ChatInput;
