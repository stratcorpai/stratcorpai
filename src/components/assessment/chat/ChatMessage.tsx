
import { FC } from "react";
import { Bot, User } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import TypingIndicator from "./TypingIndicator";

export type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
};

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: FC<ChatMessageProps> = ({ message }) => {
  return (
    <div 
      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      <div className={`flex max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
        <Avatar className={`h-8 w-8 ${message.role === 'user' ? 'ml-2' : 'mr-2'}`}>
          {message.role === 'assistant' ? (
            <AvatarImage src="/lovable-uploads/bbbadf15-0ecd-4cdd-88b6-7bb56e21837f.png" alt="AI" />
          ) : null}
          <AvatarFallback>
            {message.role === 'assistant' ? <Bot size={16} /> : <User size={16} />}
          </AvatarFallback>
        </Avatar>
        
        <div 
          className={`rounded-lg p-3 ${
            message.role === 'assistant' 
              ? 'bg-gray-100 text-gray-800' 
              : 'bg-stratified text-white'
          }`}
        >
          {message.isTyping ? (
            <TypingIndicator />
          ) : (
            <>
              <div className="whitespace-pre-line text-sm">
                {message.content}
              </div>
              <div className="text-xs mt-1 opacity-70">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
