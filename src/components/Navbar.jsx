import React, { useState, useEffect } from 'react';
import TopBar from './TopBar';
import mandloiLogo from '../assets/logo/mandloi-logo.png';
import { handleNavClick } from '../utils/navigation';

const NAV_LINKS = [
  { id: 'home', label: 'HOME', href: '#home' },
  { id: 'why-mandloi', label: 'WHY MANDLOI ENERGY', href: '#why-mandloi' },
  { id: 'about', label: 'ABOUT US', href: '#about' },
  { id: 'solutions', label: 'SOLUTIONS', href: '#solutions' },
  { id: 'how-it-works', label: 'HOW IT WORKS', href: '#how-it-works' },
  { id: 'projects', label: 'PROJECTS', href: '#projects' },
  { id: 'reviews', label: 'REVIEWS', href: '#reviews' },
  { id: 'contact', label: 'CONTACT US', href: '#contact' },
];

export default function Navbar({ activePage = 'home' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(activePage);

  // Active section tracking via IntersectionObserver on Home page
  useEffect(() => {
    if (activePage !== 'home' && activePage !== 'quote') {
      setActiveSection(activePage);
      return;
    }

    const sectionIds = ['home', 'why-mandloi', 'about', 'solutions', 'how-it-works', 'projects', 'reviews', 'contact'];
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    sectionElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activePage]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <header className="site-header-wrapper">
      {/* 1. Top Contact Bar */}
      <TopBar />

      {/* 2. Main Navigation Bar */}
      <div className="main-navbar-bar">
        <div className="container">
          <nav className="navbar" aria-label="Main Navigation">
            {/* Complete brand logo */}
            <a
              href="/"
              className="nav-brand"
              aria-label="Mandloi Energy - Powering Tomorrow"
              onClick={(e) => handleNavClick(e, '/#home')}
            >
              <img
                src={mandloiLogo}
                alt="Mandloi Energy - Powering Tomorrow"
                className="brand-logo"
                width="220"
                height="72"
                loading="eager"
                decoding="async"
              />
            </a>

            {/* Desktop Navigation Links */}
            <ul className="nav-menu">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                      onClick={(e) => handleNavClick(e, link.href)}
                    >
                      {link.label}
                      {isActive && <span className="nav-active-glow" aria-hidden="true" />}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Desktop Actions: Request Quote CTA */}
            <div className="header-actions">
              <a
                href="/request-a-quote"
                className={`btn btn-primary nav-cta-btn ${activePage === 'quote' ? 'active-cta' : ''}`}
                onClick={(e) => handleNavClick(e, '/request-a-quote')}
              >
                REQUEST A QUOTE →
              </a>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                className="nav-toggle"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen((prev) => !prev)}
              >
                {mobileMenuOpen ? (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                ) : (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                )}
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleNavClick(e, link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="mobile-cta-wrapper">
          <a
            href="/request-a-quote"
            className="btn btn-primary mobile-cta"
            onClick={(e) => {
              setMobileMenuOpen(false);
              handleNavClick(e, '/request-a-quote');
            }}
          >
            REQUEST A QUOTE →
          </a>
        </div>
      </div>
    </header>
  );
}
