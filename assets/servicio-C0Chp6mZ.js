import{s as i}from"./site-XSg_Liek.js";const t=document.querySelector("#app");if(!t)throw new Error("No se encontró el contenedor principal de la aplicación.");const s=new URLSearchParams(window.location.search).get("servicio"),e=i.services.find(a=>a.id===s)??i.services[0];document.title=`${e.title} | Zumac`;t.innerHTML=`
  <header class="detail-header">
    <div class="container detail-header-inner">
      <a class="brand" href="./index.html#inicio" aria-label="Zumac, volver al inicio">
        <img class="brand-mark" src="./favicon.png" alt="" width="40" height="40" />
        <span>${i.brand}</span>
      </a>
      <a class="button button-small detail-back" href="./index.html#servicios">Volver a servicios</a>
    </div>
  </header>

  <main id="contenido">
    <section class="detail-hero">
      <div class="container detail-hero-grid">
        <div class="detail-hero-copy">
          <p class="eyebrow eyebrow-light">${e.title}</p>
          <h1>${e.detailTitle}</h1>
          <p>${e.detailIntro}</p>
          <a class="button button-primary" href="./index.html#contacto">Hablemos de tu operación</a>
        </div>
        <figure class="detail-hero-media">
          <img src="${e.image}" alt="Vista demostrativa de ${e.title} en Zumac" width="1280" height="720" />
          <figcaption>Vista demostrativa construida con herramientas del sistema Zumac.</figcaption>
        </figure>
      </div>
    </section>

    <section class="detail-content section" aria-labelledby="detail-focus-title">
      <div class="container">
        <div class="section-heading section-heading-center">
          <p class="eyebrow">Qué contiene</p>
          <h2 class="section-title" id="detail-focus-title">Una solución pensada para <span>trabajar mejor.</span></h2>
        </div>
        <div class="detail-focus-grid">
          ${e.focus.map(a=>`
                <article>
                  <h3>${a.title}</h3>
                  <p>${a.description}</p>
                </article>
              `).join("")}
        </div>
        <figure class="detail-wide-media">
          <img src="${e.secondaryImage}" alt="Segunda vista demostrativa de ${e.title} en Zumac" width="1280" height="720" loading="lazy" />
          <figcaption>La configuración final se adapta al proceso, los permisos y la información de cada empresa.</figcaption>
        </figure>
      </div>
    </section>

    <section class="detail-cta">
      <div class="container detail-cta-inner">
        <div>
          <p class="eyebrow eyebrow-light">Conversemos</p>
          <h2>Podemos empezar por un proceso concreto.</h2>
        </div>
        <a class="button button-primary" href="mailto:${i.email}">Escribir a ${i.email}</a>
      </div>
    </section>
  </main>

  <footer class="site-footer detail-footer">
    <div class="container footer-bottom">
      <span>© <span data-year></span> Zumac. Todos los derechos reservados.</span>
      <a href="./index.html#inicio">Ir al sitio principal</a>
    </div>
  </footer>
`;document.querySelectorAll("[data-year]").forEach(a=>{a.textContent=String(new Date().getFullYear())});
