import React, { useState } from 'react';
import { PRODUCT_DATA, PRODUCT_IMAGES } from '../data/productData';
import { Check, ShieldCheck, Box, Sliders, Maximize2 } from 'lucide-react';

export const ProductVisuals: React.FC = () => {
  const galleryItems = [
    {
      id: 'shaver-front',
      title: 'Aparelho VELOURS X com Display LED',
      description: 'Design ergonômico em preto profundo com acabamento metálico e iluminação sutil.',
      image: PRODUCT_IMAGES.heroShaver,
    },
    {
      id: 'heads-kit',
      title: 'Kit de 3 Módulos de Corte',
      description: 'Cabeça rotativa 3D para barba, lâmina em T de acabamento e ponteira anatômica de nariz.',
      image: PRODUCT_IMAGES.headsKit,
    },
    {
      id: 'macro-blade',
      title: 'Engenharia de Lâminas em Aço Inox',
      description: 'Lâminas autoafiáveis com dentes microrretificados para corte preciso e confortável.',
      image: PRODUCT_IMAGES.macroBlades,
    },
    {
      id: 'box-package',
      title: 'Embalagem & Kit Completo de Acessórios',
      description: 'Estojo rígido com berço protetor, cabo de recarga USB, escova de limpeza e manual.',
      image: PRODUCT_IMAGES.boxPackage,
    },
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const activeItem = galleryItems[selectedImageIndex];

  return (
    <section id="acessorios" className="py-20 bg-[#06080C]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
              Galeria Visual & Detalhes
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Precisão em cada ângulo
            </h2>
            <p className="mt-2 text-base text-slate-300">
              Imagens reais do produto demonstrando acabamentos, ergonomia e conjunto completo.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span>Foto {selectedImageIndex + 1} de {galleryItems.length}</span>
          </div>
        </div>

        {/* Gallery Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Gallery Display */}
          <div className="lg:col-span-8 space-y-4">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0D121F] shadow-2xl">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-center transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06080C]/90 via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-400">
                  Visualização de Produto
                </span>
                <h3 className="mt-1 text-xl sm:text-2xl font-bold text-white">
                  {activeItem.title}
                </h3>
                <p className="mt-1 text-sm text-slate-300 max-w-2xl">
                  {activeItem.description}
                </p>
              </div>
            </div>

            {/* Thumbnail Selectors */}
            <div className="grid grid-cols-4 gap-3 sm:gap-4">
              {galleryItems.map((item, idx) => {
                const isSelected = idx === selectedImageIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative aspect-[4/3] overflow-hidden rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'border-blue-500 ring-2 ring-blue-500/30'
                        : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/20'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: "O Que Acompanha" & Specs Highlight */}
          <div className="lg:col-span-4 space-y-6">
            {/* Box Contents Card */}
            <div className="rounded-2xl border border-white/8 bg-[#0D121F] p-6">
              <div className="flex items-center gap-3 pb-4 border-b border-white/8">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600/10 text-blue-400">
                  <Box className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Conteúdo da Embalagem</h3>
                  <p className="text-xs text-slate-400">Tudo incluso no estojo original</p>
                </div>
              </div>

              <ul className="mt-4 space-y-2.5 text-xs text-slate-300">
                {PRODUCT_DATA.boxItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="h-3.5 w-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Highlights Quick Card */}
            <div className="rounded-2xl border border-white/8 bg-[#0D121F] p-6">
              <div className="flex items-center gap-3 pb-4 border-b border-white/8">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600/10 text-blue-400">
                  <Sliders className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Especificações Principais</h3>
                  <p className="text-xs text-slate-400">Conforme dados do fabricante</p>
                </div>
              </div>

              <dl className="mt-4 divide-y divide-white/5 text-xs">
                {PRODUCT_DATA.technicalSpecs.slice(0, 5).map((spec, i) => (
                  <div key={i} className="py-2.5 flex justify-between items-center">
                    <dt className="text-slate-400">{spec.label}</dt>
                    <dd className="font-semibold text-white text-right">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
