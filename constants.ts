import { 
  Building2, 
  Plane, 
  FileText, 
  UserCheck, 
  Briefcase, 
  MapPin, 
  CreditCard,
  Calendar,
  Users,
  User,
  Hammer,
  Trophy,
  Sparkles
} from 'lucide-react';
import { Service, Package, Testimonial, FAQ, Hotel, Guide } from './types';

export const NAV_LINKS = [
  { name: 'Umrah Packages', href: '#', id: 'umrah' },
  { name: 'Hajj Packages', href: '#', id: 'hajj' },
  { name: 'Hotel', href: '#', id: 'hotel' },
  { name: 'Transport', href: '#', id: 'transport' },
  { name: 'Ziarath', href: '#', id: 'ziarath' },
  { name: 'Guide', href: '#', id: 'guide' },
  { name: 'Visa', href: '#', id: 'visa' },
  { name: 'Group Flight', href: '#', id: 'flight' },
  { name: 'Blog', href: '#', id: 'blog' },
  { name: 'Contact', href: '#', id: 'contact' },
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

export const PACKAGE_SELECTION_OPTIONS = [
  {
    id: 'group',
    title: 'Group Umrah Packages',
    description: 'Join fellow pilgrims in comprehensive group packages with shared experiences and guided tours',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1571896349842-68c894913d3b?q=80&w=2670&auto=format&fit=crop', // Poolside hotel
    includes: ['Shared accommodations', '24/7 group coordinator', 'Group transportation', 'Group prayers', 'Professional guide', 'Ziarath tours included'],
    price: '₹70,000',
    priceLabel: 'Starting from',
    duration: '15-20 Days',
    durationLabel: 'Fixed',
    benefits: [
      { text: 'Cost-effective pricing', icon: 'star' },
      { text: 'Social spiritual experience', icon: 'star' },
      { text: 'Expert guidance', icon: 'star' },
      { text: 'Safety in numbers', icon: 'star' }
    ],
    buttonText: 'Explore Group Packages',
    buttonColor: 'bg-primary'
  },
  {
    id: 'independent',
    title: 'Short Independent Package',
    description: 'Pre-curated short Umrah packages based on popular customer plans. Enjoy flexibility and independence with handpicked options.',
    icon: User,
    badge: 'MOST POPULAR',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2670&auto=format&fit=crop', // Another Hotel
    includes: ['Private accommodations', 'Flexible itinerary', 'Custom meal plans', 'Private transportation', 'Personalized services'],
    price: '₹62,000',
    priceLabel: 'Starting from',
    duration: '3-10 Days',
    durationLabel: 'Fixed',
    benefits: [
      { text: 'Complete flexibility', icon: 'star' },
      { text: 'Privacy and comfort', icon: 'star' },
      { text: 'Curated for you', icon: 'star' },
      { text: 'Personal attention', icon: 'star' }
    ],
    buttonText: 'Explore Short Packages',
    buttonColor: 'bg-primary'
  },
  {
    id: 'build',
    title: 'Build Your Own Umrah Package',
    description: 'Create a fully personalized Umrah journey. Select your preferred flights, hotels in Makkah & Madinah, visa, transport, ziarath tours, guides, and more—all in one place.',
    icon: Hammer,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2670&auto=format&fit=crop', // Luxury Hotel
    includes: ['Choose flights', 'Select hotels in Makkah & Madinah', 'Visa processing', 'Transport options', 'Ziarath tours', 'Guided or independent', 'Add-on services'],
    price: 'Fully Customizable',
    priceLabel: '',
    duration: 'Any Duration',
    durationLabel: 'flexible',
    benefits: [
      { text: 'Ultimate flexibility', icon: 'star' },
      { text: 'Tailored to your needs', icon: 'star' },
      { text: 'Mix & match services', icon: 'star' },
      { text: 'Transparent pricing', icon: 'star' }
    ],
    buttonText: 'Start Building Your Package',
    buttonColor: 'bg-primary'
  }
];

export const WHY_CHOOSE_STATS = [
  {
    id: 1,
    title: '99% Success Rate',
    description: 'Guaranteed visa approval and seamless travel experience',
    icon: Trophy,
    bgColor: 'bg-[#eef4f6]'
  },
  {
    id: 2,
    title: '1,000+ Pilgrims',
    description: 'Successfully served pilgrims from around the world',
    icon: Users,
    bgColor: 'bg-[#eef4f6]'
  },
  {
    id: 3,
    title: '5-Star Service',
    description: 'Premium service with 7 days/week support throughout your journey',
    icon: Sparkles,
    bgColor: 'bg-[#eef4f6]'
  }
];