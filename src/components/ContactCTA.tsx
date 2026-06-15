import { ArrowRight } from 'lucide-react';
import { siteContent } from '@/content/siteContent';

/**
 * ContactCTA — variant-aware mailto: button.
 *
 * Opens the user's mail client with a pre-filled subject and body template.
 * Zero server dependencies; works everywhere.
 */

interface ContactCTAProps {
  variant?: 'board-advisory' | 'consulting' | 'partnership' | 'general';
  sourceContext?: string;
  className?: string;
  size?: 'sm' | 'default' | 'lg';
  customText?: string;
}

const SUBJECT: Record<string, string> = {
  'board-advisory': 'Board Advisory Inquiry',
  consulting:       'Strategic Consulting Inquiry',
  partnership:      'Partnership & Collaboration',
  general:          'General Inquiry',
};

const BODY_TEMPLATE = (label: string) =>
  `Hi,\n\nI'd like to discuss ${label}.\n\nName:\nCompany:\nContext / what we're navigating:\n\n— sent via stratcorp.ai`;

const SIZE_CLASSES: Record<string, string> = {
  sm:      'text-xs px-4 py-2',
  default: 'text-sm px-5 py-2.5',
  lg:      'text-base px-7 py-3.5',
};

const ContactCTA = ({
  variant = 'consulting',
  className = '',
  size = 'default',
  customText,
}: ContactCTAProps) => {
  const config  = siteContent.contact.ctaConfig[variant];
  const label   = customText ?? config.text;
  const subject = encodeURIComponent(SUBJECT[variant] ?? 'Inquiry');
  const body    = encodeURIComponent(BODY_TEMPLATE(SUBJECT[variant] ?? 'your services'));
  const href    = `mailto:${siteContent.contact.email}?subject=${subject}&body=${body}`;

  return (
    <a
      href={href}
      className={[
        'inline-flex items-center justify-center gap-2 font-semibold tracking-wide rounded-lg',
        'btn-primary group',
        SIZE_CLASSES[size] ?? SIZE_CLASSES.default,
        className,
      ].join(' ')}
    >
      {label}
      <ArrowRight className="w-4 h-4 opacity-90 group-hover:translate-x-0.5 transition-transform duration-200" />
    </a>
  );
};

export default ContactCTA;
