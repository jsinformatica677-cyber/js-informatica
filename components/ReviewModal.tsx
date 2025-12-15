import React, { useState } from 'react';
import { X, Star, Send } from 'lucide-react';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose }) => {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setRating(0);
            onClose();
        }, 2000);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
        <div className="w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-2xl p-6 relative" onClick={e => e.stopPropagation()}>
            <button onClick={onClose} className="absolute top-4 right-4 text-zinc-500 hover:text-white">
                <X size={24} />
            </button>

            {submitted ? (
                <div className="text-center py-10">
                    <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Star className="text-black fill-black" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Obrigado!</h3>
                    <p className="text-zinc-400">Sua avaliação foi enviada com sucesso.</p>
                </div>
            ) : (
                <>
                    <h3 className="text-2xl font-bold text-white mb-2">Avalie sua Experiência</h3>
                    <p className="text-zinc-400 mb-6">Sua opinião é muito importante para nós.</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex justify-center gap-2 mb-6">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => setRating(star)}
                                    className="p-1 transition-transform hover:scale-110 focus:outline-none"
                                >
                                    <Star 
                                        size={32} 
                                        className={`${star <= rating ? 'text-brand-500 fill-brand-500' : 'text-zinc-700'}`} 
                                    />
                                </button>
                            ))}
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-zinc-400 mb-1">Seu Nome</label>
                            <input required type="text" className="w-full bg-black border border-zinc-800 rounded-lg p-3 text-white focus:border-brand-500 outline-none transition-colors" />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-zinc-400 mb-1">Seu Comentário</label>
                            <textarea required rows={4} className="w-full bg-black border border-zinc-800 rounded-lg p-3 text-white focus:border-brand-500 outline-none transition-colors"></textarea>
                        </div>

                        <button 
                            type="submit" 
                            disabled={rating === 0}
                            className="w-full bg-brand-500 text-black font-bold py-3 rounded-xl hover:bg-brand-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            <Send size={18} />
                            Enviar Avaliação
                        </button>
                    </form>
                </>
            )}
        </div>
    </div>
  );
};