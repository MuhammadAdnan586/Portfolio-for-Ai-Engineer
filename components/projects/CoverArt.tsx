import { cn } from "@/lib/utils";

type Props = { slug: string; className?: string };

const palettes: Record<string, [string, string, string]> = {
  "nexora-ai": ["#3B82F6", "#8B5CF6", "#22D3EE"],
  "fertilizer-deficiency-monitor": ["#10B981", "#22D3EE", "#3B82F6"],
  "automl-saas": ["#8B5CF6", "#3B82F6", "#22D3EE"],
  "job-search-assistant": ["#22D3EE", "#3B82F6", "#8B5CF6"],
};

const r1 = (n: number) => Number(n.toFixed(1));

function Motif({ slug, c }: { slug: string; c: [string, string, string] }) {
  const stroke = `url(#line-${slug})`;
  const fill = `url(#fill-${slug})`;

  if (slug === "nexora-ai") {
    const nodes = Array.from({ length: 6 }, (_, i) => {
      const a = (i * Math.PI * 2) / 6 - Math.PI / 2;
      return { x: r1(400 + Math.cos(a) * 190), y: r1(225 + Math.sin(a) * 120) };
    });
    return (
      <g>
        <ellipse cx="400" cy="225" rx="190" ry="120" fill="none" stroke={c[2]} strokeOpacity="0.25" strokeDasharray="4 6" />
        <ellipse cx="400" cy="225" rx="110" ry="70" fill="none" stroke={c[1]} strokeOpacity="0.3" />
        {nodes.map((n, i) => (
          <line key={`l${i}`} x1="400" y1="225" x2={n.x} y2={n.y} stroke={stroke} strokeWidth="1.5" />
        ))}
        {nodes.map((n, i) => (
          <line
            key={`o${i}`}
            x1={n.x}
            y1={n.y}
            x2={nodes[(i + 1) % 6].x}
            y2={nodes[(i + 1) % 6].y}
            stroke={c[0]}
            strokeOpacity="0.3"
          />
        ))}
        {nodes.map((n, i) => (
          <circle key={`n${i}`} cx={n.x} cy={n.y} r="11" fill="#070914" stroke={c[i % 3]} strokeWidth="2" />
        ))}
        <circle cx="400" cy="225" r="34" fill={fill} opacity="0.9" />
        <circle cx="400" cy="225" r="52" fill="none" stroke={c[2]} strokeOpacity="0.5" />
      </g>
    );
  }

  if (slug === "fertilizer-deficiency-monitor") {
    return (
      <g>
        <path d="M400 90 C560 150 575 310 400 365 C225 310 240 150 400 90 Z" fill={fill} opacity="0.85" />
        <path d="M400 90 L400 365" stroke="#070914" strokeOpacity="0.5" strokeWidth="3" />
        {[140, 185, 230, 275, 320].map((y, i) => (
          <g key={y} stroke="#070914" strokeOpacity="0.4" strokeWidth="2">
            <line x1="400" y1={y} x2={r1(400 - 60 - i * 6)} y2={y - 38} />
            <line x1="400" y1={y} x2={r1(400 + 60 + i * 6)} y2={y - 38} />
          </g>
        ))}
        <g stroke={c[2]} strokeWidth="3" fill="none" strokeLinecap="round">
          <path d="M300 120 V90 H330" />
          <path d="M500 120 V90 H470" />
          <path d="M300 335 V365 H330" />
          <path d="M500 335 V365 H470" />
        </g>
        <line x1="290" y1="228" x2="510" y2="228" stroke={c[2]} strokeOpacity="0.8" strokeWidth="2" strokeDasharray="6 5" />
      </g>
    );
  }

  if (slug === "automl-saas") {
    return (
      <g>
        {Array.from({ length: 7 }, (_, i) => (
          <g key={i}>
            <circle cx="215" cy={r1(110 + i * 34 + 9)} r="5" fill={c[i % 3]} opacity={i === 0 ? 1 : 0.6} />
            <rect
              x="240"
              y={110 + i * 34}
              width={430 - i * 48}
              height="18"
              rx="9"
              fill={i === 0 ? fill : "none"}
              stroke={i === 0 ? "none" : stroke}
              strokeWidth="1.5"
              opacity={i === 0 ? 1 : 0.75}
            />
          </g>
        ))}
        <circle cx="662" cy="119" r="14" fill="none" stroke={c[2]} strokeWidth="2" />
      </g>
    );
  }

  // job-search-assistant: 7-agent pipeline
  const agents = Array.from({ length: 7 }, (_, i) => ({
    x: 130 + i * 90,
    y: i % 2 === 0 ? 195 : 260,
  }));
  return (
    <g>
      <polyline points={agents.map((a) => `${a.x},${a.y}`).join(" ")} fill="none" stroke={stroke} strokeWidth="2.5" />
      {agents.map((a, i) => (
        <g key={i}>
          <circle cx={a.x} cy={a.y} r={i === 6 ? 24 : 16} fill="#070914" stroke={c[i % 3]} strokeWidth="2.5" />
          <circle cx={a.x} cy={a.y} r={i === 6 ? 10 : 6} fill={c[i % 3]} />
        </g>
      ))}
      <circle cx="130" cy="195" r="30" fill="none" stroke={c[2]} strokeOpacity="0.4" strokeDasharray="3 5" />
    </g>
  );
}

export default function CoverArt({ slug, className }: Props) {
  const c = palettes[slug] ?? palettes["nexora-ai"];
  return (
    <svg
      viewBox="0 0 800 450"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      className={cn("absolute inset-0 h-full w-full", className)}
    >
      <defs>
        <linearGradient id={`line-${slug}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={c[0]} />
          <stop offset="1" stopColor={c[2]} />
        </linearGradient>
        <linearGradient id={`fill-${slug}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={c[0]} />
          <stop offset="0.6" stopColor={c[1]} />
          <stop offset="1" stopColor={c[2]} />
        </linearGradient>
        <radialGradient id={`glow-${slug}`} cx="50%" cy="50%" r="60%">
          <stop offset="0" stopColor={c[1]} stopOpacity="0.45" />
          <stop offset="1" stopColor={c[1]} stopOpacity="0" />
        </radialGradient>
        <pattern id={`grid-${slug}`} width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="#fff" strokeOpacity="0.05" />
        </pattern>
      </defs>
      <rect width="800" height="450" fill="#070914" />
      <rect width="800" height="450" fill={`url(#grid-${slug})`} />
      <rect width="800" height="450" fill={`url(#glow-${slug})`} />
      <circle cx="90" cy="60" r="120" fill={c[0]} opacity="0.12" />
      <circle cx="730" cy="400" r="140" fill={c[2]} opacity="0.1" />
      <Motif slug={slug} c={c} />
    </svg>
  );
}