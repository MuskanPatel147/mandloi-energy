/**
 * WebGL Capability and Performance Detection Utility
 * Guarantees graceful fallback if WebGL is disabled or unsupported.
 */

let _isWebGLSupported = null;

export function isWebGLAvailable() {
  if (_isWebGLSupported !== null) {
    return _isWebGLSupported;
  }

  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    _isWebGLSupported = Boolean(gl && gl instanceof WebGLRenderingContext);
  } catch {
    _isWebGLSupported = false;
  }

  return _isWebGLSupported;
}

export function prefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
