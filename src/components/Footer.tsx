
import { Mail, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <h3 className="text-2xl font-heading font-bold mb-6">Stratified Advisory</h3>
            <p className="mb-6 text-gray-300 max-w-md">
              Transforming executive leadership through AI-augmented human ingenuity. 
              Our Board-as-a-Service and strategic consulting solutions drive innovation and sustainable growth.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/stratifiedadvisory" 
                 className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
                 target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/stratifiedadv" 
                 className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors"
                 target="_blank" rel="noopener noreferrer">
                <Twitter size={20} />
              </a>
              <a href="mailto:contact@stratifiedadvisory.com" 
                 className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#board-service" className="hover:text-stratified-light transition-colors">Board-as-a-Service</a></li>
              <li><a href="#stratcorp-ai" className="hover:text-stratified-light transition-colors">AI Assessment</a></li>
              <li><a href="#" className="hover:text-stratified-light transition-colors">Cybersecurity Strategy</a></li>
              <li><a href="#" className="hover:text-stratified-light transition-colors">Digital Transformation</a></li>
              <li><a href="#" className="hover:text-stratified-light transition-colors">Growth Advisory</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>Seattle, Washington & Bucharest, Romania</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <a href="mailto:contact@stratifiedadvisory.com" className="hover:text-stratified-light transition-colors">
                  contact@stratifiedadvisory.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Stratified Advisory. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
