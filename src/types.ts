export type PageId = 'home' | 'soaps' | 'craft' | 'about' | 'faq' | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
  path: string;
}

export interface BusinessInfo {
  name: string;
  category: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
    full: string;
  };
  phone: {
    display: string;
    tel: string;
  };
  rating: {
    score: number;
    max: number;
    reviewCount: number;
    source: string;
  };
  aboutBrief: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'soaps' | 'scented' | 'personal-care' | 'contact';
}

export interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}
