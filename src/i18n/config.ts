export const LANGS = ['es', 'en'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'es';

/** Texto que existe en los dos idiomas. Todo el contenido del sitio usa esta forma. */
export interface L {
  es: string;
  en: string;
}

export const t = (value: L, lang: Lang): string => value[lang];
export const tList = (values: readonly L[], lang: Lang): string[] => values.map((v) => v[lang]);

/** El español vive en la raíz y el inglés bajo /en/, así la URL principal queda limpia. */
export const localizedPath = (lang: Lang, path = '/'): string =>
  lang === DEFAULT_LANG ? path : `/en${path}`;

/** Deriva el idioma de la URL. Sin prefijo `/en` es español. */
export const langFromUrl = (url: URL): Lang => (url.pathname.startsWith('/en') ? 'en' : 'es');

export const ui = {
  nav: {
    services: { es: 'Servicios', en: 'Services' },
    projects: { es: 'Proyectos', en: 'Projects' },
    experience: { es: 'Experiencia', en: 'Experience' },
    stack: { es: 'Stack', en: 'Stack' },
    contact: { es: 'Contacto', en: 'Contact' },
  },
  a11y: {
    skip: { es: 'Saltar al contenido', en: 'Skip to content' },
    mainNav: { es: 'Principal', en: 'Main' },
    toLight: { es: 'Cambiar a modo claro', en: 'Switch to light mode' },
    toDark: { es: 'Cambiar a modo oscuro', en: 'Switch to dark mode' },
    themeToggle: { es: 'Cambiar tema', en: 'Toggle theme' },
    langSwitch: { es: 'Ver este sitio en inglés', en: 'Ver este sitio en español' },
    home: { es: 'Javier Montaño — inicio', en: 'Javier Montaño — home' },
    openMenu: { es: 'Abrir menú', en: 'Open menu' },
    closeMenu: { es: 'Cerrar menú', en: 'Close menu' },
  },
  hero: {
    downloadCv: { es: 'Descargar CV', en: 'Download CV' },
    book: { es: 'Agenda una llamada de 30 min', en: 'Book a 30-min call' },
    bookNote: {
      es: 'Gratis · cuéntame qué necesitas y te digo cómo lo resolvería',
      en: 'Free · tell me what you need and I will tell you how I would solve it',
    },
    whatsapp: { es: '¿Prefieres escribirme? Hablemos por WhatsApp', en: 'Prefer to write? Message me on WhatsApp' },
    profile: { es: 'Perfil', en: 'Profile' },
    available: { es: 'Disponible', en: 'Available' },
  },
  sections: {
    servicesEyebrow: { es: 'formas de trabajar juntos', en: 'ways to work together' },
    servicesTitle: { es: 'Servicios', en: 'Services' },
    servicesLead: {
      es: 'En qué puedo ayudarte, cada una con un caso real que lo respalda.',
      en: 'How I can help, each backed by a real case.',
    },
    servicesProof: { es: 'Lo respalda', en: 'Backed by' },
    projectsEyebrow: { es: 'proyectos', en: 'projects' },
    projectsTitle: { es: 'Proyectos', en: 'Projects' },
    projectsLead: {
      es: 'Lo que he construido y puesto en producción.',
      en: 'What I have built and shipped to production.',
    },
    featured: { es: 'Proyecto destacado', en: 'Featured project' },
    moreProjects: { es: 'Más proyectos', en: 'More projects' },
    scrollHint: { es: 'Desliza para verlos', en: 'Swipe to browse' },
    scrollHintDesktop: { es: 'Usa las flechas o desliza', en: 'Use the arrows or scroll' },
    prev: { es: 'Ver proyectos anteriores', en: 'See previous projects' },
    next: { es: 'Ver más proyectos', en: 'See more projects' },
    carousel: { es: 'Más proyectos, carrusel', en: 'More projects, carousel' },
    pause: { es: 'Pausar el carrusel', en: 'Pause the carousel' },
    play: { es: 'Reanudar el carrusel', en: 'Resume the carousel' },
    includes: { es: 'Qué incluye', en: 'What it includes' },
    technologies: { es: 'Tecnologías', en: 'Technologies' },
    viewLive: { es: 'Ver en producción', en: 'View live' },
    viewProject: { es: 'Ver proyecto', en: 'View project' },
    viewCode: { es: 'Ver código', en: 'View code' },
    privateCode: { es: 'Código privado', en: 'Private code' },
    yourProject: { es: 'Tu proyecto', en: 'Your project' },
    yoursNext: { es: '¿El siguiente es el tuyo?', en: 'Is yours next?' },
    yoursNextBody: {
      es: 'Cuéntame qué necesitas construir y te digo con franqueza si puedo ayudarte y cómo lo abordaría.',
      en: 'Tell me what you need to build and I will tell you honestly whether I can help and how I would approach it.',
    },
    letsTalk: { es: 'Hablemos', en: 'Let’s talk' },
    experienceEyebrow: { es: 'Desde 2019', en: 'Since 2019' },
    experienceTitle: { es: 'Experiencia', en: 'Experience' },
    experienceLead: {
      es: 'Dónde he trabajado y qué resultados dejé.',
      en: 'Where I have worked and the results I left behind.',
    },
    current: { es: 'Actual', en: 'Current' },
    stackEyebrow: { es: 'Herramientas y formación', en: 'Tools and training' },
    stackTitle: { es: 'Stack', en: 'Stack' },
    stackLead: {
      es: 'Con qué trabajo a diario y lo que he estudiado.',
      en: 'What I work with daily and what I have studied.',
    },
    certifications: { es: 'Certificaciones', en: 'Certifications' },
    education: { es: 'Educación', en: 'Education' },
    contactEyebrow: { es: 'Hablemos', en: 'Let’s talk' },
    contactTitle: { es: 'Contáctame', en: 'Get in touch' },
    footerStatus: { es: 'Sitio operativo', en: 'Site operational' },
    footerBuilt: { es: 'Hecho con Astro y Tailwind', en: 'Built with Astro and Tailwind' },
    footerRights: { es: 'Todos los derechos reservados.', en: 'All rights reserved.' },
    emailCopied: { es: 'Correo copiado', en: 'Email copied' },
    localTime: { es: 'Hora local en Bogotá', en: 'Local time in Bogotá' },
    backToTop: { es: 'Volver arriba', en: 'Back to top' },
    contactLead: {
      es: '¿Tienes un proyecto backend, una integración que no cuadra o una migración que da miedo? Agenda una llamada gratis de 30 minutos o escríbeme por el canal que prefieras.',
      en: 'Have a backend project, an integration that will not line up, or a migration that scares you? Book a free 30-minute call or reach me on whichever channel you prefer.',
    },
    offerEyebrow: { es: 'Cómo empezar', en: 'How to start' },
    offerTitle: { es: 'Empecemos por una conversación', en: 'Let’s start with a conversation' },
    offerBody: {
      es: 'Una llamada de 30 minutos, sin costo ni compromiso. Me cuentas tu caso y, después, te envío un resumen de una página con los riesgos, el orden de trabajo y un estimado de esfuerzo.',
      en: 'A 30-minute call, free and with no strings attached. You tell me your case and afterwards I send you a one-page summary with the risks, the order of work and an effort estimate.',
    },
    offerDeliverables: {
      es: ['Llamada de 30 min', 'Resumen de una página', 'Riesgos y orden de trabajo', 'Estimado de esfuerzo'],
      en: ['30-min call', 'One-page summary', 'Risks and order of work', 'Effort estimate'],
    },
  },
  chat: {
    open: { es: 'Pregúntale a mi CV', en: 'Ask my CV' },
    title: { es: 'Pregúntale a mi CV', en: 'Ask my CV' },
    subtitle: {
      es: 'Un asistente que responde con lo que dice este portafolio.',
      en: 'An assistant that answers from what this portfolio says.',
    },
    greeting: {
      es: 'Hola, soy el asistente del portafolio de Javier. Pregúntame por su experiencia, proyectos o stack.',
      en: 'Hi, I am the assistant on Javier’s portfolio. Ask me about his experience, projects or stack.',
    },
    placeholder: { es: 'Escribe tu pregunta…', en: 'Type your question…' },
    send: { es: 'Enviar', en: 'Send' },
    close: { es: 'Cerrar el chat', en: 'Close the chat' },
    thinking: { es: 'Pensando…', en: 'Thinking…' },
    disclaimer: {
      es: 'Respuestas generadas con IA a partir de este sitio. Pueden contener errores.',
      en: 'AI-generated answers based on this site. They may contain mistakes.',
    },
    suggestions: {
      es: ['¿Tiene experiencia con AWS?', '¿Qué proyectos ha construido?', '¿Cómo empiezo a trabajar con él?'],
      en: ['Does he have AWS experience?', 'What projects has he built?', 'How do I start working with him?'],
    },
    book: { es: 'Agenda una llamada gratis de 30 min', en: 'Book a free 30-min call' },
    errorBusy: {
      es: 'Hay muchas preguntas en este momento. Intenta de nuevo en un minuto o escríbele a Javier directo.',
      en: 'There are a lot of questions right now. Try again in a minute or message Javier directly.',
    },
    errorLimit: {
      es: 'Has hecho varias preguntas seguidas. Espera un momento antes de la siguiente.',
      en: 'You have asked several questions in a row. Please wait a moment before the next one.',
    },
    errorGeneric: {
      es: 'No pude responder ahora. Puedes escribirle a Javier directo por WhatsApp o correo.',
      en: 'I could not answer right now. You can message Javier directly on WhatsApp or email.',
    },
  },
} as const;
