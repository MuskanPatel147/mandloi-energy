import React from 'react';

export function QualityShieldIcon({ size = 20, color = '#38bdf8' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function ShieldTrustIcon({ size = 16, color = '#38bdf8' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function PerformanceBoltIcon({ size = 20, color = '#ffa028' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

export function SustainableSproutIcon({ size = 20, color = '#38bdf8' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 20h10" />
      <path d="M10 20c5.5-2.5.8-6.4 3-10" />
      <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
      <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.4 1.7-4.6-2.7.1-4.2.9-4.9 2z" />
    </svg>
  );
}

export function SupportHeadsetIcon({ size = 20, color = '#ffa028' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  );
}

export function LocationPinIcon({ size = 14, color = '#38bdf8' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function PowerKwIcon({ size = 14, color = '#38bdf8' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

export function HomeProjectIcon({ size = 22, color = '#38bdf8' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

export function FactoryProjectIcon({ size = 22, color = '#38bdf8' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4H2z" />
      <path d="M17 18h1" />
      <path d="M12 18h1" />
      <path d="M7 18h1" />
    </svg>
  );
}

export function SnowflakeProjectIcon({ size = 22, color = '#38bdf8' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
    </svg>
  );
}

export function ColdStorePartnerIcon({ size = 36, color = '#1e3a8a' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect x="6" y="16" width="36" height="26" rx="3" stroke={color} strokeWidth="2.5" fill="#f8fafc" />
      <path d="M6 20L24 6L42 20" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 22V36M17 29H31M19 24L29 34M29 24L19 34" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function LogisticsPartnerIcon({ size = 36, color = '#1e3a8a' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect x="6" y="16" width="36" height="26" rx="3" stroke={color} strokeWidth="2.5" fill="#f8fafc" />
      <path d="M6 20L24 6L42 20" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="14" y="24" width="8" height="12" rx="1" stroke={color} strokeWidth="2" />
      <rect x="26" y="24" width="8" height="12" rx="1" stroke={color} strokeWidth="2" />
    </svg>
  );
}

export function CtaSunSolarIcon({ size = 48, color = '#ffa028' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="16" r="6" stroke={color} strokeWidth="2" fill="rgba(255, 160, 40, 0.2)" />
      <line x1="24" y1="6" x2="24" y2="8" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="16.9" y1="8.9" x2="18.3" y2="10.3" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="14" y1="16" x2="16" y2="16" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="31.1" y1="8.9" x2="29.7" y2="10.3" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="34" y1="16" x2="32" y2="16" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <polygon points="12 28 36 28 32 40 16 40" stroke={color} strokeWidth="2" fill="rgba(255, 160, 40, 0.15)" />
      <line x1="24" y1="28" x2="24" y2="40" stroke={color} strokeWidth="1.5" />
      <line x1="14" y1="34" x2="34" y2="34" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}
