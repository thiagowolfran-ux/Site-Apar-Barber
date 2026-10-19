/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { ProductVisuals } from './components/ProductVisuals';
import { OfferSection } from './components/OfferSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { PolicyModal, PolicyType } from './components/PolicyModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PRODUCT_DATA } from './data/productData';
import { ArrowRight, Lock } from 'lucide-react';

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutQuantity, setCheckoutQuantity] = useState(1);
  const [activePolicy, setActivePolicy] = useState<PolicyType>(null);

  const handleOpenCheckout = (quantity: number = 1) => {
    setCheckoutQuantity(quantity);
    setIsCheckoutOpen(true);
  };

  const handleHeroCta = () => {
    const offerElement = document.getElementById('oferta');
    if (offerElement) {
      offerElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleOpenCheckout(1);
    }
  };

  return (
    <div className="min-h-screen bg-[#06080C] text-slate-100 flex flex-col font-sans">
      {/* Top Bar Navigation */}
      <Header onOpenCheckout={() => handleOpenCheckout(1)} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onCtaClick={handleHeroCta} />

        {/* 2. Benefits & 3-in-1 Head Selector */}
        <Benefits />

        {/* 3. Product Visual Gallery, Unboxing & Technical Specs */}
        <ProductVisuals />

        {/* 4. Official Offer & Purchase Section */}
        <OfferSection onOpenCheckout={handleOpenCheckout} />

        {/* 5. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer with Trust & Policies */}
      <Footer
        onOpenPolicy={(type) => setActivePolicy(type)}
        onOpenCheckout={() => handleOpenCheckout(1)}
      />

      {/* Mobile Sticky Buy Strip (strictly within <=15% mobile viewport height) */}
      <div className="fixed bottom-0 left-0 right-0 z-30 flex sm:hidden items-center justify-between border-t border-white/10 bg-[#070A11]/95 px-4 py-3 backdrop-blur-md">
        <div>
          <span className="text-[10px] text-slate-400 block">A partir de</span>
          <span className="font-mono text-sm font-bold text-white tabular-nums">
            R$ {PRODUCT_DATA.currentPrice.toFixed(2).replace('.', ',')}
          </span>
        </div>

        <a
          href={PRODUCT_DATA.checkoutUrl}
          target="_top"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-600/30 active:scale-95"
        >
          <Lock className="h-3.5 w-3.5" />
          <span>Comprar</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Interactive Checkout Drawer / Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        initialQuantity={checkoutQuantity}
        onClose={() => setIsCheckoutOpen(false)}
      />

      {/* Policy Modal (Privacy, Terms, Shipping, Warranty) */}
      <PolicyModal type={activePolicy} onClose={() => setActivePolicy(null)} />

      {/* Floating WhatsApp Contact */}
      <FloatingWhatsApp />
    </div>
  );
}
