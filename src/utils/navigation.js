/**
 * Unified Client-Side Navigation Engine for Mandloi Energy SPA
 */

export function navigateTo(url) {
  if (!url) return;

  // External URLs or protocols
  if (
    url.startsWith('http://') ||
    url.startsWith('https://') ||
    url.startsWith('tel:') ||
    url.startsWith('mailto:') ||
    url.startsWith('//')
  ) {
    window.location.href = url;
    return;
  }

  // Handle section anchors (e.g. #solutions, #why-mandloi, #how-it-works, #contact, #home)
  if (url.startsWith('#')) {
    const isHome = window.location.pathname === '/' || window.location.pathname === '';
    if (!isHome) {
      window.history.pushState({}, '', '/' + url);
    } else {
      window.history.pushState({}, '', url);
    }
    
    // Dispatch navigation events
    window.dispatchEvent(new CustomEvent('mandloi-navigate', { detail: { url } }));
    window.dispatchEvent(new PopStateEvent('popstate', { state: {} }));
    
    setTimeout(() => {
      const el = document.querySelector(url);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 60);
    return;
  }

  // Standard route transitions (e.g. /request-a-quote, /about, /)
  window.history.pushState({}, '', url);
  window.dispatchEvent(new CustomEvent('mandloi-navigate', { detail: { url } }));
  window.dispatchEvent(new PopStateEvent('popstate', { state: {} }));
  window.scrollTo({ top: 0, behavior: 'instant' });
}

export function handleNavClick(e, url) {
  // Allow default behavior for modifier clicks (e.g., cmd+click, ctrl+click, new tab)
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
    return;
  }
  e.preventDefault();
  navigateTo(url);
}
