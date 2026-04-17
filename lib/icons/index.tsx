import type { SVGProps } from "react";

export * from "./illustrations";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 64 64",
  fill: "none",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export function ButterIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="8" y="28" width="48" height="20" rx="2" fill="#f6d37b" stroke="#a06a1f" strokeWidth="1.5" />
      <path d="M8 28 L18 18 L56 18 L56 28 Z" fill="#fce58e" stroke="#a06a1f" strokeWidth="1.5" />
      <path d="M18 18 L56 18 L56 28" stroke="#a06a1f" strokeWidth="1.5" />
      <text x="32" y="43" textAnchor="middle" fontFamily="sans-serif" fontWeight="700" fontSize="9" fill="#a06a1f">
        BUTTER
      </text>
    </svg>
  );
}

export function GheeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="14" y="18" width="36" height="34" rx="4" fill="#f4d38b" stroke="#a06a1f" strokeWidth="1.5" />
      <rect x="18" y="10" width="28" height="10" rx="2" fill="#b98842" stroke="#7a511b" strokeWidth="1.5" />
      <rect x="20" y="28" width="24" height="12" rx="1.5" fill="#fff3d0" stroke="#a06a1f" strokeWidth="1.2" />
    </svg>
  );
}

export function SugarBagIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M14 20 Q14 16 18 16 L46 16 Q50 16 50 20 L50 52 Q50 56 46 56 L18 56 Q14 56 14 52 Z" fill="#f6ecd9" stroke="#a06a1f" strokeWidth="1.5" />
      <rect x="20" y="28" width="24" height="14" rx="1" fill="#fff" stroke="#a06a1f" strokeWidth="1.2" />
      <text x="32" y="38" textAnchor="middle" fontFamily="sans-serif" fontWeight="800" fontSize="7" fill="#a06a1f">
        SUGAR
      </text>
    </svg>
  );
}

export function WaterCupIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M16 16 L48 16 L44 54 Q44 56 42 56 L22 56 Q20 56 20 54 Z" fill="#dbeffb" stroke="#2b7aa1" strokeWidth="1.5" />
      <path d="M20 32 Q32 36 44 32 L42 54 Q42 56 40 56 L24 56 Q22 56 22 54 Z" fill="#7bc0e6" stroke="#2b7aa1" strokeWidth="1.2" />
      <ellipse cx="32" cy="16" rx="16" ry="3" fill="#bfe0f2" stroke="#2b7aa1" strokeWidth="1.2" />
    </svg>
  );
}

export function FlavorBottleIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="26" y="6" width="12" height="6" rx="1" fill="#5b3a20" stroke="#3a2412" strokeWidth="1.2" />
      <rect x="28" y="12" width="8" height="4" fill="#8a5a2e" stroke="#3a2412" strokeWidth="1.2" />
      <path d="M22 18 L42 18 L42 52 Q42 56 38 56 L26 56 Q22 56 22 52 Z" fill="#a0662b" stroke="#3a2412" strokeWidth="1.5" />
      <rect x="24" y="28" width="16" height="18" fill="#fff3d0" stroke="#3a2412" strokeWidth="1.2" />
      <text x="32" y="40" textAnchor="middle" fontFamily="sans-serif" fontWeight="700" fontSize="6" fill="#5b3a20">
        FLAVOR
      </text>
    </svg>
  );
}

export function ScaleIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="8" y="32" width="48" height="22" rx="4" fill="#f2e2c0" stroke="#a06a1f" strokeWidth="1.5" />
      <rect x="18" y="24" width="28" height="12" rx="2" fill="#fff8e3" stroke="#a06a1f" strokeWidth="1.2" />
      <circle cx="32" cy="42" r="6" fill="#fff" stroke="#a06a1f" strokeWidth="1.2" />
      <path d="M32 42 L35 38" stroke="#c24b2c" strokeWidth="1.6" />
      <circle cx="32" cy="42" r="1" fill="#a06a1f" />
    </svg>
  );
}

export function BowlWhiskIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M10 34 Q32 58 54 34 Z" fill="#f4d4a0" stroke="#a06a1f" strokeWidth="1.5" />
      <ellipse cx="32" cy="34" rx="22" ry="4" fill="#fff3d0" stroke="#a06a1f" strokeWidth="1.2" />
      <path d="M38 10 L42 30" stroke="#5b3a20" strokeWidth="2" />
      <path d="M38 10 Q44 20 44 30 Q42 32 40 30 Q40 20 36 12 Z" fill="#cfcfcf" stroke="#5b3a20" strokeWidth="1.2" />
    </svg>
  );
}

export function PourSugarIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M18 8 L30 8 L26 28 L22 28 Z" fill="#f6ecd9" stroke="#a06a1f" strokeWidth="1.5" />
      <circle cx="24" cy="34" r="1.4" fill="#a06a1f" />
      <circle cx="28" cy="40" r="1.2" fill="#a06a1f" />
      <circle cx="32" cy="46" r="1.4" fill="#a06a1f" />
      <path d="M26 50 Q36 54 50 46 L52 54 Q38 60 24 56 Z" fill="#f4d4a0" stroke="#a06a1f" strokeWidth="1.5" />
    </svg>
  );
}

export function DropperIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="26" y="4" width="12" height="10" rx="2" fill="#5b3a20" stroke="#3a2412" strokeWidth="1.2" />
      <rect x="28" y="14" width="8" height="22" fill="#a0662b" stroke="#3a2412" strokeWidth="1.2" />
      <path d="M28 36 L36 36 L34 52 Q34 54 32 54 Q30 54 30 52 Z" fill="#c24b2c" stroke="#3a2412" strokeWidth="1.2" />
      <circle cx="32" cy="58" r="3" fill="#c24b2c" stroke="#3a2412" strokeWidth="1" />
    </svg>
  );
}

export function MixerIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="14" y="44" width="36" height="10" rx="2" fill="#b98842" stroke="#5b3a20" strokeWidth="1.5" />
      <path d="M16 14 Q16 8 22 8 L42 8 Q48 8 48 14 L48 30 Q48 36 42 36 L22 36 Q16 36 16 30 Z" fill="#d9a85a" stroke="#5b3a20" strokeWidth="1.5" />
      <circle cx="32" cy="22" r="6" fill="#fff" stroke="#5b3a20" strokeWidth="1.2" />
      <path d="M30 36 L30 44 M34 36 L34 44" stroke="#5b3a20" strokeWidth="1.5" />
    </svg>
  );
}

export function SpoonIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <ellipse cx="22" cy="24" rx="12" ry="9" fill="#f4d4a0" stroke="#a06a1f" strokeWidth="1.5" />
      <path d="M28 30 L46 52" stroke="#a06a1f" strokeWidth="3" />
      <path d="M42 16 Q52 22 48 32" stroke="#c24b2c" strokeWidth="2" markerEnd="url(#arr)" />
    </svg>
  );
}

export function StirSpoonIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 20 Q32 8 52 20 Q44 40 32 46 Q20 40 12 20 Z" fill="#a06a1f" stroke="#5b3a20" strokeWidth="1.5" />
      <path d="M32 46 L32 56" stroke="#5b3a20" strokeWidth="2" />
      <path d="M42 12 Q54 18 48 30" stroke="#c24b2c" strokeWidth="2.2" fill="none" />
      <polygon points="46,30 52,30 49,35" fill="#c24b2c" />
    </svg>
  );
}

export function JugIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M14 22 Q14 18 18 18 L42 18 Q46 18 46 22 L50 32 Q46 32 46 36 L46 52 Q46 56 42 56 L18 56 Q14 56 14 52 Z" fill="#f4d4a0" stroke="#a06a1f" strokeWidth="1.5" />
      <rect x="18" y="32" width="24" height="20" fill="#e57f3a" stroke="#a06a1f" strokeWidth="1.2" />
      <path d="M26 10 L30 18 M34 8 L36 18 M22 12 L24 18" stroke="#a06a1f" strokeWidth="1.2" />
    </svg>
  );
}

export function CarbonationMachineIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="10" y="12" width="28" height="40" rx="3" fill="#5b5b5b" stroke="#2a2a2a" strokeWidth="1.5" />
      <rect x="16" y="18" width="16" height="10" rx="1" fill="#1d1d1d" stroke="#2a2a2a" strokeWidth="1" />
      <circle cx="24" cy="38" r="3" fill="#c24b2c" stroke="#2a2a2a" strokeWidth="1" />
      <rect x="40" y="22" width="14" height="26" rx="3" fill="#e57f3a" stroke="#a06a1f" strokeWidth="1.5" />
      <rect x="43" y="16" width="8" height="8" fill="#2a2a2a" stroke="#1d1d1d" strokeWidth="1" />
    </svg>
  );
}

export function CarbonationTriggerIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="10" y="10" width="22" height="44" rx="3" fill="#5b5b5b" stroke="#2a2a2a" strokeWidth="1.5" />
      <rect x="36" y="22" width="14" height="26" rx="3" fill="#e57f3a" stroke="#a06a1f" strokeWidth="1.5" />
      <rect x="39" y="16" width="8" height="8" fill="#2a2a2a" stroke="#1d1d1d" strokeWidth="1" />
      <path d="M14 16 L28 16 L28 20 L14 20 Z" fill="#1d1d1d" />
      <circle cx="21" cy="32" r="4" fill="#c24b2c" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="32" cy="34" r="22" fill="#f6ecd9" stroke="#a06a1f" strokeWidth="2" />
      <path d="M32 20 L32 34 L42 38" stroke="#a06a1f" strokeWidth="2.4" />
      <rect x="28" y="6" width="8" height="6" rx="1" fill="#a06a1f" />
    </svg>
  );
}

export function FridgeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="14" y="8" width="36" height="50" rx="4" fill="#f2e2c0" stroke="#5b3a20" strokeWidth="1.8" />
      <line x1="14" y1="24" x2="50" y2="24" stroke="#5b3a20" strokeWidth="1.5" />
      <rect x="18" y="14" width="3" height="6" fill="#5b3a20" />
      <rect x="18" y="30" width="3" height="12" fill="#5b3a20" />
    </svg>
  );
}

export function BottleIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="26" y="4" width="12" height="6" fill="#5b5b5b" stroke="#2a2a2a" strokeWidth="1" />
      <path d="M28 10 L36 10 L36 16 L40 20 L40 52 Q40 56 36 56 L28 56 Q24 56 24 52 L24 20 L28 16 Z" fill="#e57f3a" stroke="#a06a1f" strokeWidth="1.5" />
      <rect x="26" y="28" width="12" height="14" fill="#fff3d0" stroke="#a06a1f" strokeWidth="1" />
    </svg>
  );
}

export function ChartUpIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="14" y="36" width="8" height="18" fill="#c24b2c" stroke="#5b3a20" strokeWidth="1.2" />
      <rect x="28" y="26" width="8" height="28" fill="#e57f3a" stroke="#5b3a20" strokeWidth="1.2" />
      <rect x="42" y="16" width="8" height="38" fill="#b18a3c" stroke="#5b3a20" strokeWidth="1.2" />
      <path d="M10 14 L28 22 L42 12 L54 6" stroke="#5b3a20" strokeWidth="2" />
      <polygon points="54,6 48,6 52,12" fill="#5b3a20" />
    </svg>
  );
}

export function ScoopIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <ellipse cx="44" cy="34" rx="16" ry="10" fill="#f4d4a0" stroke="#a06a1f" strokeWidth="1.5" />
      <path d="M28 34 Q14 34 6 46" stroke="#a06a1f" strokeWidth="3" fill="none" />
    </svg>
  );
}

/** Small inline socials — monochrome */
export function GlobeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="32" cy="32" rx="10" ry="22" stroke="currentColor" strokeWidth="2" />
      <path d="M10 32 L54 32 M14 20 L50 20 M14 44 L50 44" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="32" cy="32" r="22" fill="currentColor" />
      <path d="M34 22 L38 22 L38 26 L34 26 Q32 26 32 28 L32 32 L38 32 L37 38 L32 38 L32 48 L26 48 L26 38 L22 38 L22 32 L26 32 L26 26 Q26 22 30 22 Z" fill="#fff" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="10" y="10" width="44" height="44" rx="10" fill="currentColor" />
      <circle cx="32" cy="32" r="10" fill="none" stroke="#fff" strokeWidth="2.4" />
      <circle cx="44" cy="20" r="2.4" fill="#fff" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="32" cy="32" r="22" fill="currentColor" />
      <path d="M18 18 L46 46 M46 18 L18 46" stroke="#fff" strokeWidth="3" />
    </svg>
  );
}

export function TikTokIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="32" cy="32" r="22" fill="currentColor" />
      <path d="M34 16 L34 38 Q34 44 28 44 Q22 44 22 38 Q22 32 28 32 L28 36 Q26 36 26 38 Q26 40 28 40 Q30 40 30 38 L30 16 Z M34 16 Q36 22 42 22 L42 26 Q38 26 34 22 Z" fill="#fff" />
    </svg>
  );
}

/** Product illustrations (used as centerpiece placeholders) */
export function BundtCakeIllustration(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" {...props}>
      <defs>
        <radialGradient id="plate" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff7e6" />
          <stop offset="100%" stopColor="#e9dcbf" />
        </radialGradient>
      </defs>
      <ellipse cx="200" cy="230" rx="170" ry="26" fill="url(#plate)" stroke="#c7b38a" />
      <path d="M60 180 Q200 110 340 180 Q200 260 60 180 Z" fill="#f4d88e" stroke="#a06a1f" />
      <path d="M60 180 Q200 150 340 180" stroke="#a06a1f" strokeWidth="1.5" fill="none" />
      <ellipse cx="200" cy="170" rx="60" ry="18" fill="#c7b38a" stroke="#a06a1f" />
      <path d="M80 175 Q95 155 110 175 Q125 155 140 175 Q155 155 170 175 Q185 155 200 175 Q215 155 230 175 Q245 155 260 175 Q275 155 290 175 Q305 155 320 175" stroke="#fff7e6" strokeWidth="4" fill="none" />
      <circle cx="150" cy="175" r="8" fill="#d4b755" />
      <circle cx="220" cy="172" r="6" fill="#e8c662" />
      <path d="M180 168 Q190 155 200 168 Q210 155 220 168" stroke="#7aa04f" strokeWidth="2" fill="none" />
    </svg>
  );
}

export function BiscuitFillingIllustration(props: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 320" {...props}>
      <rect x="0" y="0" width="400" height="320" fill="#f0dbba" />
      <ellipse cx="200" cy="270" rx="150" ry="22" fill="#d9c38d" />
      <ellipse cx="200" cy="240" rx="130" ry="28" fill="#cc9963" stroke="#8a5a2e" />
      <ellipse cx="200" cy="220" rx="130" ry="14" fill="#e9d2a7" />
      <ellipse cx="200" cy="210" rx="130" ry="22" fill="#cc9963" stroke="#8a5a2e" />
      <path d="M100 200 Q120 150 200 150 Q280 150 300 200 Q260 180 200 180 Q140 180 100 200 Z" fill="#c3844b" stroke="#8a5a2e" />
      <path d="M120 180 Q160 90 200 120 Q240 90 280 180 Q250 160 200 160 Q150 160 120 180 Z" fill="#b8763e" stroke="#7a4f25" />
      <path d="M180 110 Q190 70 200 120 Q210 70 220 110 Q200 100 180 110 Z" fill="#a66a30" stroke="#7a4f25" />
    </svg>
  );
}
