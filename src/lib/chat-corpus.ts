// Lo que el chat sabe de Javier. Se arma desde los mismos datos que pintan el sitio
// (src/data/*.ts): si el contenido cambia ahí, basta volver a correr `npm run ingest`
// y el chat dice lo mismo que la página. Nada se escribe dos veces.
//
// Solo lo usa scripts/ingest.mjs, en build time. El Worker nunca importa este archivo:
// recibe los vectores ya calculados (src/data/cv-vectors.json).
import type { L } from '../i18n/config';
import { profile, heroCard, metrics, getChannels, CAL_URL } from '../data/profile';
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
      profile.nonTechnical[l],
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

  // Preguntas frecuentes. Se escriben como respuesta directa porque así es como se
  // preguntan: "¿cuál es su lenguaje principal?" no se parece al CV, pero sí a esto.
  // Todo sale de datos que ya existen en el sitio (metrics, experience, skills).
  const years = metrics[0].count;
  const startedCareer = experience[experience.length - 1].start;
  const currentJob = experience[0];

  add('faq-lenguaje', (l) =>
    l === 'es'
      ? `¿Cuál es su lenguaje principal? Su stack principal es Node.js con TypeScript: más de ${years} años construyendo APIs con ellos. También trabaja con JavaScript y también ha trabajado con Python y PHP (Laravel).`
      : `What is his main programming language? His main stack is Node.js with TypeScript: more than ${years} years building APIs with them. He also works with JavaScript and has also worked with Python and PHP (Laravel).`,
  );

  add('faq-experiencia', (l) =>
    l === 'es'
      ? `¿Cuántos años de experiencia tiene? Más de ${years} años con Node.js y TypeScript (desde ${currentJob.period.es.split(' — ')[0]} en ${currentJob.company}). Su trayectoria como desarrollador backend empezó en ${startedCareer}.`
      : `How many years of experience does he have? More than ${years} years with Node.js and TypeScript (since ${currentJob.period.en.split(' — ')[0]} at ${currentJob.company}). His career as a backend developer started in ${startedCareer}.`,
  );

  // Cómo está hecho este sitio. Es texto fijo: si cambian la pila o el chat, hay que
  // actualizarlo aquí y volver a correr `npm run ingest`.
  add('faq-este-sitio', (l) =>
    l === 'es'
      ? 'Cómo está hecho este sitio: lo construyó Javier con Astro y Tailwind CSS, animaciones con GSAP y Lenis, y tipografías Inter y Geist Mono. Es bilingüe (español e inglés) y funciona sobre Cloudflare Workers con un dominio propio (javiermontano.dev). No usa base de datos ni formulario de contacto. Este asistente es un chat con RAG: busca por similitud en el contenido del sitio y responde con Gemini (con Llama en Cloudflare Workers AI como respaldo). El código es público en https://github.com/Jvrmmora/javier-portfolio.'
      : 'How this site is built: Javier built it with Astro and Tailwind CSS, animations with GSAP and Lenis, and the Inter and Geist Mono typefaces. It is bilingual (Spanish and English) and runs on Cloudflare Workers with its own domain (javiermontano.dev). It has no database and no contact form. This assistant is a RAG chat: it searches the site content by similarity and answers with Gemini (with Llama on Cloudflare Workers AI as a fallback). The code is public at https://github.com/Jvrmmora/javier-portfolio.',
  );

  add('oferta', (l) =>
    l === 'es'
      ? `Cómo empezar a trabajar con Javier: una llamada gratuita de 30 minutos, sin compromiso, que se agenda en ${CAL_URL}. Después envía un resumen de una página con riesgos, orden de trabajo y un estimado de esfuerzo. También se puede escribir por WhatsApp.`
      : `How to start working with Javier: a free 30-minute call, no strings attached, booked at ${CAL_URL}. Afterwards he sends a one-page summary with risks, order of work and an effort estimate. You can also message him on WhatsApp.`,
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
