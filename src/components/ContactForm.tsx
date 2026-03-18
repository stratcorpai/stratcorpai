import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Mail, Shield, MapPin } from 'lucide-react';
import { siteContent } from '@/content/siteContent';

type InquiryType = 'board-advisory' | 'consulting' | 'partnership' | 'general';

interface ContactFormProps {
  defaultInquiryType?: InquiryType;
  title?: string;
  description?: string;
  sourceContext?: string;
  audienceTag?: string;
  intentLabel?: string;
}

const ContactForm = ({ 
  defaultInquiryType = 'general', 
  title = "Get in touch",
  description = "Share your context. We'll respond within 24 hours.",
  sourceContext = "Unknown",
  audienceTag,
  intentLabel
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiry_type: defaultInquiryType,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const inquiryTypes: Record<InquiryType, string> = {
    'board-advisory': siteContent.contact.ctaConfig['board-advisory'].title,
    'consulting': siteContent.contact.ctaConfig.consulting.title,
    'partnership': siteContent.contact.ctaConfig.partnership.title,
    'general': siteContent.contact.ctaConfig.general.title
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/.netlify/functions/contact-intake', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          sourceContext,
          audienceTag: audienceTag ?? siteContent.contact.ctaConfig[formData.inquiry_type].audienceTag,
          intentLabel: intentLabel ?? siteContent.contact.ctaConfig[formData.inquiry_type].intentLabel
        }),
      });

      const payload = await response.json().catch(() => null);
      if (!response.ok) {
        throw new Error(payload?.error ?? 'Request failed');
      }

      toast({
        title: "Sent",
        description: "We'll respond within 24 hours.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        inquiry_type: defaultInquiryType,
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Send failed",
        description: "Try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto bg-background">
      <div className="p-8 md:p-10">
        <div className="mb-10">
          <h3 className="font-heading text-2xl text-stratified mb-2">{title}</h3>
          <p className="text-body-lg text-muted-foreground">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {(audienceTag ?? siteContent.contact.ctaConfig[defaultInquiryType].audienceTag) && (
              <span className="text-xs font-sans uppercase tracking-wider text-stratified border border-stratified/40 px-3 py-1">
                {audienceTag ?? siteContent.contact.ctaConfig[defaultInquiryType].audienceTag}
              </span>
            )}
            {(intentLabel ?? siteContent.contact.ctaConfig[defaultInquiryType].intentLabel) && (
              <span className="text-xs text-muted-foreground border border-border px-3 py-1">
                {intentLabel ?? siteContent.contact.ctaConfig[defaultInquiryType].intentLabel}
              </span>
            )}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-foreground">Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Name"
                required
                className="border-border focus:border-stratified focus:ring-stratified"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-foreground">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="you@company.com"
                required
                className="border-border focus:border-stratified focus:ring-stratified"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-sm font-medium text-foreground">Company</Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              placeholder="Company or fund"
              className="border-border focus:border-stratified focus:ring-stratified"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="inquiry_type" className="text-sm font-medium text-foreground">Inquiry type *</Label>
            <Select
              value={formData.inquiry_type}
              onValueChange={(value: InquiryType) => handleInputChange('inquiry_type', value)}
            >
              <SelectTrigger className="border-border focus:border-stratified focus:ring-stratified">
                <SelectValue placeholder="Choose one" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(inquiryTypes).map(([value, label]) => (
                  <SelectItem key={value} value={value}>{label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium text-foreground">Message *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Goals, context, or how we can help..."
              rows={5}
              required
              className="border-border focus:border-stratified focus:ring-stratified resize-none"
            />
          </div>

          <div className="border border-border bg-muted/30 p-4">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-stratified mt-0.5 flex-shrink-0" />
              <div className="text-caption">
                <p className="font-medium text-foreground mb-1">Privacy</p>
                <p>Used only to respond. No marketing or sharing.</p>
              </div>
            </div>
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full btn-primary py-6 text-base">
            {isSubmitting ? 'Sending...' : 'Send'}
          </Button>
        </form>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row justify-center gap-4 text-caption">
          <a href={`mailto:${siteContent.contact.email}`} className="flex items-center gap-2 hover:text-stratified transition-colors">
            <Mail size={16} /> {siteContent.contact.email}
          </a>
          <span className="hidden sm:inline text-border">|</span>
          <span className="flex items-center gap-2">
            <MapPin size={16} /> {siteContent.contact.regions}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
