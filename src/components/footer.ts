import { siteConfig } from '../data/site';

export function renderFooter(): string {
  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <a class="brand brand-footer" href="#inicio" aria-label="Zumac, ir al inicio">
            <img class="brand-mark" src="./favicon.png" alt="" width="40" height="40" />
            <span>${siteConfig.brand}</span>
          </a>
          <p>Tecnología para operaciones que quieren avanzar con claridad.</p>
        </div>
        <div class="footer-links">
          ${siteConfig.navigation
            .map(({ label, href }) => `<a href="${href}">${label}</a>`)
            .join('')}
        </div>
        <div class="footer-contact">
          <span>Contacto</span>
          <a href="mailto:${siteConfig.email}">${siteConfig.email}</a>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>© <span data-year></span> Zumac. Todos los derechos reservados.</span>
        <span>Hecho en Perú</span>
      </div>
    </footer>
  `;
}
