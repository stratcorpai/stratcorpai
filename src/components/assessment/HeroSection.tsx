
import { Button } from "@/components/ui/button";
import { ArrowDown, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

type HeroSectionProps = {
  onStartGuidedAssessment: () => void;
  onStartConversationalAssessment: () => void;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  onStartGuidedAssessment,
  onStartConversationalAssessment
}) => {
  return (
    <section className="min-h-[85vh] flex items-center relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-stratified/10 via-transparent to-stratified/5 z-0"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-stratified">
              Strategic Assessment Center
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-gray-700">
              Use our AI-powered assessment tools to analyze your organization's strengths and identify opportunities for growth in key strategic areas.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg" 
                className="bg-stratified hover:bg-stratified-dark text-white"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setTimeout(() => {
                    onStartGuidedAssessment();
                  }, 100);
                }}
              >
                <ArrowDown className="mr-2 h-4 w-4" />
                Start Guided Assessment
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-stratified text-stratified hover:bg-stratified/5" 
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setTimeout(() => {
                    onStartConversationalAssessment();
                  }, 100);
                }}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Start with a Conversation
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-stratified to-stratified-light opacity-30 blur"></div>
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="p-6 bg-gray-50 border-b">
                  <h3 className="text-xl font-semibold text-gray-800">Assessment Dashboard</h3>
                  <p className="text-gray-500">Organizational insights at a glance</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="bg-gray-100 h-20 rounded-md animate-pulse"></div>
                    <div className="bg-gray-100 h-40 rounded-md animate-pulse"></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-100 h-24 rounded-md animate-pulse"></div>
                      <div className="bg-gray-100 h-24 rounded-md animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
