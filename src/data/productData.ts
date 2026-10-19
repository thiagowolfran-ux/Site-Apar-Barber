export interface ProductHead {
  id: string;
  name: string;
  tagline: string;
  description: string;
  idealFor: string;
}

export interface ProductSpec {
  label: string;
  value: string;
  detail?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'produto' | 'bateria' | 'entrega' | 'garantia';
}

export const PRODUCT_IMAGES = {
  heroShaver: '/src/assets/images/hero_velours_shaver_1792451172792.jpg',
  headsKit: '/src/assets/images/product_velours_heads_1792451173034.jpg',
  macroBlades: '/src/assets/images/product_velours_lifestyle_1792451174130.jpg',
  boxPackage: '/src/assets/images/product_velours_box_kit_1792451173563.jpg',
};

export const PRODUCT_DATA = {
  name: 'VELOURS X 3 em 1',
  fullName: 'Barbeador Elétrico Multifuncional VELOURS X 3 em 1',
  category: 'Cuidados Pessoais Masculinos',
  model: 'VX-PRO-31',
  
  // Official Headline & Subheadline
  headline: 'Seu cuidado pessoal. Em outro nível.',
  subheadline:
    'Mais praticidade, versatilidade e estilo para a sua rotina. Conheça o VELOURS X, um barbeador elétrico multifuncional desenvolvido para reunir funções essenciais de cuidados pessoais em um design compacto e moderno.',
  taglineStatement: 'Um aparelho versátil para acompanhar você todos os dias.',
  
  // Checkout & External URL
  checkoutUrl: 'https://pay.kaiross.com.br/9ZOfsHUM4BvN',
  
  // Pricing & Commercial
  originalPrice: 289.9,
  currentPrice: 109.9,
  pixDiscountPercent: 5,
  get pixPrice() {
    return +(this.currentPrice * (1 - this.pixDiscountPercent / 100)).toFixed(2);
  },
  maxInstallments: 12,
  get installmentValue() {
    return +(this.currentPrice / this.maxInstallments).toFixed(2);
  },

  // 4 Core Benefits ("Mais praticidade. Menos complicação.")
  benefitsSectionTitle: 'Mais praticidade. Menos complicação.',
  benefits: [
    {
      title: 'Versatilidade 3 em 1',
      description:
        'Funções para barba, acabamento e nariz, de acordo com os acessórios compatíveis do aparelho.',
      tag: '3 em 1',
    },
    {
      title: 'Liberdade sem fio',
      description:
        'Mais mobilidade para realizar seus cuidados pessoais sem depender de um cabo durante o uso.',
      tag: '100% Sem Fio',
    },
    {
      title: 'Bateria recarregável',
      description:
        'Autonomia anunciada de até 60 minutos de uso sem fio, conforme as condições de utilização.',
      tag: 'Até 60 Minutos',
    },
    {
      title: 'Design moderno e compacto',
      description:
        'Uma proposta funcional para sua rotina em casa ou para levar em viagens.',
      tag: 'Design Compacto',
    },
  ],

  // Gift Section ("Um presente que combina com a rotina")
  giftSection: {
    title: 'Um presente que combina com a rotina',
    question: 'Procurando um presente útil, moderno e com uma apresentação sofisticada?',
    description:
      'O VELOURS X é uma opção para quem valoriza praticidade e cuidados pessoais. Uma escolha que pode surpreender pela combinação de funcionalidade e design.',
  },

  // Offer Section Copy
  offerSection: {
    title: 'Escolha praticidade para o seu dia a dia.',
    description:
      'Adicione o VELOURS X ao carrinho e confira as condições de pagamento e entrega disponíveis para sua região.',
    cta: 'QUERO O MEU VELOURS X',
  },

  // 3 Interchangeable Heads
  heads: [
    {
      id: 'shaver',
      name: 'Cabeça Rotativa para Barba',
      tagline: 'Corte rente e adaptável',
      description:
        'Anéis duplos de corte que acompanham as linhas do rosto para uma barba bem cuidada.',
      idealFor: 'Barba diária e contornos faciais',
    },
    {
      id: 'trimmer',
      name: 'Aparador de Acabamento',
      tagline: 'Contornos e linhas definidas',
      description:
        'Lâmina de alta precisão para alinhar costeletas, bigode e desenhar contornos.',
      idealFor: 'Costeletas, bigode e pezinho',
    },
    {
      id: 'nose',
      name: 'Aparador de Nariz e Orelha',
      tagline: 'Cuidado higiênico e seguro',
      description:
        'Ponta cilíndrica anatômica desenvolvida para aparar pelos das narinas e orelhas com segurança.',
      idealFor: 'Pelos indesejados nas narinas e orelhas',
    },
  ] as ProductHead[],

  // Technical Specs
  technicalSpecs: [
    { label: 'Autonomia Anunciada', value: 'Até 60 minutos sem fio' },
    { label: 'Bateria', value: 'Recarregável' },
    { label: 'Conexão de Recarga', value: 'Cabo USB incluso' },
    { label: 'Alimentação', value: 'Bivolt (100V - 240V)' },
    { label: 'Funções', value: '3 em 1 (Barba, Acabamento e Nariz)' },
    { label: 'Acessórios Inclusos', value: 'Aparelho, 3 cabeças, cabo USB e escova de limpeza' },
    { label: 'Design', value: 'Compacto, ergonômico e portátil' },
  ] as ProductSpec[],

  // Box Items
  boxItems: [
    'Aparelho principal VELOURS X',
    'Cabeça rotativa para barba',
    'Cabeça aparadora de acabamento',
    'Cabeça para pelos de nariz e orelha',
    'Pente guia de acabamento',
    'Cabo de recarga USB',
    'Escovinha para limpeza',
    'Manual de instruções',
  ],

  // Frequently Asked Questions (Exact matching user brief)
  faqs: [
    {
      category: 'bateria',
      question: 'O aparelho funciona sem fio?',
      answer: 'Sim. O produto é anunciado com funcionamento sem fio e bateria recarregável.',
    },
    {
      category: 'bateria',
      question: 'Quanto tempo dura a bateria?',
      answer:
        'A embalagem informa até 60 minutos de uso sem fio. A autonomia real pode variar conforme a utilização.',
    },
    {
      category: 'produto',
      question: 'Quais funções ele possui?',
      answer:
        'O produto é apresentado como 3 em 1, para barba, acabamento e nariz. Consulte os acessórios e as instruções do modelo para confirmar os usos compatíveis.',
    },
    {
      category: 'produto',
      question: 'O que acompanha o produto?',
      answer:
        'Consulte as imagens e a descrição completa do kit para verificar todos os itens incluídos.',
    },
    {
      category: 'entrega',
      question: 'Como funciona a entrega e a garantia?',
      answer:
        'Consulte as condições apresentadas na finalização da compra e nas políticas oficiais da loja.',
    },
  ] as FaqItem[],

  // Support
  supportPhone: '(11) 98765-4321',
  supportEmail: 'contato@veloursx.com.br',
  businessHours: 'Segunda a Sexta, das 09h às 18h',
};
