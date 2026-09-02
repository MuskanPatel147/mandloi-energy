import React from 'react';
import { getWhyMandloiIcon } from './WhyMandloiIcons';

/**
 * WhyMandloiCard Component
 * Renders an individual feature card matching the "WHY MANDLOI.png" design
 * Supports staggered scroll-reveal animations and light-sweep hover physics
 */
export default function WhyMandloiCard({ card, index = 0 }) {
  const {
    number,
    title,
    titleLine1,
    titleLine2,
    description,
    icon,
    accentColor,
    isEmphasized,
  } = card;

  // Custom inline styles for card color themes and staggered animation index
  const cardStyle = {
    '--card-idx': index,
    '--card-accent-color': accentColor,
    '--card-border-color': isEmphasized ? '#ffa028' : `${accentColor}4d`, // ~30% opacity border
    '--card-hover-border': isEmphasized ? '#ffb45a' : accentColor,
    '--card-glow': `${accentColor}40`,
    '--card-glow-color': `${accentColor}33`, // ~20% opacity glow
    '--card-icon-border': isEmphasized ? '#ffa028' : `${accentColor}80`, // ~50% opacity
    '--card-icon-bg': `${accentColor}14`, // ~8% opacity
    '--card-icon-glow': `${accentColor}40`,
  };

  const displayTitle = title || [titleLine1, titleLine2].filter(Boolean).join(' ');

  return (
    <div
      className={`why-card ${isEmphasized ? 'why-card-emphasized why-card-glow-orange' : ''} anim-why-card`}
      style={cardStyle}
      data-card-id={number}
    >
      {/* Light sweep surface effect */}
      <div className="why-card-sweep" aria-hidden="true" />

      {/* Card Header: Icon + Title + Number Badge */}
      <div className="why-card-header">
        <div className="why-card-header-left">
          <div className="why-card-icon-container" aria-hidden="true">
            {getWhyMandloiIcon(icon, accentColor)}
          </div>

          <div className="why-card-title-col">
            <h3 className="why-card-title">
              {displayTitle}
            </h3>
          </div>
        </div>

        <span className="why-card-number-badge why-card-tag" aria-label={`Card number ${number}`}>
          {number}
        </span>
      </div>

      {/* Card Body: Description */}
      <p className="why-card-description">{description}</p>
    </div>
  );
}
