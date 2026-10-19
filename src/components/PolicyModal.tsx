import React from 'react';
import { X, ShieldCheck, FileText, RefreshCw, Truck } from 'lucide-react';

export type PolicyType = 'privacy' | 'terms' | 'shipping' | 'guarantee' | null;

interface PolicyModalProps {
  type: PolicyType;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const contentMap = {
    privacy: {
      title: 'Política de Privacidade',
      icon: <ShieldCheck className="h-5 w-5 text-blue-400" />,
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            A <strong>VELOURS X</strong> valoriza e respeita a privacidade de todos os seus
            clientes e usuários. Seus dados cadastrais (nome, endereço, e-mail e telefone) são
            utilizados unicamente para o processamento de pedidos, faturamento e envio de
            notificações sobre o status da entrega.
          </p>
          <p>
            <strong>Segurança dos Dados Financeiros:</strong> Todos os dados de pagamento são
            processados em ambiente criptografado com padrão bancário SSL de 256 bits. Nossa loja
            não tem acesso e não armazena números de cartões de crédito.
          </p>
          <p>
            <strong>Compartilhamento:</strong> Não vendemos, alugamos ou repassamos informações de
            clientes para terceiros, exceto para transportadoras e operadoras de pagamento estritamente
            para viabilizar a entrega de sua compra.
          </p>
        </div>
      ),
    },
    terms: {
      title: 'Termos de Compra e Serviço',
      icon: <FileText className="h-5 w-5 text-blue-400" />,
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Ao realizar um pedido do barbeador <strong>VELOURS X</strong> nesta página oficial, você
            concorda com os termos e condições descritos neste documento.
          </p>
          <p>
            <strong>Valores e Promoções:</strong> Os preços e condições especiais de frete grátis
            anunciados são válidos por tempo limitado ou enquanto durarem os estoques promocionais do
            lote de importação.
          </p>
          <p>
            <strong>Confirmação de Pedido:</strong> O envio é processado após a confirmação do
            pagamento. Para pagamentos via Pix ou Cartão de Crédito, a aprovação costuma ser imediata.
            Para boleto bancário, a compensação pode levar de 1 a 2 dias úteis.
          </p>
        </div>
      ),
    },
    shipping: {
      title: 'Envios e Prazos de Entrega',
      icon: <Truck className="h-5 w-5 text-emerald-400" />,
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            <strong>Frete Grátis:</strong> Disponibilizamos frete gratuito para todos os estados do
            Brasil com envio segurado pelos Correios ou transportadoras parceiras.
          </p>
          <p>
            <strong>Prazo de Despacho:</strong> Os pedidos são separados, conferidos e despachados
            em até 24 a 48 horas úteis após a compensação do pagamento.
          </p>
          <p>
            <strong>Rastreamento:</strong> Assim que a remessa é coletada, o código de rastreamento é
            enviado automaticamente para o e-mail e WhatsApp informados no checkout para acompanhamento
            em tempo real. O prazo estimado habitual varia de 3 a 7 dias úteis conforme a localidade.
          </p>
        </div>
      ),
    },
    guarantee: {
      title: 'Garantia e Política de Devolução',
      icon: <RefreshCw className="h-5 w-5 text-blue-400" />,
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            <strong>Garantia Incondicional de 30 Dias:</strong> Confiamos na qualidade e eficiência do
            VELOURS X. Se dentro de 30 dias após o recebimento você não estiver satisfeito com o
            aparelho, basta entrar em contato com nosso suporte para instruções de devolução e
            reembolso integral.
          </p>
          <p>
            <strong>Garantia de 1 Ano contra Defeitos Técnicos:</strong> O produto possui 12 meses de
            cobertura contra defeitos de fabricação de motor, bateria e circuitos elétricos.
          </p>
          <p>
            <strong>Condições para Devolução:</strong> O kit deve ser devolvido com o aparelho, todas as
            3 cabeças de corte, acessórios originais e embalagem preservada.
          </p>
        </div>
      ),
    },
  };

  const selected = contentMap[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-[#0C101B] p-6 shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            {selected.icon}
            <h3 className="text-base font-bold text-white">{selected.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="py-4 max-h-[60vh] overflow-y-auto pr-1">
          {selected.content}
        </div>

        <div className="pt-3 border-t border-white/10 text-right">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-white/20 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
