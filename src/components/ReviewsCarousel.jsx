import React, { useState, useEffect, useRef } from 'react';
import ReviewCard from './ReviewCard';
import { ArrowLeftIcon, ArrowRightIcon } from './ReviewsIcons';

export default function ReviewsCarousel({ reviews = [] }) {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);
  const [direction, setDirection] = useState('next');
  const [isAnimating, setIsAnimating] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const touchStartX = useRef(null);
  const isDragging = useRef(false);
  const animTimeout = useRef(null);
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);

  const totalReviews = reviews.length;

  // Responsive visible count synchronization
  useEffect(() => {
    const updateVisibleCount = () => {
      const w = window.innerWidth;
      if (w < 768) {
        setVisibleCount(1);
      } else if (w < 1024) {
        setVisibleCount(2);
      } else if (w < 1280) {
        setVisibleCount(3);
      } else {
        setVisibleCount(5);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  // Trigger animation flag for synchronized entry effects
  const triggerAnimation = (dir) => {
    setDirection(dir);
    setIsAnimating(true);
    if (animTimeout.current) clearTimeout(animTimeout.current);
    animTimeout.current = setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  // Next Slide Action
  const handleNext = () => {
    triggerAnimation('next');
    setStartIndex((prev) => {
      const step = visibleCount;
      if (prev + step < totalReviews) {
        return prev + step;
      }
      return 0; // Wrap around to beginning
    });
  };

  // Previous Slide Action
  const handlePrev = () => {
    triggerAnimation('prev');
    setStartIndex((prev) => {
      const step = visibleCount;
      if (prev - step >= 0) {
        return prev - step;
      }
      const remainder = totalReviews % step;
      return totalReviews - (remainder === 0 ? step : remainder);
    });
  };

  // Keyboard navigation (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (document.activeElement && ['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        return;
      }
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [visibleCount, totalReviews]);

  const dragRaf = useRef(null);

  // Touch Swipe Gesture Physics
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    isDragging.current = true;
    setDragOffset(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current || touchStartX.current === null) return;
    const clientX = e.touches[0].clientX;
    if (dragRaf.current) return;

    dragRaf.current = requestAnimationFrame(() => {
      dragRaf.current = null;
      if (!isDragging.current || touchStartX.current === null) return;
      const diff = clientX - touchStartX.current;
      setDragOffset(diff * 0.45);
    });
  };

  const handleTouchEnd = () => {
    if (dragRaf.current) {
      cancelAnimationFrame(dragRaf.current);
      dragRaf.current = null;
    }
    if (!isDragging.current) return;
    if (Math.abs(dragOffset) > 25) {
      if (dragOffset < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    isDragging.current = false;
    touchStartX.current = null;
    setDragOffset(0);
  };

  // Magnetic Button Effect on Desktop
  const handleMagneticMove = (e, ref, factor = 3) => {
    if (window.innerWidth < 1024 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    const btn = ref.current;
    if (!btn) return;
    const clientX = e.clientX;
    const clientY = e.clientY;
    requestAnimationFrame(() => {
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      const x = clientX - (rect.left + rect.width / 2);
      const y = clientY - (rect.top + rect.height / 2);
      btn.style.transform = `translate(${x / factor}px, ${y / factor}px) scale(1.06)`;
    });
  };

  const handleMagneticLeave = (ref) => {
    const btn = ref.current;
    if (!btn) return;
    btn.style.transform = '';
  };

  // Identify center card index for depth prominence
  const centerRelativeIndex = Math.floor(visibleCount / 2);

  return (
    <div
      className="reviews-carousel-wrapper"
      role="region"
      aria-label="Distinctive 3D Customer Reviews Carousel"
    >
      {/* 3D Carousel Stage */}
      <div className="reviews-carousel-stage">
        {/* Left Arrow Button with Magnetic Interaction */}
        <button
          ref={leftArrowRef}
          type="button"
          className="reviews-carousel-arrow left"
          onClick={handlePrev}
          onMouseMove={(e) => handleMagneticMove(e, leftArrowRef, 3.5)}
          onMouseLeave={() => handleMagneticLeave(leftArrowRef)}
          aria-label="Previous customer reviews"
          title="Previous Reviews"
        >
          <span className="arrow-icon-shift left-shift">
            <ArrowLeftIcon size={20} />
          </span>
        </button>

        {/* Viewport with 3D Perspective */}
        <div
          className="reviews-cards-viewport edge-preview"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={`reviews-cards-track dir-${direction} ${isAnimating ? 'animating' : ''}`}
            style={{
              transform: `translateX(calc(-${startIndex} * ((100% + 16px) / ${visibleCount}) + ${dragOffset}px))`,
            }}
          >
            {reviews.map((review, idx) => {
              const isVisible = idx >= startIndex && idx < startIndex + visibleCount;
              const relativeIndex = isVisible ? idx - startIndex : -1;
              const isCenter = isVisible && relativeIndex === centerRelativeIndex;

              return (
                <ReviewCard
                  key={review.id}
                  review={review}
                  isCenter={isCenter}
                  isAnimating={isAnimating && isVisible}
                  widthStyle={{
                    flex: `0 0 calc((100% - ${(visibleCount - 1) * 16}px) / ${visibleCount})`,
                    '--card-index': isVisible ? relativeIndex : 0,
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Right Arrow Button with Magnetic Interaction */}
        <button
          ref={rightArrowRef}
          type="button"
          className="reviews-carousel-arrow right active-glow"
          onClick={handleNext}
          onMouseMove={(e) => handleMagneticMove(e, rightArrowRef, 3.5)}
          onMouseLeave={() => handleMagneticLeave(rightArrowRef)}
          aria-label="Next customer reviews"
          title="Next Reviews"
        >
          <span className="arrow-icon-shift right-shift">
            <ArrowRightIcon size={20} />
          </span>
        </button>
      </div>
    </div>
  );
}
