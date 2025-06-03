
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, PenLine } from "lucide-react";
import AssessmentTypes from "@/components/assessment/AssessmentTypes";
import { motion } from "framer-motion";

interface AssessmentSelectorProps {
  completedAssessments: string[];
  onSelect: (type: string) => void;
  onAutoAssess: () => void;
}

const AssessmentSelector: FC<AssessmentSelectorProps> = ({
  completedAssessments,
  onSelect,
  onAutoAssess
}) => {
  return (
    <>
      <motion.div 
        className="bg-gradient-to-r from-white via-gray-50 to-white py-12 shadow-lg border-b border-gray-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div className="flex-1 max-w-3xl">
              <h3 className="text-3xl md:text-4xl font-black text-gray-800 mb-4 gradient-text">
                Choose your assessment method
              </h3>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium">
                Get insights about your organization through structured assessments or AI-powered conversation.
              </p>
            </div>
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-stratified text-stratified hover:bg-stratified/10 flex items-center gap-3 btn-hover-effect shadow-lg hover:shadow-xl"
                onClick={onAutoAssess}
              >
                <MessageCircle className="h-5 w-5" />
                Conversational Assessment
              </Button>
              <Button 
                size="lg"
                className="btn-primary btn-hover-effect flex items-center gap-3 shadow-lg hover:shadow-xl"
              >
                <PenLine className="h-5 w-5" />
                Guided Assessment
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        className="bg-white py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <AssessmentTypes 
          onSelect={onSelect} 
          completedAssessments={completedAssessments} 
        />
      </motion.div>
    </>
  );
};

export default AssessmentSelector;
