import ContactCTA from './ContactCTA';
import { siteContent } from '@/content/siteContent';
import AnimatedSection from '@/components/ui/AnimatedSection';

const BoardService = () => {
  const serviceGroups = siteContent.boardService.serviceGroups ?? [];
  const stats = siteContent.boardService.stats;

  return (
    <section id="board-service" className="section-padding bg-muted/30 border-b border-border">
      <div className="container-custom">
        <AnimatedSection className="max-w-3xl mb-16">
          <p className="text-eyebrow mb-4">{siteContent.boardService.eyebrow}</p>
          <h2 className="font-heading text-stratified mb-6">{siteContent.boardService.title}</h2>
          <p className="text-body-lg text-muted-foreground">
            {siteContent.boardService.description}
          </p>
        </AnimatedSection>

        <div className="max-w-5xl">
          <div className="grid md:grid-cols-3 gap-0 border-t border-border">
            {serviceGroups.map((group, index) => (
              <AnimatedSection
                key={group.key}
                className="border-b border-border md:border-b-0 md:border-r border-border last:border-r-0 py-10 md:py-12 md:px-8"
                delay={index * 0.05}
              >
                <p className="text-[11px] font-sans uppercase tracking-[0.14em] text-stratified/80 mb-3">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="font-heading text-stratified mb-3">{group.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                  {group.summary}
                </p>
                <ul className="space-y-2">
                  {group.points.map((point) => (
                    <li key={point} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 flex-shrink-0 bg-stratified" />
                      {point}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.06} className="mt-12 mb-16">
            <p className="text-body-lg text-muted-foreground">
              <span className="font-semibold text-stratified">{stats[0].value}</span> {stats[0].label}
              {' · '}
              <span className="font-semibold text-stratified">{stats[1].value}</span> {stats[1].label}
              {' · '}
              <span className="font-semibold text-stratified">{stats[2].value}</span> {stats[2].label}
            </p>
          </AnimatedSection>

          <div className="border-t border-border pt-12">
            <h4 className="font-heading text-stratified mb-6">Services</h4>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
              {siteContent.boardService.services.map((service, i) => (
                <div key={service.title}>
                  <h5 className="font-sans font-semibold text-foreground mb-2">{service.title}</h5>
                  <p className="text-caption leading-relaxed">{service.shortDescription}</p>
                </div>
              ))}
            </div>
          </div>

          <AnimatedSection delay={0.08} className="mt-16">
            <div className="bg-stratified text-white p-10 md:p-12">
              <h3 className="font-heading text-2xl md:text-3xl font-semibold text-white mb-4">
                {siteContent.boardService.ctaTitle}
              </h3>
              <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-3xl mb-8">
                {siteContent.boardService.ctaDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ContactCTA
                  variant="board-advisory"
                  size="lg"
                  sourceContext="Services CTA - Board"
                  className="bg-white text-stratified hover:bg-white/95 border-0"
                />
                <ContactCTA
                  variant="partnership"
                  size="lg"
                  sourceContext="Services CTA - Partnership"
                  className="bg-transparent border border-white/50 text-white hover:bg-white/10"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default BoardService;
