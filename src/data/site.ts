export type NavigationItem = {
  label: string;
  href: string;
};

export type Service = {
  number: string;
  title: string;
  description: string;
};

export type Solution = {
  id: string;
  shortLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
};

export const siteConfig = {
  brand: 'ZUMAC',
  email: 'contacto@zumac.com.pe',
  navigation: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Soluciones', href: '#soluciones' },
  ] satisfies NavigationItem[],
  services: [
    {
      number: '01',
      title: 'Digitalización operativa',
      description:
        'Convertimos formatos y controles dispersos en flujos digitales claros, trazables y fáciles de usar.',
    },
    {
      number: '02',
      title: 'Configuración a medida',
      description:
        'Adaptamos módulos, campos y reglas a la forma real en que trabaja cada empresa y cada equipo.',
    },
    {
      number: '03',
      title: 'Información para decidir',
      description:
        'Organizamos los datos de la operación para detectar avances, pendientes y oportunidades a tiempo.',
    },
    {
      number: '04',
      title: 'Acompañamiento continuo',
      description:
        'Avanzamos por etapas, escuchando al usuario y mejorando la solución junto con la operación.',
    },
  ] satisfies Service[],
  solutions: [
    {
      id: 'captura',
      shortLabel: 'Captura',
      eyebrow: 'Datos desde el origen',
      title: 'Formularios que siguen el ritmo del trabajo',
      description:
        'Registra información desde campo, planta u oficina con flujos configurables y una experiencia preparada para trabajar con o sin conexión.',
      bullets: [
        'Formularios y tablas dinámicas',
        'Validaciones según el proceso',
        'Sincronización y trazabilidad',
      ],
    },
    {
      id: 'acciones',
      shortLabel: 'Acciones',
      eyebrow: 'Seguimiento oportuno',
      title: 'De una alerta a una tarea concreta',
      description:
        'Convierte eventos importantes en responsables, aprobaciones y evidencias para que el seguimiento no dependa de mensajes aislados.',
      bullets: [
        'Alertas configurables',
        'Responsables y aprobaciones',
        'Evidencias y comentarios',
      ],
    },
    {
      id: 'metricas',
      shortLabel: 'Métricas',
      eyebrow: 'Visibilidad compartida',
      title: 'Indicadores que cuentan lo que está pasando',
      description:
        'Reúne información operativa en paneles comprensibles para supervisar resultados y decidir con una misma versión de los datos.',
      bullets: [
        'Dashboards por empresa',
        'Filtros y relaciones entre datos',
        'Lectura rápida de indicadores',
      ],
    },
    {
      id: 'integracion',
      shortLabel: 'Integración',
      eyebrow: 'Ecosistema conectado',
      title: 'Una plataforma que crece con tu operación',
      description:
        'Organiza procesos por rubros, secciones y módulos, con una base preparada para incorporar nuevas necesidades sin rehacer todo el sistema.',
      bullets: [
        'Arquitectura modular',
        'Gestión multiempresa',
        'Evolución por etapas',
      ],
    },
  ] satisfies Solution[],
} as const;
