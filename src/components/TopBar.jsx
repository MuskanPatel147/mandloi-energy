import React from 'react';
import { PhoneIcon, WhatsappIcon, MailIcon, GlobeIcon, InstagramIcon } from './Icons';

export default function TopBar() {
  return (
    <div className="top-contact-bar" aria-label="Contact Information Bar">
      <div className="container top-contact-container">
        {/* Left: Contact Info Items */}
        <div className="top-contact-left">
          <a href="tel:+919669555550" className="top-contact-item">
            <PhoneIcon size={14} className="top-icon" />
            <span>+91 9669-555550</span>
          </a>

          <a href="https://wa.me/919669555550" target="_blank" rel="noopener noreferrer" className="top-contact-item top-whatsapp-item">
            <WhatsappIcon size={14} className="top-icon top-whatsapp-icon" />
            <span>+91 9669-555550</span>
          </a>

          <a href="mailto:mandloienergy@gmail.com" className="top-contact-item">
            <MailIcon size={14} className="top-icon" />
            <span>mandloienergy@gmail.com</span>
          </a>

          <a href="https://mandloienergy.in" target="_blank" rel="noopener noreferrer" className="top-contact-item">
            <GlobeIcon size={14} className="top-icon" />
            <span>mandloienergy.in</span>
          </a>
        </div>

        {/* Right: Social Follow */}
        <div className="top-contact-right">
          <span className="top-follow-label">Follow us:</span>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="top-social-link">
            <InstagramIcon size={14} className="top-icon" />
            <span>Mandloi Energy</span>
          </a>
        </div>
      </div>
    </div>
  );
}
