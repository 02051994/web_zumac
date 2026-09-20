import{s as i}from"./site-BztD5oGz.js";/* empty css                       */const n=document.querySelector("#app");if(!n)throw new Error("No se encontró el contenedor principal de la aplicación.");const l=new URLSearchParams(window.location.search).get("solucion"),a=i.solutionCategories.find(e=>e.id===l)??i.solutionCategories[0],o=a.items.find(e=>e.image);document.title=`${a.label} | Soluciones Zumac`;document.querySelector('meta[name="description"]')?.setAttribute("content",a.intro);const t=document.createElement("link");t.rel="canonical";t.href=`https://zumac.com.pe/solucion.html?solucion=${a.id}`;document.head.append(t);n.innerHTML=`
  <header class="detail-header">
    <div class="container detail-header-inner">
      <a class="brand" href="./index.html#inicio" aria-label="Zumac, volver al inicio">
        <img class="brand-mark" src="./favicon-48.png" alt="" width="40" height="40" />
        <span>${i.brand}</span>
      </a>
      <a class="button button-small detail-back" href="./index.html#soluciones">Volver a soluciones</a>
    </div>
  </header>

  <main id="contenido">
    <section class="detail-hero">
      <div class="container detail-hero-grid">
        <div class="detail-hero-copy">
          <p class="eyebrow eyebrow-light">Solución Zumac</p>
          <h1>${a.label}</h1>
          <p>${a.intro}</p>
          <a class="button button-primary" href="./index.html#contacto">Hablemos de tu operación</a>
        </div>
        <figure class="detail-hero-media">
          ${o?.image?`<img src="${o.image}" alt="${o.alt??a.label}" width="1280" height="720" />`:'<div class="detail-media-placeholder"><strong>Planillas</strong><span>Gestión conectada con la operación</span></div>'}
          <figcaption>La solución se configura de acuerdo con los procesos, responsables y permisos de cada empresa.</figcaption>
        </figure>
      </div>
    </section>

    <section class="detail-content section" aria-labelledby="solution-detail-title">
      <div class="container">
        <div class="section-heading section-heading-left">
          <p class="eyebrow">Qué contiene</p>
          <h2 class="section-title" id="solution-detail-title">Información clara para trabajar y decidir mejor.</h2>
        </div>
        <div class="solution-detail-list">
          ${a.items.map((e,s)=>`
                <article class="solution-detail-item${s%2?" solution-detail-item-reverse":""}">
                  ${e.image?`<figure>
                        <img src="${e.image}" alt="${e.alt??e.title}" width="1280" height="720" loading="lazy" />
                      </figure>`:`<div class="detail-media-placeholder"><strong>${e.title}</strong><span>Configuración a medida</span></div>`}
                  <div>
                    <p class="overline">Zumac</p>
                    <h3>${e.title}</h3>
                    <p>${e.description}</p>
                    ${e.imageNote?`<small>${e.imageNote}</small>`:""}
                  </div>
                </article>
              `).join("")}
        </div>
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
`;document.querySelectorAll("[data-year]").forEach(e=>{e.textContent=String(new Date().getFullYear())});
