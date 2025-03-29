
import { Brain, Shield, BarChart3, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StratCorpAI = () => {
  return (
    <section id="stratcorp-ai" className="section-padding bg-stratified text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-white">StratCorp.AI</h2>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Our specialized AI assessment arm where we sandbox and test use cases to deliver 
            unparalleled insights and validated implementation strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">The AI Innovation Laboratory</h3>
            <p className="mb-6 opacity-90">
              StratCorp.AI serves as our dedicated innovation hub, where cutting-edge AI technologies 
              are rigorously evaluated within controlled environments before deployment recommendations.
              This approach minimizes risk while maximizing potential value for our clients.
            </p>
            <p className="mb-6 opacity-90">
              Unlike theoretical consultancies, we provide tangible, tested strategies backed by 
              real-world performance data and comprehensive risk assessments. Our sandbox methodology 
              ensures that AI implementations are not just theoretically sound but practically viable.
            </p>
            <p className="opacity-90">
              By combining advanced technical expertise with strategic business insights, StratCorp.AI 
              bridges the gap between AI's theoretical potential and its practical business application.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <Brain className="h-10 w-10 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Use Case Testing</h4>
              <p className="opacity-90">
                Rigorous evaluation of AI applications in controlled environments to ensure 
                optimal performance and value creation.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <Shield className="h-10 w-10 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Risk Assessment</h4>
              <p className="opacity-90">
                Comprehensive analysis of potential vulnerabilities, biases, and regulatory 
                compliance issues before deployment.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <BarChart3 className="h-10 w-10 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Performance Metrics</h4>
              <p className="opacity-90">
                Development of tailored KPIs and measurement frameworks to quantify AI's 
                impact on business outcomes.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <Layers className="h-10 w-10 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Integration Strategy</h4>
              <p className="opacity-90">
                Detailed roadmaps for seamlessly incorporating AI solutions into existing 
                business processes and technology stacks.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-6">Ready to Transform Your AI Strategy?</h3>
            <p className="mb-8 opacity-90">
              Discover how StratCorp.AI can help your organization harness the full potential of artificial 
              intelligence through our rigorous testing methodology and strategic implementation frameworks.
            </p>
            <Button className="bg-white text-stratified hover:bg-gray-100 px-8 py-6 text-lg">
              Request AI Assessment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StratCorpAI;
