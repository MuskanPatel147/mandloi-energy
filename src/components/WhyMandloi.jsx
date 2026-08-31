import React from 'react';
import WhyMandloiGrid from './WhyMandloiGrid';
import { SunBadgeIcon } from './WhyMandloiIcons';

/**
 * WhyMandloi Component
 * Full section matching the controlling reference "WHY MANDLOI(1).png"
 */
export default function WhyMandloi() {
  return (
    <section className="why-mandloi-section" id="why-mandloi" aria-labelledby="why-mandloi-title">
      {/* Top Ambient Glow Effect */}
      <div className="why-mandloi-ambient-top" aria-hidden="true" />

      <div className="container why-mandloi-content-wrapper">
        {/* Header Block */}
        <div className="why-mandloi-header animate-fade-in">
          {/* 2. Top Badge */}
          <div className="why-mandloi-badge">
            <SunBadgeIcon className="why-badge-sun-icon" size={15} />
            <span>WHY MANDLOI ENERGY?</span>
          </div>

          {/* 3. Main Heading */}
          <h2 className="why-mandloi-heading" id="why-mandloi-title">
            <span className="why-mandloi-heading-line1">Smart Solar Solutions,</span>
            <span className="why-mandloi-heading-line2">Built Around You</span>
          </h2>

          {/* 4. Subtitle */}
          <p className="why-mandloi-subtitle">
            End-to-end solar solutions designed for performance, savings, and long-term reliability.
          </p>
        </div>

        {/* 5. 3x3 Feature Cards Grid */}
        <WhyMandloiGrid />

        {/* 10. Bottom Radiant Orange Flare Line */}
        <div className="why-mandloi-bottom-glow-wrapper" aria-hidden="true">
          <div className="why-mandloi-bottom-glow-line">
            <div className="why-mandloi-bottom-glow-flare" />
          </div>
        </div>
      </div>
    </section>
  );
}
