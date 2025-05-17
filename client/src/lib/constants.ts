import { Service, Feature, Testimonial, GalleryImage } from './types';
import paesaggio from "../assets/images/paesaggio.jpeg";
import zampa from "../assets/images/zampa.jpeg";
import mia from "../assets/images/tartufi_1.jpeg";
import prato_1 from "../assets/images/prato_1.jpeg";

export const SERVICES: Service[] = [
  {
    id: 'daycare',
    title: 'Pet sitting',
    description: 'Assistenza continua al vostro animalietto con tanti momenti di gioco supervisionato.',
    icon: 'bone',
    features: [
      'Possiblità di socializzare con altri animali',
      "Uscite regolari all'aria aperta",
      'Attività stimolanti'
    ],
    price: 'From $35/day'
  },
  {
    id: 'overnight',
    title: 'Pernottamenti',
    description: "Cura in casa 24 ore su 24. Il tuo cane sarà trattato come un membro della nostra famiglia mentre sei via.",
    icon: 'moon',
    features: [
      'Comode sistemazioni per dormire',
      'Passeggiate serali e mattutine',
    ],
    price: 'From $65/night'
  },
  {
    id: 'walking',
    title: 'Passeggiate frequenti',
    description: 'Passeggite e attività fisica per scaricare le energie (rivolto soprattuto ai cani).',
    icon: 'walking',
    features: [
      'Acqua fresca durante le camminate',
      'Attività scelta in base alle esigenze',
    ],
    price: 'From $20/walk'
  },
  {
    id: 'esotic',
    title: 'Accogliamo anche animali insoliti',
    description: 'Accogliamo anche di buon grado ogni animale domestico come conigli, uccellini e altri piccoli animali.',
    icon: 'graduation-cap',
    features: [
      'Aggiornamenti giornalieri',
      'Spazzolatura/ pulizia del pelo',
      'Somminstrazione di eventuali farmaci'
    ],
    price: 'From $25/session'
  },
  {
    id: 'documentations',
    title: 'Foto e video',
    description: 'Aggiornamenti giornalieri sullo stato emotivo e fisico del vostro animale',
    icon: 'bath',
    features: [
      'Foto e video documentativi',
      'Aggiornamenti su eventuali comportamenti anomali',
    ],
    price: 'From $40/session'
  },
  {
    id: 'senior',
    title: 'Cura dei cani anziani',
    description: 'Cure speciali per i cani anziani, con particolare attenzione alle loro esigenze uniche e al loro comfort.',
    icon: 'heart',
    features: [
      'Routine di esercizi delicati',
      'Somministrazione di farmaci',
      'Biancheria da letto extra comfort'
    ],
    price: 'From $45/day'
  }
];

export const FEATURES: Feature[] = [
  {
    id: 'home',
    title: 'Ambiente Familiare',
    description: 'Il tuo cane soggiorna in una vera casa, non in un canile, così si sente a suo agio e rilassato.',
    icon: 'home'
  },
  {
    id: 'attention',
    title: 'Attenzione Personalizzata',
    description: 'Accogliamo pochi cani per volta, garantendo cure su misura per il tuo amico a quattro zampe.',
    icon: 'user-friends'
  },
  {
    id: 'updates',
    title: 'Aggiornamenti Quotidiani',
    description: 'Ricevi foto e aggiornamenti sulle attività e il benessere del tuo cane durante il soggiorno.',
    icon: 'camera'
  },
  {
    id: 'emergency',
    title: 'Pronti per le Emergenze',
    description: 'Formati in primo soccorso e in contatto con veterinari di fiducia per ogni evenienza.',
    icon: 'medkit'
  },
  {
    id: 'outdoor',
    title: 'Spazio all’Aperto',
    description: 'Giardino recintato e passeggiate regolari per garantire al tuo cane tanto movimento.',
    icon: 'paw'
  },
  {
    id: 'scheduling',
    title: 'Flessibilità negli Orari',
    description: 'Opzioni di prenotazione flessibili, anche per esigenze dell’ultimo minuto quando possibile.',
    icon: 'calendar-check'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    content: 'Sirya è fantastica con il mio cane adottato, molto ansioso! Di solito è nervoso con le persone nuove, ma ora adora andare all’asilo. Ricevo aggiornamenti durante la giornata e torna sempre a casa felice e stanco.',
    author: {
      name: 'Sarah J.',
      title: 'Proprietaria di Max',
      avatar: 'https://randomuser.me/api/portraits/women/23.jpg'
    },
    rating: 5
  },
  {
    id: '2',
    content: 'Usiamo il servizio di pensione notturna quando viaggiamo, e il nostro Golden Retriever è sempre entusiasta di rivedere Sirya. L’ambiente familiare è molto meno stressante rispetto a un canile tradizionale, e le foto quotidiane ci fanno stare tranquilli.',
    author: {
      name: 'Michael T.',
      title: 'Proprietario di Bailey',
      avatar: 'https://randomuser.me/api/portraits/men/42.jpg'
    },
    rating: 5
  },
  {
    id: '3',
    content: 'Il mio cane anziano ha bisogno di farmaci e cure particolari, e avevo timore a lasciarlo. Sirya è stata meravigliosa: segue la sua routine con precisione e gli dà tutte le attenzioni di cui ha bisogno. Si vede che ama davvero ogni cane.',
    author: {
      name: 'Elena R.',
      title: 'Proprietaria di Buddy',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
    },
    rating: 4.5
  },
  {
    id: '4',
    content: 'Usiamo il servizio di asilo tre volte a settimana e i nostri cuccioli sono migliorati tantissimo nel comportamento! Sirya include l’addestramento nella giornata, e stanno imparando le buone maniere divertendosi.',
    author: {
      name: 'David & Jane K.',
      title: 'Proprietari di Rosie & Rex',
      avatar: 'https://randomuser.me/api/portraits/men/31.jpg'
    },
    rating: 5
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: '1',
    src: paesaggio,
    alt: 'Happy dog playing in yard'
  },
  {
    id: '2',
    src: zampa,
    alt: 'Dogs resting together'
  },
  {
    id: '3',
    src: prato_1,
    alt: 'Dog enjoying playtime'
  },
  {
    id: '4',
    src: mia,
    alt: 'Dog getting treats'
  },
];

export const SERVICE_OPTIONS = [
  { value: '', label: 'Seleziona un servizio' },
  { value: 'daycare', label: 'Asilo diurno' },
  { value: 'overnight', label: 'Pernottamento' },
  { value: 'walking', label: 'Servizio passeggiate' },
  { value: 'training', label: 'Addestramento base' },
  { value: 'grooming', label: 'Toelettatura' },
  { value: 'senior', label: 'Cura per cani anziani' }
];

