import { Shield, Users, Lightbulb, TrendingUp, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BoardService = () => {
  const handleScheduleClick = () => {
    const emailSubject = "Board Strategy Session Request";
    const emailBody = 
      "**Crafted by humans, delivered by technology – bridging communication gaps with precision and a personal touch.**\n\n" +
      "Dear Andreea,\n\n" +
      "I would like to schedule a Board Strategy Session. Here are some details about my company:\n\n" +
      "Company location:\nSize:\nWebsite:\nPreferred timeframe for session:\n\n" +
      "Thank you!\n\n" +
      "[Your Name]";
    
    window.location.href = `mailto:andreea@stratifiedadvisory.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  };

  return (
    <section id="board-service" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4 gradient-text">Board-as-a-Service</h2>
          <p className="text-xl text-gray-700">
            Elevate your executive leadership with our transformative Board-as-a-Service practice. We provide 
            comprehensive strategic guidance for ventures, startups, and SMBs navigating the complex digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 text-stratified">Beyond Traditional Board Members</h3>
            <p className="text-gray-700 mb-6">
              In today's world of fluid expertise and rapid innovation, a single board member is no longer sufficient. 
              Our model connects you with a specialized board advisor backed by an entire team of domain experts, 
              providing unmatched depth and breadth of expertise.
            </p>
            <p className="text-gray-700">
              This collaborative approach enables rapid hypothesis testing, accelerated decision-making, and 
              strategic alignment across all aspects of your business, creating a multiplier effect on your 
              board's capabilities and impact.
            </p>
          </div>

          <div className="bg-stratified-lighter rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 text-stratified">A Full Executive Team at Your Service</h3>
            <p className="text-gray-700 mb-6">
              When you engage our Board-as-a-Service, you're not just getting a board member—you're gaining 
              access to a complete ecosystem of specialized expertise that can be deployed precisely when and 
              where you need it.
            </p>
            <p className="text-gray-700">
              From AI strategy and cybersecurity to regulatory compliance and business model innovation, our 
              team provides comprehensive support that adapts to your evolving needs, ensuring you have the 
              right expertise at the right time.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-stratified-lighter rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-stratified" size={28} />
            </div>
            <h4 className="text-xl font-semibold mb-3 text-stratified">Strategic Partnerships</h4>
            <p className="text-gray-700">
              Forge valuable connections and strategic alliances to accelerate growth and market penetration.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-stratified-lighter rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="text-stratified" size={28} />
            </div>
            <h4 className="text-xl font-semibold mb-3 text-stratified">Innovation Governance</h4>
            <p className="text-gray-700">
              Implement frameworks that foster innovation while managing risk and ensuring alignment with business objectives.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-stratified-lighter rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-stratified" size={28} />
            </div>
            <h4 className="text-xl font-semibold mb-3 text-stratified">Regulatory Navigation</h4>
            <p className="text-gray-700">
              Expertly guide your organization through complex regulatory landscapes in AI, data privacy, and cybersecurity.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-stratified-lighter rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="text-stratified" size={28} />
            </div>
            <h4 className="text-xl font-semibold mb-3 text-stratified">Growth Acceleration</h4>
            <p className="text-gray-700">
              Identify and capitalize on opportunities to scale operations, optimize processes, and maximize market impact.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button 
            className="bg-stratified hover:bg-stratified-dark text-white px-8 py-6 text-lg"
            onClick={handleScheduleClick}
          >
            <Calendar className="mr-2 h-5 w-5" />
            Schedule a Board Strategy Session
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BoardService;
