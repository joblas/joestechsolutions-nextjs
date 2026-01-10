// SEO Components
export {
  OrganizationSchema,
  WebsiteSchema,
  ServiceSchema,
  FAQSchema,
  SoftwareProductSchema,
  BreadcrumbSchema
} from './JsonLd';

// Event tracking utilities (GA script loaded via @next/third-parties in layout.tsx)
export {
  trackEvent,
  trackDiscoveryCall,
  trackContactSubmit,
  trackCheckoutStart,
  trackCheckoutComplete
} from './GoogleAnalytics';
