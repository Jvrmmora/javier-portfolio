// Fuente única de la identidad del sitio. El CV, el README de GitHub y LinkedIn
// deben decir exactamente lo mismo que esto.
import type { L, Lang } from '../i18n/config';

/** Enlace de reservas de Cal.com. Provisional: al crear la cuenta, se cambia solo aquí. */
export const CAL_URL = 'https://cal.com/javier/30min';

export const profile = {
  name: 'Javier Montaño',
  role: { es: 'Backend & Cloud Engineer', en: 'Backend & Cloud Engineer' } as L,
  stack: 'Node.js · TypeScript · AWS / Azure',
  location: { es: 'Bogotá, Colombia', en: 'Bogotá, Colombia' } as L,
  email: 'javim.montano@gmail.com',
  phone: '+57 305 704 6717',
  tagline: {
    es: 'Construyo el backend sobre el que corre tu producto: APIs que escalan, integraciones que no se rompen y migraciones que no detienen el negocio. Y cuando hace falta, lo entrego completo: del API al dashboard, desplegado y andando.',
    en: 'I build the backend your product runs on: APIs that scale, integrations that hold, and migrations that never stop the business. And when it is needed, I deliver all of it: from the API to the dashboard, deployed and running.',
  } as L,
  // Para quien no es técnico: no es un servicio de la lista (sin prueba, no va ahí),
  // es una frase para que el enlace se pueda compartir en una red que no es de tecnología.
  nonTechnical: {
    es: '¿Tu negocio no es tecnológico? También automatizo procesos: recordatorios, formularios y conexión entre las herramientas que ya usas.',
    en: 'Is your business not a tech business? I also automate processes: reminders, forms and connections between the tools you already use.',
  } as L,
  availability: {
    es: 'Disponible para proyectos freelance',
    en: 'Available for freelance projects',
  } as L,
} as const;

/**
 * Tarjeta sobre la foto del hero. Solo lo que no aparece en otra parte de la página.
 * "Remoto" lo confirmó Javier el 2026-09-21 (no figura en el CV)
 * (años, nube y enfoque ya están en las métricas y en la presentación). Cada dato sale
 * del CV o se deriva de él.
 */
export const heroCard = {
  remote: {
    icon: 'M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5V15H4zM2 18h20',
    title: { es: 'Remoto', en: 'Remote' } as L,
    detail: { es: 'Disponible para EE. UU. y LATAM', en: 'Available for the US and LATAM' } as L,
  },
  location: {
    icon: 'M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21zM12 7a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z',
    title: { es: 'Bogotá, Colombia', en: 'Bogotá, Colombia' } as L,
    // Colombia no cambia de hora y Nueva York sí: misma hora en invierno (EST, GMT-5),
    // una hora menos en verano (EDT, GMT-4). De ahí "0–1 h".
    detail: {
      es: 'GMT-5 · 0–1 h de diferencia con Nueva York',
      en: 'GMT-5 · 0–1 h behind New York',
    } as L,
  },
  languages: {
    icon: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18',
    // Misma redacción que la sección de idiomas del CV.
    title: { es: 'Español nativo · Inglés B1', en: 'Native Spanish · English B1' } as L,
    detail: { es: 'Competencia profesional de trabajo', en: 'Professional working proficiency' } as L,
  },
} as const;

// `logos` son nombres que existen en src/lib/icons.ts. Solo se ponen donde la
// tecnología es cierta para ese dato concreto, no para decorar.
export const metrics = [
  {
    title: { es: 'Experiencia', en: 'Experience' } as L,
    count: 5,
    suffix: '+',
    unit: { es: 'años', en: 'years' } as L,
    label: { es: 'en Node.js y TypeScript', en: 'in Node.js and TypeScript' } as L,
    logos: ['Node.js', 'TypeScript'],
  },
  {
    title: { es: 'Migración', en: 'Migration' } as L,
    count: 200000,
    suffix: '+',
    unit: { es: '', en: '' } as L,
    label: {
      es: 'registros migrados en producción, sin detener el negocio',
      en: 'production records migrated, with no business downtime',
    } as L,
    logos: ['MongoDB'],
  },
  {
    title: { es: 'Rendimiento', en: 'Performance' } as L,
    count: 80,
    prefix: '−', // signo menos tipográfico (U+2212): el guion se ve corto junto a las cifras
    suffix: '%',
    unit: { es: '', en: '' } as L,
    label: {
      es: 'en tiempos de respuesta y carga de módulos críticos',
      en: 'in response and load times on critical modules',
    } as L,
    // Sin logo de marca: la mejora es de arquitectura y consultas, no de un producto.
    // El rayo es un pictograma propio, solo para que las cuatro tarjetas cierren igual.
    logos: [] as string[],
    icon: 'M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12z',
  },
  {
    title: { es: 'Nube', en: 'Cloud' } as L,
    count: 2,
    suffix: '',
    unit: { es: 'nubes', en: 'clouds' } as L,
    label: {
      es: 'en producción, con despliegue automatizado',
      en: 'in production, with automated deployment',
    } as L,
    logos: ['AWS', 'Azure'],
  },
] as const;

const WHATSAPP_TEXT = {
  es: encodeURIComponent('Hola Javier, vi tu portafolio y quiero hablar sobre un proyecto de '),
  en: encodeURIComponent('Hi Javier, I saw your portfolio and I would like to talk about a project on '),
};

const MAIL_SUBJECT = {
  es: encodeURIComponent('Proyecto backend'),
  en: encodeURIComponent('Backend project'),
};

/**
 * La sección de contacto se renderiza con un map sobre este arreglo: añadir una red
 * social en el futuro es una entrada más aquí, nada de layout. `icon` debe existir
 * en `src/lib/icons.ts`, o la fila se muestra sin logo.
 */
export const getChannels = (lang: Lang) =>
  [
    {
      name: 'Cal.com',
      icon: 'cal.com',
      handle: CAL_URL,
      href: CAL_URL,
      note: lang === 'es' ? 'Llamada gratis de 30 min' : 'Free 30-min call',
      primary: true,
    },
    {
      name: 'WhatsApp',
      icon: 'whatsapp',
      handle: profile.phone,
      href: `https://wa.me/573057046717?text=${WHATSAPP_TEXT[lang]}`,
      note: lang === 'es' ? 'Escríbeme directo al chat' : 'Message me directly',
    },
    {
      name: lang === 'es' ? 'Correo' : 'Email',
      icon: 'gmail',
      handle: profile.email,
      href: `mailto:${profile.email}?subject=${MAIL_SUBJECT[lang]}`,
      copy: profile.email,
      note: lang === 'es' ? 'Copia la dirección y abre tu correo' : 'Copies the address and opens your mail app',
    },
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      handle: 'in/jvrmmora',
      href: 'https://linkedin.com/in/jvrmmora',
      note: lang === 'es' ? 'Perfil y trayectoria' : 'Profile and background',
    },
    {
      name: 'GitHub',
      icon: 'github',
      handle: 'Jvrmmora',
      href: 'https://github.com/Jvrmmora',
      note: lang === 'es' ? 'Código y proyectos' : 'Code and projects',
    },
  ] as const;

/** El CV se descarga en el idioma que el visitante está leyendo. */
export const cvHref = (lang: Lang) =>
  lang === 'es' ? '/cv-javier-montano.pdf' : '/cv-javier-montano-en.pdf';
