
import { Brain, Shield, BarChart3, Layers, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StratCorpAI = () => {
  const handleRequestAssessment = () => {
    const emailSubject = "AI Assessment Request";
    const emailBody = 
      "**Crafted by humans, delivered by technology – bridging communication gaps with precision and a personal touch.**\n\n" +
      "Dear Andreea,\n\n" +
      "I would like to request an AI assessment for my organization. Here are some details about our current AI needs:\n\n" +
      "Company name:\nIndustry:\nCurrent AI implementation status:\nKey challenges we're looking to solve:\n\n" +
      "Thank you for your assistance!\n\n" +
      "[Your Name]\n[Your Position]\n[Your Contact Information]";
    
    window.location.href = `mailto:andreea@stratifiedadvisory.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  };

  return (
    <section id="stratcorp-ai" className="section-padding bg-stratified text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
        <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 0H100V100H0V0Z" fill="url(#stratcorp-pattern)"/>
          <defs>
            <pattern id="stratcorp-pattern" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="scale(2) rotate(0)">
              <rect x="0" y="0" width="1" height="1" fill="white"/>
            </pattern>
          </defs>
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-white drop-shadow-sm">StratCorp.AI</h2>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Our specialized AI assessment arm where we sandbox and test use cases to deliver 
            unparalleled insights and validated implementation strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">The AI Innovation Laboratory</h3>
            <p className="mb-6 text-white/90 leading-relaxed">
              StratCorp.AI serves as our dedicated innovation hub, where cutting-edge AI technologies 
              are rigorously evaluated within controlled environments before deployment recommendations.
              This approach minimizes risk while maximizing potential value for our clients.
            </p>
            <p className="mb-6 text-white/90 leading-relaxed">
              Unlike theoretical consultancies, we provide tangible, tested strategies backed by 
              real-world performance data and comprehensive risk assessments. Our sandbox methodology 
              ensures that AI implementations are not just theoretically sound but practically viable.
            </p>
            <p className="text-white/90 leading-relaxed">
              By combining advanced technical expertise with strategic business insights, StratCorp.AI 
              bridges the gap between AI's theoretical potential and its practical business application.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:translate-y-[-5px] hover:bg-white/15">
              <Brain className="h-10 w-10 mb-4 text-white" />
              <h4 className="text-xl font-semibold mb-2">Use Case Testing</h4>
              <p className="text-white/90">
                Rigorous evaluation of AI applications in controlled environments to ensure 
                optimal performance and value creation.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:translate-y-[-5px] hover:bg-white/15">
              <Shield className="h-10 w-10 mb-4 text-white" />
              <h4 className="text-xl font-semibold mb-2">Risk Assessment</h4>
              <p className="text-white/90">
                Comprehensive analysis of potential vulnerabilities, biases, and regulatory 
                compliance issues before deployment.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:translate-y-[-5px] hover:bg-white/15">
              <BarChart3 className="h-10 w-10 mb-4 text-white" />
              <h4 className="text-xl font-semibold mb-2">Performance Metrics</h4>
              <p className="text-white/90">
                Development of tailored KPIs and measurement frameworks to quantify AI's 
                impact on business outcomes.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:translate-y-[-5px] hover:bg-white/15">
              <Layers className="h-10 w-10 mb-4 text-white" />
              <h4 className="text-xl font-semibold mb-2">Integration Strategy</h4>
              <p className="text-white/90">
                Detailed roadmaps for seamlessly incorporating AI solutions into existing 
                business processes and technology stacks.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-xl shadow-xl border border-white/20">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-6">Ready to Transform Your AI Strategy?</h3>
            <p className="mb-8 text-white/90">
              Discover how StratCorp.AI can help your organization harness the full potential of artificial 
              intelligence through our rigorous testing methodology and strategic implementation frameworks.
            </p>
            <Button 
              className="bg-white text-stratified hover:bg-gray-100 px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
              onClick={handleRequestAssessment}
            >
              <Bot className="mr-2 h-5 w-5" />
              Request AI Assessment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StratCorpAI;
