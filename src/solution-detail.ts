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

const requestedSolution = new URLSearchParams(window.location.search).get('solucion');
const solution =
  siteConfig.solutionCategories.find((item) => item.id === requestedSolution) ??
  siteConfig.solutionCategories[0];
const cover = solution.items.find((item) => item.image);

document.title = `${solution.label} | Soluciones Zumac`;
document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute('content', solution.intro);

const canonical = document.createElement('link');
canonical.rel = 'canonical';
canonical.href = `https://zumac.com.pe/solucion.html?solucion=${solution.id}`;
document.head.append(canonical);

app.innerHTML = `
  <header class="detail-header">
    <div class="container detail-header-inner">
      <a class="brand" href="./index.html#inicio" aria-label="Zumac, volver al inicio">
        <img class="brand-mark" src="./logo-zumac.png" alt="" width="40" height="40" />
        <span>${siteConfig.brand}</span>
      </a>
      <a class="button button-small detail-back" href="./index.html#soluciones">Volver a soluciones</a>
    </div>
  </header>

  <main id="contenido">
    <section class="detail-hero">
      <div class="container detail-hero-grid">
        <div class="detail-hero-copy">
          <p class="eyebrow eyebrow-light">Solución Zumac</p>
          <h1>${solution.label}</h1>
          <p>${solution.intro}</p>
          <a class="button button-primary" href="./index.html#contacto">Hablemos de tu operación</a>
        </div>
        <figure class="detail-hero-media">
          ${cover?.image
            ? `<img src="${cover.image}" alt="${cover.alt ?? solution.label}" width="1280" height="720" />`
            : `<div class="detail-media-placeholder"><strong>Planillas</strong><span>Gestión conectada con la operación</span></div>`}
          <figcaption>La solución se configura de acuerdo con los procesos, responsables y permisos de cada empresa.</figcaption>
        </figure>
      </div>
    </section>

    <section class="detail-content section" aria-labelledby="solution-detail-title">
      <div class="container">
        <div class="section-heading section-heading-left">
          <p class="eyebrow">Qué contiene</p>
          <h2 class="section-title" id="solution-detail-title">Información clara para trabajar y decidir mejor.</h2>
        </div>
        <div class="solution-detail-list">
          ${solution.items
            .map(
              (item, index) => `
                <article class="solution-detail-item${index % 2 ? ' solution-detail-item-reverse' : ''}">
                  ${item.image
                    ? `<figure>
                        <img src="${item.image}" alt="${item.alt ?? item.title}" width="1280" height="720" loading="lazy" />
                      </figure>`
                    : `<div class="detail-media-placeholder"><strong>${item.title}</strong><span>Configuración a medida</span></div>`}
                  <div>
                    <p class="overline">Zumac</p>
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    ${item.imageNote ? `<small>${item.imageNote}</small>` : ''}
                  </div>
                </article>
              `,
            )
            .join('')}
        </div>
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
