
// This component has been deprecated and replaced by CollapsibleChatPanel
// The file is kept for backward compatibility but should not be used in new code

import { FC } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatButtonProps {
  onClick: () => void;
}

/**
 * @deprecated Use CollapsibleChatPanel instead
 */
const ChatButton: FC<ChatButtonProps> = ({ onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 right-6 z-10"
    >
      <Button 
        onClick={onClick}
        className="bg-stratified hover:bg-stratified-dark text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </motion.div>
  );
};

export default ChatButton;
