import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({
  title,
  description,
  keywords,
  image,
  type = 'website',
  noindex = false,
}) => {
  const location = useLocation();
  const siteUrl = 'https://marketinq.az';
  const currentUrl = `${siteUrl}${location.pathname}`;
  
  const defaultTitle = 'Marketinq Akademiyası';
  const defaultDescription = 'Azərbaycanın aparıcı marketinq təhsil mərkəzi. Digital marketinq, brend menecmenti, marketinq analitikası və daha çox sahədə peşəkar təlim proqramları.';
  const defaultKeywords = 'marketinq, digital marketinq, marketinq kursu, marketinq təlimi, brend menecmenti, SMM, SEO, Azərbaycan, Bakı, marketinq akademiyası';
  const defaultImage = `${siteUrl}/og-image.jpg`;

  const seoTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || defaultKeywords;
  const seoImage = image || defaultImage;

  // Structured Data for Organization
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    'name': 'Marketinq Akademiyası',
    'alternateName': 'Marketing Academy Azerbaijan',
    'url': siteUrl,
    'logo': `${siteUrl}/logo.png`,
    'description': defaultDescription,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Nizami küç. 203B',
      'addressLocality': 'Bakı',
      'addressCountry': 'AZ'
    },
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+994-50-123-45-67',
      'contactType': 'customer service',
      'availableLanguage': ['Azerbaijani', 'English']
    },
    'sameAs': [
      'https://facebook.com/marketinqakademiyasi',
      'https://instagram.com/marketinqakademiyasi',
      'https://linkedin.com/company/marketinqakademiyasi'
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <link rel="canonical" href={currentUrl} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:site_name" content="Marketinq Akademiyası" />
      <meta property="og:locale" content="az_AZ" />
      <meta property="og:locale:alternate" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      
      {/* Additional Meta */}
      <meta name="author" content="Marketinq Akademiyası" />
      <meta name="publisher" content="Marketinq Akademiyası" />
      <meta name="geo.region" content="AZ" />
      <meta name="geo.placename" content="Bakı" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;