
import { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      isScrolled ? 'bg-background/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img 
            src="/lovable-uploads/bbbadf15-0ecd-4cdd-88b6-7bb56e21837f.png" 
            alt="Stratified Advisory Logo" 
            className="h-16 md:h-20" 
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="#investment-thesis" 
            className="text-foreground hover:text-stratified font-medium transition-colors"
            onClick={handleNavClick('investment-thesis')}
          >
            Investment Thesis
          </a>
          <a 
            href="#board-service" 
            className="text-foreground hover:text-stratified font-medium transition-colors"
            onClick={handleNavClick('board-service')}
          >
            Board-as-a-Service
          </a>
          <a 
            href="#team" 
            className="text-foreground hover:text-stratified font-medium transition-colors"
            onClick={handleNavClick('team')}
          >
            Our Team
          </a>
          <a 
            href="#stratcorp-ai" 
            className="text-foreground hover:text-stratified font-medium transition-colors"
            onClick={handleNavClick('stratcorp-ai')}
          >
            StratCorp.AI
          </a>
          <Button 
            className="bg-stratified hover:bg-stratified-dark text-white"
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
            <a 
              href="#investment-thesis" 
              className="text-foreground hover:text-stratified font-medium transition-colors"
              onClick={handleNavClick('investment-thesis')}
            >
              Investment Thesis
            </a>
            <a 
              href="#board-service" 
              className="text-foreground hover:text-stratified font-medium transition-colors"
              onClick={handleNavClick('board-service')}
            >
              Board-as-a-Service
            </a>
            <a 
              href="#team" 
              className="text-foreground hover:text-stratified font-medium transition-colors"
              onClick={handleNavClick('team')}
            >
              Our Team
            </a>
            <a 
              href="#stratcorp-ai" 
              className="text-foreground hover:text-stratified font-medium transition-colors"
              onClick={handleNavClick('stratcorp-ai')}
            >
              StratCorp.AI
            </a>
            <Button 
              className="bg-stratified hover:bg-stratified-dark text-white w-full"
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
