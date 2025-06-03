
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
        className="bg-white py-8 shadow-soft border-b border-gray-100"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-black text-gray-800 mb-2">Choose your assessment method</h3>
              <p className="text-gray-600 text-lg font-medium">Get insights about your organization through structured assessments or AI-powered conversation.</p>
            </div>
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                className="border-stratified text-stratified hover:bg-stratified/5 flex items-center gap-2 btn-hover-effect shadow-lg hover:shadow-xl"
                onClick={onAutoAssess}
              >
                <MessageCircle className="h-5 w-5" />
                Conversational Assessment
              </Button>
              <Button 
                className="btn-primary btn-hover-effect flex items-center gap-2 shadow-brand"
              >
                <PenLine className="h-5 w-5" />
                Guided Assessment
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div
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
