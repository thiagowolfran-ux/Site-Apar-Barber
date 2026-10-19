import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { PRODUCT_DATA } from '../data/productData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(
      'Olá! Gostaria de tirar uma dúvida sobre o barbeador multifuncional VELOURS X 3 em 1.'
    );
    // WhatsApp web / api link
    window.open(`https://api.whatsapp.com/send?phone=5511987654321&text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Discreet tooltip on hover */}
      {showTooltip && (
        <div className="hidden sm:block rounded-xl border border-white/10 bg-[#0E1422] px-3.5 py-2 text-xs text-white shadow-xl animate-in fade-in slide-in-from-right-2 duration-150">
          <p className="font-semibold text-white">Dúvidas sobre o produto?</p>
          <p className="text-[11px] text-slate-400">Fale com um atendente no WhatsApp</p>
        </div>
      )}

      <button
        type="button"
        onClick={handleOpenWhatsApp}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="group relative flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-all duration-200 hover:scale-105 hover:bg-[#22c35e] active:scale-95"
        aria-label="Atendimento via WhatsApp"
      >
        <MessageCircle className="h-6 w-6 fill-current" />
      </button>
    </div>
  );
};
