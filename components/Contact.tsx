import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative pt-20 pb-10 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* About & Contact Info */}
          <div>
            <div id="about" className="mb-12">
               <h2 className="text-brand-500 font-bold uppercase tracking-widest text-xs mb-3">Sobre Nós</h2>
              <h3 className="text-3xl font-black text-white mb-4 uppercase">JS Informática</h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                A <strong>Js Informatica</strong> é referência em assistência técnica na região de Horizonte e Pacajus. 
                Com uma equipe dedicada e especializada, garantimos que seu dispositivo volte a funcionar como novo. 
                Prezamos pela transparência, agilidade e qualidade em cada serviço realizado.
              </p>
              <ul className="space-y-3">
                {['Atendimento personalizado', 'Orçamento justo', 'Garantia no serviço', 'Técnicos especializados'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-zinc-300">
                        <CheckCircle2 size={20} className="text-brand-500" />
                        <span>{item}</span>
                    </li>
                ))}
              </ul>
            </div>

            <div className="bg-zinc-950 p-8 rounded-2xl border border-zinc-900">
              <h4 className="text-xl font-bold text-white mb-6">Informações de Contato</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-black p-3 rounded-full text-brand-500 border border-zinc-800 shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Endereço</p>
                    <p className="text-zinc-400">{BUSINESS_INFO.address}</p>
                    <p className="text-zinc-400">{BUSINESS_INFO.cityState}, {BUSINESS_INFO.zip}</p>
                    <a 
                      href={BUSINESS_INFO.mapsLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-brand-500 font-medium text-sm mt-1 hover:underline"
                    >
                      Ver no Google Maps <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-black p-3 rounded-full text-brand-500 border border-zinc-800 shadow-sm">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Horário de Funcionamento</p>
                    <p className="text-zinc-400">{BUSINESS_INFO.hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-black p-3 rounded-full text-brand-500 border border-zinc-800 shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Telefone / WhatsApp</p>
                    <p className="text-zinc-400">{BUSINESS_INFO.phone}</p>
                    <a 
                        href={`https://wa.me/55${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 mt-2 bg-brand-500 text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-brand-400 transition-colors"
                    >
                        Chamar no WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-full min-h-[400px] lg:min-h-[600px] bg-zinc-950 rounded-2xl overflow-hidden shadow-lg border border-zinc-900 relative">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.678077536979!2d-38.4988719!3d-4.0853765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b8b7882260273d%3A0xe53c528f80456184!2sJs%20Informatica!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                title="Localização Js Informatica"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};