import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Store } from './components/Store';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AIAssistant } from './components/AIAssistant';
import { CartSidebar } from './components/CartSidebar';
import { SmartSearch } from './components/SmartSearch';
import { ReviewModal } from './components/ReviewModal';
import { CartItem, Product } from './types';
import { MessageSquarePlus } from 'lucide-react';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen font-sans selection:bg-brand-500 selection:text-slate-950 bg-black">
      <Header 
        cartCount={cartCount} 
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />
      
      <main>
        <Hero />
        <Services />
        <Store onAddToCart={addToCart} />
        
        <div className="relative">
          <Testimonials />
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <button 
                onClick={() => setIsReviewOpen(true)}
                className="bg-zinc-800 text-zinc-300 px-6 py-2 rounded-full border border-zinc-700 hover:border-brand-500 hover:text-white transition-all flex items-center gap-2 text-sm font-bold"
            >
                <MessageSquarePlus size={16} />
                Deixe sua Avaliação
            </button>
          </div>
        </div>

        <Contact />
      </main>
      
      <Footer />
      <AIAssistant />
      
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />

      <SmartSearch 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <ReviewModal 
        isOpen={isReviewOpen}
        onClose={() => setIsReviewOpen(false)}
      />
    </div>
  );
};

export default App;