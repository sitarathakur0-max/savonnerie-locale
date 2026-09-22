import { BusinessInfo, FAQItem, NavItem } from '../types';

export const BUSINESS_DATA: BusinessInfo = {
  name: 'Savonnerie Locale',
  category: 'Handmade Soap & Body Care',
  address: {
    street: '33 Rue Paradis',
    city: 'Marseille',
    postalCode: '13006',
    country: 'France',
    full: '33 Rue Paradis, 13006 Marseille, France'
  },
  phone: {
    display: '+33 4 91 38 62 17',
    tel: '+33491386217'
  },
  rating: {
    score: 4.9,
    max: 5,
    reviewCount: 26,
    source: 'Google Reviews'
  },
  aboutBrief: 'Small artisan soap maker producing handmade soaps, scented products and everyday personal-care items.'
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'soaps', label: 'Soaps & Body Care', path: '/soaps-and-body-care' },
  { id: 'craft', label: 'Artisan Craft', path: '/artisan-craft' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'faq', label: 'FAQ', path: '/faq' },
  { id: 'contact', label: 'Contact', path: '/contact' }
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: 'handmade-soaps-nature',
    category: 'soaps',
    question: 'What characterizes the handmade soaps at Savonnerie Locale?',
    answer: 'Savonnerie Locale focuses on the artisan production of soap bars crafted with dedicated care and attention to detail. Each piece reflects the tactile character and unique identity of small-scale artisan soapmaking in Marseille.'
  },
  {
    id: 'scented-creations',
    category: 'scented',
    question: 'What types of scented products are produced?',
    answer: 'Savonnerie Locale crafts scented products and fragrant personal-care items designed to bring a pleasant sensory atmosphere to everyday self-care rituals. For specifics on current aromatic selections, please contact the workshop directly at +33 4 91 38 62 17.'
  },
  {
    id: 'everyday-personal-care',
    category: 'personal-care',
    question: 'What everyday personal-care items are available?',
    answer: 'In addition to traditional bar soaps, Savonnerie Locale produces a thoughtful range of everyday personal-care creations made in small artisan batches. Visitors are welcome to enquire about currently available items by calling or sending an enquiry.'
  },
  {
    id: 'soap-storage-care',
    category: 'soaps',
    question: 'How should handmade artisan soaps be kept between uses?',
    answer: 'To ensure your handmade soap bar lasts as long as possible, store it on a well-draining soap dish in a dry area between uses. Allowing air to circulate around the bar helps it dry thoroughly between daily routines.'
  },
  {
    id: 'location-visiting',
    category: 'contact',
    question: 'Where is Savonnerie Locale located in Marseille?',
    answer: 'Savonnerie Locale is located at 33 Rue Paradis, 13006 Marseille, France. If you would like to enquire about our current artisan creations or have questions before stopping by, please call us at +33 4 91 38 62 17.'
  },
  {
    id: 'general-enquiries',
    category: 'contact',
    question: 'How can I get in touch with Savonnerie Locale for specific inquiries?',
    answer: 'You can reach Savonnerie Locale by calling +33 4 91 38 62 17 or by completing the enquiry form on our Contact page. We are always glad to assist with questions about our handmade creations.'
  }
];
