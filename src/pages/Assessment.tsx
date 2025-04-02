
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AssessmentHeader from "@/components/assessment/AssessmentHeader";
import AssessmentTypes from "@/components/assessment/AssessmentTypes";
import AssessmentForm from "@/components/assessment/AssessmentForm";
import AssessmentResult from "@/components/assessment/AssessmentResult";
import { Toaster } from "@/components/ui/sonner";

// The main assessment steps
const STEPS = {
  SELECT: 'select',
  FORM: 'form',
  RESULT: 'result'
};

const Assessment = () => {
  const [currentStep, setCurrentStep] = useState(STEPS.SELECT);
  const [selectedAssessment, setSelectedAssessment] = useState<string | null>(null);
  const [assessmentResult, setAssessmentResult] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectAssessment = (type: string) => {
    setSelectedAssessment(type);
    setCurrentStep(STEPS.FORM);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmitAssessment = async (formData: any) => {
    setIsLoading(true);
    
    try {
      // In a real implementation, this would call an API with the Azure OpenAI or Claude keys
      // For now, we'll simulate a response after a delay
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      const mockResults = {
        score: Math.floor(Math.random() * 100),
        strengths: [
          "Strong leadership alignment with strategic goals",
          "Clear understanding of market positioning",
          "Well-defined operational processes"
        ],
        opportunities: [
          "Enhanced data analytics capabilities",
          "Optimized cross-functional collaboration",
          "Strategic AI implementation roadmap"
        ],
        recommendations: [
          "Develop a comprehensive AI integration strategy",
          "Establish a cross-departmental AI task force",
          "Implement targeted AI training programs"
        ]
      };
      
      setAssessmentResult(mockResults);
      setCurrentStep(STEPS.RESULT);
    } catch (error) {
      console.error("Error processing assessment:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const resetAssessment = () => {
    setCurrentStep(STEPS.SELECT);
    setSelectedAssessment(null);
    setAssessmentResult(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AssessmentHeader currentStep={currentStep} />
        
        {currentStep === STEPS.SELECT && (
          <AssessmentTypes onSelect={handleSelectAssessment} />
        )}
        
        {currentStep === STEPS.FORM && selectedAssessment && (
          <AssessmentForm 
            assessmentType={selectedAssessment} 
            onSubmit={handleSubmitAssessment}
            isLoading={isLoading}
            onBack={resetAssessment}
          />
        )}
        
        {currentStep === STEPS.RESULT && assessmentResult && (
          <AssessmentResult 
            result={assessmentResult} 
            assessmentType={selectedAssessment!}
            onStartNew={resetAssessment}
          />
        )}
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
};

export default Assessment;
