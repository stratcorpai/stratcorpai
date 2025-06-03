
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
      <div className="absolute inset-0 bg-gradient-to-br from-stratified/10 via-transparent to-stratified/5 z-0"></div>
      
      <div className="absolute inset-0 z-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-stratified text-balance">
              Strategic Assessment Center
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 text-gray-700 leading-relaxed font-medium text-pretty">
              Use our AI-powered assessment tools to analyze your organization's strengths and identify opportunities for growth in key strategic areas.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <Button
                size="lg" 
                className="btn-primary btn-hover-effect shadow-brand group"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setTimeout(() => {
                    onStartGuidedAssessment();
                  }, 100);
                }}
              >
                <ArrowDown className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
                Start Guided Assessment
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-stratified text-stratified hover:bg-stratified/5 btn-hover-effect shadow-lg hover:shadow-xl group" 
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setTimeout(() => {
                    onStartConversationalAssessment();
                  }, 100);
                }}
              >
                <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Start with a Conversation
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-stratified to-stratified-light opacity-30 blur-lg"></div>
              <div className="relative card-modern shadow-brand">
                <div className="p-8 bg-gradient-to-br from-gray-50 to-white border-b border-gray-200">
                  <h3 className="text-2xl font-black text-gray-800">Assessment Dashboard</h3>
                  <p className="text-gray-600 font-medium">Organizational insights at a glance</p>
                </div>
                <div className="p-8">
                  <div className="space-y-6">
                    <div className="skeleton h-24 rounded-lg"></div>
                    <div className="skeleton h-48 rounded-lg"></div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="skeleton h-28 rounded-lg"></div>
                      <div className="skeleton h-28 rounded-lg"></div>
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
