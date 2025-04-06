
import { useState } from "react";
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section */}
        <HeroSection 
          onStartGuidedAssessment={handleStartGuidedAssessment}
          onStartConversationalAssessment={startConversationalAssessment}
        />
        
        {/* Assessment section - moved up before dashboard */}
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
        
        {/* Dashboard section - only show when there are completed assessments */}
        {completedAssessments.length > 0 && (
          <DashboardSection 
            completedAssessments={completedAssessments}
            assessmentTypes={assessmentTypes}
            onSelectAssessment={handleSelectAssessment}
          />
        )}
        
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
