'use client';

import Script from 'next/script';

// Replace with your GA4 Measurement ID after creating it at https://analytics.google.com
// Format: G-XXXXXXXXXX
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

export function GoogleAnalytics() {
  // Don't render if no measurement ID is configured
  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  );
}

// Utility function to track events (for conversion tracking)
export function trackEvent(eventName: string, parameters?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', eventName, parameters);
  }
}

// Pre-defined conversion events
export const trackDiscoveryCall = () => trackEvent('schedule_discovery_call', { method: 'calendly' });
export const trackContactSubmit = () => trackEvent('contact_form_submit');
export const trackCheckoutStart = () => trackEvent('begin_checkout', { item_name: 'Private AI Setup' });
export const trackCheckoutComplete = () => trackEvent('purchase', { item_name: 'Private AI Setup' });
