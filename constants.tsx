import { Smartphone, Monitor, Cpu, Battery, Layers, RefreshCcw } from 'lucide-react';
import { Review, ServiceItem, Product } from './types';

export const BUSINESS_INFO = {
  name: "Js Informatica",
  address: "R. Romao Ramalho da Silva, 981 - Alto da Estrela",
  cityState: "Horizonte - CE",
  zip: "62885-145",
  phone: "(85) 99429-4527",
  mapsLink: "https://maps.app.goo.gl/VG66P9", 
  hours: "Aberto ⋅ Fecha 19:00",
  rating: 5.0,
  reviewCount: 4
};

export const REVIEWS: Review[] = [
  {
    author: "Wilivania Maia",
    rating: 5,
    text: "Uma excelente empresa, meu Celular ficou como veio de fábrica, ameii",
    time: "3 semanas atrás"
  },
  {
    author: "Rejane Cruz",
    rating: 5,
    text: "Atendimento sem igual, o melhor de Horizonte e Pacajus",
    time: "2 semanas atrás"
  },
  {
    author: "Lalado Melado",
    rating: 5,
    text: "", // Text was empty in input
    time: "4 dias atrás"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Capinhas e Películas",
    description: "Proteção completa com variedade de capas e películas de vidro/hidrogel.",
    icon: Layers
  },
  {
    title: "Conserto de PCs e Notebooks",
    description: "Formatação, limpeza e reparo de hardware para computadores.",
    icon: Monitor
  },
  {
    title: "Reparo em Placa",
    description: "Microsoldagem avançada para recuperar placas de celulares e notebooks.",
    icon: Cpu
  },
  {
    title: "Troca de Bateria",
    description: "Substituição de bateria com qualidade para maior autonomia.",
    icon: Battery
  },
  {
    title: "Troca de Tela",
    description: "Telas originais e premium com garantia e instalação rápida.",
    icon: Smartphone
  },
  {
    title: "Restauração de Sistema",
    description: "Recuperação de software para Android e iOS (iPhone).",
    icon: RefreshCcw
  }
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Carregador Turbo 20W',
    price: 89.90,
    category: 'Acessórios',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=400',
    popular: true
  },
  {
    id: '2',
    name: 'Cabo USB-C Reforçado',
    price: 35.00,
    category: 'Cabos',
    image: 'https://images.unsplash.com/photo-1595925925055-75e15647f0d0?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '3',
    name: 'Película de Hidrogel',
    price: 50.00,
    category: 'Proteção',
    image: 'https://images.unsplash.com/photo-1627560879685-6ba837b79417?auto=format&fit=crop&q=80&w=400',
    popular: true
  },
  {
    id: '4',
    name: 'Fone Bluetooth JS-Pro',
    price: 120.00,
    category: 'Áudio',
    image: 'https://images.unsplash.com/photo-1572569028738-411a29639581?auto=format&fit=crop&q=80&w=400',
    popular: true
  },
  {
    id: '5',
    name: 'Capa Anti-Impacto Transparente',
    price: 45.00,
    category: 'Proteção',
    image: 'https://images.unsplash.com/photo-1603539564883-2070f7d5c2d3?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: '6',
    name: 'Mouse Gamer RGB',
    price: 95.00,
    category: 'Periféricos',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&q=80&w=400'
  }
];