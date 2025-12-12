import { Helmet } from 'react-helmet-async';
import { FAQ } from '../data/faqs';

// Organization schema - used site-wide
export const OrganizationSchema: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FairyAI',
    url: 'https://fairyai.co.uk',
    logo: 'https://fairyai.co.uk/images/splash-logo-transparent.png',
    sameAs: [
      'https://apps.apple.com/app/fairyai/id6737482489'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@fairyai.co.uk',
      contactType: 'customer service'
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// MobileApplication schema - used on homepage
export const MobileApplicationSchema: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'FairyAI',
    operatingSystem: 'iOS, Android',
    applicationCategory: 'EntertainmentApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'GBP'
    },
    description: 'Create personalised AI bedtime stories where your child is the hero. Custom characters, narration, and original songs.',
    downloadUrl: 'https://apps.apple.com/app/fairyai/id6737482489',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '12'
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// FAQPage schema - used on pages with FAQs
interface FAQPageSchemaProps {
  faqs: FAQ[];
}

export const FAQPageSchema: React.FC<FAQPageSchemaProps> = ({ faqs }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
