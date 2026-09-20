import{s as n}from"./site-BztD5oGz.js";function b(){return`
    <footer class="site-footer">
      <div class="container footer-grid">
        <div>
          <a class="brand brand-footer" href="#inicio" aria-label="Zumac, ir al inicio">
            <img class="brand-mark" src="./favicon.png" alt="" width="40" height="40" />
            <span>${n.brand}</span>
          </a>
          <p>Tecnología para operaciones que quieren avanzar con claridad.</p>
        </div>
        <div class="footer-links">
          ${n.navigation.map(({label:e,href:a})=>`<a href="${a}">${e}</a>`).join("")}
        </div>
        <div class="footer-contact">
          <span>Contacto</span>
          <a href="mailto:${n.email}">${n.email}</a>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>© <span data-year></span> Zumac. Todos los derechos reservados.</span>
        <span>Hecho en Perú</span>
      </div>
    </footer>
  `}function v(e,a){return`<a class="${a}" href="${e.href}">${e.label}</a>`}function f(e){return e.children?.length?`
    <div class="nav-item">
      <button
        class="nav-link nav-link-parent"
        type="button"
        aria-haspopup="true"
        aria-expanded="false"
        data-nav-parent
      >${e.label}</button>
      <div class="nav-submenu" aria-label="Opciones de ${e.label}">
        ${e.children.map(a=>v(a,"nav-sublink")).join("")}
      </div>
    </div>
  `:`<a class="nav-link" href="${e.href}">${e.label}</a>`}function g(e){return e.children?.length?`
    <details class="mobile-nav-group">
      <summary>${e.label}</summary>
      <div class="mobile-nav-children">
        ${e.children.map(a=>v(a,"mobile-nav-sublink")).join("")}
      </div>
    </details>
  `:`<a class="nav-link" href="${e.href}">${e.label}</a>`}function y(){const e=n.navigation.map(f).join(""),a=n.navigation.map(g).join("");return`
    <header class="site-header" data-header>
      <div class="container header-inner">
        <a class="brand" href="#inicio" aria-label="Zumac, ir al inicio">
          <img class="brand-mark" src="./favicon-48.png" alt="" width="40" height="40" />
          <span>${n.brand}</span>
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
  `}const w=[["Registra","Captura datos desde aplicaciones móviles o sistemas web, incluso cuando trabajas sin internet."],["Supervisa","Revisa registros, valida resultados y aprueba cada operación cuando el proceso lo requiera."],["Crea o edita formatos","Con Zumac Creator crea nuevos formatos o ajusta los existentes sin rehacer todo el sistema."],["Consulta","Encuentra información de cualquier área y responde preguntas clave sobre tu negocio."],["Analiza","Construye o modifica gráficos e indicadores para comprender resultados y tendencias."],["Alertas","Define avisos sobre actividades, vencimientos o datos que representen un riesgo."],["Permisos","Controla qué puede ver, crear, editar o aprobar cada usuario según su rol y responsabilidad."]];function $(){return`
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
          ${w.map(([e,a])=>`
                <article class="capability-card reveal">
                  <h3>${e}</h3>
                  <p>${a}</p>
                </article>
              `).join("")}
        </div>
      </div>
    </section>
  `}function q(){return`
    <section class="section contact" id="contacto" aria-labelledby="contact-title">
      <div class="container">
        <div class="contact-shell">
          <div class="contact-heading section-heading section-heading-left">
            <p class="eyebrow eyebrow-light reveal">Contacto</p>
            <h2 id="contact-title" class="section-title section-title-light reveal">
              Cuéntanos qué quieres mejorar en tu operación.
            </h2>
            <p class="section-lead section-lead-light reveal">
              No necesitas tener la solución definida. Empecemos por el proceso
              que hoy te quita más tiempo o visibilidad.
            </p>
          </div>

          <div class="contact-copy reveal">
            <p class="overline">CONVERSEMOS</p>
            <h3>Empecemos por el reto que más importa.</h3>
            <a class="contact-email reveal" href="mailto:${n.email}">
              <span>Correo directo</span>
              <strong>${n.email}</strong>
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
  `}function C(){return`
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
  `}function L(){return`
    <section class="section process" aria-labelledby="process-title">
      <div class="container">
        <div class="section-heading section-heading-left process-copy">
          <p class="eyebrow reveal">Cómo empezamos</p>
          <h2 id="process-title" class="section-title reveal">
            Primero entendemos. Luego construimos.
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
  `}function S(){return`
    <section class="section services" id="servicios" aria-labelledby="services-title">
      <div class="container">
        <div class="section-heading section-heading-left">
          <p class="eyebrow reveal">Servicios</p>
          <h2 id="services-title" class="section-title reveal">
            Creamos la solución que tu empresa necesita.
          </h2>
          <p class="section-lead reveal">
            Aplicaciones móviles, sistemas web y herramientas personalizadas
            para cualquier rubro, acompañadas por soporte y mejora continua.
          </p>
        </div>
        <div class="services-grid">${n.services.map(({id:a,title:o,description:t,image:c})=>`
        <a
          class="service-card reveal"
          id="servicio-${a}"
          href="./servicio.html?servicio=${a}"
          aria-label="Conocer el servicio ${o}"
        >
          <div class="service-card-media">
            <img src="${c}" alt="" width="960" height="640" loading="lazy" />
          </div>
          <div class="service-card-copy">
            <h3>${o}</h3>
            <p>${t}</p>
          </div>
          <span class="service-arrow" aria-hidden="true">›</span>
        </a>
      `).join("")}</div>
      </div>
    </section>
  `}function E(){return`
    <section class="section solutions" id="soluciones" aria-labelledby="solutions-title">
      <div class="container">
        <div class="section-heading section-heading-left solution-heading">
          <p class="eyebrow eyebrow-light reveal">Soluciones</p>
          <h2 id="solutions-title" class="section-title section-title-light reveal">
            Control para procesos reales de tu operación.
          </h2>
          <p class="section-lead section-lead-light reveal">
            Soluciones para asistencia, jornadas, planillas, documentos,
            campo, reglas de negocio y flujos de trabajo.
          </p>
        </div>
        <div class="solution-overview-grid">${n.solutionCategories.map(a=>{const o=a.items.find(t=>t.image);return`
        <a
          class="solution-overview-card reveal"
          href="./solucion.html?solucion=${a.id}"
          aria-label="Conocer la solución ${a.label}"
        >
          <div class="solution-overview-media">
            ${o?.image?`<img src="${o.image}" alt="${o.alt??""}" width="1280" height="720" loading="lazy" />`:'<div class="solution-placeholder"><strong>Planillas</strong><span>Gestión conectada</span></div>'}
          </div>
          <div class="solution-overview-copy">
            <h3>${a.label}</h3>
            <p>${a.intro}</p>
            <span>Ver solución <b aria-hidden="true">›</b></span>
          </div>
        </a>
      `}).join("")}</div>
      </div>
    </section>
  `}const h=document.querySelector("#app");if(!h)throw new Error("No se encontró el contenedor principal de la aplicación.");h.innerHTML=`
  ${y()}
  <main id="contenido">
    ${C()}
    ${$()}
    ${S()}
    ${E()}
    ${L()}
    ${q()}
  </main>
  ${b()}
`;window.location.hash&&window.requestAnimationFrame(()=>{document.querySelector(window.location.hash)?.scrollIntoView({block:"start"})});function j(){const e=document.querySelector("[data-header]"),a=document.querySelector("[data-menu-toggle]"),o=document.querySelector("[data-mobile-menu]");if(!e)return;let t=0;const c=()=>{const s=window.scrollY<=12;if(e.classList.toggle("is-top",s),window.clearTimeout(t),s){e.classList.remove("is-scrolling","is-idle");return}e.classList.add("is-scrolling"),e.classList.remove("is-idle"),t=window.setTimeout(()=>{window.scrollY>12&&!document.body.classList.contains("menu-open")&&(e.classList.remove("is-scrolling"),e.classList.add("is-idle"))},700)};c(),window.addEventListener("scroll",c,{passive:!0});const i=Array.from(document.querySelectorAll("[data-nav-parent]")),l=s=>{i.forEach(r=>{r!==s&&(r.setAttribute("aria-expanded","false"),r.closest(".nav-item")?.classList.remove("is-open"))})};if(i.forEach(s=>{s.addEventListener("click",r=>{r.stopPropagation();const u=s.closest(".nav-item"),p=!u?.classList.contains("is-open");l(s),u?.classList.toggle("is-open",p),s.setAttribute("aria-expanded",String(p))})}),document.addEventListener("click",()=>l()),!a||!o)return;const d=()=>{a.setAttribute("aria-expanded","false"),a.setAttribute("aria-label","Abrir menú"),o.hidden=!0,document.body.classList.remove("menu-open"),e.classList.remove("is-menu-open"),c()};a.addEventListener("click",()=>{const s=a.getAttribute("aria-expanded")!=="true";a.setAttribute("aria-expanded",String(s)),a.setAttribute("aria-label",s?"Cerrar menú":"Abrir menú"),o.hidden=!s,document.body.classList.toggle("menu-open",s),e.classList.toggle("is-menu-open",s)}),o.querySelectorAll("a").forEach(s=>s.addEventListener("click",d)),window.addEventListener("resize",()=>{window.innerWidth>860&&d()})}function A(){const e=document.querySelector("[data-hero]"),a=Array.from(document.querySelectorAll("[data-hero-slide]")),o=Array.from(document.querySelectorAll("[data-hero-dot]")),t=document.querySelector("[data-hero-prev]"),c=document.querySelector("[data-hero-next]");if(!e||a.length<2||!t||!c)return;let i=0,l=0;const d=r=>{i=(r+a.length)%a.length,a.forEach((u,p)=>{const m=p===i;u.hidden=!1,u.classList.toggle("is-active",m),u.setAttribute("aria-hidden",String(!m))}),o.forEach((u,p)=>{const m=p===i;u.classList.toggle("is-active",m),u.setAttribute("aria-pressed",String(m))})},s=()=>{window.clearInterval(l),!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(l=window.setInterval(()=>d(i+1),8e3))};t.addEventListener("click",()=>{d(i-1),s()}),c.addEventListener("click",()=>{d(i+1),s()}),o.forEach(r=>{r.addEventListener("click",()=>{d(Number(r.dataset.heroDot??0)),s()})}),e.addEventListener("mouseenter",()=>window.clearInterval(l)),e.addEventListener("mouseleave",s),e.addEventListener("focusin",()=>window.clearInterval(l)),e.addEventListener("focusout",s),s()}function k(){const e=document.querySelectorAll(".reveal");if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){e.forEach(o=>o.classList.add("is-visible"));return}const a=new IntersectionObserver(o=>{o.forEach(t=>{t.isIntersecting&&(t.target.classList.add("is-visible"),a.unobserve(t.target))})},{threshold:.12});e.forEach(o=>a.observe(o))}function x(){const e=document.querySelector("[data-contact-form]"),a=document.querySelector("[data-form-status]");!e||!a||e.addEventListener("submit",o=>{if(o.preventDefault(),!e.reportValidity())return;const t=new FormData(e),c=String(t.get("name")??"").trim(),i=String(t.get("company")??"").trim(),l=String(t.get("email")??"").trim(),d=String(t.get("message")??"").trim(),s=`Consulta web de ${c}${i?` — ${i}`:""}`,r=[`Nombre: ${c}`,`Empresa: ${i||"No indicada"}`,`Correo: ${l}`,"",d].join(`
`);a.textContent="Abriendo tu aplicación de correo…",window.location.href=`mailto:${n.email}?subject=${encodeURIComponent(s)}&body=${encodeURIComponent(r)}`})}document.querySelectorAll("[data-year]").forEach(e=>{e.textContent=String(new Date().getFullYear())});j();A();k();x();
