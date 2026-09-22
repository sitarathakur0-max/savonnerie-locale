import { useEffect } from 'react';
import { PageId } from '../types';

interface PageSEOProps {
  page: PageId;
}

const SEO_DATA: Record<PageId, { title: string; description: string }> = {
  home: {
    title: 'Savonnerie Locale | Handmade Soaps & Body Care in Marseille',
    description: 'Handmade soaps, scented products and everyday personal-care creations from a small artisan soap maker located at 33 Rue Paradis in Marseille.'
  },
  soaps: {
    title: 'Soaps & Body Care | Savonnerie Locale Marseille',
    description: 'Explore handmade soaps, scented products, and everyday personal-care creations crafted by Savonnerie Locale in Marseille, France.'
  },
  craft: {
    title: 'Artisan Craft & Philosophy | Savonnerie Locale',
    description: 'Discover the handmade identity, mindful attention to detail, and local craftsmanship of Savonnerie Locale in Marseille.'
  },
  about: {
    title: 'About Our Workshop | Savonnerie Locale Marseille',
    description: 'Learn about Savonnerie Locale, a small artisan soap maker producing handmade soaps and personal-care items at 33 Rue Paradis, Marseille.'
  },
  faq: {
    title: 'Frequently Asked Questions | Savonnerie Locale',
    description: 'Find answers regarding our handmade soaps, scented products, everyday personal-care items, and contacting Savonnerie Locale.'
  },
  contact: {
    title: 'Contact Savonnerie Locale | 33 Rue Paradis Marseille',
    description: 'Get in touch with Savonnerie Locale at 33 Rue Paradis, 13006 Marseille or call +33 4 91 38 62 17 for enquiries about our artisan creations.'
  }
};

export const PageSEO: React.FC<PageSEOProps> = ({ page }) => {
  useEffect(() => {
    const meta = SEO_DATA[page] || SEO_DATA.home;
    document.title = meta.title;

    let descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute('content', meta.description);
    }

    let ogTitleMeta = document.querySelector('meta[property="og:title"]');
    if (ogTitleMeta) {
      ogTitleMeta.setAttribute('content', meta.title);
    }

    let ogDescMeta = document.querySelector('meta[property="og:description"]');
    if (ogDescMeta) {
      ogDescMeta.setAttribute('content', meta.description);
    }
  }, [page]);

  return null;
};
