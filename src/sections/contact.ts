import { siteConfig } from '../data/site';

export function renderContact(): string {
  return `
    <section class="section contact" id="contacto" aria-labelledby="contact-title">
      <div class="container">
        <div class="contact-shell">
          <div class="contact-copy">
            <p class="eyebrow eyebrow-light reveal">Contacto</p>
            <h2 id="contact-title" class="section-title section-title-light reveal">
              Cuéntanos qué quieres<br /><span>mejorar en tu operación.</span>
            </h2>
            <p class="section-lead section-lead-light reveal">
              No necesitas tener la solución definida. Empecemos por el proceso
              que hoy te quita más tiempo o visibilidad.
            </p>
            <a class="contact-email reveal" href="mailto:${siteConfig.email}">
              <span>Correo directo</span>
              <strong>${siteConfig.email}</strong>
            </a>
          </div>

          <form class="contact-form reveal" data-contact-form novalidate>
            <div class="field-row">
              <label>
                <span>Nombre</span>
                <input type="text" name="name" autocomplete="name" required placeholder="Tu nombre" />
              </label>
              <label>
                <span>Empresa</span>
                <input type="text" name="company" autocomplete="organization" placeholder="Tu empresa" />
              </label>
            </div>
            <label>
              <span>Correo</span>
              <input type="email" name="email" autocomplete="email" required placeholder="nombre@empresa.com" />
            </label>
            <label>
              <span>¿En qué podemos ayudarte?</span>
              <textarea name="message" rows="4" required placeholder="Cuéntanos brevemente sobre tu proceso o necesidad"></textarea>
            </label>
            <button class="button button-primary button-submit" type="submit">
              Preparar mensaje <span aria-hidden="true">↗</span>
            </button>
            <p class="form-note">Se abrirá tu aplicación de correo para que revises y envíes el mensaje.</p>
            <p class="form-status" data-form-status aria-live="polite"></p>
          </form>
        </div>
      </div>
    </section>
  `;
}
