import{s as l}from"./site-XSg_Liek.js";function b(){return`
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <a class="brand brand-footer" href="#inicio" aria-label="Zumac, ir al inicio">
            <img class="brand-mark" src="./favicon.png" alt="" width="40" height="40" />
            <span>${l.brand}</span>
          </a>
          <p>Tecnología para operaciones que quieren avanzar con claridad.</p>
        </div>
        <div class="footer-links">
          ${l.navigation.map(({label:e,href:a})=>`<a href="${a}">${e}</a>`).join("")}
        </div>
        <div class="footer-contact">
          <span>Contacto</span>
          <a href="mailto:${l.email}">${l.email}</a>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>© <span data-year></span> Zumac. Todos los derechos reservados.</span>
        <span>Hecho en Perú</span>
      </div>
    </footer>
  `}function m(e,a){const s=e.solutionId?` data-solution-link="${e.solutionId}"`:"";return`<a class="${a}" href="${e.href}"${s}>${e.label}</a>`}function f(e){return e.children?.length?`
    <div class="nav-item">
      <a class="nav-link nav-link-parent" href="${e.href}" aria-haspopup="true">
        ${e.label}<span aria-hidden="true">⌄</span>
      </a>
      <div class="nav-submenu" aria-label="Opciones de ${e.label}">
        ${e.children.map(a=>m(a,"nav-sublink")).join("")}
      </div>
    </div>
  `:`<a class="nav-link" href="${e.href}">${e.label}</a>`}function g(e){return e.children?.length?`
    <details class="mobile-nav-group">
      <summary>${e.label}<span aria-hidden="true">+</span></summary>
      <div class="mobile-nav-children">
        ${e.children.map(a=>m(a,"mobile-nav-sublink")).join("")}
      </div>
    </details>
  `:`<a class="nav-link" href="${e.href}">${e.label}</a>`}function y(){const e=l.navigation.map(f).join(""),a=l.navigation.map(g).join("");return`
    <header class="site-header" data-header>
      <div class="container header-inner">
        <a class="brand" href="#inicio" aria-label="Zumac, ir al inicio">
          <img class="brand-mark" src="./favicon.png" alt="" width="40" height="40" />
          <span>${l.brand}</span>
        </a>

        <nav class="desktop-nav" aria-label="Navegación principal">
          ${e}
        </nav>

        <a class="button button-small header-cta" href="#contacto">Hablemos</a>

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
          ${a}
          <a class="button button-primary" href="#contacto">Conversemos</a>
        </nav>
      </div>
    </header>
  `}function $(){return`
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
  `}function w(){return`
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
            <a class="contact-email reveal" href="mailto:${l.email}">
              <span>Correo directo</span>
              <strong>${l.email}</strong>
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
  `}function A(){return`
    <section class="hero" id="inicio" aria-labelledby="hero-title" data-hero>
      <div class="hero-slides" aria-live="polite">
        <article class="hero-slide hero-slide-dashboard is-active" data-hero-slide>
          <img
            class="hero-background"
            src="./images/hero/dashboard-analytics.png"
            alt=""
            width="1680"
            height="945"
            aria-hidden="true"
          />
          <div class="container hero-content">
            <div class="hero-copy reveal">
              <p class="eyebrow eyebrow-light">Análisis operativo en una sola vista</p>
              <h1 id="hero-title">Tus datos listos <span>para decidir.</span></h1>
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
              <h2>Todo tu trabajo. <span>Una sola plataforma.</span></h2>
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
        <button class="hero-dot is-active" type="button" aria-label="Mostrar dashboard de análisis" aria-pressed="true" data-hero-dot="0"></button>
        <button class="hero-dot" type="button" aria-label="Mostrar las mejores herramientas" aria-pressed="false" data-hero-dot="1"></button>
      </div>
    </section>
  `}function E(){return`
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
  `}function L(){return`
    <section class="section services" id="servicios" aria-labelledby="services-title">
      <div class="container">
        <div class="section-heading section-heading-center">
          <p class="eyebrow reveal">Servicios</p>
          <h2 id="services-title" class="section-title reveal">
            Creamos la solución que <span>tu empresa necesita.</span>
          </h2>
          <p class="section-lead reveal">
            Aplicaciones móviles, sistemas web y herramientas personalizadas
            para cualquier rubro, acompañadas por soporte y mejora continua.
          </p>
        </div>
        <div class="services-grid">${l.services.map(({id:a,title:s,description:o,image:t})=>`
        <a
          class="service-card reveal"
          id="servicio-${a}"
          href="./servicio.html?servicio=${a}"
          aria-label="Conocer el servicio ${s}"
        >
          <div class="service-card-media">
            <img src="${t}" alt="" width="960" height="640" loading="lazy" />
          </div>
          <div class="service-card-copy">
            <h3>${s}</h3>
            <p>${o}</p>
          </div>
          <span class="service-arrow" aria-hidden="true">›</span>
        </a>
      `).join("")}</div>
      </div>
    </section>
  `}function C(){const e=l.solutionCategories.map((s,o)=>`
        <button
          class="solution-tab${o===0?" is-active":""}"
          id="tab-${s.id}"
          type="button"
          role="tab"
          aria-selected="${o===0}"
          aria-controls="panel-${s.id}"
          tabindex="${o===0?"0":"-1"}"
          data-solution-tab="${s.id}"
        >
          ${s.label}
        </button>
      `).join(""),a=l.solutionCategories.map((s,o)=>`
        <section
          class="solution-panel${o===0?" is-active":""}"
          id="panel-${s.id}"
          role="tabpanel"
          aria-labelledby="tab-${s.id}"
          ${o===0?"":"hidden"}
          data-solution-panel="${s.id}"
        >
          <p class="solution-category-intro">${s.intro}</p>
          <div class="solution-card-grid">
            ${s.items.map(t=>`
                  <article class="solution-card">
                    ${t.image?`<div class="solution-card-media">
                            <img src="${t.image}" alt="${t.alt??""}" width="1280" height="720" loading="lazy" />
                          </div>`:`<div class="solution-card-media solution-card-media-empty" aria-label="Imagen pendiente">
                            <span>Planillas</span>
                            <small>Presentación funcional</small>
                          </div>`}
                    <div class="solution-card-copy">
                      <h3>${t.title}</h3>
                      <p>${t.description}</p>
                      ${t.imageNote?`<p class="solution-image-note">${t.imageNote}</p>`:""}
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
            Control para procesos <span>reales de tu operación.</span>
          </h2>
          <p class="section-lead section-lead-light reveal">
            Recorre cada solución para asistencia, jornadas, planillas, documentos,
            campo, reglas de negocio y flujos de trabajo.
          </p>
        </div>

        <div class="solutions-shell reveal">
          <div class="solution-tabs" role="tablist" aria-label="Soluciones disponibles en Zumac">
            ${e}
          </div>
          <div class="solution-panels">${a}</div>
        </div>
      </div>
    </section>
  `}const h=document.querySelector("#app");if(!h)throw new Error("No se encontró el contenedor principal de la aplicación.");h.innerHTML=`
  ${y()}
  <main id="contenido">
    ${A()}
    ${$()}
    ${L()}
    ${C()}
    ${E()}
    ${w()}
  </main>
  ${b()}
`;function S(){const e=document.querySelector("[data-header]"),a=document.querySelector("[data-menu-toggle]"),s=document.querySelector("[data-mobile-menu]"),o=()=>e?.classList.toggle("is-scrolled",window.scrollY>24);if(o(),window.addEventListener("scroll",o,{passive:!0}),!a||!s)return;const t=()=>{a.setAttribute("aria-expanded","false"),a.setAttribute("aria-label","Abrir menú"),s.hidden=!0,document.body.classList.remove("menu-open")};a.addEventListener("click",()=>{const n=a.getAttribute("aria-expanded")!=="true";a.setAttribute("aria-expanded",String(n)),a.setAttribute("aria-label",n?"Cerrar menú":"Abrir menú"),s.hidden=!n,document.body.classList.toggle("menu-open",n)}),s.querySelectorAll("a").forEach(n=>n.addEventListener("click",t)),window.addEventListener("resize",()=>{window.innerWidth>860&&t()})}function q(){const e=Array.from(document.querySelectorAll("[data-solution-tab]")),a=Array.from(document.querySelectorAll("[data-solution-panel]")),s=Array.from(document.querySelectorAll("[data-solution-link]")),o=(t,n=!1)=>{e.forEach(i=>{const r=i.dataset.solutionTab===t;i.classList.toggle("is-active",r),i.setAttribute("aria-selected",String(r)),i.tabIndex=r?0:-1,r&&n&&i.focus()}),a.forEach(i=>{const r=i.dataset.solutionPanel===t;i.classList.toggle("is-active",r),i.hidden=!r})};e.forEach((t,n)=>{t.addEventListener("click",()=>o(t.dataset.solutionTab??"")),t.addEventListener("keydown",i=>{if(!["ArrowUp","ArrowDown","Home","End"].includes(i.key))return;i.preventDefault();let r=n;i.key==="ArrowDown"&&(r=(n+1)%e.length),i.key==="ArrowUp"&&(r=(n-1+e.length)%e.length),i.key==="Home"&&(r=0),i.key==="End"&&(r=e.length-1),o(e[r].dataset.solutionTab??"",!0)})}),s.forEach(t=>{t.addEventListener("click",n=>{n.preventDefault(),o(t.dataset.solutionLink??""),document.querySelector("#soluciones")?.scrollIntoView({behavior:"smooth",block:"start"})})})}function k(){const e=document.querySelector("[data-hero]"),a=Array.from(document.querySelectorAll("[data-hero-slide]")),s=Array.from(document.querySelectorAll("[data-hero-dot]")),o=document.querySelector("[data-hero-prev]"),t=document.querySelector("[data-hero-next]");if(!e||a.length<2||!o||!t)return;let n=0,i=0;const r=d=>{n=(d+a.length)%a.length,a.forEach((u,v)=>{const p=v===n;u.hidden=!1,u.classList.toggle("is-active",p),u.setAttribute("aria-hidden",String(!p))}),s.forEach((u,v)=>{const p=v===n;u.classList.toggle("is-active",p),u.setAttribute("aria-pressed",String(p))})},c=()=>{window.clearInterval(i),!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(i=window.setInterval(()=>r(n+1),8e3))};o.addEventListener("click",()=>{r(n-1),c()}),t.addEventListener("click",()=>{r(n+1),c()}),s.forEach(d=>{d.addEventListener("click",()=>{r(Number(d.dataset.heroDot??0)),c()})}),e.addEventListener("mouseenter",()=>window.clearInterval(i)),e.addEventListener("mouseleave",c),e.addEventListener("focusin",()=>window.clearInterval(i)),e.addEventListener("focusout",c),c()}function j(){const e=document.querySelectorAll(".reveal");if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){e.forEach(s=>s.classList.add("is-visible"));return}const a=new IntersectionObserver(s=>{s.forEach(o=>{o.isIntersecting&&(o.target.classList.add("is-visible"),a.unobserve(o.target))})},{threshold:.12});e.forEach(s=>a.observe(s))}function I(){const e=document.querySelector("[data-contact-form]"),a=document.querySelector("[data-form-status]");!e||!a||e.addEventListener("submit",s=>{if(s.preventDefault(),!e.reportValidity())return;const o=new FormData(e),t=String(o.get("name")??"").trim(),n=String(o.get("company")??"").trim(),i=String(o.get("email")??"").trim(),r=String(o.get("message")??"").trim(),c=`Consulta web de ${t}${n?` — ${n}`:""}`,d=[`Nombre: ${t}`,`Empresa: ${n||"No indicada"}`,`Correo: ${i}`,"",r].join(`
`);a.textContent="Abriendo tu aplicación de correo…",window.location.href=`mailto:${l.email}?subject=${encodeURIComponent(c)}&body=${encodeURIComponent(d)}`})}document.querySelectorAll("[data-year]").forEach(e=>{e.textContent=String(new Date().getFullYear())});S();k();q();j();I();
