
import ContactCTA from './ContactCTA';

const BoardService = () => {
  return (
    <section id="board-service" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4 gradient-text">Board-as-a-Service</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Expert board advisory services that bridge technology innovation with strategic governance, 
            helping organizations navigate AI adoption, cybersecurity resilience, and digital transformation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Service Areas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-stratified-lighter rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-stratified rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-stratified">AI Governance & Ethics</h3>
              <p className="text-gray-600">
                Strategic oversight of AI implementation, risk management, and ethical frameworks 
                that balance innovation with responsibility and regulatory compliance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-stratified-lighter rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-stratified rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-stratified">Cybersecurity Resilience</h3>
              <p className="text-gray-600">
                Board-level cybersecurity strategy, risk assessment, and incident response planning 
                to protect organizational assets and ensure business continuity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-stratified-lighter rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-stratified rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-stratified">Digital Transformation</h3>
              <p className="text-gray-600">
                Strategic guidance on technology adoption, digital business models, and 
                organizational change management for sustainable competitive advantage.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-stratified-lighter rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-stratified rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-stratified">M&A Technology Due Diligence</h3>
              <p className="text-gray-600">
                Expert assessment of technology assets, integration strategies, and 
                digital value creation opportunities in merger and acquisition scenarios.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-stratified-lighter rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-stratified rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-stratified">Regulatory & Compliance</h3>
              <p className="text-gray-600">
                Navigate complex regulatory landscapes including GDPR, AI Act, and emerging 
                technology regulations with strategic compliance frameworks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-stratified-lighter rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-stratified rounded"></div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-stratified">Innovation Strategy</h3>
              <p className="text-gray-600">
                Strategic innovation roadmaps, emerging technology assessment, and 
                innovation portfolio management for sustained competitive advantage.
              </p>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="bg-gradient-to-r from-stratified-lighter to-stratified-light rounded-2xl p-8 mb-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-stratified mb-4">Why Choose Our Board Advisory Services?</h3>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-stratified mb-2">$1B+</div>
                  <p className="text-gray-700">Revenue impact from strategic technology integrations</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-stratified mb-2">10+</div>
                  <p className="text-gray-700">Years of leadership at global technology companies</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-stratified mb-2">100+</div>
                  <p className="text-gray-700">Board decisions influenced across multiple industries</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4 text-stratified">Ready to Transform Your Board's Strategic Oversight?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Connect with us to explore how our board advisory services can help your organization 
              navigate digital transformation, AI governance, and cybersecurity challenges with confidence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <ContactCTA variant="board-advisory" size="lg" />
              <ContactCTA variant="partnership" size="lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardService;
