
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import ContactForm from './ContactForm';
import { ArrowRight, Users, Target, Handshake } from 'lucide-react';

interface ContactCTAProps {
  variant?: 'board-advisory' | 'consulting' | 'partnership';
  className?: string;
  size?: 'sm' | 'default' | 'lg';
}

const ContactCTA = ({ variant = 'consulting', className = '', size = 'default' }: ContactCTAProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const ctaConfig = {
    'board-advisory': {
      text: 'Board Advisory',
      icon: Users,
      title: 'Board Advisory Services',
      description: 'Transform governance with strategic AI and cybersecurity expertise'
    },
    'consulting': {
      text: 'Strategic Consulting',
      icon: Target,
      title: 'Strategic Consulting',
      description: 'Drive digital transformation and competitive advantage'
    },
    'partnership': {
      text: 'Partnership',
      icon: Handshake,
      title: 'Partnership Opportunities',
      description: 'Explore collaboration and growth opportunities'
    }
  };

  const config = ctaConfig[variant];
  const IconComponent = config.icon;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          size={size}
          className={`bg-stratified hover:bg-stratified-dark text-white group transition-all duration-200 hover:shadow-lg ${className}`}
        >
          <IconComponent className="w-4 h-4 mr-2" />
          {config.text}
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto p-0 border-0">
        <ContactForm
          defaultInquiryType={variant}
          title={config.title}
          description={config.description}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ContactCTA;
