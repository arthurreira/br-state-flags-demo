export const generateSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Brazil State Explorer",
    "description": "Interactive explorer for Brazilian states with flags, maps, and detailed data",
    "url": "https://br-state-flags-demo.arthurreira.dev",
    "applicationCategory": "EducationalApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Person",
      "name": "Arthur ferreira",
      "url": "https://arthurreira.dev"
    },
    "creator": {
      "@type": "Person",
      "name": "Arthur ferreira"
    },
    "datePublished": "2025-01-22",
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "permissions": "free"
  };
  return schema;
};

export const injectSchema = () => {
  const schema = generateSchema();
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.innerHTML = JSON.stringify(schema);
  document.head.appendChild(script);
};

export const updatePageMeta = (title: string, description: string, image?: string) => {
  // Update title
  document.title = `${title} | Brazil State Explorer`;

  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", description);
  }

  // Update OG tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute("content", title);
  }

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute("content", description);
  }

  if (image) {
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute("content", image);
    }

    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute("content", image);
    }
  }
};
