import { siteConfig } from '../data/site';

export function renderSolutions(): string {
  const tabs = siteConfig.solutionCategories
    .map(
      (category, index) => `
        <button
          class="solution-tab${index === 0 ? ' is-active' : ''}"
          id="tab-${category.id}"
          type="button"
          role="tab"
          aria-selected="${index === 0}"
          aria-controls="panel-${category.id}"
          tabindex="${index === 0 ? '0' : '-1'}"
          data-solution-tab="${category.id}"
        >
          ${category.label}
        </button>
      `,
    )
    .join('');

  const panels = siteConfig.solutionCategories
    .map(
      (category, index) => `
        <section
          class="solution-panel${index === 0 ? ' is-active' : ''}"
          id="panel-${category.id}"
          role="tabpanel"
          aria-labelledby="tab-${category.id}"
          ${index === 0 ? '' : 'hidden'}
          data-solution-panel="${category.id}"
        >
          <p class="solution-category-intro">${category.intro}</p>
          <div class="solution-card-grid">
            ${category.items
              .map(
                (item) => `
                  <article class="solution-card">
                    <div class="solution-card-media">
                      <img src="${item.image}" alt="${item.alt}" width="1280" height="720" loading="lazy" />
                    </div>
                    <div class="solution-card-copy">
                      <h3>${item.title}</h3>
                      <p>${item.description}</p>
                    </div>
                  </article>
                `,
              )
              .join('')}
          </div>
        </section>
      `,
    )
    .join('');

  return `
    <section class="section solutions" id="soluciones" aria-labelledby="solutions-title">
      <div class="container">
        <div class="section-heading section-heading-center solution-heading">
          <p class="eyebrow eyebrow-light reveal">Soluciones</p>
          <h2 id="solutions-title" class="section-title section-title-light reveal">
            Tecnología para resolver <span>necesidades concretas.</span>
          </h2>
          <p class="section-lead section-lead-light reveal">
            Elige un rubro y descubre soluciones preparadas para procesos reales de operación y gestión.
          </p>
        </div>

        <div class="solutions-shell reveal">
          <div class="solution-tabs" role="tablist" aria-label="Rubros atendidos por Zumac">
            ${tabs}
          </div>
          <div class="solution-panels">${panels}</div>
        </div>
      </div>
    </section>
  `;
}
