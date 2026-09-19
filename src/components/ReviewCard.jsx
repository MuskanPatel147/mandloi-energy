import React, { useRef, memo } from 'react';
import { QuoteCyanIcon, StarFilledIcon } from './ReviewsIcons';

function ReviewCardComponent({ review, widthStyle, isCenter = false, isAnimating = false }) {
  const { name, location, rating = 5, text, category, source = 'Customer Feedback' } = review;
  const cardRef = useRef(null);
  const rafId = useRef(null);

  // Desktop 3D Cursor Tilt Interaction (Max ±2.5 deg)
  const handleMouseMove = (e) => {
    if (!cardRef.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.innerWidth < 1024) {
      return;
    }
    if (rafId.current) return;

    const clientX = e.clientX;
    const clientY = e.clientY;

    rafId.current = requestAnimationFrame(() => {
      rafId.current = null;
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
      const y = (clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
      const rotY = (x * 5).toFixed(2); // Max ±2.5 deg
      const rotX = (-y * 5).toFixed(2); // Max ±2.5 deg

      cardRef.current.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
    });
  };

  const handleMouseLeave = () => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
    if (!cardRef.current) return;
    cardRef.current.style.transform = '';
  };

  return (
    <article
      ref={cardRef}
      className={`review-card ${isCenter ? 'is-center-card' : ''} ${isAnimating ? 'animating-in' : ''}`}
      style={widthStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label={`Review by ${name} from ${location}`}
    >
      {/* Moving Ambient Glass Spotlight Shimmer */}
      <div className="review-card-spotlight" aria-hidden="true" />

      {/* Top Header: Cyan Quote Icon + Star Rating Reveal */}
      <div className="review-card-header">
        <div className="review-quote-icon" aria-hidden="true">
          <QuoteCyanIcon size={22} />
        </div>
        <div className="review-stars-row" aria-label={`${rating} out of 5 stars`}>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className="review-star-item"
              style={{ '--star-idx': star }}
            >
              <StarFilledIcon
                size={15}
                color={star <= rating ? '#ffa028' : 'rgba(255, 255, 255, 0.2)'}
              />
            </span>
          ))}
        </div>
      </div>

      {/* Review Text */}
      <blockquote className="review-card-body">
        &ldquo;{text}&rdquo;
      </blockquote>

      {/* Thin Cyan/Dark Divider */}
      <div className="review-card-divider" aria-hidden="true" />

      {/* Card Footer: Mask/Wipe Reveal for Name & Location */}
      <div className="review-card-footer">
        <div className="review-author-info">
          <span className="review-author-name">{name}</span>
          <span className="review-author-location">{location}</span>
        </div>
        <div className="review-source-badge">
          <span className="review-source-dot" aria-hidden="true" />
          <span>{category || source}</span>
        </div>
      </div>
    </article>
  );
}

export default memo(ReviewCardComponent);
