
import { Button } from '@/components/ui/button';
import { ArrowRight, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  const handleLearnMoreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Scroll to the investment thesis section with offset
    const element = document.getElementById('investment-thesis');
    
    if (element) {
      // Get the navbar height for offset
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
    <div className="relative min-h-screen flex items-center justify-center bg-stratified/80">
      {/* Background Image with subtle zoom animation */}
      <motion.div 
        className="absolute inset-0 z-0 overflow-hidden"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      >
        <img 
          src="/lovable-uploads/0ae8bdf5-33e6-4040-b227-017f8717c813.png" 
          alt="Abstract blocks representing innovative structure" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Enhanced overlay with glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-r from-stratified/90 via-stratified/70 to-transparent backdrop-blur-sm z-0"></div>

      {/* Content with staggered animations */}
      <div className="container-custom relative z-10 text-center">
        <motion.div 
          className="max-w-3xl mx-auto mt-20 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div 
            className="mb-6 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <img 
              src="/lovable-uploads/bbbadf15-0ecd-4cdd-88b6-7bb56e21837f.png" 
              alt="Stratified Advisory Logo" 
              className="h-48 md:h-64"
            />
          </motion.div>
          
          <motion.h1 
            className="font-bold mb-5 text-white drop-shadow-md text-4xl md:text-5xl tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Welcome to<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80 font-extrabold">
              Stratified Advisory
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 text-white max-w-2xl mx-auto drop-shadow-sm font-medium leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Experience the power of our <span className="font-bold">Board-as-a-Service</span> practice to 
            elevate and transform your executive board whether you are a VC, a 
            startup or a small medium business.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Button 
              className="bg-[#3C1822] hover:bg-[#2c111a] text-white px-7 py-5 text-base rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 transform duration-300"
              onClick={handleLearnMoreClick}
            >
              Learn More <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Link to="/assessment">
              <Button 
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-7 py-5 text-base rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 transform duration-300"
              >
                AI-Powered Assessment Suite <LineChart className="ml-2 h-5 w-5 group-hover:translate-y-[-2px] transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute bottom-10 left-10 w-24 h-24 border border-white/10 rounded-full backdrop-blur-lg opacity-30 animate-pulse"></div>
      <div className="absolute top-20 right-12 w-16 h-16 border border-white/10 rounded-full backdrop-blur-lg opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default Hero;
