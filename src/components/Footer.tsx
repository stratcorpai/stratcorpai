import { Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactCTA from './ContactCTA';
import { siteContent } from '@/content/siteContent';
import { scrollToSection } from '@/utils/scrollToSection';
import NewsletterSignup from './NewsletterSignup';

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
    title: 'Build and embed institutional governance capability at scale',
    cta: 'Explore partnership',
    variant: 'partnership' as const,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = siteContent.navLinks;

  return (
    <footer id="engagement-paths" className="border-t border-border">
      <div className="container-custom max-w-4xl xl:max-w-5xl 2xl:max-w-7xl">

        {/* ═══ ENGAGEMENT PATHS ═══ */}
        <div className="py-10 sm:py-12">
          <h2 className="font-heading text-[1.15rem] sm:text-[1.35rem] font-normal text-foreground mb-2">
            Ready to set decision quality before capital is committed?
          </h2>
          <p className="text-[0.825rem] sm:text-[0.875rem] text-muted-foreground leading-[1.65] max-w-[520px] mb-6 sm:mb-8">
            AI, cyber, or transformation decision point where governance
            architecture is not yet in place — that's where we start.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border/70 rounded-lg overflow-hidden">
            {engagementPaths.map((path) => (
              <div key={path.tag} className="bg-background p-4 sm:p-5">
                <p className="text-[0.65rem] sm:text-[0.7rem] tracking-[0.1em] uppercase text-muted-foreground mb-2">{path.tag}</p>
                <p className="text-[0.825rem] sm:text-[0.875rem] font-medium text-foreground mb-3">{path.title}</p>
                <ContactCTA variant={path.variant} customText={path.cta} sourceContext={`Footer ${path.tag}`} />
              </div>
            ))}
          </div>
        </div>

        {/* ═══ NEWSLETTER ═══ */}
        <div className="border-t border-border/60 py-8 sm:py-10">
          <NewsletterSignup />
        </div>

        {/* ═══ BOTTOM BAR ═══ */}
        <div className="border-t border-border/60 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            {/* Logo + nav */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <img
                src={siteContent.brand.logoPath}
                alt={siteContent.brand.logoAlt}
                className="h-7 sm:h-8 w-auto shrink-0"
                style={{ objectFit: 'contain', objectPosition: 'left center' }}
              />
              <nav className="flex flex-wrap gap-x-3 sm:gap-x-4 gap-y-1.5 text-[0.7rem] sm:text-[0.75rem]">
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
                <Link to={siteContent.warRoomNavLink.path} className="text-muted-foreground hover:text-foreground transition-colors">
                  {siteContent.warRoomNavLink.label}
                </Link>
                <Link to={siteContent.frameworkNavLink.path} className="text-muted-foreground hover:text-foreground transition-colors">
                  {siteContent.frameworkNavLink.label}
                </Link>
              </nav>
            </div>

            {/* Social */}
            <div className="flex items-center gap-1 -mx-2">
              <a
                href="https://linkedin.com/in/andreeabulisache"
                className="inline-flex items-center justify-center p-2.5 text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${siteContent.contact.email}`}
                className="inline-flex items-center justify-center p-2.5 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* ═══ LEGAL ═══ */}
        <div className="border-t border-border/60 py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 text-[0.7rem] sm:text-[0.75rem] text-muted-foreground">
          <span>© {currentYear} {siteContent.brand.name}</span>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <a href={`mailto:${siteContent.contact.email}`} className="hover:text-foreground transition-colors">
              {siteContent.contact.email}
            </a>
            <span className="hidden sm:inline">·</span>
            <span>{siteContent.contact.regions}</span>
          </div>
        </div>

        {/* EU AI Act marker */}
        <div className="pb-4 sm:pb-5 text-center text-[0.65rem] sm:text-[0.7rem] text-muted-foreground/80">
          The EU AI Act takes full effect August 2, 2026.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
