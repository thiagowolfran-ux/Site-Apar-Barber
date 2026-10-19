import React, { useState } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { PRODUCT_DATA } from '../data/productData';

interface HeaderProps {
  onOpenCheckout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCheckout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#06080C]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Brand Wordmark (Single text element wordmark) */}
        <a
          href="#"
          className="text-xl font-bold tracking-wider text-white transition-opacity hover:opacity-90 whitespace-nowrap shrink-0"
        >
          <span className="text-white">VELOURS</span>
          <span className="text-blue-500 font-extrabold ml-1">X</span>
        </a>

        {/* Zone 2: 4-5 single-line clean navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a
            href="#mais-praticidade"
            className="transition-colors hover:text-white whitespace-nowrap shrink-0"
          >
            Praticidade
          </a>
          <a
            href="#aparelho"
            className="transition-colors hover:text-white whitespace-nowrap shrink-0"
          >
            O Aparelho
          </a>
          <a
            href="#acessorios"
            className="transition-colors hover:text-white whitespace-nowrap shrink-0"
          >
            Acessórios
          </a>
          <a
            href="#faq"
            className="transition-colors hover:text-white whitespace-nowrap shrink-0"
          >
            Dúvidas
          </a>
          <a
            href="#oferta"
            className="text-blue-400 hover:text-blue-300 transition-colors whitespace-nowrap shrink-0"
          >
            Oferta Especial
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={PRODUCT_DATA.checkoutUrl}
            target="_top"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-500 hover:shadow-blue-500/40 active:scale-[0.98] whitespace-nowrap shrink-0"
          >
            Garantir com Desconto
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Alternar navegação"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0B0F17] px-6 py-4 animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-4 text-sm font-medium text-slate-200">
            <a
              href="#mais-praticidade"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-400"
            >
              Praticidade
            </a>
            <a
              href="#aparelho"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-400"
            >
              O Aparelho
            </a>
            <a
              href="#acessorios"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-400"
            >
              Acessórios
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-blue-400"
            >
              Perguntas Frequentes
            </a>
            <a
              href="#oferta"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-blue-400 font-semibold"
            >
              Oferta Especial
            </a>
            <a
              href={PRODUCT_DATA.checkoutUrl}
              target="_top"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full rounded-lg bg-blue-600 py-3 text-center text-xs font-semibold uppercase tracking-wider text-white shadow-md shadow-blue-600/20 block"
            >
              Garantir com Desconto
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
