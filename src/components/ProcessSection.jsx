import React, { useState, useEffect } from 'react';
import { PROCESS_STEPS } from '../data/processData';
import { getProcessIcon } from './ProcessIcons';
import mandloiLogo from '../assets/logo/mandloi-logo.png';

/**
 * ProcessSection Component (How It Works / Our Process)
 * Pure, lightweight, smooth SVG + CSS animated process visualization
 * Viewport-Fit Scale: Fits entire diagram on 1366x768 / 1536x864 screens without scrolling/clipping
 */
export default function ProcessSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const sectionRef = React.useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-cycle sequentially (01 -> 02 -> 03 -> 04 -> 05 -> 01)
  useEffect(() => {
    if (isPaused || !isInView) return;

    const timer = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % PROCESS_STEPS.length);
    }, 3200);

    return () => clearInterval(timer);
  }, [isPaused, isInView]);

  return (
    <section
      ref={sectionRef}
      className="process-section"
      id="how-it-works"
      aria-labelledby="process-title"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Atmosphere Glows */}
      <div className="process-ambient-left" aria-hidden="true" />
      <div className="process-ambient-right" aria-hidden="true" />

      <div className="container process-content-wrapper">
        {/* 1. Header Block (Compact Spacing) */}
        <div className="process-header animate-fade-in">
          {/* Top Badge */}
          <div className="process-badge-wrapper">
            <span className="process-badge-line" aria-hidden="true" />
            <span className="process-badge-text">
              OUR <span className="process-badge-highlight">PROCESS</span>
            </span>
            <span className="process-badge-line right" aria-hidden="true" />
          </div>

          {/* Main Heading (1 Line on Desktop >= 1160px) */}
          <h2 className="process-heading" id="process-title">
            <span className="process-heading-line1">Simple Steps,&nbsp;</span>
            <span className="process-heading-line2">Powerful Impact</span>
          </h2>

          {/* Subtitle */}
          <p className="process-subtitle">
            From consultation to connection – we make solar simple, seamless and efficient.
          </p>
        </div>

        {/* ==================================================================
            2. Desktop Radial Process Diagram (>= 1160px) - Viewport-Fit Scale
            ================================================================== */}
        <div className="process-desktop-wrapper" aria-hidden="false">
          {/* SVG Canvas: Concentric Rings + Continuous Flow Paths */}
          <svg
            className="process-svg-canvas"
            viewBox="0 0 1000 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              {/* Arrowhead Markers */}
              <marker
                id="arrow-cyan-fit"
                viewBox="0 0 10 10"
                refX="6"
                refY="5"
                markerWidth="5"
                markerHeight="5"
                orient="auto-start-reverse"
              >
                <path d="M 0 2 L 8 5 L 0 8 z" fill="#00d2ff" />
              </marker>

              <marker
                id="arrow-orange-fit"
                viewBox="0 0 10 10"
                refX="6"
                refY="5"
                markerWidth="5"
                markerHeight="5"
                orient="auto-start-reverse"
              >
                <path d="M 0 2 L 8 5 L 0 8 z" fill="#ffa028" />
              </marker>

              {/* Glow Filters */}
              <filter id="glow-cyan-fit-filter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <filter id="glow-orange-fit-filter" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Concentric Decorative Rings around Center (500, 250) */}
            <circle
              cx="500"
              cy="250"
              r="100"
              stroke="rgba(56, 189, 248, 0.12)"
              strokeWidth="1"
              strokeDasharray="3 3"
              className="process-ring-slow"
            />
            <circle
              cx="500"
              cy="250"
              r="135"
              stroke="rgba(56, 189, 248, 0.15)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <circle
              cx="500"
              cy="250"
              r="175"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="1.2"
            />
            <circle
              cx="500"
              cy="250"
              r="210"
              stroke="rgba(255, 160, 40, 0.09)"
              strokeWidth="1"
              strokeDasharray="3 4"
              className="process-ring-reverse"
            />

            {/* Curved Connecting Flow Arrows (Radius 175px, Center 500, 250) */}
            {/* Arrow 01 -> 02 (Cyan) */}
            <path
              d="M 550 85 A 175 175 0 0 1 635 140"
              stroke="#00d2ff"
              strokeWidth="2.2"
              strokeDasharray="7 4"
              className="process-energy-path-cyan"
              fill="none"
              markerEnd="url(#arrow-cyan-fit)"
              filter="url(#glow-cyan-fit-filter)"
            />

            {/* Arrow 02 -> 03 (Orange) */}
            <path
              d="M 668 235 A 175 175 0 0 1 625 340"
              stroke="#ffa028"
              strokeWidth="2.2"
              strokeDasharray="7 4"
              className="process-energy-path-orange"
              fill="none"
              markerEnd="url(#arrow-orange-fit)"
              filter="url(#glow-orange-fit-filter)"
            />

            {/* Arrow 03 -> 04 (Cyan) */}
            <path
              d="M 555 420 A 175 175 0 0 1 445 420"
              stroke="#00d2ff"
              strokeWidth="2.2"
              strokeDasharray="7 4"
              className="process-energy-path-cyan"
              fill="none"
              markerEnd="url(#arrow-cyan-fit)"
              filter="url(#glow-cyan-fit-filter)"
            />

            {/* Arrow 04 -> 05 (Orange) */}
            <path
              d="M 375 340 A 175 175 0 0 1 332 235"
              stroke="#ffa028"
              strokeWidth="2.2"
              strokeDasharray="7 4"
              className="process-energy-path-orange"
              fill="none"
              markerEnd="url(#arrow-orange-fit)"
              filter="url(#glow-orange-fit-filter)"
            />

            {/* Arrow 05 -> 01 (Cyan) */}
            <path
              d="M 365 140 A 175 175 0 0 1 450 85"
              stroke="#00d2ff"
              strokeWidth="2.2"
              strokeDasharray="7 4"
              className="process-energy-path-cyan"
              fill="none"
              markerEnd="url(#arrow-cyan-fit)"
              filter="url(#glow-cyan-fit-filter)"
            />

            {/* Dotted Connector Lines from Nodes to Outside Text Blocks */}
            {/* Step 01 Connector */}
            <path d="M 545 55 L 590 32" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="3 3" />
            <circle cx="592" cy="31" r="3" fill="#38bdf8" />

            {/* Step 02 Connector */}
            <path d="M 705 184 L 742 184" stroke="#ffa028" strokeWidth="1.2" strokeDasharray="3 3" />
            <circle cx="744" cy="184" r="3" fill="#ffa028" />

            {/* Step 03 Connector */}
            <path d="M 640 415 L 678 430" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="3 3" />
            <circle cx="680" cy="431" r="3" fill="#38bdf8" />

            {/* Step 04 Connector */}
            <path d="M 360 415 L 322 430" stroke="#ffa028" strokeWidth="1.2" strokeDasharray="3 3" />
            <circle cx="320" cy="431" r="3" fill="#ffa028" />

            {/* Step 05 Connector */}
            <path d="M 295 184 L 258 184" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="3 3" />
            <circle cx="256" cy="184" r="3" fill="#38bdf8" />
          </svg>

          {/* Central Official Mandloi Energy Logo (Proportional & Clear) */}
          <div className="process-center-logo-box">
            <img
              src={mandloiLogo}
              alt="Mandloi Energy — Powering Tomorrow"
              className="process-center-logo"
              width="180"
              height="60"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* 5 Process Stage Nodes & Outside Text Descriptions */}
          {/* STEP 01 */}
          <div
            className={`process-stage-node-wrapper node-pos-01 ${activeStepIndex === 0 ? 'is-active' : ''}`}
            style={{
              '--node-accent': '#38bdf8',
              '--node-glow': 'rgba(56, 189, 248, 0.45)',
            }}
            onClick={() => setActiveStepIndex(0)}
          >
            <div className="process-node-circle" aria-label="Step 01: Understand your needs">
              <span className="process-node-number-badge">01</span>
              {getProcessIcon('checklist', '#38bdf8', 28)}
            </div>
          </div>
          <div
            className={`process-text-block text-pos-01 ${activeStepIndex === 0 ? 'is-active' : ''}`}
            style={{ '--text-accent': '#38bdf8' }}
            onClick={() => setActiveStepIndex(0)}
          >
            <h3 className="process-text-title">UNDERSTAND YOUR NEEDS</h3>
            <p className="process-text-desc">
              We understand your energy<br />needs and goals.
            </p>
          </div>

          {/* STEP 02 */}
          <div
            className={`process-stage-node-wrapper node-pos-02 ${activeStepIndex === 1 ? 'is-active' : ''}`}
            style={{
              '--node-accent': '#ffa028',
              '--node-glow': 'rgba(255, 160, 40, 0.45)',
            }}
            onClick={() => setActiveStepIndex(1)}
          >
            <div className="process-node-circle" aria-label="Step 02: Design your solar system">
              <span className="process-node-number-badge">02</span>
              {getProcessIcon('blueprint', '#ffa028', 28)}
            </div>
          </div>
          <div
            className={`process-text-block text-pos-02 ${activeStepIndex === 1 ? 'is-active' : ''}`}
            style={{ '--text-accent': '#ffa028' }}
            onClick={() => setActiveStepIndex(1)}
          >
            <h3 className="process-text-title">
              DESIGN YOUR<br />SOLAR SYSTEM
            </h3>
            <p className="process-text-desc">
              We design a customized<br />solar system for maximum<br />performance.
            </p>
          </div>

          {/* STEP 03 */}
          <div
            className={`process-stage-node-wrapper node-pos-03 ${activeStepIndex === 2 ? 'is-active' : ''}`}
            style={{
              '--node-accent': '#38bdf8',
              '--node-glow': 'rgba(56, 189, 248, 0.45)',
            }}
            onClick={() => setActiveStepIndex(2)}
          >
            <div className="process-node-circle" aria-label="Step 03: Installation">
              <span className="process-node-number-badge">03</span>
              {getProcessIcon('technician', '#38bdf8', 28)}
            </div>
          </div>
          <div
            className={`process-text-block text-pos-03 ${activeStepIndex === 2 ? 'is-active' : ''}`}
            style={{ '--text-accent': '#38bdf8' }}
            onClick={() => setActiveStepIndex(2)}
          >
            <h3 className="process-text-title">INSTALLATION</h3>
            <p className="process-text-desc">
              Our expert team installs<br />your system safely and<br />efficiently.
            </p>
          </div>

          {/* STEP 04 */}
          <div
            className={`process-stage-node-wrapper node-pos-04 ${activeStepIndex === 3 ? 'is-active' : ''}`}
            style={{
              '--node-accent': '#ffa028',
              '--node-glow': 'rgba(255, 160, 40, 0.45)',
            }}
            onClick={() => setActiveStepIndex(3)}
          >
            <div className="process-node-circle" aria-label="Step 04: Grid / Net metering">
              <span className="process-node-number-badge">04</span>
              {getProcessIcon('meter', '#ffa028', 28)}
            </div>
          </div>
          <div
            className={`process-text-block text-pos-04 ${activeStepIndex === 3 ? 'is-active' : ''}`}
            style={{ '--text-accent': '#ffa028' }}
            onClick={() => setActiveStepIndex(3)}
          >
            <h3 className="process-text-title">GRID / NET METERING</h3>
            <p className="process-text-desc">
              We connect your system<br />to the grid through<br />net metering.
            </p>
          </div>

          {/* STEP 05 */}
          <div
            className={`process-stage-node-wrapper node-pos-05 ${activeStepIndex === 4 ? 'is-active' : ''}`}
            style={{
              '--node-accent': '#38bdf8',
              '--node-glow': 'rgba(56, 189, 248, 0.45)',
            }}
            onClick={() => setActiveStepIndex(4)}
          >
            <div className="process-node-circle" aria-label="Step 05: Start generating solar energy">
              <span className="process-node-number-badge">05</span>
              {getProcessIcon('solar-gen', '#38bdf8', 28)}
            </div>
          </div>
          <div
            className={`process-text-block text-pos-05 ${activeStepIndex === 4 ? 'is-active' : ''}`}
            style={{ '--text-accent': '#38bdf8' }}
            onClick={() => setActiveStepIndex(4)}
          >
            <h3 className="process-text-title">
              START GENERATING<br />SOLAR ENERGY
            </h3>
            <p className="process-text-desc">
              Start generating clean<br />energy and enjoy long-term<br />savings.
            </p>
          </div>
        </div>

        {/* ==================================================================
            3. Mobile / Tablet Responsive Adaptation (< 1024px)
               Preserves the exact same desktop visual hierarchy,
               colors, glowing nodes, number badges, and energy flow spine
            ================================================================== */}
        <div className="process-responsive-wrapper" aria-label="Process steps timeline">
          {/* Central Authentic Mandloi Energy Brand Flow Anchor */}
          <div className="process-responsive-brand">
            <div className="process-responsive-logo-box">
              <img
                src={mandloiLogo}
                alt="Mandloi Energy — Powering Tomorrow"
                className="process-responsive-logo"
                width="160"
                height="54"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="process-responsive-start-indicator" aria-hidden="true">
              <span className="process-brand-pulse-dot" />
              <span className="process-brand-flow-label">OUR 5-STEP PROCESS</span>
              <span className="process-brand-pulse-dot" />
            </div>
          </div>

          {/* Connected Vertical Energy Flow Timeline */}
          <div className="process-timeline-list" role="list">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              const isLast = idx === PROCESS_STEPS.length - 1;
              const nextStep = !isLast ? PROCESS_STEPS[idx + 1] : null;

              const stepStyles = {
                '--node-accent': step.accentColor,
                '--node-glow': step.glowColor,
                '--text-accent': step.accentColor,
                '--card-border': isActive ? step.accentColor : `${step.accentColor}38`,
                '--next-accent': nextStep ? nextStep.accentColor : step.accentColor,
              };

              return (
                <div
                  key={step.id}
                  className={`process-timeline-item ${isActive ? 'is-active' : ''}`}
                  style={stepStyles}
                  onClick={() => setActiveStepIndex(idx)}
                  role="listitem"
                  aria-label={`Step ${step.number}: ${step.title}`}
                >
                  {/* Left Column: Node Circle + Vertical Flow Spine */}
                  <div className="process-timeline-node-col">
                    <div className="process-timeline-node-circle">
                      <span className="process-timeline-number-badge">{step.number}</span>
                      {getProcessIcon(step.icon, step.accentColor, 26)}
                    </div>

                    {/* Continuous Energy Flow Spine with Directional Arrow (01 -> 02 -> 03 -> 04 -> 05) */}
                    {!isLast && (
                      <div className="process-timeline-spine" aria-hidden="true">
                        <div
                          className={`process-timeline-energy-line ${
                            step.accentType === 'cyan' ? 'flow-cyan' : 'flow-orange'
                          }`}
                        />
                        <div className="process-timeline-arrow-indicator">
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path
                              d="M1 1L5 5L9 1"
                              stroke={nextStep ? nextStep.accentColor : '#38bdf8'}
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Glass Step Card */}
                  <div className="process-timeline-card">
                    <h3 className="process-timeline-title">{step.title}</h3>
                    <p className="process-timeline-desc">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
