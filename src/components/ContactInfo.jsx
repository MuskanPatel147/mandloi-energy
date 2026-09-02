import React from 'react';
import { PhoneIcon, WhatsappIcon, MailIcon, GlobeIcon, InstagramIcon } from './Icons';

export default function ContactInfo() {
  return (
    <aside className="contact-info-panel" aria-label="Company Contact Details">
      {/* Header */}
      <div className="contact-info-header">
        <span className="contact-info-badge">DIRECT COMMUNICATION</span>
        <h2 className="contact-info-title">Get In Touch</h2>
        <p className="contact-info-description">
          Connect directly with our solar consultation and technical team for inquiries, site assessments, subsidy assistance, or turnkey system installations.
        </p>
      </div>

      {/* Verified Contact Details List */}
      <div className="contact-info-list" role="list">
        {/* 1. Phone */}
        <a
          href="tel:+919669555550"
          className="contact-info-card"
          role="listitem"
          aria-label="Call Mandloi Energy at +91 9669-555550"
        >
          <div className="contact-info-icon-box phone-icon-box" aria-hidden="true">
            <PhoneIcon size={20} />
          </div>
          <div className="contact-info-text-group">
            <span className="contact-info-label">PHONE / CALL</span>
            <span className="contact-info-value">+91 9669-555550</span>
          </div>
        </a>

        {/* 2. WhatsApp */}
        <a
          href="https://wa.me/919669555550"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-info-card"
          role="listitem"
          aria-label="Chat with Mandloi Energy on WhatsApp"
        >
          <div className="contact-info-icon-box whatsapp-icon-box" aria-hidden="true">
            <WhatsappIcon size={20} />
          </div>
          <div className="contact-info-text-group">
            <span className="contact-info-label">WHATSAPP CHAT</span>
            <span className="contact-info-value">+91 9669-555550</span>
          </div>
        </a>

        {/* 3. Email */}
        <a
          href="mailto:mandloienergy@gmail.com"
          className="contact-info-card"
          role="listitem"
          aria-label="Send email to mandloienergy@gmail.com"
        >
          <div className="contact-info-icon-box email-icon-box" aria-hidden="true">
            <MailIcon size={20} />
          </div>
          <div className="contact-info-text-group">
            <span className="contact-info-label">EMAIL ADDRESS</span>
            <span className="contact-info-value">mandloienergy@gmail.com</span>
          </div>
        </a>

        {/* 4. Website */}
        <a
          href="https://mandloienergy.in"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-info-card"
          role="listitem"
          aria-label="Visit official website mandloienergy.in"
        >
          <div className="contact-info-icon-box web-icon-box" aria-hidden="true">
            <GlobeIcon size={20} />
          </div>
          <div className="contact-info-text-group">
            <span className="contact-info-label">OFFICIAL WEBSITE</span>
            <span className="contact-info-value">mandloienergy.in</span>
          </div>
        </a>

        {/* 5. Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-info-card"
          role="listitem"
          aria-label="Follow Mandloi Energy on Instagram"
        >
          <div className="contact-info-icon-box insta-icon-box" aria-hidden="true">
            <InstagramIcon size={20} />
          </div>
          <div className="contact-info-text-group">
            <span className="contact-info-label">INSTAGRAM</span>
            <span className="contact-info-value">Mandloi Energy</span>
          </div>
        </a>
      </div>

      {/* Assurance Note */}
      <div className="contact-assurance-card">
        <span className="contact-assurance-dot" aria-hidden="true" />
        <p className="contact-assurance-text">
          Our team provides complete end-to-end solar solutions across residential, commercial, industrial, and agricultural sectors.
        </p>
      </div>
    </aside>
  );
}
