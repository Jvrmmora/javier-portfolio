// Calcula los embeddings del contenido del sitio y los guarda en src/data/cv-vectors.json.
// Se corre a mano cuando cambia el contenido: `npm run ingest`. No es parte del build.
//
// Necesita GEMINI_API_KEY en el entorno o en .dev.vars. Con `--dry` solo muestra los fragmentos.
import { readFileSync, writeFileSync, existsSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { buildSync } from 'esbuild';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(root, 'src/data/cv-vectors.json');
const DIMS = 768;
const MODEL = process.env.GEMINI_EMBED_MODEL || 'gemini-embedding-001';

function loadKey() {
  if (process.env.GEMINI_API_KEY) return process.env.GEMINI_API_KEY;
  const file = join(root, '.dev.vars');
  if (existsSync(file)) {
    const m = readFileSync(file, 'utf8').match(/^GEMINI_API_KEY\s*=\s*"?([^"\n]+)"?/m);
    if (m) return m[1].trim();
  }
  throw new Error('Falta GEMINI_API_KEY (variable de entorno o archivo .dev.vars).');
}

// Los datos del sitio importan imágenes (.png) pensadas para Astro; aquí no hacen falta.
function loadChunks() {
  const dir = mkdtempSync(join(tmpdir(), 'ingest-'));
  const outfile = join(dir, 'corpus.mjs');
  try {
    buildSync({
      entryPoints: [join(root, 'src/lib/chat-corpus.ts')],
      bundle: true,
      format: 'esm',
      platform: 'node',
      outfile,
      loader: { '.png': 'empty', '.jpg': 'empty', '.webp': 'empty' },
      logLevel: 'error',
    });
    return import(pathToFileURL(outfile).href).then((m) => m.buildChunks());
  } finally {
    // El import ya resolvió el módulo; el directorio temporal se borra al final.
    process.on('exit', () => rmSync(dir, { recursive: true, force: true }));
  }
}

const normalize = (v) => {
  const n = Math.hypot(...v) || 1;
  return v.map((x) => Math.round((x / n) * 1e5) / 1e5);
};

async function embed(key, texts) {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:batchEmbedContents`,
    {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-goog-api-key': key },
      body: JSON.stringify({
        requests: texts.map((text) => ({
          model: `models/${MODEL}`,
          content: { parts: [{ text }] },
          taskType: 'RETRIEVAL_DOCUMENT',
          outputDimensionality: DIMS,
        })),
      }),
    },
  );
  if (!res.ok) throw new Error(`Gemini respondió ${res.status}: ${await res.text()}`);
  const { embeddings } = await res.json();
  return embeddings.map((e) => normalize(e.values));
}

const chunks = await loadChunks();
// `--dry` solo imprime los fragmentos (sin llamar a la API ni necesitar clave).
if (process.argv.includes('--dry')) {
  for (const c of chunks) console.log(`\n[${c.id}]\n${c.es}`);
  console.log(`\n${chunks.length} fragmentos`);
  process.exit(0);
}
const key = loadKey();
console.log(`${chunks.length} fragmentos → ${MODEL} (${DIMS} dimensiones)`);

// Se incrusta el texto en los dos idiomas: así una pregunta en inglés encuentra un
// fragmento y viceversa, sin depender de cuál idioma se esté leyendo.
const vectors = await embed(
  key,
  chunks.map((c) => `${c.es}\n${c.en}`),
);

writeFileSync(
  OUT,
  JSON.stringify({ model: MODEL, dims: DIMS, chunks: chunks.map((c, i) => ({ ...c, v: vectors[i] })) }),
);
console.log(`Escrito ${OUT}`);
