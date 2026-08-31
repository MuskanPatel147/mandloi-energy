import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { WhatsappFilledIcon } from '../components/Icons';
import founderImg from '../assets/images/founder.jpg';

export default function About() {
  return (
    <div className="about-page-wrapper site-wrapper">
      <Navbar activePage="about" />

      <main className="about-main-section" id="about-content">
        <div className="about-ambient-top-left" aria-hidden="true" />
        <div className="about-ambient-bottom-right" aria-hidden="true" />

        <div className="container about-content-wrapper">
          <div className="about-hero-grid">
            <div className="about-text-col">
              <div className="about-badge-wrapper">
                <span className="about-badge">ABOUT US</span>
                <span className="about-badge-line" aria-hidden="true" />
              </div>

              <h1 className="about-heading">
                <span className="about-heading-line1">POWERING TODAY,</span>
                <span className="about-heading-line2">SUSTAINING TOMORROW</span>
              </h1>

              <div className="about-divider-bar" aria-hidden="true" />

              <p className="about-paragraph about-paragraph-1">
                At Mandloi Energy, we believe that solar energy is more than just reducing electricity bills—it's a long-term investment in your future. Our mission is to deliver reliable, high-performance solar solutions that provide{' '}
                <span className="highlight-cyan">
                  maximum savings, energy independence, and peace of mind.
                </span>
              </p>

              <p className="about-paragraph about-paragraph-2">
                We provide complete{' '}
                <span className="highlight-cyan">end-to-end solar solutions</span>—from site assessment and system design to installation, government subsidy assistance, net metering, and after-sales support.
              </p>

              <p className="about-paragraph about-paragraph-3">
                Every project is executed using{' '}
                <span className="highlight-cyan">premium-quality components</span> and industry best practices to ensure optimum performance, safety, and long-term reliability.
              </p>
            </div>

            <div className="about-visual-col">
              <div className="about-founder-container">
                <div className="about-founder-img-wrapper">
                  <img
                    src={founderImg}
                    alt="Ashish Mandloi, Founder & CEO" 
                    className="about-founder-img"
                  />
                </div>

                <div className="about-founder-badge-card">
                  <span className="about-founder-name">ASHISH MANDLOI</span>
                  <span className="about-founder-role">FOUNDER &amp; CEO</span>
                  <span className="about-founder-signature" aria-hidden="true">Ashish Mandloi</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-quote-card">
            <span className="about-quote-mark left" aria-hidden="true">“</span>
            <p className="about-quote-text">
              When you choose Mandloi Energy, you are choosing a{' '}
              <span className="highlight-cyan">trusted partner</span>, committed to delivering clean energy solutions that create{' '}
              <span className="highlight-orange">lasting value</span> for your home or business.
            </p>
            <span className="about-quote-mark right" aria-hidden="true">”</span>
          </div>
        </div>
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
