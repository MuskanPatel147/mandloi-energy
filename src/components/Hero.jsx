import React from 'react';
import SystemSpecification from './SystemSpecification';
import InfoStrip from './InfoStrip';
import HeroSolar3D from './HeroSolar3D';
import { WhatsappFilledIcon } from './Icons';
import homeBg from '../assets/images/home-bg.png';
import { handleNavClick } from '../utils/navigation';

export default function Hero() {
  return (
    <section className="hero-section" id="home" aria-label="Hero Section">
      {/* 1. Background image layer with balanced photographic visibility and Real-time 3D WebGL */}
      <div className="hero-bg-container" aria-hidden="true">
        <img
          src={homeBg}
          alt=""
          className="hero-bg-image"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
        <div className="hero-backdrop-overlay" />
        <HeroSolar3D />
      </div>

      <div className="container hero-content-wrapper">
        <div className="hero-grid">
          {/* Left Column: Hero Content */}
          <div className="hero-left animate-fade-in">
            {/* Integrated Solar Solutions pill */}
            <div className="hero-label-badge">
              <span className="hero-label-dot" />
              <span>INTEGRATED SOLAR SOLUTIONS</span>
            </div>

            {/* 3-Line Heading with accent */}
            <h1 className="hero-title">
              <span className="hero-title-line">Powering Tomorrow</span>
              <span className="hero-title-line">With High-Performance</span>
              <span className="hero-title-line hero-title-accent">Solar Energy</span>
              <div className="hero-title-glow-line" aria-hidden="true" />
            </h1>

            {/* Description */}
            <p className="hero-description">
              Mandloi Energy provides reliable, high-quality solar solutions for homes and businesses. From system design and installation to subsidy assistance and after-sales support, we deliver efficient, customized solar systems built for long-term savings and performance.
            </p>

            {/* CTA Buttons (Pill shaped as in reference) */}
            <div className="hero-cta-group">
              <a
                href="/request-a-quote"
                className="btn btn-primary hero-btn-primary"
                onClick={(e) => handleNavClick(e, '/request-a-quote')}
              >
                REQUEST A QUOTE →
              </a>
              <a
                href="#why-mandloi"
                className="btn btn-secondary hero-btn-secondary"
                onClick={(e) => handleNavClick(e, '#why-mandloi')}
              >
                WHY MANDLOI ENERGY
              </a>
            </div>
          </div>

          {/* Right Column: Transparent Glass System Specification Card */}
          <div className="hero-right animate-slide-up delay-100">
            <SystemSpecification />
          </div>
        </div>

        {/* Bottom 4-Card Information Strip */}
        <div className="animate-fade-in delay-200">
          <InfoStrip />
        </div>
      </div>

      {/* Approved WhatsApp Floating CTA */}
      <a
        href="https://wa.me/919669555550"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float-btn"
        aria-label="Chat with Mandloi Energy on WhatsApp"
      >
        <WhatsappFilledIcon size={30} />
      </a>
    </section>
  );
}
