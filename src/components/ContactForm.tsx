import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Shield, MapPin } from 'lucide-react';
import { siteContent } from '@/content/siteContent';
import NewsletterSignup from './NewsletterSignup';

type InquiryType = 'board-advisory' | 'consulting' | 'partnership' | 'general';

interface ContactFormProps {
  defaultInquiryType?: InquiryType;
  title?: string;
  description?: string;
  sourceContext?: string;
  audienceTag?: string;
  intentLabel?: string;
}

/** Encode an object as application/x-www-form-urlencoded for Netlify Forms */
function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');
}

const ContactForm = ({
  defaultInquiryType = 'general',
  title = 'Get in touch',
  description = "Share your context. We'll respond within 24 hours.",
  sourceContext = 'Unknown',
  audienceTag,
  intentLabel,
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    inquiry_type: defaultInquiryType,
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hasFailed, setHasFailed] = useState(false);

  const inquiryTypes: Record<InquiryType, string> = {
    'board-advisory': siteContent.contact.ctaConfig['board-advisory'].title,
    consulting: siteContent.contact.ctaConfig.consulting.title,
    partnership: siteContent.contact.ctaConfig.partnership.title,
    general: siteContent.contact.ctaConfig.general.title,
  };

  const resolvedAudienceTag =
    audienceTag ?? siteContent.contact.ctaConfig[formData.inquiry_type].audienceTag;
  const resolvedIntentLabel =
    intentLabel ?? siteContent.contact.ctaConfig[formData.inquiry_type].intentLabel;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setHasFailed(false);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact-intake',
          ...formData,
          audienceTag: resolvedAudienceTag,
          intentLabel: resolvedIntentLabel,
          sourceContext,
        }),
      });

      if (!response.ok) {
        throw new Error(`Netlify Forms returned ${response.status}`);
      }

      setIsSuccess(true);
    } catch (error) {
      console.error('Contact form submission failed:', error);
      setHasFailed(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // ── Success state ──────────────────────────────────────────────────────────
  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto bg-background p-5 sm:p-8 md:p-12 text-center">
        <h3 className="font-heading text-2xl text-stratified mb-3">Request Received</h3>
        <p className="text-body-lg text-muted-foreground mb-10">
          We have received your context and will respond within 24 hours.
        </p>
        <div className="text-left bg-muted/10">
          <NewsletterSignup />
        </div>
      </div>
    );
  }

  // ── Failure fallback — show mailto link prominently ────────────────────────
  if (hasFailed) {
    const subject = encodeURIComponent(
      `${inquiryTypes[formData.inquiry_type as InquiryType]} — ${formData.name || 'Inquiry'}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company || 'N/A'}\n\n${formData.message}`
    );
    const mailtoHref = `mailto:${siteContent.contact.email}?subject=${subject}&body=${body}`;

    return (
      <div className="max-w-2xl mx-auto bg-background p-5 sm:p-8 md:p-12 text-center">
        <h3 className="font-heading text-2xl text-stratified mb-3">Couldn't send — try email</h3>
        <p className="text-body-lg text-muted-foreground mb-8">
          The form couldn't reach our server. Your message has been preserved below — just click to
          open your mail client with everything pre-filled.
        </p>
        <a
          href={mailtoHref}
          className="inline-flex items-center gap-2 btn-primary px-8 py-4 text-base font-semibold"
        >
          <Mail size={18} />
          Email us directly
        </a>
        <p className="mt-4 text-caption text-muted-foreground">{siteContent.contact.email}</p>
        <button
          type="button"
          onClick={() => setHasFailed(false)}
          className="mt-6 text-xs underline text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Try the form again
        </button>
      </div>
    );
  }

  // ── Normal form ────────────────────────────────────────────────────────────
  return (
    <div className="max-w-2xl mx-auto bg-background">
      <div className="p-5 sm:p-8 md:p-10">
        <div className="mb-6 sm:mb-10">
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

        {/* Netlify Forms requires data-netlify and form-name hidden input */}
        <form
          name="contact-intake"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Honeypot — hidden from humans */}
          <input type="hidden" name="form-name" value="contact-intake" />
          <p className="hidden">
            <label>
              Don't fill this out: <input name="bot-field" />
            </label>
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-foreground">Name *</Label>
              <Input
                id="name"
                name="name"
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
                name="email"
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
              name="company"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              placeholder="Company or fund"
              className="border-border focus:border-stratified focus:ring-stratified"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="inquiry_type" className="text-sm font-medium text-foreground">Inquiry type *</Label>
            {/* Hidden input so Netlify captures the Select value */}
            <input type="hidden" name="inquiry_type" value={formData.inquiry_type} />
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
              name="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Goals, context, or how we can help..."
              rows={5}
              required
              className="border-border focus:border-stratified focus:ring-stratified resize-none"
            />
          </div>

          {/* Hidden metadata fields */}
          <input type="hidden" name="audienceTag" value={resolvedAudienceTag} />
          <input type="hidden" name="intentLabel" value={resolvedIntentLabel} />
          <input type="hidden" name="sourceContext" value={sourceContext} />

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
          <a
            href={`mailto:${siteContent.contact.email}`}
            className="flex items-center gap-2 hover:text-stratified transition-colors"
          >
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
