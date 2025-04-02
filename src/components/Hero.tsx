
import { Button } from '@/components/ui/button';
import { ArrowRight, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/lovable-uploads/0ae8bdf5-33e6-4040-b227-017f8717c813.png" 
          alt="Abstract blocks representing innovative structure" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-stratified/90 to-transparent z-0"></div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <div className="max-w-3xl mx-auto mt-20 px-4">
          <div className="mb-6 flex justify-center">
            <img 
              src="/lovable-uploads/bbbadf15-0ecd-4cdd-88b6-7bb56e21837f.png" 
              alt="Stratified Advisory Logo" 
              className="h-48 md:h-64"
            />
          </div>
          <h1 className="font-bold mb-5 text-white drop-shadow-md text-4xl md:text-5xl">
            Welcome to<br />Stratified Advisory
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white max-w-2xl mx-auto drop-shadow-sm font-medium leading-relaxed">
            Experience the power of our <span className="font-bold">Board-as-a-Service</span> practice to 
            elevate and transform your executive board whether you are a VC, a 
            startup or a small medium business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Button 
              className="bg-[#3C1822] hover:bg-[#2c111a] text-white px-7 py-5 text-base rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={handleLearnMoreClick}
            >
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Link to="/assessment">
              <Button 
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-7 py-5 text-base rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                AI-Powered Assessment Suite <LineChart className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
