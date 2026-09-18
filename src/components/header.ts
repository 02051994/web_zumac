import { siteConfig } from '../data/site';

export function renderHeader(): string {
  const links = siteConfig.navigation
    .map(
      ({ label, href }) =>
        `<a class="nav-link" href="${href}">${label}</a>`,
    )
    .join('');

  return `
    <header class="site-header" data-header>
      <div class="container header-inner">
        <a class="brand" href="#inicio" aria-label="Zumac, ir al inicio">
          <img class="brand-mark" src="./favicon.png" alt="" width="40" height="40" />
          <span>${siteConfig.brand}</span>
        </a>

        <nav class="desktop-nav" aria-label="Navegación principal">
          ${links}
        </nav>

        <a class="button button-small button-light header-cta" href="#contacto">
          Hablemos
        </a>

        <button
          class="menu-toggle"
          type="button"
          aria-label="Abrir menú"
          aria-controls="mobile-menu"
          aria-expanded="false"
          data-menu-toggle
        >
          <span></span><span></span>
        </button>
      </div>

      <div class="mobile-menu" id="mobile-menu" data-mobile-menu hidden>
        <nav aria-label="Navegación móvil">
          ${links}
          <a class="button button-primary" href="#contacto">Conversemos</a>
        </nav>
      </div>
    </header>
  `;
}
