import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

export const NewsletterSignup = ({ className = '' }: { className?: string }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    // In a real implementation this would post to a newsletter service / Netlify function
    setTimeout(() => {
      toast({
        title: "Subscribed",
        description: "You're now on the list for Governing Intelligence.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className={`p-5 sm:p-6 border border-border bg-background/50 rounded-lg ${className}`}>
      <div className="mb-3 sm:mb-4">
        <h3 className="font-heading text-base sm:text-lg text-foreground mb-1">Governing Intelligence</h3>
        <p className="text-[0.8rem] sm:text-sm text-muted-foreground leading-relaxed">
          A monthly brief on what boards should be asking about AI, before regulators ask them first.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 bg-background border-border focus:border-stratified focus:ring-stratified text-sm"
          aria-label="Email address for newsletter"
        />
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-stratified hover:bg-stratified/90 text-white justify-center sm:justify-start"
        >
          {isSubmitting ? '...' : <><span className="mr-2">Subscribe</span><Send className="w-3.5 h-3.5" /></>}
        </Button>
      </form>
      <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-1.5 sm:gap-4 text-[0.7rem] sm:text-[0.75rem] text-muted-foreground">
        <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-stratified/70"></span> FTSE 250 & Fortune 500</span>
        <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-stratified/70"></span> Board-level evidence</span>
        <span className="flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-stratified/70"></span> Monthly cadence</span>
      </div>
    </div>
  );
};

export default NewsletterSignup;
