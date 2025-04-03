
import { motion } from 'framer-motion';

const TypingIndicator = () => {
  return (
    <div className="flex items-center space-x-1 p-2 rounded-lg bg-gray-100 inline-block">
      <motion.div
        className="h-2 w-2 bg-gray-400 rounded-full"
        animate={{ scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'loop' }}
      />
      <motion.div
        className="h-2 w-2 bg-gray-400 rounded-full"
        animate={{ scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 1, delay: 0.2, repeat: Infinity, repeatType: 'loop' }}
      />
      <motion.div
        className="h-2 w-2 bg-gray-400 rounded-full"
        animate={{ scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 1, delay: 0.4, repeat: Infinity, repeatType: 'loop' }}
      />
    </div>
  );
};

export default TypingIndicator;
