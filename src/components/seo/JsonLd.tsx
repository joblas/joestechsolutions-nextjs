// JSON-LD Structured Data Components for SEO
// These schemas help search engines understand your site and enable rich snippets
// Note: dangerouslySetInnerHTML is safe here because we only serialize our own static data

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Joe's Tech Solutions",
    "alternateName": "JTS",
    "url": "https://joestechsolutions.com",
    "logo": "https://joestechsolutions.com/logo-main.png",
    "description": "Boutique development studio specializing in mobile apps, web platforms, and private AI infrastructure for ambitious SMBs.",
    "founder": {
      "@type": "Person",
      "name": "Joe Blas",
      "jobTitle": "Founder & Lead Developer"
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
      "Mobile App Development",
      "Web Development",
      "React Native",
      "Next.js",
      "Private AI Infrastructure",
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
    "url": "https://joestechsolutions.com",
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
      "url": "https://joestechsolutions.com"
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
    "description": "Private AI infrastructure setup for businesses - keep your data secure while using GPT-4 level AI capabilities",
    "offers": {
      "@type": "Offer",
      "price": "150.00",
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
