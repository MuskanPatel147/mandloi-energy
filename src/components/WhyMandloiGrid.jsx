import React, { useState } from 'react';
import WhyMandloiCard from './WhyMandloiCard';
import { WHY_MANDLOI_CARDS } from '../data/whyMandloiData';
import { getWhyMandloiIcon } from './WhyMandloiIcons';

export function ChevronDownIcon({ size = 18, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

/**
 * WhyMandloiGrid Component
 * Desktop (>= 1024px): Preserves the approved 5-card spacious layout (3 top, 2 centered bottom)
 * Mobile & Tablet (< 1024px): Compact, elegant vertical accordion feature list (~70-90px height)
 */
export default function WhyMandloiGrid() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setExpandedIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <div className="why-mandloi-container">
      {/* 1. Desktop 5-Card Composition (>= 1024px) */}
      <div className="why-mandloi-grid" role="region" aria-label="Why Mandloi Features Desktop">
        {WHY_MANDLOI_CARDS.map((card, index) => (
          <WhyMandloiCard key={card.id} card={card} index={index} />
        ))}
      </div>

      {/* 2. Mobile & Tablet Compact Feature List / Accordion (< 1024px) */}
      <div className="why-mandloi-accordion" role="region" aria-label="Why Mandloi Features Mobile">
        {WHY_MANDLOI_CARDS.map((item, idx) => {
          const isExpanded = expandedIndex === idx;
          const accentColor = item.accentColor;
          const isEmphasized = item.isEmphasized;

          const rowStyle = {
            '--row-accent': accentColor,
            '--row-border': isExpanded
              ? accentColor
              : isEmphasized
              ? '#ffa02880'
              : `${accentColor}33`,
            '--row-glow': isExpanded ? `${accentColor}33` : 'transparent',
            '--row-icon-bg': `${accentColor}18`,
            '--row-icon-border': isExpanded ? accentColor : `${accentColor}66`,
          };

          return (
            <div
              key={item.id}
              className={`why-accordion-item ${isExpanded ? 'is-expanded' : ''} ${isEmphasized ? 'is-emphasized' : ''}`}
              style={rowStyle}
            >
              {/* Collapsed Header Row Button */}
              <button
                type="button"
                className="why-accordion-header"
                onClick={() => toggleAccordion(idx)}
                aria-expanded={isExpanded}
                aria-controls={`why-desc-${item.id}`}
                id={`why-head-${item.id}`}
              >
                <div className="why-accordion-header-left">
                  <div className="why-accordion-icon-box" aria-hidden="true">
                    {getWhyMandloiIcon(item.icon, accentColor, 22)}
                  </div>

                  <div className="why-accordion-title-wrap">
                    <span className="why-accordion-num">{item.number}</span>
                    <h3 className="why-accordion-title">{item.title}</h3>
                  </div>
                </div>

                <div className="why-accordion-chevron-box" aria-hidden="true">
                  <ChevronDownIcon
                    size={18}
                    className={`why-accordion-chevron ${isExpanded ? 'rotated' : ''}`}
                  />
                </div>
              </button>

              {/* Expandable Description Drawer */}
              <div
                id={`why-desc-${item.id}`}
                role="region"
                aria-labelledby={`why-head-${item.id}`}
                className={`why-accordion-body ${isExpanded ? 'open' : ''}`}
              >
                <div className="why-accordion-body-inner">
                  <p className="why-accordion-description">{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
