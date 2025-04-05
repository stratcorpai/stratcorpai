
import React from 'react';
import AssessmentTypes from './AssessmentTypes';
import AssessmentForm from './AssessmentForm';
import AssessmentResult from './AssessmentResult';

type AssessmentSectionProps = {
  currentStep: string;
  selectedAssessment: string | null;
  assessmentResult: any | null;
  completedAssessments: string[];
  isLoading: boolean;
  onSelectAssessment: (type: string) => void;
  onSubmitAssessment: (formData: any) => void;
  onResetAssessment: () => void;
};

const STEPS = {
  SELECT: 'select',
  FORM: 'form',
  RESULT: 'result'
};

const AssessmentSection: React.FC<AssessmentSectionProps> = ({
  currentStep,
  selectedAssessment,
  assessmentResult,
  completedAssessments,
  isLoading,
  onSelectAssessment,
  onSubmitAssessment,
  onResetAssessment,
}) => {
  if (currentStep === STEPS.SELECT) {
    return (
      <div id="assessment-types" className="py-12">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">Select an Assessment</h2>
          <AssessmentTypes 
            onSelect={onSelectAssessment} 
            completedAssessments={completedAssessments} 
          />
        </div>
      </div>
    );
  }
  
  if (currentStep === STEPS.FORM && selectedAssessment) {
    return (
      <AssessmentForm 
        assessmentType={selectedAssessment} 
        onSubmit={onSubmitAssessment}
        isLoading={isLoading}
        onBack={onResetAssessment}
      />
    );
  }
  
  if (currentStep === STEPS.RESULT && assessmentResult && selectedAssessment) {
    return (
      <AssessmentResult 
        result={assessmentResult} 
        assessmentType={selectedAssessment}
        onStartNew={onResetAssessment}
      />
    );
  }
  
  return null;
};

export default AssessmentSection;
