import React from 'react';
import ContactInfo from './ContactInfo';
import QuoteForm from './QuoteForm';

export default function ContactSection() {
  return (
    <section className="contact-main-section" id="contact" aria-labelledby="contact-heading">
      <div className="container contact-content-wrapper">
        {/* Header Block */}
        <div className="contact-hero-header animate-fade-in">
          <div className="contact-badge-wrapper">
            <span className="contact-badge">CONTACT US</span>
            <span className="contact-badge-line" aria-hidden="true" />
          </div>

          <h2 className="contact-main-heading" id="contact-heading">
            <span className="contact-heading-line1">Let's Talk Solar</span>
          </h2>

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
    </section>
  );
}
