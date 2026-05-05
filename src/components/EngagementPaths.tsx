import ContactCTA from "@/components/ContactCTA";
import { siteContent } from "@/content/siteContent";
import AnimatedSection from "@/components/ui/AnimatedSection";

const EngagementPaths = () => {
  const items = siteContent.engagementPaths.items;

  return (
    <section id="engagement-paths" className="section-padding bg-background border-b border-border">
      <div className="container-custom">
        <AnimatedSection className="max-w-3xl mb-16">
          <p className="text-eyebrow mb-4">Action paths</p>
          <h2 className="font-heading text-stratified mb-6">{siteContent.engagementPaths.title}</h2>
          <p className="text-body-lg text-muted-foreground">{siteContent.engagementPaths.description}</p>
        </AnimatedSection>

        <div className="max-w-5xl">
          <div className="grid md:grid-cols-3 gap-0 border-t border-border">
            {items.map((item, index) => (
              <AnimatedSection
                key={item.key}
                className="border-b border-border md:border-b-0 md:border-r border-border last:border-r-0 py-10 md:py-12 md:px-8 flex flex-col"
                delay={index * 0.05}
              >
                <p className="text-[11px] font-sans uppercase tracking-[0.14em] text-stratified/80 mb-3">
                  {item.label}
                </p>
                <h3 className="font-heading text-stratified mb-4">{item.heading}</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 flex-1">
                  {item.body}
                </p>
                <ContactCTA
                  variant={item.ctaVariant}
                  customText={item.ctaText}
                  sourceContext={`Engagement Path - ${item.label}`}
                  className="w-fit"
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementPaths;
