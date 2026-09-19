import React, { memo } from 'react';
import { getSolutionIcon } from './SolutionsIcons';

/**
 * SolutionsCard Component
 * Individual solution card matching the controlling reference
 */
function SolutionsCardComponent({ solution, isActive, index }) {
  const {
    title,
    description,
    image,
    icon,
    accentColor,
    accentBorder,
    iconBg,
    iconBorder,
    iconGlow,
  } = solution;

  const cardStyle = {
    '--sol-accent': accentColor,
    '--sol-border': accentBorder,
    '--sol-icon-bg': iconBg,
    '--sol-icon-border': iconBorder,
    '--sol-icon-glow': iconGlow,
    '--sol-glow': iconGlow,
    '--card-idx': index ?? 0,
  };

  return (
    <article
      className={`solution-card animate-fade-in ${isActive ? 'mobile-active' : ''}`}
      style={cardStyle}
      aria-label={title}
    >
      {/* 1. Circular Icon Container */}
      <div className="solution-card-icon-container" aria-hidden="true">
        {getSolutionIcon(icon, accentColor)}
      </div>

      {/* 2. Card Title */}
      <h3 className="solution-card-title">{title}</h3>

      {/* 3. Card Preview Image */}
      <div className="solution-card-img-wrapper">
        <img
          src={image}
          alt={title}
          className="solution-card-img"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* 4. Description */}
      <p className="solution-card-description">{description}</p>
    </article>
  );
}

export default memo(SolutionsCardComponent);
