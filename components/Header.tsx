import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart, onOpenSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Produtos', href: '#store' },
    { name: 'Avaliações', href: '#reviews' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md shadow-sm z-50 border-b border-zinc-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 hover:opacity-90 transition-opacity group">
            <div className="flex flex-col items-center leading-none">
              <div className="flex items-center -space-x-1 relative">
                 <span className="text-4xl font-black text-white tracking-tighter drop-shadow-lg" style={{textShadow: '2px 2px 0px #333'}}>J</span>
                 <span className="text-4xl font-black text-brand-500 tracking-tighter drop-shadow-lg relative z-10" style={{textShadow: '2px 2px 0px #713f12'}}>S</span>
              </div>
              <span className="text-[10px] font-bold text-white tracking-[0.2em] uppercase mt-1 group-hover:text-brand-400 transition-colors">
                Informática
              </span>
            </div>
            <div className="hidden sm:flex flex-col border-l border-zinc-800 pl-3 ml-1">
              <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Assistência</span>
              <span className="text-xs uppercase tracking-widest text-brand-500 font-semibold">Técnica</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-400 hover:text-brand-400 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
            
            <div className="h-6 w-px bg-zinc-800 mx-2"></div>

            <button 
              onClick={onOpenSearch}
              className="text-zinc-400 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-full"
              aria-label="Buscar"
            >
              <Search size={20} />
            </button>

            <button 
              onClick={onOpenCart}
              className="relative text-zinc-400 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-full group"
              aria-label="Carrinho"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-500 text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            <a 
              href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
              className="bg-brand-500 text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-brand-400 transition-all shadow-md hover:shadow-brand-500/30 transform hover:-translate-y-0.5"
            >
              Ligar Agora
            </a>
          </nav>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 md:hidden">
             <button 
              onClick={onOpenSearch}
              className="text-zinc-400 hover:text-white"
            >
              <Search size={20} />
            </button>
             <button 
              onClick={onOpenCart}
              className="relative text-zinc-400 hover:text-white"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-500 text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              className="p-2 text-zinc-300 hover:bg-zinc-900 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div 
        className={`md:hidden absolute top-20 left-0 right-0 bg-black border-b border-zinc-900 shadow-xl transition-all duration-300 origin-top ${
          isMenuOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-0 invisible'
        }`}
      >
        <nav className="flex flex-col p-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-4 py-3 rounded-lg text-zinc-300 hover:bg-zinc-900 hover:text-brand-400 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};