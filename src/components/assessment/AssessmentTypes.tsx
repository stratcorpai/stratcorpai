
import { motion } from "framer-motion";
import { Brain, BarChart3, Users, Building, Bot, Briefcase, ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useEffect, useState } from "react";

type AssessmentTypesProps = {
  onSelect: (type: string) => void;
  completedAssessments?: string[];
};

const AssessmentTypes = ({ onSelect, completedAssessments = [] }: AssessmentTypesProps) => {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Convert array to record for easier lookup
    const completedMap: Record<string, boolean> = {};
    completedAssessments.forEach(type => {
      completedMap[type] = true;
    });
    setCompleted(completedMap);
  }, [completedAssessments]);

  const assessmentTypes = [
    {
      id: "ai-readiness",
      title: "AI Readiness",
      description: "Evaluate your preparedness for AI adoption and integration. Assess organizational capabilities and infrastructure requirements. Identify key opportunities for AI enhancement.",
      icon: Brain,
      color: "bg-gradient-to-br from-purple-500/10 to-purple-700/20 border-purple-200/20",
      detail: "Assess AI infrastructure needs, data readiness, talent gaps, and cultural preparedness for AI transformation.",
      questionCount: 12
    },
    {
      id: "board-effectiveness",
      title: "Board Effectiveness",
      description: "Analyze board structure, dynamics, and strategic alignment. Evaluate governance practices and decision-making processes. Enhance board performance and organizational oversight capabilities.",
      icon: Users,
      color: "bg-gradient-to-br from-blue-500/10 to-blue-700/20 border-blue-200/20",
      detail: "Evaluate board composition, meeting effectiveness, decision-making processes, and strategic oversight capabilities.",
      questionCount: 15
    },
    {
      id: "business-strategy",
      title: "Business Strategy",
      description: "Examine strategic positioning and competitive market advantages. Identify growth trajectories and opportunity areas. Align resources with long-term organizational objectives.",
      icon: BarChart3,
      color: "bg-gradient-to-br from-emerald-500/10 to-emerald-700/20 border-emerald-200/20",
      detail: "Examine market position, competitive differentiation, growth vectors, and alignment of resources with strategic objectives.",
      questionCount: 14
    },
    {
      id: "organizational-structure",
      title: "Organizational Structure",
      description: "Evaluate company structure, role clarity, and reporting relationships. Analyze cross-functional collaboration and workflow efficiency. Identify and address operational bottlenecks and redundancies.",
      icon: Building,
      color: "bg-gradient-to-br from-amber-500/10 to-amber-700/20 border-amber-200/20",
      detail: "Analyze reporting structures, role clarity, cross-functional collaboration, and operational bottlenecks.",
      questionCount: 13
    },
    {
      id: "digital-transformation",
      title: "Digital Transformation",
      description: "Measure digital maturity and technology infrastructure readiness. Assess change management capabilities and digital adoption strategies. Identify priority areas for digital enhancement initiatives.",
      icon: Bot,
      color: "bg-gradient-to-br from-cyan-500/10 to-cyan-700/20 border-cyan-200/20",
      detail: "Assess digital maturity, technology stack, change management capabilities, and cultural readiness for transformation.",
      questionCount: 16
    },
    {
      id: "executive-alignment",
      title: "Executive Alignment",
      description: "Evaluate leadership team unity on vision and strategic direction. Assess communication effectiveness and collaborative decision-making. Ensure consistent execution and accountability across executive functions.",
      icon: Briefcase,
      color: "bg-gradient-to-br from-rose-500/10 to-rose-700/20 border-rose-200/20",
      detail: "Evaluate communication effectiveness, goal alignment, collaborative decision-making, and execution consistency among executives.",
      questionCount: 14
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

  // Observer for scroll animations
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6 }
  };

  return (
    <section className="section-padding bg-gray-50" id="assessment-types">
      <div className="container-custom">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          {...fadeInUp}
        >
          <h2 className="text-stratified mb-4 font-bold tracking-tight">Select Your Assessment</h2>
          <p className="text-gray-600 text-lg">
            Choose the assessment that best aligns with your organization's current needs and goals. 
            Each assessment is designed to provide actionable insights for your specific context.
          </p>
          {completedAssessments.length > 0 && (
            <p className="text-sm text-stratified mt-2 font-medium">
              You've completed {completedAssessments.length} of {assessmentTypes.length} assessments.
              Complete all assessments to unlock the full AI assistant capabilities.
            </p>
          )}
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {assessmentTypes.map((type) => (
            <motion.div key={type.id} variants={item}>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Card className={`h-full border shadow-md transition-all duration-500 cursor-pointer backdrop-blur-sm ${type.color} hover:shadow-xl hover:scale-[1.02] transform`}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4 shadow-sm">
                          <motion.div
                            whileHover={{ rotate: 15 }}
                            transition={{ type: "spring", stiffness: 200 }}
                          >
                            <type.icon className="h-6 w-6 text-stratified" />
                          </motion.div>
                        </div>
                        {completed[type.id] && (
                          <CheckCircle className="h-6 w-6 text-emerald-500" />
                        )}
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-800">{type.title}</CardTitle>
                      <CardDescription className="text-gray-600 min-h-[108px]">
                        {type.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500">
                        {type.questionCount} questions
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        onClick={() => onSelect(type.id)} 
                        className="w-full bg-stratified hover:bg-stratified-dark text-white group transition-all duration-300"
                      >
                        {completed[type.id] ? "View Results" : "Start Assessment"}
                        <motion.div
                          className="inline-block ml-2"
                          initial={{ x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <ArrowRight className="h-4 w-4" />
                        </motion.div>
                      </Button>
                    </CardFooter>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="p-4 backdrop-blur-sm bg-white/95 border border-stratified/10 shadow-lg w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-stratified">{type.title} Assessment</h4>
                    <p className="text-xs text-gray-700">{type.detail}</p>
                    <p className="text-xs font-medium text-stratified">{type.questionCount} questions</p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AssessmentTypes;
