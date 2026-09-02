import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyMandloi from '../components/WhyMandloi';
import AboutSection from '../components/AboutSection';
import Solutions from '../components/Solutions';
import ProcessSection from '../components/ProcessSection';
import ProjectsSection from '../components/ProjectsSection';
import ReviewsSection from '../components/ReviewsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { WhatsappFilledIcon } from '../components/Icons';

export default function Home() {
  return (
    <div className="site-wrapper home-page-wrapper">
      {/* 1. Global Header with navigation */}
      <Navbar activePage="home" />

      {/* 2. Main Sequential Narrative Flow */}
      <main id="main-content">
        {/* 1. Home / Hero */}
        <Hero />

        {/* 2. Why Mandloi Energy */}
        <WhyMandloi />

        {/* 3. About Us */}
        <AboutSection />

        {/* 4. Solutions */}
        <Solutions />

        {/* 5. How It Works / Process */}
        <ProcessSection />

        {/* 6. Projects */}
        <ProjectsSection />

        {/* 7. Reviews */}
        <ReviewsSection />

        {/* 8. Contact Us */}
        <ContactSection />
      </main>

      {/* 10. Global Site Footer (Appears only after the full sequence) */}
      <Footer />

      {/* Floating WhatsApp Quick Action */}
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
