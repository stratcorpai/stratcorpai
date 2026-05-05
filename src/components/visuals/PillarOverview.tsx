const pillars = [
  { letter: 'B', title: 'Board Readiness' },
  { letter: 'R', title: 'Risk & Regulatory' },
  { letter: 'I', title: 'Integrity & Innovation' },
  { letter: 'D', title: 'Direction & Foresight' },
  { letter: 'G', title: 'Governance Excellence' },
  { letter: 'E', title: 'Environmental Stewardship' },
];

const PillarOverview = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-px bg-border/70 rounded-lg overflow-hidden my-6 sm:my-8">
    {pillars.map((p) => (
      <div key={p.letter} className="bg-background py-3 sm:py-4 px-2 sm:px-3 text-center">
        <p className="font-heading text-[1.25rem] sm:text-[1.5rem] leading-none text-stratified mb-1">
          {p.letter}
        </p>
        <p className="text-[0.6rem] sm:text-[0.65rem] text-muted-foreground tracking-[0.04em] leading-[1.35]">
          {p.title}
        </p>
      </div>
    ))}
  </div>
);

export default PillarOverview;
