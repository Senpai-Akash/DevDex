import React from "react";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://devdex.app/#organization",
        "name": "DevDex",
        "url": "https://devdex.app",
        "logo": "https://devdex.app/logo.png",
        "sameAs": [
          "https://github.com/Senpai-Akash"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://devdex.app/#website",
        "url": "https://devdex.app",
        "name": "DevDex",
        "publisher": { "@id": "https://devdex.app/#organization" },
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://devdex.app/?q={search_term_string}",
          "query-input": "search_term_string"
        }
      },
      {
        "@type": "WebApplication",
        "name": "DevDex",
        "url": "https://devdex.app",
        "applicationCategory": "Developer Tool",
        "operatingSystem": "All",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "featureList": "GitHub profile analysis, collectable developer cards, rarity tiers, gamified stats"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}