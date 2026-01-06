import { LucideIcon } from 'lucide-react';

export interface Package {
  id: number;
  title: string;
  description: string;
  price: string;
  oldPrice?: string;
  image: string;
  days: number;
  tags?: string[];
  type: 'standard' | 'premium' | 'budget';
}

export interface Service {
  id: number;
  title: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  companyColor: string;
  text: string;
  image: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface Hotel {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  price: string;
  image: string;
  features: string[];
}

export interface Guide {
  id: number;
  title: string;
  description: string;
  image: string;
}