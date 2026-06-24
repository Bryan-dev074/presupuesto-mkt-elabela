/* =====================================================================
   segmentation.js · Exemplo interativo de segmentação por público
   Mostra como muda a estratégia conforme produto / mercado / idioma
   ===================================================================== */
(function () {
  "use strict";

  const EXAMPLES = [
    {
      id: "py-basico",
      label: "PY · Produto básico",
      persona: "Mulher 22–35 · Paraguai",
      interests: ["Skincare diário", "Hidratação", "Maquiagem natural", "Cuidado pessoal econômico"],
      behaviors: ["Compra em marketplace", "Interage com reels de beleza", "Busca avaliações em espanhol"],
      angle: "Dor + preço acessível",
      hook: "“Se o seu hidratante deixa a pele repuxada… experimente isto.”",
      lang: "Espanhol (paraguaio neutro)",
      note: "Ex: um creme facial de uso diário. O ângulo vai ao problema (pele seca) e posiciona o produto como solução econômica. Dublagem em espanhol com tom próximo.",
      color: "#2dd4bf",
    },
    {
      id: "br-estrella",
      label: "BR · Produto estrela",
      persona: "Mulher 18–30 · Brasil",
      interests: ["Maquiagem completa", "Tendências de beleza", "Influenciadores de beleza", "Unhas e cabelo"],
      behaviors: ["Compra por impulso", "Segue creators de beleza", "Assiste tutoriais longos"],
      angle: "Transformação aspiracional",
      hook: "“Do básico ao arrasão em 60 segundos…”",
      lang: "Português (BR natural)",
      note: "Ex: um iluminador ou batom em tendência. Ângulo de transformação 'antes e depois', voz em português brasileiro com energia. Público que compra por impulso e segue creators.",
      color: "#e879f9",
    },
    {
      id: "py-regalo",
      label: "PY · Produto de presente",
      persona: "Mulher 25–45 que presenteia",
      interests: ["Presentes", "Datas especiais", "Autocuidado", "Beleza para presentear"],
      behaviors: ["Compra em datas-chave (Dia das Mães, Dia dos Namorados)", "Busca kits/combos", "Valoriza a apresentação"],
      angle: "Emoção + apresentação",
      hook: "“O presente que vai deixá-la sem palavras…”",
      lang: "Espanhol (paraguaio)",
      note: "Kit ou produto com embalagem atraente. O gancho brinca com a emoção de presentear. Segmentação temporal conforme o calendário de datas comerciais do Paraguai.",
      color: "#fbbf24",
    },
    {
      id: "br-pro",
      label: "BR · Linha profissional",
      persona: "Profissional de beleza · Brasil",
      interests: ["Produtos profissionais", "Salão de beleza", "Cursos de maquiagem", "Atacado cosméticos"],
      behaviors: ["Compra em volume", "Participa de comunidades B2B", "Pesquisa fornecedores"],
      angle: "Qualidade profissional + rentabilidade",
      hook: "“O que as profissionais usam para fidelizar clientes…”",
      lang: "Português (BR técnico)",
      note: "Linha para maquiadoras/profissionais. Ângulo B2B: rentabilidade e fidelização de clientes. Linguagem técnica, dublagem em português formal. Público de menor volume mas ticket maior.",
      color: "#60a5fa",
    },
  ];

  const tabsWrap = document.getElementById("segTabs");
  const content = document.getElementById("segContent");
  if (!tabsWrap || !content) return;

  let active = EXAMPLES[0].id;

  function renderTabs() {
    tabsWrap.innerHTML = EXAMPLES.map(
      (e) => `<button class="seg-tab ${e.id === active ? "is-active" : ""}" data-id="${e.id}" style="--seg-color:${e.color}">${e.label}</button>`
    ).join("");
    tabsWrap.querySelectorAll(".seg-tab").forEach((btn) =>
      btn.addEventListener("click", () => {
        active = btn.dataset.id;
        renderTabs();
        renderContent();
      })
    );
  }

  function chip(text) {
    return `<span class="seg-chip">${text}</span>`;
  }

  function renderContent() {
    const e = EXAMPLES.find((x) => x.id === active);
    content.innerHTML = `
      <!-- Coluna esquerda: definição de audiência -->
      <div class="seg-block" style="--seg-color:${e.color}">
        <div class="seg-block-head" style="color:${e.color}">
          <span class="seg-block-icon">👥</span>
          Público-alvo
        </div>
        <div class="seg-persona">${e.persona}</div>
        <div class="mt-4 text-[11px] uppercase tracking-widest text-slate-500">Interesses</div>
        <div class="mt-2 flex flex-wrap gap-2">${e.interests.map(chip).join("")}</div>
        <div class="mt-4 text-[11px] uppercase tracking-widest text-slate-500">Comportamentos</div>
        <div class="mt-2 flex flex-wrap gap-2">${e.behaviors.map(chip).join("")}</div>
        <div class="mt-4 text-[11px] uppercase tracking-widest text-slate-500">Idioma de produção</div>
        <div class="mt-2">${chip(e.lang)}</div>
      </div>

      <!-- Coluna direita: estratégia de conteúdo -->
      <div class="seg-block">
        <div class="seg-block-head" style="color:${e.color}">
          <span class="seg-block-icon">🎬</span>
          Estratégia criativa resultante
        </div>
        <div class="mt-3">
          <div class="text-[11px] uppercase tracking-widest text-slate-500">Ângulo recomendado</div>
          <div class="mt-1 font-display text-lg font-semibold text-slate-100">${e.angle}</div>
        </div>
        <div class="mt-4">
          <div class="text-[11px] uppercase tracking-widest text-slate-500">Gancho de 3 segundos</div>
          <div class="mt-1 seg-hook">${e.hook}</div>
        </div>
        <div class="mt-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 text-xs text-slate-400 leading-relaxed">
          <strong class="text-slate-200">Por quê:</strong> ${e.note}
        </div>
      </div>`;
  }

  renderTabs();
  renderContent();
})();
