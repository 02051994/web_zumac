export function renderAbout(): string {
  return `
    <section class="section about" id="nosotros" aria-labelledby="about-title">
      <div class="container">
        <div class="section-intro section-intro-split">
          <p class="eyebrow reveal">Una forma distinta de avanzar</p>
          <div>
            <h2 id="about-title" class="section-title reveal">
              La tecnología debe adaptarse a tu operación,
              <span>no al revés.</span>
            </h2>
            <p class="section-lead reveal">
              Zumac es una plataforma modular creada para acercar el dato a las
              personas que lo generan y convertirlo en información útil para
              quienes toman decisiones.
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
            <a class="text-link" href="#servicios">Cómo trabajamos <span aria-hidden="true">→</span></a>
          </article>

          <div class="flow-card reveal" aria-label="Flujo de información en Zumac">
            <div class="flow-topline">
              <span>FLUJO OPERATIVO</span>
              <span>TRAZABLE</span>
            </div>
            <ol class="flow-list">
              <li>
                <span class="flow-index">01</span>
                <div><strong>Captura</strong><small>El dato nace donde ocurre el trabajo</small></div>
                <span class="flow-state">Origen</span>
              </li>
              <li>
                <span class="flow-index">02</span>
                <div><strong>Sincroniza</strong><small>La información mantiene su continuidad</small></div>
                <span class="flow-state">Conecta</span>
              </li>
              <li>
                <span class="flow-index">03</span>
                <div><strong>Comprende</strong><small>Los indicadores muestran lo importante</small></div>
                <span class="flow-state">Analiza</span>
              </li>
              <li>
                <span class="flow-index">04</span>
                <div><strong>Actúa</strong><small>Cada hallazgo llega a un responsable</small></div>
                <span class="flow-state flow-state-active">Resuelve</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  `;
}
