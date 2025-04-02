
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Submit the form if we're on the last section
      onSubmit(formData);
    }
  };

  const handlePrevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onBack();
    }
  };

  const progressPercentage = ((currentSection + 1) / sections.length) * 100;

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom max-w-4xl">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="ghost"
              onClick={handlePrevSection}
              className="flex items-center text-gray-600"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <div className="text-sm text-gray-500">
              Section {currentSection + 1} of {sections.length}
            </div>
          </div>
          
          <Progress value={progressPercentage} className="h-2" />
        </div>

        <Card className="border shadow-lg">
          <CardContent className="p-6">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-stratified mb-6">
                {sections[currentSection].title}
              </h3>

              <div className="space-y-8">
                {sections[currentSection].questions.map((question) => (
                  <div key={question.id} className="border-b border-gray-100 pb-6 last:border-0">
                    <h4 className="text-lg font-medium text-gray-800 mb-3">
                      {question.text}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">{question.description}</p>
                    
                    {question.type === "text" && (
                      <Textarea
                        placeholder="Enter your answer..."
                        value={formData[question.id] || ""}
                        onChange={(e) => handleInputChange(question.id, e.target.value)}
                        className="min-h-24"
                      />
                    )}
                    
                    {question.type === "radio" && (
                      <RadioGroup
                        value={formData[question.id] || ""}
                        onValueChange={(value) => handleInputChange(question.id, value)}
                        className="space-y-3"
                      >
                        {question.options?.map((option) => (
                          <div key={option.value} className="flex items-center space-x-2">
                            <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} />
                            <Label htmlFor={`${question.id}-${option.value}`} className="text-gray-700">
                              {option.label}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-end">
                <Button
                  onClick={handleNextSection}
                  disabled={isLoading}
                  className="bg-stratified hover:bg-stratified-dark text-white px-6"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : currentSection === sections.length - 1 ? (
                    <>
                      Submit Assessment
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    "Next Section"
                  )}
                </Button>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
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
