import TeamGrid from './team/TeamGrid';
import ExpertiseGrid from './team/ExpertiseGrid';
import { expertiseItems } from './team/TeamData';
import { siteContent } from '@/content/siteContent';
import AnimatedSection from './ui/AnimatedSection';

const Team = () => {
  return (
    <section id="team" className="section-padding">
      <div className="container-custom max-w-4xl xl:max-w-5xl 2xl:max-w-7xl">
        <AnimatedSection className="max-w-3xl mb-16">
          <h2 className="font-heading text-stratified mb-6">{siteContent.team.title}</h2>
          <p className="text-body-lg text-muted-foreground">
            {siteContent.team.description}
          </p>
        </AnimatedSection>

        <AnimatedSection className="mb-20" delay={0.05}>
          <TeamGrid />
        </AnimatedSection>

        <AnimatedSection className="mb-16" delay={0.08}>
          <h4 className="font-heading text-stratified mb-8">{siteContent.team.expertiseTitle}</h4>
          <ExpertiseGrid items={expertiseItems} />
        </AnimatedSection>

        <AnimatedSection className="border-t border-border pt-12" delay={0.1}>
          <h4 className="font-heading text-stratified mb-4">{siteContent.team.focusTitle}</h4>
          <p className="text-body-lg text-muted-foreground max-w-3xl">
            {siteContent.team.focusDescription}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Team;
