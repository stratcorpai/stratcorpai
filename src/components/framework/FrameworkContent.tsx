import ContactCTA from '@/components/ContactCTA';
import { siteContent } from '@/content/siteContent';

const forces = [
  {
    label: 'Regulation',
    title: 'Mandatory frameworks',
    description:
      'EU AI Act and principles-based regimes now reach directly to board accountability.',
  },
  {
    label: 'Investors',
    title: 'Competence expectations',
    description:
      'ICGN guidance treats AI governance as a board competence question, not a staff one.',
  },
  {
    label: 'Capacity',
    title: 'Infrastructure as strategy',
    description:
      'Compute, energy, and grid constraints make AI scale a capital allocation decision.',
  },
  {
    label: 'Environment',
    title: 'Energy and water intensity',
    description:
      "AI's operational footprint is a material sustainability disclosure risk.",
  },
];

const tests = [
  {
    number: '01',
    label: 'Efficiency',
    question: 'Can we afford this at the scale we are committing to?',
  },
  {
    number: '02',
    label: 'Effectiveness',
    question: 'Will this deliver the outcome the strategy requires?',
  },
  {
    number: '03',
    label: 'Responsibility',
    question: 'Can we defend this to regulators, investors, and the public?',
  },
];

const pillars = [
  {
    letter: 'B',
    title: 'Board Readiness',
    claim:
      'Board competence is now a strategic asset. Regulators and investors assess visible competence, not policy artifacts. Without explicit mandate boundaries, committees duplicate work and risks stay ownerless.',
    implication:
      'Codify mandate boundaries, handoffs, and education as board KPIs.',
  },
  {
    letter: 'R',
    title: 'Risk & Regulatory',
    claim:
      'Cyber and AI risk share one failure surface. Model supply chains, data controls, and adversarial risk cannot be managed in separate silos. Compliance designed in parallel with product decisions avoids costly late-stage remediation.',
    implication:
      'Unify cyber, model, and third-party risk in board reporting.',
  },
  {
    letter: 'I',
    title: 'Integrity & Innovation',
    claim:
      'Governance architecture (decision rights, escalation thresholds, evidence logs) determines control quality. Policy volume does not. Trust compounds when decisions are evidence-backed and independently auditable.',
    implication:
      'Design governance around decision moments, not compliance checklists.',
  },
  {
    letter: 'D',
    title: 'Direction & Foresight',
    claim:
      'AI portfolios managed as one-way bets fail when capacity constraints and geopolitical dependencies materialize. Sequencing by reversibility, dependency risk, and value preserves strategic optionality.',
    implication:
      'Manage AI investments as options, with explicit stop/go logic.',
  },
  {
    letter: 'G',
    title: 'Governance Excellence',
    claim:
      'Transformation fails when boards approve ambition but not operating cadence. Programs drift when milestones lack accountable owners. Board-level execution checkpoints with kill criteria prevent this.',
    implication:
      'Adopt board-level execution checkpoints with accountable owners.',
  },
  {
    letter: 'E',
    title: 'Environmental Stewardship',
    claim:
      'Energy and water intensity are material disclosure risks. Environmental KPIs for AI infrastructure belong in the same governance cadence as financial controls, not siloed in sustainability reporting.',
    implication:
      'Integrate environmental AI metrics into board reporting cadence.',
  },
];

const committees = [
  {
    name: 'Audit & Risk',
    owns: 'ERM, controls, assurance — owns Risk & Regulatory and Integrity pillars.',
  },
  {
    name: 'Strategy',
    owns: 'Capacity, M&A, foresight — owns Direction & Foresight pillar.',
  },
  {
    name: 'Sustainability / ESG',
    owns: 'Environmental KPIs, supply chain — owns Environmental Stewardship pillar.',
  },
  {
    name: 'Technology & Innovation',
    owns: 'Model lifecycle, ethics, third parties — owns Integrity & Innovation pillar.',
  },
];

const roadmap = [
  {
    period: '0 – 90 days',
    phase: 'Foundation',
    description:
      'Board education programme, AI risk and use-case baseline, Responsible AI policy adopted. Mandate boundaries codified across committees.',
  },
  {
    period: '90 – 180 days',
    phase: 'Integration',
    description:
      'ISO 42001 gap assessment, EU AI Act readiness mapping, BRIDGE-AI scorecard operational. High-risk use cases identified and tied to committee oversight.',
  },
  {
    period: '180 – 365 days',
    phase: 'Leadership',
    description:
      'Independent assurance programme live, board foresight capability established, regulatory and peer coalitions formed. Evidence quality tracked as a board KPI.',
  },
];

const FrameworkContent = () => {
  return (
    <article className="max-w-[860px] mx-auto px-6 pb-16 md:pb-24">
      <p className="text-[11px] tracking-[0.14em] uppercase text-muted-foreground mb-4">
        Stratified Advisory · A. Bulisache &amp; S. Chaturvedi
      </p>

      <h1 className="font-heading text-[clamp(2.2rem,5vw,3.2rem)] leading-[1.15] font-normal mb-6 text-foreground">
        BRIDGE-AI™
        <br />
        <em className="not-italic text-muted-foreground">AI governance built for the board</em>
      </h1>

      <p className="text-[1.06rem] leading-[1.75] text-muted-foreground max-w-[620px] mb-12 font-normal">
        Most boards have approved AI investment. Few have built the governance architecture to
        manage what comes next. BRIDGE-AI is the operating framework that closes that gap: six
        integrated pillars that give boards mandate, controls, and a decision model that holds at
        scale.
      </p>

      <hr className="border-0 border-t border-border/60 my-8 md:my-12" />

      <h2 className="font-heading text-[1.6rem] font-normal mb-4 text-foreground">
        The problem is not technology. It is accountability.
      </h2>
      <p className="text-[0.975rem] leading-[1.75] text-muted-foreground font-normal">
        AI programs fail at the board level for a consistent set of reasons: accountability that
        sits nowhere, risk that compounds before it escalates, and capital committed before
        decision quality is established. The result is not delayed innovation; it is unmanaged
        exposure with no decision trace.
      </p>
      <p className="text-[0.975rem] leading-[1.75] text-muted-foreground font-normal mt-4">
        Four forces have made this a board-level priority, not a management issue to resolve in
        time.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
        {forces.map((force) => (
          <div key={force.label} className="border border-border/70 rounded-lg p-4 bg-background">
            <p className="text-xs tracking-[0.1em] uppercase text-muted-foreground mb-2">
              {force.label}
            </p>
            <p className="text-[0.95rem] font-medium text-foreground">{force.title}</p>
            <p className="text-[0.825rem] text-muted-foreground mt-1 leading-[1.5]">
              {force.description}
            </p>
          </div>
        ))}
      </div>

      <hr className="border-0 border-t border-border/60 my-8 md:my-12" />

      <h2 className="font-heading text-[1.6rem] font-normal mb-4 text-foreground">
        One decision model. Every major commitment.
      </h2>
      <p className="text-[0.975rem] leading-[1.75] text-muted-foreground font-normal">
        Before any significant AI investment, BRIDGE-AI requires three tests to pass, not
        sequentially, simultaneously. Each test closes a different failure mode.
      </p>

      <div className="grid md:grid-cols-3 gap-px bg-border/70 rounded-lg overflow-hidden my-6">
        {tests.map((test) => (
          <div key={test.number} className="bg-background p-5">
            <p className="font-heading text-[1.5rem] text-muted-foreground mb-2">{test.number}</p>
            <p className="text-[0.8rem] tracking-[0.1em] uppercase font-medium text-foreground mb-1">
              {test.label}
            </p>
            <p className="text-[0.85rem] italic leading-[1.5] text-muted-foreground">{test.question}</p>
          </div>
        ))}
      </div>

      <p className="text-[0.975rem] leading-[1.75] text-muted-foreground font-normal">
        Capital intensity, execution feasibility, and compliance are the recurring failure points.
        This scorecard makes them explicit before commitment, not visible after failure.
      </p>

      <hr className="border-0 border-t border-border/60 my-8 md:my-12" />

      <h2 className="font-heading text-[1.6rem] font-normal mb-4 text-foreground">
        The framework: six pillars, one operating model
      </h2>
      <p className="text-[0.975rem] leading-[1.75] text-muted-foreground font-normal">
        BRIDGE-AI is not an acronym layered over existing policy. It is a governance architecture.
        Each pillar addresses a distinct control gap, and together they form one model the board
        can monitor, audit, and improve.
      </p>

      <div className="my-8">
        {pillars.map((pillar, index) => (
          <div
            key={pillar.letter}
            className={`grid grid-cols-[2.5rem_1fr] gap-4 items-start py-6 border-t border-border/60 ${
              index === pillars.length - 1 ? 'border-b border-border/60' : ''
            }`}
          >
            <p className="font-heading text-[2rem] leading-none text-stratified">{pillar.letter}</p>
            <div>
              <p className="text-[0.875rem] tracking-[0.06em] uppercase font-medium text-foreground mb-2">
                {pillar.title}
              </p>
              <p className="text-[0.925rem] leading-[1.65] text-muted-foreground">{pillar.claim}</p>
              <p className="inline-block mt-3 px-3 py-1 text-[0.8rem] font-medium text-foreground bg-muted rounded">
                {pillar.implication}
              </p>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-0 border-t border-border/60 my-8 md:my-12" />

      <h2 className="font-heading text-[1.6rem] font-normal mb-4 text-foreground">
        Committee ownership across the six pillars
      </h2>
      <p className="text-[0.975rem] leading-[1.75] text-muted-foreground font-normal">
        BRIDGE-AI maps to existing board committee structures. No new committee is required. The
        framework clarifies ownership and handoffs.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
        {committees.map((committee) => (
          <div key={committee.name} className="border border-border/70 rounded-lg p-4">
            <p className="text-[0.775rem] tracking-[0.08em] uppercase font-medium text-foreground mb-2">
              {committee.name}
            </p>
            <p className="text-[0.825rem] text-muted-foreground leading-[1.5]">{committee.owns}</p>
          </div>
        ))}
      </div>

      <hr className="border-0 border-t border-border/60 my-8 md:my-12" />

      <h2 className="font-heading text-[1.6rem] font-normal mb-4 text-foreground">
        A 12-month path from baseline to leadership
      </h2>
      <p className="text-[0.975rem] leading-[1.75] text-muted-foreground font-normal">
        BRIDGE-AI is implemented in three phases. Each phase builds on the last.
      </p>

      <div className="my-6">
        {roadmap.map((phase, index) => (
          <div
            key={phase.period}
            className={`py-6 border-t border-border/60 ${
              index === roadmap.length - 1 ? 'border-b border-border/60' : ''
            } sm:grid sm:grid-cols-[7rem_1fr] sm:gap-6`}
          >
            <p className="text-[0.75rem] tracking-[0.08em] uppercase text-muted-foreground mb-2 sm:mb-0 sm:pt-1">
              {phase.period}
            </p>
            <div>
              <p className="text-[0.875rem] font-medium text-foreground mb-1">{phase.phase}</p>
              <p className="text-[0.85rem] text-muted-foreground leading-[1.6]">{phase.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 md:p-10 border border-border/70 rounded-lg bg-muted/30">
        <h2 className="font-heading text-[1.4rem] font-normal mb-3 text-foreground">
          Governed AI moves faster.
        </h2>
        <p className="text-[0.975rem] leading-[1.75] text-muted-foreground max-w-[580px]">
          When trade-offs are explicit and accountability is clear, AI programs produce less
          rework, less conflict, and less drift. BRIDGE-AI is the operating discipline that sets
          decision quality before capital is committed, not after consequences arrive.
        </p>
        <p className="mt-5 text-[0.875rem] text-foreground font-medium max-w-[620px]">
          The board&apos;s job is not to approve AI investment. It is to govern the conditions under
          which that investment creates durable value.
        </p>
        <ContactCTA
          variant="board-advisory"
          size="default"
          sourceContext="Framework Narrative CTA"
          customText="Start board advisory"
          className="mt-6"
        />
      </div>

    </article>
  );
};

export default FrameworkContent;
