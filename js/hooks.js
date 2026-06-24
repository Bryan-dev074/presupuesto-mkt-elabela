/* =====================================================================
   hooks.js · Matriz de ganchos criativos (Ângulos → roteiro + hook 3s)
   ===================================================================== */
(function () {
  "use strict";

  const ANGLES = [
    {
      id: "dolor",
      icon: "😣",
      label: "Dor do cliente",
      hook: '“Pare de jogar dinheiro fora em produtos que não dão resultado…”',
      script:
        'Identificamos o problema frustrante que o cliente sofre e abrimos mostrando essa dor de forma reconhecível. Em seguida apresentamos o produto da Ela Bela como a solução direta, com prova visual e CTA de compra ou mensagem privada. Fechamento com a promessa de resultado em primeira pessoa.',
    },
    {
      id: "demo",
      icon: "✨",
      label: "Demonstração direta",
      hook: '“Veja isto antes de comprar…”',
      script:
        'Vamos direto ao ponto: mostramos o produto em ação nos primeiros 3 segundos, sem introduções longas. Enfatizamos o detalhe, a textura e o resultado real. Dublagem em português neutro e natural, com legendas grandes. CTA claro: “Comente COMPRAR e eu te envio o link”.',
    },
    {
      id: "unboxing",
      icon: "📦",
      label: "Unboxing emocional",
      hook: '“Isto chegou hoje e eu não acredito…”',
      script:
        'Abrimos com a emoção do unboxing: mãos, embalagem, primeiro contato com o produto. Geramos curiosidade e desejo. A voz do influenciador de IA transmite um espanto genuíno em português brasileiro. Fechamos com escassez (“últimas unidades”) e link na bio.',
    },
    {
      id: "social",
      icon: "🔥",
      label: "Prova social",
      hook: '“Por que todo mundo está falando disto…”',
      script:
        'Construímos autoridade mostrando que muitas pessoas já escolheram o produto: prints de avaliações, comentários, antes/depois. O gancho ativa o viés de pertencimento. O influenciador de IA apresenta com energia e credibilidade. CTA: “Junte-se a quem já experimentou”.',
    },
    {
      id: "transformation",
      icon: "🚀",
      label: "Transformação",
      hook: '“Disto… para isto, em uma semana…”',
      script:
        'Mostramos um antes e depois claro e aspiracional. O produto é a ponte entre o estado atual e o desejado. Narramos a transformação com voz persuasiva em português. Fechamento com garantia/risco zero e CTA de compra direta ou WhatsApp.',
    },
    {
      id: "curiosidad",
      icon: "🤫",
      label: "Curiosidade / truque",
      hook: '“O truque que ninguém te conta sobre…”',
      script:
        'Abrimos com um mistério ou dado contraintuitivo que para o scroll. Mantemos a tensão por 3-5 segundos antes de revelar que a resposta é o produto da Ela Bela. Voz em off intrigante. CTA que convida a descobrir mais escrevendo por DM.',
    },
  ];

  const tabsWrap = document.getElementById("hookTabs");
  const content = document.getElementById("hookContent");
  let active = ANGLES[0].id;

  function renderTabs() {
    tabsWrap.innerHTML = ANGLES.map(
      (a) =>
        `<button class="hook-tab ${a.id === active ? "is-active" : ""}" data-id="${a.id}">${a.icon} ${a.label}</button>`
    ).join("");
    tabsWrap.querySelectorAll(".hook-tab").forEach((btn) =>
      btn.addEventListener("click", () => {
        active = btn.dataset.id;
        renderTabs();
        renderContent();
      })
    );
  }

  function renderContent() {
    const a = ANGLES.find((x) => x.id === active);
    content.innerHTML = `
      <div class="hook-block">
        <h4>⚡ Gancho de 3 segundos</h4>
        <p class="hook-script">${a.hook}</p>
        <p class="mt-3 text-xs text-slate-500">Gerado para parar o scroll e reter a atenção na janela crítica.</p>
      </div>
      <div class="hook-block">
        <h4>🎬 Roteiro rápido (Higgsfield + ElevenLabs)</h4>
        <p class="hook-script">${a.script}</p>
        <p class="mt-3 text-xs text-slate-500">Produção pronta em um único dia · dublagem perfeita em português brasileiro.</p>
      </div>`;
  }

  renderTabs();
  renderContent();
})();
