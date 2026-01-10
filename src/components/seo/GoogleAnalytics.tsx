'use client';

// Event tracking utilities for Google Analytics
// The actual GA script is loaded via @next/third-parties/google in layout.tsx

export function trackEvent(eventName: string, parameters?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && 'gtag' in window && typeof window.gtag === 'function') {
    window.gtag('event', eventName, parameters);
  }
}

// Pre-defined conversion events
export const trackDiscoveryCall = () => trackEvent('schedule_discovery_call', { method: 'calendly' });
export const trackContactSubmit = () => trackEvent('contact_form_submit');
export const trackCheckoutStart = () => trackEvent('begin_checkout', { item_name: 'Private AI Setup' });
export const trackCheckoutComplete = () => trackEvent('purchase', { item_name: 'Private AI Setup' });

// Type declaration for gtag
declare global {
  interface Window {
    gtag?: (command: string, ...args: unknown[]) => void;
  }
}
