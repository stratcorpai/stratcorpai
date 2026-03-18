const pillars = [
  { letter: 'B', lines: ['Board', 'Readiness'] },
  { letter: 'R', lines: ['Risk &', 'Regulatory'] },
  { letter: 'I', lines: ['Integrity &', 'Innovation'] },
  { letter: 'D', lines: ['Direction &', 'Foresight'] },
  { letter: 'G', lines: ['Governance', 'Excellence'] },
  { letter: 'E', lines: ['Environmental', 'Stewardship'] },
];

const CX = 250;
const CY = 200;
const RING_R = 110;
const NODE_R = 20;

const labelConfig: Array<{ dx: number; dy: number; anchor: 'middle' | 'start' | 'end' }> = [
  { dx: 0, dy: -32, anchor: 'middle' },
  { dx: 30, dy: 0, anchor: 'start' },
  { dx: 30, dy: 0, anchor: 'start' },
  { dx: 0, dy: 34, anchor: 'middle' },
  { dx: -30, dy: 0, anchor: 'end' },
  { dx: -30, dy: 0, anchor: 'end' },
];

const BridgeDiagram = () => {
  const nodes = pillars.map((p, i) => {
    const angle = ((i * 60) - 90) * (Math.PI / 180);
    return {
      ...p,
      x: CX + RING_R * Math.cos(angle),
      y: CY + RING_R * Math.sin(angle),
    };
  });

  return (
    <svg
      viewBox="20 25 460 350"
      className="w-full max-w-[300px] sm:max-w-[360px] mx-auto block"
      role="img"
      aria-label="BRIDGE-AI framework: six integrated governance pillars"
    >
      <polygon
        points={nodes.map((n) => `${n.x},${n.y}`).join(' ')}
        fill="none"
        style={{ stroke: 'hsl(var(--border))' }}
        strokeWidth="1"
      />

      {nodes.map((n) => (
        <line
          key={`spoke-${n.letter}`}
          x1={CX}
          y1={CY}
          x2={n.x}
          y2={n.y}
          style={{ stroke: 'hsl(var(--border))' }}
          strokeWidth="0.5"
        />
      ))}

      <text
        x={CX}
        y={CY - 4}
        textAnchor="middle"
        dominantBaseline="central"
        style={{ fill: 'hsl(var(--primary))' }}
        fontSize="13"
        fontWeight="600"
        fontFamily="'Source Serif 4', Georgia, serif"
      >
        BRIDGE-AI
      </text>
      <text
        x={CX}
        y={CY + 14}
        textAnchor="middle"
        style={{ fill: 'hsl(var(--muted-foreground))' }}
        fontSize="7"
        fontFamily="Inter, sans-serif"
        letterSpacing="0.12em"
      >
        GOVERNANCE FRAMEWORK
      </text>

      {nodes.map((n, i) => {
        const cfg = labelConfig[i];
        const lx = n.x + cfg.dx;
        const ly = n.y + cfg.dy;

        return (
          <g key={n.letter}>
            <circle cx={n.x} cy={n.y} r={NODE_R} style={{ fill: 'hsl(var(--primary))' }} />
            <text
              x={n.x}
              y={n.y}
              textAnchor="middle"
              dominantBaseline="central"
              fill="white"
              fontSize="12"
              fontWeight="600"
              fontFamily="'Source Serif 4', Georgia, serif"
            >
              {n.letter}
            </text>

            <text
              x={lx}
              y={ly - 6}
              textAnchor={cfg.anchor}
              style={{ fill: 'hsl(var(--muted-foreground))' }}
              fontSize="10"
              fontFamily="Inter, sans-serif"
              className="hidden sm:block"
            >
              <tspan x={lx} dy="0">{n.lines[0]}</tspan>
              <tspan x={lx} dy="1.25em">{n.lines[1]}</tspan>
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export default BridgeDiagram;
