import React, { useState } from 'react';
import { PRODUCT_DATA, PRODUCT_IMAGES } from '../data/productData';
import {
  Layers,
  WifiOff,
  BatteryCharging,
  Compass,
  Check,
  ChevronRight,
  Gift,
  ArrowRight,
} from 'lucide-react';

export const Benefits: React.FC = () => {
  const [activeHeadId, setActiveHeadId] = useState<string>('shaver');

  const activeHead =
    PRODUCT_DATA.heads.find((h) => h.id === activeHeadId) || PRODUCT_DATA.heads[0];

  return (
    <section id="mais-praticidade" className="relative py-20 bg-[#080B12] border-t border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header: Mais praticidade. Menos complicação. */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
            VELOURS X 3 EM 1
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            {PRODUCT_DATA.benefitsSectionTitle}
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Projetado para simplificar sua rotina de cuidados com ergonomia, versatilidade e acabamento moderno.
          </p>
        </div>

        {/* 4 Core Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Versatilidade 3 em 1 */}
          <div className="group relative rounded-2xl border border-white/8 bg-[#0D121F] p-6 transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400 group-hover:bg-blue-600/20 group-hover:text-blue-300 transition-colors">
              <Layers className="h-6 w-6" />
            </div>
            <div className="mt-5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                01. Multifunção
              </span>
              <h3 className="mt-1 text-lg font-bold text-white">Versatilidade 3 em 1</h3>
              <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                Funções para barba, acabamento e nariz, de acordo com os acessórios compatíveis do aparelho.
              </p>
            </div>
          </div>

          {/* Card 2: Liberdade sem fio */}
          <div className="group relative rounded-2xl border border-white/8 bg-[#0D121F] p-6 transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400 group-hover:bg-blue-600/20 group-hover:text-blue-300 transition-colors">
              <WifiOff className="h-6 w-6" />
            </div>
            <div className="mt-5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                02. Mobilidade Total
              </span>
              <h3 className="mt-1 text-lg font-bold text-white">Liberdade sem fio</h3>
              <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                Mais mobilidade para realizar seus cuidados pessoais sem depender de um cabo durante o uso.
              </p>
            </div>
          </div>

          {/* Card 3: Bateria recarregável */}
          <div className="group relative rounded-2xl border border-white/8 bg-[#0D121F] p-6 transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400 group-hover:bg-blue-600/20 group-hover:text-blue-300 transition-colors">
              <BatteryCharging className="h-6 w-6" />
            </div>
            <div className="mt-5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                03. Autonomia
              </span>
              <h3 className="mt-1 text-lg font-bold text-white">Bateria recarregável</h3>
              <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                Autonomia anunciada de até 60 minutos de uso sem fio, conforme as condições de utilização.
              </p>
            </div>
          </div>

          {/* Card 4: Design moderno e compacto */}
          <div className="group relative rounded-2xl border border-white/8 bg-[#0D121F] p-6 transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400 group-hover:bg-blue-600/20 group-hover:text-blue-300 transition-colors">
              <Compass className="h-6 w-6" />
            </div>
            <div className="mt-5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                04. Portabilidade
              </span>
              <h3 className="mt-1 text-lg font-bold text-white">Design moderno e compacto</h3>
              <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                Uma proposta funcional para sua rotina em casa ou para levar em viagens.
              </p>
            </div>
          </div>
        </div>

        {/* 3-in-1 Head System Demonstration */}
        <div id="aparelho" className="mt-16 rounded-3xl border border-white/10 bg-[#0B0F19] p-6 sm:p-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-white/8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                Acessórios Compatíveis
              </span>
              <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold text-white">
                Funções de Barba, Acabamento e Nariz
              </h3>
              <p className="mt-1 text-sm text-slate-300">
                Alterne as cabeças com encaixe simples conforme a necessidade do seu cuidado pessoal.
              </p>
            </div>

            {/* Interactive Segmented Selector Tabs */}
            <div className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-[#07090F] p-1.5">
              {PRODUCT_DATA.heads.map((head) => {
                const isActive = head.id === activeHeadId;
                return (
                  <button
                    key={head.id}
                    onClick={() => setActiveHeadId(head.id)}
                    className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {head.id === 'shaver' && '1. Barba'}
                    {head.id === 'trimmer' && '2. Acabamento'}
                    {head.id === 'nose' && '3. Nariz'}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Head Display */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-xl">
                <img
                  src={PRODUCT_IMAGES.headsKit}
                  alt="Acessórios compatíveis do VELOURS X"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-85" />

                <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-blue-500" />
                    <span className="text-xs font-mono text-slate-300">Módulos Intercambiáveis</span>
                  </div>
                  <span className="text-xs text-slate-400">Lâminas de Precisão</span>
                </div>
              </div>
            </div>

            {/* Head Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400">
                  {activeHead.tagline}
                </span>
                <h4 className="text-2xl font-bold text-white">{activeHead.name}</h4>
                <p className="text-sm text-slate-300 leading-relaxed">{activeHead.description}</p>
              </div>

              <div className="rounded-xl border border-white/8 bg-[#07090F] p-4 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-white">Indicação</span>
                    <p className="text-xs text-slate-300 mt-0.5">{activeHead.idealFor}</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={PRODUCT_DATA.checkoutUrl}
                  target="_top"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Comprar VELOURS X agora</span>
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section: "Um presente que combina com a rotina" */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-r from-[#0C111E] to-[#080D18] p-8 sm:p-12 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
                <Gift className="h-4 w-4" />
                <span>Apresentação Sofisticada</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white [text-wrap:balance]">
                {PRODUCT_DATA.giftSection.title}
              </h3>
              <p className="text-base text-slate-200 font-medium">
                {PRODUCT_DATA.giftSection.question}
              </p>
              <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                {PRODUCT_DATA.giftSection.description}
              </p>
              <div className="pt-2">
                <a
                  href={PRODUCT_DATA.checkoutUrl}
                  target="_top"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition-colors"
                >
                  <span>QUERO O MEU VELOURS X</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img
                  src={PRODUCT_IMAGES.boxPackage}
                  alt="Apresentação do kit VELOURS X para presente"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
