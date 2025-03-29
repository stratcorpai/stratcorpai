
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <span className="text-2xl font-heading font-bold text-stratified">
            Stratified Advisory
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#investment-thesis" className="text-foreground hover:text-stratified font-medium transition-colors">
            Investment Thesis
          </a>
          <a href="#board-service" className="text-foreground hover:text-stratified font-medium transition-colors">
            Board-as-a-Service
          </a>
          <a href="#team" className="text-foreground hover:text-stratified font-medium transition-colors">
            Our Team
          </a>
          <a href="#stratcorp-ai" className="text-foreground hover:text-stratified font-medium transition-colors">
            StratCorp.AI
          </a>
          <Button className="bg-stratified hover:bg-stratified-dark text-white">
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg mt-0 py-5 px-6 md:hidden flex flex-col space-y-4 animate-fade-in">
            <a 
              href="#investment-thesis" 
              className="text-foreground hover:text-stratified font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Investment Thesis
            </a>
            <a 
              href="#board-service" 
              className="text-foreground hover:text-stratified font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Board-as-a-Service
            </a>
            <a 
              href="#team" 
              className="text-foreground hover:text-stratified font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Our Team
            </a>
            <a 
              href="#stratcorp-ai" 
              className="text-foreground hover:text-stratified font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              StratCorp.AI
            </a>
            <Button className="bg-stratified hover:bg-stratified-dark text-white w-full">
              Contact Us
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
