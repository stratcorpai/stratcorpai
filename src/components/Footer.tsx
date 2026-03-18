import { Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactCTA from './ContactCTA';
import { siteContent } from '@/content/siteContent';
import { scrollToSection } from '@/utils/scrollToSection';

const engagementPaths = [
  {
    tag: 'For boards',
    title: 'Governance before the program scales',
    cta: 'Start board advisory',
    variant: 'board-advisory' as const,
  },
  {
    tag: 'For PE & investors',
    title: 'Portfolio governance across the hold period',
    cta: 'Start investor discussion',
    variant: 'consulting' as const,
  },
  {
    tag: 'For institutions',
    title: 'Build governance capability at scale',
    cta: 'Explore partnership',
    variant: 'partnership' as const,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = siteContent.navLinks;

  return (
    <footer id="engagement-paths" className="border-t border-border">
      <div className="container-custom max-w-[900px]">

        <div className="py-12">
          <h2 className="font-heading text-[1.35rem] font-normal text-foreground mb-2">
            Ready to set decision quality before capital is committed?
          </h2>
          <p className="text-[0.875rem] text-muted-foreground leading-[1.65] max-w-[520px] mb-8">
            AI, cyber, or transformation decision point where governance
            architecture is not yet in place — that's where we start.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border/70 rounded-lg overflow-hidden">
            {engagementPaths.map((path) => (
              <div key={path.tag} className="bg-background p-5">
                <p className="text-[0.7rem] tracking-[0.1em] uppercase text-muted-foreground mb-2">{path.tag}</p>
                <p className="text-[0.875rem] font-medium text-foreground mb-3">{path.title}</p>
                <ContactCTA variant={path.variant} customText={path.cta} sourceContext={`Footer ${path.tag}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-border/60 py-8 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <img src={siteContent.brand.logoPath} alt={siteContent.brand.logoAlt} className="h-8 w-auto mb-3" />
            <nav className="flex flex-wrap gap-x-5 gap-y-1.5 text-[0.78rem]">
              {quickLinks.map((link) => (
                <a
                  key={link.sectionId}
                  href={`#${link.sectionId}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.sectionId);
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Link to={siteContent.frameworkNavLink.path} className="text-muted-foreground hover:text-foreground transition-colors">
                {siteContent.frameworkNavLink.label}
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/andreeabulisache"
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${siteContent.contact.email}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="border-t border-border/60 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[0.75rem] text-muted-foreground">
          <span>© {currentYear} {siteContent.brand.name}</span>
          <div className="flex items-center gap-3">
            <a href={`mailto:${siteContent.contact.email}`} className="hover:text-foreground transition-colors">
              {siteContent.contact.email}
            </a>
            <span>·</span>
            <span>{siteContent.contact.regions}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
