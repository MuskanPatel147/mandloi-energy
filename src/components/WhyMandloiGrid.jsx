import React from 'react';
import WhyMandloiCard from './WhyMandloiCard';
import { WHY_MANDLOI_CARDS } from '../data/whyMandloiData';

/**
 * WhyMandloiGrid Component
 * Renders the 3x3 grid of 9 feature cards
 */
export default function WhyMandloiGrid() {
  return (
    <div className="why-mandloi-grid">
      {WHY_MANDLOI_CARDS.map((card, index) => (
        <WhyMandloiCard key={card.id} card={card} index={index} />
      ))}
    </div>
  );
}
