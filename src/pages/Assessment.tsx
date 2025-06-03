
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

// Import refactored components
import HeroSection from "@/components/assessment/HeroSection";
import DashboardSection from "@/components/assessment/DashboardSection";
import AssessmentSection from "@/components/assessment/AssessmentSection";
import ChatSection from "@/components/assessment/ChatSection";

// Import custom hook
import { useAssessment } from "@/hooks/use-assessment";

const Assessment = () => {
  const {
    STEPS,
    currentStep,
    selectedAssessment,
    assessmentResult,
    isLoading,
    completedAssessments,
    assessmentTypes,
    handleSelectAssessment,
    handleSubmitAssessment,
    resetAssessment,
    startConversationalAssessment,
    handleStartGuidedAssessment,
    handleCompleteAutoAssessment
  } = useAssessment();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <Navbar />
      <main className="flex-grow">
        {/* Enhanced Hero section */}
        <div className="bg-white shadow-lg border-b border-gray-200">
          <HeroSection 
            onStartGuidedAssessment={handleStartGuidedAssessment}
            onStartConversationalAssessment={startConversationalAssessment}
          />
        </div>
        
        {/* Assessment section with improved styling */}
        <div className="bg-white">
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
        </div>
        
        {/* Dashboard section - only show when there are completed assessments */}
        {completedAssessments.length > 0 && (
          <div className="bg-gray-50 border-t border-gray-200">
            <DashboardSection 
              completedAssessments={completedAssessments}
              assessmentTypes={assessmentTypes}
              onSelectAssessment={handleSelectAssessment}
            />
          </div>
        )}
        
        {/* Chat section */}
        <div className="bg-white border-t border-gray-200">
          <ChatSection 
            completedAssessments={completedAssessments}
            assessmentTypes={assessmentTypes}
            onCompleteAutoAssessment={handleCompleteAutoAssessment}
          />
        </div>
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
};

export default Assessment;
