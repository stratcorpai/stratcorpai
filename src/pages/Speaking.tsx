import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactCTA from '@/components/ContactCTA';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AnimatedSection from '@/components/ui/AnimatedSection';

const Speaking = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="pt-28 pb-10 sm:pt-32 sm:pb-16 md:pt-36 md:pb-24 flex-1">
        <div className="container-custom max-w-4xl xl:max-w-5xl 2xl:max-w-7xl">

          {/* Hero */}
          <AnimatedSection className="mb-10 sm:mb-12">
            <p className="text-[10px] sm:text-[11px] tracking-[0.14em] uppercase text-muted-foreground mb-3 sm:mb-4">Engage · Keynotes</p>
            <h1 className="font-heading text-[clamp(1.6rem,5vw,3.2rem)] leading-[1.1] mb-4 sm:mb-6 text-foreground">
              Governance conversations, <br className="hidden md:block"/>not technology briefings.
            </h1>
            <p className="text-[0.925rem] sm:text-[1.05rem] leading-[1.7] text-muted-foreground max-w-[640px]">
              Keynotes designed for board networks, investor conferences, and policy forums — not IT departments.
            </p>
          </AnimatedSection>

          <hr className="border-0 border-t border-border/60 my-8 sm:my-10" />

          {/* Signature Keynotes */}
          <AnimatedSection delay={0.05} className="mb-12 sm:mb-14">
            <h2 className="font-heading text-[1.25rem] sm:text-[1.5rem] font-normal text-foreground mb-6 sm:mb-8">Signature Keynotes</h2>
            
            <div className="space-y-6 sm:space-y-8">
              {/* K1 */}
              <article className="border border-border/50 rounded-lg p-5 sm:p-6 md:p-7 bg-background">
                <div className="mb-3 flex items-center gap-2 sm:gap-3">
                  <span className="text-[0.65rem] sm:text-[0.7rem] tracking-[0.1em] text-white bg-stratified-dark px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-sm font-medium">K1</span>
                  <span className="text-[0.65rem] sm:text-[0.7rem] tracking-[0.1em] uppercase text-muted-foreground">The Governance Gap</span>
                </div>
                <h3 className="font-heading text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] mb-2 sm:mb-3 leading-[1.35] text-foreground">
                  Why Most Boards Will Fail Their First AI Crisis — and How to Know If Yours Is One of Them
                </h3>
                <p className="text-[0.825rem] sm:text-[0.875rem] leading-[1.7] text-muted-foreground mb-3 sm:mb-4">
                  There is a measurable distance between a board that is aware of AI risk and a board that can govern through an AI crisis. That gap is where reputational, regulatory, and capital risk concentrates.
                </p>
                <div className="rounded-lg bg-muted/40 px-4 py-3 mb-3 sm:mb-4">
                  <p className="text-[0.8rem] sm:text-[0.85rem] italic text-muted-foreground">
                    "The gap between awareness and operational competence is where risk concentrates. Most boards are standing in it."
                  </p>
                </div>
                <p className="text-[0.75rem] sm:text-[0.8rem] text-foreground/70">
                  <span className="font-medium text-foreground">Best for:</span> IoD, ecoDa, NACD, WEoB, NYSE Board Advisory Council
                </p>
              </article>

              {/* K2 */}
              <article className="border border-border/50 rounded-lg p-5 sm:p-6 md:p-7 bg-background">
                <div className="mb-3 flex items-center gap-2 sm:gap-3">
                  <span className="text-[0.65rem] sm:text-[0.7rem] tracking-[0.1em] text-white bg-stratified-dark px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-sm font-medium">K2</span>
                  <span className="text-[0.65rem] sm:text-[0.7rem] tracking-[0.1em] uppercase text-muted-foreground">From Megawatts to Multiples</span>
                </div>
                <h3 className="font-heading text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] mb-2 sm:mb-3 leading-[1.35] text-foreground">
                  What AI Infrastructure Means for Enterprise Value — and Why Boards Cannot Delegate It
                </h3>
                <p className="text-[0.825rem] sm:text-[0.875rem] leading-[1.7] text-muted-foreground mb-3 sm:mb-4">
                  AI is no longer a software problem. It is an infrastructure problem — constrained by compute, energy, water, and supply chains that boards do not yet govern.
                </p>
                <div className="rounded-lg bg-muted/40 px-4 py-3 mb-3 sm:mb-4">
                  <p className="text-[0.8rem] sm:text-[0.85rem] italic text-muted-foreground">
                    "The question is no longer how fast you can deploy AI. It is whether you can govern at the speed you deploy."
                  </p>
                </div>
                <p className="text-[0.75rem] sm:text-[0.8rem] text-foreground/70">
                  <span className="font-medium text-foreground">Best for:</span> SuperReturn, IPEM, PE conferences, investor summits
                </p>
              </article>

              {/* K3 */}
              <article className="border border-border/50 rounded-lg p-5 sm:p-6 md:p-7 bg-background">
                <div className="mb-3 flex items-center gap-2 sm:gap-3">
                  <span className="text-[0.65rem] sm:text-[0.7rem] tracking-[0.1em] text-white bg-stratified-dark px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-sm font-medium">K3</span>
                  <span className="text-[0.65rem] sm:text-[0.7rem] tracking-[0.1em] uppercase text-muted-foreground">Speed to Deploy vs. Speed to Govern</span>
                </div>
                <h3 className="font-heading text-[1rem] sm:text-[1.1rem] md:text-[1.2rem] mb-2 sm:mb-3 leading-[1.35] text-foreground">
                  The EU AI Act and the New Standard of Board Accountability
                </h3>
                <p className="text-[0.825rem] sm:text-[0.875rem] leading-[1.7] text-muted-foreground mb-3 sm:mb-4">
                  August 2, 2026 is not a compliance deadline. It is a governance inflection. Boards that cannot demonstrate oversight will face personal liability exposure.
                </p>
                <p className="text-[0.75rem] sm:text-[0.8rem] text-foreground/70">
                  <span className="font-medium text-foreground">Best for:</span> Policy forums, WEF, Chatham House, EU regulatory events
                </p>
              </article>
            </div>
          </AnimatedSection>

          <hr className="border-0 border-t border-border/60 my-8 sm:my-10" />

          {/* Credentials */}
          <AnimatedSection delay={0.1} className="mb-12 sm:mb-14">
            <p className="text-[0.7rem] sm:text-[0.75rem] tracking-[0.12em] uppercase font-medium text-muted-foreground mb-4 sm:mb-5">Credentials</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 sm:gap-y-3 gap-x-6 sm:gap-x-8 text-[0.8rem] sm:text-[0.85rem] text-muted-foreground">
              <li className="flex items-center gap-2 sm:gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-stratified/60 shrink-0" /> EU AI Act Contributor</li>
              <li className="flex items-center gap-2 sm:gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-stratified/60 shrink-0" /> Co-author, The Next AI Imperative series</li>
              <li className="flex items-center gap-2 sm:gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-stratified/60 shrink-0" /> Microsoft EMEA NTO (former)</li>
              <li className="flex items-center gap-2 sm:gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-stratified/60 shrink-0" /> Non-Executive Director, Fort S.A.</li>
              <li className="flex items-center gap-2 sm:gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-stratified/60 shrink-0" /> Harvard Business School Women on Boards</li>
            </ul>
          </AnimatedSection>

          <hr className="border-0 border-t border-border/60 my-8 sm:my-10" />

          {/* Booking */}
          <AnimatedSection delay={0.15}>
            <h3 className="font-heading text-[1.1rem] sm:text-[1.25rem] mb-3 sm:mb-4">Booking & Availability</h3>
            <p className="text-[0.825rem] sm:text-[0.875rem] text-muted-foreground mb-6 sm:mb-8 max-w-[580px]">
              Fee range and availability provided on inquiry. For event programmers: request the Speaker Brief for format options and booking information.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              <ContactCTA variant="partnership" customText="Request Speaker Brief" sourceContext="Speaker Brief" />
              <Button asChild variant="outline" className="btn-secondary justify-center">
                <Link to="/#engagement-paths">Inquire About Availability →</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Speaking;
