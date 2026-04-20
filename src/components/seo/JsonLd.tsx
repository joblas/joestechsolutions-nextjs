// JSON-LD Structured Data Components for SEO
// These schemas help search engines understand your site and enable rich snippets
// Note: dangerouslySetInnerHTML is safe here because we only serialize our own static data

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    "name": "Joe's Tech Solutions",
    "alternateName": "JTS",
    "url": "https://calendly.com/joe-joestechsolutions/30min",
    "logo": "https://calendly.com/joe-joestechsolutions/30min/logo-main.png",
    "image": "https://calendly.com/joe-joestechsolutions/30min/logo-main.png",
    "description": "Private AI setup, AI agent systems, and custom automation for SMBs. Joe's Tech Solutions deploys private AI on your hardware — no cloud fees, no data leaks.",
    "founder": {
      "@type": "Person",
      "name": "Joe Blas",
      "jobTitle": "Founder & Lead Developer"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Diego",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 32.7157,
      "longitude": -117.1611
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "email": "joe@joestechsolutions.com",
      "availableLanguage": "English"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "knowsAbout": [
      "Private AI Infrastructure",
      "AI Agent Systems",
      "Workflow Automation",
      "Mobile App Development",
      "Web Development",
      "React Native",
      "Next.js",
      "Custom Software Development"
    ],
    "priceRange": "$$$"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Joe's Tech Solutions",
    "url": "https://calendly.com/joe-joestechsolutions/30min",
    "description": "Mobile apps, web platforms, and private AI infrastructure for ambitious SMBs.",
    "publisher": {
      "@type": "Organization",
      "name": "Joe's Tech Solutions"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Service schemas for individual services
export function ServiceSchema({
  name,
  description,
  priceRange
}: {
  name: string;
  description: string;
  priceRange: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": name,
    "provider": {
      "@type": "Organization",
      "name": "Joe's Tech Solutions",
      "url": "https://calendly.com/joe-joestechsolutions/30min"
    },
    "name": name,
    "description": description,
    "areaServed": "United States",
    "offers": {
      "@type": "Offer",
      "priceRange": priceRange
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// FAQ Schema for pages with FAQs (like Private AI Setup)
export function FAQSchema({
  faqs
}: {
  faqs: Array<{ question: string; answer: string }>
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Software Application Schema (for Private AI Setup product)
export function SoftwareProductSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Private AI Setup",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Cloud-based",
    "description": "Private AI infrastructure setup for businesses — keep your data secure while using GPT-4 level AI capabilities. Local setup, cloud server, or fully managed with automation.",
    "offers": {
      "@type": "Offer",
      "price": "199.00",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "provider": {
      "@type": "Organization",
      "name": "Joe's Tech Solutions"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Article Schema for blog posts
export function ArticleSchema({
  headline,
  description,
  datePublished,
  dateModified,
  image,
  url,
  keywords,
}: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
  keywords?: string[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "image": image || "https://calendly.com/joe-joestechsolutions/30min/logo-main.png",
    "url": url,
    "author": {
      "@type": "Person",
      "name": "Joe Blas",
      "url": "https://calendly.com/joe-joestechsolutions/30min"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Joe's Tech Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://calendly.com/joe-joestechsolutions/30min/logo-main.png"
      }
    },
    ...(keywords && keywords.length > 0 ? { "keywords": keywords.join(", ") } : {})
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Breadcrumb Schema
export function BreadcrumbSchema({
  items
}: {
  items: Array<{ name: string; url: string }>
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
