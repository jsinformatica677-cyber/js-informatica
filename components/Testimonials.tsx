import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS, BUSINESS_INFO } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 md:py-32 bg-black border-y border-zinc-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
             <h2 className="text-brand-500 font-bold uppercase tracking-widest text-xs mb-3">Depoimentos</h2>
            <h3 className="text-3xl md:text-4xl font-black text-white uppercase">Clientes Satisfeitos</h3>
          </div>
          <div className="flex items-center gap-4 bg-zinc-950 px-6 py-3 rounded-full shadow-sm border border-zinc-900">
            <div className="flex text-brand-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <span className="font-bold text-white text-lg">{BUSINESS_INFO.rating}</span>
            <span className="text-zinc-500 text-sm">({BUSINESS_INFO.reviewCount} avaliações)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review, index) => (
            <div key={index} className="bg-zinc-950 p-8 rounded-2xl shadow-lg border border-zinc-900 flex flex-col relative hover:border-zinc-800 transition-colors">
              <Quote className="absolute top-6 right-6 text-zinc-900" size={48} />
              
              <div className="flex items-center gap-1 mb-4 text-brand-500">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-zinc-300 mb-6 flex-1 italic relative z-10">
                {review.text ? `"${review.text}"` : "(Cliente avaliou com 5 estrelas)"}
              </p>
              
              <div className="flex items-center gap-3 pt-6 border-t border-zinc-900 mt-auto">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-brand-500 font-bold text-sm">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{review.author}</p>
                  <p className="text-xs text-zinc-600">{review.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};