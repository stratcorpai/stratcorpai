import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ContactCTA from '@/components/ContactCTA';
import Team from '@/components/Team';
import { siteContent } from '@/content/siteContent';
import { getBlogPosts, openPDF } from '@/utils/blogUtils';

const HomePageNarrative = () => {
  const posts = getBlogPosts();
  const featuredPost = posts.find((p) => p.isFeatured);
  const otherPosts = posts.filter((p) => !p.isFeatured);

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <main>
      <section
        className="min-h-[70vh] md:min-h-[80vh] flex flex-col justify-end pt-32 pb-14 md:pt-40 md:pb-20 border-b border-border bg-muted/30"
      >
        <div className="container-custom max-w-[900px]">
          <p className="text-[11px] tracking-[0.14em] uppercase text-muted-foreground mb-4">
            Stratified Advisory · Board Advisory
          </p>
          <h1 className="font-heading text-[clamp(2.4rem,5.5vw,3.6rem)] leading-[1.12] mb-7 text-foreground">
            <strong className="font-semibold">Most boards have approved AI.</strong>
            <br />
            <em className="not-italic font-normal text-muted-foreground">Few have built the controls to manage it.</em>
          </h1>
          <p className="text-[1.1rem] leading-[1.8] text-muted-foreground max-w-[620px] font-normal">
            We work with boards and PE firms when the AI, cyber, or transformation decision in front of
            them requires governance architecture, not a strategy presentation. We establish who is
            accountable, what the decision criteria are, and how the board stays in control as the
            program runs.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <ContactCTA variant="board-advisory" customText="Start a discussion" sourceContext="Home Hero CTA" />
            <Button asChild variant="outline" className="btn-secondary">
              <Link to="/framework">View BRIDGE-AI</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="container-custom max-w-[900px]">
        <hr className="border-0 border-t border-border/60 my-8 md:my-12" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border/70 rounded-lg overflow-hidden">
          {siteContent.boardService.stats.map((stat) => (
            <div key={stat.value} className="bg-background p-6">
              <p className="font-heading text-[2rem] leading-none font-normal text-foreground mb-1">{stat.value}</p>
              <p className="text-[0.8rem] leading-[1.4] text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <hr className="border-0 border-t border-border/60 my-8 md:my-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/70 rounded-lg overflow-hidden">
          <section id="investment-thesis" className="bg-background p-6 md:p-7">
            <p className="text-[0.7rem] tracking-[0.12em] uppercase font-medium text-muted-foreground mb-3">
              Enterprise boards
            </p>
            <h2 className="font-heading text-[1.15rem] md:text-[1.25rem] leading-[1.35] text-foreground mb-3">
              You approved the investment. Now the board is accountable for what it does.
            </h2>
            <p className="text-[0.875rem] leading-[1.65] text-muted-foreground">
              Regulators and investors no longer accept AI governance that lives only in management.
              They expect visible board competence: explicit mandate, committee ownership, and
              evidence the board can defend under scrutiny.
            </p>
            <ul className="mt-4">
              {[
                'AI governance and oversight architecture',
                'Mandate and decision rights across committees',
                'EU AI Act and ISO 42001 readiness',
                'Board education and director competence',
                'Execution checkpoints with stop/go logic',
              ].map((item) => (
                <li key={item} className="text-[0.825rem] text-muted-foreground py-2 border-t border-border/60 leading-[1.5]">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-background p-6 md:p-7">
            <p className="text-[0.7rem] tracking-[0.12em] uppercase font-medium text-muted-foreground mb-3">
              PE &amp; investor boards
            </p>
            <h2 className="font-heading text-[1.15rem] md:text-[1.25rem] leading-[1.35] text-foreground mb-3">
              AI transformation programs fail at the governance layer, not the technology layer.
            </h2>
            <p className="text-[0.875rem] leading-[1.65] text-muted-foreground">
              Unclear accountability, capital committed before controls are set, and no board-level
              view of where risk sits. We make those gaps visible at entry and build the governance
              model that holds through the hold period.
            </p>
            <ul className="mt-4">
              {[
                'Portfolio AI and cyber risk diagnostics',
                'Risk-adjusted investment prioritization',
                'Governance across the full hold period',
                'Board and operating partner alignment',
                'Exit readiness: governance as a valuation input',
              ].map((item) => (
                <li key={item} className="text-[0.825rem] text-muted-foreground py-2 border-t border-border/60 leading-[1.5]">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <hr className="border-0 border-t border-border/60 my-8 md:my-12" />

        <section>
          <h2 className="font-heading text-[1.65rem] font-normal text-foreground mb-3">
            Before every major commitment: three questions.
          </h2>
          <p className="text-[0.975rem] leading-[1.75] text-muted-foreground">
            Capital intensity, execution feasibility, and regulatory exposure are where AI programs
            fail. Asking these before a decision, not after, is what the framework enforces.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border/70 rounded-lg overflow-hidden my-6">
            {[
              { n: '01', label: 'Efficiency', q: "Can we afford this at the scale we're committing to?" },
              { n: '02', label: 'Effectiveness', q: 'Will this deliver the outcome the strategy requires?' },
              { n: '03', label: 'Responsibility', q: 'Can we defend this to regulators, investors, and the public?' },
            ].map((test) => (
              <div key={test.n} className="bg-background p-5">
                <p className="font-heading text-[1.4rem] text-muted-foreground mb-2">{test.n}</p>
                <p className="text-[0.8rem] tracking-[0.1em] uppercase font-medium text-foreground mb-1">{test.label}</p>
                <p className="text-[0.825rem] text-muted-foreground leading-[1.5] italic">{test.q}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-0 border-t border-border/60 my-8 md:my-12" />

        <section id="board-service">
          <h2 className="font-heading text-[1.65rem] font-normal text-foreground mb-3">What we deliver</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
            {[
              {
                label: 'Governance',
                title: 'AI Governance & Oversight',
                desc: 'Decision rights, escalation thresholds, and evidence logs built around the moments where accountability matters.',
              },
              {
                label: 'Resilience',
                title: 'Cyber Resilience Strategy',
                desc: 'Model supply chain, data controls, and third-party exposure mapped as one risk posture the board can report on.',
              },
              {
                label: 'Execution',
                title: 'Transformation Governance',
                desc: "Milestone ownership and board checkpoints with explicit kill criteria, so programs don't drift past correction.",
              },
              {
                label: 'Capital',
                title: 'Investment & Portfolio Prioritization',
                desc: 'AI programs sequenced by reversibility, dependency risk, and value, not by which team argued hardest.',
              },
              {
                label: 'Compliance',
                title: 'Regulatory & Compliance Alignment',
                desc: 'High-risk use cases identified and controlled early. Readiness by design beats late-stage remediation.',
              },
              {
                label: 'Alignment',
                title: 'Leadership Decision Support',
                desc: 'Board and executive alignment on critical decisions, with trade-offs visible and ownership clear before execution.',
              },
            ].map((service) => (
              <article key={service.title} className="border border-border/70 rounded-lg p-5 bg-background">
                <p className="text-[0.7rem] tracking-[0.1em] uppercase text-muted-foreground mb-2">{service.label}</p>
                <h3 className="text-[0.95rem] font-medium text-foreground mb-2">{service.title}</h3>
                <p className="text-[0.825rem] text-muted-foreground leading-[1.55]">{service.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <hr className="border-0 border-t border-border/60 my-8 md:my-12" />

        <section className="border border-border/70 rounded-lg p-6 bg-background">
          <h3 className="font-heading text-[1.1rem] font-normal text-foreground mb-2">
            BRIDGE-AI™ — the governance architecture behind our work
          </h3>
          <p className="text-[0.875rem] text-muted-foreground leading-[1.65]">
            Six pillars that give boards mandate, controls, and a decision model. Not a policy
            checklist: an operating model the board monitors, audits, and improves.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {[
              'B — Board Readiness',
              'R — Risk & Regulatory',
              'I — Integrity & Innovation',
              'D — Direction & Foresight',
              'G — Governance Excellence',
              'E — Environmental Stewardship',
            ].map((pillar) => (
              <span key={pillar} className="text-[0.75rem] px-3 py-1 border border-border/70 rounded bg-muted/40 text-muted-foreground">
                {pillar}
              </span>
            ))}
          </div>
          <div className="mt-5">
            <Button asChild className="btn-primary">
              <Link to="/framework">Open full framework</Link>
            </Button>
          </div>
        </section>

        <hr className="border-0 border-t border-border/60 my-8 md:my-12" />

        <section id="ai-governance">
          <h2 className="font-heading text-[1.65rem] font-normal text-foreground mb-3">Research</h2>
          <p className="text-[0.975rem] leading-[1.75] text-muted-foreground mb-6">
            Board-level evidence on AI governance, capacity, geopolitics, and sustainability.
          </p>

          {featuredPost && (
            <article
              className="border border-border/70 rounded-lg p-6 md:p-8 bg-muted/20 cursor-pointer mb-6 group"
              onClick={() => openPDF(featuredPost.pdfUrl)}
            >
              <p className="text-[0.7rem] tracking-[0.12em] uppercase text-muted-foreground mb-3">Featured</p>
              <h3 className="font-heading text-[1.35rem] md:text-[1.5rem] font-normal text-foreground mb-3 leading-[1.3] group-hover:text-stratified transition-colors">
                {featuredPost.title}
              </h3>
              <p className="text-[0.8rem] text-muted-foreground mb-3">
                {formatDate(featuredPost.publishDate)} · {featuredPost.readTime}
              </p>
              <p className="text-[0.875rem] text-muted-foreground leading-[1.65] max-w-[620px] mb-4">
                {featuredPost.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {featuredPost.tags?.map((tag) => (
                  <span key={tag} className="text-[0.7rem] tracking-[0.08em] uppercase text-stratified/80">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          )}

          <div className="border-t border-border/60">
            {otherPosts.map((post) => (
              <article
                key={post.id}
                className="border-b border-border/60 py-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 cursor-pointer group"
                onClick={() => openPDF(post.pdfUrl)}
              >
                <div>
                  <h3 className="text-[0.95rem] font-medium text-foreground mb-1 leading-[1.4] group-hover:text-stratified transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[0.8rem] text-muted-foreground mb-1">
                    {formatDate(post.publishDate)} · {post.readTime}
                  </p>
                  <p className="text-[0.825rem] text-muted-foreground leading-[1.5]">{post.description}</p>
                </div>
                <span className="text-[0.8rem] text-stratified/70 whitespace-nowrap sm:mt-1">Read →</span>
              </article>
            ))}
          </div>
        </section>
      </div>

      <Team />
    </main>
  );
};

export default HomePageNarrative;
