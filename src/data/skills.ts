import type { L } from '../i18n/config';
import uccLogo from '../assets/ucc.png';

// `name` se usa también para buscar el logo en src/lib/icons.ts.
// Lo que no tiene logo real disponible (APIs REST, SQL, CI/CD, Azure DevOps…) se
// muestra solo con su nombre: un logo inventado sería peor que ninguno.
export interface SkillItem {
  name: string;
  detail?: string;
}

export const skillGroups: { label: L; items: SkillItem[] }[] = [
  {
    label: { es: 'Backend', en: 'Backend' },
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
    items: [{ name: 'MongoDB' }, { name: 'Mongoose' }, { name: 'PostgreSQL' }, { name: 'SQL' }],
  },
  {
    label: { es: 'Cloud', en: 'Cloud' },
    items: [
      { name: 'AWS', detail: 'S3 · EC2 · EKS · App Runner' },
      { name: 'Azure', detail: 'App Service · Static Web Apps' },
    ],
  },
  {
    label: { es: 'DevOps', en: 'DevOps' },
    items: [{ name: 'Docker' }, { name: 'GitHub Actions' }, { name: 'Azure DevOps' }, { name: 'CI/CD' }],
  },
  {
    label: { es: 'Prácticas', en: 'Practices' },
    items: [{ name: 'Jest' }, { name: 'Clean Architecture' }, { name: 'SOLID' }],
  },
  {
    label: { es: 'También', en: 'Also' },
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
