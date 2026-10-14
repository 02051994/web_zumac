export function renderHero(): string {
  return `
    <section class="hero" id="inicio" aria-labelledby="hero-title" data-hero>
      <div class="hero-slides" aria-live="polite">
        <article class="hero-slide hero-slide-dashboard is-active" data-hero-slide>
          <img
            class="hero-background"
            src="./images/hero/flujo-compras-oficina.png"
            alt=""
            width="1536"
            height="1024"
            aria-hidden="true"
          />
          <div class="container hero-content">
            <div class="hero-copy reveal">
              <p class="eyebrow eyebrow-light">Análisis operativo en una sola vista</p>
              <h1 id="hero-title">Tus datos listos para decidir.</h1>
              <p class="hero-lead">
                Conecta procesos, controla indicadores y convierte la información diaria
                en decisiones claras para toda tu operación.
              </p>
              <div class="hero-actions">
                <a class="button button-primary" href="#soluciones">Conoce la plataforma</a>
                <a class="button button-secondary" href="#contacto">Cuéntanos tu reto</a>
              </div>
            </div>
          </div>
        </article>

        <article class="hero-slide hero-slide-tools" data-hero-slide aria-hidden="true">
          <img
            class="hero-background"
            src="./images/hero/mejores-herramientas.png"
            alt=""
            width="1902"
            height="892"
            aria-hidden="true"
          />
          <p class="hero-tools-label">Las Mejores Herramientas</p>
          <div class="container hero-content">
            <div class="hero-copy">
              <p class="eyebrow eyebrow-light">Una plataforma que crece contigo</p>
              <h2>Todo tu trabajo. Una sola plataforma.</h2>
              <p class="hero-lead">
                Crea formatos, aplica reglas, consulta datos y coordina acciones desde
                herramientas preparadas para tu empresa.
              </p>
              <div class="hero-actions">
                <a class="button button-primary" href="#servicios">Conoce la plataforma</a>
                <a class="button button-secondary" href="#contacto">Cuéntanos tu reto</a>
              </div>
            </div>
          </div>
        </article>
      </div>

      <button class="hero-nav hero-nav-prev" type="button" aria-label="Ver fondo anterior" data-hero-prev>
        <span aria-hidden="true">‹</span>
      </button>
      <button class="hero-nav hero-nav-next" type="button" aria-label="Ver fondo siguiente" data-hero-next>
        <span aria-hidden="true">›</span>
      </button>

      <div class="hero-dots" role="group" aria-label="Seleccionar fondo de portada">
        <button class="hero-dot is-active" type="button" aria-label="Mostrar flujo operativo de Zumac" aria-pressed="true" data-hero-dot="0"></button>
        <button class="hero-dot" type="button" aria-label="Mostrar las mejores herramientas" aria-pressed="false" data-hero-dot="1"></button>
      </div>
    </section>
  `;
}
