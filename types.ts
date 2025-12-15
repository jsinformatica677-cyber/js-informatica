import React from 'react';

export interface Review {
  author: string;
  rating: number;
  text: string;
  time: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  popular?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}