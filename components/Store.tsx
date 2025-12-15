import React from 'react';
import { ShoppingCart, Share2, Star } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface StoreProps {
  onAddToCart: (product: Product) => void;
}

export const Store: React.FC<StoreProps> = ({ onAddToCart }) => {
  const handleShare = async (product: Product) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `JS Informática - ${product.name}`,
          text: `Olha esse produto que encontrei na JS Informática: ${product.name} por R$ ${product.price.toFixed(2)}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing', error);
      }
    } else {
      alert('Seu navegador não suporta a função de compartilhar nativa.');
    }
  };

  return (
    <section id="store" className="py-20 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
                <h2 className="text-brand-500 font-bold uppercase tracking-widest text-xs mb-3">Loja Virtual</h2>
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase">Acessórios & Peças</h3>
            </div>
            <p className="text-zinc-500 max-w-sm text-right hidden md:block">
                Melhore seu setup com nossa seleção de produtos de alta qualidade.
            </p>
        </div>

        {/* Recommendations / Popular */}
        <div className="mb-12">
            <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Star className="text-brand-500 fill-brand-500" size={20} />
                Recomendados para Você
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {PRODUCTS.filter(p => p.popular).map((product) => (
                    <ProductCard key={`rec-${product.id}`} product={product} onAdd={onAddToCart} onShare={handleShare} featured />
                ))}
            </div>
        </div>

        {/* All Products */}
        <h4 className="text-xl font-bold text-white mb-6">Todos os Produtos</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={onAddToCart} onShare={handleShare} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard: React.FC<{ 
    product: Product; 
    onAdd: (p: Product) => void; 
    onShare: (p: Product) => void;
    featured?: boolean; 
}> = ({ product, onAdd, onShare, featured }) => (
  <div className={`group bg-black border ${featured ? 'border-brand-500/30' : 'border-zinc-900'} rounded-2xl overflow-hidden hover:border-brand-500 transition-all duration-300 flex flex-col`}>
    <div className="relative aspect-square overflow-hidden bg-zinc-900">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
      <button 
        onClick={() => onShare(product)}
        className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-brand-500 hover:text-black transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100 z-10 shadow-lg"
        title="Compartilhar"
      >
        <Share2 size={18} />
      </button>
      {featured && (
        <span className="absolute top-3 left-3 bg-brand-500 text-black text-[10px] font-bold px-2 py-1 rounded uppercase">
            Popular
        </span>
      )}
    </div>
    
    <div className="p-5 flex-1 flex flex-col">
      <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mb-1">{product.category}</span>
      <h4 className="text-white font-bold text-lg mb-2 leading-tight">{product.name}</h4>
      <div className="mt-auto flex items-center justify-between pt-4 border-t border-zinc-900">
        <span className="text-brand-500 font-black text-xl">
          R$ {product.price.toFixed(2).replace('.', ',')}
        </span>
        <button 
          onClick={() => onAdd(product)}
          className="p-2.5 bg-zinc-800 text-white rounded-xl hover:bg-brand-500 hover:text-black transition-colors"
          title="Adicionar ao Carrinho"
        >
          <ShoppingCart size={20} />
        </button>
      </div>
    </div>
  </div>
);