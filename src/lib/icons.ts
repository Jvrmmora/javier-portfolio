import { icons as logosSet } from '@iconify-json/logos';
import * as simple from 'simple-icons';

export interface IconData {
  body: string;
  viewBox: string;
}

/**
 * Todos los logos se pintan en un solo color (`currentColor`), no en sus colores de marca.
 * Razón: el sitio tiene modo claro y oscuro, y varios logos reales son casi negros
 * (GitHub, Express, Next.js). En el fondo navy desaparecerían. Monocromo hereda el color
 * del texto y siempre se lee; el color de marca se pierde, pero la silueta es lo que
 * hace reconocible a un logo.
 */
const monochrome = (body: string): string =>
  body
    .replace(/fill="(?!none)[^"]*"/g, 'fill="currentColor"')
    .replace(/stroke="(?!none)[^"]*"/g, 'stroke="currentColor"');

function fromLogos(name: string): IconData {
  const icon = logosSet.icons[name as keyof typeof logosSet.icons];
  if (!icon) throw new Error(`Icono "${name}" no existe en @iconify-json/logos`);
  const w = icon.width ?? logosSet.width ?? 24;
  const h = icon.height ?? logosSet.height ?? 24;
  return { body: monochrome(icon.body), viewBox: `0 0 ${w} ${h}` };
}

function fromSimple(slug: string): IconData {
  const key = `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}` as keyof typeof simple;
  const icon = simple[key] as { path: string } | undefined;
  if (!icon) throw new Error(`Icono "${slug}" no existe en simple-icons`);
  return { body: `<path fill="currentColor" d="${icon.path}"/>`, viewBox: '0 0 24 24' };
}

/**
 * Registro de logos. Se prefiere simple-icons: sus logos están diseñados para un solo
 * color, con letras y huecos recortados. Los de `logos` son a color y, al aplanarlos,
 * pierden el detalle interior (el "TS" de TypeScript quedaba como un cuadrado macizo).
 * `logos` se usa solo para las marcas que simple-icons retiró: AWS, Azure y LinkedIn,
 * que son de un solo color y se aplanan sin pérdida.
 * Lo que no existe en ninguna de las dos (Azure DevOps, la universidad) no lleva logo:
 * se muestra el nombre, nunca una marca inventada.
 */
const REGISTRY: Record<string, () => IconData> = {
  'node.js': () => fromSimple('nodedotjs'),
  typescript: () => fromSimple('typescript'),
  javascript: () => fromSimple('javascript'),
  express: () => fromSimple('express'),
  nestjs: () => fromSimple('nestjs'),
  graphql: () => fromSimple('graphql'),
  mongodb: () => fromSimple('mongodb'),
  mongoose: () => fromSimple('mongoose'),
  postgresql: () => fromSimple('postgresql'),
  aws: () => fromLogos('aws'),
  azure: () => fromLogos('azure-icon'),
  docker: () => fromSimple('docker'),
  'github actions': () => fromSimple('githubactions'),
  jest: () => fromSimple('jest'),
  python: () => fromSimple('python'),
  laravel: () => fromSimple('laravel'),
  php: () => fromSimple('php'),
  react: () => fromSimple('react'),
  'next.js': () => fromSimple('nextdotjs'),
  vite: () => fromSimple('vite'),
  platzi: () => fromSimple('platzi'),
  udemy: () => fromSimple('udemy'),
  whatsapp: () => fromSimple('whatsapp'),
  'cal.com': () => fromSimple('caldotcom'),
  gmail: () => fromSimple('gmail'),
  linkedin: () => fromLogos('linkedin-icon'),
  github: () => fromSimple('github'),
};

const cache = new Map<string, IconData | null>();

/** Devuelve el logo, o `null` si no hay uno real disponible para ese nombre. */
export function getIcon(name: string): IconData | null {
  const key = name.trim().toLowerCase();
  if (!cache.has(key)) {
    const make = REGISTRY[key];
    cache.set(key, make ? make() : null);
  }
  return cache.get(key)!;
}
