
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

  // Enhanced button styling based on size
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    default: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          size={size}
          className={`
            bg-stratified hover:bg-stratified-dark text-white 
            group transition-all duration-300 
            hover:shadow-lg hover:shadow-stratified/25
            transform hover:scale-105 active:scale-95
            font-semibold rounded-xl border-0
            focus:ring-4 focus:ring-stratified/30 focus:outline-none
            ${sizeClasses[size]}
            ${className}
          `}
        >
          <IconComponent className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
          <span className="relative">
            {config.text}
          </span>
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto p-0 border-0 shadow-2xl">
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
