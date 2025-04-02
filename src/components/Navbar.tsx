
import { useState, useEffect } from 'react';
import { Menu, X, Mail, LineChart, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleContactClick = () => {
    window.location.href = "mailto:andreea@stratifiedadvisory.com?subject=I%20am%20ready%20to%20be%20Stratified!&body=**Crafted%20by%20humans%2C%20delivered%20by%20technology%20%E2%80%93%20bridging%20communication%20gaps%20with%20precision%20and%20a%20personal%20touch.**%0A%0ADear%20Andreea%2C%20%0A%0APlease%20help%20me%20get%20stratified%2C%20here%20are%20some%20details%20about%20my%20company%3A%20%0A%0ACompany%20location%3A%20%0ASize%3A%20%0AWebsite%3A%20%0A%0AThank%20you!%20%0A%0A%5BYour%20Name%5D%20%0A";
  };

  const handleNavClick = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    
    if (element) {
      // Get the navbar height for offset
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
      
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu if open
      if (isOpen) setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/bbbadf15-0ecd-4cdd-88b6-7bb56e21837f.png" 
            alt="Stratified Advisory Logo" 
            className="h-16 md:h-20" 
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {isHomePage ? (
            <>
              <a 
                href="#investment-thesis" 
                className="text-foreground hover:text-stratified font-medium transition-colors relative group"
                onClick={handleNavClick('investment-thesis')}
              >
                Investment Thesis
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-stratified group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#board-service" 
                className="text-foreground hover:text-stratified font-medium transition-colors relative group"
                onClick={handleNavClick('board-service')}
              >
                Board-as-a-Service
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-stratified group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#team" 
                className="text-foreground hover:text-stratified font-medium transition-colors relative group"
                onClick={handleNavClick('team')}
              >
                Our Team
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-stratified group-hover:w-full transition-all duration-300"></span>
              </a>
              <a 
                href="#stratcorp-ai" 
                className="text-foreground hover:text-stratified font-medium transition-colors relative group"
                onClick={handleNavClick('stratcorp-ai')}
              >
                StratCorp.AI
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-stratified group-hover:w-full transition-all duration-300"></span>
              </a>
            </>
          ) : (
            <Link 
              to="/" 
              className="text-foreground hover:text-stratified font-medium transition-colors relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-stratified group-hover:w-full transition-all duration-300"></span>
            </Link>
          )}
          
          <Button 
            className="bg-stratified hover:bg-stratified-dark text-white shadow-md hover:shadow-lg transition-all"
            onClick={handleContactClick}
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            className="text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm shadow-lg mt-0 py-5 px-6 md:hidden flex flex-col space-y-4 animate-fade-in">
            {isHomePage ? (
              <>
                <a 
                  href="#investment-thesis" 
                  className="text-foreground hover:text-stratified font-medium transition-colors border-l-2 border-transparent hover:border-stratified pl-2"
                  onClick={handleNavClick('investment-thesis')}
                >
                  Investment Thesis
                </a>
                <a 
                  href="#board-service" 
                  className="text-foreground hover:text-stratified font-medium transition-colors border-l-2 border-transparent hover:border-stratified pl-2"
                  onClick={handleNavClick('board-service')}
                >
                  Board-as-a-Service
                </a>
                <a 
                  href="#team" 
                  className="text-foreground hover:text-stratified font-medium transition-colors border-l-2 border-transparent hover:border-stratified pl-2"
                  onClick={handleNavClick('team')}
                >
                  Our Team
                </a>
                <a 
                  href="#stratcorp-ai" 
                  className="text-foreground hover:text-stratified font-medium transition-colors border-l-2 border-transparent hover:border-stratified pl-2"
                  onClick={handleNavClick('stratcorp-ai')}
                >
                  StratCorp.AI
                </a>
              </>
            ) : (
              <Link 
                to="/" 
                className="text-foreground hover:text-stratified font-medium transition-colors border-l-2 border-transparent hover:border-stratified pl-2"
              >
                Home
              </Link>
            )}
            
            <Button 
              className="bg-stratified hover:bg-stratified-dark text-white w-full shadow-md"
              onClick={handleContactClick}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Us
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
