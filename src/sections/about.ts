export function renderAbout(): string {
  return `
    <section class="section about" id="nosotros" aria-labelledby="about-title">
      <div class="container">
        <div class="section-intro about-intro">
          <div>
            <h2 id="about-title" class="section-title reveal">
              La tecnología debe adaptarse a tu operación,
              <span>no al revés.</span>
            </h2>
            <p class="section-lead reveal">
              Zumac acerca el dato a las personas que lo generan y lo convierte
              en información útil para quienes necesitan actuar y decidir.
            </p>
          </div>
        </div>

        <div class="about-grid">
          <article class="about-story reveal">
            <p class="overline">DEL CAMPO A LA OFICINA</p>
            <h3>Una sola ruta para cada dato.</h3>
            <p>
              Diseñamos flujos simples para registrar, validar, sincronizar y
              consultar información sin perder el contexto de la operación.
            </p>
            <a class="text-link" href="#servicios">Cómo trabajamos</a>
          </article>

          <div class="flow-card reveal" aria-label="Flujo de información en Zumac">
            <div class="flow-topline">
              <span>FLUJO OPERATIVO</span>
              <span>TRAZABLE</span>
            </div>
            <div class="flow-list">
              <div class="flow-item">
                <div><strong>Captura</strong><small>El dato nace donde ocurre el trabajo</small></div>
                <span class="flow-state">Origen</span>
              </div>
              <div class="flow-item">
                <div><strong>Sincroniza</strong><small>La información mantiene su continuidad</small></div>
                <span class="flow-state">Conecta</span>
              </div>
              <div class="flow-item">
                <div><strong>Comprende</strong><small>Los indicadores muestran lo importante</small></div>
                <span class="flow-state">Analiza</span>
              </div>
              <div class="flow-item">
                <div><strong>Actúa</strong><small>Cada hallazgo llega a un responsable</small></div>
                <span class="flow-state flow-state-active">Resuelve</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
