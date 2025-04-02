
import { motion } from "framer-motion";

type AssessmentHeaderProps = {
  currentStep: string;
};

const AssessmentHeader = ({ currentStep }: AssessmentHeaderProps) => {
  // Set the title based on the current step
  let title = "Stratified Advisory Assessment";
  let subtitle = "Discover your organization's potential with our specialized assessment tools";
  
  if (currentStep === 'form') {
    title = "Complete Your Assessment";
    subtitle = "Answer the questions below to receive your personalized insights";
  } else if (currentStep === 'result') {
    title = "Your Assessment Results";
    subtitle = "Review your personalized insights and recommended next steps";
  }

  return (
    <section className="bg-stratified py-20 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-white mb-4 drop-shadow-md">{title}</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AssessmentHeader;
