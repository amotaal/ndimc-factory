import type { SVGProps } from "react";

type IllProps = SVGProps<SVGSVGElement>;

const view = (props: IllProps) => ({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 400 280",
  ...props,
});

export function FudgeBitesIllustration(props: IllProps) {
  return (
    <svg {...view(props)}>
      <rect width="400" height="280" fill="#f6ecd9" />
      <ellipse cx="200" cy="230" rx="170" ry="22" fill="#e7d7b3" />
      <g>
        {[
          [120, 170, 30, "#f9c4c4"],
          [170, 190, 34, "#fbd1d1"],
          [230, 175, 32, "#fbbaba"],
          [280, 195, 30, "#fdd6d6"],
          [150, 140, 26, "#f9c4c4"],
          [210, 140, 28, "#fbd1d1"],
          [260, 140, 26, "#fbbaba"],
        ].map(([x, y, r, c], i) => (
          <g key={i}>
            <rect
              x={(x as number) - (r as number) / 2}
              y={(y as number) - (r as number) / 2}
              width={r as number}
              height={r as number}
              rx="4"
              fill={c as string}
              stroke="#c86b6b"
              strokeWidth="1.2"
            />
            <circle cx={(x as number) - 4} cy={(y as number) - 6} r="2" fill="#e23d3d" />
            <circle cx={(x as number) + 5} cy={(y as number) + 4} r="1.5" fill="#e23d3d" />
          </g>
        ))}
      </g>
    </svg>
  );
}

export function MadeleineIllustration(props: IllProps) {
  return (
    <svg {...view(props)}>
      <rect width="400" height="280" fill="#f6ecd9" />
      <ellipse cx="200" cy="230" rx="170" ry="22" fill="#e7d7b3" />
      <g>
        {[
          [130, 160],
          [220, 160],
          [175, 200],
          [265, 200],
        ].map(([x, y], i) => (
          <g key={i}>
            <path
              d={`M${x - 50} ${y} Q${x} ${y - 40} ${x + 50} ${y} Q${x} ${y + 30} ${x - 50} ${y} Z`}
              fill="#e0b070"
              stroke="#8a5a2e"
              strokeWidth="1.5"
            />
            <path
              d={`M${x - 40} ${y + 2} Q${x} ${y - 30} ${x + 40} ${y + 2}`}
              stroke="#fff"
              strokeWidth="0.8"
              fill="none"
              opacity="0.6"
            />
            <g opacity="0.7">
              <circle cx={x - 20} cy={y - 8} r="2" fill="#fff" />
              <circle cx={x + 5} cy={y - 15} r="2" fill="#fff" />
              <circle cx={x + 25} cy={y - 4} r="2" fill="#fff" />
            </g>
          </g>
        ))}
      </g>
    </svg>
  );
}

export function CoffeeBeanCookieIllustration(props: IllProps) {
  return (
    <svg {...view(props)}>
      <rect width="400" height="280" fill="#f6ecd9" />
      <ellipse cx="200" cy="230" rx="170" ry="22" fill="#e7d7b3" />
      {[
        [130, 170],
        [220, 170],
        [175, 210],
        [265, 210],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x as number} cy={y as number} r="42" fill="#c28a4c" stroke="#6f4420" strokeWidth="1.5" />
          <g fill="#5b3a20">
            <ellipse cx={(x as number) - 12} cy={(y as number) - 8} rx="6" ry="10" transform={`rotate(-20 ${(x as number) - 12} ${(y as number) - 8})`} />
            <ellipse cx={(x as number) + 10} cy={(y as number) - 6} rx="6" ry="10" transform={`rotate(15 ${(x as number) + 10} ${(y as number) - 6})`} />
            <ellipse cx={(x as number) - 4} cy={(y as number) + 12} rx="6" ry="10" transform={`rotate(5 ${(x as number) - 4} ${(y as number) + 12})`} />
          </g>
          <g stroke="#2a2a2a" strokeWidth="1" fill="none">
            <path d={`M${(x as number) - 12} ${(y as number) - 15} L${(x as number) - 12} ${(y as number) - 1}`} />
            <path d={`M${(x as number) + 10} ${(y as number) - 13} L${(x as number) + 10} ${(y as number) + 1}`} />
            <path d={`M${(x as number) - 4} ${(y as number) + 5} L${(x as number) - 4} ${(y as number) + 19}`} />
          </g>
        </g>
      ))}
    </svg>
  );
}

export function PinwheelCookieIllustration(props: IllProps) {
  return (
    <svg {...view(props)}>
      <rect width="400" height="280" fill="#f6ecd9" />
      <ellipse cx="200" cy="230" rx="170" ry="22" fill="#e7d7b3" />
      {[
        [140, 170],
        [230, 170],
        [185, 210],
        [275, 210],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x as number} cy={y as number} r="40" fill="#e7c082" stroke="#8a5a2e" strokeWidth="1.5" />
          <g stroke="#6f4420" strokeWidth="3" fill="none" strokeLinecap="round">
            <path d={`M${x as number} ${(y as number) - 32} Q${(x as number) + 24} ${y as number} ${x as number} ${(y as number) + 32}`} />
            <path d={`M${(x as number) - 32} ${y as number} Q${x as number} ${(y as number) - 24} ${(x as number) + 32} ${y as number}`} />
          </g>
          <circle cx={x as number} cy={y as number} r="8" fill="#fff3d0" stroke="#8a5a2e" strokeWidth="1" />
        </g>
      ))}
    </svg>
  );
}

export function HazelnutChocolateCookieIllustration(props: IllProps) {
  return (
    <svg {...view(props)}>
      <rect width="400" height="280" fill="#f6ecd9" />
      <ellipse cx="200" cy="230" rx="170" ry="22" fill="#e7d7b3" />
      {[
        [140, 170],
        [230, 170],
        [185, 210],
        [275, 210],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x as number} cy={y as number} r="42" fill="#d9a066" stroke="#8a5a2e" strokeWidth="1.5" />
          {[
            [-12, -10],
            [10, -6],
            [-6, 12],
            [14, 14],
            [-18, 4],
          ].map(([dx, dy], k) => (
            <circle
              key={k}
              cx={(x as number) + (dx as number)}
              cy={(y as number) + (dy as number)}
              r="3.5"
              fill="#3e2410"
            />
          ))}
        </g>
      ))}
    </svg>
  );
}

export function MixedBerriesCakeIllustration(props: IllProps) {
  return (
    <svg {...view(props)}>
      <rect width="400" height="280" fill="#f6ecd9" />
      <ellipse cx="200" cy="240" rx="170" ry="22" fill="#e7d7b3" />
      <path d="M60 220 Q60 160 100 150 L300 150 Q340 160 340 220 Z" fill="#f2d9aa" stroke="#8a5a2e" strokeWidth="1.5" />
      <rect x="80" y="150" width="240" height="16" fill="#b75555" opacity="0.35" />
      <rect x="80" y="182" width="240" height="12" fill="#fff" opacity="0.7" />
      <rect x="80" y="206" width="240" height="10" fill="#b75555" opacity="0.35" />
      <g>
        <circle cx="140" cy="140" r="10" fill="#6a3a8c" />
        <circle cx="170" cy="135" r="10" fill="#b75555" />
        <circle cx="200" cy="138" r="10" fill="#4466aa" />
        <circle cx="230" cy="134" r="10" fill="#a23535" />
        <circle cx="260" cy="140" r="10" fill="#6a3a8c" />
        <path d="M160 132 Q175 120 185 130" stroke="#6a8a3a" strokeWidth="2" fill="none" />
      </g>
    </svg>
  );
}

export function StrawberryShortcakeIllustration(props: IllProps) {
  return (
    <svg {...view(props)}>
      <rect width="400" height="280" fill="#f6ecd9" />
      <ellipse cx="200" cy="240" rx="170" ry="18" fill="#e7d7b3" />
      {[130, 210, 290].map((x, i) => (
        <g key={i}>
          <path
            d={`M${x - 32} 220 L${x - 28} 120 Q${x - 28} 112 ${x - 20} 112 L${x + 20} 112 Q${x + 28} 112 ${x + 28} 120 L${x + 32} 220 Z`}
            fill="#fff"
            stroke="#8a5a2e"
            strokeWidth="1.2"
            opacity="0.95"
          />
          <rect x={x - 28} y={160} width="56" height="14" fill="#e06a6a" />
          <rect x={x - 28} y={180} width="56" height="8" fill="#f2d9aa" />
          <g>
            <path d={`M${x - 8} 100 Q${x} 80 ${x + 8} 100 Z`} fill="#d03a3a" />
            <circle cx={x - 4} cy={94} r="0.8" fill="#fff" />
            <circle cx={x + 4} cy={94} r="0.8" fill="#fff" />
            <path d={`M${x - 10} 98 L${x - 6} 92 L${x - 2} 98 Z`} fill="#6a8a3a" />
          </g>
        </g>
      ))}
    </svg>
  );
}

export function WildberryCupcakeIllustration(props: IllProps) {
  return (
    <svg {...view(props)}>
      <rect width="400" height="280" fill="#f6ecd9" />
      <ellipse cx="200" cy="240" rx="170" ry="20" fill="#e7d7b3" />
      {[120, 200, 280].map((x, i) => (
        <g key={i}>
          <path
            d={`M${x - 34} 200 L${x - 28} 150 L${x + 28} 150 L${x + 34} 200 Z`}
            fill="#b07a45"
            stroke="#6f4420"
            strokeWidth="1.2"
          />
          <g stroke="#8a5a2e" strokeWidth="1" opacity="0.6">
            <path d={`M${x - 28} 155 L${x - 24} 195`} />
            <path d={`M${x - 20} 155 L${x - 18} 195`} />
            <path d={`M${x - 12} 155 L${x - 12} 195`} />
            <path d={`M${x - 4} 155 L${x - 4} 195`} />
            <path d={`M${x + 4} 155 L${x + 4} 195`} />
            <path d={`M${x + 12} 155 L${x + 12} 195`} />
            <path d={`M${x + 20} 155 L${x + 22} 195`} />
            <path d={`M${x + 28} 155 L${x + 28} 195`} />
          </g>
          <path
            d={`M${x - 30} 150 Q${x - 20} 110 ${x} 118 Q${x + 20} 108 ${x + 30} 150 Q${x + 20} 140 ${x} 142 Q${x - 20} 140 ${x - 30} 150 Z`}
            fill="#e9b6c8"
            stroke="#b0607a"
            strokeWidth="1.2"
          />
          <g>
            <circle cx={x - 10} cy={120} r="4" fill="#6a3a8c" />
            <circle cx={x + 4} cy={112} r="4" fill="#a23535" />
            <circle cx={x + 14} cy={124} r="4" fill="#4466aa" />
          </g>
        </g>
      ))}
    </svg>
  );
}

/** Generic plate-with-slab placeholder — for recipes without a specific illustration */
export function GenericPlateIllustration(props: IllProps) {
  return (
    <svg {...view(props)}>
      <rect width="400" height="280" fill="#f6ecd9" />
      <ellipse cx="200" cy="220" rx="170" ry="22" fill="#e7d7b3" />
      <ellipse cx="200" cy="200" rx="140" ry="18" fill="#d9c38d" />
      <path d="M90 200 Q90 160 200 155 Q310 160 310 200 Z" fill="#c3844b" stroke="#8a5a2e" />
    </svg>
  );
}
