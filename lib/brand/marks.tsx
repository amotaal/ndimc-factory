import type { SVGProps } from "react";

/**
 * Wordmark: stylized "egnite" using a flame dot on the i.
 * All templates share this. Colour flips via currentColor.
 */
export function EgniteWordmark({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 56"
      className={className}
      {...props}
    >
      <text
        x="0"
        y="40"
        fontFamily="var(--font-display), serif"
        fontWeight={800}
        fontSize={38}
        letterSpacing="-1"
        fill="currentColor"
      >
        egnite
      </text>
      <path
        d="M96 11 Q101 3 106 11 Q110 17 102 20 Q94 17 96 11 Z"
        fill="#e57f3a"
      />
    </svg>
  );
}

export function StayEgnitedSeal({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 180 180"
      className={className}
      {...props}
    >
      <defs>
        <path
          id="circletext"
          d="M 90 90 m -70 0 a 70 70 0 1 1 140 0 a 70 70 0 1 1 -140 0"
        />
      </defs>
      <circle
        cx="90"
        cy="90"
        r="84"
        fill="none"
        stroke="#c24b2c"
        strokeWidth="2"
      />
      <circle
        cx="90"
        cy="90"
        r="74"
        fill="none"
        stroke="#c24b2c"
        strokeWidth="1"
      />
      <text fill="#c24b2c" fontSize="14" fontWeight={700} letterSpacing="6">
        <textPath href="#circletext" startOffset="4%">
          EGNITE • FLAVORS • ESSENCE • EMULSION •
        </textPath>
      </text>
      <g transform="translate(90 92)">
        <path
          d="M-36 -8 Q-8 -28 10 -8 Q22 4 0 22 Q-22 4 -36 -8 Z"
          fill="#c24b2c"
        />
        <text
          x="0"
          y="-2"
          textAnchor="middle"
          fontFamily="var(--font-script), cursive"
          fontWeight={700}
          fontSize={22}
          fill="#fff"
        >
          stay
        </text>
        <text
          x="0"
          y="18"
          textAnchor="middle"
          fontFamily="var(--font-script), cursive"
          fontWeight={700}
          fontSize={22}
          fill="#fff"
        >
          egnite&apos;ed
        </text>
      </g>
    </svg>
  );
}
