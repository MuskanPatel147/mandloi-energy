import React from 'react';
import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import { WhatsappFilledIcon } from '../components/Icons';

export default function About() {
  return (
    <div className="about-page-wrapper site-wrapper">
      <Navbar activePage="about" />

      <main id="about-content">
        <AboutSection />
      </main>

      <Footer />

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
