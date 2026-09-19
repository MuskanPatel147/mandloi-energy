import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Quote from './pages/Quote';
import MobileDesktopNotice from './components/MobileDesktopNotice';
import { navigateTo } from './utils/navigation';

export function getCanonicalRoute() {
  const path = (window.location.pathname || '').replace(/\/+$/, '').toLowerCase();
  const hash = (window.location.hash || '').toLowerCase();

  if (path === '/request-a-quote' || hash === '#request-a-quote' || hash === '#quote') {
    return 'quote';
  }
  return 'home';
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(getCanonicalRoute);

  useEffect(() => {
    const syncRoute = () => {
      const nextRoute = getCanonicalRoute();
      setCurrentRoute(nextRoute);

      const path = (window.location.pathname || '').replace(/\/+$/, '').toLowerCase();
      const hash = window.location.hash;

      if (nextRoute === 'home') {
        let targetId = hash;
        if (!targetId) {
          if (path === '/projects') targetId = '#projects';
          else if (path === '/about') targetId = '#about';
          else if (path === '/reviews') targetId = '#reviews';
          else if (path === '/contact') targetId = '#contact';
          else if (path === '/why-mandloi') targetId = '#why-mandloi';
          else if (path === '/solutions') targetId = '#solutions';
          else if (path === '/how-it-works') targetId = '#how-it-works';
        }

        if (targetId && targetId !== '#home' && targetId !== '#') {
          setTimeout(() => {
            const target = document.querySelector(targetId);
            if (target) {
              target.scrollIntoView({ behavior: 'smooth' });
            }
          }, 90);
        }
      } else {
        window.scrollTo(0, 0);
      }
    };

    const handleGlobalClick = (e) => {
      const anchor = e.target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      if (
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('tel:') ||
        href.startsWith('mailto:') ||
        anchor.target === '_blank' ||
        anchor.hasAttribute('download')
      ) {
        return;
      }

      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
        return;
      }

      e.preventDefault();
      navigateTo(href);
    };

    window.addEventListener('popstate', syncRoute);
    window.addEventListener('hashchange', syncRoute);
    window.addEventListener('mandloi-navigate', syncRoute);
    document.addEventListener('click', handleGlobalClick);

    return () => {
      window.removeEventListener('popstate', syncRoute);
      window.removeEventListener('hashchange', syncRoute);
      window.removeEventListener('mandloi-navigate', syncRoute);
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  return (
    <>
      <MobileDesktopNotice />
      {currentRoute === 'quote' ? <Quote /> : <Home />}
    </>
  );
}
