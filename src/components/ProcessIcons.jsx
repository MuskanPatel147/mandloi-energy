import React from 'react';

/**
 * Vector SVG Icons for the Our Process Section
 * Matching the exact visual style of the reference image
 */

export function ChecklistIcon({ color = '#38bdf8', size = 32 }) {
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
      {/* Clipboard */}
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      {/* Checkmarks */}
      <path d="m8 10 1.5 1.5 3-3" />
      <path d="m8 14 1.5 1.5 3-3" />
      {/* Magnifying Glass */}
      <circle cx="16" cy="16" r="3" strokeWidth="1.8" />
      <path d="m18.5 18.5 2.5 2.5" strokeWidth="2" />
    </svg>
  );
}

export function BlueprintIcon({ color = '#ffa028', size = 32 }) {
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
      {/* Blueprint Grid / Plan */}
      <rect width="14" height="16" x="3" y="4" rx="2" />
      <path d="M3 9h14" />
      <path d="M8 9v11" />
      <path d="M12 9v11" />
      {/* Solar Drafting Grid & Pencil */}
      <path d="M14 14l6-6 2 2-6 6z" fill="none" strokeWidth="1.6" />
      <path d="M13 15l1 1" />
    </svg>
  );
}

export function TechnicianIcon({ color = '#38bdf8', size = 32 }) {
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
      {/* Person / Technician with Hard Hat */}
      <path d="M12 2a4 4 0 0 0-4 4v1h8V6a4 4 0 0 0-4-4z" />
      <path d="M6 7h12" />
      <circle cx="12" cy="11" r="3" />
      <path d="M4 21v-2a6 6 0 0 1 9.5-4.8" />
      {/* Wrench Tool */}
      <path d="M17 14l4 4-2 2-4-4a2 2 0 0 1 0-2.8l.6-.6a2 2 0 0 1 1.4-.6z" />
    </svg>
  );
}

export function MeterIcon({ color = '#ffa028', size = 32 }) {
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
      {/* Electric Meter Device */}
      <rect width="16" height="18" x="4" y="3" rx="3" />
      {/* Digital Screen with kWh */}
      <rect width="10" height="5" x="7" y="6" rx="1" />
      <path d="M9 8.5h.01M12 8.5h.01M15 8.5h.01" strokeWidth="2" />
      {/* Dial / Circular Display & Terminals */}
      <circle cx="9.5" cy="15" r="1.5" />
      <circle cx="14.5" cy="15" r="1.5" />
      <path d="M7 19h10" />
    </svg>
  );
}

export function SolarGenIcon({ color = '#38bdf8', size = 32 }) {
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
      {/* Angled Solar Panel Array */}
      <polygon points="3 17 6 11 18 11 21 17 3 17" />
      <line x1="12" y1="11" x2="12" y2="17" />
      <line x1="7.5" y1="14" x2="16.5" y2="14" />
      {/* Mount Stand */}
      <line x1="12" y1="17" x2="12" y2="21" />
      <line x1="8" y1="21" x2="16" y2="21" />
      {/* Radiant Sun Above */}
      <circle cx="12" cy="5" r="2" fill={color} />
      <line x1="12" y1="1" x2="12" y2="2" />
      <line x1="15" y1="3" x2="16" y2="2" />
      <line x1="9" y1="3" x2="8" y2="2" />
    </svg>
  );
}

export function getProcessIcon(iconName, color, size = 32) {
  switch (iconName) {
    case 'checklist':
      return <ChecklistIcon color={color} size={size} />;
    case 'blueprint':
      return <BlueprintIcon color={color} size={size} />;
    case 'technician':
      return <TechnicianIcon color={color} size={size} />;
    case 'meter':
      return <MeterIcon color={color} size={size} />;
    case 'solar-gen':
      return <SolarGenIcon color={color} size={size} />;
    default:
      return <ChecklistIcon color={color} size={size} />;
  }
}
