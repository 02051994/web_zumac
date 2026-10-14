import './styles/tokens.css';
import './styles/base.css';
import './styles/header.css';
import './styles/hero.css';
import './styles/content.css';
import './styles/contact.css';
import './styles/responsive.css';

import { renderFooter } from './components/footer';
import { renderHeader } from './components/header';
import { siteConfig } from './data/site';
import { renderAbout } from './sections/about';
import { renderContact } from './sections/contact';
import { renderHero } from './sections/hero';
import { renderProcess } from './sections/process';
import { renderServices } from './sections/services';
import { renderSolutions } from './sections/solutions';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('No se encontró el contenedor principal de la aplicación.');
}

app.innerHTML = `
  ${renderHeader()}
  <main id="contenido">
    ${renderHero()}
    ${renderAbout()}
    ${renderServices()}
    ${renderSolutions()}
    ${renderProcess()}
    ${renderContact()}
  </main>
  ${renderFooter()}
`;

if (window.location.hash) {
  window.requestAnimationFrame(() => {
    document.querySelector(window.location.hash)?.scrollIntoView({ block: 'start' });
  });
}

function setupHeader(): void {
  const header = document.querySelector<HTMLElement>('[data-header]');
  const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const menu = document.querySelector<HTMLElement>('[data-mobile-menu]');

  if (!header) return;

  let idleTimer = 0;
  const scheduleHeaderState = () => {
    const atTop = window.scrollY <= 12;
    header.classList.toggle('is-top', atTop);
    window.clearTimeout(idleTimer);

    if (atTop) {
      header.classList.remove('is-scrolling', 'is-idle');
      return;
    }

    header.classList.add('is-scrolling');
    header.classList.remove('is-idle');
    idleTimer = window.setTimeout(() => {
      if (window.scrollY > 12 && !document.body.classList.contains('menu-open')) {
        header.classList.remove('is-scrolling');
        header.classList.add('is-idle');
      }
    }, 700);
  };

  scheduleHeaderState();
  window.addEventListener('scroll', scheduleHeaderState, { passive: true });

  const parentButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-nav-parent]'));
  const closeDesktopMenus = (except?: HTMLButtonElement) => {
    parentButtons.forEach((button) => {
      if (button === except) return;
      button.setAttribute('aria-expanded', 'false');
      button.closest('.nav-item')?.classList.remove('is-open');
    });
  };

  parentButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const item = button.closest('.nav-item');
      const willOpen = !item?.classList.contains('is-open');
      closeDesktopMenus(button);
      item?.classList.toggle('is-open', willOpen);
      button.setAttribute('aria-expanded', String(willOpen));
    });
  });
  document.addEventListener('click', () => closeDesktopMenus());

  if (!toggle || !menu) return;

  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
    menu.hidden = true;
    document.body.classList.remove('menu-open');
    header.classList.remove('is-menu-open');
    scheduleHeaderState();
  };

  toggle.addEventListener('click', () => {
    const willOpen = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(willOpen));
    toggle.setAttribute('aria-label', willOpen ? 'Cerrar menú' : 'Abrir menú');
    menu.hidden = !willOpen;
    document.body.classList.toggle('menu-open', willOpen);
    header.classList.toggle('is-menu-open', willOpen);
  });

  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => {
    if (window.innerWidth > 860) closeMenu();
  });
}

function setupHeroSlider(): void {
  const root = document.querySelector<HTMLElement>('[data-hero]');
  const slides = Array.from(document.querySelectorAll<HTMLElement>('[data-hero-slide]'));
  const dots = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-hero-dot]'));
  const previous = document.querySelector<HTMLButtonElement>('[data-hero-prev]');
  const next = document.querySelector<HTMLButtonElement>('[data-hero-next]');
  if (!root || slides.length < 2 || !previous || !next) return;

  let current = 0;
  let timer = 0;

  const show = (index: number) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === current;
      slide.hidden = false;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
    });
    dots.forEach((dot, dotIndex) => {
      const active = dotIndex === current;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-pressed', String(active));
    });
  };

  const restart = () => {
    window.clearInterval(timer);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timer = window.setInterval(() => show(current + 1), 8000);
  };

  previous.addEventListener('click', () => {
    show(current - 1);
    restart();
  });
  next.addEventListener('click', () => {
    show(current + 1);
    restart();
  });
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      show(Number(dot.dataset.heroDot ?? 0));
      restart();
    });
  });

  root.addEventListener('mouseenter', () => window.clearInterval(timer));
  root.addEventListener('mouseleave', restart);
  root.addEventListener('focusin', () => window.clearInterval(timer));
  root.addEventListener('focusout', restart);
  restart();
}

function setupReveal(): void {
  const items = document.querySelectorAll<HTMLElement>('.reveal');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );
  items.forEach((item) => observer.observe(item));
}

function setupContactForm(): void {
  const form = document.querySelector<HTMLFormElement>('[data-contact-form]');
  const status = document.querySelector<HTMLElement>('[data-form-status]');
  if (!form || !status) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const company = String(data.get('company') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    const subject = `Consulta web de ${name}${company ? ` — ${company}` : ''}`;
    const body = [
      `Nombre: ${name}`,
      `Empresa: ${company || 'No indicada'}`,
      `Correo: ${email}`,
      '',
      message,
    ].join('\n');

    status.textContent = 'Abriendo tu aplicación de correo…';
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

document.querySelectorAll<HTMLElement>('[data-year]').forEach((item) => {
  item.textContent = String(new Date().getFullYear());
});

setupHeader();
setupHeroSlider();
setupReveal();
setupContactForm();
