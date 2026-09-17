import { siteConfig } from '../data/site';

export function renderServices(): string {
  const cards = siteConfig.services
    .map(
      ({ number, title, description }) => `
        <article class="service-card reveal">
          <span class="service-number">${number}</span>
          <div>
            <h3>${title}</h3>
            <p>${description}</p>
          </div>
          <span class="service-arrow" aria-hidden="true">↗</span>
        </article>
      `,
    )
    .join('');

  return `
    <section class="section services" id="servicios" aria-labelledby="services-title">
      <div class="container">
        <div class="section-intro section-intro-row">
          <div>
            <p class="eyebrow reveal">Servicios</p>
            <h2 id="services-title" class="section-title reveal">
              Construimos contigo,<br /><span>paso a paso.</span>
            </h2>
          </div>
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
