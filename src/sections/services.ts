import { siteConfig } from '../data/site';

export function renderServices(): string {
  const cards = siteConfig.services
    .map(
      ({ id, title, description }) => `
        <a class="service-card reveal" href="./servicio.html?servicio=${id}" aria-label="Conocer el servicio ${title}">
          <div>
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
        <div class="section-heading section-heading-center">
          <p class="eyebrow reveal">Servicios</p>
          <h2 id="services-title" class="section-title reveal">
            Construimos contigo, <span>paso a paso.</span>
          </h2>
          <p class="section-lead reveal">
            Partimos de tus procesos actuales, priorizamos lo que genera valor
            y construimos una solución que puede evolucionar contigo.
          </p>
        </div>
        <div class="services-grid">${cards}</div>
      </div>
    </section>
  `;
}
