import './Overview.css';

/**
 * Creates an Overview section element.
 *
 * @param {Object}   args
 * @param {string}   args.title       - Section heading (default "Overview")
 * @param {string[]} args.paragraphs  - Array of body paragraph strings
 * @returns {HTMLElement}
 */
export const createOverview = ({
  title = 'Overview',
  paragraphs = [
    'A numerical weather prediction forecast for the whole globe, with a resolution of approximately 0.09 degrees i.e. 10km (2,560 x 1,920 grid points).',
    'The global deterministic model is a global configuration of the Unified Model, which is the Met Office\'s flagship Numerical Weather Prediction model. The model\'s initial state is kept close to the real atmosphere using hybrid 4D-Var data assimilation.',
  ],
} = {}) => {
  const section = document.createElement('section');
  section.className = 'mo-overview-section';

  const container = document.createElement('div');
  container.className = 'mo-overview';

  // Heading
  const heading = document.createElement('h2');
  heading.className = 'mo-overview__title';
  heading.textContent = title;
  container.appendChild(heading);

  // Body paragraphs
  if (paragraphs.length > 0) {
    const body = document.createElement('div');
    body.className = 'mo-overview__body';

    paragraphs.forEach((text) => {
      const p = document.createElement('p');
      p.textContent = text;
      body.appendChild(p);
    });

    container.appendChild(body);
  }

  section.appendChild(container);
  return section;
};
