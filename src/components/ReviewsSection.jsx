import React, { useState, useEffect, useRef } from 'react';
import ReviewsCarousel from './ReviewsCarousel';
import {
  TeamTrustIcon,
  RibbonTrustIcon,
  ShieldTrustIcon,
  SolarSunTrustIcon,
} from './ReviewsIcons';
import { REVIEWS_DATA, TRUST_STATS_DATA } from '../data/reviewsData';

export default function ReviewsSection() {
  const [inView, setInView] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.12 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    const timer = setTimeout(() => setInView(true), 500);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="reviews-main-section" id="reviews" aria-labelledby="reviews-heading">
      <div className="container reviews-content-wrapper">
        {/* Header Block */}
        <div
          ref={headerRef}
          className={`reviews-hero-header ${inView ? 'is-in-view' : ''}`}
        >
          {/* Section Label */}
          <div className="reviews-badge-wrapper anim-stage-badge">
            <span className="reviews-badge">CUSTOMER FEEDBACK</span>
            <span className="reviews-badge-line anim-stage-line" aria-hidden="true" />
          </div>

          {/* Main Split Heading */}
          <h2 className="reviews-main-heading" id="reviews-heading">
            <span className="reviews-heading-line1 anim-stage-h1">What Our Customers Say</span>
            <span className="reviews-heading-line2 anim-stage-h2">
              <span className="reviews-heading-text">Powering A Better Tomorrow</span>
              <span className="reviews-shimmer-sweep" aria-hidden="true" />
            </span>
          </h2>

          {/* Narrative Description */}
          <p className="reviews-hero-subtitle anim-stage-desc">
            Explore feedback and experiences from our customers across residential, commercial, industrial and agricultural solar installations.
          </p>

          {/* Dataset Badge */}
          <div className="reviews-dataset-badge anim-stage-dataset" role="status" aria-label="Customer reviews count">
            <div className="reviews-avatar-stack" aria-hidden="true">
              <span className="reviews-avatar avatar-1">👤</span>
              <span className="reviews-avatar avatar-2">👤</span>
              <span className="reviews-avatar avatar-3">👤</span>
            </div>
            <span className="reviews-dataset-text">
              <strong className="highlight-cyan reviews-number-glow">{REVIEWS_DATA.length}+</strong> Customer Reviews in Dataset
            </span>
          </div>
        </div>

        {/* Complete 250+ Review Carousel */}
        <ReviewsCarousel reviews={REVIEWS_DATA} />

        {/* Statistics / Information Strip */}
        <div className="reviews-trust-bar">
          {TRUST_STATS_DATA.map((item) => (
            <div key={item.id} className="reviews-trust-item">
              <div className="reviews-trust-icon-box" aria-hidden="true">
                {item.iconType === 'team' && <TeamTrustIcon size={56} />}
                {item.iconType === 'ribbon' && <RibbonTrustIcon size={56} />}
                {item.iconType === 'shield' && <ShieldTrustIcon size={56} />}
                {item.iconType === 'solar-sun' && <SolarSunTrustIcon size={56} />}
              </div>
              <div className="reviews-trust-text-group">
                <span className={`reviews-trust-value ${item.isCyanTitle ? 'cyan-value' : 'primary-value'}`}>
                  {item.value}
                </span>
                <span className="reviews-trust-label">{item.label}</span>
                <span className="reviews-trust-subtext">{item.subtext}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
