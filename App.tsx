import React, { useState, Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { CartItem, Product } from './types';
import { MessageSquarePlus, Loader2 } from 'lucide-react';

// CORREÇÃO: Lazy loading aplicado para reduzir o pacote inicial JS
// Isso garante que componentes pesados não bloqueiem o carregamento.
const Services = lazy(() => import('./components/Services').then(m => ({ default: m.Services })));
const Store = lazy(() => import('./components/Store').then(m => ({ default: m.Store })));
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));

// Componentes modais ou flutuantes também devem ser lazy
const AIAssistant = lazy(() => import('./components/AIAssistant').then(m => ({ default: m.AIAssistant })));
const CartSidebar = lazy(() => import('./components/CartSidebar').then(m => ({ default: m.CartSidebar })));
const SmartSearch = lazy(() => import('./components/SmartSearch').then(m => ({ default: m.SmartSearch })));
const ReviewModal = lazy(() => import('./components/ReviewModal').then(m => ({ default: m.ReviewModal })));

const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-20">
    <Loader2 className="animate-spin text-brand-500" size={32} />
  </div>
);

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
        {/* Hero e Header são carregados imediatamente */}
        <Hero />
        
        {/* O restante do site é carregado sob demanda */}
        <Suspense fallback={<LoadingSpinner />}>
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
        </Suspense>
      </main>
      
      <Footer />
      
      {/* Componentes Interativos Lazy */}
      <Suspense fallback={null}>
        <AIAssistant />
        
        <CartSidebar 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          cartItems={cartItems}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />

        {isSearchOpen && (
          <SmartSearch 
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
          />
        )}

        {isReviewOpen && (
          <ReviewModal 
            isOpen={isReviewOpen}
            onClose={() => setIsReviewOpen(false)}
          />
        )}
      </Suspense>
    </div>
  );
};

export default App;