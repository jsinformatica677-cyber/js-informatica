import React from 'react';
import { ExternalLink } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../constants';

export const Services: React.FC = () => {
  const handleServiceClick = (serviceTitle: string) => {
    const phoneNumber = BUSINESS_INFO.phone.replace(/\D/g, '');
    const message = encodeURIComponent(`Olá, vi no site e gostaria de um orçamento para: ${serviceTitle}`);
    const url = `https://wa.me/55${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-black relative overflow-hidden border-t border-zinc-900">
        {/* Decorator */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-brand-500 font-bold uppercase tracking-widest text-xs mb-3">O que fazemos</h2>
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase">Serviços Especializados</h3>
          <p className="text-zinc-500 text-lg">
            Selecione um serviço abaixo para solicitar um orçamento via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                onClick={() => handleServiceClick(service.title)}
                className="group p-8 rounded-2xl bg-zinc-950 border border-zinc-900 hover:border-brand-500 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer relative"
                role="button"
                aria-label={`Solicitar orçamento para ${service.title}`}
              >
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-brand-500">
                   <ExternalLink size={20} />
                </div>

                <div className="w-20 h-20 bg-brand-500 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-brand-500/20 group-hover:scale-110 group-hover:shadow-brand-500/40 transition-all duration-300">
                  <Icon size={36} className="text-black" />
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-brand-500 transition-colors">{service.title}</h4>
                <p className="text-zinc-500 leading-relaxed group-hover:text-zinc-400">{service.description}</p>
                
                <div className="mt-6 inline-block text-xs font-bold uppercase tracking-wider text-zinc-600 group-hover:text-brand-500 transition-colors border-b border-transparent group-hover:border-brand-500 pb-0.5">
                  Solicitar Orçamento
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};