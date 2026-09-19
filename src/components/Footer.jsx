import React, { useState, useEffect, useRef } from 'react';
import mandloiLogo from '../assets/logo/mandloi-logo.png';
import { PhoneIcon, WhatsappIcon, MailIcon, GlobeIcon } from './Icons';
import { handleNavClick } from '../utils/navigation';

const FOOTER_NAV_LINKS = [
  { id: 'home', label: 'HOME', href: '#home' },
  { id: 'why-mandloi', label: 'WHY MANDLOI ENERGY', href: '#why-mandloi' },
  { id: 'about', label: 'ABOUT US', href: '#about' },
  { id: 'solutions', label: 'SOLUTIONS', href: '#solutions' },
  { id: 'how-it-works', label: 'HOW IT WORKS', href: '#how-it-works' },
  { id: 'projects', label: 'PROJECTS', href: '#projects' },
  { id: 'reviews', label: 'REVIEWS', href: '#reviews' },
  { id: 'contact', label: 'CONTACT US', href: '#contact' },
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
        if (entry && entry.isIntersecting) {
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
              onClick={(e) => handleNavClick(e, '/#home')}
            >
              <img
                src={mandloiLogo}
                alt="Mandloi Energy Logo"
                className="footer-brand-logo"
                width="220"
                height="72"
                loading="lazy"
                decoding="async"
              />
            </a>

            <p className="footer-brand-description">
              Delivering reliable, high-performance solar energy solutions across residential, commercial, industrial and agricultural sectors in Madhya Pradesh.
            </p>
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

        {/* Bottom Bar: Copyright & Developer Credit */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-content">
            <p className="footer-copyright-text">
              © 2026 Mandloi Energy. All Rights Reserved.
            </p>
            <p className="footer-developer-credit">
              <span className="dev-credit-label">Designed &amp; Developed by </span>
              <span className="dev-credit-name">Muskan Patel</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
