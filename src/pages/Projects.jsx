import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  QualityShieldIcon,
  PerformanceBoltIcon,
  SustainableSproutIcon,
  SupportHeadsetIcon,
  LocationPinIcon,
  PowerKwIcon,
  HomeProjectIcon,
  FactoryProjectIcon,
  SnowflakeProjectIcon,
  ColdStorePartnerIcon,
  LogisticsPartnerIcon,
  CtaSunSolarIcon,
  ShieldTrustIcon,
} from '../components/ProjectsIcons';
import { WhatsappFilledIcon } from '../components/Icons';
import { HERO_TRUST_METRICS, PARTNERS_DATA, PROJECTS_SHOWCASE_DATA } from '../data/projectsData';
import homeBg from '../assets/images/home-bg.webp';
import nayaraLogo from '../assets/images/nayara-logo.png';
import hpLogo from '../assets/images/hp-logo.png';

export default function Projects() {
  const [heroRevealed, setHeroRevealed] = useState(false);
  const [partnersRevealed, setPartnersRevealed] = useState(false);
  const [showcaseRevealed, setShowcaseRevealed] = useState(false);
  const [ctaRevealed, setCtaRevealed] = useState(false);
  const [activePartnerIndex, setActivePartnerIndex] = useState(0);

  const heroRef = useRef(null);
  const partnersRef = useRef(null);
  const showcaseRef = useRef(null);
  const ctaRef = useRef(null);
  const partnersGridRef = useRef(null);
  const isUserInteracting = useRef(false);
  const autoScrollTimer = useRef(null);

  // 1. IntersectionObserver for Sequential Section Entrance
  useEffect(() => {
    const observerOptions = { threshold: 0.12 };

    const handleObserve = (setter) => ([entry], obs) => {
      if (entry.isIntersecting) {
        setter(true);
        obs.unobserve(entry.target);
      }
    };

    const heroObs = new IntersectionObserver(handleObserve(setHeroRevealed), observerOptions);
    const partnersObs = new IntersectionObserver(handleObserve(setPartnersRevealed), observerOptions);
    const showcaseObs = new IntersectionObserver(handleObserve(setShowcaseRevealed), observerOptions);
    const ctaObs = new IntersectionObserver(handleObserve(setCtaRevealed), observerOptions);

    if (heroRef.current) heroObs.observe(heroRef.current);
    if (partnersRef.current) partnersObs.observe(partnersRef.current);
    if (showcaseRef.current) showcaseObs.observe(showcaseRef.current);
    if (ctaRef.current) ctaObs.observe(ctaRef.current);

    const timer = setTimeout(() => setHeroRevealed(true), 60);

    return () => {
      heroObs.disconnect();
      partnersObs.disconnect();
      showcaseObs.disconnect();
      ctaObs.disconnect();
      clearTimeout(timer);
    };
  }, []);

  // 2. Mobile Touch / Swipe Scroll-Tracking
  const handlePartnersScroll = () => {
    if (!partnersGridRef.current || window.innerWidth > 768) return;
    const el = partnersGridRef.current;
    const scrollLeft = el.scrollLeft;
    const firstChild = el.children[0];
    if (!firstChild) return;
    const cardWidth = firstChild.offsetWidth + 16;
    const newIdx = Math.round(scrollLeft / cardWidth);
    if (newIdx >= 0 && newIdx < PARTNERS_DATA.length && newIdx !== activePartnerIndex) {
      setActivePartnerIndex(newIdx);
    }
  };

  const scrollToPartner = (idx) => {
    if (!partnersGridRef.current) return;
    const el = partnersGridRef.current;
    const card = el.children[idx];
    if (card) {
      const leftPos = card.offsetLeft - (el.offsetWidth - card.offsetWidth) / 2;
      el.scrollTo({ left: Math.max(0, leftPos), behavior: 'smooth' });
      setActivePartnerIndex(idx);
    }
  };

  const handleTouchStart = () => {
    isUserInteracting.current = true;
  };

  const handleTouchEnd = () => {
    setTimeout(() => {
      isUserInteracting.current = false;
    }, 3500);
  };

  // 4. Optional Mobile Auto-Rotation (4.5s Interval)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const startAutoTimer = () => {
      if (autoScrollTimer.current) clearInterval(autoScrollTimer.current);
      autoScrollTimer.current = setInterval(() => {
        if (window.innerWidth > 768 || isUserInteracting.current || !partnersGridRef.current) return;
        setActivePartnerIndex((prev) => {
          const next = (prev + 1) % PARTNERS_DATA.length;
          scrollToPartner(next);
          return next;
        });
      }, 4500);
    };

    startAutoTimer();

    return () => {
      if (autoScrollTimer.current) clearInterval(autoScrollTimer.current);
    };
  }, []);

  return (
    <div className="projects-page-wrapper site-wrapper">
      {/* Dynamic Background Atmosphere */}
      <div className="projects-bg-backdrop" aria-hidden="true">
        <img
          src={homeBg}
          alt=""
          className="projects-bg-image"
          loading="eager"
          decoding="async"
        />
        <div className="projects-bg-overlay" />
        <div className="projects-ambient-top-left" />
        <div className="projects-ambient-top-right" />
      </div>

      {/* Global Navigation with PROJECTS active */}
      <Navbar activePage="projects" />

      {/* Main Content Container */}
      <main className="projects-main-section" id="projects-content">
        <div className="container projects-content-wrapper">
          {/* ================================================================
              Section 1: Hero Trust Block (Editorial Layout)
              ================================================================ */}
          <div
            ref={heroRef}
            className={`projects-hero-block ${heroRevealed ? 'is-revealed' : ''}`}
            style={{ transform: `translate3d(0, ${parallaxY}px, 0)` }}
          >
            <div className="projects-badge-wrapper anim-hero-badge">
              <span className="projects-badge">OUR PROJECTS</span>
              <span className="projects-badge-line anim-badge-line" aria-hidden="true" />
            </div>

            <h1 className="projects-hero-heading">
              <span className="projects-heading-line1 anim-heading-1">Powering Solar Projects</span>
              <span className="projects-heading-line2 anim-heading-2">Across Real-World Applications</span>
            </h1>

            <p className="projects-hero-subtitle anim-hero-desc">
              From fuel stations to industries, from commercial spaces to rural landscapes — we deliver reliable and efficient solar solutions that create real impact.
            </p>

            {/* 4 Staggered Trust Metric Pills */}
            <div className="projects-trust-row" role="list" aria-label="Key Commitments">
              {HERO_TRUST_METRICS.map((metric, idx) => (
                <div
                  key={metric.id}
                  className="projects-trust-pill anim-trust-pill"
                  style={{ '--pill-idx': idx }}
                  role="listitem"
                >
                  <div className="projects-trust-icon-box" aria-hidden="true">
                    {metric.iconType === 'shield' && <QualityShieldIcon size={18} />}
                    {metric.iconType === 'bolt' && <PerformanceBoltIcon size={18} />}
                    {metric.iconType === 'sprout' && <SustainableSproutIcon size={18} />}
                    {metric.iconType === 'support' && <SupportHeadsetIcon size={18} />}
                  </div>
                  <span className="projects-trust-label">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ================================================================
              Section 2: Our Previous Projects (4 Reference Cards)
              ================================================================ */}
          <section
            ref={partnersRef}
            className={`projects-partners-section ${partnersRevealed ? 'is-revealed' : ''}`}
            aria-labelledby="partners-title"
          >
            <div className="section-divider-header anim-divider">
              <span className="section-divider-line left anim-line-left" aria-hidden="true" />
              <h2 className="section-divider-title anim-divider-text" id="partners-title">
                OUR PREVIOUS PROJECTS
              </h2>
              <span className="section-divider-line right anim-line-right" aria-hidden="true" />
            </div>

            {/* Cards Grid on Desktop / Smooth Horizontal Carousel on Mobile */}
            <div
              ref={partnersGridRef}
              className="projects-partners-grid"
              onScroll={handlePartnersScroll}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              role="region"
              aria-label="Previous Projects Cards"
            >
              {PARTNERS_DATA.map((partner, idx) => (
                <article
                  key={partner.id}
                  className={`partner-card anim-partner-card ${activePartnerIndex === idx ? 'mobile-active' : ''}`}
                  style={{ '--partner-idx': idx }}
                  aria-label={`Project: ${partner.name}`}
                >
                  {/* Top: Logo Container with Precise Scaling and Centering */}
                  <div className="partner-logo-box">
                    {partner.logoType === 'fuel-trio' && (
                      <div className="partner-logo-trio-wrap" aria-label="Nayara Energy, Bharat Petroleum, and Hindustan Petroleum">
                        {/* Left: Nayara Energy */}
                        <div className="trio-logo-item">
                          <img
                            src={nayaraLogo}
                            alt="Nayara Energy"
                            className="trio-logo-nayara"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>

                        {/* Center: Bharat Petroleum (Main / Center) */}
                        <div className="trio-logo-item trio-logo-bpcl" aria-label="Bharat Petroleum">
                          <div className="bpcl-badge">
                            <div className="bpcl-circle-petal" />
                            <span className="bpcl-name">Bharat<br />Petroleum</span>
                          </div>
                        </div>

                        {/* Right: Hindustan Petroleum (HP) */}
                        <div className="trio-logo-item">
                          <img
                            src={hpLogo}
                            alt="Hindustan Petroleum"
                            className="trio-logo-hp"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </div>
                    )}
                    {partner.logoType === 'impetus' && (
                      <div className="partner-logo-impetus" aria-label="IMPETUS">
                        <span className="impetus-brand-name">IMPETUS</span>
                      </div>
                    )}
                    {partner.logoType === 'coldstore' && (
                      <div className="partner-logo-warehouse" aria-label="Cold Store Warehouse">
                        <ColdStorePartnerIcon size={38} color="#1e3a8a" />
                        <span className="warehouse-brand-name">COLD STORE<br />WAREHOUSE</span>
                      </div>
                    )}
                    {partner.logoType === 'logistics' && (
                      <div className="partner-logo-warehouse" aria-label="Logistics Warehouse">
                        <LogisticsPartnerIcon size={38} color="#1e3a8a" />
                        <span className="warehouse-brand-name">LOGISTICS<br />WAREHOUSE</span>
                      </div>
                    )}
                  </div>

                  {/* Category Badge */}
                  <span className="partner-category-badge">{partner.badge}</span>

                  {/* Description */}
                  <p className="partner-description">{partner.desc}</p>

                  {/* Location Pin Footer */}
                  <div className="partner-location-footer">
                    <LocationPinIcon size={14} color="#38bdf8" />
                    <span>{partner.location}</span>
                  </div>
                </article>
              ))}
            </div>

            {/* Mobile Pagination Dot Indicators (<= 768px only) */}
            <div className="partners-mobile-dots" role="tablist" aria-label="Project cards navigation">
              {PARTNERS_DATA.map((p, idx) => (
                <button
                  key={p.id}
                  type="button"
                  className={`partners-dot-btn ${activePartnerIndex === idx ? 'is-active' : ''}`}
                  onClick={() => scrollToPartner(idx)}
                  aria-label={`Go to project ${idx + 1}: ${p.name}`}
                  aria-selected={activePartnerIndex === idx}
                  role="tab"
                />
              ))}
            </div>
          </section>

          {/* ================================================================
              Section 3: Project Showcase (Authentic Local Solar Installations)
              ================================================================ */}
          <section
            ref={showcaseRef}
            className={`projects-showcase-section ${showcaseRevealed ? 'is-revealed' : ''}`}
            aria-labelledby="showcase-title"
          >
            <div className="section-divider-header anim-divider">
              <span className="section-divider-line left anim-line-left" aria-hidden="true" />
              <h2 className="section-divider-title anim-divider-text" id="showcase-title">
                PROJECT SHOWCASE
              </h2>
              <span className="section-divider-line right anim-line-right" aria-hidden="true" />
            </div>

            <div className="projects-showcase-grid">
              {PROJECTS_SHOWCASE_DATA.map((item, idx) => (
                <article
                  key={item.id}
                  className="showcase-card anim-showcase-card"
                  style={{ '--showcase-idx': idx }}
                  aria-label={item.title}
                >
                  {/* Preview Image with Zoom & Dark Gradient Overlay */}
                  <div className="showcase-img-wrapper">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="showcase-img"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="showcase-img-overlay" aria-hidden="true" />
                    <div className="showcase-sun-beam" aria-hidden="true" />
                    <div className="showcase-icon-badge" aria-hidden="true">
                      {item.iconType === 'home' && <HomeProjectIcon size={20} />}
                      {item.iconType === 'industrial' && <FactoryProjectIcon size={20} />}
                      {item.iconType === 'coldstore' && <SnowflakeProjectIcon size={20} />}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="showcase-card-body">
                    <h3 className="showcase-card-title">{item.title}</h3>
                    <span className="showcase-category-tag">{item.tag}</span>
                    <p className="showcase-card-desc">{item.desc}</p>

                    {/* Metadata Footer */}
                    <div className="showcase-card-footer">
                      <div className="showcase-meta-item">
                        <LocationPinIcon size={14} color="#38bdf8" />
                        <span>{item.location}</span>
                      </div>
                      <div className="showcase-meta-item capacity">
                        <PowerKwIcon size={14} color="#38bdf8" />
                        <span>{item.capacity}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ================================================================
              Section 4: Call To Action Banner
              ================================================================ */}
          <div
            ref={ctaRef}
            className={`projects-cta-banner ${ctaRevealed ? 'is-revealed' : ''}`}
          >
            <div className="projects-cta-left">
              <div className="projects-cta-icon-box anim-cta-icon" aria-hidden="true">
                <CtaSunSolarIcon size={46} color="#ffa028" />
              </div>
              <div className="projects-cta-text-group anim-cta-text">
                <h2 className="projects-cta-heading">Have a Solar Project in Mind?</h2>
                <p className="projects-cta-subtitle">
                  Let's build a customized solar solution that meets your energy needs and budget.
                </p>
              </div>
            </div>

            <div className="projects-cta-right anim-cta-action">
              <a
                href="/request-a-quote"
                className="btn btn-primary projects-cta-btn"
                aria-label="Request a Solar Project Quote"
              >
                <span>REQUEST A QUOTE</span>
                <span className="cta-arrow-shift" aria-hidden="true">→</span>
              </a>
              <div className="projects-cta-trust-badge">
                <ShieldTrustIcon size={15} color="#38bdf8" />
                <span>Trusted by Businesses & Homes Across India</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Global Site Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action with Soft Hover Transition */}
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
