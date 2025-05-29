import { useState } from 'react';
import { Linkedin, Mail, MapPin } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import ContactForm from './ContactForm';
import ContactCTA from './ContactCTA';
const Footer = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  return <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Stratified Advisory</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Strategic advisory services for AI governance, cybersecurity resilience, and digital transformation. 
              Empowering boards and executives to navigate complex digital landscapes.
            </p>
            <div className="flex space-x-4 mb-6">
              <ContactCTA variant="board-advisory" size="sm" />
              <ContactCTA variant="consulting" size="sm" />
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>andreea@stratifiedadvisory.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Seattle, Washington & Bucharest, Romania</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#team" className="hover:text-white transition-colors">Board Advisory</a></li>
              <li><a href="#investment-thesis" className="hover:text-white transition-colors">Strategic Consulting</a></li>
              <li><a href="#ai-governance" className="hover:text-white transition-colors">AI Governance</a></li>
              <li><a href="#board-service" className="hover:text-white transition-colors">Digital Transformation</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-4">
              <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full border-white hover:bg-white text-slate-950">
                    Get in Touch
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto p-0 border-0">
                  <ContactForm />
                </DialogContent>
              </Dialog>
              
              <div className="flex space-x-3">
                <a href="https://linkedin.com/in/andreeabulisache" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:andreea@stratifiedadvisory.com" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © 2024 Stratified Advisory. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs max-w-md text-center">
              Data stored securely in EU-based data centers. Your privacy is protected under strict data protection standards.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;