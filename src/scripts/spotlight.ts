import { onPage } from './page';

// Foco de luz que sigue al puntero dentro de las tarjetas marcadas con `data-spotlight`
// (métricas y canales de contacto). Solo se escriben dos variables CSS; el degradado lo
// pinta `.spotlight::before` en global.css. Varios componentes importan este módulo,
// pero el navegador lo ejecuta una sola vez.
onPage(() => {
  document.querySelectorAll<HTMLElement>('[data-spotlight]').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const box = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${event.clientX - box.left}px`);
      card.style.setProperty('--my', `${event.clientY - box.top}px`);
    });
  });
});
