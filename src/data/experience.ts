// La redacción en inglés es la del CV en inglés, no una traducción improvisada:
// el sitio y el documento deben decir lo mismo si alguien compara.
import type { L } from '../i18n/config';

export const experience = [
  {
    company: 'Tres Pi Medios SAS',
    role: { es: 'Ingeniero de Software Backend', en: 'Backend Software Engineer' } as L,
    period: { es: 'Feb 2021 — Actualidad', en: 'Feb 2021 — Present' } as L,
    start: '2021',
    place: { es: 'Bogotá, Colombia', en: 'Bogotá, Colombia' } as L,
    current: true,
    bullets: [
      {
        es: 'Lideré la migración de más de 200.000 registros en producción sin interrumpir la operación del negocio.',
        en: 'Led the migration of 200,000+ production records with no interruption to business continuity.',
      },
      {
        es: 'Optimicé módulos críticos del core, reduciendo hasta en un 80% los tiempos de respuesta y de carga.',
        en: 'Optimized critical core modules, cutting response and page load times by up to 80%.',
      },
      {
        es: 'Diseñé APIs REST escalables en Node.js y TypeScript aplicando SOLID y Clean Architecture.',
        en: 'Designed and implemented scalable REST APIs in Node.js and TypeScript, applying SOLID principles and Clean Architecture.',
      },
      {
        es: 'Integré plataformas de terceros en aplicaciones empresariales: Google Maps Platform y VTEX.',
        en: 'Integrated third-party platforms into enterprise applications, including Google Maps Platform and VTEX.',
      },
      {
        es: 'Automaticé despliegues con pipelines de Azure DevOps y GitHub Actions.',
        en: 'Automated deployments with Azure DevOps and GitHub Actions pipelines, reducing release errors.',
      },
    ] as L[],
    stack: ['Node.js', 'TypeScript', 'Express', 'NestJS', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'Azure'],
  },
  {
    company: 'CertMind SAS & CCTI',
    role: { es: 'Desarrollador Backend', en: 'Backend Developer' } as L,
    period: { es: '2019 — 2021', en: '2019 — 2021' } as L,
    start: '2019',
    place: { es: 'Bogotá, Colombia', en: 'Bogotá, Colombia' } as L,
    current: false,
    bullets: [
      {
        es: 'Desarrollé y mantuve plataformas académicas y empresariales con PHP y Laravel.',
        en: 'Developed and maintained academic and enterprise platforms using PHP and the Laravel framework.',
      },
      {
        es: 'Construí sistemas automatizados de notificación para padres y acudientes.',
        en: 'Built and integrated automated notification systems for parents and guardians.',
      },
      {
        es: 'Creé una aplicación móvil en Flutter para registro por QR y seguimiento de eventos.',
        en: 'Created a Flutter mobile application for QR code registration and event tracking.',
      },
    ] as L[],
    stack: ['PHP', 'Laravel', 'MySQL', 'Flutter'],
  },
] as const;
