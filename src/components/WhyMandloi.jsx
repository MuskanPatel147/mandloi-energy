import React, { useState, useEffect, useRef } from 'react';
import WhyMandloiGrid from './WhyMandloiGrid';
import { SunBadgeIcon } from './WhyMandloiIcons';

/**
 * WhyMandloi Component
 * Full section matching the controlling reference with staggered scroll-reveal animations
 */
export default function WhyMandloi() {
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const timer = setTimeout(() => setRevealed(true), 150);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`why-mandloi-section ${revealed ? 'is-revealed' : ''}`}
      id="why-mandloi"
      aria-labelledby="why-mandloi-title"
    >
      {/* Top Ambient Glow Effect with slow subtle drift */}
      <div className="why-mandloi-ambient-top" aria-hidden="true" />

      <div className="container why-mandloi-content-wrapper">
        {/* Header Block with Scroll-Reveal Animation */}
        <div className="why-mandloi-header anim-why-header">
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

        {/* 5. 5-Card Balanced Responsive Feature Grid */}
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
