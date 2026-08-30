import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
