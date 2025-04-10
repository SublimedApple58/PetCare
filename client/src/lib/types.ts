export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  content: string;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
  rating: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  dogInfo: string;
  message: string;
  consent: boolean;
}
