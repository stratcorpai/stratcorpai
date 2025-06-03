
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Shield, ChevronDown, ChevronUp } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const InvestmentThesis = () => {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const isMobile = useIsMobile();

  const toggleCard = (index: number) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedCards(newExpanded);
  };

  const principles = [
    {
      icon: Zap,
      title: "Efficiency",
      shortDescription: "Optimizing AI resources for sustainability and economic viability.",
      fullDescription: "We measure and optimize the resources consumed by AI solutions, focusing on carbon footprint reduction, cost per query optimization, and infrastructure utilization. Our approach ensures AI implementations that are not only powerful but sustainable and economically viable for the long term."
    },
    {
      icon: Target,
      title: "Effectiveness", 
      shortDescription: "Quantifying AI impact against state-of-the-art benchmarks.",
      fullDescription: "Beyond mere functionality, we evaluate AI solutions against the state-of-the-art benchmarks for completeness, time efficiency, and value generation. Our methodologies quantify the true business impact of AI implementations, ensuring tangible returns on technological investments."
    },
    {
      icon: Shield,
      title: "Responsibility",
      shortDescription: "Ethical AI governance for regulated environments.",
      fullDescription: "In an increasingly regulated landscape, we prioritize ethical considerations, regulatory compliance, and risk management. Our governance frameworks address issues of bias, transparency, and legal liability, protecting organizations while fostering innovation and trust."
    }
  ];

  return (
    <section id="investment-thesis" className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 gradient-text text-3xl md:text-4xl lg:text-5xl font-bold">Our Investment Thesis</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            In the era of generative AI, we believe in balancing three critical dimensions that define successful technological integration and implementation.
          </p>
        </motion.div>

        {/* Modern Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            const isExpanded = expandedCards.has(index);
            const showExpandButton = isMobile && principle.fullDescription !== principle.shortDescription;
            
            return (
              <motion.div
                key={principle.title}
                className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl group border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-6 md:p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-stratified to-stratified-dark rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-stratified">
                    {principle.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {isMobile && !isExpanded ? principle.shortDescription : principle.fullDescription}
                  </p>
                  
                  {showExpandButton && (
                    <button
                      onClick={() => toggleCard(index)}
                      className="text-stratified font-medium hover:text-stratified-dark transition-colors flex items-center gap-1 mx-auto"
                    >
                      {isExpanded ? 'Show Less' : 'Learn More'}
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Summary */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8 border-l-4 border-stratified">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-stratified">The Stratified Advantage</h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Our three-dimensional framework ensures that AI implementations deliver not just technological advancement, 
              but sustainable, effective, and responsible business transformation. We bridge the gap between innovation 
              and practical value creation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentThesis;
