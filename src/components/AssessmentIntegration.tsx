
import { Button } from '@/components/ui/button';
import { Brain, BarChart3, Users, Building, MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AssessmentIntegration = () => {
  const assessmentTypes = [
    {
      id: "ai-readiness",
      title: "AI Readiness",
      description: "Evaluate your preparedness for AI adoption",
      icon: Brain,
      color: "text-purple-600"
    },
    {
      id: "board-effectiveness",
      title: "Board Effectiveness",
      description: "Analyze board structure and dynamics",
      icon: Users,
      color: "text-blue-600"
    },
    {
      id: "business-strategy",
      title: "Business Strategy",
      description: "Examine strategic positioning",
      icon: BarChart3,
      color: "text-emerald-600"
    },
    {
      id: "organizational-structure",
      title: "Organizational Structure",
      description: "Evaluate company structure and workflows",
      icon: Building,
      color: "text-amber-600"
    }
  ];

  return (
    <section className="section-padding bg-gray-50" id="assessment-center">
      <div className="container-custom">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-stratified mb-6 font-bold">Strategic Assessment Center</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Use our AI-powered assessment tools to analyze your organization's strengths 
            and identify opportunities for growth in key strategic areas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {assessmentTypes.map((type, index) => (
            <motion.div
              key={type.id}
              className="card-modern p-6 text-center group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gray-50 flex items-center justify-center ${type.color}`}>
                <type.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{type.title}</h3>
              <p className="text-sm text-gray-600">{type.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link to="/assessment">
            <Button 
              className="btn-primary btn-hover-effect px-8 py-4 text-lg group"
            >
              Start Assessment
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
          
          <Link to="/assessment">
            <Button 
              variant="outline" 
              className="border-stratified text-stratified hover:bg-stratified/5 btn-hover-effect px-8 py-4 text-lg group"
            >
              <MessageCircle className="mr-3 h-5 w-5" />
              AI Assessment Chat
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AssessmentIntegration;
