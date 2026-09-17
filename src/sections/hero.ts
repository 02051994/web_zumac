export function renderHero(): string {
  return `
    <section class="hero" id="inicio" aria-labelledby="hero-title">
      <div class="hero-media" aria-hidden="true"></div>
      <div class="hero-overlay" aria-hidden="true"></div>
      <div class="hero-grid" aria-hidden="true"></div>

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
            <a class="button button-primary" href="#soluciones">
              Conoce la plataforma <span aria-hidden="true">↓</span>
            </a>
            <a class="text-link text-link-light" href="#contacto">
              Cuéntanos tu reto <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <aside class="hero-signal reveal" aria-label="Capacidades principales">
          <div class="signal-heading">
            <span class="signal-pulse" aria-hidden="true"></span>
            Operación conectada
          </div>
          <ul>
            <li><span>01</span> Trabajo online y offline</li>
            <li><span>02</span> Procesos configurables</li>
            <li><span>03</span> Datos trazables</li>
          </ul>
        </aside>
      </div>

      <div class="container hero-foot" aria-hidden="true">
        <span>Explora</span>
        <i></i>
        <span>01 — 05</span>
      </div>
    </section>
  `;
}
