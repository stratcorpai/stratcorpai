
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { 
  generateRelevantStrengths, 
  generateRelevantOpportunities, 
  generateRelevantRecommendations, 
  calculateAssessmentScore 
} from "@/utils/assessmentUtils";

// Import our refactored components
import HeroSection from "@/components/assessment/HeroSection";
import DashboardSection from "@/components/assessment/DashboardSection";
import AssessmentSection from "@/components/assessment/AssessmentSection";
import ChatSection from "@/components/assessment/ChatSection";

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
  const [scrollToChat, setScrollToChat] = useState(false);
  
  // Assessment types array
  const assessmentTypes = ["ai-readiness", "board-effectiveness", "business-strategy", "organizational-structure", "digital-transformation", "executive-alignment"];
  
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
    
    // Handle scrolling to chat if triggered
    if (scrollToChat) {
      const chatSection = document.getElementById('conversational-assessment');
      if (chatSection) {
        chatSection.scrollIntoView({ behavior: 'smooth' });
        setScrollToChat(false);
      }
    }
  }, [currentStep, scrollToChat]);

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
      // Simulate API call with a delay
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      const strengths = generateRelevantStrengths(selectedAssessment, formData);
      const opportunities = generateRelevantOpportunities(selectedAssessment, formData);
      const recommendations = generateRelevantRecommendations(selectedAssessment, formData);
      const score = calculateAssessmentScore(formData);
      
      const results = {
        score,
        strengths,
        opportunities,
        recommendations,
        completedAt: new Date().toISOString()
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
  };
  
  const startConversationalAssessment = () => {
    setScrollToChat(true);
  };
  
  const handleStartGuidedAssessment = () => {
    document.getElementById('assessment-types')?.scrollIntoView({ behavior: 'smooth' });
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section */}
        <HeroSection 
          onStartGuidedAssessment={handleStartGuidedAssessment}
          onStartConversationalAssessment={startConversationalAssessment}
        />
        
        {/* Dashboard section */}
        <DashboardSection 
          completedAssessments={completedAssessments}
          assessmentTypes={assessmentTypes}
          onSelectAssessment={handleSelectAssessment}
        />
        
        {/* Assessment section */}
        <AssessmentSection 
          currentStep={currentStep}
          selectedAssessment={selectedAssessment}
          assessmentResult={assessmentResult}
          completedAssessments={completedAssessments}
          isLoading={isLoading}
          onSelectAssessment={handleSelectAssessment}
          onSubmitAssessment={handleSubmitAssessment}
          onResetAssessment={resetAssessment}
        />
        
        {/* Chat section */}
        <ChatSection 
          completedAssessments={completedAssessments}
          assessmentTypes={assessmentTypes}
          onCompleteAutoAssessment={handleCompleteAutoAssessment}
        />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
};

export default Assessment;
