import { 
  Building2, 
  Plane, 
  FileText, 
  UserCheck, 
  Briefcase, 
  MapPin, 
  CreditCard,
  Calendar,
  Users
} from 'lucide-react';
import { Service, Package, Testimonial, FAQ, Hotel, Guide } from './types';

export const NAV_LINKS = [
  { name: 'Umrah Packages', href: '#' },
  { name: 'Hajj Packages', href: '#', active: true },
  { name: 'Hotel', href: '#' },
  { name: 'Transport', href: '#' },
  { name: 'Ziarath', href: '#' },
  { name: 'Guide', href: '#' },
  { name: 'Visa', href: '#' },
  { name: 'Group Flight', href: '#' },
  { name: 'Blog', href: '#' },
  { name: 'Contact', href: '#' },
];

export const SERVICES: Service[] = [
  { id: 1, title: 'Umrah', icon: Building2 },
  { id: 2, title: 'Hajj', icon: Users },
  { id: 3, title: 'Hotels', icon: Building2 },
  { id: 4, title: 'Flights', icon: Plane },
  { id: 5, title: 'Visa', icon: FileText },
  { id: 6, title: 'Guide', icon: UserCheck },
];

export const OFFERS: Package[] = [
  {
    id: 1,
    title: '15 Days Umrah Package',
    description: 'Premium hotel near Masjid al-Haram with best rates',
    price: '₹85,000',
    oldPrice: '₹1,05,000',
    image: 'https://picsum.photos/400/300?random=1',
    days: 15,
    type: 'premium'
  },
  {
    id: 2,
    title: '15 Days Umrah Package',
    description: 'Premium hotel near Masjid al-Haram with best rates',
    price: '₹85,000',
    oldPrice: '₹1,05,000',
    image: 'https://picsum.photos/400/300?random=2',
    days: 15,
    type: 'standard'
  },
  {
    id: 3,
    title: '15 Days Umrah Package',
    description: 'Premium hotel near Masjid al-Haram with best rates',
    price: '₹85,000',
    oldPrice: '₹1,05,000',
    image: 'https://picsum.photos/400/300?random=3',
    days: 15,
    type: 'premium'
  },
];

export const FEATURED_PACKAGES: Package[] = [
  {
    id: 101,
    title: 'Deluxe Umrah Package',
    description: '5 Star Hotels',
    price: '₹1,20,000',
    image: 'https://picsum.photos/600/400?random=4',
    days: 7,
    type: 'premium',
    tags: ['5 Star Hotels']
  },
  {
    id: 102,
    title: 'Budget Umrah Package',
    description: '3 Star Hotels',
    price: '₹65,000',
    image: 'https://picsum.photos/600/400?random=5',
    days: 10,
    type: 'budget',
    tags: ['3 Star Hotels']
  }
];

export const HOTELS: Hotel[] = [
  {
    id: 1,
    name: 'Makkah Hotel Booking',
    rating: 8.0,
    reviews: 435,
    price: '₹1,999/day',
    image: 'https://picsum.photos/400/300?random=6',
    features: ['Breakfast Included', '5 star accommodation', 'Kitchen']
  },
  {
    id: 2,
    name: 'Makkah Hotel Booking',
    rating: 8.0,
    reviews: 435,
    price: '₹1,999/day',
    image: 'https://picsum.photos/400/300?random=7',
    features: ['Breakfast Included', '5 star accommodation', 'Kitchen']
  },
  {
    id: 3,
    name: 'Makkah Hotel Booking',
    rating: 8.0,
    reviews: 435,
    price: '₹1,999/day',
    image: 'https://picsum.photos/400/300?random=8',
    features: ['Breakfast Included', '5 star accommodation', 'Kitchen']
  },
  {
    id: 4,
    name: 'Makkah Hotel Booking',
    rating: 8.0,
    reviews: 435,
    price: '₹1,999/day',
    image: 'https://picsum.photos/400/300?random=9',
    features: ['Breakfast Included', '5 star accommodation', 'Kitchen']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Annette Black',
    role: 'Chief Chairman',
    company: 'Netflix',
    companyColor: 'text-red-500',
    text: '"Golio is one of the BEST web designers I\'ve ever worked with professionally. I am a repeat customer who continues to work with Zakir because of his talent/skills, great customer service, work ethic, and attention to detail."',
    image: 'https://picsum.photos/100/100?random=10'
  },
  {
    id: 2,
    name: 'Annette Black',
    role: 'Chief Chairman',
    company: 'Google',
    companyColor: 'text-green-500',
    text: '"This guy is true professional and very experienced in migration and server configuration. He was able to complete my order in time and as per agreed scope. Highly recommend!"',
    image: 'https://picsum.photos/100/100?random=11'
  },
  {
    id: 3,
    name: 'Annette Black',
    role: 'CEO',
    company: 'Youtube',
    companyColor: 'text-red-600',
    text: '"Working with Golio was a great experience, understanding person, fast response time dose his work with honestly, experienced, a problem solver. Gives it it\'s all. I highly recommend him for providing beyond of high quality service."',
    image: 'https://picsum.photos/100/100?random=12'
  }
];

export const GUIDES: Guide[] = [
  {
    id: 1,
    title: 'Umrah Rituals Guide',
    description: 'Step-by-step guide for performing Umrah correctly',
    image: 'https://picsum.photos/400/300?random=13'
  },
  {
    id: 2,
    title: 'Packing Essentials',
    description: 'What to bring for a comfortable pilgrimage',
    image: 'https://picsum.photos/400/300?random=14'
  },
  {
    id: 3,
    title: 'Packing Essentials',
    description: 'What to bring for a comfortable pilgrimage',
    image: 'https://picsum.photos/400/300?random=15'
  },
  {
    id: 4,
    title: 'Packing Essentials',
    description: 'What to bring for a comfortable pilgrimage',
    image: 'https://picsum.photos/400/300?random=16'
  }
];

export const FAQS: FAQ[] = [
  { id: 1, question: 'Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullam', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  { id: 2, question: 'Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullam', answer: '' },
  { id: 3, question: 'Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullam', answer: '' },
  { id: 4, question: 'Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullam', answer: '' },
];
