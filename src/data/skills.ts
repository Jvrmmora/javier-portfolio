import type { L } from '../i18n/config';
import uccLogo from '../assets/ucc.png';

// `name` se usa también para buscar el logo en src/lib/icons.ts.
// Lo que no tiene logo real disponible (APIs REST, SQL, CI/CD, Azure DevOps…) se
// muestra solo con su nombre: un logo inventado sería peor que ninguno.
export interface SkillItem {
  name: string;
  detail?: string;
}

/**
 * `icon` es un pictograma genérico de la categoría (trazo, 24×24), no un logo: igual que
 * el rayo de las métricas. `span` decide el ancho en la rejilla de Stack.astro:
 * `wide` ocupa dos columnas, `full` toda la fila.
 */
export const skillGroups: { label: L; icon: string; span?: 'wide' | 'full'; items: SkillItem[] }[] = [
  {
    label: { es: 'Backend', en: 'Backend' },
    icon: 'M4 3h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM4 13h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zM6 7h.01M6 17h.01',
    span: 'wide',
    items: [
      { name: 'Node.js' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'Express' },
      { name: 'NestJS' },
      { name: 'GraphQL' },
      { name: 'APIs REST' },
    ],
  },
  {
    label: { es: 'Bases de datos', en: 'Databases' },
    icon: 'M4 6c0-1.66 3.58-3 8-3s8 1.34 8 3-3.58 3-8 3-8-1.34-8-3zM4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3',
    items: [{ name: 'MongoDB' }, { name: 'Mongoose' }, { name: 'PostgreSQL' }, { name: 'SQL' }],
  },
  {
    label: { es: 'Cloud', en: 'Cloud' },
    icon: 'M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z',
    items: [
      { name: 'AWS', detail: 'S3 · EC2 · EKS · App Runner' },
      { name: 'Azure', detail: 'App Service · Static Web Apps' },
    ],
  },
  {
    label: { es: 'DevOps', en: 'DevOps' },
    icon: 'M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4z',
    items: [{ name: 'Docker' }, { name: 'GitHub Actions' }, { name: 'Azure DevOps' }, { name: 'CI/CD' }],
  },
  {
    label: { es: 'Prácticas', en: 'Practices' },
    icon: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zM9 12l2 2 4-4',
    items: [{ name: 'Jest' }, { name: 'Clean Architecture' }, { name: 'SOLID' }],
  },
  {
    label: { es: 'También', en: 'Also' },
    icon: 'M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    span: 'full',
    items: [
      { name: 'Python' },
      { name: 'PHP' },
      { name: 'Laravel' },
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Vite' },
    ],
  },
];

export const certifications: { name: L; issuer: string; year: string }[] = [
  { name: { es: 'Clean Architecture', en: 'Clean Architecture' }, issuer: 'Platzi', year: '2026' },
  { name: { es: 'DevOps', en: 'DevOps' }, issuer: 'Udemy', year: '2025' },
  { name: { es: 'Django con Python', en: 'Django with Python' }, issuer: 'Platzi', year: '2025' },
  { name: { es: 'TypeScript Avanzado', en: 'Advanced TypeScript' }, issuer: 'Platzi', year: '' },
  { name: { es: 'APIs REST con Node.js', en: 'Node.js REST APIs' }, issuer: 'Platzi', year: '' },
];

export const education = {
  school: 'Universidad Cooperativa de Colombia',
  // Logo entregado por Javier. Tiene transparencia en las zonas blancas: se muestra
  // sobre fondo blanco para verse como el original en ambos modos.
  logo: uccLogo,
  initials: 'UCC',
  degree: { es: 'Ingeniero de Sistemas', en: 'Systems Engineer' } as L,
  year: '2021',
} as const;
