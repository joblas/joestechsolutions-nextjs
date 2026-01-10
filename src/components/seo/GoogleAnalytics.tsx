'use client';

import Script from 'next/script';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      {/* Setup script MUST run before gtag.js loads */}
      <Script
        id="google-analytics-setup"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      {/* Load gtag.js after setup is complete */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
    </>
  );
}

// Utility function to track events
export function trackEvent(eventName: string, parameters?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, parameters);
  }
}

// Pre-defined conversion events
export const trackDiscoveryCall = () => trackEvent('schedule_discovery_call', { method: 'calendly' });
export const trackContactSubmit = () => trackEvent('contact_form_submit');
export const trackCheckoutStart = () => trackEvent('begin_checkout', { item_name: 'Private AI Setup' });
export const trackCheckoutComplete = () => trackEvent('purchase', { item_name: 'Private AI Setup' });

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}
