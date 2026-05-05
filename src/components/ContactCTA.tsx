import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import ContactForm from './ContactForm';
import { ArrowRight } from 'lucide-react';
import { siteContent } from '@/content/siteContent';

interface ContactCTAProps {
  variant?: 'board-advisory' | 'consulting' | 'partnership' | 'general';
  sourceContext?: string;
  className?: string;
  size?: 'sm' | 'default' | 'lg';
  customText?: string;
}

const ContactCTA = ({
  variant = 'consulting',
  sourceContext = 'Unknown',
  className = '',
  size = 'default',
  customText,
}: ContactCTAProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const ctaConfig = {
    'board-advisory': siteContent.contact.ctaConfig['board-advisory'],
    consulting: siteContent.contact.ctaConfig.consulting,
    partnership: siteContent.contact.ctaConfig.partnership,
    general: siteContent.contact.ctaConfig.general,
  };

  const config = ctaConfig[variant];
  const displayText = customText ?? config.text;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          size={size}
          className={`btn-primary group font-semibold tracking-wide ${className}`}
        >
          {displayText}
          <ArrowRight className="w-4 h-4 ml-2 opacity-90 group-hover:translate-x-0.5 transition-transform duration-200" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto p-0 border border-border shadow-lg">
        <ContactForm
          defaultInquiryType={variant}
          title={config.title}
          description={config.description}
          sourceContext={sourceContext}
          audienceTag={config.audienceTag}
          intentLabel={config.intentLabel}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ContactCTA;
