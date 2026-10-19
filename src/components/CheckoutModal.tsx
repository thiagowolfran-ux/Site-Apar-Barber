import React, { useState } from 'react';
import { PRODUCT_DATA, PRODUCT_IMAGES } from '../data/productData';
import {
  X,
  ShieldCheck,
  CheckCircle2,
  Lock,
  QrCode,
  CreditCard,
  FileText,
  Truck,
  Copy,
  Check,
  ChevronRight,
  ArrowLeft,
} from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  initialQuantity?: number;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  initialQuantity = 1,
  onClose,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [step, setStep] = useState<'details' | 'payment' | 'success'>('details');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card' | 'boleto'>('pix');
  const [copiedPix, setCopiedPix] = useState(false);

  // Form Fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cpf: '',
    cep: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: 'SP',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: '',
    installments: '1',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const unitPrice = PRODUCT_DATA.currentPrice;
  const subtotal = unitPrice * quantity;
  const isPix = paymentMethod === 'pix';
  const finalPrice = isPix
    ? +(subtotal * (1 - PRODUCT_DATA.pixDiscountPercent / 100)).toFixed(2)
    : subtotal;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateStep1 = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Informe seu nome completo';
    if (!formData.email.trim() || !formData.email.includes('@'))
      errors.email = 'Informe um e-mail válido';
    if (!formData.phone.trim()) errors.phone = 'Informe seu telefone / WhatsApp';
    if (!formData.cep.trim()) errors.cep = 'Informe seu CEP';
    if (!formData.street.trim()) errors.street = 'Informe o logradouro';
    if (!formData.number.trim()) errors.number = 'Número';
    if (!formData.city.trim()) errors.city = 'Cidade';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleProceedToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep('payment');
    }
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setOrderId(`VX-${Math.floor(100000 + Math.random() * 900000)}`);
      setStep('success');
    }, 1000);
  };

  const mockPixKey =
    '00020126580014br.gov.bcb.pix0136velours-x-pagamentos-oficial-3em1520400005303986540' +
    finalPrice.toFixed(2).replace('.', '') +
    '5802BR5925VELOURS X OFICIAL BRASIL6009SAO PAULO62070503***6304E8A1';

  const handleCopyPix = () => {
    navigator.clipboard.writeText(mockPixKey);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl my-8 rounded-3xl border border-white/10 bg-[#0B0F19] p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between pb-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="text-lg font-bold tracking-wider text-white">
              VELOURS <span className="text-blue-500">X</span>
            </div>
            <span className="hidden sm:inline-block text-xs text-slate-400">·</span>
            <div className="flex items-center gap-1 text-xs text-emerald-400">
              <Lock className="h-3.5 w-3.5" />
              <span>Ambiente Seguro</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Step 1: Customer Details & Shipping Address */}
        {step === 'details' && (
          <form onSubmit={handleProceedToPayment} className="mt-6 space-y-6">
            {/* Product Summary mini strip */}
            <div className="flex items-center justify-between rounded-xl border border-white/8 bg-[#07090F] p-3.5">
              <div className="flex items-center gap-3">
                <img
                  src={PRODUCT_IMAGES.heroShaver}
                  alt={PRODUCT_DATA.name}
                  className="h-12 w-12 rounded-lg object-cover border border-white/10"
                />
                <div>
                  <h4 className="text-xs font-bold text-white">{PRODUCT_DATA.name}</h4>
                  <p className="text-[11px] text-slate-400">Kit 3 em 1 Completo + Frete Grátis</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center border border-white/10 rounded bg-[#0B0F19]">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-2 py-0.5 text-xs text-slate-300 hover:text-white"
                  >
                    -
                  </button>
                  <span className="px-2 text-xs font-mono text-white tabular-nums">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-2 py-0.5 text-xs text-slate-300 hover:text-white"
                  >
                    +
                  </button>
                </div>
                <span className="text-sm font-bold text-white tabular-nums">
                  R$ {subtotal.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400">
                1. Dados Pessoais
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nome Completo *"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-white/10 bg-[#07090F] p-3 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                  />
                  {formErrors.name && (
                    <span className="text-[10px] text-red-400 mt-1 block">{formErrors.name}</span>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail para confirmação *"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-white/10 bg-[#07090F] p-3 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                  />
                  {formErrors.email && (
                    <span className="text-[10px] text-red-400 mt-1 block">{formErrors.email}</span>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Telefone / WhatsApp *"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-white/10 bg-[#07090F] p-3 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                  />
                  {formErrors.phone && (
                    <span className="text-[10px] text-red-400 mt-1 block">{formErrors.phone}</span>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="cpf"
                    placeholder="CPF (apenas números)"
                    value={formData.cpf}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-white/10 bg-[#07090F] p-3 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400">
                2. Endereço de Entrega
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-1">
                  <input
                    type="text"
                    name="cep"
                    placeholder="CEP *"
                    value={formData.cep}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-white/10 bg-[#07090F] p-3 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                  />
                  {formErrors.cep && (
                    <span className="text-[10px] text-red-400 mt-1 block">{formErrors.cep}</span>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <input
                    type="text"
                    name="street"
                    placeholder="Rua / Avenida *"
                    value={formData.street}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-white/10 bg-[#07090F] p-3 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                  />
                  {formErrors.street && (
                    <span className="text-[10px] text-red-400 mt-1 block">{formErrors.street}</span>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="number"
                    placeholder="Número *"
                    value={formData.number}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-white/10 bg-[#07090F] p-3 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                  />
                  {formErrors.number && (
                    <span className="text-[10px] text-red-400 mt-1 block">{formErrors.number}</span>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="complement"
                    placeholder="Complemento (Apto, Bloco)"
                    value={formData.complement}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-white/10 bg-[#07090F] p-3 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="city"
                    placeholder="Cidade *"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-white/10 bg-[#07090F] p-3 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                  />
                  {formErrors.city && (
                    <span className="text-[10px] text-red-400 mt-1 block">{formErrors.city}</span>
                  )}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition-colors"
            >
              <span>Continuar para Pagamento</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </form>
        )}

        {/* Step 2: Payment Method */}
        {step === 'payment' && (
          <form onSubmit={handleCompleteOrder} className="mt-6 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <button
                type="button"
                onClick={() => setStep('details')}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Voltar aos dados</span>
              </button>
              <div className="text-right">
                <span className="text-[10px] text-slate-400 block">Total a pagar:</span>
                <span className="text-base font-extrabold text-white tabular-nums">
                  R$ {finalPrice.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setPaymentMethod('pix')}
                className={`p-3.5 rounded-xl border text-center transition-all ${
                  paymentMethod === 'pix'
                    ? 'border-blue-500 bg-blue-600/10 text-white shadow-md'
                    : 'border-white/10 bg-[#07090F] text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                <QrCode className="h-5 w-5 mx-auto mb-1 text-emerald-400" />
                <span className="text-xs font-bold block">Pix</span>
                <span className="text-[10px] text-emerald-400 block font-medium">5% de Desconto</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`p-3.5 rounded-xl border text-center transition-all ${
                  paymentMethod === 'card'
                    ? 'border-blue-500 bg-blue-600/10 text-white shadow-md'
                    : 'border-white/10 bg-[#07090F] text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                <CreditCard className="h-5 w-5 mx-auto mb-1 text-blue-400" />
                <span className="text-xs font-bold block">Cartão</span>
                <span className="text-[10px] text-slate-400 block">Até 12x</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('boleto')}
                className={`p-3.5 rounded-xl border text-center transition-all ${
                  paymentMethod === 'boleto'
                    ? 'border-blue-500 bg-blue-600/10 text-white shadow-md'
                    : 'border-white/10 bg-[#07090F] text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                <FileText className="h-5 w-5 mx-auto mb-1 text-amber-400" />
                <span className="text-xs font-bold block">Boleto</span>
                <span className="text-[10px] text-slate-400 block">À vista</span>
              </button>
            </div>

            {/* Pix Details */}
            {paymentMethod === 'pix' && (
              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/15 p-5 text-center space-y-4">
                <div className="flex items-center justify-center gap-2 text-xs font-bold text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Aprovação Imediata & Desconto de 5% Aplicado</span>
                </div>

                <div className="mx-auto w-36 h-36 rounded-xl bg-white p-2.5 flex items-center justify-center shadow-md">
                  {/* Visual QR Code Representation */}
                  <div className="w-full h-full bg-slate-900 rounded-lg flex flex-col items-center justify-center p-2 text-white">
                    <QrCode className="h-16 w-16 text-blue-400" />
                    <span className="text-[8px] font-mono mt-1 text-slate-300">PIX VELOURS X</span>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-1.5">
                    Código Pix Copia e Cola:
                  </label>
                  <div className="flex gap-2 max-w-md mx-auto">
                    <input
                      type="text"
                      readOnly
                      value={mockPixKey}
                      className="w-full rounded-lg border border-white/10 bg-[#07090F] px-3 py-2 text-[10px] font-mono text-slate-400 truncate"
                    />
                    <button
                      type="button"
                      onClick={handleCopyPix}
                      className="rounded-lg bg-emerald-600 px-3 py-2 text-xs font-bold text-white hover:bg-emerald-500 transition-colors shrink-0 flex items-center gap-1"
                    >
                      {copiedPix ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                      <span>{copiedPix ? 'Copiado' : 'Copiar'}</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Credit Card Details */}
            {paymentMethod === 'card' && (
              <div className="space-y-3 rounded-2xl border border-white/10 bg-[#07090F] p-5">
                <div>
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Número do Cartão (0000 0000 0000 0000)"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-white/10 bg-[#0B0F19] p-3 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none font-mono"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="cardName"
                    placeholder="Nome impresso no Cartão"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-white/10 bg-[#0B0F19] p-3 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="cardExpiry"
                    placeholder="Validade (MM/AA)"
                    value={formData.cardExpiry}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-white/10 bg-[#0B0F19] p-3 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none font-mono"
                  />
                  <input
                    type="text"
                    name="cardCvv"
                    placeholder="CVV (3 dígitos)"
                    value={formData.cardCvv}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-white/10 bg-[#0B0F19] p-3 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none font-mono"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Parcelamento:</label>
                  <select
                    name="installments"
                    value={formData.installments}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-white/10 bg-[#0B0F19] p-3 text-xs text-white focus:border-blue-500 focus:outline-none"
                  >
                    {[1, 2, 3, 4, 6, 12].map((inst) => {
                      const val = (finalPrice / inst).toFixed(2).replace('.', ',');
                      return (
                        <option key={inst} value={inst}>
                          {inst}x de R$ {val} sem juros
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            )}

            {/* Boleto Details */}
            {paymentMethod === 'boleto' && (
              <div className="rounded-2xl border border-amber-500/20 bg-amber-950/15 p-5 text-center space-y-3">
                <FileText className="h-8 w-8 text-amber-400 mx-auto" />
                <h5 className="text-xs font-bold text-white">Boleto Bancário</h5>
                <p className="text-xs text-slate-300">
                  O boleto será gerado ao finalizar o pedido com vencimento em 3 dias úteis. A compensação ocorre em até 48 horas úteis após o pagamento.
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-blue-600/35 hover:bg-blue-500 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Processando Pedido...</span>
              ) : (
                <>
                  <Lock className="h-4 w-4" />
                  <span>Finalizar Compra — R$ {finalPrice.toFixed(2).replace('.', ',')}</span>
                </>
              )}
            </button>
          </form>
        )}

        {/* Step 3: Success Confirmation State */}
        {step === 'success' && (
          <div className="mt-6 py-6 text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Check className="h-8 w-8" />
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                Pedido Registrado com Sucesso
              </span>
              <h3 className="text-2xl font-extrabold text-white mt-1">
                Parabéns pelo seu VELOURS X!
              </h3>
              <p className="text-xs text-slate-300 mt-2 max-w-md mx-auto">
                Código do Pedido: <strong className="text-white font-mono">{orderId}</strong>
              </p>
            </div>

            <div className="rounded-2xl border border-white/8 bg-[#07090F] p-4 text-left text-xs text-slate-300 space-y-2 max-w-md mx-auto">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">Itens:</span>
                <span className="text-white font-medium">
                  {quantity}x {PRODUCT_DATA.name}
                </span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">Destinatário:</span>
                <span className="text-white font-medium">{formData.name || 'Cliente'}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">Envio:</span>
                <span className="text-emerald-400 font-medium">Frete Grátis com Seguro</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-slate-400">Status:</span>
                <span className="text-blue-400 font-semibold">Preparando Despacho</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl bg-blue-600 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-blue-500 transition-colors"
              >
                Concluir e Voltar à Página
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
