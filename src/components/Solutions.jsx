import React, { useState, useEffect, useRef } from 'react';
import SolutionsCard from './SolutionsCard';
import { SOLUTIONS_DATA } from '../data/solutionsData';
import { DownArrowIcon } from './SolutionsIcons';
import homeBgImage from '../assets/images/home-bg.webp';

/**
 * Solutions Component
 * Solutions section on Home page matching controlling reference
 */
export default function Solutions() {
  const [activeSolutionIndex, setActiveSolutionIndex] = useState(0);
  const solutionsGridRef = useRef(null);
  const isUserInteracting = useRef(false);
  const autoScrollTimer = useRef(null);

  // 1. Mobile Touch / Swipe Scroll-Tracking
  const handleSolutionsScroll = () => {
    if (!solutionsGridRef.current || window.innerWidth > 768) return;
    const el = solutionsGridRef.current;
    const scrollLeft = el.scrollLeft;
    const firstChild = el.children[0];
    if (!firstChild) return;
    const cardWidth = firstChild.offsetWidth + 16;
    const newIdx = Math.round(scrollLeft / cardWidth);
    if (newIdx >= 0 && newIdx < SOLUTIONS_DATA.length && newIdx !== activeSolutionIndex) {
      setActiveSolutionIndex(newIdx);
    }
  };

  const scrollToSolution = (idx) => {
    if (!solutionsGridRef.current) return;
    const el = solutionsGridRef.current;
    const card = el.children[idx];
    if (card) {
      const leftPos = card.offsetLeft - (el.offsetWidth - card.offsetWidth) / 2;
      el.scrollTo({ left: Math.max(0, leftPos), behavior: 'smooth' });
      setActiveSolutionIndex(idx);
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

  // 2. Mobile Auto-Rotation (4.5s Interval)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const startAutoTimer = () => {
      if (autoScrollTimer.current) clearInterval(autoScrollTimer.current);
      autoScrollTimer.current = setInterval(() => {
        if (window.innerWidth > 768 || isUserInteracting.current || !solutionsGridRef.current) return;
        setActiveSolutionIndex((prev) => {
          const next = (prev + 1) % SOLUTIONS_DATA.length;
          scrollToSolution(next);
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
    <section className="solutions-section" id="solutions" aria-labelledby="solutions-title">
      {/* Background Banner Container */}
      <div className="solutions-bg-container" aria-hidden="true">
        <img
          src={homeBgImage}
          alt=""
          className="solutions-bg-image"
          loading="lazy"
          decoding="async"
        />
        <div className="solutions-backdrop-overlay" />
      </div>

      <div className="container solutions-content-wrapper">
        {/* Header Block */}
        <div className="solutions-header animate-fade-in">
          {/* Label Badge */}
          <span className="solutions-badge">OUR SOLUTIONS</span>

          {/* Main 2-Line Heading */}
          <h2 className="solutions-heading" id="solutions-title">
            <span className="solutions-heading-line1">Smart Solar Solutions</span>
            <span className="solutions-heading-line2">For Every Need</span>
          </h2>

          {/* Subtitle Description */}
          <p className="solutions-description">
            From homes to industries, we deliver customized solar solutions that help you save more and power a cleaner tomorrow.
          </p>
        </div>

        {/* 4-Card Solutions Grid / Mobile Horizontal Carousel */}
        <div
          ref={solutionsGridRef}
          className="solutions-grid"
          onScroll={handleSolutionsScroll}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-label="Solar Solutions Cards"
        >
          {SOLUTIONS_DATA.map((solution, idx) => (
            <SolutionsCard
              key={solution.id}
              solution={solution}
              isActive={activeSolutionIndex === idx}
              index={idx}
            />
          ))}
        </div>

        {/* Mobile Pagination Dot Indicators (<= 768px only) */}
        <div className="solutions-mobile-dots" role="tablist" aria-label="Solar solutions navigation">
          {SOLUTIONS_DATA.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              className={`solutions-dot-btn ${activeSolutionIndex === idx ? 'is-active' : ''}`}
              onClick={() => scrollToSolution(idx)}
              aria-label={`Go to solution ${idx + 1}: ${s.title}`}
              aria-selected={activeSolutionIndex === idx}
              role="tab"
            />
          ))}
        </div>

        {/* Bottom Transition: HOW IT WORKS + Down Arrow */}
        <div className="solutions-footer-nav" aria-label="How It Works navigation">
          <div className="solutions-nav-label-wrapper">
            <span className="solutions-nav-line" aria-hidden="true" />
            <span className="solutions-nav-text">HOW IT WORKS</span>
            <span className="solutions-nav-line right" aria-hidden="true" />
          </div>

          <a
            href="#how-it-works"
            className="solutions-down-arrow-btn"
            aria-label="Scroll down to How It Works"
          >
            <DownArrowIcon size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
