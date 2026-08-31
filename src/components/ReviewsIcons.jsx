import React from 'react';

/**
 * Official Multi-Color Google "G" Logo Icon
 */
export function GoogleLogoIcon({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );
}

/**
 * Cyan Double Quote Icon matching reference
 */
export function QuoteCyanIcon({ size = 24, color = '#38bdf8' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

/**
 * Star Rating Icon
 */
export function StarFilledIcon({ size = 16, color = '#ffa028' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

/**
 * External Link Icon
 */
export function ExternalLinkIcon({ size = 14, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

/**
 * Left Arrow Chevron
 */
export function ArrowLeftIcon({ size = 20, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

/**
 * Right Arrow Chevron
 */
export function ArrowRightIcon({ size = 20, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

/* --------------------------------------------------------------------------
   Trust Bar Circular Line Icons (Matching reference bottom strip)
   -------------------------------------------------------------------------- */

export function TeamTrustIcon({ size = 64, color = '#38bdf8' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="32" cy="32" r="30" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="24" stroke={color} strokeWidth="1.5" opacity="0.6" />
      <circle cx="32" cy="24" r="5" stroke={color} strokeWidth="2" />
      <path d="M22 41c0-5.5 4.5-9 10-9s10 3.5 10 9" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <circle cx="21" cy="27" r="3.5" stroke={color} strokeWidth="1.6" />
      <path d="M14 40c0-3.5 3-6.5 7-6.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="43" cy="27" r="3.5" stroke={color} strokeWidth="1.6" />
      <path d="M50 40c0-3.5-3-6.5-7-6.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function RibbonTrustIcon({ size = 64, color = '#38bdf8' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="32" cy="32" r="30" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="24" stroke={color} strokeWidth="1.5" opacity="0.6" />
      <circle cx="32" cy="26" r="9" stroke={color} strokeWidth="2" />
      <path d="M26 33l-3 14 9-4 9 4-3-14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M29 26l2 2 4-4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ShieldTrustIcon({ size = 64, color = '#38bdf8' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="32" cy="32" r="30" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="24" stroke={color} strokeWidth="1.5" opacity="0.6" />
      <path d="M32 17l12 5v9c0 8-5.5 14-12 16-6.5-2-12-8-12-16v-9l12-5z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <path d="M27 31l3.5 3.5 6.5-6.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SolarSunTrustIcon({ size = 64, color = '#38bdf8' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="32" cy="32" r="30" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="24" stroke={color} strokeWidth="1.5" opacity="0.6" />
      {/* Sun rays & solar panel */}
      <circle cx="43" cy="22" r="4" stroke={color} strokeWidth="2" />
      <path d="M43 14v2M43 28v2M51 22h-2M37 22h-2" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19 44l6-16h14l6 16H19z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <path d="M22 36h20M32 28v16" stroke={color} strokeWidth="1.6" />
    </svg>
  );
}
