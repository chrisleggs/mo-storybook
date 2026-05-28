import './BrowseProducts.css';

/**
 * Creates the Browse our API Products section element.
 *
 * @param {Object}    args
 * @param {string}    args.title       - Section heading
 * @param {number}    args.resultCount - Number of results to display
 * @param {Array}     args.categories  - Array of { name, description } category objects
 * @returns {HTMLElement}
 */
export const createBrowseProducts = ({
  title = 'Browse our API products',
  resultCount = 9,
  categories = [
    {
      name: 'Atmospheric forecasts',
      description:
        'Predictions of future weather conditions based on scientific measurements of the atmosphere and computer models that show how it is expected to change.',
    },
  ],
} = {}) => {
  const section = document.createElement('section');
  section.className = 'mo-browse';

  const inner = document.createElement('div');
  inner.className = 'mo-browse__inner';

  // Title
  const heading = document.createElement('h2');
  heading.className = 'mo-browse__title';
  heading.textContent = title;
  inner.appendChild(heading);

  // Divider
  const hr = document.createElement('hr');
  hr.className = 'mo-browse__divider';
  inner.appendChild(hr);

  // Results count
  const count = document.createElement('p');
  count.className = 'mo-browse__count';
  count.textContent = `${resultCount} results`;
  inner.appendChild(count);

  // Category items
  if (categories.length > 0) {
    const list = document.createElement('div');
    list.className = 'mo-browse__categories';

    categories.forEach(({ name, description }) => {
      const item = document.createElement('div');
      item.className = 'mo-browse__category';

      const catName = document.createElement('h3');
      catName.className = 'mo-browse__category-name';
      catName.textContent = name;

      const catDesc = document.createElement('p');
      catDesc.className = 'mo-browse__category-desc';
      catDesc.textContent = description;

      item.appendChild(catName);
      item.appendChild(catDesc);
      list.appendChild(item);
    });

    inner.appendChild(list);
  }

  section.appendChild(inner);
  return section;
};
