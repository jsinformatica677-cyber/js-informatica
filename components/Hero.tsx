import React from 'react';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export const Hero: React.FC = () => {
  const handleWhatsappClick = () => {
    const phoneNumber = BUSINESS_INFO.phone.replace(/\D/g, '');
    const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento.");
    window.open(`https://wa.me/55${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 bg-black relative overflow-hidden">
      {/* Background Effects - Very Subtle for Pure Black look */}
      <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-brand-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="flex-1 space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-brand-400 text-xs font-bold uppercase tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Aberto Agora em Horizonte
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight uppercase">
              Assistência <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-yellow-200">Técnica</span> Especializada
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed">
              Conserto de celulares, computadores e eletrônicos. Rapidez, confiança e o melhor preço da região.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-brand-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <button 
                  onClick={handleWhatsappClick}
                  className="relative inline-flex items-center justify-center px-8 py-4 bg-brand-500 text-black font-black uppercase tracking-wide rounded-xl hover:bg-brand-400 transition-all shadow-lg hover:shadow-brand-500/20 transform hover:-translate-y-1 cursor-pointer w-full sm:w-auto"
                >
                  Faça seu Orçamento
                  <MessageCircle className="ml-2" size={20} />
                </button>
              </div>
              
              <a 
                href="#services" 
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border border-zinc-800 font-bold rounded-xl hover:bg-zinc-900 transition-all hover:border-zinc-700 w-full sm:w-auto"
              >
                Nossos Serviços
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4 text-sm font-medium text-zinc-500">
               <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-brand-500" />
                  <span>Orçamento Grátis</span>
               </div>
               <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-brand-500" />
                  <span>Peças Originais</span>
               </div>
            </div>
          </div>

          <div className="flex-1 relative w-full max-w-lg lg:max-w-none flex justify-center">
            <div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border-2 border-zinc-900 bg-zinc-950 shadow-2xl shadow-brand-900/10 group">
                {/* 
                  CORREÇÃO: Imagem reduzida para 600px e qualidade 40 para economizar dados
                */}
                <img 
                  src="https://images.unsplash.com/photo-1591196153041-faf3a11500dc?auto=format&fit=crop&q=40&w=600&fm=webp" 
                  alt="JS Informatica Personagem e Logo" 
                  width="600"
                  height="450"
                  fetchPriority="high"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                
                {/* Overlay to simulate the darker vibe */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

                <div className="absolute bottom-6 left-6 right-6">
                   <div className="bg-black/80 backdrop-blur-sm p-4 rounded-xl border border-zinc-800">
                      <p className="text-brand-500 font-bold text-xs uppercase mb-1">Destaque</p>
                      <p className="text-white font-bold">Conserto de PCs e Notebooks</p>
                   </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};