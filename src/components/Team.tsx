
import ContactCTA from './ContactCTA';
import TeamGrid from './team/TeamGrid';
import ExpertiseGrid from './team/ExpertiseGrid';
import { expertiseItems } from './team/TeamData';
import { motion } from 'framer-motion';

const Team = () => {
  return (
    <section id="team" className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-stratified rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-stratified-light rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-8 gradient-text text-3xl md:text-4xl lg:text-5xl font-black text-balance">
            Our Founding Team
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium text-pretty">
            Led by world-class professionals with deep expertise in AI, cybersecurity, and digital transformation.
          </p>
        </motion.div>

        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <TeamGrid />
        </motion.div>
        
        <motion.div 
          className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 hover:border-stratified/20 transition-all duration-500 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4 className="text-2xl md:text-3xl font-black mb-8 text-stratified text-center">
            Combined Board-Ready Expertise & Value
          </h4>
          <ExpertiseGrid items={expertiseItems} />
        </motion.div>

        <motion.div 
          className="bg-gradient-to-br from-stratified-lighter/60 via-stratified-light/40 to-stratified-lighter/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 text-center shadow-2xl border border-stratified-lighter/50"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl md:text-2xl font-black mb-4 text-stratified">
            Board & Fund Focus
          </h4>
          <p className="text-gray-700 mb-8 leading-relaxed text-base md:text-lg max-w-4xl mx-auto text-pretty">
            Scale-up boards in enterprise SaaS, AI, or regulated markets (Series B–D) • Operating partner/advisor to PE or VC funds • Innovation, AI, ESG, or GTM-focused board committees • International expansion and ecosystem development • Deep-tech and scientific discovery ventures
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6 mt-8">
            <ContactCTA variant="board-advisory" size="default" className="shadow-lg hover:shadow-xl" />
            <ContactCTA variant="consulting" size="default" className="shadow-lg hover:shadow-xl" />
            <ContactCTA variant="partnership" size="default" className="shadow-lg hover:shadow-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
