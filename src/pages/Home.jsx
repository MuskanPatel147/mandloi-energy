import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Solutions from '../components/Solutions';
import WhyMandloi from '../components/WhyMandloi';
import ProcessSection from '../components/ProcessSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <WhyMandloi />
        <ProcessSection />
      </main>
      <Footer />
    </div>
  );
}
