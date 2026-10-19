import React, { useState } from 'react';
import { PRODUCT_DATA, PRODUCT_IMAGES } from '../data/productData';
import {
  ShieldCheck,
  Truck,
  CreditCard,
  QrCode,
  CheckCircle2,
  Lock,
  ArrowRight,
  Sparkles,
  Calculator,
} from 'lucide-react';

interface OfferSectionProps {
  onOpenCheckout: (quantity: number) => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onOpenCheckout }) => {
  const [quantity, setQuantity] = useState(1);
  const [cep, setCep] = useState('');
  const [shippingResult, setShippingResult] = useState<null | {
    prazo: string;
    valor: string;
  }>(null);
  const [isCalculatingCep, setIsCalculatingCep] = useState(false);

  // Pricing calculations
  const unitPrice = PRODUCT_DATA.currentPrice;
  const totalPrice = unitPrice * quantity;
  const totalOriginalPrice = PRODUCT_DATA.originalPrice * quantity;
  const pixPrice = +(totalPrice * (1 - PRODUCT_DATA.pixDiscountPercent / 100)).toFixed(2);
  const installmentVal = +(totalPrice / PRODUCT_DATA.maxInstallments).toFixed(2);

  const handleCalculateCep = (e: React.FormEvent) => {
    e.preventDefault();
    if (cep.replace(/\D/g, '').length < 8) return;
    setIsCalculatingCep(true);
    setTimeout(() => {
      setIsCalculatingCep(false);
      setShippingResult({
        prazo: '3 a 7 dias úteis com rastreamento',
        valor: 'GRÁTIS',
      });
    }, 600);
  };

  return (
    <section id="oferta" className="relative py-20 bg-gradient-to-b from-[#07090F] to-[#04060A]">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-blue-600/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
            VELOURS X 3 EM 1
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {PRODUCT_DATA.offerSection.title}
          </h2>
          <p className="mt-3 text-base text-slate-300">
            {PRODUCT_DATA.offerSection.description}
          </p>
        </div>

        {/* Main Product Purchase Box */}
        <div className="rounded-3xl border border-white/10 bg-[#0C111C]/90 p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Visual Product Presentation */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#070A11] shadow-xl">
                <img
                  src={PRODUCT_IMAGES.heroShaver}
                  alt={PRODUCT_DATA.fullName}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute top-4 left-4 rounded-lg bg-blue-600/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg">
                  Kit Oficial 3 em 1
                </div>
              </div>

              {/* Package Inclusion Summary */}
              <div className="rounded-xl border border-white/8 bg-[#080C16] p-4 text-xs text-slate-300 space-y-2">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4 text-blue-400" />
                  <span>Itens inclusos no seu kit:</span>
                </div>
                <p className="text-slate-400">
                  Aparelho VELOURS X + 3 Cabeças (Barba, Acabamento e Nariz) + Pente Guia + Cabo USB + Escova Higiênica.
                </p>
              </div>
            </div>

            {/* Right Column: Commercial Module & Checkout Action */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Código: {PRODUCT_DATA.model}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {PRODUCT_DATA.fullName}
                </h3>
              </div>

              {/* Pricing Block */}
              <div className="rounded-2xl border border-blue-500/20 bg-blue-950/20 p-5 space-y-3">
                <div className="flex items-baseline gap-3">
                  <span className="text-xs text-slate-400">De</span>
                  <span className="text-sm line-through text-slate-400 tabular-nums">
                    R$ {totalOriginalPrice.toFixed(2).replace('.', ',')}
                  </span>
                  <span className="text-xs text-slate-400">por</span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-white tabular-nums">
                    R$ {totalPrice.toFixed(2).replace('.', ',')}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-white/10 text-xs">
                  <div className="text-slate-300">
                    Ou em até <strong className="text-white">12x de R$ {installmentVal.toFixed(2).replace('.', ',')}</strong> no cartão
                  </div>
                  <div className="text-emerald-400 font-semibold flex items-center gap-1">
                    <QrCode className="h-3.5 w-3.5" />
                    <span>R$ {pixPrice.toFixed(2).replace('.', ',')} à vista no Pix (5% OFF)</span>
                  </div>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <label className="text-xs font-semibold text-slate-300">Quantidade:</label>
                <div className="flex items-center rounded-lg border border-white/10 bg-[#070A12] p-1">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-8 w-8 rounded text-slate-300 hover:text-white hover:bg-white/5 font-bold"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-mono text-sm font-semibold text-white tabular-nums">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-8 w-8 rounded text-slate-300 hover:text-white hover:bg-white/5 font-bold"
                  >
                    +
                  </button>
                </div>
                {quantity > 1 && (
                  <span className="text-xs text-blue-400">
                    {quantity} unidades selecionadas
                  </span>
                )}
              </div>

              {/* Interactive CEP Shipping Estimator */}
              <div className="rounded-xl border border-white/8 bg-[#080C16] p-4">
                <form onSubmit={handleCalculateCep} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <div className="flex items-center gap-2 text-xs text-slate-300 shrink-0">
                    <Truck className="h-4 w-4 text-blue-400" />
                    <span>Calcular frete:</span>
                  </div>
                  <div className="flex-1 flex gap-2">
                    <input
                      type="text"
                      maxLength={9}
                      placeholder="00000-000"
                      value={cep}
                      onChange={(e) => setCep(e.target.value)}
                      className="w-full rounded-lg border border-white/10 bg-[#04060A] px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none font-mono"
                    />
                    <button
                      type="submit"
                      disabled={isCalculatingCep}
                      className="rounded-lg bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-white/20 transition-colors whitespace-nowrap"
                    >
                      {isCalculatingCep ? 'Calculando...' : 'Calcular'}
                    </button>
                  </div>
                </form>

                {shippingResult && (
                  <div className="mt-3 flex items-center justify-between text-xs pt-2 border-t border-white/5 text-slate-300">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Frete {shippingResult.valor} para o seu CEP
                    </span>
                    <span className="text-slate-400">Prazo: {shippingResult.prazo}</span>
                  </div>
                )}
              </div>

              {/* Main Buy Action Button */}
              <div>
                <a
                  href={PRODUCT_DATA.checkoutUrl}
                  target="_top"
                  rel="noopener noreferrer"
                  className="w-full group relative inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 py-4 px-8 text-base font-extrabold uppercase tracking-wider text-white shadow-xl shadow-blue-600/35 transition-all duration-200 hover:bg-blue-500 hover:shadow-blue-500/50 active:scale-[0.99]"
                >
                  <Lock className="h-4 w-4" />
                  <span>QUERO O MEU VELOURS X</span>
                  <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>

              {/* Trust & Guarantee Markers */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-blue-400 shrink-0" />
                  <span>30 Dias de Garantia</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Envio Rastreado</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-blue-400 shrink-0" />
                  <span>Pagamento 100% Seguro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
