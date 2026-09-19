import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReviewsCarousel from '../components/ReviewsCarousel';
import { WhatsappFilledIcon } from '../components/Icons';
import {
  TeamTrustIcon,
  RibbonTrustIcon,
  ShieldTrustIcon,
  SolarSunTrustIcon,
} from '../components/ReviewsIcons';
import { REVIEWS_DATA, TRUST_STATS_DATA } from '../data/reviewsData';

export default function Reviews() {
  const [inView, setInView] = useState(false);
  const headerRef = useRef(null);

  // 1. Observer for Cinematic Left-Side Sequence Entrance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    // Fallback trigger
    const timer = setTimeout(() => setInView(true), 80);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="reviews-page-wrapper site-wrapper">
      {/* ================================================================
          Reviews Exclusive Atmosphere:
          Customer Trust, Voice Resonance Ripples, & Regional Network Mesh
          (Distinct from Contact Page: Circular geometry, Cyan ambient, No PV grids)
          ================================================================ */}
      <div className="reviews-trust-backdrop" aria-hidden="true">
        {/* Layer 1: Soft Cyan Ambient Trust Glow (Left-Center focal point) */}
        <div className="reviews-ambient-glow-cyan" />
        <div className="reviews-ambient-glow-warm" />

        {/* Layer 2: Subtle Concentric Customer Resonance Ripples */}
        <div className="reviews-ripple-container">
          <div className="reviews-ripple-ring ring-1" />
          <div className="reviews-ripple-ring ring-2" />
          <div className="reviews-ripple-ring ring-3" />
          <div className="reviews-ripple-ring ring-4" />
          <div className="reviews-ripple-ring ring-5" />
        </div>

        {/* Layer 3: Flowing Customer Network Waves & Community Nodes */}
        <svg
          className="reviews-network-svg"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-100 280 C300 220, 520 540, 950 400 C1220 330, 1400 460, 1600 420"
            stroke="url(#reviewsFlowGrad1)"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            opacity="0.35"
          />
          <path
            d="M-50 460 C240 370, 600 620, 1050 470 C1300 400, 1450 560, 1600 490"
            stroke="url(#reviewsFlowGrad2)"
            strokeWidth="1.2"
            opacity="0.25"
          />
          {/* Constellation Feedback Nodes */}
          <circle cx="320" cy="270" r="3.5" fill="#38bdf8" opacity="0.65" />
          <circle cx="580" cy="500" r="4.5" fill="#38bdf8" opacity="0.75" />
          <circle cx="950" cy="400" r="3.5" fill="#ffa028" opacity="0.7" />
          <circle cx="1220" cy="350" r="3.5" fill="#38bdf8" opacity="0.55" />
          <defs>
            <linearGradient id="reviewsFlowGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
              <stop offset="35%" stopColor="#38bdf8" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#ffa028" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="reviewsFlowGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Layer 4: Vignette Depth Overlay */}
        <div className="reviews-vignette-overlay" />
      </div>

      {/* 1. Global Navigation with REVIEWS active */}
      <Navbar activePage="reviews" />

      {/* 2. Main Reviews Section */}
      <main className="reviews-main-section" id="reviews-content">
        <div className="container reviews-content-wrapper">
          {/* Header Block with Sequential Left-Side Timeline */}
          <div
            ref={headerRef}
            className={`reviews-hero-header ${inView ? 'is-in-view' : ''}`}
            style={{ transform: `translate3d(0, ${parallaxY}px, 0)` }}
          >
            {/* 1. Section Label */}
            <div className="reviews-badge-wrapper anim-stage-badge">
              <span className="reviews-badge">CUSTOMER FEEDBACK</span>
              <span className="reviews-badge-line anim-stage-line" aria-hidden="true" />
            </div>

            {/* 2. Main Split Heading */}
            <h1 className="reviews-main-heading">
              <span className="reviews-heading-line1 anim-stage-h1">What Our Customers Say </span>
              <span className="reviews-heading-line2 anim-stage-h2">
                <span className="reviews-heading-text">Powering A Better Tomorrow</span>
                <span className="reviews-shimmer-sweep" aria-hidden="true" />
              </span>
            </h1>

            {/* 3. Narrative Description */}
            <p className="reviews-hero-subtitle anim-stage-desc">
              Explore feedback and experiences from our customers across residential, commercial, industrial and agricultural solar installations.
            </p>

            {/* 4. Dataset Badge with Stacked Avatars */}
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
      </main>

      {/* Global Site Footer */}
      <Footer />

      {/* Floating WhatsApp CTA */}
      <a
        href="https://wa.me/919669555550"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float-btn"
        aria-label="Chat with Mandloi Energy on WhatsApp"
      >
        <WhatsappFilledIcon size={30} />
      </a>
    </div>
  );
}
