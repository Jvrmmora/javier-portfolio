// Lo que el chat sabe de Javier. Se arma desde los mismos datos que pintan el sitio
// (src/data/*.ts): si el contenido cambia ahí, basta volver a correr `npm run ingest`
// y el chat dice lo mismo que la página. Nada se escribe dos veces.
//
// Solo lo usa scripts/ingest.mjs, en build time. El Worker nunca importa este archivo:
// recibe los vectores ya calculados (src/data/cv-vectors.json).
import type { L } from '../i18n/config';
import { profile, heroCard, metrics, getChannels } from '../data/profile';
import { services } from '../data/services';
import { experience } from '../data/experience';
import { projects } from '../data/projects';
import { skillGroups, certifications, education } from '../data/skills';

export interface Chunk {
  id: string;
  es: string;
  en: string;
}

const pair = (build: (lang: 'es' | 'en') => string): Pick<Chunk, 'es' | 'en'> => ({
  es: build('es'),
  en: build('en'),
});

export function buildChunks(): Chunk[] {
  const chunks: Chunk[] = [];
  const add = (id: string, build: (lang: 'es' | 'en') => string) =>
    chunks.push({ id, ...pair(build) });

  add('perfil', (l) =>
    [
      `${profile.name} — ${profile.role[l]}. ${profile.stack}.`,
      profile.tagline[l],
      `${profile.availability[l]}.`,
      `${heroCard.remote.title[l]}: ${heroCard.remote.detail[l]}.`,
      `${heroCard.location.title[l]} (${heroCard.location.detail[l]}).`,
      `${heroCard.languages.title[l]} — ${heroCard.languages.detail[l]}.`,
    ].join(' '),
  );

  add('metricas', (l) =>
    metrics
      .map((m) => {
        const prefix = 'prefix' in m ? m.prefix : '';
        const unit = m.unit[l] ? ` ${m.unit[l]}` : '';
        return `${m.title[l]}: ${prefix}${m.count.toLocaleString(l === 'es' ? 'es-CO' : 'en-US')}${m.suffix}${unit} ${m.label[l]}.`;
      })
      .join(' '),
  );

  for (const s of services) {
    add(`servicio-${s.id}`, (l) =>
      `${l === 'es' ? 'Servicio' : 'Service'}: ${s.title[l]}. ${s.body[l]} ` +
      `${l === 'es' ? 'Incluye' : 'Includes'}: ${s.includes.map((i) => i[l]).join(', ')}. ` +
      `${l === 'es' ? 'Lo respalda' : 'Backed by'}: ${s.proof[l]}.`,
    );
  }

  for (const [i, job] of experience.entries()) {
    add(`experiencia-${i + 1}`, (l) =>
      `${job.company} — ${job.role[l]} (${job.period[l]}, ${job.place[l]}). ` +
      `${job.bullets.map((b) => b[l]).join(' ')} ` +
      `${l === 'es' ? 'Tecnologías' : 'Technologies'}: ${job.stack.join(', ')}.`,
    );
  }

  for (const p of projects) {
    add(`proyecto-${p.name.es.toLowerCase().replace(/\s+/g, '-')}`, (l) =>
      `${l === 'es' ? 'Proyecto' : 'Project'} ${p.name[l]} (${p.meta[l]}, ${p.year[l]}). ${p.body[l]} ` +
      `Stack: ${p.stack.join(', ')}. ` +
      (p.highlights ? `${p.highlights.map((h) => h[l]).join('; ')}. ` : '') +
      (p.href ? `${l === 'es' ? 'En producción' : 'Live'}: ${p.href}. ` : '') +
      (p.repo
        ? `${l === 'es' ? 'Código público' : 'Public code'}: ${p.repo}.`
        : l === 'es'
          ? 'El código es privado.'
          : 'The code is private.'),
    );
  }

  for (const g of skillGroups) {
    add(`stack-${g.label.en.toLowerCase()}`, (l) =>
      `${l === 'es' ? 'Stack' : 'Stack'} — ${g.label[l]}: ` +
      g.items.map((i) => (i.detail ? `${i.name} (${i.detail})` : i.name)).join(', ') +
      '.',
    );
  }

  add('formacion', (l) =>
    `${l === 'es' ? 'Educación' : 'Education'}: ${education.degree[l]}, ${education.school} (${education.year}). ` +
    `${l === 'es' ? 'Certificaciones' : 'Certifications'}: ` +
    certifications
      .map((c) => `${c.name[l]} — ${c.issuer}${c.year ? ` (${c.year})` : ''}`)
      .join('; ') +
    '.',
  );

  add('contacto', (l) =>
    `${l === 'es' ? 'Cómo contactar a Javier' : 'How to contact Javier'}: ` +
    getChannels(l)
      .map((c) => `${c.name} ${c.handle}`)
      .join(' · ') +
    `. ${l === 'es' ? 'Portafolio' : 'Portfolio'}: https://javiermontano.dev.`,
  );

  return chunks;
}
