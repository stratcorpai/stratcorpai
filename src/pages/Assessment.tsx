import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AssessmentHeader from "@/components/assessment/AssessmentHeader";
import AssessmentSelector from "@/components/assessment/AssessmentSelector";
import AssessmentForm from "@/components/assessment/AssessmentForm";
import AssessmentResult from "@/components/assessment/AssessmentResult";
import AssessmentChat from "@/components/assessment/AssessmentChat";
import AssessmentDashboard from "@/components/assessment/dashboard/AssessmentDashboard";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { MessageCircle, X } from "lucide-react";
import { generateRelevantStrengths, generateRelevantOpportunities, generateRelevantRecommendations, calculateAssessmentScore } from "@/utils/assessmentUtils";

const STEPS = {
  SELECT: 'select',
  FORM: 'form',
  RESULT: 'result',
  DASHBOARD: 'dashboard'
};

const Assessment = () => {
  const [currentStep, setCurrentStep] = useState(STEPS.SELECT);
  const [selectedAssessment, setSelectedAssessment] = useState<string | null>(null);
  const [assessmentResult, setAssessmentResult] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [completedAssessments, setCompletedAssessments] = useState<string[]>([]);
  const [showChat, setShowChat] = useState(false);
  const [autoAssessMode, setAutoAssessMode] = useState(false);
  
  useEffect(() => {
    const savedResults = JSON.parse(localStorage.getItem('stratifiedAssessments') || '{}');
    const completed = Object.keys(savedResults);
    setCompletedAssessments(completed);
    
    if (currentStep === STEPS.SELECT) {
      const lastAssessmentType = localStorage.getItem('stratifiedLastAssessment');
      if (lastAssessmentType) {
        const lastResult = savedResults[lastAssessmentType];
        if (lastResult) {
          const shouldRestore = window.confirm(
            `You have a saved assessment for ${lastAssessmentType.replace(/-/g, ' ')}. Would you like to view its results?`
          );
          
          if (shouldRestore) {
            setSelectedAssessment(lastAssessmentType);
            setAssessmentResult(lastResult);
            setCurrentStep(STEPS.RESULT);
          } else {
            localStorage.removeItem('stratifiedLastAssessment');
          }
        }
      }
    }
    
    if (completed.length > 0) {
      setShowChat(true);
    }
  }, [currentStep]);

  const handleSelectAssessment = (type: string) => {
    setSelectedAssessment(type);
    
    const savedResults = JSON.parse(localStorage.getItem('stratifiedAssessments') || '{}');
    if (savedResults[type]) {
      setAssessmentResult(savedResults[type]);
      setCurrentStep(STEPS.RESULT);
    } else {
      setCurrentStep(STEPS.FORM);
    }
    
    localStorage.setItem('stratifiedLastAssessment', type);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmitAssessment = async (formData: any) => {
    setIsLoading(true);
    
    try {
      const assessmentTypeFormatted = selectedAssessment?.replace(/-/g, ' ') || 'general';
      
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      const strengths = generateRelevantStrengths(selectedAssessment, formData);
      const opportunities = generateRelevantOpportunities(selectedAssessment, formData);
      const recommendations = generateRelevantRecommendations(selectedAssessment, formData);
      const score = calculateAssessmentScore(formData);
      
      const results = {
        score,
        strengths,
        opportunities,
        recommendations
      };
      
      const savedResults = JSON.parse(localStorage.getItem('stratifiedAssessments') || '{}');
      savedResults[selectedAssessment!] = results;
      localStorage.setItem('stratifiedAssessments', JSON.stringify(savedResults));
      localStorage.setItem('stratifiedLastAssessment', selectedAssessment!);
      
      setAssessmentResult(results);
      setCurrentStep(STEPS.RESULT);
      
      const allCompleted = [...completedAssessments];
      if (!allCompleted.includes(selectedAssessment!)) {
        allCompleted.push(selectedAssessment!);
        setCompletedAssessments(allCompleted);
      }
      
      if (allCompleted.length === 6 && completedAssessments.length < 6) {
        toast.success(
          "You've completed all assessments! The AI chat assistant has been fully unlocked.",
          { duration: 6000 }
        );
      } else if (allCompleted.length > completedAssessments.length) {
        toast.success(
          `${selectedAssessment!.replace(/-/g, ' ')} assessment completed! ${6 - allCompleted.length} more to unlock all AI features.`,
          { duration: 4000 }
        );
      }
      
      setShowChat(true);
    } catch (error) {
      console.error("Error processing assessment:", error);
      toast.error("An error occurred while processing your assessment");
    } finally {
      setIsLoading(false);
    }
  };

  const resetAssessment = () => {
    setCurrentStep(STEPS.SELECT);
    setSelectedAssessment(null);
    setAssessmentResult(null);
    setAutoAssessMode(false);
  };
  
  const startAutoAssessment = () => {
    setAutoAssessMode(true);
    setShowChat(true);
    
    setTimeout(() => {
      toast.success("Auto-assessment mode activated. The AI will now guide you through a conversational assessment.");
    }, 100);
  };

  const handleCompleteAutoAssessment = (type: string, result: any) => {
    const savedResults = JSON.parse(localStorage.getItem('stratifiedAssessments') || '{}');
    savedResults[type] = result;
    localStorage.setItem('stratifiedAssessments', JSON.stringify(savedResults));
    
    if (!completedAssessments.includes(type)) {
      setCompletedAssessments([...completedAssessments, type]);
    }
    
    toast.success(`${type.replace(/-/g, ' ')} assessment completed via conversation!`);
  };

  const viewDashboard = () => {
    setCurrentStep(STEPS.DASHBOARD);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const assessmentTypes = ["ai-readiness", "board-effectiveness", "business-strategy", "organizational-structure", "digital-transformation", "executive-alignment"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AssessmentHeader currentStep={currentStep} />
        
        {currentStep === STEPS.SELECT && (
          <>
            {completedAssessments.length > 0 && (
              <div className="bg-stratified/5 py-4 border-y">
                <div className="container-custom">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-medium">
                        {completedAssessments.length === assessmentTypes.length
                          ? "All assessments completed!"
                          : `${completedAssessments.length} of ${assessmentTypes.length} assessments completed`}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {completedAssessments.length === assessmentTypes.length
                          ? "View your dashboard for comprehensive insights."
                          : "Continue to complete the remaining assessments."}
                      </p>
                    </div>
                    <button
                      onClick={viewDashboard}
                      className="bg-stratified hover:bg-stratified-dark text-white px-4 py-2 rounded-md"
                    >
                      View Dashboard
                    </button>
                  </div>
                </div>
              </div>
            )}
            <AssessmentSelector
              completedAssessments={completedAssessments}
              onSelect={handleSelectAssessment}
              onAutoAssess={startAutoAssessment}
            />
          </>
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
        
        {currentStep === STEPS.DASHBOARD && (
          <AssessmentDashboard
            completedAssessments={completedAssessments}
            assessmentTypes={assessmentTypes}
            onSelectAssessment={handleSelectAssessment}
          />
        )}
        
        {autoAssessMode && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg w-full max-w-2xl h-[80vh] flex flex-col">
              <div className="bg-stratified text-white p-3 flex justify-between items-center">
                <span className="font-medium flex items-center">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Conversational Assessment
                </span>
                <button onClick={() => setAutoAssessMode(false)} className="hover:bg-stratified-dark p-1 rounded">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex-grow overflow-hidden">
                <AssessmentChat 
                  autoAssessMode={true}
                  completedCount={completedAssessments.length}
                  assessmentTypes={assessmentTypes}
                  onCompleteAutoAssessment={handleCompleteAutoAssessment}
                />
              </div>
            </div>
          </div>
        )}
        
        {showChat && !autoAssessMode && currentStep !== STEPS.FORM && (
          <div className="mb-4 mt-8">
            <AssessmentChat 
              completedCount={completedAssessments.length}
              assessmentTypes={assessmentTypes}
              onCompleteAutoAssessment={handleCompleteAutoAssessment}
            />
          </div>
        )}
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
};

export default Assessment;
