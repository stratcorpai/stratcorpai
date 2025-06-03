
import { Linkedin, Mail, MapPin } from 'lucide-react';
import ContactCTA from './ContactCTA';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="footer-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
        </svg>
      </div>
      
      <div className="container-custom py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Enhanced company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-stratified to-stratified-dark rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white leading-none">Stratified</span>
                <span className="text-lg font-semibold text-stratified-light leading-none">Advisory</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed font-medium text-lg">
              Strategic advisory services for AI governance, cybersecurity resilience, and digital transformation. 
              Empowering boards and executives to navigate complex digital landscapes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <ContactCTA 
                variant="board-advisory" 
                size="default" 
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:text-white shadow-lg hover:shadow-xl"
              />
              <ContactCTA 
                variant="consulting" 
                size="default"
                className="shadow-lg hover:shadow-xl"
              />
            </div>
            
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3 group hover:text-white transition-colors duration-300">
                <Mail className="w-5 h-5 text-stratified-light group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">andreea@stratifiedadvisory.com</span>
              </div>
              <div className="flex items-center space-x-3 group hover:text-white transition-colors duration-300">
                <MapPin className="w-5 h-5 text-stratified-light group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">Seattle, Washington & Bucharest, Romania</span>
              </div>
            </div>
          </div>

          {/* Enhanced services section */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {[
                { href: '#team', label: 'Board Advisory' },
                { href: '#investment-thesis', label: 'Strategic Consulting' },
                { href: '#ai-governance', label: 'AI Governance' },
                { href: '#board-service', label: 'Digital Transformation' }
              ].map((item) => (
                <li key={item.href}>
                  <a 
                    href={item.href} 
                    className="text-gray-300 hover:text-white transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-white/5 block focus:ring-4 focus:ring-stratified/30 focus:outline-none"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Enhanced connect section */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Connect</h4>
            <div className="space-y-6">
              <ContactCTA 
                variant="consulting" 
                size="default" 
                className="w-full bg-white/10 hover:bg-white/20 border-2 border-white/20 text-white hover:text-white shadow-lg hover:shadow-xl"
              />
              
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/andreeabulisache" 
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-all duration-300 group border border-white/20 hover:border-white/40 focus:ring-4 focus:ring-stratified/30 focus:outline-none" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a 
                  href="mailto:andreea@stratifiedadvisory.com" 
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-all duration-300 group border border-white/20 hover:border-white/40 focus:ring-4 focus:ring-stratified/30 focus:outline-none"
                  aria-label="Email Contact"
                >
                  <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced footer bottom */}
        <div className="border-t border-gray-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
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
