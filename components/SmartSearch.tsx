import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, ExternalLink } from 'lucide-react';
import { SERVICES, PRODUCTS } from '../constants';

interface SmartSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SmartSearch: React.FC<SmartSearchProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<{type: 'service' | 'product', title: string, subtitle: string, link: string}[]>([]);

  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase();
    const filteredServices = SERVICES.filter(s => 
        s.title.toLowerCase().includes(q) || s.description.toLowerCase().includes(q)
    ).map(s => ({
        type: 'service' as const,
        title: s.title,
        subtitle: 'Serviço Especializado',
        link: '#services'
    }));

    const filteredProducts = PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    ).map(p => ({
        type: 'product' as const,
        title: p.name,
        subtitle: `R$ ${p.price.toFixed(2)} - ${p.category}`,
        link: '#store'
    }));

    setResults([...filteredServices, ...filteredProducts]);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] bg-black/80 backdrop-blur-sm flex items-start justify-center pt-24 px-4" onClick={onClose}>
      <div 
        className="w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center p-4 border-b border-zinc-800">
            <Search className="text-brand-500 ml-2" size={24} />
            <input 
                type="text" 
                placeholder="Busque por serviços, produtos ou problemas..."
                className="flex-1 bg-transparent border-none outline-none text-white text-lg px-4 placeholder-zinc-600 h-10"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={onClose} className="p-2 hover:bg-zinc-900 rounded-full text-zinc-500 hover:text-white">
                <X size={20} />
            </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-2">
            {results.length > 0 ? (
                <div className="space-y-1">
                    {results.map((result, idx) => (
                        <a 
                            key={idx} 
                            href={result.link} 
                            onClick={onClose}
                            className="flex items-center justify-between p-3 hover:bg-zinc-900 rounded-xl group transition-colors"
                        >
                            <div>
                                <h4 className="text-white font-bold group-hover:text-brand-500 transition-colors">{result.title}</h4>
                                <p className="text-zinc-500 text-sm">{result.subtitle}</p>
                            </div>
                            <ArrowRight size={18} className="text-zinc-600 group-hover:text-brand-500" />
                        </a>
                    ))}
                </div>
            ) : query ? (
                <div className="p-8 text-center text-zinc-500">
                    <p>Nenhum resultado encontrado para "{query}"</p>
                    <p className="text-sm mt-2">Tente buscar por "tela", "bateria" ou "carregador".</p>
                </div>
            ) : (
                <div className="p-4">
                    <h5 className="text-xs font-bold text-zinc-600 uppercase mb-2 px-2">Sugestões Rápidas</h5>
                    <div className="flex flex-wrap gap-2">
                        {['Troca de Tela', 'Carregador', 'Formatação', 'Película'].map(tag => (
                            <button 
                                key={tag} 
                                onClick={() => setQuery(tag)}
                                className="px-3 py-1.5 bg-zinc-900 text-zinc-300 rounded-lg text-sm hover:bg-brand-500 hover:text-black transition-colors"
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
        
        <div className="bg-black p-3 text-xs text-zinc-600 border-t border-zinc-900 flex justify-between">
            <span>Busca Inteligente JS</span>
            <span className="flex items-center gap-1">Pressione <kbd className="bg-zinc-900 px-1 rounded text-zinc-400 font-sans">ESC</kbd> para fechar</span>
        </div>
      </div>
    </div>
  );
};