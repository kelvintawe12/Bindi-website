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