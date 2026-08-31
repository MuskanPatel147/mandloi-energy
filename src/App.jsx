import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Quote from './pages/Quote';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import { navigateTo } from './utils/navigation';

export function getCanonicalRoute() {
  const path = (window.location.pathname || '').replace(/\/+$/, '').toLowerCase();
  const hash = (window.location.hash || '').toLowerCase();

  if (path === '/projects' || hash === '#projects') {
    return 'projects';
  }
  if (path === '/contact' || hash === '#contact') {
    return 'contact';
  }
  if (path === '/reviews' || hash === '#reviews') {
    return 'reviews';
  }
  if (path === '/request-a-quote' || hash === '#request-a-quote' || hash === '#quote') {
    return 'quote';
  }
  if (path === '/about' || hash === '#about') {
    return 'about';
  }
  return 'home';
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(getCanonicalRoute);

  useEffect(() => {
    // 1. Synchronize route on any popstate / hashchange / custom event
    const syncRoute = () => {
      const nextRoute = getCanonicalRoute();
      setCurrentRoute(nextRoute);

      const hash = window.location.hash;
      if (nextRoute === 'home' && hash && hash !== '#home' && hash !== '#') {
        setTimeout(() => {
          const target = document.querySelector(hash);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }, 80);
      } else {
        window.scrollTo(0, 0);
      }
    };

    // 2. Global link click delegator to catch any <a> tag navigation
    const handleGlobalClick = (e) => {
      const anchor = e.target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      // Ignore external links or target="_blank"
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

      // Ignore modifier clicks
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

  if (currentRoute === 'projects') {
    return <Projects />;
  }

  if (currentRoute === 'contact') {
    return <Contact />;
  }

  if (currentRoute === 'about') {
    return <About />;
  }

  if (currentRoute === 'quote') {
    return <Quote />;
  }

  if (currentRoute === 'reviews') {
    return <Reviews />;
  }

  return <Home />;
}
