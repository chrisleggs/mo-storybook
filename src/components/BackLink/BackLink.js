import './BackLink.css';

/**
 * Creates a Back Link element.
 *
 * @param {Object} args
 * @param {string} args.label - Link text (default "Back")
 * @param {string} args.href  - Link destination URL
 * @returns {HTMLElement}
 */
export const createBackLink = ({
  label = 'Back',
  href = '#',
} = {}) => {
  const section = document.createElement('section');
  section.className = 'mo-back-link-section';

  const link = document.createElement('a');
  link.className = 'mo-back-link';
  link.href = href;

  // Inline SVG chevron — left-pointing, scaled to match 19px text height
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('class', 'mo-back-link__icon');
  svg.setAttribute('xmlns', svgNS);
  svg.setAttribute('width', '7');
  svg.setAttribute('height', '13');
  svg.setAttribute('viewBox', '0 0 5 10');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');

  const path = document.createElementNS(svgNS, 'path');
  path.setAttribute('d', 'M5 0.5 L0.5 5 L5 9.5');
  path.setAttribute('fill', 'none');
  path.setAttribute('stroke', '#0074cc');
  path.setAttribute('stroke-width', '1.5');
  path.setAttribute('stroke-linecap', 'round');
  path.setAttribute('stroke-linejoin', 'round');
  svg.appendChild(path);

  const labelSpan = document.createElement('span');
  labelSpan.className = 'mo-back-link__label';
  labelSpan.textContent = label;

  link.appendChild(svg);
  link.appendChild(labelSpan);
  section.appendChild(link);
  return section;
};
