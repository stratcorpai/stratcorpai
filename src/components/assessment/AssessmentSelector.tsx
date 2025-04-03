
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, PenLine } from "lucide-react";
import AssessmentTypes from "@/components/assessment/AssessmentTypes";

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
      <div className="bg-white py-6">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-medium text-gray-800">Choose your assessment method</h3>
              <p className="text-gray-600">Get insights about your organization through structured assessments or AI-powered conversation.</p>
            </div>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                className="border-stratified text-stratified hover:bg-stratified/5 flex items-center gap-2"
                onClick={onAutoAssess}
              >
                <MessageCircle className="h-4 w-4" />
                Conversational Assessment
              </Button>
              <Button 
                className="bg-stratified hover:bg-stratified-dark text-white flex items-center gap-2"
              >
                <PenLine className="h-4 w-4" />
                Guided Assessment
              </Button>
            </div>
          </div>
        </div>
      </div>
      <AssessmentTypes 
        onSelect={onSelect} 
        completedAssessments={completedAssessments} 
      />
    </>
  );
};

export default AssessmentSelector;
