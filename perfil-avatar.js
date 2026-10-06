/**
 * <perfil-avatar> : componente de foto de perfil reutilizável (Web Component, sem framework).
 *
 * Uso:
 *   <script type="module" src="perfil-avatar.js"></script>
 *   <perfil-avatar
 *     src="img/avatar-felipe.webp"
 *     src-2x="img/avatar-felipe@2x.webp"
 *     fallback="img/avatar-felipe.png"
 *     alt="Avatar de Felipe em estilo 3D: homem sorridente de cabelo e olhos castanhos, bigode e cavanhaque"
 *     nome="Felipe Comploier"
 *     tamanho="md"
 *     prioridade="baixa">
 *   </perfil-avatar>
 *
 * Atributos:
 *   src        imagem principal (recomendado .webp, quadrada)
 *   src-2x     versão em dobro de resolução para telas retina (opcional)
 *   fallback   imagem .png/.jpg para navegadores sem webp (opcional)
 *   alt        texto alternativo; se vazio, o avatar é tratado como decorativo
 *   nome       usado para as iniciais caso a imagem falhe
 *   tamanho    sm (40px) | md (72px) | lg (128px) | xl (180px) | ou um valor CSS (ex.: "6rem")
 *   prioridade "alta" para avatar visível no primeiro carregamento (desliga lazy loading)
 *   interativo presença do atributo ativa foco por teclado e efeito de hover
 */

const TAMANHOS = { sm: "40px", md: "72px", lg: "128px", xl: "180px" };

const estilo = `
  :host {
    --avatar-tamanho: 72px;
    --avatar-borda: rgba(255, 255, 255, 0.9);
    --avatar-anel: rgba(43, 63, 143, 0.18);
    --avatar-fundo: #e9ecf6;
    --avatar-texto: #2b3f8f;
    --avatar-sombra: 0 6px 16px rgba(20, 24, 40, 0.16), 0 2px 4px rgba(20, 24, 40, 0.10);
    --avatar-sombra-hover: 0 12px 28px rgba(20, 24, 40, 0.22), 0 4px 8px rgba(20, 24, 40, 0.12);
    display: inline-block;
    inline-size: var(--avatar-tamanho);
    block-size: var(--avatar-tamanho);
    max-inline-size: 100%;
    flex: none;
  }
  @media (prefers-color-scheme: dark) {
    :host {
      --avatar-borda: rgba(255, 255, 255, 0.14);
      --avatar-anel: rgba(143, 166, 255, 0.25);
      --avatar-fundo: #1f2433;
      --avatar-texto: #8fa6ff;
      --avatar-sombra: 0 6px 16px rgba(0, 0, 0, 0.45), 0 2px 4px rgba(0, 0, 0, 0.35);
      --avatar-sombra-hover: 0 12px 28px rgba(0, 0, 0, 0.55), 0 4px 8px rgba(0, 0, 0, 0.4);
    }
  }
  .moldura {
    position: relative;
    inline-size: 100%;
    block-size: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    overflow: hidden;
    background: var(--avatar-fundo);
    border: 3px solid var(--avatar-borda);
    box-shadow: var(--avatar-sombra), 0 0 0 4px var(--avatar-anel);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }
  picture, img {
    display: block;
    inline-size: 100%;
    block-size: 100%;
  }
  img {
    object-fit: cover;
    object-position: center 30%;
    border-radius: 50%;
  }
  .iniciais {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    font: 700 calc(var(--avatar-tamanho) * 0.36) / 1 system-ui, sans-serif;
    color: var(--avatar-texto);
    letter-spacing: 0.02em;
    user-select: none;
  }
  :host([interativo]) .moldura { cursor: pointer; }
  :host([interativo]) .moldura:focus-visible {
    outline: 3px solid var(--avatar-texto);
    outline-offset: 3px;
  }
  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    :host([interativo]) .moldura:hover {
      transform: translateY(-3px) scale(1.04);
      box-shadow: var(--avatar-sombra-hover), 0 0 0 5px var(--avatar-anel);
    }
  }
  @media (prefers-reduced-motion: no-preference) {
    :host([interativo]) .moldura:active { transform: scale(0.97); }
  }
`;

class PerfilAvatar extends HTMLElement {
  static get observedAttributes() {
    return ["src", "src-2x", "fallback", "alt", "nome", "tamanho", "prioridade", "interativo"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() { this.render(); }
  attributeChangedCallback() { if (this.isConnected) this.render(); }

  iniciais() {
    const nome = (this.getAttribute("nome") || "").trim();
    if (!nome) return "?";
    const partes = nome.split(/\s+/);
    const a = partes[0][0] || "";
    const b = partes.length > 1 ? partes[partes.length - 1][0] : "";
    return (a + b).toUpperCase();
  }

  render() {
    const tam = this.getAttribute("tamanho") || "md";
    this.style.setProperty("--avatar-tamanho", TAMANHOS[tam] || tam);

    const src = this.getAttribute("src");
    const src2x = this.getAttribute("src-2x");
    const fallback = this.getAttribute("fallback");
    const alt = this.getAttribute("alt") || "";
    const alta = this.getAttribute("prioridade") === "alta";
    const interativo = this.hasAttribute("interativo");
    const px = parseInt(TAMANHOS[tam] || "180", 10) || 180;

    const sr = this.shadowRoot;
    sr.innerHTML = `<style>${estilo}</style>`;

    const moldura = document.createElement("div");
    moldura.className = "moldura";
    if (interativo) {
      moldura.setAttribute("role", "button");
      moldura.setAttribute("tabindex", "0");
      moldura.setAttribute("aria-label", alt || `Perfil de ${this.getAttribute("nome") || "usuário"}`);
      moldura.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); moldura.click(); }
      });
      moldura.addEventListener("click", () =>
        this.dispatchEvent(new CustomEvent("avatar-click", { bubbles: true, composed: true }))
      );
    }

    const mostrarIniciais = () => {
      moldura.innerHTML = "";
      const span = document.createElement("span");
      span.className = "iniciais";
      span.textContent = this.iniciais();
      if (alt) { span.setAttribute("role", "img"); span.setAttribute("aria-label", alt); }
      else span.setAttribute("aria-hidden", "true");
      moldura.appendChild(span);
    };

    if (!src) {
      mostrarIniciais();
    } else {
      const picture = document.createElement("picture");
      if (src.endsWith(".webp")) {
        const source = document.createElement("source");
        source.type = "image/webp";
        source.srcset = src2x ? `${src} 1x, ${src2x} 2x` : src;
        picture.appendChild(source);
      }
      const img = document.createElement("img");
      img.src = fallback || src;
      if (!fallback && src2x) img.srcset = `${src} 1x, ${src2x} 2x`;
      img.alt = alt;                                   // vazio = decorativo
      if (!alt) img.setAttribute("aria-hidden", "true");
      img.width = px;                                  // evita salto de layout
      img.height = px;
      img.decoding = "async";
      img.loading = alta ? "eager" : "lazy";
      if (alta) img.setAttribute("fetchpriority", "high");
      img.draggable = false;
      img.addEventListener("error", mostrarIniciais, { once: true });
      picture.appendChild(img);
      moldura.appendChild(picture);
    }

    sr.appendChild(moldura);
  }
}

if (!customElements.get("perfil-avatar")) customElements.define("perfil-avatar", PerfilAvatar);
export default PerfilAvatar;
