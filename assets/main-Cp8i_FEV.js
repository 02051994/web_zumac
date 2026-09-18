import{s as r}from"./site-B25M0phb.js";function h(){return`
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <a class="brand brand-footer" href="#inicio" aria-label="Zumac, ir al inicio">
            <img class="brand-mark" src="./favicon.png" alt="" width="40" height="40" />
            <span>${r.brand}</span>
          </a>
          <p>Tecnología para operaciones que quieren avanzar con claridad.</p>
        </div>
        <div class="footer-links">
          ${r.navigation.map(({label:t,href:o})=>`<a href="${o}">${t}</a>`).join("")}
        </div>
        <div class="footer-contact">
          <span>Contacto</span>
          <a href="mailto:${r.email}">${r.email}</a>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>© <span data-year></span> Zumac. Todos los derechos reservados.</span>
        <span>Hecho en Perú</span>
      </div>
    </footer>
  `}function b(){const t=r.navigation.map(({label:o,href:e})=>`<a class="nav-link" href="${e}">${o}</a>`).join("");return`
    <header class="site-header" data-header>
      <div class="container header-inner">
        <a class="brand" href="#inicio" aria-label="Zumac, ir al inicio">
          <img class="brand-mark" src="./favicon.png" alt="" width="40" height="40" />
          <span>${r.brand}</span>
        </a>

        <nav class="desktop-nav" aria-label="Navegación principal">
          ${t}
        </nav>

        <a class="button button-small button-light header-cta" href="#contacto">
          Hablemos
        </a>

        <button
          class="menu-toggle"
          type="button"
          aria-label="Abrir menú"
          aria-controls="mobile-menu"
          aria-expanded="false"
          data-menu-toggle
        >
          <span></span><span></span>
        </button>
      </div>

      <div class="mobile-menu" id="mobile-menu" data-mobile-menu hidden>
        <nav aria-label="Navegación móvil">
          ${t}
          <a class="button button-primary" href="#contacto">Conversemos</a>
        </nav>
      </div>
    </header>
  `}function g(){return`
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
  `}function f(){return`
    <section class="section contact" id="contacto" aria-labelledby="contact-title">
      <div class="container">
        <div class="contact-shell">
          <div class="contact-heading section-heading section-heading-center">
            <p class="eyebrow eyebrow-light reveal">Contacto</p>
            <h2 id="contact-title" class="section-title section-title-light reveal">
              Cuéntanos qué quieres <span>mejorar en tu operación.</span>
            </h2>
            <p class="section-lead section-lead-light reveal">
              No necesitas tener la solución definida. Empecemos por el proceso
              que hoy te quita más tiempo o visibilidad.
            </p>
          </div>

          <div class="contact-copy reveal">
            <p class="overline">CONVERSEMOS</p>
            <h3>Empecemos por el reto que más importa.</h3>
            <a class="contact-email reveal" href="mailto:${r.email}">
              <span>Correo directo</span>
              <strong>${r.email}</strong>
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
              Preparar mensaje
            </button>
            <p class="form-note">Se abrirá tu aplicación de correo para que revises y envíes el mensaje.</p>
            <p class="form-status" data-form-status aria-live="polite"></p>
          </form>
        </div>
      </div>
    </section>
  `}function y(){return`
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
  `}function w(){return`
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
  `}function $(){return`
    <section class="section services" id="servicios" aria-labelledby="services-title">
      <div class="container">
        <div class="section-heading section-heading-center">
          <p class="eyebrow reveal">Servicios</p>
          <h2 id="services-title" class="section-title reveal">
            Construimos contigo, <span>paso a paso.</span>
          </h2>
          <p class="section-lead reveal">
            Partimos de tus procesos actuales, priorizamos lo que genera valor
            y construimos una solución que puede evolucionar contigo.
          </p>
        </div>
        <div class="services-grid">${r.services.map(({id:o,title:e,description:s})=>`
        <a class="service-card reveal" href="./servicio.html?servicio=${o}" aria-label="Conocer el servicio ${e}">
          <div>
            <h3>${e}</h3>
            <p>${s}</p>
          </div>
          <span class="service-arrow" aria-hidden="true">›</span>
        </a>
      `).join("")}</div>
      </div>
    </section>
  `}function E(){const t=r.solutionCategories.map((e,s)=>`
        <button
          class="solution-tab${s===0?" is-active":""}"
          id="tab-${e.id}"
          type="button"
          role="tab"
          aria-selected="${s===0}"
          aria-controls="panel-${e.id}"
          tabindex="${s===0?"0":"-1"}"
          data-solution-tab="${e.id}"
        >
          ${e.label}
        </button>
      `).join(""),o=r.solutionCategories.map((e,s)=>`
        <section
          class="solution-panel${s===0?" is-active":""}"
          id="panel-${e.id}"
          role="tabpanel"
          aria-labelledby="tab-${e.id}"
          ${s===0?"":"hidden"}
          data-solution-panel="${e.id}"
        >
          <p class="solution-category-intro">${e.intro}</p>
          <div class="solution-card-grid">
            ${e.items.map(n=>`
                  <article class="solution-card">
                    <div class="solution-card-media">
                      <img src="${n.image}" alt="${n.alt}" width="1280" height="720" loading="lazy" />
                    </div>
                    <div class="solution-card-copy">
                      <h3>${n.title}</h3>
                      <p>${n.description}</p>
                    </div>
                  </article>
                `).join("")}
          </div>
        </section>
      `).join("");return`
    <section class="section solutions" id="soluciones" aria-labelledby="solutions-title">
      <div class="container">
        <div class="section-heading section-heading-center solution-heading">
          <p class="eyebrow eyebrow-light reveal">Soluciones</p>
          <h2 id="solutions-title" class="section-title section-title-light reveal">
            Tecnología para resolver <span>necesidades concretas.</span>
          </h2>
          <p class="section-lead section-lead-light reveal">
            Elige un rubro y descubre soluciones preparadas para procesos reales de operación y gestión.
          </p>
        </div>

        <div class="solutions-shell reveal">
          <div class="solution-tabs" role="tablist" aria-label="Rubros atendidos por Zumac">
            ${t}
          </div>
          <div class="solution-panels">${o}</div>
        </div>
      </div>
    </section>
  `}const v=document.querySelector("#app");if(!v)throw new Error("No se encontró el contenedor principal de la aplicación.");v.innerHTML=`
  ${b()}
  <main id="contenido">
    ${y()}
    ${g()}
    ${$()}
    ${E()}
    ${w()}
    ${f()}
  </main>
  ${h()}
`;function A(){const t=document.querySelector("[data-header]"),o=document.querySelector("[data-menu-toggle]"),e=document.querySelector("[data-mobile-menu]"),s=()=>t?.classList.toggle("is-scrolled",window.scrollY>24);if(s(),window.addEventListener("scroll",s,{passive:!0}),!o||!e)return;const n=()=>{o.setAttribute("aria-expanded","false"),o.setAttribute("aria-label","Abrir menú"),e.hidden=!0,document.body.classList.remove("menu-open")};o.addEventListener("click",()=>{const a=o.getAttribute("aria-expanded")!=="true";o.setAttribute("aria-expanded",String(a)),o.setAttribute("aria-label",a?"Cerrar menú":"Abrir menú"),e.hidden=!a,document.body.classList.toggle("menu-open",a)}),e.querySelectorAll("a").forEach(a=>a.addEventListener("click",n)),window.addEventListener("resize",()=>{window.innerWidth>860&&n()})}function C(){const t=Array.from(document.querySelectorAll("[data-solution-tab]")),o=Array.from(document.querySelectorAll("[data-solution-panel]")),e=(s,n=!1)=>{t.forEach(a=>{const i=a.dataset.solutionTab===s;a.classList.toggle("is-active",i),a.setAttribute("aria-selected",String(i)),a.tabIndex=i?0:-1,i&&n&&a.focus()}),o.forEach(a=>{const i=a.dataset.solutionPanel===s;a.classList.toggle("is-active",i),a.hidden=!i})};t.forEach((s,n)=>{s.addEventListener("click",()=>e(s.dataset.solutionTab??"")),s.addEventListener("keydown",a=>{if(!["ArrowUp","ArrowDown","Home","End"].includes(a.key))return;a.preventDefault();let i=n;a.key==="ArrowDown"&&(i=(n+1)%t.length),a.key==="ArrowUp"&&(i=(n-1+t.length)%t.length),a.key==="Home"&&(i=0),a.key==="End"&&(i=t.length-1),e(t[i].dataset.solutionTab??"",!0)})})}function S(){const t=document.querySelector("[data-hero]"),o=Array.from(document.querySelectorAll("[data-hero-slide]")),e=Array.from(document.querySelectorAll("[data-hero-dot]")),s=document.querySelector("[data-hero-prev]"),n=document.querySelector("[data-hero-next]");if(!t||o.length<2||!s||!n)return;let a=0,i=0;const c=d=>{a=(d+o.length)%o.length,o.forEach((u,m)=>{const p=m===a;u.hidden=!1,u.classList.toggle("is-active",p),u.setAttribute("aria-hidden",String(!p))}),e.forEach((u,m)=>{const p=m===a;u.classList.toggle("is-active",p),u.setAttribute("aria-pressed",String(p))})},l=()=>{window.clearInterval(i),!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(i=window.setInterval(()=>c(a+1),8e3))};s.addEventListener("click",()=>{c(a-1),l()}),n.addEventListener("click",()=>{c(a+1),l()}),e.forEach(d=>{d.addEventListener("click",()=>{c(Number(d.dataset.heroDot??0)),l()})}),t.addEventListener("mouseenter",()=>window.clearInterval(i)),t.addEventListener("mouseleave",l),t.addEventListener("focusin",()=>window.clearInterval(i)),t.addEventListener("focusout",l),l()}function q(){const t=document.querySelectorAll(".reveal");if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){t.forEach(e=>e.classList.add("is-visible"));return}const o=new IntersectionObserver(e=>{e.forEach(s=>{s.isIntersecting&&(s.target.classList.add("is-visible"),o.unobserve(s.target))})},{threshold:.12});t.forEach(e=>o.observe(e))}function L(){const t=document.querySelector("[data-contact-form]"),o=document.querySelector("[data-form-status]");!t||!o||t.addEventListener("submit",e=>{if(e.preventDefault(),!t.reportValidity())return;const s=new FormData(t),n=String(s.get("name")??"").trim(),a=String(s.get("company")??"").trim(),i=String(s.get("email")??"").trim(),c=String(s.get("message")??"").trim(),l=`Consulta web de ${n}${a?` — ${a}`:""}`,d=[`Nombre: ${n}`,`Empresa: ${a||"No indicada"}`,`Correo: ${i}`,"",c].join(`
`);o.textContent="Abriendo tu aplicación de correo…",window.location.href=`mailto:${r.email}?subject=${encodeURIComponent(l)}&body=${encodeURIComponent(d)}`})}document.querySelectorAll("[data-year]").forEach(t=>{t.textContent=String(new Date().getFullYear())});A();S();C();q();L();
