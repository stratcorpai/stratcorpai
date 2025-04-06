
import { Message } from "@/components/assessment/chat/ChatMessage";

export type UseChatMessagesProps = {
  autoAssessMode?: boolean;
  completedCount?: number;
  assessmentTypes?: string[];
  onCompleteAutoAssessment?: (type: string, result: any) => void;
};

export type ChatState = {
  messages: Message[];
  inputValue: string;
  isLoading: boolean;
  currentAutoAssessType: string | null;
  autoAssessProgress: number;
  detectedKeywords: Record<string, number>;
  typingIndicatorId: string | null;
};
