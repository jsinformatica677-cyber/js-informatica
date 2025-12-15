import React from 'react';
import { BUSINESS_INFO } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-zinc-400 py-12 border-t border-zinc-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h5 className="text-white font-bold text-xl mb-2">{BUSINESS_INFO.name}</h5>
            <p className="text-sm text-zinc-600 max-w-xs">{BUSINESS_INFO.address}, {BUSINESS_INFO.cityState}</p>
          </div>
          
          <div className="flex gap-6 text-sm font-medium">
            <a href="#home" className="hover:text-brand-500 transition-colors">Início</a>
            <a href="#services" className="hover:text-brand-500 transition-colors">Serviços</a>
            <a href="#contact" className="hover:text-brand-500 transition-colors">Contato</a>
          </div>

          <div className="text-center md:text-right text-xs text-zinc-700">
            <p>&copy; {new Date().getFullYear()} Js Informatica.</p>
            <p>Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};