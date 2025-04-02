
import { motion } from "framer-motion";
import { Brain, BarChart3, Users, Building, Bot, Briefcase } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type AssessmentTypesProps = {
  onSelect: (type: string) => void;
};

const AssessmentTypes = ({ onSelect }: AssessmentTypesProps) => {
  const assessmentTypes = [
    {
      id: "ai-readiness",
      title: "AI Readiness",
      description: "Evaluate your organization's preparedness to adopt and integrate AI technologies",
      icon: Brain,
      color: "bg-gradient-to-br from-purple-500/10 to-purple-700/20 border-purple-200/20"
    },
    {
      id: "board-effectiveness",
      title: "Board Effectiveness",
      description: "Assess your board's performance, structure, and strategic alignment",
      icon: Users,
      color: "bg-gradient-to-br from-blue-500/10 to-blue-700/20 border-blue-200/20"
    },
    {
      id: "business-strategy",
      title: "Business Strategy",
      description: "Analyze your strategic positioning, competitive advantage, and growth trajectory",
      icon: BarChart3,
      color: "bg-gradient-to-br from-emerald-500/10 to-emerald-700/20 border-emerald-200/20"
    },
    {
      id: "organizational-structure",
      title: "Organizational Structure",
      description: "Evaluate your company's structure, roles, and operational efficiency",
      icon: Building,
      color: "bg-gradient-to-br from-amber-500/10 to-amber-700/20 border-amber-200/20"
    },
    {
      id: "digital-transformation",
      title: "Digital Transformation",
      description: "Measure your progress and readiness for comprehensive digital transformation",
      icon: Bot,
      color: "bg-gradient-to-br from-cyan-500/10 to-cyan-700/20 border-cyan-200/20"
    },
    {
      id: "executive-alignment",
      title: "Executive Alignment",
      description: "Assess how well your leadership team is aligned on vision, strategy, and execution",
      icon: Briefcase,
      color: "bg-gradient-to-br from-rose-500/10 to-rose-700/20 border-rose-200/20"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-stratified mb-4">Select Your Assessment</h2>
          <p className="text-gray-600 text-lg">
            Choose the assessment that best aligns with your organization's current needs and goals. 
            Each assessment is designed to provide actionable insights for your specific context.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {assessmentTypes.map((type) => (
            <motion.div key={type.id} variants={item}>
              <Card className={`h-full border shadow-md hover:shadow-xl transition-all duration-300 ${type.color}`}>
                <CardHeader>
                  <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-sm">
                    <type.icon className="h-6 w-6 text-stratified" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">{type.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    15-20 minute assessment • Instant results • Executive summary
                  </p>
                </CardContent>
                <CardFooter>
                  <Button 
                    onClick={() => onSelect(type.id)} 
                    className="w-full bg-stratified hover:bg-stratified-dark text-white"
                  >
                    Start Assessment
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AssessmentTypes;
