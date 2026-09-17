(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const e of i)if(e.type==="childList")for(const t of e.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&s(t)}).observe(document,{childList:!0,subtree:!0});function a(i){const e={};return i.integrity&&(e.integrity=i.integrity),i.referrerPolicy&&(e.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?e.credentials="include":i.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(i){if(i.ep)return;i.ep=!0;const e=a(i);fetch(i.href,e)}})();const r={brand:"ZUMAC",email:"contacto@zumac.com.pe",navigation:[{label:"Inicio",href:"#inicio"},{label:"Nosotros",href:"#nosotros"},{label:"Servicios",href:"#servicios"},{label:"Soluciones",href:"#soluciones"}],services:[{number:"01",title:"Digitalización operativa",description:"Convertimos formatos y controles dispersos en flujos digitales claros, trazables y fáciles de usar."},{number:"02",title:"Configuración a medida",description:"Adaptamos módulos, campos y reglas a la forma real en que trabaja cada empresa y cada equipo."},{number:"03",title:"Información para decidir",description:"Organizamos los datos de la operación para detectar avances, pendientes y oportunidades a tiempo."},{number:"04",title:"Acompañamiento continuo",description:"Avanzamos por etapas, escuchando al usuario y mejorando la solución junto con la operación."}],solutions:[{id:"captura",shortLabel:"Captura",eyebrow:"Datos desde el origen",title:"Formularios que siguen el ritmo del trabajo",description:"Registra información desde campo, planta u oficina con flujos configurables y una experiencia preparada para trabajar con o sin conexión.",bullets:["Formularios y tablas dinámicas","Validaciones según el proceso","Sincronización y trazabilidad"]},{id:"acciones",shortLabel:"Acciones",eyebrow:"Seguimiento oportuno",title:"De una alerta a una tarea concreta",description:"Convierte eventos importantes en responsables, aprobaciones y evidencias para que el seguimiento no dependa de mensajes aislados.",bullets:["Alertas configurables","Responsables y aprobaciones","Evidencias y comentarios"]},{id:"metricas",shortLabel:"Métricas",eyebrow:"Visibilidad compartida",title:"Indicadores que cuentan lo que está pasando",description:"Reúne información operativa en paneles comprensibles para supervisar resultados y decidir con una misma versión de los datos.",bullets:["Dashboards por empresa","Filtros y relaciones entre datos","Lectura rápida de indicadores"]},{id:"integracion",shortLabel:"Integración",eyebrow:"Ecosistema conectado",title:"Una plataforma que crece con tu operación",description:"Organiza procesos por rubros, secciones y módulos, con una base preparada para incorporar nuevas necesidades sin rehacer todo el sistema.",bullets:["Arquitectura modular","Gestión multiempresa","Evolución por etapas"]}]};function u(){return`
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
          ${r.navigation.map(({label:o,href:n})=>`<a href="${n}">${o}</a>`).join("")}
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
  `}function m(){const o=r.navigation.map(({label:n,href:a})=>`<a class="nav-link" href="${a}">${n}</a>`).join("");return`
    <header class="site-header" data-header>
      <div class="container header-inner">
        <a class="brand" href="#inicio" aria-label="Zumac, ir al inicio">
          <img class="brand-mark" src="./favicon.png" alt="" width="40" height="40" />
          <span>${r.brand}</span>
        </a>

        <nav class="desktop-nav" aria-label="Navegación principal">
          ${o}
        </nav>

        <a class="button button-small button-light header-cta" href="#contacto">
          Hablemos
          <span aria-hidden="true">↗</span>
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
          ${o}
          <a class="button button-primary" href="#contacto">Conversemos</a>
        </nav>
      </div>
    </header>
  `}function v(){return`
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
  `}function b(){return`
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
              Preparar mensaje <span aria-hidden="true">↗</span>
            </button>
            <p class="form-note">Se abrirá tu aplicación de correo para que revises y envíes el mensaje.</p>
            <p class="form-status" data-form-status aria-live="polite"></p>
          </form>
        </div>
      </div>
    </section>
  `}function f(){return`
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
  `}function h(){return`
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
  `}function g(){return`
    <section class="section services" id="servicios" aria-labelledby="services-title">
      <div class="container">
        <div class="section-intro section-intro-row">
          <div>
            <p class="eyebrow reveal">Servicios</p>
            <h2 id="services-title" class="section-title reveal">
              Construimos contigo,<br /><span>paso a paso.</span>
            </h2>
          </div>
          <p class="section-lead reveal">
            Partimos de tus procesos actuales, priorizamos lo que genera valor
            y construimos una solución que puede evolucionar contigo.
          </p>
        </div>
        <div class="services-grid">${r.services.map(({number:n,title:a,description:s})=>`
        <article class="service-card reveal">
          <span class="service-number">${n}</span>
          <div>
            <h3>${a}</h3>
            <p>${s}</p>
          </div>
          <span class="service-arrow" aria-hidden="true">↗</span>
        </article>
      `).join("")}</div>
      </div>
    </section>
  `}function y(){const o=r.solutions.map((a,s)=>`
        <button
          class="solution-tab${s===0?" is-active":""}"
          id="tab-${a.id}"
          type="button"
          role="tab"
          aria-selected="${s===0}"
          aria-controls="panel-${a.id}"
          tabindex="${s===0?"0":"-1"}"
          data-solution-tab="${a.id}"
        >
          <span>0${s+1}</span>${a.shortLabel}
        </button>
      `).join(""),n=r.solutions.map((a,s)=>`
        <article
          class="solution-panel${s===0?" is-active":""}"
          id="panel-${a.id}"
          role="tabpanel"
          aria-labelledby="tab-${a.id}"
          ${s===0?"":"hidden"}
          data-solution-panel="${a.id}"
        >
          <p class="overline">${a.eyebrow}</p>
          <h3>${a.title}</h3>
          <p>${a.description}</p>
          <ul>
            ${a.bullets.map(i=>`<li>${i}</li>`).join("")}
          </ul>
        </article>
      `).join("");return`
    <section class="section solutions" id="soluciones" aria-labelledby="solutions-title">
      <div class="container">
        <div class="section-intro solution-heading">
          <div>
            <p class="eyebrow eyebrow-light reveal">Soluciones</p>
            <h2 id="solutions-title" class="section-title section-title-light reveal">
              Un sistema modular.<br /><span>Muchas formas de avanzar.</span>
            </h2>
          </div>
          <p class="section-lead section-lead-light reveal">
            Activa lo que necesitas hoy y añade nuevas capacidades cuando tu
            operación esté lista para el siguiente paso.
          </p>
        </div>

        <div class="solutions-shell reveal">
          <div class="solution-tabs" role="tablist" aria-label="Capacidades de Zumac">
            ${o}
          </div>
          <div class="solution-panels">${n}</div>
          <div class="solution-visual" aria-hidden="true">
            <div class="orbit orbit-one"></div>
            <div class="orbit orbit-two"></div>
            <div class="solution-core">
              <img src="./favicon.png" alt="" width="56" height="56" />
              <span>ZUMAC</span>
            </div>
            <span class="node node-one">DATOS</span>
            <span class="node node-two">ACCIÓN</span>
            <span class="node node-three">DECISIÓN</span>
          </div>
        </div>
      </div>
    </section>
  `}const l=document.querySelector("#app");if(!l)throw new Error("No se encontró el contenedor principal de la aplicación.");l.innerHTML=`
  ${m()}
  <main id="contenido">
    ${f()}
    ${v()}
    ${g()}
    ${y()}
    ${h()}
    ${b()}
  </main>
  ${u()}
`;function w(){const o=document.querySelector("[data-header]"),n=document.querySelector("[data-menu-toggle]"),a=document.querySelector("[data-mobile-menu]"),s=()=>o?.classList.toggle("is-scrolled",window.scrollY>24);if(s(),window.addEventListener("scroll",s,{passive:!0}),!n||!a)return;const i=()=>{n.setAttribute("aria-expanded","false"),n.setAttribute("aria-label","Abrir menú"),a.hidden=!0,document.body.classList.remove("menu-open")};n.addEventListener("click",()=>{const e=n.getAttribute("aria-expanded")!=="true";n.setAttribute("aria-expanded",String(e)),n.setAttribute("aria-label",e?"Cerrar menú":"Abrir menú"),a.hidden=!e,document.body.classList.toggle("menu-open",e)}),a.querySelectorAll("a").forEach(e=>e.addEventListener("click",i)),window.addEventListener("resize",()=>{window.innerWidth>860&&i()})}function $(){const o=Array.from(document.querySelectorAll("[data-solution-tab]")),n=Array.from(document.querySelectorAll("[data-solution-panel]")),a=(s,i=!1)=>{o.forEach(e=>{const t=e.dataset.solutionTab===s;e.classList.toggle("is-active",t),e.setAttribute("aria-selected",String(t)),e.tabIndex=t?0:-1,t&&i&&e.focus()}),n.forEach(e=>{const t=e.dataset.solutionPanel===s;e.classList.toggle("is-active",t),e.hidden=!t})};o.forEach((s,i)=>{s.addEventListener("click",()=>a(s.dataset.solutionTab??"")),s.addEventListener("keydown",e=>{if(!["ArrowLeft","ArrowRight","Home","End"].includes(e.key))return;e.preventDefault();let t=i;e.key==="ArrowRight"&&(t=(i+1)%o.length),e.key==="ArrowLeft"&&(t=(i-1+o.length)%o.length),e.key==="Home"&&(t=0),e.key==="End"&&(t=o.length-1),a(o[t].dataset.solutionTab??"",!0)})})}function A(){const o=document.querySelectorAll(".reveal");if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){o.forEach(a=>a.classList.add("is-visible"));return}const n=new IntersectionObserver(a=>{a.forEach(s=>{s.isIntersecting&&(s.target.classList.add("is-visible"),n.unobserve(s.target))})},{threshold:.12});o.forEach(a=>n.observe(a))}function C(){const o=document.querySelector("[data-contact-form]"),n=document.querySelector("[data-form-status]");!o||!n||o.addEventListener("submit",a=>{if(a.preventDefault(),!o.reportValidity())return;const s=new FormData(o),i=String(s.get("name")??"").trim(),e=String(s.get("company")??"").trim(),t=String(s.get("email")??"").trim(),c=String(s.get("message")??"").trim(),d=`Consulta web de ${i}${e?` — ${e}`:""}`,p=[`Nombre: ${i}`,`Empresa: ${e||"No indicada"}`,`Correo: ${t}`,"",c].join(`
`);n.textContent="Abriendo tu aplicación de correo…",window.location.href=`mailto:${r.email}?subject=${encodeURIComponent(d)}&body=${encodeURIComponent(p)}`})}document.querySelectorAll("[data-year]").forEach(o=>{o.textContent=String(new Date().getFullYear())});w();$();A();C();
