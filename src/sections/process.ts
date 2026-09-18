export function renderProcess(): string {
  return `
    <section class="section process" aria-labelledby="process-title">
      <div class="container">
        <div class="section-heading section-heading-center process-copy">
          <p class="eyebrow reveal">Cómo empezamos</p>
          <h2 id="process-title" class="section-title reveal">
            Primero entendemos. <span>Luego construimos.</span>
          </h2>
          <p class="section-lead reveal">
            La transformación funciona mejor cuando parte de una necesidad real,
            se prueba con usuarios y crece con evidencia.
          </p>
        </div>

        <div class="process-steps">
          <article class="reveal">
            <h3>Escuchamos</h3>
            <p>Conocemos el proceso, a las personas y el resultado que necesitan.</p>
          </article>
          <article class="reveal">
            <h3>Diseñamos</h3>
            <p>Ordenamos el flujo y configuramos una primera solución útil y medible.</p>
          </article>
          <article class="reveal">
            <h3>Evolucionamos</h3>
            <p>Aprendemos del uso real e incorporamos mejoras sin detener la operación.</p>
          </article>
        </div>
      </div>
    </section>
  `;
}
