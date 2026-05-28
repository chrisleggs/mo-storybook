import './UsageExamples.css';

/**
 * Creates a Usage Examples section element.
 *
 * @param {Object}   args
 * @param {string}   args.title    - Page heading
 * @param {Array}    args.sections - Array of section groups:
 *   {
 *     heading: string,
 *     items: Array of parts arrays. Each item is an array of parts:
 *       { text: string, href?: string }
 *       Plain text parts have no href; link parts have an href.
 *   }
 * @returns {HTMLElement}
 */
export const createUsageExamples = ({
  title = 'Usage examples',
  sections = [
    {
      heading: 'Tutorials',
      items: [
        [{ text: 'Numerical weather prediction models', href: 'https://www.metoffice.gov.uk/research/approach/modelling-systems/unified-model/weather-forecasting' }],
        [{ text: 'The Met Office Unified Model', href: 'https://www.metoffice.gov.uk/research/approach/modelling-systems/unified-model' }],
      ],
    },
    {
      heading: 'Tools & Applications',
      items: [
        [
          { text: 'Iris', href: 'https://scitools-iris.readthedocs.io/en/stable/userguide/index.html' },
          { text: ' by ' },
          { text: 'Iris Contributors', href: 'https://scitools-iris.readthedocs.io/en/stable/copyright.html' },
        ],
      ],
    },
  ],
} = {}) => {
  const section = document.createElement('section');
  section.className = 'mo-usage-section';

  const container = document.createElement('div');
  container.className = 'mo-usage';

  // Page heading
  const heading = document.createElement('h2');
  heading.className = 'mo-usage__title';
  heading.textContent = title;
  container.appendChild(heading);

  // Content area
  const content = document.createElement('div');
  content.className = 'mo-usage__content';

  sections.forEach(({ heading: groupHeading, items }) => {
    const group = document.createElement('div');
    group.className = 'mo-usage__group';

    // Sub-heading
    const h3 = document.createElement('h3');
    h3.className = 'mo-usage__group-heading';
    h3.textContent = groupHeading;
    group.appendChild(h3);

    // List
    const ul = document.createElement('ul');
    ul.className = 'mo-usage__list';

    items.forEach((parts) => {
      const li = document.createElement('li');

      parts.forEach(({ text, href }) => {
        if (href) {
          const a = document.createElement('a');
          a.className = 'mo-usage__link';
          a.href = href;
          a.textContent = text;
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
          li.appendChild(a);
        } else {
          li.appendChild(document.createTextNode(text));
        }
      });

      ul.appendChild(li);
    });

    group.appendChild(ul);
    content.appendChild(group);
  });

  container.appendChild(content);
  section.appendChild(container);
  return section;
};
