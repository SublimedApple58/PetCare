import { Service, Feature, Testimonial, GalleryImage } from './types';

export const SERVICES: Service[] = [
  {
    id: 'daycare',
    title: 'Day Care',
    description: 'Full-day care for your dog with supervised playtime, meals, and rest periods. Perfect for work days.',
    icon: 'bone',
    features: [
      '8-10 hours of supervised care',
      'Regular outdoor breaks',
      'Lunch and snacks provided'
    ],
    price: 'From $35/day'
  },
  {
    id: 'overnight',
    title: 'Overnight Stays',
    description: '24-hour care in a home environment. Your dog will be treated as part of our family while you\'re away.',
    icon: 'moon',
    features: [
      'Comfortable sleeping arrangements',
      'Evening and morning walks',
      'All meals included'
    ],
    price: 'From $65/night'
  },
  {
    id: 'walking',
    title: 'Walking Service',
    description: 'Regular walking sessions for dogs who need exercise while you\'re at work or away for short periods.',
    icon: 'walking',
    features: [
      '30 or 60-minute options',
      'Safe routes and parks',
      'Fresh water provided'
    ],
    price: 'From $20/walk'
  },
  {
    id: 'training',
    title: 'Basic Training',
    description: 'Reinforce positive behaviors and basic commands during your dog\'s stay with us.',
    icon: 'graduation-cap',
    features: [
      'Sit, stay, and come commands',
      'Leash manners',
      'Positive reinforcement methods'
    ],
    price: 'From $25/session'
  },
  {
    id: 'grooming',
    title: 'Grooming Services',
    description: 'Keep your dog looking and feeling their best with our basic grooming services during their stay.',
    icon: 'bath',
    features: [
      'Bathing and blow dry',
      'Nail trimming',
      'Ear cleaning'
    ],
    price: 'From $40/session'
  },
  {
    id: 'senior',
    title: 'Senior Dog Care',
    description: 'Special care for elderly dogs with extra attention to their unique needs and comfort.',
    icon: 'heart',
    features: [
      'Gentle exercise routines',
      'Medication administration',
      'Extra comfort bedding'
    ],
    price: 'From $45/day'
  }
];

export const FEATURES: Feature[] = [
  {
    id: 'home',
    title: 'Home Environment',
    description: 'Your dog stays in a real home, not a kennel, ensuring they feel comfortable and relaxed.',
    icon: 'home'
  },
  {
    id: 'attention',
    title: 'Personal Attention',
    description: 'We take limited dogs at once, guaranteeing your pet receives personalized care.',
    icon: 'user-friends'
  },
  {
    id: 'updates',
    title: 'Daily Updates',
    description: 'Receive photos and updates about your dog\'s activities and wellbeing throughout their stay.',
    icon: 'camera'
  },
  {
    id: 'emergency',
    title: 'Emergency Prepared',
    description: 'First aid trained with established veterinary contacts in case of any health concerns.',
    icon: 'medkit'
  },
  {
    id: 'outdoor',
    title: 'Outdoor Access',
    description: 'Secure fenced yard and regular walks to ensure your dog gets plenty of exercise.',
    icon: 'paw'
  },
  {
    id: 'scheduling',
    title: 'Flexible Scheduling',
    description: 'Accommodating booking options for regular care or last-minute needs when possible.',
    icon: 'calendar-check'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    content: 'Sirya is amazing with my anxious rescue dog! He\'s usually nervous around new people, but he absolutely loves going to daycare now. I get updates throughout the day, and he always comes home happy and tired.',
    author: {
      name: 'Sarah J.',
      title: 'Owner of Max',
      avatar: 'https://randomuser.me/api/portraits/women/23.jpg'
    },
    rating: 5
  },
  {
    id: '2',
    content: 'We use the overnight boarding service when we travel, and our Golden Retriever is always so excited to see Sirya. The home environment is much less stressful than a traditional kennel, and the daily photo updates give us peace of mind.',
    author: {
      name: 'Michael T.',
      title: 'Owner of Bailey',
      avatar: 'https://randomuser.me/api/portraits/men/42.jpg'
    },
    rating: 5
  },
  {
    id: '3',
    content: 'My senior dog requires medication and special care, and I was worried about leaving him. Sirya has been wonderful, following his schedule precisely and giving him the extra attention he needs. It\'s clear she truly cares about every dog.',
    author: {
      name: 'Elena R.',
      title: 'Owner of Buddy',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
    },
    rating: 4.5
  },
  {
    id: '4',
    content: 'We use the daycare service three times a week, and our puppies have shown such improvement in their behavior! Sirya incorporates training into their day, and they\'re learning good manners while having fun.',
    author: {
      name: 'David & Jane K.',
      title: 'Owners of Rosie & Rex',
      avatar: 'https://randomuser.me/api/portraits/men/31.jpg'
    },
    rating: 5
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    alt: 'Happy dog playing in yard'
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1546975490-e8b92a360b24?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    alt: 'Dogs resting together'
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    alt: 'Dog enjoying playtime'
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    alt: 'Dog getting treats'
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    alt: 'Dogs on a walk'
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    alt: 'Dog with toys'
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    alt: 'Dog getting groomed'
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1560743641-3914f2c45636?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    alt: 'Senior dog resting'
  }
];

export const SERVICE_OPTIONS = [
  { value: '', label: 'Select a Service' },
  { value: 'daycare', label: 'Day Care' },
  { value: 'overnight', label: 'Overnight Stay' },
  { value: 'walking', label: 'Walking Service' },
  { value: 'training', label: 'Basic Training' },
  { value: 'grooming', label: 'Grooming' },
  { value: 'senior', label: 'Senior Dog Care' }
];
