import React from 'react';

export function HexSolarIcon({ size = 26, color = '#38bdf8' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l8 4.5v11L12 22l-8-4.5v-11z" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 7v2" />
      <path d="M12 15v2" />
      <path d="M7 12H9" />
      <path d="M15 12h2" />
    </svg>
  );
}

export function HexSavingsIcon({ size = 26, color = '#38bdf8' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l8 4.5v11L12 22l-8-4.5v-11z" strokeWidth="1.5" />
      <path d="M12 7v10" />
      <path d="M15 9.5a3 3 0 0 0-3-2.5 3 3 0 0 0 0 6h0a3 3 0 0 1 0 6 3 3 0 0 1-3-2.5" />
    </svg>
  );
}

export function HexSupportIcon({ size = 26, color = '#38bdf8' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l-8 4.5v11z" strokeWidth="1.5" />
      <path d="M12 2l-8 4.5v11z" strokeWidth="1.5" />
      <path d="M12 2l8 4.5v11L12 22l-8-4.5v-11z" strokeWidth="1.5" />
      <path d="M8 12a4 4 0 1 1 8 0v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z" />
      <path d="M8 14h8" />
    </svg>
  );
}

export function LockIcon({ size = 14, color = '#8899a6' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

export function CheckCircleIcon({ size = 32, color = '#38bdf8' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
