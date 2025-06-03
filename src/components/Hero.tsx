
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
      {/* Enhanced background with parallax effect */}
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
        <div className="absolute inset-0 bg-gradient-to-br from-stratified/95 via-stratified/80 to-stratified-dark/90"></div>
      </motion.div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 border border-white/10 rounded-full backdrop-blur-lg"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-32 right-20 w-20 h-20 border border-white/15 rounded-xl backdrop-blur-lg"
          animate={{ y: [0, 15, 0], rotate: [0, -90, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 right-10 w-16 h-16 bg-white/5 rounded-full backdrop-blur-lg"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

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
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-white/10 rounded-3xl blur-2xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <img 
                src="/lovable-uploads/bbbadf15-0ecd-4cdd-88b6-7bb56e21837f.png" 
                alt="Stratified Advisory Logo" 
                className="relative h-48 md:h-64 drop-shadow-2xl"
              />
            </div>
          </motion.div>
          
          <motion.h1 
            className="font-black mb-6 text-white text-4xl md:text-6xl lg:text-7xl tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{ 
              textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 40px rgba(255,255,255,0.1)' 
            }}
          >
            Welcome to<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/90 font-black">
              Stratified Advisory
            </span>
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
              className="btn-primary btn-hover-effect px-8 py-6 text-lg rounded-full shadow-brand hover:shadow-elevated transition-all duration-300 group"
              onClick={handleLearnMoreClick}
            >
              Learn More 
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              className="btn-secondary btn-hover-effect px-8 py-6 text-lg rounded-full backdrop-blur-md border-white/30 hover:border-white/50 transition-all duration-300 group"
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
