
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Mail, Shield, MapPin } from 'lucide-react';

type InquiryType = 'board-advisory' | 'consulting' | 'partnership' | 'general';

interface ContactFormProps {
  defaultInquiryType?: InquiryType;
  title?: string;
  description?: string;
}

const ContactForm = ({ 
  defaultInquiryType = 'general', 
  title = "Let's Connect",
  description = "Ready to transform your organization's digital future?"
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

  const inquiryTypes = {
    'board-advisory': 'Board Advisory Services',
    'consulting': 'Strategic Consulting',
    'partnership': 'Partnership Opportunities',
    'general': 'General Inquiry'
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (error) throw error;

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
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
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
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
    <Card className="max-w-2xl mx-auto shadow-xl border-0 bg-white">
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-stratified mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                Full Name *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Your full name"
                required
                className="border-gray-200 focus:border-stratified focus:ring-stratified"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="your@email.com"
                required
                className="border-gray-200 focus:border-stratified focus:ring-stratified"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-sm font-medium text-gray-700">
              Company / Organization
            </Label>
            <Input
              id="company"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              placeholder="Your organization"
              className="border-gray-200 focus:border-stratified focus:ring-stratified"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="inquiry_type" className="text-sm font-medium text-gray-700">
              How can we help you? *
            </Label>
            <Select
              value={formData.inquiry_type}
              onValueChange={(value: InquiryType) => handleInputChange('inquiry_type', value)}
            >
              <SelectTrigger className="border-gray-200 focus:border-stratified focus:ring-stratified">
                <SelectValue placeholder="Select inquiry type" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(inquiryTypes).map(([value, label]) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium text-gray-700">
              Message *
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Tell us about your goals, challenges, or how we can collaborate..."
              rows={5}
              required
              className="border-gray-200 focus:border-stratified focus:ring-stratified resize-none"
            />
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-stratified mt-0.5 flex-shrink-0" />
              <div className="text-sm text-gray-600">
                <p className="font-medium text-gray-700 mb-1">Privacy & Data Protection</p>
                <p>
                  Your information is securely stored in EU-based data centers and will only be used to respond to your inquiry and provide the services you've requested. We respect your privacy and follow strict data protection standards.
                </p>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-stratified hover:bg-stratified-dark text-white py-3 text-lg font-medium transition-all duration-200 hover:shadow-lg"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>

        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>andreea@stratifiedadvisory.com</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>US & EMEA</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
