import type { ImageMetadata } from 'astro';
import type { L } from '../i18n/config';
import dashboard from '../assets/ja-manager-dashboard.png';
import qr from '../assets/ja-manager-qr.png';
import alexaDesktop from '../assets/alexa-pomodoro-desktop.png';
import alexaMobile from '../assets/alexa-pomodoro-mobile.png';

export interface Project {
  name: L;
  meta: L;
  year: L;
  body: L;
  stack: string[];
  /** Sitio en producción. */
  href: string | null;
  /** Repositorio público. Sin él, la tarjeta dice "Código privado". */
  repo?: string;
  featured?: boolean;
  /** Puntos clave del proyecto destacado, todos ya descritos en `body`. */
  highlights?: L[];
  /** Capturas del proyecto destacado. Sin datos personales de nadie: ver nota en `projects`. */
  screenshots?: { src: ImageMetadata; alt: L; caption: L }[];
}

const same = (s: string): L => ({ es: s, en: s });

// Las capturas de JA Manager están recortadas y editadas a propósito: la lista de jóvenes
// muestra nombres y teléfonos reales, y el QR de asistencia es válido durante horas.
// No sustituir por capturas completas sin revisar que no expongan datos de terceros.
export const projects: Project[] = [
  {
    name: same('JA Manager'),
    meta: { es: 'Plataforma en producción', en: 'Platform in production' },
    year: { es: '2025 — hoy', en: '2025 — now' },
    body: {
      es: 'Plataforma de gestión con check-in por QR, gamificación, control de asistencia y dashboard de estadísticas. La construí completa: API, frontend, contenedores y despliegue.',
      en: 'Management platform with QR check-in, gamification, attendance tracking and a statistics dashboard. I built all of it: API, frontend, containers and deployment.',
    },
    stack: ['Node.js', 'TypeScript', 'MongoDB', 'React', 'Vite', 'Docker', 'CI/CD'],
    href: 'https://www.jovenesmodelia.com',
    repo: 'https://github.com/Jvrmmora/ja-manager',
    featured: true,
    highlights: [
      { es: 'Check-in por QR', en: 'QR check-in' },
      { es: 'Gamificación', en: 'Gamification' },
      { es: 'Control de asistencia', en: 'Attendance tracking' },
      { es: 'Dashboard de estadísticas', en: 'Statistics dashboard' },
    ],
    screenshots: [
      {
        src: dashboard,
        alt: {
          es: 'Panel de administración de JA Manager en modo oscuro, con tarjetas de totales de jóvenes, botones de gestión y filtros de búsqueda',
          en: 'JA Manager admin dashboard in dark mode, with member total cards, management buttons and search filters',
        },
        caption: { es: 'Panel de administración', en: 'Admin dashboard' },
      },
      {
        src: qr,
        alt: {
          es: 'Pantalla de check-in de JA Manager con el código QR difuminado, puntos de bonus activo y cuenta regresiva de expiración',
          en: 'JA Manager check-in screen with the QR code blurred, active bonus points and an expiry countdown',
        },
        caption: { es: 'Check-in por QR con puntos de bonus', en: 'QR check-in with bonus points' },
      },
    ],
  },
  {
    name: same('Alexa Pomodoro'),
    meta: { es: 'Skill de voz + panel web', en: 'Voice skill + web dashboard' },
    year: same('2026'),
    body: {
      es: 'Técnica Pomodoro controlada por voz desde un Echo y visualizada en un panel web. Un skill de Alexa propio (endpoint HTTPS firmado, sin AWS Lambda ni DynamoDB) que crea timers nativos y guarda todo el estado en MongoDB.',
      en: 'Pomodoro technique controlled by voice from an Echo and visualised on a web dashboard. A custom Alexa skill (signed HTTPS endpoint, no AWS Lambda or DynamoDB) that creates native timers and keeps all state in MongoDB.',
    },
    stack: ['Next.js', 'TypeScript', 'MongoDB', 'Alexa Skills Kit', 'Vercel', 'CI/CD'],
    href: 'https://alexa-pomodoro.vercel.app',
    repo: 'https://github.com/Jvrmmora/alexa-pomodoro',
    featured: true,
    highlights: [
      { es: 'Control por voz desde un Echo', en: 'Voice control from an Echo' },
      { es: 'Timers nativos de Alexa', en: 'Native Alexa timers' },
      { es: 'Cuenta regresiva y ciclo de 4 focos', en: 'Countdown and 4-focus cycle' },
      { es: 'Historial y gráfica semanal', en: 'History and weekly chart' },
    ],
    screenshots: [
      {
        src: alexaDesktop,
        alt: {
          es: 'Panel de Alexa Pomodoro en escritorio: cuenta regresiva de un foco en curso, métricas del día y gráfica semanal',
          en: 'Alexa Pomodoro desktop dashboard: countdown of a running focus block, daily metrics and weekly chart',
        },
        caption: { es: 'Panel web con el bloque activo', en: 'Web dashboard with the active block' },
      },
      {
        src: alexaMobile,
        alt: {
          es: 'Panel de Alexa Pomodoro en móvil con la cuenta regresiva, métricas, gráfica semanal e historial del día',
          en: 'Alexa Pomodoro mobile dashboard with the countdown, metrics, weekly chart and today’s history',
        },
        caption: { es: 'Versión móvil', en: 'Mobile view' },
      },
    ],
  },
  {
    name: same('Organization Manager'),
    meta: {
      es: 'Stanley Black & Decker, vía Tres Pi Medios',
      en: 'Stanley Black & Decker, via Tres Pi Medios',
    },
    year: { es: '2021 — hoy', en: '2021 — now' },
    body: {
      es: 'Backend empresarial con integración de Google Maps Platform y VTEX. Migraciones masivas de datos, estructurado con Clean Architecture para operar a gran escala.',
      en: 'Enterprise backend in Node.js integrating Google Maps Platform and VTEX. Handled mass data migrations, structured with Clean Architecture for large-scale operations.',
    },
    stack: ['Node.js', 'TypeScript', 'Clean Architecture', 'VTEX', 'Google Maps'],
    href: null,
  },
  {
    name: same('Jamomo Plan'),
    meta: { es: 'Producto propio', en: 'Own product' },
    year: same('2024'),
    body: {
      es: 'Aplicación de seguimiento de progreso con autenticación, rachas y control diario de avance.',
      en: 'Progress-tracking app with authentication, streaks and daily progress logging.',
    },
    stack: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    href: null,
    repo: 'https://github.com/Jvrmmora/jamomoplan',
  },
];
