import React from 'react';
import { PRODUCT_DATA } from '../data/productData';
import { ShieldCheck, Lock, Truck, Headphones, CheckCircle2 } from 'lucide-react';
import { PolicyType } from './PolicyModal';

interface FooterProps {
  onOpenPolicy: (type: PolicyType) => void;
  onOpenCheckout: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy, onOpenCheckout }) => {
  return (
    <footer className="border-t border-white/10 bg-[#040609] pt-16 pb-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-6">
        {/* Security & Trust Badges Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
              <Lock className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Criptografia SSL</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">Checkout 256-bit blindado</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">30 Dias Garantia</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">Satisfação garantida ou reembolso</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
              <Truck className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Frete Grátis Brasil</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">Envio com código rastreável</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
              <Headphones className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Suporte Oficial</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">Atendimento rápido em português</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-b border-white/5">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="text-xl font-bold tracking-wider text-white">
              VELOURS <span className="text-blue-500">X</span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              O barbeador multifuncional 3 em 1 desenvolvido para simplificar a rotina de cuidados masculinos. Barba, acabamento e nariz com precisão cirúrgica e autonomia sem fio.
            </p>
            <div className="text-xs text-slate-400 pt-2 space-y-1">
              <p>Atendimento: <span className="text-white">{PRODUCT_DATA.supportEmail}</span></p>
              <p>WhatsApp: <span className="text-white">{PRODUCT_DATA.supportPhone}</span></p>
              <p>Horário: {PRODUCT_DATA.businessHours}</p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Navegação</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#mais-praticidade" className="hover:text-white transition-colors">Praticidade</a>
              </li>
              <li>
                <a href="#aparelho" className="hover:text-white transition-colors">O Aparelho 3 em 1</a>
              </li>
              <li>
                <a href="#acessorios" className="hover:text-white transition-colors">Conteúdo da Embalagem</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Perguntas Frequentes</a>
              </li>
              <li>
                <a
                  href={PRODUCT_DATA.checkoutUrl}
                  target="_top"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-semibold"
                >
                  Comprar VELOURS X
                </a>
              </li>
            </ul>
          </div>

          {/* Policies & Institutional */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Políticas & Confiança</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenPolicy('privacy')}
                  className="hover:text-white transition-colors text-left"
                >
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenPolicy('terms')}
                  className="hover:text-white transition-colors text-left"
                >
                  Termos de Compra e Serviço
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenPolicy('shipping')}
                  className="hover:text-white transition-colors text-left"
                >
                  Prazos de Entrega e Envio
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenPolicy('guarantee')}
                  className="hover:text-white transition-colors text-left"
                >
                  Garantia e Devoluções
                </button>
              </li>
            </ul>

            {/* Payment Method Brands */}
            <div className="pt-4">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-2">
                Formas de Pagamento Aceitas
              </span>
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
                <span className="rounded bg-white/5 px-2 py-1 border border-white/10 font-mono text-[10px]">PIX (5% OFF)</span>
                <span className="rounded bg-white/5 px-2 py-1 border border-white/10 font-mono text-[10px]">VISA</span>
                <span className="rounded bg-white/5 px-2 py-1 border border-white/10 font-mono text-[10px]">MASTERCARD</span>
                <span className="rounded bg-white/5 px-2 py-1 border border-white/10 font-mono text-[10px]">ELO</span>
                <span className="rounded bg-white/5 px-2 py-1 border border-white/10 font-mono text-[10px]">BOLETO</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} VELOURS X — Todos os direitos reservados. CNPJ: 45.192.839/0001-70.
          </div>
          <div>
            Tecnologia de Cuidados Pessoais Masculinos
          </div>
        </div>
      </div>
    </footer>
  );
};
