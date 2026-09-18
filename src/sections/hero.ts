export function renderHero(): string {
  return `
    <section class="hero" id="inicio" aria-labelledby="hero-title" data-hero>
      <div class="hero-grid" aria-hidden="true"></div>

      <div class="hero-slides" aria-live="polite">
        <article class="hero-slide is-active" data-hero-slide>
          <div class="container hero-content">
            <div class="hero-copy">
              <p class="eyebrow eyebrow-light reveal">Tecnología para operaciones que no se detienen</p>
              <h1 id="hero-title" class="reveal">
                Conecta tu operación.<br />
                <span>Decide con claridad.</span>
              </h1>
              <p class="hero-lead reveal">
                Digitaliza procesos, organiza información y transforma cada dato en
                una acción oportuna, incluso cuando tu equipo trabaja sin conexión.
              </p>
              <div class="hero-actions reveal">
                <a class="button button-primary" href="#soluciones">Conoce la plataforma</a>
                <a class="text-link text-link-light" href="#contacto">Cuéntanos tu reto</a>
              </div>
            </div>

            <figure class="hero-product reveal">
              <img
                src="./images/system/zumac-metrics.png"
                alt="Panel de análisis de Zumac Metrics con indicadores y gráfico de tendencias"
                width="1280"
                height="720"
              />
              <figcaption>Indicadores, tendencias y filtros en una vista preparada para decidir.</figcaption>
            </figure>
          </div>
        </article>

        <article class="hero-slide" data-hero-slide hidden>
          <div class="container hero-content">
            <div class="hero-copy">
              <p class="eyebrow eyebrow-light">Herramientas para construir y comprender</p>
              <h2>
                Tu operación cambia.<br />
                <span>Zumac evoluciona contigo.</span>
              </h2>
              <p class="hero-lead">
                Crea tus propias secciones, módulos y formatos, consulta la información
                desde un solo lugar y conviértela en decisiones claras con Zumac Metrics.
              </p>
              <div class="hero-actions">
                <a class="button button-primary" href="#servicios">Conoce las herramientas</a>
                <a class="text-link text-link-light" href="#contacto">Cuéntanos tu reto</a>
              </div>
            </div>

            <figure class="hero-product">
              <img
                src="./images/system/herramientas-zumac.png"
                alt="Herramientas de Zumac para crear secciones, módulos, formatos y reglas"
                width="1280"
                height="720"
              />
              <figcaption>Configura procesos, valida la experiencia y publica mejoras de forma controlada.</figcaption>
            </figure>
          </div>
        </article>
      </div>

      <button class="hero-nav hero-nav-prev" type="button" aria-label="Ver imagen anterior" data-hero-prev>
        <span aria-hidden="true">‹</span>
      </button>
      <button class="hero-nav hero-nav-next" type="button" aria-label="Ver imagen siguiente" data-hero-next>
        <span aria-hidden="true">›</span>
      </button>

      <div class="hero-dots" role="group" aria-label="Seleccionar imagen de portada">
        <button class="hero-dot is-active" type="button" aria-label="Mostrar análisis de datos" aria-pressed="true" data-hero-dot="0"></button>
        <button class="hero-dot" type="button" aria-label="Mostrar herramientas de Zumac" aria-pressed="false" data-hero-dot="1"></button>
      </div>
    </section>
  `;
}
