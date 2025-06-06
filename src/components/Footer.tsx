
import { Linkedin, Mail, MapPin } from 'lucide-react';
import ContactCTA from './ContactCTA';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white rounded-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full"></div>
      </div>
      
      <div className="container-custom py-20 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-3xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Stratified Advisory
            </h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Strategic advisory services for AI governance, cybersecurity resilience, and digital transformation. 
              Empowering boards and executives to navigate complex digital landscapes.
            </p>
            
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-medium">andreea@stratifiedadvisory.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/10 rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-medium">US | EMEA | ASIA</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-4 text-gray-300">
              <li>
                <a href="#team" className="hover:text-white transition-colors duration-300 font-medium group">
                  <span className="border-b border-transparent group-hover:border-white pb-1">Board Advisory</span>
                </a>
              </li>
              <li>
                <a href="#investment-thesis" className="hover:text-white transition-colors duration-300 font-medium group">
                  <span className="border-b border-transparent group-hover:border-white pb-1">Strategic Consulting</span>
                </a>
              </li>
              <li>
                <a href="#ai-governance" className="hover:text-white transition-colors duration-300 font-medium group">
                  <span className="border-b border-transparent group-hover:border-white pb-1">AI Governance</span>
                </a>
              </li>
              <li>
                <a href="#board-service" className="hover:text-white transition-colors duration-300 font-medium group">
                  <span className="border-b border-transparent group-hover:border-white pb-1">Digital Transformation</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Connect With Us</h4>
            <div className="space-y-6">
              <ContactCTA 
                variant="consulting" 
                size="default" 
                customText="Contact Us"
                customIcon={Mail}
                className="w-full bg-white/10 hover:bg-white/20 border-white/20 text-white hover:text-white backdrop-blur-sm"
              />
              
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/andreeabulisache" 
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-all duration-300 group shadow-lg hover:shadow-xl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin size={24} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a 
                  href="mailto:andreea@stratifiedadvisory.com" 
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-all duration-300 group shadow-lg hover:shadow-xl"
                >
                  <Mail size={24} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                Ready to transform your organization's digital future? Let's discuss how we can help.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-16 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-gray-300 font-medium">
              © {currentYear} Stratified Advisory. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm max-w-md text-center md:text-right leading-relaxed">
              Data stored securely in EU-based data centers. Your privacy is protected under strict data protection standards.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
