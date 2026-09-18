import './styles/tokens.css';
import './styles/base.css';
import './styles/header.css';
import './styles/contact.css';
import './styles/service-detail.css';

import { siteConfig } from './data/site';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('No se encontró el contenedor principal de la aplicación.');
}

const requestedService = new URLSearchParams(window.location.search).get('servicio');
const service = siteConfig.services.find((item) => item.id === requestedService) ?? siteConfig.services[0];

document.title = `${service.title} | Zumac`;

app.innerHTML = `
  <header class="detail-header">
    <div class="container detail-header-inner">
      <a class="brand" href="./index.html#inicio" aria-label="Zumac, volver al inicio">
        <img class="brand-mark" src="./favicon.png" alt="" width="40" height="40" />
        <span>${siteConfig.brand}</span>
      </a>
      <a class="button button-small detail-back" href="./index.html#servicios">Volver a servicios</a>
    </div>
  </header>

  <main id="contenido">
    <section class="detail-hero">
      <div class="container detail-hero-grid">
        <div class="detail-hero-copy">
          <p class="eyebrow eyebrow-light">${service.title}</p>
          <h1>${service.detailTitle}</h1>
          <p>${service.detailIntro}</p>
          <a class="button button-primary" href="./index.html#contacto">Hablemos de tu operación</a>
        </div>
        <figure class="detail-hero-media">
          <img src="${service.image}" alt="Vista demostrativa de ${service.title} en Zumac" width="1280" height="720" />
          <figcaption>Vista demostrativa construida con herramientas del sistema Zumac.</figcaption>
        </figure>
      </div>
    </section>

    <section class="detail-content section" aria-labelledby="detail-focus-title">
      <div class="container">
        <div class="section-heading section-heading-center">
          <p class="eyebrow">Qué contiene</p>
          <h2 class="section-title" id="detail-focus-title">Una solución pensada para <span>trabajar mejor.</span></h2>
        </div>
        <div class="detail-focus-grid">
          ${service.focus
            .map(
              (item) => `
                <article>
                  <h3>${item.title}</h3>
                  <p>${item.description}</p>
                </article>
              `,
            )
            .join('')}
        </div>
        <figure class="detail-wide-media">
          <img src="${service.secondaryImage}" alt="Segunda vista demostrativa de ${service.title} en Zumac" width="1280" height="720" loading="lazy" />
          <figcaption>La configuración final se adapta al proceso, los permisos y la información de cada empresa.</figcaption>
        </figure>
      </div>
    </section>

    <section class="detail-cta">
      <div class="container detail-cta-inner">
        <div>
          <p class="eyebrow eyebrow-light">Conversemos</p>
          <h2>Podemos empezar por un proceso concreto.</h2>
        </div>
        <a class="button button-primary" href="mailto:${siteConfig.email}">Escribir a ${siteConfig.email}</a>
      </div>
    </section>
  </main>

  <footer class="site-footer detail-footer">
    <div class="container footer-bottom">
      <span>© <span data-year></span> Zumac. Todos los derechos reservados.</span>
      <a href="./index.html#inicio">Ir al sitio principal</a>
    </div>
  </footer>
`;

document.querySelectorAll<HTMLElement>('[data-year]').forEach((item) => {
  item.textContent = String(new Date().getFullYear());
});
