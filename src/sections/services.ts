import { siteConfig } from '../data/site';

export function renderServices(): string {
  const cards = siteConfig.services
    .map(
      ({ id, title, description, image }) => `
        <a
          class="service-card reveal"
          id="servicio-${id}"
          href="./servicio.html?servicio=${id}"
          aria-label="Conocer el servicio ${title}"
        >
          <div class="service-card-media">
            <img src="${image}" alt="" width="960" height="640" loading="lazy" />
          </div>
          <div class="service-card-copy">
            <h3>${title}</h3>
            <p>${description}</p>
          </div>
          <span class="service-arrow" aria-hidden="true">›</span>
        </a>
      `,
    )
    .join('');

  return `
    <section class="section services" id="servicios" aria-labelledby="services-title">
      <div class="container">
        <div class="section-heading section-heading-left">
          <p class="eyebrow reveal">Servicios</p>
          <h2 id="services-title" class="section-title reveal">
            Creamos la solución que tu empresa necesita.
          </h2>
          <p class="section-lead reveal">
            Aplicaciones móviles, sistemas web y herramientas personalizadas
            para cualquier rubro, acompañadas por soporte y mejora continua.
          </p>
        </div>
        <div class="services-grid">${cards}</div>
      </div>
    </section>
  `;
}
