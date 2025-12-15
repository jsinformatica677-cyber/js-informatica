import React from 'react';
import { X, Trash2, ShoppingBag, MessageCircle } from 'lucide-react';
import { CartItem } from '../types';
import { BUSINESS_INFO } from '../constants';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
}

export const CartSidebar: React.FC<CartSidebarProps> = ({ 
  isOpen, 
  onClose, 
  cartItems, 
  onRemove,
  onUpdateQuantity
}) => {
  const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    const phoneNumber = BUSINESS_INFO.phone.replace(/\D/g, '');
    let message = `*Novo Pedido via Site - JS Informática*\n\n`;
    
    cartItems.forEach(item => {
      message += `• ${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2)}\n`;
    });
    
    message += `\n*Total: R$ ${total.toFixed(2)}*`;
    message += `\n\nGostaria de concluir a compra.`;

    const url = `https://wa.me/55${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-zinc-950 border-l border-zinc-900 z-[70] shadow-2xl transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-5 border-b border-zinc-900 flex justify-between items-center bg-black">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <ShoppingBag className="text-brand-500" />
              Seu Carrinho
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-zinc-900 rounded-full text-zinc-400 hover:text-white transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-zinc-500 space-y-4">
                <ShoppingBag size={48} className="opacity-20" />
                <p>Seu carrinho está vazio.</p>
                <button onClick={onClose} className="text-brand-500 font-bold hover:underline">
                    Ver Produtos
                </button>
              </div>
            ) : (
              cartItems.map(item => (
                <div key={item.id} className="flex gap-4 bg-black p-3 rounded-xl border border-zinc-900">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg bg-zinc-900" />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                        <h4 className="font-bold text-white text-sm line-clamp-1">{item.name}</h4>
                        <p className="text-brand-500 font-bold text-sm">R$ {item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center gap-3 bg-zinc-900 rounded-lg px-2 py-1">
                        <button onClick={() => onUpdateQuantity(item.id, -1)} className="text-zinc-400 hover:text-white font-bold w-5">-</button>
                        <span className="text-white text-xs font-bold">{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.id, 1)} className="text-zinc-400 hover:text-white font-bold w-5">+</button>
                      </div>
                      <button onClick={() => onRemove(item.id)} className="text-red-500 hover:text-red-400 p-1">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-zinc-900 bg-black">
              <div className="flex justify-between items-center mb-4 text-lg font-bold text-white">
                <span>Total</span>
                <span>R$ {total.toFixed(2)}</span>
              </div>
              <button 
                onClick={handleCheckout}
                className="w-full py-4 bg-brand-500 hover:bg-brand-400 text-black font-black uppercase tracking-wide rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-brand-500/20"
              >
                <MessageCircle size={20} />
                Finalizar no WhatsApp
              </button>
              <p className="text-center text-[10px] text-zinc-600 mt-3">
                O pagamento e a entrega serão combinados diretamente pelo WhatsApp.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};