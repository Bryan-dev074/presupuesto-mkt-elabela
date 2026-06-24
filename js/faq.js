/* =====================================================================
   faq.js · Acordeão de perguntas frequentes
   ===================================================================== */
(function () {
  "use strict";

  const FAQS = [
    {
      q: "Dá para perceber que o influenciador é IA?",
      a: "Com Higgsfield + ElevenLabs o resultado é visual e vocalmente realista, com dublagem natural em português brasileiro. O objetivo não é enganar, e sim produzir conteúdo de alta qualidade em velocidade industrial. Além disso, as plataformas normalizam cada vez mais o conteúdo gerado com IA quando ele agrega valor real ao espectador.",
    },
    {
      q: "O que acontece se os caracteres do ElevenLabs acabarem?",
      a: "O plano Starter ($6/mês) cobre com folga a produção da Fase 1. Se a demanda de vídeos crescer, o plano é escalável por faixas muito baixas. Monitoro o consumo semanalmente e ajusto antes que exista risco de corte, de modo que a produção nunca para.",
    },
    {
      q: "Por que o TikTok Ads está pausado na Fase 1?",
      a: "O TikTok exige um mínimo técnico de $20 USD por dia (~$600/mês). Para otimizar o orçamento inicial, concentramos o investimento em Meta e YouTube, que já impulsionam o crescimento orgânico do TikTok como canal colateral a custo zero. Quando os dados justificarem, ativamos a mídia paga no TikTok na Fase 2.",
    },
    {
      q: "Como medimos se a campanha funciona?",
      a: "Com duas métricas de negócio, não de vaidade: compras realizadas na loja online e mensagens privadas (DM/WhatsApp) qualificadas. Reportamos o custo de aquisição (CPA) por anúncio e otimizamos de acordo. Se um ângulo não converte, é trocado em 3–5 dias.",
    },
    {
      q: "Em quanto tempo vemos resultados?",
      a: "A configuração técnica leva alguns dias. Os primeiros anúncios de teste rodam em ciclos de 3–5 dias, então os primeiros sinais de desempenho (cliques, mensagens, vendas) costumam aparecer nas primeiras duas semanas, com otimização contínua a partir daí.",
    },
    {
      q: "O orçamento pode ser ajustado a qualquer momento?",
      a: "Sim. Os controles deslizantes da calculadora refletem exatamente como trabalhamos: o orçamento diário de Meta e YouTube pode ser aumentado ou reduzido em tempo real. Nada é rígido — tudo se otimiza conforme o desempenho real.",
    },
  ];

  const list = document.getElementById("faqList");
  if (!list) return;

  list.innerHTML = FAQS.map(
    (f, i) => `
    <details class="faq-item" ${i === 0 ? "open" : ""}>
      <summary class="faq-q">
        <span>${f.q}</span>
        <span class="faq-icon" aria-hidden="true">
          <svg class="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"/></svg>
        </span>
      </summary>
      <div class="faq-a">${f.a}</div>
    </details>`
  ).join("");
})();
