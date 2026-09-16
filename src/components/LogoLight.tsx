/**
 * Light-mode wordmark.
 *
 * The original logo.png is artwork on a dark starfield — its glow is baked into
 * the pixels, so it only reads on a dark background. This is the same lockup
 * rebuilt as vector for light backgrounds: the outlined open book becomes white
 * pages on a brand-blue cover (#2B8BFE / #0E4FB0, sampled from the artwork),
 * with a navy wordmark.
 *
 * It is inlined rather than loaded through <img src="...svg"> so the text
 * renders in Inter, the font the rest of the site already loads — an SVG
 * referenced by <img> cannot pull in a webfont and would fall back to a
 * system face.
 */
export function LogoLight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 626 200"
      className={className}
      role="img"
      aria-label="Concepts Coaching"
    >
      <defs>
        <linearGradient id="cl-cover" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4FA3FF" />
          <stop offset="100%" stopColor="#0E4FB0" />
        </linearGradient>
      </defs>

      {/* Cover, drawn as one shape so both halves meet cleanly at the spine */}
      <path
        d="M96 60 C72 40 40 32 12 38 L12 146 C40 140 72 148 96 166 C120 148 152 140 180 146 L180 38 C152 32 120 40 96 60 Z"
        fill="url(#cl-cover)"
      />

      {/* Stacked page edges showing under the top sheet */}
      <path d="M96 58 C74 40 44 33 22 37 L22 136 C44 132 74 139 96 155 Z" fill="#DCEBFF" />
      <path d="M96 58 C118 40 148 33 170 37 L170 136 C148 132 118 139 96 155 Z" fill="#DCEBFF" />

      {/* Open pages */}
      <path
        d="M96 52 C76 36 48 29 28 33 L28 130 C48 126 76 133 96 149 Z"
        fill="#FFFFFF"
        stroke="#0E4FB0"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <path
        d="M96 52 C116 36 144 29 164 33 L164 130 C144 126 116 133 96 149 Z"
        fill="#FFFFFF"
        stroke="#0E4FB0"
        strokeWidth="5"
        strokeLinejoin="round"
      />

      {/* Spine */}
      <path d="M96 52 L96 149" stroke="#0B1F3F" strokeWidth="6" strokeLinecap="round" />

      {/* Base swoosh */}
      <path
        d="M30 174 C68 165 124 165 162 174 C124 181 68 181 30 174 Z"
        fill="#2B8BFE"
        opacity="0.45"
      />

      {/* Wordmark */}
      <text
        x="206"
        y="92"
        fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
        fontSize="62"
        fontWeight="800"
        letterSpacing="-1.5"
        fill="#0B1F3F"
      >
        Concepts
      </text>
      <text
        x="206"
        y="148"
        fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
        fontSize="62"
        fontWeight="800"
        letterSpacing="-1.5"
        fill="#0B1F3F"
      >
        Coaching
      </text>
      <text
        x="208"
        y="180"
        fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
        fontSize="20"
        fontWeight="600"
        letterSpacing="0.2"
        fill="#2B6FB8"
      >
        Aspire... Endeavour... Achieve
      </text>
    </svg>
  );
}
