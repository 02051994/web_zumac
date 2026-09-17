import { siteConfig } from '../data/site';

export function renderSolutions(): string {
  const tabs = siteConfig.solutions
    .map(
      (solution, index) => `
        <button
          class="solution-tab${index === 0 ? ' is-active' : ''}"
          id="tab-${solution.id}"
          type="button"
          role="tab"
          aria-selected="${index === 0}"
          aria-controls="panel-${solution.id}"
          tabindex="${index === 0 ? '0' : '-1'}"
          data-solution-tab="${solution.id}"
        >
          <span>0${index + 1}</span>${solution.shortLabel}
        </button>
      `,
    )
    .join('');

  const panels = siteConfig.solutions
    .map(
      (solution, index) => `
        <article
          class="solution-panel${index === 0 ? ' is-active' : ''}"
          id="panel-${solution.id}"
          role="tabpanel"
          aria-labelledby="tab-${solution.id}"
          ${index === 0 ? '' : 'hidden'}
          data-solution-panel="${solution.id}"
        >
          <p class="overline">${solution.eyebrow}</p>
          <h3>${solution.title}</h3>
          <p>${solution.description}</p>
          <ul>
            ${solution.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}
          </ul>
        </article>
      `,
    )
    .join('');

  return `
    <section class="section solutions" id="soluciones" aria-labelledby="solutions-title">
      <div class="container">
        <div class="section-intro solution-heading">
          <div>
            <p class="eyebrow eyebrow-light reveal">Soluciones</p>
            <h2 id="solutions-title" class="section-title section-title-light reveal">
              Un sistema modular.<br /><span>Muchas formas de avanzar.</span>
            </h2>
          </div>
          <p class="section-lead section-lead-light reveal">
            Activa lo que necesitas hoy y añade nuevas capacidades cuando tu
            operación esté lista para el siguiente paso.
          </p>
        </div>

        <div class="solutions-shell reveal">
          <div class="solution-tabs" role="tablist" aria-label="Capacidades de Zumac">
            ${tabs}
          </div>
          <div class="solution-panels">${panels}</div>
          <div class="solution-visual" aria-hidden="true">
            <div class="orbit orbit-one"></div>
            <div class="orbit orbit-two"></div>
            <div class="solution-core">
              <img src="./favicon.png" alt="" width="56" height="56" />
              <span>ZUMAC</span>
            </div>
            <span class="node node-one">DATOS</span>
            <span class="node node-two">ACCIÓN</span>
            <span class="node node-three">DECISIÓN</span>
          </div>
        </div>
      </div>
    </section>
  `;
}
