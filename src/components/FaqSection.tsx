import React, { useState } from 'react';
import { PRODUCT_DATA } from '../data/productData';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = PRODUCT_DATA.faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#06080C] border-t border-white/5">
      <div className="mx-auto max-w-4xl px-6">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
            Tire Suas Dúvidas
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Respostas claras e verificadas sobre o uso, entrega e garantia do VELOURS X.
          </p>

          {/* Search bar inside FAQ for convenience */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="h-4 w-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar dúvida específica (ex: bateria, entrega, lâminas)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#0C101B] py-2.5 pl-10 pr-4 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-8 text-sm text-slate-400">
              Nenhuma pergunta encontrada com o termo pesquisado. Entre em contato com nosso
              atendimento.
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-white/8 bg-[#0B0F19] transition-colors hover:border-white/15 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-white pr-4">
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/5 text-slate-300 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-blue-600/20 text-blue-400' : ''
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Support Note */}
        <div className="mt-10 text-center text-xs text-slate-400">
          Ainda tem dúvidas? Fale com a nossa equipe pelo WhatsApp ou e-mail oficial:{' '}
          <span className="text-white font-medium">{PRODUCT_DATA.supportEmail}</span>
        </div>
      </div>
    </section>
  );
};
