
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AssessmentHeader from "@/components/assessment/AssessmentHeader";
import AssessmentSelector from "@/components/assessment/AssessmentSelector";
import AssessmentForm from "@/components/assessment/AssessmentForm";
import AssessmentResult from "@/components/assessment/AssessmentResult";
import AssessmentChat from "@/components/assessment/AssessmentChat";
import ChatButton from "@/components/assessment/ChatButton";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { generateRelevantStrengths, generateRelevantOpportunities, generateRelevantRecommendations, calculateAssessmentScore } from "@/utils/assessmentUtils";

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
  const [completedAssessments, setCompletedAssessments] = useState<string[]>([]);
  const [showChat, setShowChat] = useState(false);
  const [autoAssessMode, setAutoAssessMode] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);
  
  // Check for completed assessments on mount
  useEffect(() => {
    const savedResults = JSON.parse(localStorage.getItem('stratifiedAssessments') || '{}');
    const completed = Object.keys(savedResults);
    setCompletedAssessments(completed);
    
    // If we have a saved assessment, and we're on the SELECT step, check if we
    // should restore from localStorage
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
            // Clear the last assessment if user doesn't want to restore
            localStorage.removeItem('stratifiedLastAssessment');
          }
        }
      }
    }
    
    // Show chat if we have at least 1 completed assessment
    if (completed.length > 0) {
      setShowChat(true);
    }
  }, [currentStep]);

  const handleSelectAssessment = (type: string) => {
    setSelectedAssessment(type);
    
    // Check if this assessment was already completed
    const savedResults = JSON.parse(localStorage.getItem('stratifiedAssessments') || '{}');
    if (savedResults[type]) {
      // Show results immediately if already completed
      setAssessmentResult(savedResults[type]);
      setCurrentStep(STEPS.RESULT);
    } else {
      // Go to form if not completed
      setCurrentStep(STEPS.FORM);
    }
    
    localStorage.setItem('stratifiedLastAssessment', type);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmitAssessment = async (formData: any) => {
    setIsLoading(true);
    
    try {
      // In a real implementation, this would call the Azure OpenAI or Claude API
      // Here we'll simulate that with a more sophisticated response generation
      
      // Get assessment type to customize the response
      const assessmentTypeFormatted = selectedAssessment?.replace(/-/g, ' ') || 'general';
      
      // We'd have prompts for each assessment type in a real implementation
      // For now, simulate an API call with a delay
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Generate relevant strengths based on form data
      const strengths = generateRelevantStrengths(selectedAssessment, formData);
      
      // Generate relevant opportunities based on form data
      const opportunities = generateRelevantOpportunities(selectedAssessment, formData);
      
      // Generate relevant recommendations based on form data
      const recommendations = generateRelevantRecommendations(selectedAssessment, formData);
      
      // Calculate a weighted score based on responses
      const score = calculateAssessmentScore(formData);
      
      const results = {
        score,
        strengths,
        opportunities,
        recommendations
      };
      
      // Save to localStorage
      const savedResults = JSON.parse(localStorage.getItem('stratifiedAssessments') || '{}');
      savedResults[selectedAssessment!] = results;
      localStorage.setItem('stratifiedAssessments', JSON.stringify(savedResults));
      localStorage.setItem('stratifiedLastAssessment', selectedAssessment!);
      
      setAssessmentResult(results);
      setCurrentStep(STEPS.RESULT);
      
      // Update completed assessments
      const allCompleted = [...completedAssessments];
      if (!allCompleted.includes(selectedAssessment!)) {
        allCompleted.push(selectedAssessment!);
        setCompletedAssessments(allCompleted);
      }
      
      // Show toast based on completion status
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
      
      // Show chat after completing at least one assessment
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
  
  const scrollToChat = () => {
    chatRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const startAutoAssessment = () => {
    setAutoAssessMode(true);
    setShowChat(true);
    
    setTimeout(() => {
      scrollToChat();
      toast.success("Auto-assessment mode activated. The AI will now guide you through a conversational assessment.");
    }, 100);
  };

  const handleCompleteAutoAssessment = (type: string, result: any) => {
    // Save auto-generated assessment results
    const savedResults = JSON.parse(localStorage.getItem('stratifiedAssessments') || '{}');
    savedResults[type] = result;
    localStorage.setItem('stratifiedAssessments', JSON.stringify(savedResults));
    
    // Update completed assessments list
    if (!completedAssessments.includes(type)) {
      setCompletedAssessments([...completedAssessments, type]);
    }
    
    toast.success(`${type.replace(/-/g, ' ')} assessment completed via conversation!`);
  };

  const assessmentTypes = ["ai-readiness", "board-effectiveness", "business-strategy", "organizational-structure", "digital-transformation", "executive-alignment"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AssessmentHeader currentStep={currentStep} />
        
        {currentStep === STEPS.SELECT && (
          <AssessmentSelector
            completedAssessments={completedAssessments}
            onSelect={handleSelectAssessment}
            onAutoAssess={startAutoAssessment}
          />
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
            
        {showChat && (
          <div ref={chatRef}>
            <AssessmentChat 
              autoAssessMode={autoAssessMode} 
              completedCount={completedAssessments.length}
              assessmentTypes={assessmentTypes}
              onCompleteAutoAssessment={handleCompleteAutoAssessment}
            />
          </div>
        )}
        
        {showChat && currentStep !== STEPS.SELECT && (
          <ChatButton onClick={scrollToChat} />
        )}
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
};

export default Assessment;
