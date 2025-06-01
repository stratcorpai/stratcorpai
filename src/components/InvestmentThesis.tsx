
import { motion } from 'framer-motion';
import { Zap, Target, Shield } from 'lucide-react';

const InvestmentThesis = () => {
  const principles = [
    {
      icon: Zap,
      title: "Efficiency",
      description: "We measure and optimize the resources consumed by AI solutions, focusing on carbon footprint reduction, cost per query optimization, and infrastructure utilization. Our approach ensures AI implementations that are not only powerful but sustainable and economically viable for the long term."
    },
    {
      icon: Target,
      title: "Effectiveness", 
      description: "Beyond mere functionality, we evaluate AI solutions against the state-of-the-art benchmarks for completeness, time efficiency, and value generation. Our methodologies quantify the true business impact of AI implementations, ensuring tangible returns on technological investments."
    },
    {
      icon: Shield,
      title: "Responsibility",
      description: "In an increasingly regulated landscape, we prioritize ethical considerations, regulatory compliance, and risk management. Our governance frameworks address issues of bias, transparency, and legal liability, protecting organizations while fostering innovation and trust."
    }
  ];

  return (
    <section id="investment-thesis" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 gradient-text">Our Investment Thesis</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            In the era of generative AI, we believe in balancing three critical dimensions that define successful technological integration and implementation.
          </p>
        </motion.div>

        {/* Modern Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={principle.title}
                className="card-modern p-8 hover:shadow-xl transition-all duration-300 group bg-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-stratified rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-stratified">
                    {principle.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {principle.description}
                  </p>
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
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 border-l-4 border-stratified">
            <h3 className="text-2xl font-semibold mb-4 text-stratified">The Stratified Advantage</h3>
            <p className="text-lg text-gray-700">
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
