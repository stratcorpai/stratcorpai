
import { Mail, MapPin, Linkedin, Twitter } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white dark:bg-gray-950">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Company Info */}
          <div className="md:col-span-5">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/bbbadf15-0ecd-4cdd-88b6-7bb56e21837f.png" 
                alt="Stratified Advisory Logo" 
                className="h-14 mr-3"
              />
              <h3 className="text-2xl font-heading font-bold">Stratified Advisory</h3>
            </div>
            <p className="mb-6 text-gray-300 dark:text-gray-400 max-w-md leading-relaxed">
              Transforming executive leadership through AI-augmented human ingenuity. 
              Our Board-as-a-Service and strategic consulting solutions drive innovation and sustainable growth.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/stratifiedadvisory" 
                 className="bg-gray-800 hover:bg-stratified hover:text-white p-2 rounded-full transition-colors"
                 target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/stratifiedadv" 
                 className="bg-gray-800 hover:bg-stratified hover:text-white p-2 rounded-full transition-colors"
                 target="_blank" rel="noopener noreferrer">
                <Twitter size={20} />
              </a>
              <a href="mailto:contact@stratifiedadvisory.com" 
                 className="bg-gray-800 hover:bg-stratified hover:text-white p-2 rounded-full transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-semibold mb-4 text-white dark:text-white">Services</h4>
            <ul className="space-y-3 text-gray-300 dark:text-gray-400">
              <li>
                <a href="#board-service" className="hover:text-stratified-light transition-colors inline-block py-1">
                  Board-as-a-Service
                </a>
              </li>
              <li>
                <a href="#stratcorp-ai" className="hover:text-stratified-light transition-colors inline-block py-1">
                  AI Assessment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-stratified-light transition-colors inline-block py-1">
                  Cybersecurity Strategy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-stratified-light transition-colors inline-block py-1">
                  Digital Transformation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-stratified-light transition-colors inline-block py-1">
                  Growth Advisory
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-lg font-semibold mb-4 text-white dark:text-white">Contact Us</h4>
            <ul className="space-y-4 text-gray-300 dark:text-gray-400">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 flex-shrink-0 text-stratified-light" />
                <span className="leading-relaxed">
                  Seattle | Bucharest | Amsterdam
                </span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 flex-shrink-0 text-stratified-light" />
                <a href="mailto:contact@stratifiedadvisory.com" className="hover:text-stratified-light transition-colors">
                  contact@stratifiedadvisory.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-800 dark:bg-gray-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
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
