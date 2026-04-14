import { Button } from '@/components/ui/button';
import { ArrowRight, FileText } from 'lucide-react';
import { siteContent } from '@/content/siteContent';
import { scrollToSection } from '@/utils/scrollToSection';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handlePrimaryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection(siteContent.hero.primaryCta.target);
  };

  const handleSecondaryClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = siteContent.hero.secondaryCta.target;
    if (target.startsWith('/')) {
      navigate(target);
      return;
    }
    scrollToSection(target);
  };

  return (
    <section
      className="relative min-h-[85vh] flex flex-col justify-end pt-32 pb-20 md:pt-40 md:pb-28 border-b border-border overflow-hidden"
      style={{
        backgroundImage: 'url(/assets/background_hero.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
      }}
    >
      <div className="absolute inset-0 bg-background/70" aria-hidden />
      <div className="container-custom relative z-10">
        <AnimatedSection className="max-w-4xl">
          <p className="text-eyebrow mb-6">
            {siteContent.hero.eyebrow}
          </p>
          <img
            src={siteContent.brand.logoPath}
            alt={siteContent.brand.logoAlt}
            className="h-20 md:h-24 w-auto mb-10"
          />
          <h1 className="text-hero font-heading font-semibold text-stratified mb-6">
            {siteContent.hero.titleLine1}
            <br />
            {siteContent.hero.titleLine2}
          </h1>
          <p className="text-body-lg max-w-2xl mb-10 text-foreground/90">
            {siteContent.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button className="btn-primary px-8 py-6 text-base group" onClick={handlePrimaryClick}>
              {siteContent.hero.primaryCta.label}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="btn-secondary px-8 py-6 text-base border-stratified/50"
              onClick={handleSecondaryClick}
            >
              {siteContent.hero.secondaryCta.label}
              <FileText className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.06}>
          <div className="max-w-4xl border-t border-border pt-8">
            <p className="text-eyebrow mb-4">What we deliver</p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-2 text-sm md:text-base text-foreground/80">
              {siteContent.hero.engagementBullets.map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;
