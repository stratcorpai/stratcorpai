
import { motion } from "framer-motion";

type AssessmentHeaderProps = {
  currentStep: string;
};

const AssessmentHeader = ({ currentStep }: AssessmentHeaderProps) => {
  // Set the title and subtitle based on the current step
  let title = "Executive Assessment Center";
  let subtitle = "Gain strategic insights through our data-driven assessment tools";
  
  if (currentStep === 'form') {
    title = "Complete Your Assessment";
    subtitle = "Provide thoughtful responses to receive targeted strategic recommendations";
  } else if (currentStep === 'result') {
    title = "Strategic Analysis Results";
    subtitle = "Review your personalized insights and implementation roadmap";
  }

  return (
    <section className="bg-stratified py-20 relative overflow-hidden">
      {/* Enhanced background pattern with subtle animation */}
      <div className="absolute inset-0 z-0 opacity-10">
        <motion.svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          preserveAspectRatio="none"
          animate={{ 
            scale: [1, 1.02, 1],
            opacity: [0.1, 0.12, 0.1] 
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
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.h1 
            className="text-white mb-4 drop-shadow-md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {title}
          </motion.h1>
          
          <motion.p 
            className="text-xl text-white/90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {subtitle}
          </motion.p>
          
          {currentStep === 'select' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-8 max-w-2xl mx-auto"
            >
              <p className="text-white/80 italic border-l-4 border-white/30 pl-4 py-1 text-left">
                "Strategic assessment is not about finding problems; it's about uncovering opportunities that align with your vision."
              </p>
              <p className="text-white/70 text-right mt-2">— Stratified Advisory Leadership Team</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default AssessmentHeader;
