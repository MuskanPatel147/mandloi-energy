import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactInfo from '../components/ContactInfo';
import QuoteForm from '../components/QuoteForm';
import { WhatsappFilledIcon } from '../components/Icons';

export default function Contact() {
  return (
    <div className="contact-page-wrapper site-wrapper">
      {/* ================================================================
          Contact Exclusive Atmosphere:
          Solar Engineering, Photovoltaic Grid Matrix & Directional Solar Glow
          (Distinct from Reviews Page: Technical PV grid, Solar gold directional rays)
          ================================================================ */}
      <div className="contact-solar-engineering-backdrop" aria-hidden="true">
        {/* Layer 1: Directional Solar Sun Glow concentrated at Top-Right (Behind Quote Form) */}
        <div className="contact-solar-beam-sun" />

        {/* Layer 2: Technical Cyan Blueprint Accent on the Left */}
        <div className="contact-technical-glow-left" />

        {/* Layer 3: Photovoltaic Cell Grid & Engineering Drafting Matrix */}
        <div className="contact-pv-grid-layer" />

        {/* Layer 4: Engineering Technical Traces & Alignment Crosshairs */}
        <svg
          className="contact-blueprint-svg"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Angled Solar Wafer Busbars */}
          <line x1="750" y1="0" x2="1440" y2="690" stroke="rgba(255, 160, 40, 0.14)" strokeWidth="1" />
          <line x1="920" y1="0" x2="1440" y2="520" stroke="rgba(255, 160, 40, 0.18)" strokeWidth="1.2" strokeDasharray="8 6" />
          <line x1="1100" y1="0" x2="1440" y2="340" stroke="rgba(255, 160, 40, 0.22)" strokeWidth="1.5" />
          
          {/* Engineering Blueprint Alignment Crosshairs */}
          <path d="M120 180 h12 M126 174 v12" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.2" />
          <path d="M680 140 h12 M686 134 v12" stroke="rgba(56, 189, 248, 0.4)" strokeWidth="1.2" />
          <path d="M1320 200 h12 M1326 194 v12" stroke="rgba(255, 160, 40, 0.5)" strokeWidth="1.2" />
          <path d="M1260 740 h12 M1266 734 v12" stroke="rgba(255, 160, 40, 0.4)" strokeWidth="1.2" />
          <path d="M160 760 h12 M166 754 v12" stroke="rgba(56, 189, 248, 0.35)" strokeWidth="1.2" />
        </svg>

        {/* Layer 5: Dark Vignette Overlay */}
        <div className="contact-vignette-overlay" />
      </div>

      {/* 1. Global Navbar with CONTACT US active */}
      <Navbar activePage="contact" />

      {/* 2. Main Contact Section */}
      <main className="contact-main-section" id="contact-main">
        <div className="container contact-content-wrapper">
          {/* Header Block */}
          <div className="contact-hero-header animate-fade-in">
            <div className="contact-badge-wrapper">
              <span className="contact-badge">CONTACT US</span>
              <span className="contact-badge-line" aria-hidden="true" />
            </div>

            <h1 className="contact-main-heading">
              <span className="contact-heading-line1">Let's Talk Solar</span>
            </h1>

            <p className="contact-hero-subtitle">
              Have a solar requirement or want to know more about the right solution for your property? Get in touch with Mandloi Energy.
            </p>
          </div>

          {/* 2-Column Contact Grid */}
          <div className="contact-layout-grid">
            {/* Left Column: Direct Contact Info */}
            <div className="contact-col-left">
              <ContactInfo />
            </div>

            {/* Right Column: Request a Quote Form */}
            <div className="contact-col-right">
              <QuoteForm />
            </div>
          </div>
        </div>
      </main>

      {/* Global Site Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Contact Action */}
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
