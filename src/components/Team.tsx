import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';
const Team = () => {
  return <section id="team" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4 gradient-text">Our Founding Team</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Led by world-class professionals with deep expertise in AI, cybersecurity, and digital transformation.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Andreea Bulisache */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-1/3">
                <div className="h-full relative overflow-hidden">
                  <img src="/lovable-uploads/be1f59f9-bb53-42ab-9713-f56caa100945.png" alt="Andreea Bulisache" className="w-full h-full object-cover object-center" />
                </div>
              </div>
              <div className="p-8 md:p-10 md:w-2/3">
                <div className="uppercase tracking-wide text-sm text-stratified font-semibold mb-1">CEO & Founder</div>
                <h3 className="text-3xl font-bold mb-2">Andreea Bulisache</h3>
                <p className="text-lg text-stratified font-medium mb-4">
                  Global Tech Executive and Innovation Leader | AI, Cybersecurity, and Digital Transformation
                </p>
                <div className="flex flex-wrap items-center text-sm text-gray-600 mb-6 gap-4">
                  <div className="flex items-center">
                    
                    
                  </div>
                  <div className="flex items-center">
                    
                    
                  </div>
                  <div className="">
                    <MapPin size={16} className="mr-1" />
                    <span>US & EMEA</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-700 mb-4">
                    Andreea Bulisache is a global tech executive, strategist, and influential thought leader with a decade of leadership at Microsoft, where she pioneered the integration of AI, data & analytics, blockchain, and cybersecurity into scalable business models. She played a key role in incubating and operationalizing emerging technologies, leading major integrations like GitHub and Databricks, and driving over $1 billion in global revenue through Microsoft's partner-to-partner model.
                  </p>
                  <p className="text-gray-700 mb-4">
                    A sought-after speaker and advisor, Andreea demystifies AI, builds cybersecurity resilience, and leads digital transformation in high-growth and regulated markets. Beyond corporate leadership, she has shaped national cybersecurity policies and AI frameworks, earning her reputation as a trusted advisor to PE-backed companies, scale-ups, and enterprises navigating complex transitions.
                  </p>
                  <blockquote className="text-lg italic text-stratified border-l-4 border-stratified pl-4 mb-4">
                    "Boards turn to me when the conversation shifts from compliance to competitiveness—and from digital strategy to enterprise transformation."
                  </blockquote>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-stratified">Education & Credentials</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>MBA from Nyenrode Business University, Netherlands</li>
                    <li>Harvard Business School Women on Boards Program (2024)</li>
                    <li>CFA Certificate in Private Equity</li>
                    <li>Bachelor's in International Economic Relations</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-stratified">Current Board & Governance Roles</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Chair, Young & Bold (2020–Present) — Recognized by WEF & FT</li>
                    <li>Board Member, Wildlife Forensics Academy</li>
                    <li>Advisory Board Member, Nyenrode Business University (2018–Present)</li>
                    <li>Startup Advisor — TypingDNA, FootprintAI, Flipsnack</li>
                  </ul>
                </div>
                
                <div className="flex space-x-4">
                  <a href="https://linkedin.com/in/andreeabulisache" className="bg-stratified-lighter hover:bg-stratified-light text-stratified p-2 rounded-full transition-colors" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={20} />
                  </a>
                  <a href="mailto:andreea@stratifiedadvisory.com" className="bg-stratified-lighter hover:bg-stratified-light text-stratified p-2 rounded-full transition-colors">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Désirée van Gorp */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
            <div className="md:flex md:flex-row-reverse">
              <div className="md:flex-shrink-0 md:w-1/3">
                <div className="h-full relative overflow-hidden">
                  <img src="/lovable-uploads/7b8d88cc-86d4-4796-885f-5de98bb9ca7f.png" alt="Prof. dr. Désirée M. van Gorp LL.M" className="w-full h-full object-cover object-center" />
                </div>
              </div>
              <div className="p-8 md:p-10 md:w-2/3">
                <div className="uppercase tracking-wide text-sm text-stratified font-semibold mb-1">FOUNDING PARTNER</div>
                <h3 className="text-3xl font-bold mb-2">Prof. dr. Désirée M. van Gorp LL.M</h3>
                <p className="text-lg text-stratified font-medium mb-4">
                  Professor of International Business | Board Leadership & Ecosystem Development Expert
                </p>
                <div className="flex flex-wrap items-center text-sm text-gray-600 mb-6 gap-4">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    <span>Netherlands & International</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-700 mb-4">
                    Désirée van Gorp is full-time professor of International Business and chairing the International Advisory Board at Nyenrode Business University. She serves on several supervisory and advisory boards including Atradius, World Trade Organization's Chairs Programme, NBTC Holland Marketing, Foundation Young & Bold, Impact Fair and Expert Panel, and chairs the early-stage funding initiative for start-ups with the regional development organization in Utrecht, the Netherlands.
                  </p>
                  <p className="text-gray-700 mb-4">
                    She is involved in the Women in Business Awards for the United Nations' World Investment Forum and regularly participates in AMBA's Assessment Accreditation Committees. In addition to research and education, she advises organizations on building partnerships for sustainable value chains, creating effective ecosystems, and enhancing team and boardroom performance through design thinking and intelligent decision-making methods.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-stratified">Advisory Focus Areas</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Building partnerships for sustainable value chains, global sourcing, offshoring and outsourcing</li>
                    <li>Building ecosystems and making them work</li>
                    <li>Increasing team and boardroom performance by enhancing their dynamics</li>
                    <li>Using design thinking and intelligent decision making methods to support digital transformations</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-stratified">Current Board & Governance Roles</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Professor & International Advisory Board Chair, Nyenrode Business University</li>
                    <li>Board Member, Atradius</li>
                    <li>Advisory Board, World Trade Organization's Chairs Programme</li>
                    <li>Board Member, NBTC Holland Marketing</li>
                    <li>Foundation Young & Bold Board Member</li>
                    <li>Chairman, Early-stage Funding Initiative, Utrecht Regional Development</li>
                  </ul>
                </div>
                
                <div className="flex space-x-4">
                  <a href="#" className="bg-stratified-lighter hover:bg-stratified-light text-stratified p-2 rounded-full transition-colors" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={20} />
                  </a>
                  <a href="#" className="bg-stratified-lighter hover:bg-stratified-light text-stratified p-2 rounded-full transition-colors">
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl">
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
    </section>;
};
export default Team;