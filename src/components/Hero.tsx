
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const handleLearnMoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('investment-thesis');
    
    if (element) {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleAIGovernanceClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('ai-governance');
    
    if (element) {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <img 
          src="/lovable-uploads/0ae8bdf5-33e6-4040-b227-017f8717c813.png" 
          alt="Abstract blocks representing innovative structure" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-stratified/90 via-stratified/75 to-stratified-dark/85"></div>
      </motion.div>

      {/* Main content */}
      <div className="container-custom relative z-10 text-center">
        <motion.div 
          className="max-w-4xl mx-auto mt-20 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          >
            <img 
              src="/lovable-uploads/bbbadf15-0ecd-4cdd-88b6-7bb56e21837f.png" 
              alt="Stratified Advisory Logo" 
              className="h-48 md:h-64 drop-shadow-xl"
            />
          </motion.div>
          
          <motion.h1 
            className="font-black mb-6 text-white text-4xl md:text-6xl lg:text-7xl tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
          >
            Welcome to<br />
            <span className="font-black">Stratified Advisory</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-10 text-white/95 max-w-3xl mx-auto font-medium leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
          >
            Experience the power of our <span className="font-bold text-white">Board-as-a-Service</span> practice to 
            elevate and transform your executive board whether you are a VC, a 
            startup or a small medium business.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <Button 
              className="btn-primary btn-hover-effect px-8 py-6 text-lg rounded-full group"
              onClick={handleLearnMoreClick}
            >
              Learn More 
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              className="btn-secondary btn-hover-effect px-8 py-6 text-lg rounded-full bg-white/90 text-stratified hover:bg-white group"
              onClick={handleAIGovernanceClick}
            >
              AI Governance for Boards 
              <FileText className="ml-3 h-5 w-5 group-hover:translate-y-[-2px] transition-transform duration-300" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent z-5"></div>
    </div>
  );
};

export default Hero;
