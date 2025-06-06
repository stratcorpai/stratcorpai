
import { Linkedin, Mail, MapPin } from 'lucide-react';
import ContactCTA from './ContactCTA';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white rounded-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
      </div>
      
      <div className="container-custom py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Stratified Advisory
            </h3>
            <p className="text-gray-300 mb-8 max-w-md text-lg leading-relaxed">
              Strategic advisory services for AI governance, cybersecurity resilience, and digital transformation. 
              Empowering boards and executives to navigate complex digital landscapes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <ContactCTA variant="board-advisory" size="sm" className="bg-white/10 hover:bg-white/20 border-white/20 text-white hover:text-white" />
              <ContactCTA variant="consulting" size="sm" className="bg-white/10 hover:bg-white/20 border-white/20 text-white hover:text-white" />
            </div>
            
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium">andreea@stratifiedadvisory.com</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-medium">Seattle, Washington & Bucharest, Romania</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#team" className="hover:text-white transition-colors duration-300 link-underline font-medium">
                  Board Advisory
                </a>
              </li>
              <li>
                <a href="#investment-thesis" className="hover:text-white transition-colors duration-300 link-underline font-medium">
                  Strategic Consulting
                </a>
              </li>
              <li>
                <a href="#ai-governance" className="hover:text-white transition-colors duration-300 link-underline font-medium">
                  AI Governance
                </a>
              </li>
              <li>
                <a href="#board-service" className="hover:text-white transition-colors duration-300 link-underline font-medium">
                  Digital Transformation
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Connect</h4>
            <div className="space-y-6">
              <ContactCTA 
                variant="consulting" 
                size="default" 
                className="w-full bg-white/10 hover:bg-white/20 border-white/20 text-white hover:text-white backdrop-blur-sm"
              />
              
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/andreeabulisache" 
                  className="interactive bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-all duration-300 group shadow-lg hover:shadow-xl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin size={24} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a 
                  href="mailto:andreea@stratifiedadvisory.com" 
                  className="interactive bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-all duration-300 group shadow-lg hover:shadow-xl"
                >
                  <Mail size={24} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-16 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-gray-300 font-medium">
              © 2024 Stratified Advisory. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm max-w-md text-center leading-relaxed">
              Data stored securely in EU-based data centers. Your privacy is protected under strict data protection standards.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
