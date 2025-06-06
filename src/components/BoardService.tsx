import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import ContactCTA from './ContactCTA';
const BoardService = () => {
  const [expandedServices, setExpandedServices] = useState<Set<number>>(new Set());
  const isMobile = useIsMobile();
  const toggleService = (index: number) => {
    const newExpanded = new Set(expandedServices);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedServices(newExpanded);
  };
  const services = [{
    title: "AI Governance & Ethics",
    shortDescription: "Strategic AI oversight and ethical frameworks for compliance.",
    fullDescription: "Strategic oversight of AI implementation, risk management, and ethical frameworks that balance innovation with responsibility and regulatory compliance."
  }, {
    title: "Cybersecurity Resilience",
    shortDescription: "Board-level cybersecurity strategy and risk management.",
    fullDescription: "Board-level cybersecurity strategy, risk assessment, and incident response planning to protect organizational assets and ensure business continuity."
  }, {
    title: "Digital Transformation",
    shortDescription: "Strategic guidance on technology adoption and change management.",
    fullDescription: "Strategic guidance on technology adoption, digital business models, and organizational change management for sustainable competitive advantage."
  }, {
    title: "M&A Technology Due Diligence",
    shortDescription: "Expert tech asset assessment and integration strategies.",
    fullDescription: "Expert assessment of technology assets, integration strategies, and digital value creation opportunities in merger and acquisition scenarios."
  }, {
    title: "Regulatory & Compliance",
    shortDescription: "Navigate complex regulatory landscapes with strategic frameworks.",
    fullDescription: "Navigate complex regulatory landscapes including GDPR, AI Act, and emerging technology regulations with strategic compliance frameworks."
  }, {
    title: "Innovation Strategy",
    shortDescription: "Strategic innovation roadmaps and technology assessment.",
    fullDescription: "Strategic innovation roadmaps, emerging technology assessment, and innovation portfolio management for sustained competitive advantage."
  }];
  return <section id="board-service" className="section-padding bg-gradient-to-br from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-6 gradient-text text-3xl md:text-4xl lg:text-5xl font-bold">Board-as-a-Service</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Expert board advisory services that bridge technology innovation with strategic governance, 
            helping organizations navigate AI adoption, cybersecurity resilience, and digital transformation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Service Areas */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {services.map((service, index) => {
            const isExpanded = expandedServices.has(index);
            const showExpandButton = isMobile;
            return <div key={index} className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-stratified-light group">
                  <div className="w-12 h-12 bg-gradient-to-br from-stratified-lighter to-stratified-light rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-6 h-6 bg-stratified rounded-lg"></div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-stratified">{service.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-2">
                    {isMobile && !isExpanded ? service.shortDescription : service.fullDescription}
                  </p>
                  
                  {showExpandButton && <button onClick={() => toggleService(index)} className="text-stratified font-medium hover:text-stratified-dark transition-colors flex items-center gap-1 text-sm mt-2">
                      {isExpanded ? 'Show Less' : 'Learn More'}
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>}
                </div>;
          })}
          </div>

          {/* Value Proposition */}
          <div className="bg-gradient-to-r from-stratified-lighter/50 to-stratified-light/50 rounded-2xl p-6 md:p-8 mb-12 border border-stratified-lighter/30 shadow-lg">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold text-stratified mb-6">Why Choose Our Board Advisory Services?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-stratified mb-2">$1B+</div>
                  <p className="text-gray-700 text-sm md:text-base">Revenue impact from strategic technology integrations</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-stratified mb-2">50+</div>
                  <p className="text-gray-700 text-sm md:text-base">Years of leadership at global technology companies</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-stratified mb-2">100+</div>
                  <p className="text-gray-700 text-sm md:text-base">Board decisions influenced across multiple industries</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-stratified">Ready to Transform Your Board's Strategic Oversight?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
              Connect with us to explore how our board advisory services can help your organization 
              navigate digital transformation, AI governance, and cybersecurity challenges with confidence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
              <ContactCTA variant="board-advisory" size="lg" />
              <ContactCTA variant="partnership" size="lg" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default BoardService;