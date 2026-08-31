import React from 'react';
import { getWhyMandloiIcon } from './WhyMandloiIcons';

/**
 * WhyMandloiCard Component
 * Renders an individual feature card matching the "WHY MANDLOI.png" design
 */
export default function WhyMandloiCard({ card, index }) {
  const {
    number,
    titleLine1,
    titleLine2,
    description,
    highlightText,
    icon,
    accentColor,
    isEmphasized,
  } = card;

  // Custom inline styles for card color themes
  const cardStyle = {
    '--card-accent-color': accentColor,
    '--card-border-color': isEmphasized ? '#ffa028' : `${accentColor}4d`, // ~30% opacity border
    '--card-glow-color': `${accentColor}33`, // ~20% opacity glow
    '--card-icon-border': isEmphasized ? '#ffa028' : `${accentColor}80`, // ~50% opacity
    '--card-icon-bg': `${accentColor}14`, // ~8% opacity
    '--card-icon-glow': `${accentColor}33`,
  };

  // Helper to highlight "₹78,000" in Card 03 description
  const renderDescription = () => {
    if (!highlightText) return description;

    const parts = description.split(highlightText);
    return (
      <>
        {parts[0]}
        <span className="highlight-orange">{highlightText}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div
      className={`why-card ${isEmphasized ? 'why-card-emphasized' : ''} animate-fade-in`}
      style={cardStyle}
      data-card-id={number}
    >
      {/* Card Header: Icon + Title + Number Badge */}
      <div className="why-card-header">
        <div className="why-card-header-left">
          <div className="why-card-icon-container" aria-hidden="true">
            {getWhyMandloiIcon(icon, accentColor)}
          </div>

          <div className="why-card-title-col">
            <h3 className="why-card-title">
              <span className="why-card-title-line">{titleLine1}</span>
              <span className="why-card-title-line">{titleLine2}</span>
            </h3>
            <div className="why-card-title-underline" aria-hidden="true" />
          </div>
        </div>

        <span className="why-card-number-badge" aria-label={`Card number ${number}`}>
          {number}
        </span>
      </div>

      {/* Card Body: Description */}
      <p className="why-card-description">{renderDescription()}</p>
    </div>
  );
}
