
import { motion } from "framer-motion";
import { Download, RefreshCw, Mail, BarChart3, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { useEffect } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

type AssessmentResultProps = {
  result: {
    score: number;
    strengths: string[];
    opportunities: string[];
    recommendations: string[];
  };
  assessmentType: string;
  onStartNew: () => void;
};

const AssessmentResult = ({
  result,
  assessmentType,
  onStartNew
}: AssessmentResultProps) => {
  const assessmentTitles: Record<string, string> = {
    "ai-readiness": "AI Readiness Assessment",
    "board-effectiveness": "Board Effectiveness Assessment",
    "business-strategy": "Business Strategy Assessment",
    "organizational-structure": "Organizational Structure Assessment",
    "digital-transformation": "Digital Transformation Assessment",
    "executive-alignment": "Executive Alignment Assessment"
  };

  const title = assessmentTitles[assessmentType] || "Assessment";
  
  useEffect(() => {
    // Save results to local storage when component mounts
    const savedResults = JSON.parse(localStorage.getItem('stratifiedAssessments') || '{}');
    savedResults[assessmentType] = result;
    localStorage.setItem('stratifiedAssessments', JSON.stringify(savedResults));
    
    // Check if all assessments are completed
    checkAllAssessmentsCompleted();
  }, [assessmentType, result]);
  
  const checkAllAssessmentsCompleted = () => {
    const savedResults = JSON.parse(localStorage.getItem('stratifiedAssessments') || '{}');
    const allAssessmentTypes = Object.keys(assessmentTitles);
    const completedAssessments = Object.keys(savedResults);
    
    // Check if all assessment types have been completed
    const allCompleted = allAssessmentTypes.every(type => completedAssessments.includes(type));
    
    if (allCompleted) {
      localStorage.setItem('stratifiedAllAssessmentsCompleted', 'true');
    }
  };
  
  const handleDownloadReport = async () => {
    toast.success("Generating PDF report...");
    
    try {
      const reportElement = document.getElementById('assessment-report');
      if (!reportElement) {
        toast.error("Could not generate report");
        return;
      }
      
      const canvas = await html2canvas(reportElement, {
        scale: 2, 
        logging: false,
        useCORS: true,
      });
      
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`Stratified_${title.replace(/\s+/g, '_')}_Report.pdf`);
      
      toast.success("Report downloaded successfully!");
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast.error("Could not generate PDF report");
    }
  };
  
  const handleEmailReport = () => {
    toast.success("Please enter your email to receive the full report", {
      action: {
        label: "Enter Email",
        onClick: () => {
          const email = prompt("Please enter your email address:");
          if (email) {
            toast.success(`Report will be sent to ${email} shortly`);
            // In a real implementation, this would send the email with the report
          }
        }
      }
    });
  };

  const getScoreCategory = (score: number) => {
    if (score >= 80) return "Excellent";
    if (score >= 60) return "Good";
    if (score >= 40) return "Average";
    if (score >= 20) return "Fair";
    return "Needs Attention";
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-emerald-600";
    if (score >= 60) return "text-blue-600";
    if (score >= 40) return "text-amber-600";
    if (score >= 20) return "text-orange-600";
    return "text-red-600";
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-0 shadow-2xl overflow-hidden" id="assessment-report">
            <div className="bg-stratified text-white p-8 relative">
              <div className="absolute inset-0 z-0 opacity-10">
                <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                  <pattern id="gridPattern" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#gridPattern)" />
                </svg>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-2">
                  {title}: Results
                </h2>
                <p className="opacity-90">
                  Based on your responses, we've generated the following insights
                </p>
              </div>
            </div>
            
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="flex-1">
                  <p className="text-gray-500 mb-2 flex items-center">
                    <BarChart3 className="h-4 w-4 mr-1" />
                    Overall Score
                  </p>
                  <div className="flex items-end">
                    <h3 className={`text-5xl font-bold ${getScoreColor(result.score)}`}>
                      {result.score}
                    </h3>
                    <span className="text-gray-500 ml-2 mb-1">/100</span>
                  </div>
                  <p className={`font-medium ${getScoreColor(result.score)} mt-1`}>
                    {getScoreCategory(result.score)}
                  </p>
                </div>
                
                <div className="flex-1">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <p className="text-gray-800 font-medium mb-2">Summary</p>
                    <p className="text-gray-600 text-sm">
                      Your organization demonstrates {result.score >= 50 ? 'strong potential' : 'areas for growth'} in {assessmentTitles[assessmentType]?.toLowerCase() || 'this area'}. 
                      We've identified key strengths to leverage and opportunities for development.
                    </p>
                  </div>
                </div>
              </div>
              
              <Separator className="my-6" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <Card className="border border-emerald-100 bg-emerald-50/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center text-emerald-700">
                      <CheckCircle2 className="h-5 w-5 mr-2" />
                      Key Strengths
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {result.strengths.map((strength, index) => (
                        <li key={index} className="text-gray-800 flex">
                          <span className="text-emerald-500 font-bold mr-2">+</span>
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border border-amber-100 bg-amber-50/30">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center text-amber-700">
                      <AlertCircle className="h-5 w-5 mr-2" />
                      Opportunities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {result.opportunities.map((opportunity, index) => (
                        <li key={index} className="text-gray-800 flex">
                          <span className="text-amber-500 font-bold mr-2">›</span>
                          {opportunity}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Recommendations
                </h3>
                <ul className="space-y-4">
                  {result.recommendations.map((recommendation, index) => (
                    <li key={index} className="flex">
                      <div className="bg-stratified text-white flex items-center justify-center rounded-full w-6 h-6 mt-0.5 mr-3 flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{recommendation}</p>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-between">
                <div className="flex flex-wrap gap-2">
                  <Button 
                    variant="outline" 
                    onClick={handleDownloadReport}
                    className="bg-white"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Report
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={handleEmailReport}
                    className="bg-white"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Email Report
                  </Button>
                </div>
                <Button 
                  onClick={onStartNew}
                  className="bg-stratified hover:bg-stratified-dark text-white"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Start New Assessment
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default AssessmentResult;
