import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { siteContent } from '@/content/siteContent';
import AnimatedSection from '@/components/ui/AnimatedSection';

const InvestmentThesis = () => {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const isMobile = useIsMobile();
  const principles = siteContent.investmentThesis.principles;

  const toggleCard = (index: number) => {
    setExpandedCards((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <section id="investment-thesis" className="section-padding bg-background border-b border-border">
      <div className="container-custom">
        <AnimatedSection className="max-w-3xl mb-16">
          <p className="text-eyebrow mb-4">Decision model</p>
          <h2 className="font-heading text-stratified mb-6">{siteContent.investmentThesis.title}</h2>
          <p className="text-body-lg text-muted-foreground">
            {siteContent.investmentThesis.intro}
          </p>
        </AnimatedSection>

        <div className="max-w-5xl">
          <div className="grid md:grid-cols-3 gap-0 border-t border-border">
            {principles.map((principle, index) => {
              const isExpanded = expandedCards.has(index);
              const showExpand = isMobile && principle.fullDescription !== principle.shortDescription;
              return (
                <AnimatedSection
                  key={principle.title}
                  className="border-b border-border md:border-b-0 md:border-r border-border last:border-r-0 py-10 md:py-12 md:px-8"
                  delay={index * 0.05}
                >
                  <p className="text-[11px] font-sans uppercase tracking-[0.14em] text-stratified/80 mb-3">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-heading text-stratified mb-4">{principle.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {isMobile && !isExpanded ? principle.shortDescription : principle.fullDescription}
                  </p>
                  {showExpand && (
                    <button
                      type="button"
                      onClick={() => toggleCard(index)}
                      className="text-stratified font-semibold text-sm mt-4 flex items-center gap-1 hover:text-stratified-dark transition-colors"
                    >
                      {isExpanded ? 'Show less' : 'Learn more'}
                      <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        <AnimatedSection delay={0.1} className="mt-16 max-w-3xl">
          <h3 className="font-heading text-stratified mb-4">{siteContent.investmentThesis.advantageTitle}</h3>
          <p className="text-body-lg text-muted-foreground">
            {siteContent.investmentThesis.advantageDescription}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default InvestmentThesis;
