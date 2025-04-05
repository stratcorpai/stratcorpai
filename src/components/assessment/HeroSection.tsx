
import React from 'react';
import { PenLine, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

type HeroSectionProps = {
  onStartGuidedAssessment: () => void;
  onStartConversationalAssessment: () => void;
};

const HeroSection: React.FC<HeroSectionProps> = ({ 
  onStartGuidedAssessment, 
  onStartConversationalAssessment 
}) => {
  return (
    <section className="bg-stratified py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <motion.svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 100 100" 
          fill="none" 
          preserveAspectRatio="none"
          animate={{ 
            scale: [1, 1.02, 1],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </motion.svg>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-stratified/80 to-transparent backdrop-blur-sm"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-stratified/80 to-transparent backdrop-blur-sm"></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.h1 
            className="text-white mb-4 drop-shadow-md text-3xl md:text-5xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/95 to-white/85">
              Executive Assessment Center
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-medium tracking-wide"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Gain strategic insights through our data-driven assessment tools
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              className="bg-white hover:bg-white/90 text-stratified flex items-center gap-2 px-6 py-5 text-base rounded-full shadow-lg"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                onStartGuidedAssessment();
              }}
            >
              <PenLine className="h-4 w-4" />
              Guided Assessment
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent hover:bg-white/10 text-white border-white/30 flex items-center gap-2 px-6 py-5 text-base rounded-full shadow-lg"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                onStartConversationalAssessment();
              }}
            >
              <MessageCircle className="h-4 w-4" />
              Conversational Assessment
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
