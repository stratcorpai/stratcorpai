
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
    <section id="investment-thesis" className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-8 gradient-text text-3xl md:text-4xl lg:text-5xl font-black text-balance">
            Our Investment Thesis
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium text-pretty">
            In the era of generative AI, we believe in balancing three critical dimensions that define successful technological integration and implementation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-20">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            const isExpanded = expandedCards.has(index);
            const showExpandButton = isMobile && principle.fullDescription !== principle.shortDescription;
            
            return (
              <motion.div
                key={principle.title}
                className="card-modern group hover:shadow-brand transition-all duration-500 interactive border-2 hover:border-stratified/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="p-8 md:p-10 text-center">
                  <div className="relative mb-8">
                    <motion.div 
                      className="w-20 h-20 bg-gradient-to-br from-stratified via-stratified-dark to-stratified rounded-2xl flex items-center justify-center mx-auto shadow-brand"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <div className="absolute inset-0 w-20 h-20 mx-auto bg-stratified/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 text-stratified">
                    {principle.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    {isMobile && !isExpanded ? principle.shortDescription : principle.fullDescription}
                  </p>
                  
                  {showExpandButton && (
                    <motion.button
                      onClick={() => toggleCard(index)}
                      className="text-stratified font-semibold hover:text-stratified-dark transition-colors flex items-center gap-2 mx-auto group/btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isExpanded ? 'Show Less' : 'Learn More'}
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={18} className="group-hover/btn:translate-y-0.5 transition-transform duration-200" />
                      </motion.div>
                    </motion.button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="max-w-5xl mx-auto card-modern p-8 md:p-12 border-l-4 border-stratified shadow-brand">
            <h3 className="text-2xl md:text-3xl font-black mb-6 text-stratified">
              The Stratified Advantage
            </h3>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-pretty">
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
