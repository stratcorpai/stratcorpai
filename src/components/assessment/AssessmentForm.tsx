
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Send, Loader2, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "sonner";
import { generateQuestionsForAssessment } from "@/utils/assessmentQuestions";

type AssessmentFormProps = {
  assessmentType: string;
  onSubmit: (formData: any) => void;
  isLoading: boolean;
  onBack: () => void;
};

const AssessmentForm = ({
  assessmentType,
  onSubmit,
  isLoading,
  onBack
}: AssessmentFormProps) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Generate questions based on assessment type
  const questions = generateQuestionsForAssessment(assessmentType);
  const sections = groupQuestionsBySection(questions);
  
  const handleInputChange = (questionId: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNextSection = () => {
    // Validate that all questions in the current section are answered
    const currentQuestions = sections[currentSection].questions;
    const unansweredQuestions = currentQuestions.filter(q => !formData[q.id]);
    
    if (unansweredQuestions.length > 0) {
      toast.error("Please answer all questions before proceeding");
      return;
    }
    
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
      setCurrentQuestionIndex(0);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Submit the form if we're on the last section
      onSubmit(formData);
    }
  };

  const handlePrevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      setCurrentQuestionIndex(0);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onBack();
    }
  };
  
  const handleNextQuestion = () => {
    const currentSectionQuestions = sections[currentSection].questions;
    if (!formData[currentSectionQuestions[currentQuestionIndex].id]) {
      toast.error("Please answer this question before continuing");
      return;
    }
    
    if (currentQuestionIndex < currentSectionQuestions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      handleNextSection();
    }
  };
  
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    } else if (currentSection > 0) {
      setCurrentSection(prevIndex => prevIndex - 1);
      setCurrentQuestionIndex(sections[currentSection - 1].questions.length - 1);
    } else {
      onBack();
    }
  };

  const currentSectionQuestions = sections[currentSection].questions;
  const currentQuestion = currentSectionQuestions[currentQuestionIndex];
  const totalQuestions = sections.reduce((sum, section) => sum + section.questions.length, 0);
  const completedQuestions = Object.keys(formData).length;
  
  // Calculate overall progress
  const overallQuestionIndex = sections.slice(0, currentSection).reduce(
    (sum, section) => sum + section.questions.length, 
    0
  ) + currentQuestionIndex;
  
  const progressPercentage = (overallQuestionIndex / totalQuestions) * 100;

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom max-w-3xl">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="ghost"
              onClick={handlePrevQuestion}
              className="flex items-center text-gray-600"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <div className="text-sm text-gray-500">
              <span className="font-medium">{sections[currentSection].title}</span> • Question {currentQuestionIndex + 1} of {currentSectionQuestions.length}
            </div>
          </div>
          
          <div className="space-y-2">
            <Progress value={progressPercentage} className="h-2" />
            <div className="flex justify-between text-xs text-gray-500">
              <span>Overall Progress: {completedQuestions}/{totalQuestions} Questions</span>
              <span>Section {currentSection + 1} of {sections.length}</span>
            </div>
          </div>
        </div>

        <Card className="border shadow-lg">
          <CardContent className="p-6 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentSection}-${currentQuestionIndex}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-xl md:text-2xl font-bold text-stratified">
                    {currentQuestion.text}
                  </h3>
                  
                  {currentQuestion.helpText && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-500">
                            <HelpCircle className="h-5 w-5" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p>{currentQuestion.helpText}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <p className="text-gray-600 text-sm md:text-base">
                    {currentQuestion.description}
                  </p>
                </div>
                
                <div className="pt-4">
                  {currentQuestion.type === "text" && (
                    <Textarea
                      placeholder="Enter your answer..."
                      value={formData[currentQuestion.id] || ""}
                      onChange={(e) => handleInputChange(currentQuestion.id, e.target.value)}
                      className="min-h-32 bg-white shadow-sm focus:border-stratified"
                    />
                  )}
                  
                  {currentQuestion.type === "radio" && (
                    <RadioGroup
                      value={formData[currentQuestion.id] || ""}
                      onValueChange={(value) => handleInputChange(currentQuestion.id, value)}
                      className="space-y-4"
                    >
                      {currentQuestion.options?.map((option) => (
                        <div key={option.value} className="flex items-start space-x-3 bg-white p-4 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
                          <RadioGroupItem 
                            value={option.value} 
                            id={`${currentQuestion.id}-${option.value}`}
                            className="mt-1" 
                          />
                          <div className="flex-1">
                            <Label 
                              htmlFor={`${currentQuestion.id}-${option.value}`} 
                              className="text-gray-800 font-medium"
                            >
                              {option.label}
                            </Label>
                            {option.description && (
                              <p className="text-gray-500 text-sm mt-1">{option.description}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </RadioGroup>
                  )}
                </div>

                <div className="pt-4 flex justify-end">
                  <Button
                    onClick={handleNextQuestion}
                    disabled={isLoading}
                    className="bg-stratified hover:bg-stratified-dark text-white px-6"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : isLastQuestionInLastSection() ? (
                      <>
                        Submit Assessment
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    ) : (
                      "Next Question"
                    )}
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </CardContent>
        </Card>
      </div>
    </section>
  );
  
  // Helper function to check if we're on the last question of the last section
  function isLastQuestionInLastSection() {
    return currentSection === sections.length - 1 && 
           currentQuestionIndex === sections[currentSection].questions.length - 1;
  }
};

// Helper function to group questions by section
function groupQuestionsBySection(questions: any[]) {
  const sections: { title: string; questions: any[] }[] = [];
  
  questions.forEach(question => {
    const existingSection = sections.find(s => s.title === question.section);
    
    if (existingSection) {
      existingSection.questions.push(question);
    } else {
      sections.push({
        title: question.section,
        questions: [question]
      });
    }
  });
  
  return sections;
}

export default AssessmentForm;
