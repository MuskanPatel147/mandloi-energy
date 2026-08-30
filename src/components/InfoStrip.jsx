import React from 'react';
import { BankIcon, DiscountIcon, CardIcon, ShieldIcon } from './Icons';

const INFO_CARDS = [
  {
    icon: BankIcon,
    metric: '₹78,000',
    title: 'GOVT. SUBSIDY',
    desc: 'Available',
  },
  {
    icon: DiscountIcon,
    metric: '+₹5,000',
    title: 'FREEDOM SALE DISCOUNT',
    desc: 'Extra discount for you',
  },
  {
    icon: CardIcon,
    metric: '0% EMI',
    title: 'FROM ₹1,466/MONTH',
    desc: 'Affordable monthly payment',
  },
  {
    icon: ShieldIcon,
    metric: '25+',
    title: 'YEARS CLEAN ENERGY',
    desc: 'Reliable & sustainable future',
  },
];

export default function InfoStrip() {
  return (
    <section className="info-strip-section" aria-label="Key Highlights">
      <div className="info-strip-container">
        {INFO_CARDS.map((card) => {
          const IconComp = card.icon;
          return (
            <div className="info-strip-item" key={card.title}>
              <div className="info-icon-badge" aria-hidden="true">
                <IconComp size={22} className="info-svg-icon" />
              </div>
              <div className="info-text-col">
                <div className="info-card-metric">{card.metric}</div>
                <div className="info-card-title">{card.title}</div>
                <div className="info-card-desc">{card.desc}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
