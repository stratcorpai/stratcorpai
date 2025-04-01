
import { Linkedin, Mail, MapPin } from 'lucide-react';

const Team = () => {
  return (
    <section id="team" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4 gradient-text">Our Founding Team</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Led by world-class professionals with deep expertise in AI, cybersecurity, and digital transformation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-1/3">
                {/* Placeholder for Andreea's photo - replace with actual photo when available */}
                <div className="h-full bg-gradient-to-br from-stratified to-stratified-lighter flex items-center justify-center p-10">
                  <div className="text-white text-6xl font-bold">AB</div>
                </div>
              </div>
              <div className="p-8 md:p-10 md:w-2/3">
                <div className="uppercase tracking-wide text-sm text-stratified font-semibold mb-1">CEO & Founder</div>
                <h3 className="text-3xl font-bold mb-4">Andreea Bulisache</h3>
                <div className="flex items-center text-sm text-gray-600 mb-6">
                  <MapPin size={16} className="mr-1" />
                  <span>Seattle, Washington & Bucharest, Romania</span>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-stratified">Strategic Partner and Board Advisor</h4>
                  <p className="text-gray-700 mb-4">
                    Global expert in AI, Cybersecurity, and Digital Transformation with over a decade of leadership 
                    at Microsoft, where she played a pivotal role in developing and integrating disruptive technologies 
                    into scalable business models.
                  </p>
                  <p className="text-gray-700">
                    Andreea was instrumental in incubating emerging technologies within Microsoft's commercial structures, 
                    leading high-profile integrations like GitHub and Databricks, and spearheading the development of 
                    Microsoft's partner-to-partner model that drove over $700M in global revenue.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2 text-stratified">Education & Governance Experience</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>MBA from Nyenrode Business University</li>
                    <li>Harvard Business School Women on Boards Program (2024)</li>
                    <li>Chairman of the Board, Young & Bold (2020 – Present)</li>
                    <li>Member, International Advisory Board, Nyenrode Business University (2018 – Present)</li>
                    <li>Board Advisor to multiple startups including TypingDNA, FootprintAI and Flipsnack</li>
                  </ul>
                </div>
                
                <div className="flex space-x-4">
                  <a href="https://linkedin.com/in/andreeabulisache" 
                     className="bg-stratified-lighter hover:bg-stratified-light text-stratified p-2 rounded-full transition-colors"
                     target="_blank" rel="noopener noreferrer">
                    <Linkedin size={20} />
                  </a>
                  <a href="mailto:andreea@stratifiedadvisory.com" 
                     className="bg-stratified-lighter hover:bg-stratified-light text-stratified p-2 rounded-full transition-colors">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
            <h4 className="text-xl font-semibold mb-4 text-stratified">Value to Boards</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg hover:bg-stratified/5 transition-colors">
                <h5 className="font-semibold mb-2 text-stratified">Strategic Guidance on AI and Cybersecurity</h5>
                <p className="text-gray-700">
                  Practical insights into adopting and scaling disruptive technologies while mitigating risks and ensuring compliance.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg hover:bg-stratified/5 transition-colors">
                <h5 className="font-semibold mb-2 text-stratified">Business Model Innovation</h5>
                <p className="text-gray-700">
                  Expertise in incubating emerging technologies into scalable and commercially viable structures.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg hover:bg-stratified/5 transition-colors">
                <h5 className="font-semibold mb-2 text-stratified">Growth Acceleration</h5>
                <p className="text-gray-700">
                  Proven capability to drive operational efficiencies and scale organizations, particularly for PE-backed businesses.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg hover:bg-stratified/5 transition-colors">
                <h5 className="font-semibold mb-2 text-stratified">Regulatory Alignment</h5>
                <p className="text-gray-700">
                  A strong understanding of global compliance landscapes, helping boards navigate complex challenges in cybersecurity, AI ethics, and data privacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
