/**
 * Analytics utility for tracking page views and events
 * Integrates with Beam Analytics and SEO updates
 */

declare global {
  interface Window {
    beam?: {
      track: (event: string, data?: Record<string, unknown>) => void;
      pageview: (path: string) => void;
    };
  }
}

/**
 * Track a page view
 * @param path - The path/route being viewed
 * @param title - Optional page title for SEO
 */
export const trackPageView = (path: string, title?: string) => {
  // Update document title if provided
  if (title) {
    document.title = `${title} | Brazil State Explorer`;
  }

  // Track with Beam Analytics if available
  if (typeof window !== 'undefined' && window.beam) {
    try {
      window.beam.pageview(path);
    } catch (error) {
      if (import.meta.env.DEV) {
        console.warn('[Analytics] Failed to track pageview:', error);
      }
    }
  }
};

/**
 * Track a custom event
 * @param eventName - Name of the event
 * @param data - Optional event data
 */
export const trackEvent = (eventName: string, data?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.beam) {
    try {
      window.beam.track(eventName, data);
    } catch (error) {
      if (import.meta.env.DEV) {
        console.warn('[Analytics] Failed to track event:', error);
      }
    }
  }
};

/**
 * Check if analytics is loaded and ready
 */
export const isAnalyticsReady = (): boolean => {
  return typeof window !== 'undefined' && typeof window.beam !== 'undefined';
};

/**
 * Wait for analytics to be ready, then execute callback
 */
export const waitForAnalytics = (callback: () => void, maxWait = 5000) => {
  if (isAnalyticsReady()) {
    callback();
    return;
  }

  const startTime = Date.now();
  const checkInterval = setInterval(() => {
    if (isAnalyticsReady()) {
      clearInterval(checkInterval);
      callback();
    } else if (Date.now() - startTime > maxWait) {
      clearInterval(checkInterval);
      if (import.meta.env.DEV) {
        console.warn('[Analytics] Timeout waiting for analytics to load');
      }
    }
  }, 100);
};

