
import { useEffect, useRef } from 'react';

const InvestmentThesis = () => {
  const axisRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (axisRef.current) {
        const rect = axisRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isInView) {
          const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
          axisRef.current.style.transform = `rotateX(${60 + scrollProgress * 5}deg) rotateY(${scrollProgress * 20}deg) rotateZ(${45 - scrollProgress * 5}deg)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="investment-thesis" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4 gradient-text">Our Investment Thesis</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            In the era of generative AI, we believe in balancing three critical dimensions that define successful technological integration and implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Axis Visualization */}
          <div className="axis-container h-[400px] flex items-center justify-center">
            <div ref={axisRef} className="axis-3d relative w-[300px] h-[300px]">
              {/* Z-Axis (Responsibility) */}
              <div className="absolute top-0 left-0 h-[300px] w-2 bg-gradient-to-t from-stratified-light to-stratified" 
                   style={{ transform: 'translateX(150px) rotateY(0deg) translateZ(150px)' }}>
                <div className="absolute -left-12 top-0 transform -translate-y-8 whitespace-nowrap">
                  <span className="font-semibold text-stratified">Responsibility</span>
                </div>
              </div>

              {/* X-Axis (Efficiency) */}
              <div className="absolute top-0 left-0 w-[300px] h-2 bg-gradient-to-r from-stratified-light to-stratified" 
                   style={{ transform: 'translateY(150px) rotateX(0deg) translateZ(150px)' }}>
                <div className="absolute right-0 -bottom-8 whitespace-nowrap">
                  <span className="font-semibold text-stratified">Efficiency</span>
                </div>
              </div>

              {/* Y-Axis (Effectiveness) */}
              <div className="absolute top-0 left-0 h-[300px] w-2 bg-gradient-to-b from-stratified-light to-stratified" 
                   style={{ transform: 'translateX(150px) rotateZ(-90deg) translateY(-150px)' }}>
                <div className="absolute -right-12 top-0 transform -translate-y-8 whitespace-nowrap">
                  <span className="font-semibold text-stratified">Effectiveness</span>
                </div>
              </div>

              {/* Central Sphere */}
              <div className="absolute top-[125px] left-[125px] w-[50px] h-[50px] rounded-full bg-stratified shadow-lg"
                   style={{ transform: 'translateZ(150px)' }}>
              </div>
            </div>
          </div>

          {/* Explanation */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-stratified">Efficiency</h3>
              <p className="text-gray-700">
                We measure and optimize the resources consumed by AI solutions, focusing on carbon footprint reduction, 
                cost per query optimization, and infrastructure utilization. Our approach ensures AI implementations 
                that are not only powerful but sustainable and economically viable for the long term.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-stratified">Effectiveness</h3>
              <p className="text-gray-700">
                Beyond mere functionality, we evaluate AI solutions against the state-of-the-art benchmarks for 
                completeness, time efficiency, and value generation. Our methodologies quantify the true business 
                impact of AI implementations, ensuring tangible returns on technological investments.
              </p>
            </div>
            
            <div>
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
