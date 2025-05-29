
import { Linkedin, Mail, MapPin, X } from 'lucide-react';
import { useState } from 'react';

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  const openProfile = (memberId: string) => {
    setSelectedMember(memberId);
  };

  const closeProfile = () => {
    setSelectedMember(memberId);
  };

  return (
    <section id="team" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4 gradient-text">Our Founding Team</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Led by world-class professionals with deep expertise in AI, cybersecurity, and digital transformation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Side by Side Team Members - Vertical Photos */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Andreea Bulisache */}
            <div 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl cursor-pointer group"
              onClick={() => openProfile('andreea')}
            >
              <div className="relative">
                <div className="h-80 relative overflow-hidden">
                  <img 
                    src="/lovable-uploads/be1f59f9-bb53-42ab-9713-f56caa100945.png" 
                    alt="Andreea Bulisache" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <div className="uppercase tracking-wide text-sm font-semibold mb-1">CEO & Founder</div>
                  <h3 className="text-2xl font-bold mb-2">Andreea Bulisache</h3>
                  <p className="text-sm opacity-90">
                    Global Tech Executive and Innovation Leader
                  </p>
                  <div className="flex items-center text-sm mt-2 opacity-90">
                    <MapPin size={14} className="mr-1" />
                    <span>US & EMEA</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">
                  Pioneered AI, data & analytics, blockchain, and cybersecurity integration at Microsoft. Click to read full bio.
                </p>
                <div className="text-stratified text-sm font-medium">Click to view full profile →</div>
              </div>
            </div>

            {/* Désirée van Gorp */}
            <div 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl cursor-pointer group"
              onClick={() => openProfile('desiree')}
            >
              <div className="relative">
                <div className="h-80 relative overflow-hidden">
                  <img 
                    src="/lovable-uploads/7b8d88cc-86d4-4796-885f-5de98bb9ca7f.png" 
                    alt="Prof. dr. Désirée M. van Gorp LL.M" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <div className="uppercase tracking-wide text-sm font-semibold mb-1">Partner</div>
                  <h3 className="text-2xl font-bold mb-2">Prof. dr. Désirée M. van Gorp LL.M</h3>
                  <p className="text-sm opacity-90">
                    Professor of International Business
                  </p>
                  <div className="flex items-center text-sm mt-2 opacity-90">
                    <MapPin size={14} className="mr-1" />
                    <span>Netherlands & International</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">
                  Full-time professor at Nyenrode Business University, serves on multiple boards including Atradius. Click to read full bio.
                </p>
                <div className="text-stratified text-sm font-medium">Click to view full profile →</div>
              </div>
            </div>
          </div>

          {/* Combined Expertise Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
            <h4 className="text-xl font-semibold mb-6 text-stratified">Combined Board-Ready Expertise & Value</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg hover:bg-stratified/5 transition-colors">
                <h5 className="font-semibold mb-2 text-stratified">AI & Cyber Governance</h5>
                <p className="text-gray-700 text-sm">
                  Board oversight of AI, cyber, and regulatory risk in complex markets with practical implementation experience.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg hover:bg-stratified/5 transition-colors">
                <h5 className="font-semibold mb-2 text-stratified">Innovation-to-Execution</h5>
                <p className="text-gray-700 text-sm">
                  Turning emerging tech into scalable revenue and operating models with proven $1B+ track record.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg hover:bg-stratified/5 transition-colors">
                <h5 className="font-semibold mb-2 text-stratified">International Business Strategy</h5>
                <p className="text-gray-700 text-sm">
                  Academic and practical expertise in global partnerships, sustainable value chains, and ecosystem development.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg hover:bg-stratified/5 transition-colors">
                <h5 className="font-semibold mb-2 text-stratified">M&A Strategy & Integration</h5>
                <p className="text-gray-700 text-sm">
                  Led strategic integrations (GitHub, Databricks) with proven ROI outcomes and valuation impact.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg hover:bg-stratified/5 transition-colors">
                <h5 className="font-semibold mb-2 text-stratified">Boardroom Performance Enhancement</h5>
                <p className="text-gray-700 text-sm">
                  Design thinking and intelligent decision-making methods to optimize team dynamics and governance effectiveness.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg hover:bg-stratified/5 transition-colors">
                <h5 className="font-semibold mb-2 text-stratified">Regulatory & Policy Navigation</h5>
                <p className="text-gray-700 text-sm">
                  Bridging national digital policy with commercial scale, including EU AI Act contributions and UN involvement.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-stratified-lighter/30 rounded-xl p-6 text-center">
            <h4 className="text-lg font-semibold mb-2 text-stratified">Board & Fund Focus</h4>
            <p className="text-gray-700 mb-4">Scale-up boards in enterprise SaaS, AI, or regulated markets (Series B–D) • Operating partner/advisor to PE or VC funds • Innovation, AI, ESG, or GTM-focused board committees • International expansion and ecosystem development</p>
          </div>
        </div>
      </div>

      {/* Profile Overlay */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-stratified">
                {selectedMember === 'andreea' ? 'Andreea Bulisache' : 'Prof. dr. Désirée M. van Gorp LL.M'}
              </h3>
              <button 
                onClick={closeProfile}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>
            
            <div className="p-6">
              {selectedMember === 'andreea' ? (
                <div className="md:flex md:space-x-6">
                  <div className="md:flex-shrink-0 mb-6 md:mb-0">
                    <div className="h-64 w-48 mx-auto md:mx-0 relative overflow-hidden rounded-lg">
                      <img 
                        src="/lovable-uploads/be1f59f9-bb53-42ab-9713-f56caa100945.png" 
                        alt="Andreea Bulisache" 
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="md:flex-1">
                    <div className="uppercase tracking-wide text-sm text-stratified font-semibold mb-1">CEO & Founder</div>
                    <h3 className="text-2xl font-bold mb-2">Andreea Bulisache</h3>
                    <p className="text-base text-stratified font-medium mb-4">
                      Global Tech Executive and Innovation Leader | AI, Cybersecurity, and Digital Transformation
                    </p>
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <MapPin size={16} className="mr-1" />
                      <span>US & EMEA</span>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-gray-700 mb-3 text-sm">
                        Andreea Bulisache is a global tech executive, strategist, and influential thought leader with a decade of leadership at Microsoft, where she pioneered the integration of AI, data & analytics, blockchain, and cybersecurity into scalable business models.
                      </p>
                      <p className="text-gray-700 mb-3 text-sm">
                        A sought-after speaker and advisor, Andreea demystifies AI, builds cybersecurity resilience, and leads digital transformation in high-growth and regulated markets.
                      </p>
                      <blockquote className="text-sm italic text-stratified border-l-4 border-stratified pl-3 mb-3">
                        "Boards turn to me when the conversation shifts from compliance to competitiveness—and from digital strategy to enterprise transformation."
                      </blockquote>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-base font-semibold mb-2 text-stratified">Education & Credentials</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                        <li>MBA from Nyenrode Business University, Netherlands</li>
                        <li>Harvard Business School Women on Boards Program (2024)</li>
                        <li>CFA Certificate in Private Equity</li>
                        <li>Bachelor's in International Economic Relations</li>
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-base font-semibold mb-2 text-stratified">Current Board & Governance Roles</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                        <li>Chair, Young & Bold (2020–Present) — Recognized by WEF & FT</li>
                        <li>Board Member, Wildlife Forensics Academy</li>
                        <li>Advisory Board Member, Nyenrode Business University (2018–Present)</li>
                        <li>Startup Advisor — TypingDNA, FootprintAI, Flipsnack</li>
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
              ) : (
                <div className="md:flex md:space-x-6">
                  <div className="md:flex-shrink-0 mb-6 md:mb-0">
                    <div className="h-64 w-48 mx-auto md:mx-0 relative overflow-hidden rounded-lg">
                      <img 
                        src="/lovable-uploads/7b8d88cc-86d4-4796-885f-5de98bb9ca7f.png" 
                        alt="Prof. dr. Désirée M. van Gorp LL.M" 
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <div className="md:flex-1">
                    <div className="uppercase tracking-wide text-sm text-stratified font-semibold mb-1">Partner</div>
                    <h3 className="text-2xl font-bold mb-2">Prof. dr. Désirée M. van Gorp LL.M</h3>
                    <p className="text-base text-stratified font-medium mb-4">
                      Professor of International Business | Board Leadership & Ecosystem Development Expert
                    </p>
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <MapPin size={16} className="mr-1" />
                      <span>Netherlands & International</span>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-gray-700 mb-3 text-sm">
                        Désirée van Gorp is full-time professor of International Business and chairing the International Advisory Board at Nyenrode Business University. She serves on several supervisory and advisory boards including Atradius, World Trade Organization's Chairs Programme, NBTC Holland Marketing, Foundation Young & Bold, Impact Fair and Expert Panel.
                      </p>
                      <p className="text-gray-700 mb-3 text-sm">
                        She is involved in the Women in Business Awards for the United Nations' World Investment Forum and regularly participates in AMBA's Assessment Accreditation Committees. In addition to research and education, she advises organizations on building partnerships for sustainable value chains, creating effective ecosystems, and enhancing team and boardroom performance.
                      </p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-base font-semibold mb-2 text-stratified">Advisory Focus Areas</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                        <li>Building partnerships for sustainable value chains, global sourcing, offshoring and outsourcing</li>
                        <li>Building ecosystems and making them work</li>
                        <li>Increasing team and boardroom performance by enhancing their dynamics</li>
                        <li>Using design thinking and intelligent decision making methods to support digital transformations</li>
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-base font-semibold mb-2 text-stratified">Current Board & Governance Roles</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                        <li>Professor & International Advisory Board Chair, Nyenrode Business University</li>
                        <li>Board Member, Atradius</li>
                        <li>Advisory Board, World Trade Organization's Chairs Programme</li>
                        <li>Board Member, NBTC Holland Marketing</li>
                        <li>Foundation Young & Bold Board Member</li>
                        <li>Chairman, Early-stage Funding Initiative, Utrecht Regional Development</li>
                      </ul>
                    </div>
                    
                    <div className="flex space-x-4">
                      <a href="#" 
                         className="bg-stratified-lighter hover:bg-stratified-light text-stratified p-2 rounded-full transition-colors"
                         target="_blank" rel="noopener noreferrer">
                        <Linkedin size={20} />
                      </a>
                      <a href="#" 
                         className="bg-stratified-lighter hover:bg-stratified-light text-stratified p-2 rounded-full transition-colors">
                        <Mail size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;
