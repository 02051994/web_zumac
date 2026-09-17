export function renderProcess(): string {
  return `
    <section class="section process" aria-labelledby="process-title">
      <div class="container process-grid">
        <div class="process-copy">
          <p class="eyebrow reveal">Cómo empezamos</p>
          <h2 id="process-title" class="section-title reveal">
            Primero entendemos.<br /><span>Luego construimos.</span>
          </h2>
          <p class="section-lead reveal">
            La transformación funciona mejor cuando parte de una necesidad real,
            se prueba con usuarios y crece con evidencia.
          </p>
        </div>

        <ol class="process-steps">
          <li class="reveal">
            <span>01</span>
            <div><h3>Escuchamos</h3><p>Conocemos el proceso, a las personas y el resultado que necesitan.</p></div>
          </li>
          <li class="reveal">
            <span>02</span>
            <div><h3>Diseñamos</h3><p>Ordenamos el flujo y configuramos una primera solución útil y medible.</p></div>
          </li>
          <li class="reveal">
            <span>03</span>
            <div><h3>Evolucionamos</h3><p>Aprendemos del uso real e incorporamos mejoras sin detener la operación.</p></div>
          </li>
        </ol>
      </div>
    </section>
  `;
}
