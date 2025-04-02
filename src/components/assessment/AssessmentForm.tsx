
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
  const questions = generateQuestions(assessmentType);
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

// Helper functions to generate assessment questions
function generateQuestions(assessmentType: string) {
  // Different questions based on assessment type
  // In a real implementation, these would be more extensive and tailored
  
  const questionsByType: Record<string, any[]> = {
    "ai-readiness": [
      {
        id: "ai-1",
        section: "Current AI Landscape",
        text: "How would you describe your organization's current use of AI technologies?",
        type: "radio",
        options: [
          { value: "none", label: "No AI usage currently" },
          { value: "experimental", label: "Experimental/pilot projects" },
          { value: "targeted", label: "Targeted implementation in specific departments" },
          { value: "strategic", label: "Strategic, organization-wide implementation" },
          { value: "advanced", label: "Advanced AI integration across all operations" }
        ]
      },
      {
        id: "ai-2",
        section: "Current AI Landscape",
        text: "What are the primary challenges your organization faces regarding AI adoption?",
        type: "text"
      },
      {
        id: "ai-3",
        section: "Data & Infrastructure",
        text: "How would you rate your organization's data management practices?",
        type: "radio",
        options: [
          { value: "poor", label: "Poor - No formal data management strategy" },
          { value: "basic", label: "Basic - Some data collection but limited organization" },
          { value: "good", label: "Good - Structured data management in some areas" },
          { value: "very-good", label: "Very Good - Well-organized data across most departments" },
          { value: "excellent", label: "Excellent - Comprehensive data strategy and governance" }
        ]
      },
      {
        id: "ai-4",
        section: "Data & Infrastructure",
        text: "Describe your organization's current technology infrastructure and systems.",
        type: "text"
      },
      {
        id: "ai-5",
        section: "Strategy & Leadership",
        text: "Do your organization's leaders have a clear vision for AI integration?",
        type: "radio",
        options: [
          { value: "no", label: "No vision exists" },
          { value: "limited", label: "Limited vision among some leaders" },
          { value: "developing", label: "Developing vision but not formalized" },
          { value: "clear", label: "Clear vision among most leadership" },
          { value: "comprehensive", label: "Comprehensive, documented strategic vision" }
        ]
      },
      {
        id: "ai-6",
        section: "Strategy & Leadership",
        text: "What specific business outcomes do you hope to achieve through AI implementation?",
        type: "text"
      }
    ],
    "board-effectiveness": [
      {
        id: "board-1",
        section: "Board Composition",
        text: "How diverse is your board in terms of skills, backgrounds, and experiences?",
        type: "radio",
        options: [
          { value: "not-diverse", label: "Not diverse" },
          { value: "somewhat-diverse", label: "Somewhat diverse" },
          { value: "moderately-diverse", label: "Moderately diverse" },
          { value: "very-diverse", label: "Very diverse" },
          { value: "extremely-diverse", label: "Extremely diverse" }
        ]
      },
      // Add more questions for this assessment type
    ],
    // Add questions for other assessment types
  };
  
  // Default questions if the specific assessment type doesn't have custom questions
  const defaultQuestions = [
    {
      id: "general-1",
      section: "Organization Overview",
      text: "Describe your organization's size, industry, and primary business activities.",
      type: "text"
    },
    {
      id: "general-2",
      section: "Organization Overview",
      text: "What are your organization's primary strategic objectives for the next 1-3 years?",
      type: "text"
    },
    {
      id: "general-3",
      section: "Current Challenges",
      text: "What are the biggest challenges your organization is currently facing?",
      type: "text"
    },
    {
      id: "general-4",
      section: "Current Challenges",
      text: "How would you rate your organization's ability to adapt to change?",
      type: "radio",
      options: [
        { value: "poor", label: "Poor" },
        { value: "fair", label: "Fair" },
        { value: "good", label: "Good" },
        { value: "very-good", label: "Very Good" },
        { value: "excellent", label: "Excellent" }
      ]
    },
    {
      id: "general-5",
      section: "Future Outlook",
      text: "What specific outcomes do you hope to achieve from this assessment?",
      type: "text"
    },
    {
      id: "general-6",
      section: "Future Outlook",
      text: "How would you rate your organization's overall performance relative to your industry?",
      type: "radio",
      options: [
        { value: "lagging", label: "Significantly lagging behind" },
        { value: "below-average", label: "Below average" },
        { value: "average", label: "Average" },
        { value: "above-average", label: "Above average" },
        { value: "leading", label: "Industry leading" }
      ]
    }
  ];
  
  return questionsByType[assessmentType] || defaultQuestions;
}

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
