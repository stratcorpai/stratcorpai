
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactCTA from './ContactCTA';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-white via-gray-50/30 to-stratified/5">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 z-0 opacity-3">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="hero-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-stratified/20" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-stratified/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 left-20 w-24 h-24 bg-stratified-light/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            {/* Enhanced typography with better hierarchy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-stratified/10 text-stratified font-semibold text-sm rounded-full border border-stratified/20 shadow-sm">
                Strategic Advisory Services
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gray-900 drop-shadow-sm">Transform Your</span>
              <br />
              <span className="gradient-text drop-shadow-sm">Digital Future</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-800 leading-relaxed font-medium max-w-xl">
              Expert guidance in AI governance, cybersecurity resilience, and strategic digital transformation for forward-thinking organizations.
            </p>
            
            {/* Enhanced button group with better styling */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <ContactCTA 
                variant="consulting" 
                size="lg" 
                className="group bg-stratified hover:bg-stratified-dark shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-white font-semibold px-8 py-4 rounded-xl border-0 focus:ring-4 focus:ring-stratified/30 focus:outline-none"
              />
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('investment-thesis')}
                className="group border-2 border-stratified text-stratified hover:bg-stratified hover:text-white font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 focus:ring-4 focus:ring-stratified/30 focus:outline-none"
              >
                Our Approach
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>

            {/* Enhanced trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap items-center gap-6 text-sm text-gray-700"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium">Board-Ready Expertise</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span className="font-medium">Global Reach</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-stratified rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span className="font-medium">Proven Results</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Enhanced visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              {/* Enhanced glow effect */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-stratified via-stratified-light to-stratified-dark opacity-20 blur-xl"></div>
              
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                {/* Enhanced header */}
                <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Strategic Dashboard</h3>
                      <p className="text-gray-600 font-medium">Real-time insights & governance</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced content area */}
                <div className="p-6 space-y-6">
                  {/* AI Governance Score */}
                  <div className="bg-gradient-to-r from-stratified/5 to-stratified-light/10 p-4 rounded-xl border border-stratified/10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-900">AI Governance Score</span>
                      <span className="text-2xl font-bold text-stratified">94%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-stratified to-stratified-light rounded-full shadow-sm"
                        initial={{ width: 0 }}
                        animate={{ width: isVisible ? '94%' : 0 }}
                        transition={{ duration: 2, delay: 1 }}
                      />
                    </div>
                  </div>
                  
                  {/* Metrics grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
                      <div className="text-2xl font-bold text-gray-900 mb-1">42</div>
                      <div className="text-sm font-medium text-gray-600">Risk Assessments</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
                      <div className="text-2xl font-bold text-gray-900 mb-1">18</div>
                      <div className="text-sm font-medium text-gray-600">Board Meetings</div>
                    </div>
                  </div>
                  
                  {/* Chart placeholder with better styling */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 h-32 rounded-xl border border-gray-200 flex items-center justify-center">
                    <div className="text-gray-500 font-medium">Strategic Impact Analytics</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Enhanced scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
          onClick={() => scrollToSection('investment-thesis')}
        >
          <div className="flex flex-col items-center gap-2 text-gray-600 hover:text-stratified transition-colors duration-300">
            <span className="text-sm font-medium group-hover:text-stratified">Discover Our Approach</span>
            <ChevronDown className="w-6 h-6 animate-bounce group-hover:text-stratified" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
