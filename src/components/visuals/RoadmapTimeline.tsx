const phases = [
  { period: '0–90 days', name: 'Foundation' },
  { period: '90–180 days', name: 'Integration' },
  { period: '180–365 days', name: 'Leadership' },
];

const RoadmapTimeline = () => (
  <svg
    viewBox="0 0 500 80"
    className="w-full max-w-[480px] block my-6"
    role="img"
    aria-label="12-month implementation roadmap: Foundation, Integration, Leadership"
  >
    <line
      x1="60"
      y1="24"
      x2="440"
      y2="24"
      style={{ stroke: 'hsl(var(--border))' }}
      strokeWidth="2"
    />

    {phases.map((phase, i) => {
      const x = 60 + i * 190;
      return (
        <g key={phase.name}>
          <circle cx={x} cy={24} r={7} style={{ fill: 'hsl(var(--primary))' }} />
          <text
            x={x}
            y={48}
            textAnchor="middle"
            style={{ fill: 'hsl(var(--foreground))' }}
            fontSize="11"
            fontWeight="500"
            fontFamily="Inter, sans-serif"
          >
            {phase.name}
          </text>
          <text
            x={x}
            y={63}
            textAnchor="middle"
            style={{ fill: 'hsl(var(--muted-foreground))' }}
            fontSize="9"
            fontFamily="Inter, sans-serif"
            letterSpacing="0.04em"
          >
            {phase.period}
          </text>
        </g>
      );
    })}
  </svg>
);

export default RoadmapTimeline;
