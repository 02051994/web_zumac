import { siteConfig, type NavigationItem } from '../data/site';

function renderChildLink(child: NonNullable<NavigationItem['children']>[number], className: string): string {
  return `<a class="${className}" href="${child.href}">${child.label}</a>`;
}

function renderDesktopItem(item: NavigationItem): string {
  if (!item.children?.length) {
    return `<a class="nav-link" href="${item.href}">${item.label}</a>`;
  }

  return `
    <div class="nav-item">
      <button
        class="nav-link nav-link-parent"
        type="button"
        aria-haspopup="true"
        aria-expanded="false"
        data-nav-parent
      >${item.label}</button>
      <div class="nav-submenu" aria-label="Opciones de ${item.label}">
        ${item.children.map((child) => renderChildLink(child, 'nav-sublink')).join('')}
      </div>
    </div>
  `;
}

function renderMobileItem(item: NavigationItem): string {
  if (!item.children?.length) {
    return `<a class="nav-link" href="${item.href}">${item.label}</a>`;
  }

  return `
    <details class="mobile-nav-group">
      <summary>${item.label}</summary>
      <div class="mobile-nav-children">
        ${item.children.map((child) => renderChildLink(child, 'mobile-nav-sublink')).join('')}
      </div>
    </details>
  `;
}

export function renderHeader(): string {
  const desktopLinks = siteConfig.navigation.map(renderDesktopItem).join('');
  const mobileLinks = siteConfig.navigation.map(renderMobileItem).join('');

  return `
    <header class="site-header" data-header>
      <div class="container header-inner">
        <a class="brand" href="#inicio" aria-label="Zumac, ir al inicio">
          <img class="brand-mark" src="./logo-zumac.png" alt="" width="40" height="40" />
          <span>${siteConfig.brand}</span>
        </a>

        <nav class="desktop-nav" aria-label="Navegación principal">
          ${desktopLinks}
        </nav>

        <a class="button button-small header-cta" href="#contacto">Hablemos</a>

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
          ${mobileLinks}
          <a class="button button-primary" href="#contacto">Conversemos</a>
        </nav>
      </div>
    </header>
  `;
}
