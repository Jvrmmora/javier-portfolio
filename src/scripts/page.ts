// Con el ClientRouter los <script> de los componentes se ejecutan una sola vez, pero el
// HTML se reemplaza en cada navegación (p. ej. al cambiar de idioma). `onPage` vuelve a
// montar la lógica sobre el DOM nuevo en cada carga, y le da una señal que se aborta
// justo antes del siguiente reemplazo: todo listener registrado con `{ signal }` se
// retira solo, y lo demás (observers, rAF) se limpia en `signal.onabort`.
export function onPage(setup: (signal: AbortSignal) => void) {
  document.addEventListener('astro:page-load', () => {
    const controller = new AbortController();
    document.addEventListener('astro:before-swap', () => controller.abort(), { once: true });
    setup(controller.signal);
  });
}
