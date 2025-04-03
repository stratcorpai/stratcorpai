
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AssessmentHeader from "@/components/assessment/AssessmentHeader";
import AssessmentTypes from "@/components/assessment/AssessmentTypes";
import AssessmentForm from "@/components/assessment/AssessmentForm";
import AssessmentResult from "@/components/assessment/AssessmentResult";
import AssessmentChat from "@/components/assessment/AssessmentChat";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { MessageCircle, PenLine } from "lucide-react";
import { motion } from "framer-motion";

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
  
  // Function to generate relevant strengths based on assessment type and responses
  const generateRelevantStrengths = (assessmentType: string | null, formData: any) => {
    // In a real implementation, this would use the Azure OpenAI or Claude API
    // Here, we'll return contextually relevant strengths based on the assessment type
    
    const strengthsByType: Record<string, string[]> = {
      "ai-readiness": [
        "Strong leadership commitment to AI transformation",
        "Good data governance foundations in place",
        "Clear alignment between AI initiatives and business objectives",
        "Existing pockets of AI expertise across key departments"
      ],
      "board-effectiveness": [
        "Diverse range of relevant expertise on the board",
        "Strong strategic oversight and vision",
        "Effective governance and risk management protocols",
        "Productive working relationship with executive team"
      ],
      "business-strategy": [
        "Clear articulation of strategic priorities",
        "Strong market position in core segments",
        "Effective competitive differentiation",
        "Alignment between strategy and organizational capabilities"
      ],
      "organizational-structure": [
        "Adaptable structure that evolves with strategic needs",
        "Clear accountability and decision rights",
        "Effective cross-functional collaboration mechanisms",
        "Appropriate balance of centralization and decentralization"
      ],
      "digital-transformation": [
        "Strong digital vision aligned to business strategy",
        "Effective technology modernization roadmap",
        "Good digital skills across key functions",
        "Customer-centric approach to digital initiatives"
      ],
      "executive-alignment": [
        "Strong alignment on strategic priorities",
        "Effective executive decision-making processes",
        "Collaborative leadership team dynamics",
        "Clear cascade of priorities from executive team"
      ]
    };
    
    // Select 3 relevant strengths for the assessment type
    return (strengthsByType[assessmentType || ""] || []).slice(0, 3);
  };
  
  // Function to generate relevant opportunities based on assessment type and responses
  const generateRelevantOpportunities = (assessmentType: string | null, formData: any) => {
    // Similar to strengths, but for improvement opportunities
    
    const opportunitiesByType: Record<string, string[]> = {
      "ai-readiness": [
        "Develop more comprehensive data strategy for AI applications",
        "Strengthen cross-functional AI governance",
        "Build broader AI literacy across the organization",
        "Create more robust AI experimentation frameworks"
      ],
      "board-effectiveness": [
        "Enhance strategic foresight capabilities",
        "Improve board succession planning process",
        "Strengthen technology expertise representation",
        "Develop more robust board evaluation practices"
      ],
      "business-strategy": [
        "Accelerate response to emerging market opportunities",
        "Strengthen strategic communication throughout organization",
        "Develop more agile strategic planning processes",
        "Enhance strategic resource allocation mechanisms"
      ],
      "organizational-structure": [
        "Reduce organizational silos that impede collaboration",
        "Streamline decision-making processes for greater agility",
        "Strengthen matrix management capabilities",
        "Align incentive structures with collaborative behaviors"
      ],
      "digital-transformation": [
        "Accelerate legacy system modernization",
        "Develop comprehensive digital talent strategy",
        "Strengthen digital change management approach",
        "Improve digital metrics and measurement frameworks"
      ],
      "executive-alignment": [
        "Create more robust strategic alignment mechanisms",
        "Strengthen collective accountability at executive level",
        "Enhance executive team psychological safety",
        "Improve strategic cascading throughout organization"
      ]
    };
    
    // Select 3 relevant opportunities
    return (opportunitiesByType[assessmentType || ""] || []).slice(0, 3);
  };
  
  // Function to generate relevant recommendations based on assessment type and responses
  const generateRelevantRecommendations = (assessmentType: string | null, formData: any) => {
    // Similar to strengths and opportunities, but for actionable recommendations
    
    const recommendationsByType: Record<string, string[]> = {
      "ai-readiness": [
        "Establish a cross-functional AI governance council with clear mandate and authority",
        "Develop a comprehensive data strategy focused on supporting AI applications",
        "Implement an AI knowledge development program for key leadership",
        "Create an AI pilot framework with clear success metrics and scaling criteria"
      ],
      "board-effectiveness": [
        "Conduct a comprehensive board skills assessment against future strategic needs",
        "Implement quarterly strategic deep-dive sessions separate from regular board meetings",
        "Establish a more structured board evaluation process with external facilitation",
        "Create a board technology committee to strengthen digital oversight"
      ],
      "business-strategy": [
        "Implement quarterly strategy review sessions with explicit assumption testing",
        "Develop a strategic narrative that can be effectively communicated at all levels",
        "Create a strategic initiatives dashboard with clear success metrics",
        "Establish cross-functional strategy execution teams for key priorities"
      ],
      "organizational-structure": [
        "Conduct a decision mapping exercise to identify and address bottlenecks",
        "Implement formal cross-functional teaming structures for key initiatives",
        "Review incentive systems to ensure alignment with collaborative behaviors",
        "Establish clear organizational design principles aligned to strategic priorities"
      ],
      "digital-transformation": [
        "Develop an integrated digital transformation roadmap with clear sequencing",
        "Create a digital skills academy to address capability gaps systematically",
        "Implement digital transformation metrics that balance process and outcomes",
        "Establish a digital governance framework that enables rather than controls"
      ],
      "executive-alignment": [
        "Conduct a strategic alignment session with structured follow-up mechanisms",
        "Implement a collective leadership development program for the executive team",
        "Establish clear decision protocols for different types of executive decisions",
        "Create a cascading mechanism to translate executive priorities throughout organization"
      ]
    };
    
    // Select 3 relevant recommendations
    return (recommendationsByType[assessmentType || ""] || []).slice(0, 3);
  };
  
  // Function to calculate a weighted score based on assessment responses
  const calculateAssessmentScore = (formData: any) => {
    // In a real implementation, this would use a sophisticated scoring algorithm
    // Here we'll create a somewhat random but plausible score
    
    // Calculate a base score between 40-80 to avoid extremes
    const baseScore = 40 + Math.floor(Math.random() * 40);
    
    // Add some variability based on the number of detailed responses
    const textResponses = Object.values(formData).filter(v => 
      typeof v === 'string' && v.length > 50
    );
    
    // More detailed responses result in a slightly higher score
    const detailBonus = Math.min(textResponses.length * 2, 10);
    
    // Calculate final score, capped at 100
    return Math.min(baseScore + detailBonus, 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AssessmentHeader currentStep={currentStep} />
        
        {currentStep === STEPS.SELECT && (
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
                      onClick={startAutoAssessment}
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
              onSelect={handleSelectAssessment} 
              completedAssessments={completedAssessments} 
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
            
        {showChat && (
          <div ref={chatRef}>
            <AssessmentChat 
              autoAssessMode={autoAssessMode} 
              completedCount={completedAssessments.length}
              assessmentTypes={["ai-readiness", "board-effectiveness", "business-strategy", "organizational-structure", "digital-transformation", "executive-alignment"]}
              onCompleteAutoAssessment={(type, result) => {
                // Save auto-generated assessment results
                const savedResults = JSON.parse(localStorage.getItem('stratifiedAssessments') || '{}');
                savedResults[type] = result;
                localStorage.setItem('stratifiedAssessments', JSON.stringify(savedResults));
                
                // Update completed assessments list
                if (!completedAssessments.includes(type)) {
                  setCompletedAssessments([...completedAssessments, type]);
                }
                
                toast.success(`${type.replace(/-/g, ' ')} assessment completed via conversation!`);
              }}
            />
          </div>
        )}
        
        {showChat && currentStep !== STEPS.SELECT && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-6 right-6 z-10"
          >
            <Button 
              onClick={scrollToChat}
              className="bg-stratified hover:bg-stratified-dark text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
            >
              <MessageCircle className="h-6 w-6" />
            </Button>
          </motion.div>
        )}
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
};

export default Assessment;
