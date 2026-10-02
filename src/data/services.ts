// Cada servicio apunta a una prueba real. Sin prueba, no va en la lista.
// `icon` es el trazo SVG (24×24) de un pictograma genérico, no un logo de marca.
// `proofHref` lleva a la sección donde está esa prueba (proyecto o experiencia).
import type { L } from '../i18n/config';

export const services = [
  {
    id: 'apis',
    icon: 'M8 7 3 12l5 5M16 7l5 5-5 5M13.5 4l-3 16',
    title: { es: 'APIs y backend a medida', en: 'Custom APIs and backend' } as L,
    body: {
      es: 'Diseño e implemento APIs REST escalables en Node.js y TypeScript, aplicando SOLID y Clean Architecture. Código que otro equipo puede mantener sin ti.',
      en: 'I design and implement scalable REST APIs in Node.js and TypeScript, applying SOLID and Clean Architecture. Code another team can maintain without you.',
    } as L,
    includes: [
      { es: 'Diseño de arquitectura', en: 'Architecture design' },
      { es: 'API REST / GraphQL', en: 'REST / GraphQL API' },
      { es: 'MongoDB o PostgreSQL', en: 'MongoDB or PostgreSQL' },
      { es: 'Pruebas automatizadas', en: 'Automated testing' },
    ] as L[],
    proof: {
      es: 'Organization Manager — Stanley Black & Decker',
      en: 'Organization Manager — Stanley Black & Decker',
    } as L,
    proofHref: '#proyectos',
  },
  {
    id: 'integraciones',
    icon: 'M4 8h13l-3.5-3.5M20 16H7l3.5 3.5',
    title: { es: 'Integraciones y migraciones de datos', en: 'Integrations and data migrations' } as L,
    body: {
      es: 'Conecto sistemas que no fueron hechos para hablarse, y muevo datos sin tumbar la operación. Es la parte que más se rompe y donde más experiencia tengo.',
      en: 'I connect systems that were never meant to talk to each other, and move data without taking the business down. It is the part that breaks most, and where I have the most experience.',
    } as L,
    includes: [
      { es: 'VTEX, Google Maps, ERPs', en: 'VTEX, Google Maps, ERPs' },
      { es: 'Migraciones masivas', en: 'Bulk migrations' },
      { es: 'Sincronización entre sistemas', en: 'Cross-system sync' },
      { es: 'Plan de reversa', en: 'Rollback plan' },
    ] as L[],
    proof: {
      es: '200.000+ registros migrados sin interrumpir el negocio',
      en: '200,000+ records migrated with no business interruption',
    } as L,
    proofHref: '#experiencia',
  },
  {
    id: 'cloud',
    icon: 'M7 18a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 9.5a4 4 0 0 1-.5 8.5z',
    title: { es: 'Cloud, Docker y CI/CD', en: 'Cloud, Docker and CI/CD' } as L,
    body: {
      es: 'Automatizo el camino de tu código a producción para que desplegar deje de dar miedo. Contenedores, pipelines y despliegue en AWS o Azure.',
      en: 'I automate the path from your code to production so shipping stops being scary. Containers, pipelines and deployment on AWS or Azure.',
    } as L,
    includes: [
      { es: 'Docker y contenedores', en: 'Docker and containers' },
      { es: 'GitHub Actions / Azure DevOps', en: 'GitHub Actions / Azure DevOps' },
      { es: 'AWS y Azure', en: 'AWS and Azure' },
      { es: 'Monitoreo y logs', en: 'Monitoring and logs' },
    ] as L[],
    proof: {
      es: 'JA Manager — doble pipeline a Render y Azure',
      en: 'JA Manager — dual pipeline to Render and Azure',
    } as L,
    proofHref: '#proyectos',
  },
  {
    id: 'plataformas',
    icon: 'M3 5.5A1.5 1.5 0 0 1 4.5 4h15A1.5 1.5 0 0 1 21 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5zM3 9h18M9 9v11',
    title: { es: 'Plataformas web completas', en: 'End-to-end web platforms' } as L,
    body: {
      es: 'Producto completo de punta a punta: API, base de datos, panel de administración y despliegue. Para cuando necesitas una sola persona responsable del resultado.',
      en: 'The whole product end to end: API, database, admin panel and deployment. For when you need one person accountable for the result.',
    } as L,
    includes: [
      { es: 'Backend + frontend', en: 'Backend + frontend' },
      { es: 'Panel de administración', en: 'Admin dashboard' },
      { es: 'Despliegue y dominio', en: 'Deployment and domain' },
      { es: 'Acompañamiento post-lanzamiento', en: 'Post-launch support' },
    ] as L[],
    proof: {
      es: 'JA Manager — en producción, con usuarios reales',
      en: 'JA Manager — in production, with real users',
    } as L,
    proofHref: '#proyectos',
  },
] as const;
