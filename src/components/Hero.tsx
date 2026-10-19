import React from 'react';
import { PRODUCT_DATA, PRODUCT_IMAGES } from '../data/productData';
import { ArrowRight, ShieldCheck, Battery, Zap, Sparkles, Clock, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onCtaClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 md:pt-16 md:pb-28">
      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[600px] rounded-full bg-blue-600/15 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-10 right-0 h-96 w-96 rounded-full bg-sky-500/10 blur-[100px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-6">
        {/* Subtle unboxed kicker */}
        <div className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-blue-400">
          <span>VELOURS X 3 EM 1</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Barbeador Elétrico Multifuncional</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>Edição Oficial</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] [text-wrap:balance]">
              Seu cuidado pessoal.{' '}
              <span className="metallic-text block">Em outro nível.</span>
            </h1>

            <p className="max-w-xl text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              {PRODUCT_DATA.subheadline}
            </p>

            {/* Prominent Value Proposition Statement */}
            <div className="rounded-xl border border-blue-500/20 bg-blue-950/20 px-4 py-3 text-sm font-semibold text-blue-200">
              {PRODUCT_DATA.taglineStatement}
            </div>

            {/* 4 Essential Benefits Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-1 pb-1">
              <div className="flex items-start gap-3 rounded-xl border border-white/8 bg-[#0D121D]/80 p-3.5 backdrop-blur-sm transition-colors hover:border-blue-500/30">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600/15 text-blue-400">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Versatilidade 3 em 1</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Barba, acabamento e nariz</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-white/8 bg-[#0D121D]/80 p-3.5 backdrop-blur-sm transition-colors hover:border-blue-500/30">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600/15 text-blue-400">
                  <Zap className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Liberdade sem fio</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Sem depender de cabo no uso</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-white/8 bg-[#0D121D]/80 p-3.5 backdrop-blur-sm transition-colors hover:border-blue-500/30">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600/15 text-blue-400">
                  <Battery className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Bateria recarregável</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Até 60 min de autonomia</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-white/8 bg-[#0D121D]/80 p-3.5 backdrop-blur-sm transition-colors hover:border-blue-500/30">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600/15 text-blue-400">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Design compacto</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Para casa ou levar em viagens</p>
                </div>
              </div>
            </div>

            {/* CTA Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={PRODUCT_DATA.checkoutUrl}
                target="_top"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-xl shadow-blue-600/35 transition-all duration-200 hover:bg-blue-500 hover:shadow-blue-500/50 active:scale-[0.98]"
              >
                <span>COMPRAR VELOURS X</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#mais-praticidade"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-300 transition-colors hover:border-white/25 hover:text-white"
              >
                Conhecer Recursos
              </a>
            </div>

            {/* Unboxed Trust Markers */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                Frete com rastreamento
              </span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="h-3.5 w-3.5 text-blue-400" />
                Garantia e suporte oficial
              </span>
              <span aria-hidden="true" className="text-slate-700">·</span>
              <span className="tabular-nums text-slate-300">
                Até 12x no cartão
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#101726]/80 to-[#070A11] p-2 shadow-2xl electric-glow">
                <div className="relative aspect-[16/9] lg:aspect-[4/5] w-full overflow-hidden rounded-xl bg-slate-900">
                  <img
                    src={PRODUCT_IMAGES.heroShaver}
                    alt="Barbeador Elétrico Multifuncional VELOURS X 3 em 1"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070A11] via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      <p className="text-[11px] font-mono uppercase tracking-wider text-blue-400">
                        VELOURS X 3 EM 1
                      </p>
                      <p className="text-sm font-bold text-white">Cuidado Pessoal Completo</p>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-xs font-semibold tabular-nums text-emerald-400">
                        60 MIN
                      </span>
                      <p className="text-[10px] text-slate-400">Uso Sem Fio Anunciado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
