import './Welcome.css';

/**
 * Creates the Welcome section element.
 *
 * @param {Object}   args
 * @param {string}   args.title       - Main heading text
 * @param {string}   args.intro       - Short introductory paragraph (below the heading)
 * @param {string}   args.description - Longer descriptive paragraph
 * @param {boolean}  args.showDivider - Whether to show the horizontal rule at the bottom
 * @returns {HTMLElement}
 */
export const createWelcome = ({
  title = 'Welcome to Weather Data Hub',
  intro = 'Find the right data for you from our high-quality weather API products.',
  description = 'Choose from a selection of atmospheric and site-specific data models, weather observations and map images. You can use them to create applications, conduct research or simply stay informed about the weather conditions in your or any location worldwide.',
  showDivider = true,
} = {}) => {
  const section = document.createElement('section');
  section.className = 'mo-welcome';

  const inner = document.createElement('div');
  inner.className = 'mo-welcome__inner';

  // Heading
  const heading = document.createElement('h1');
  heading.className = 'mo-welcome__title';
  heading.textContent = title;
  inner.appendChild(heading);

  // Body paragraphs
  const body = document.createElement('div');
  body.className = 'mo-welcome__body';

  if (intro) {
    const introPara = document.createElement('p');
    introPara.textContent = intro;
    body.appendChild(introPara);
  }

  if (description) {
    const descPara = document.createElement('p');
    descPara.textContent = description;
    body.appendChild(descPara);
  }

  inner.appendChild(body);

  // Divider
  if (showDivider) {
    const hr = document.createElement('hr');
    hr.className = 'mo-welcome__divider';
    inner.appendChild(hr);
  }

  section.appendChild(inner);
  return section;
};
