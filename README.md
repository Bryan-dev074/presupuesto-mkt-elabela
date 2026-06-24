# Proposta de Marketing Digital · Ela Bela

Aplicação web interativa, ultramoderna e persuasiva para apresentar à diretoria da **Ela Bela** uma proposta de campanha de validação internacional com **Influenciadores de IA** (Higgsfield + ElevenLabs), produção bilíngue **espanhol (Paraguai) + português (Brasil)**, distribuição em Meta / YouTube / TikTok e gestão estratégica incluída a custo zero.

> Stack: HTML + **Tailwind CSS (compilado em um CSS estático)** + JavaScript modular (vanilla). Site 100% estático, sem dependências externas em tempo de execução. Deploy direto no GitHub Pages servido a partir da branch `main`.

---

## ✨ Funcionalidades

- **Navbar + Footer** com logo da Ela Bela (`assets/glow.png`), scroll suave, menu mobile e **destaque do link ativo** (scrollspy).
- **Barra de progresso de scroll** e **botão "voltar ao topo"** flutuante.
- **Resumo executivo (TL;DR)** interativo: O quê · Por quê · Para quê em 30 segundos.
- **O cérebro da campanha (seção estrela)**: a complexidade oculta da mídia paga digital, mão de obra a $0, **exemplo interativo de segmentação por público/idioma** (4 casos reais PY/BR) e metodologia de pesquisa (Google Trends, TikTok Creative Center, Biblioteca de Anúncios da Meta, analisadores de anúncios, controle de CPA, testes A/B).
- **Calculadora de orçamento em tempo real**: sliders de Meta e YouTube, toggle do TikTok com mínimo técnico de $20/dia, totalizador animado e detalhamento.
- **Exportação para PDF**: botão *Imprimir proposta personalizada* que gera um PDF com a configuração exata.
- **Comparativo IA vs. Humano** com chave de troca visual.
- **Funil de conversão** com **mapa de fluxo tipo diagrama** (Produção IA → mercados → canais → saídas de negócio → loop de otimização).
- **Simulador Fast Ad Iteration**: slider de dias (1–10) com medidor de fadiga publicitária.
- **Matriz de ganchos criativos**: 6 ângulos com hook de 3s e roteiro gerado na hora.
- **FAQ** em acordeão moderno.
- **CTA "Dar Sinal Verde"** que abre o WhatsApp (link `wa.me`) com confete de celebração.
- Paleta premium **Slate/Zinc + Teal**, glassmorphism, animações suaves (contadores animados, parallax sutil, reveal com desfoque), acessibilidade e modo de impressão otimizado.

---

## 📁 Estrutura do projeto

```
presupuesto-mkt-elabela/
├── index.html              # Marcação completa de todas as seções
├── tailwind.config.js      # Configuração do Tailwind (tema, cores, animações)
├── .nojekyll               # Evita o processamento Jekyll no GitHub Pages
├── css/
│   ├── tailwind.input.css  # Entrada do Tailwind (@tailwind base/components/utilities)
│   ├── tailwind.css         # ⚙️ CSS do Tailwind COMPILADO (gerado — não editar à mão)
│   └── styles.css          # Estilos premium próprios (paleta, sliders, glassmorphism, diagrama, print)
├── js/
│   ├── app.js              # Navbar, scroll, menu mobile, reveal
│   ├── enhance.js          # Progresso de scroll, scrollspy, voltar ao topo, contadores, parallax
│   ├── calculator.js       # Calculadora de orçamento + exportação PDF
│   ├── comparison.js       # Toggle IA vs. Humano
│   ├── simulator.js        # Fast Ad Iteration + fadiga
│   ├── segmentation.js     # Exemplo interativo de segmentação por público
│   ├── hooks.js            # Matriz de ganchos criativos
│   ├── faq.js              # Acordeão de perguntas frequentes
│   ├── confetti.js         # Efeito festivo no botão "Dar Sinal Verde"
│   └── spotlight.js        # Glow que segue o cursor nos cards de ferramentas
├── assets/
│   ├── glow.png            # Logo real da Ela Bela (usado em Navbar/Footer/favicon)
│   └── logo-elabela.svg    # Logo placeholder (não referenciado, substituído por glow.png)
└── README.md
```

### 🔁 Substituir o logo real da Ela Bela

O projeto já usa o logo real da loja em `assets/glow.png` (integrado como "selo de marca" em um chip claro sobre o fundo escuro, na Navbar, Footer e favicon). Para trocá-lo por outro arquivo:

1. Salve sua imagem como **`assets/glow.png`** (recomendado: PNG com fundo claro/transparente, ≥ 300×300 px para manter a nitidez).
2. No `index.html`, as referências já apontam para `assets/glow.png` (Navbar, Footer e `<link rel="icon">`). Basta sobrescrever o arquivo.
3. O chip do logo usa a classe `.logo-chip` (em `css/styles.css`).

---

## 🎨 Recompilar os estilos do Tailwind

Os estilos do Tailwind estão **pré-compilados** em `css/tailwind.css` (por isso o site carrega na hora e não depende de nenhum CDN externo). Você só precisa recompilar se **adicionar ou mudar classes do Tailwind** no HTML ou nos arquivos JS:

```bash
npx tailwindcss@3 -i css/tailwind.input.css -o css/tailwind.css --minify
```

> A varredura de classes é configurada em `tailwind.config.js` (`content: ["./index.html", "./js/**/*.js"]`). Não edite `css/tailwind.css` à mão: ele é sobrescrito a cada compilação.

---

## 🚀 Deploy no GitHub Pages

Como o site é **100% estático** (o CSS do Tailwind já está compilado), o GitHub Pages o serve diretamente a partir da branch `main`, sem workflow nem etapa de build:

1. Entre no repositório no GitHub → aba **Settings**.
2. Menu lateral esquerdo → **Pages**.
3. Em **Build and deployment** → *Source* selecione **Deploy from a branch**.
4. Em *Branch* escolha **`main`** e a pasta **`/ (root)`**, e clique em **Save**.

Em 1–2 minutos sua proposta estará pública em:

```
https://bryan-dev074.github.io/presupuesto-mkt-elabela/
```

O arquivo `.nojekyll` (na raiz) evita que o GitHub processe o site com Jekyll, servindo-o como está.

> **⚠️ Importante — usar UM único mecanismo de deploy.** Não combine *"Deploy from a branch"* com um workflow do GitHub Actions que também faça deploy para o Pages: ambos competem pelo mesmo ambiente `github-pages` e se bloqueiam/cancelam mutuamente (essa era a causa dos erros). Por isso este projeto usa apenas o modo branch. Se no futuro você preferir GitHub Actions, mude *Source* para **"GitHub Actions"** e adicione um workflow — mas então **não** use também o modo branch.

### Publicar mudanças

```bash
git add .
git commit -m "sua mensagem"
git push origin main
```

Cada `push` na `main` é publicado sozinho em 1–2 minutos.

---

## 🖨️ Uso da calculadora

1. Mova os sliders de Meta e YouTube.
2. Ative/desative o TikTok (aplica automaticamente o mínimo de $20/dia).
3. Veja o total mensal recalcular em tempo real.
4. Clique em **"Imprimir / exportar proposta (PDF)"** e escolha *Salvar como PDF*.

---

## ♿ Acessibilidade e desempenho

- Navegação por teclado e `aria-*` nos controles interativos.
- Respeita `prefers-reduced-motion` (desativa animações para quem preferir).
- **CSS do Tailwind compilado e minificado** (~24 KB): carga instantânea, sem CDN externo nem FOUC, funciona mesmo que a rede bloqueie serviços de terceiros.
- Fallback `<noscript>`: o conteúdo é exibido completo mesmo com o JavaScript desativado.

---

**Confidencial · Preparado para a diretoria da Ela Bela · 2026**
