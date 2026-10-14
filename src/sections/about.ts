const capabilities = [
  ['Registra', 'Captura datos desde aplicaciones móviles o sistemas web, incluso cuando trabajas sin internet.'],
  ['Supervisa', 'Revisa registros, valida resultados y aprueba cada operación cuando el proceso lo requiera.'],
  ['Crea o edita formatos', 'Con Zumac Creator crea nuevos formatos o ajusta los existentes sin rehacer todo el sistema.'],
  ['Consulta', 'Encuentra información de cualquier área y responde preguntas clave sobre tu negocio.'],
  ['Analiza', 'Construye o modifica gráficos e indicadores para comprender resultados y tendencias.'],
  ['Alertas', 'Define avisos sobre actividades, vencimientos o datos que representen un riesgo.'],
  ['Permisos', 'Controla qué puede ver, crear, editar o aprobar cada usuario según su rol y responsabilidad.'],
];

export function renderAbout(): string {
  return `
    <section class="section about" id="nosotros" aria-labelledby="about-title">
      <div class="container">
        <div class="section-heading section-heading-left about-intro">
          <p class="eyebrow reveal">Del campo a la oficina</p>
          <h2 id="about-title" class="section-title reveal">
            La tecnología debe adaptarse a tu operación, no al revés.
          </h2>
          <p class="section-lead reveal">
            Zumac acerca el dato a las personas que lo generan y lo convierte
            en información útil para quienes necesitan actuar y decidir.
          </p>
        </div>

        <div class="operation-route reveal">
          <h3>Una sola ruta para toda tu operación.</h3>
          <p>
            Diseñamos sistemas para que encuentres todo en un solo lugar.
            Registra, supervisa, crea reglas de negocio y controla quién accede
            a tu información de manera segura.
          </p>
        </div>

        <div class="capability-ribbon" aria-label="Capacidades operativas de Zumac">
          ${capabilities
            .map(
              ([title, description]) => `
                <article class="capability-card reveal">
                  <h3>${title}</h3>
                  <p>${description}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </div>
    </section>
  `;
}
