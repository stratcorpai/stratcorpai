import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactCTA from '@/components/ContactCTA';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AnimatedSection from '@/components/ui/AnimatedSection';

const WarRoom = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="pt-16 pb-10 sm:pt-20 sm:pb-16 md:pt-28 md:pb-24 flex-1">
        <div className="container-custom max-w-4xl xl:max-w-5xl 2xl:max-w-7xl">

          {/* Hero */}
          <AnimatedSection className="mb-10 sm:mb-12">
            <p className="text-[10px] sm:text-[11px] tracking-[0.14em] uppercase text-muted-foreground mb-3 sm:mb-4">
              Board Advisory · Crisis Simulation
            </p>
            <h1 className="font-heading text-[clamp(1.6rem,5vw,3.2rem)] leading-[1.1] mb-4 sm:mb-6 text-foreground">
              The AI Governance War Room
            </h1>
            <p className="text-[0.925rem] sm:text-[1.05rem] leading-[1.7] text-muted-foreground max-w-[640px]">
              A board-level crisis simulation that exposes governance gaps before they become liabilities.
            </p>
          </AnimatedSection>

          <hr className="border-0 border-t border-border/60 my-8 sm:my-10" />

          {/* Problem statement */}
          <AnimatedSection delay={0.05} className="mb-12 sm:mb-14">
            <p className="text-[0.875rem] sm:text-[0.925rem] leading-[1.75] text-muted-foreground mb-4 sm:mb-5">
              Traditional board education builds familiarity with AI topics. It does not build governance muscle. Most boards are aware of AI risk. Very few have tested their governance response to it. That gap between awareness and operational competence is where reputational, regulatory, and capital risk concentrates.
            </p>
            <p className="text-[0.925rem] sm:text-[1rem] leading-[1.7] text-foreground font-medium mb-5 sm:mb-6">
              The War Room closes that gap.
            </p>
            <p className="text-[0.875rem] sm:text-[0.925rem] leading-[1.75] text-muted-foreground mb-8 sm:mb-10">
              Participants work through realistic scenarios calibrated to current regulatory and capital market conditions. Each scenario presents a crisis brief, financial exposure, and board-level questions that require real-time governance decisions. Test your board's readiness before enforcement of the EU AI Act on August 2, 2026.
            </p>
            
            {/* What to expect */}
            <div className="bg-muted/40 border border-border/50 p-5 sm:p-6 md:p-8 rounded-lg mb-8 sm:mb-10">
              <p className="text-[0.7rem] sm:text-[0.75rem] tracking-[0.12em] uppercase font-medium text-foreground mb-4 sm:mb-5">What to expect</p>
              <ul className="space-y-2.5 sm:space-y-3">
                {[
                  'Sealed crisis scenarios, no preparation, no warning',
                  'Board deliberation under time pressure',
                  'Cross-table challenge on your governance response',
                  'Gap analysis revealing what the board actually owns',
                  'A governance scorecard you take back to the boardroom',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 sm:gap-3 text-[0.825rem] sm:text-[0.875rem] text-muted-foreground leading-[1.6]">
                    <span className="text-stratified mt-0.5 shrink-0">→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Testimonials */}
          <AnimatedSection delay={0.1} className="mb-12 sm:mb-14">
            <p className="text-[0.7rem] sm:text-[0.75rem] tracking-[0.12em] uppercase font-medium text-muted-foreground mb-5 sm:mb-6">
              What participants say
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              <blockquote className="p-5 sm:p-6 border border-border/70 bg-muted/15 rounded-lg flex flex-col justify-between">
                <p className="text-[0.825rem] sm:text-[0.875rem] italic text-muted-foreground leading-[1.65] mb-5 sm:mb-6">
                  "I came in thinking we had a reasonably mature approach. By the end of the morning I had identified three structural gaps I intend to raise at our next board meeting."
                </p>
                <footer className="text-[0.65rem] sm:text-[0.7rem] uppercase tracking-[0.1em] text-foreground/70 mt-auto pt-3 sm:pt-4 border-t border-border/40">
                  Senior Independent Director<br />Pan-European Retail Group
                </footer>
              </blockquote>
              <blockquote className="p-5 sm:p-6 border border-border/70 bg-muted/15 rounded-lg flex flex-col justify-between">
                <p className="text-[0.825rem] sm:text-[0.875rem] italic text-muted-foreground leading-[1.65] mb-5 sm:mb-6">
                  "Having someone challenge your reasoning as a regulator — not as a facilitator — is completely different."
                </p>
                <footer className="text-[0.65rem] sm:text-[0.7rem] uppercase tracking-[0.1em] text-foreground/70 mt-auto pt-3 sm:pt-4 border-t border-border/40">
                  Chair, Risk & Compliance Committee<br />Nordic Asset Manager
                </footer>
              </blockquote>
            </div>
          </AnimatedSection>

          <hr className="border-0 border-t border-border/60 my-8 sm:my-10" />

          {/* Formats & Investment */}
          <AnimatedSection delay={0.15}>
            <h3 className="font-heading text-[1.1rem] sm:text-[1.25rem] mb-3 sm:mb-4">Formats & Investment</h3>
            <p className="text-[0.8rem] sm:text-[0.85rem] text-muted-foreground mb-5 sm:mb-6">
              For: Board Retreats · Leadership Offsites · Governance Reviews
            </p>
            <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
              {['Half-day intensive (12–15)', 'Full-day session (20–40)', 'Conference format'].map((format) => (
                <span key={format} className="bg-muted/60 border border-border/40 px-3 sm:px-4 py-1.5 sm:py-2 text-[0.72rem] sm:text-[0.78rem] text-muted-foreground rounded-md">
                  {format}
                </span>
              ))}
            </div>
            <p className="text-[0.825rem] sm:text-[0.875rem] text-muted-foreground mb-6 sm:mb-8 max-w-[580px]">
              Investment varies by format, participant count, and customisation. Contact us to discuss scope and receive the Format Brief.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <ContactCTA variant="board-advisory" customText="Request Format Brief" sourceContext="War Room Brief" />
              <Button asChild variant="outline" className="btn-secondary justify-center">
                <Link to="/#engagement-paths">Book a War Room →</Link>
              </Button>
            </div>
            
            {/* BRIDGE-AI connection */}
            <div className="border-l-2 border-stratified/40 pl-4 sm:pl-5 py-1">
              <p className="text-[0.78rem] sm:text-[0.825rem] text-muted-foreground leading-[1.65]">
                <span className="font-medium text-foreground">Connection to BRIDGE-AI:</span> The War Room stress-tests whether your governance architecture holds under decision pressure. BRIDGE-AI provides the framework; the War Room reveals whether it's operational.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WarRoom;
