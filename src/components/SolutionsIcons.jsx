import React from 'react';

/**
 * Vector SVG Icons for the Solutions Section
 * Matching the exact visual style of the reference image
 */

export function ResidentialSolarIcon({ color = '#06b6d4', size = 26 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* House */}
      <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.5z" />
      <path d="M9 21V12h6v9" />
      {/* Solar rays above */}
      <path d="M12 2v-1" />
      <path d="m16 4 1-1" />
      <path d="m8 4-1-1" />
    </svg>
  );
}

export function CommercialSolarIcon({ color = '#f59e0b', size = 26 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Commercial Building / Towers */}
      <rect width="8" height="16" x="8" y="5" rx="1" />
      <path d="M4 10h4v11H4z" />
      <path d="M16 12h4v9h-4z" />
      {/* Windows */}
      <path d="M11 8h2" />
      <path d="M11 11h2" />
      <path d="M11 14h2" />
      <path d="M11 17h2" />
      {/* Sun / Ray */}
      <circle cx="12" cy="2.5" r="1.2" fill={color} />
    </svg>
  );
}

export function IndustrialSolarIcon({ color = '#0ea5e9', size = 26 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Factory / Warehouse with sawtooth and chimneys */}
      <path d="M2 21h20" />
      <path d="M18 21V8l-6 4V8l-6 4V3H2v18" />
      {/* Smokestack details */}
      <circle cx="17" cy="4" r="1" fill={color} />
      <circle cx="20" cy="5" r="0.8" fill={color} />
    </svg>
  );
}

export function AgriculturalSolarIcon({ color = '#84cc16', size = 26 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Sprout / Agricultural Leaf with solar energy */}
      <path d="M12 22v-9" />
      <path d="M12 13a5 5 0 0 0-5-5c0 4 3 7 5 7" />
      <path d="M12 11a5 5 0 0 1 5-5c0 4-3 7-5 7" />
      {/* Solar rays */}
      <path d="M12 2v2" />
      <path d="m17 4-1.2 1.2" />
      <path d="m7 4 1.2 1.2" />
    </svg>
  );
}

export function DownArrowIcon({ color = '#ffa028', size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  );
}

export function getSolutionIcon(iconType, color) {
  switch (iconType) {
    case 'residential':
      return <ResidentialSolarIcon color={color} />;
    case 'commercial':
      return <CommercialSolarIcon color={color} />;
    case 'industrial':
      return <IndustrialSolarIcon color={color} />;
    case 'agricultural':
      return <AgriculturalSolarIcon color={color} />;
    default:
      return <ResidentialSolarIcon color={color} />;
  }
}
