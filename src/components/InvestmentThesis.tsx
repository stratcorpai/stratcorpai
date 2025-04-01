
import { useEffect, useRef } from 'react';

const InvestmentThesis = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (svgRef.current) {
        const rect = svgRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isInView) {
          // Add 'visible' class when in view for animations
          svgRef.current.classList.add('visible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="investment-thesis" className="section-padding bg-gray-50 overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4 gradient-text">Our Investment Thesis</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            In the era of generative AI, we believe in balancing three critical dimensions that define successful technological integration and implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Radar Visualization */}
          <div className="radar-container h-[450px] flex items-center justify-center relative">
            <svg 
              ref={svgRef} 
              className="radar-graphic w-full h-full" 
              viewBox="0 0 1000 1000" 
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <radialGradient id="bgGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="#F0D9DC" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#D8A0A6" stopOpacity="0.4" />
                </radialGradient>
                
                <linearGradient id="efficiencyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B2F41" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#8B2F41" stopOpacity="0.2" />
                </linearGradient>
                
                <linearGradient id="effectivenessGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D8A0A6" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#D8A0A6" stopOpacity="0.2" />
                </linearGradient>
                
                <linearGradient id="responsibilityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3C1822" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#3C1822" stopOpacity="0.2" />
                </linearGradient>
                
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              
              <circle cx="500" cy="500" r="400" fill="url(#bgGradient)" className="radar-bg opacity-0 animate-radar-bg" />
              
              <g className="radar-shape">
                <circle cx="500" cy="500" r="8" fill="#8B2F41" filter="url(#glow)" className="radar-center opacity-0 animate-radar-center">
                  <animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite" />
                </circle>
                
                {/* Efficiency Axis */}
                <line x1="500" y1="500" x2="500" y2="150" stroke="rgba(139, 47, 65, 0.3)" strokeWidth="2" className="radar-line opacity-0 animate-radar-line-1" />
                <circle cx="500" cy="180" r="15" fill="#8B2F41" opacity="0" filter="url(#glow)" className="animate-radar-node-1">
                  <animate attributeName="cy" values="180;170;180" dur="4s" repeatCount="indefinite" />
                </circle>
                <text x="500" y="140" textAnchor="middle" fill="#8B2F41" className="dimension-label opacity-0 animate-radar-label-1 font-semibold text-lg">Efficiency</text>
                
                {/* Effectiveness Axis */}
                <line x1="500" y1="500" x2="800" y2="700" stroke="rgba(216, 160, 166, 0.3)" strokeWidth="2" className="radar-line opacity-0 animate-radar-line-2" />
                <circle cx="770" cy="680" r="15" fill="#D8A0A6" opacity="0" filter="url(#glow)" className="animate-radar-node-2">
                  <animate attributeName="cx" values="770;780;770" dur="4.5s" repeatCount="indefinite" />
                </circle>
                <text x="820" y="710" textAnchor="middle" fill="#D8A0A6" className="dimension-label opacity-0 animate-radar-label-2 font-semibold text-lg">Effectiveness</text>
                
                {/* Responsibility Axis */}
                <line x1="500" y1="500" x2="200" y2="700" stroke="rgba(60, 24, 34, 0.3)" strokeWidth="2" className="radar-line opacity-0 animate-radar-line-3" />
                <circle cx="230" cy="680" r="15" fill="#3C1822" opacity="0" filter="url(#glow)" className="animate-radar-node-3">
                  <animate attributeName="cx" values="230;220;230" dur="5s" repeatCount="indefinite" />
                </circle>
                <text x="180" y="710" textAnchor="middle" fill="#3C1822" className="dimension-label opacity-0 animate-radar-label-3 font-semibold text-lg">Responsibility</text>
                
                {/* Radar Triangle */}
                <path d="M 500 180 L 770 680 L 230 680 Z" fill="url(#efficiencyGradient)" opacity="0" className="animate-radar-triangle">
                  <animate attributeName="opacity" values="0.5;0.7;0.5" dur="5s" repeatCount="indefinite" />
                </path>
                
                {/* Pulsing Circles */}
                <circle cx="500" cy="500" r="100" fill="none" stroke="url(#effectivenessGradient)" strokeWidth="2" opacity="0" className="animate-radar-pulse-1">
                  <animate attributeName="r" values="100;350;100" dur="15s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.5;0;0.5" dur="15s" repeatCount="indefinite" />
                </circle>
                
                <circle cx="500" cy="500" r="150" fill="none" stroke="url(#responsibilityGradient)" strokeWidth="2" opacity="0" className="animate-radar-pulse-2">
                  <animate attributeName="r" values="150;400;150" dur="20s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0;0.3" dur="20s" repeatCount="indefinite" />
                </circle>
              </g>
            </svg>
          </div>

          {/* Explanation */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-stratified">
              <h3 className="text-2xl font-semibold mb-3 text-stratified">Efficiency</h3>
              <p className="text-gray-700">
                We measure and optimize the resources consumed by AI solutions, focusing on carbon footprint reduction, 
                cost per query optimization, and infrastructure utilization. Our approach ensures AI implementations 
                that are not only powerful but sustainable and economically viable for the long term.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-stratified-light">
              <h3 className="text-2xl font-semibold mb-3 text-stratified">Effectiveness</h3>
              <p className="text-gray-700">
                Beyond mere functionality, we evaluate AI solutions against the state-of-the-art benchmarks for 
                completeness, time efficiency, and value generation. Our methodologies quantify the true business 
                impact of AI implementations, ensuring tangible returns on technological investments.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-stratified-dark">
              <h3 className="text-2xl font-semibold mb-3 text-stratified">Responsibility</h3>
              <p className="text-gray-700">
                In an increasingly regulated landscape, we prioritize ethical considerations, regulatory compliance, 
                and risk management. Our governance frameworks address issues of bias, transparency, and legal 
                liability, protecting organizations while fostering innovation and trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentThesis;
