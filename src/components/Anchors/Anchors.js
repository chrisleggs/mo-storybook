import './Anchors.css';

/**
 * Creates an Anchors navigation element.
 *
 * @param {Object} args
 * @param {Array}  args.items - Array of { label, href } anchor link objects
 * @returns {HTMLElement}
 */
export const createAnchors = ({
  items = [
    { label: 'At a glance', href: '#at-a-glance' },
    { label: 'Samples', href: '#samples' },
    { label: 'Usage examples', href: '#usage-examples' },
    { label: 'API Docs', href: '#api-docs' },
    { label: 'Support', href: '#support' },
  ],
} = {}) => {
  const section = document.createElement('section');
  section.className = 'mo-anchors-section';

  const nav = document.createElement('nav');
  nav.className = 'mo-anchors';
  nav.setAttribute('aria-label', 'Page sections');

  items.forEach(({ label, href }) => {
    const link = document.createElement('a');
    link.className = 'mo-anchors__link';
    link.textContent = label;
    link.href = href || '#';
    nav.appendChild(link);
  });

  section.appendChild(nav);
  return section;
};
