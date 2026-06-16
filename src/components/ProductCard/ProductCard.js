import './ProductCard.css';
import '../Button/Button.css';

/**
 * Creates a Product Card element.
 *
 * @param {Object}   args
 * @param {string}   args.title           - Card heading
 * @param {string}   args.description     - Short product description
 * @param {Array}    args.attributes      - Array of { label, value } metadata pairs
 * @param {string}   args.ctaLabel        - Call-to-action button text
 * @param {string}   args.ctaHref         - Call-to-action link URL
 * @param {string}   args.imageSrc        - Thumbnail image URL (optional)
 * @param {string}   args.imageAlt        - Thumbnail image alt text
 * @returns {HTMLElement}
 */
export const createProductCard = ({
  title = 'Global Deterministic 10km Forecast',
  description = 'A numerical weather prediction forecast for the whole globe, with a resolution of approximately 0.09 degrees i.e. 10km (2,560 x 1,920 grid points).',
  attributes = [
    { label: 'Forecast length', value: '7 days (168 hours)' },
    { label: 'Update frequency', value: '4 times daily' },
  ],
  ctaLabel = 'Find out more',
  ctaHref = '#',
  imageSrc = '',
  imageAlt = '',
} = {}) => {
  // Section wrapper — keeps left edge aligned with Welcome / BrowseProducts
  const section = document.createElement('section');
  section.className = 'mo-product-card-section';
  section.setAttribute('aria-label', 'Product card');

  const card = document.createElement('div');
  card.className = 'mo-product-card';

  // ── Thumbnail ────────────────────────────────────────────────────────
  const thumb = document.createElement('div');
  thumb.className = 'mo-product-card__thumb';

  if (imageSrc) {
    const img = document.createElement('img');
    img.className = 'mo-product-card__image';
    img.src = imageSrc;
    img.alt = imageAlt;
    thumb.appendChild(img);
  } else {
    const placeholder = document.createElement('div');
    placeholder.className = 'mo-product-card__image mo-product-card__image--placeholder';
    thumb.appendChild(placeholder);
  }

  card.appendChild(thumb);

  // ── Content ──────────────────────────────────────────────────────────
  const content = document.createElement('div');
  content.className = 'mo-product-card__content';

  // Title
  const titleEl = document.createElement('h3');
  titleEl.className = 'mo-product-card__title';
  titleEl.textContent = title;
  content.appendChild(titleEl);

  // Description
  const descEl = document.createElement('p');
  descEl.className = 'mo-product-card__desc';
  descEl.textContent = description;
  content.appendChild(descEl);

  // Attributes
  if (attributes.length > 0) {
    const attrsEl = document.createElement('div');
    attrsEl.className = 'mo-product-card__attributes';

    attributes.forEach(({ label, value }) => {
      const p = document.createElement('p');
      p.className = 'mo-product-card__attribute';

      const labelSpan = document.createElement('span');
      labelSpan.className = 'mo-product-card__attribute-label';
      labelSpan.textContent = `${label}: `;

      const valueSpan = document.createElement('span');
      valueSpan.className = 'mo-product-card__attribute-value';
      valueSpan.textContent = value;

      p.appendChild(labelSpan);
      p.appendChild(valueSpan);
      attrsEl.appendChild(p);
    });

    content.appendChild(attrsEl);
  }

  // CTA
  const ctaEl = document.createElement('a');
  ctaEl.className = 'mo-button';
  ctaEl.textContent = ctaLabel;
  ctaEl.href = ctaHref;
  content.appendChild(ctaEl);

  card.appendChild(content);
  section.appendChild(card);
  return section;
};
