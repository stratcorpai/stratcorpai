
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AssessmentHeader from "@/components/assessment/AssessmentHeader";
import AssessmentTypes from "@/components/assessment/AssessmentTypes";
import AssessmentForm from "@/components/assessment/AssessmentForm";
import AssessmentResult from "@/components/assessment/AssessmentResult";
import IntegratedDashboard from "@/components/assessment/dashboard/IntegratedDashboard";
import CollapsibleChatPanel from "@/components/assessment/chat/CollapsibleChatPanel";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { LineChart, PenLine, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  generateRelevantStrengths, 
  generateRelevantOpportunities, 
  generateRelevantRecommendations, 
  calculateAssessmentScore 
} from "@/utils/assessmentUtils";

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
  const [showDashboard, setShowDashboard] = useState(true);
  const [showConversationalAssessment, setShowConversationalAssessment] = useState(false);
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
        setShowConversationalAssessment(true);
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
      const assessmentTypeFormatted = selectedAssessment?.replace(/-/g, ' ') || 'general';
      
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
        {/* Hero/Header Section with Assessment Method Choice */}
        <section className="bg-stratified py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <motion.svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 100 100" 
              fill="none" 
              preserveAspectRatio="none"
              animate={{ 
                scale: [1, 1.02, 1],
                opacity: [0.1, 0.15, 0.1] 
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </motion.svg>
          </div>
          
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-stratified/80 to-transparent backdrop-blur-sm"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-stratified/80 to-transparent backdrop-blur-sm"></div>
          
          <div className="container-custom relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <motion.h1 
                className="text-white mb-4 drop-shadow-md text-3xl md:text-5xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/95 to-white/85">
                  Executive Assessment Center
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-medium tracking-wide"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Gain strategic insights through our data-driven assessment tools
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button 
                  className="bg-white hover:bg-white/90 text-stratified flex items-center gap-2 px-6 py-5 text-base rounded-full shadow-lg"
                  onClick={() => window.scrollTo({ top: document.getElementById('assessment-types')?.offsetTop || 0, behavior: 'smooth' })}
                >
                  <PenLine className="h-4 w-4" />
                  Guided Assessment
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-transparent hover:bg-white/10 text-white border-white/30 flex items-center gap-2 px-6 py-5 text-base rounded-full shadow-lg"
                  onClick={startConversationalAssessment}
                >
                  <MessageCircle className="h-4 w-4" />
                  Conversational Assessment
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Progress Overview */}
        {completedAssessments.length > 0 && currentStep === STEPS.SELECT && (
          <Accordion 
            type="single" 
            defaultValue="dashboard" 
            collapsible
            className="border-y border-gray-200"
          >
            <AccordionItem value="dashboard" className="border-none">
              <AccordionTrigger className="bg-gray-50 py-3 px-4 hover:no-underline">
                <span className="flex items-center text-lg font-semibold text-gray-800">
                  <LineChart className="mr-2 h-5 w-5 text-stratified" />
                  Assessment Dashboard
                </span>
              </AccordionTrigger>
              <AccordionContent className="bg-gray-50 py-2 px-0">
                <div className="py-2">
                  <IntegratedDashboard 
                    completedAssessments={completedAssessments}
                    assessmentTypes={assessmentTypes}
                    onSelectAssessment={handleSelectAssessment}
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
        
        {/* Main Content Section */}
        {currentStep === STEPS.SELECT && (
          <div id="assessment-types" className="py-12">
            <div className="container-custom">
              <h2 className="text-2xl font-bold mb-8 text-gray-800">Select an Assessment</h2>
              <AssessmentTypes 
                onSelect={handleSelectAssessment} 
                completedAssessments={completedAssessments} 
              />
            </div>
          </div>
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
        
        {/* Conversational Assessment Section - Accordion Style */}
        <section 
          id="conversational-assessment" 
          className="border-t border-gray-200 mb-8"
        >
          <div className="container-custom max-w-4xl py-6">
            <CollapsibleChatPanel
              completedCount={completedAssessments.length}
              assessmentTypes={assessmentTypes}
              onCompleteAutoAssessment={handleCompleteAutoAssessment}
            />
          </div>
        </section>
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
};

export default Assessment;
