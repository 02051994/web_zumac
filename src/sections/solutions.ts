import { siteConfig } from '../data/site';

export function renderSolutions(): string {
  const cards = siteConfig.solutionCategories
    .map((category) => {
      const cover = category.items.find((item) => item.image);
      return `
        <a
          class="solution-overview-card reveal"
          href="./solucion.html?solucion=${category.id}"
          aria-label="Conocer la solución ${category.label}"
        >
          <div class="solution-overview-media">
            ${cover?.image
              ? `<img src="${cover.image}" alt="${cover.alt ?? ''}" width="1280" height="720" loading="lazy" />`
              : `<div class="solution-placeholder"><strong>Planillas</strong><span>Gestión conectada</span></div>`}
          </div>
          <div class="solution-overview-copy">
            <h3>${category.label}</h3>
            <p>${category.intro}</p>
            <span>Ver solución <b aria-hidden="true">›</b></span>
          </div>
        </a>
      `;
    })
    .join('');

  return `
    <section class="section solutions" id="soluciones" aria-labelledby="solutions-title">
      <div class="container">
        <div class="section-heading section-heading-left solution-heading">
          <p class="eyebrow eyebrow-light reveal">Soluciones</p>
          <h2 id="solutions-title" class="section-title section-title-light reveal">
            Control para procesos reales de tu operación.
          </h2>
          <p class="section-lead section-lead-light reveal">
            Soluciones para asistencia, jornadas, planillas, documentos,
            campo, reglas de negocio y flujos de trabajo.
          </p>
        </div>
        <div class="solution-overview-grid">${cards}</div>
      </div>
    </section>
  `;
}
