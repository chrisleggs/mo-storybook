import './BackToTop.css';

/**
 * Creates a Back To Top button element.
 *
 * @param {Object} args
 * @param {string} args.label    - Button label text (default "Top")
 * @param {string} args.href     - Optional anchor href (e.g. "#top"). If omitted,
 *                                 clicking scrolls to window top via JS.
 * @returns {HTMLElement}
 */
export const createBackToTop = ({
  label = 'Top',
  href = '',
} = {}) => {
  const section = document.createElement('section');
  section.className = 'mo-back-to-top-section';

  // Use <a> when an href is supplied, otherwise <button>
  const el = document.createElement(href ? 'a' : 'button');
  el.className = 'mo-back-to-top';

  if (href) {
    el.href = href;
  } else {
    el.type = 'button';
    el.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ── Upward chevron icon ────────────────────────────────────────
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('class', 'mo-back-to-top__icon');
  svg.setAttribute('xmlns', svgNS);
  svg.setAttribute('width', '24');
  svg.setAttribute('height', '12');
  svg.setAttribute('viewBox', '0 0 24 12');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');

  const path = document.createElementNS(svgNS, 'path');
  path.setAttribute('d', 'M2 10.5 L12 1.5 L22 10.5');
  path.setAttribute('fill', 'none');
  path.setAttribute('stroke', '#1d1d1d');
  path.setAttribute('stroke-width', '2');
  path.setAttribute('stroke-linecap', 'round');
  path.setAttribute('stroke-linejoin', 'round');
  svg.appendChild(path);

  // ── Label ─────────────────────────────────────────────────────
  const labelSpan = document.createElement('span');
  labelSpan.className = 'mo-back-to-top__label';
  labelSpan.textContent = label;

  el.appendChild(svg);
  el.appendChild(labelSpan);
  section.appendChild(el);
  return section;
};
