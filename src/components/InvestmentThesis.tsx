
import { motion } from 'framer-motion';
import { Zap, Target, Shield } from 'lucide-react';

const InvestmentThesis = () => {
  const principles = [
    {
      icon: Zap,
      title: "Efficiency",
      color: "stratified",
      description: "We measure and optimize the resources consumed by AI solutions, focusing on carbon footprint reduction, cost per query optimization, and infrastructure utilization. Our approach ensures AI implementations that are not only powerful but sustainable and economically viable for the long term."
    },
    {
      icon: Target,
      title: "Effectiveness", 
      color: "stratified-light",
      description: "Beyond mere functionality, we evaluate AI solutions against the state-of-the-art benchmarks for completeness, time efficiency, and value generation. Our methodologies quantify the true business impact of AI implementations, ensuring tangible returns on technological investments."
    },
    {
      icon: Shield,
      title: "Responsibility",
      color: "stratified-dark", 
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual Representation */}
          <motion.div 
            className="relative h-[500px] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Central Hub */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="w-24 h-24 bg-stratified rounded-full flex items-center justify-center shadow-lg"
                animate={{ 
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 10px 25px rgba(139, 47, 65, 0.2)",
                    "0 20px 40px rgba(139, 47, 65, 0.3)", 
                    "0 10px 25px rgba(139, 47, 65, 0.2)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-white font-bold text-sm">AI</span>
              </motion.div>
            </div>

            {/* Orbiting Elements */}
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              const angle = (index * 120) - 90; // Start from top, 120 degrees apart
              const radius = 160;
              const x = Math.cos(angle * Math.PI / 180) * radius;
              const y = Math.sin(angle * Math.PI / 180) * radius;
              
              return (
                <motion.div
                  key={principle.title}
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.4 + (index * 0.2),
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className={`w-16 h-16 bg-${principle.color} rounded-full flex items-center justify-center shadow-lg cursor-pointer group`}
                    whileHover={{ scale: 1.1 }}
                    animate={{ 
                      y: [0, -8, 0],
                    }}
                    transition={{ 
                      y: { 
                        duration: 2 + index * 0.5, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  </motion.div>
                  
                  {/* Connecting Lines */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 + (index * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div 
                      className="absolute w-0.5 bg-gradient-to-r from-gray-300 to-transparent"
                      style={{
                        height: `${radius - 48}px`,
                        left: '50%',
                        top: '50%',
                        transformOrigin: 'top center',
                        transform: `translateX(-50%) rotate(${angle + 180}deg)`
                      }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Background Circles */}
            <motion.div 
              className="absolute inset-0 rounded-full border border-gray-200"
              style={{ width: '320px', height: '320px', margin: 'auto' }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            />
            <motion.div 
              className="absolute inset-0 rounded-full border border-gray-100"
              style={{ width: '400px', height: '400px', margin: 'auto' }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* Content Cards */}
          <div className="space-y-6">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={principle.title}
                  className="card-modern p-6 hover:shadow-xl transition-all duration-300 group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-${principle.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-xl font-semibold mb-3 text-${principle.color} group-hover:text-opacity-80 transition-colors`}>
                        {principle.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Summary */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
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
