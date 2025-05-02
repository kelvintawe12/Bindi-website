export interface Service {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  link: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  position: string;
  image?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  metrics?: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  slug: string;
}

export interface ImpactStory {
  id: string;
  title: string;
  content: string;
  image: string;
  quote: string;
  type?: 'Beneficiary' | 'Donor';
  community?: 'Musanze' | 'Kibeho';
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export interface Partner {
  id: string;
  name: string;
  description: string;
  logo: string;
  website: string;
}

export interface Resource {
  title: string;
  description: string;
  link: string;
  category: 'Worksheets' | 'Guides' | 'Activities' | 'Templates';
  image: string;
  type: 'PDF' | 'Video' | 'Guide' | 'Worksheet';
}






