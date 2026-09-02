import React from 'react';
import SolutionsCard from './SolutionsCard';
import { SOLUTIONS_DATA } from '../data/solutionsData';
import { DownArrowIcon } from './SolutionsIcons';
import homeBgImage from '../assets/images/home-bg.png';

/**
 * Solutions Component
 * Solutions section on Home page matching controlling reference
 */
export default function Solutions() {
  return (
    <section className="solutions-section" id="solutions" aria-labelledby="solutions-title">
      {/* Background Banner Container */}
      <div className="solutions-bg-container" aria-hidden="true">
        <img
          src={homeBgImage}
          alt=""
          className="solutions-bg-image"
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

        {/* 4-Card Solutions Grid */}
        <div className="solutions-grid">
          {SOLUTIONS_DATA.map((solution) => (
            <SolutionsCard key={solution.id} solution={solution} />
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
