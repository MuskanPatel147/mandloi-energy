import React, { useState, useEffect, useRef } from 'react';
import mandloiLogo from '../assets/logo/mandloi-logo.png';
import { PhoneIcon, WhatsappIcon, MailIcon, GlobeIcon, InstagramIcon } from './Icons';
import { handleNavClick } from '../utils/navigation';

export function FacebookIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function LinkedinIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const FOOTER_NAV_LINKS = [
  { id: 'home', label: 'HOME', href: '/' },
  { id: 'solutions', label: 'SOLUTIONS', href: '#solutions' },
  { id: 'projects', label: 'PROJECTS', href: '/projects' },
  { id: 'about', label: 'ABOUT US', href: '/about' },
  { id: 'reviews', label: 'REVIEWS', href: '/reviews' },
  { id: 'contact', label: 'CONTACT US', href: '/contact' },
  { id: 'quote', label: 'REQUEST A QUOTE →', href: '/request-a-quote' },
];

const APPROVED_SOLUTIONS = [
  'Solar System Design & Consultation',
  'Solar Installation',
  'Government / MNRE Subsidy Assistance',
  'Net Metering',
  'AMC / After-Sales Support',
];

export default function Footer() {
  const [revealed, setRevealed] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    const fallback = setTimeout(() => setRevealed(true), 250);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`site-footer ${revealed ? 'is-revealed' : ''}`}
      aria-label="Site Footer"
    >
      {/* Top Solar Divider Line */}
      <div className="footer-top-divider" aria-hidden="true" />

      {/* Main Footer Container */}
      <div className="container footer-content-wrapper">
        <div className="footer-grid">
          {/* Column 1: Official Branding & Summary */}
          <div className="footer-col footer-col-brand anim-col-1">
            <a
              href="/"
              className="footer-brand-link"
              aria-label="Mandloi Energy - Powering Tomorrow"
              onClick={(e) => handleNavClick(e, '/')}
            >
              <img
                src={mandloiLogo}
                alt="Mandloi Energy Logo"
                className="footer-brand-logo"
                loading="lazy"
              />
            </a>

            <p className="footer-brand-description">
              Delivering reliable, high-performance solar energy solutions across residential, commercial, industrial and agricultural sectors in Madhya Pradesh.
            </p>

            {/* Social Connect Icons */}
            <div className="footer-social-row" aria-label="Social Media Links">
              <a
                href="https://wa.me/919669555550"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon-btn whatsapp"
                aria-label="Connect on WhatsApp"
              >
                <WhatsappIcon size={16} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon-btn instagram"
                aria-label="Follow on Instagram"
              >
                <InstagramIcon size={16} />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon-btn facebook"
                aria-label="Follow on Facebook"
              >
                <FacebookIcon size={16} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon-btn linkedin"
                aria-label="Connect on LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col footer-col-links anim-col-2">
            <h2 className="footer-col-title">QUICK LINKS</h2>
            <ul className="footer-nav-list">
              {FOOTER_NAV_LINKS.map((link) => (
                <li key={link.id} className="footer-nav-item">
                  <a
                    href={link.href}
                    className={`footer-nav-link ${link.id === 'quote' ? 'quote-highlight' : ''}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    <span className="footer-link-arrow" aria-hidden="true">›</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-col footer-col-solutions anim-col-3">
            <h2 className="footer-col-title">SERVICES</h2>
            <ul className="footer-services-list">
              {APPROVED_SOLUTIONS.map((service) => (
                <li key={service} className="footer-service-item">
                  <a
                    href="#solutions"
                    className="footer-service-link"
                    onClick={(e) => handleNavClick(e, '#solutions')}
                  >
                    <span className="footer-bullet" aria-hidden="true">•</span>
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="footer-col footer-col-contact anim-col-4">
            <h2 className="footer-col-title">CONTACT US</h2>
            <div className="footer-contact-list">
              <a href="tel:+919669555550" className="footer-contact-item">
                <div className="footer-contact-icon-box" aria-hidden="true">
                  <PhoneIcon size={15} />
                </div>
                <div className="footer-contact-text">
                  <span className="footer-contact-label">Phone</span>
                  <span className="footer-contact-value">+91 9669-555550</span>
                </div>
              </a>

              <a
                href="https://wa.me/919669555550"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item whatsapp-item"
              >
                <div className="footer-contact-icon-box whatsapp" aria-hidden="true">
                  <WhatsappIcon size={15} />
                </div>
                <div className="footer-contact-text">
                  <span className="footer-contact-label">WhatsApp</span>
                  <span className="footer-contact-value">+91 9669-555550</span>
                </div>
              </a>

              <a href="mailto:mandloienergy@gmail.com" className="footer-contact-item">
                <div className="footer-contact-icon-box" aria-hidden="true">
                  <MailIcon size={15} />
                </div>
                <div className="footer-contact-text">
                  <span className="footer-contact-label">Email</span>
                  <span className="footer-contact-value">mandloienergy@gmail.com</span>
                </div>
              </a>

              <a
                href="https://mandloienergy.in"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item"
              >
                <div className="footer-contact-icon-box" aria-hidden="true">
                  <GlobeIcon size={15} />
                </div>
                <div className="footer-contact-text">
                  <span className="footer-contact-label">Website</span>
                  <span className="footer-contact-value">mandloienergy.in</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-line" aria-hidden="true" />
          <p className="footer-copyright-text">
            © 2026 Mandloi Energy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
