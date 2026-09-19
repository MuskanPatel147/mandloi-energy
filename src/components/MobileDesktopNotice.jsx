import React, { useState, useEffect } from 'react';

/**
 * MobileDesktopNotice Component
 * Mobile-only informational overlay recommending Desktop Site mode.
 * Remembers dismissal in sessionStorage for the duration of the browsing session.
 * Does not show on desktop/laptop (> 768px) or when Desktop Site mode is active.
 */
export default function MobileDesktopNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if previously dismissed in this session
    try {
      const isDismissed = sessionStorage.getItem('mandloi-mobile-warning-dismissed');
      if (isDismissed === 'true') {
        return;
      }
    } catch {
      // Ignore storage access issues
    }

    // Check viewport breakpoint (only mobile screens <= 768px)
    const checkViewport = () => {
      if (typeof window === 'undefined') return;
      // If viewport width is > 768px (Desktop, Laptop, or Desktop Site mode enabled), do not show
      if (window.innerWidth <= 768) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    checkViewport();
    window.addEventListener('resize', checkViewport, { passive: true });

    return () => {
      window.removeEventListener('resize', checkViewport);
    };
  }, []);

  // Handle ESC key dismiss for accessibility
  useEffect(() => {
    if (!isVisible) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleDismiss();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVisible]);

  const handleDismiss = () => {
    try {
      sessionStorage.setItem('mandloi-mobile-warning-dismissed', 'true');
    } catch {
      // Ignore storage errors
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="mobile-desktop-notice-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-notice-title"
    >
      {/* Background Dimming Backdrop */}
      <div
        className="mobile-desktop-notice-backdrop"
        onClick={handleDismiss}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="mobile-desktop-notice-card">
        {/* Brand Header */}
        <div className="mobile-notice-brand">
          <span className="mobile-notice-brand-tag">MANDLOI ENERGY</span>
        </div>

        {/* Title */}
        <h2 className="mobile-notice-title" id="mobile-notice-title">
          BEST VIEWED ON DESKTOP
        </h2>

        {/* Subtitle / Description */}
        <p className="mobile-notice-desc">
          For the complete Mandloi Energy website experience, we recommend viewing this website in Desktop Site mode.
        </p>

        {/* Step Instructions */}
        <div className="mobile-notice-instructions">
          <span className="mobile-notice-instructions-label">To enable:</span>

          <div className="mobile-notice-browser-row">
            <span className="mobile-notice-browser-name">Chrome:</span>
            <span className="mobile-notice-browser-steps">
              <span className="mobile-notice-icon-char">⋮</span> → Desktop site → <span className="mobile-notice-highlight">ON</span>
            </span>
          </div>

          <div className="mobile-notice-browser-row">
            <span className="mobile-notice-browser-name">Safari:</span>
            <span className="mobile-notice-browser-steps">
              <span className="mobile-notice-icon-char">aA</span> → Request Desktop Website
            </span>
          </div>
        </div>

        {/* Action Button */}
        <button
          type="button"
          className="mobile-notice-continue-btn"
          onClick={handleDismiss}
        >
          CONTINUE ON MOBILE
        </button>
      </div>
    </div>
  );
}
