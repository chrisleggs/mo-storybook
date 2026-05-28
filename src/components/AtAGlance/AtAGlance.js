import './AtAGlance.css';

/**
 * Creates an At a Glance table element.
 *
 * @param {Object}   args
 * @param {string}   args.title - Section heading (default "At a glance")
 * @param {Array}    args.rows  - Array of { label, value, href? } row objects.
 *                               If href is provided the value renders as a link.
 * @returns {HTMLElement}
 */
export const createAtAGlance = ({
  title = 'At a glance',
  rows = [
    { label: 'Domain:', value: 'Global (region can be selected)' },
    { label: 'Product type:', value: 'Forecast' },
    { label: 'Resolution:', value: '10km (2,560 x 1,920 grid points)' },
    {
      label: 'Projection:',
      value: 'Equirectangular Latitude-Longitude',
      href: 'https://datahub.metoffice.gov.uk/projection',
    },
    {
      label: 'Parameters:',
      value: '144 available across multiple levels',
      href: 'https://datahub.metoffice.gov.uk/docs/glossary?models=mo-global&sortOrder=ALPHABETICALLY',
    },
    {
      label: 'Time steps:',
      value: 'Every hour 0 to 54 hours, every 3 hours between 57 & 144 hours, every 6 hours between 150 & 168 hours',
    },
    { label: 'Forecast length:', value: '7 days (168 hours)' },
    {
      label: 'Update frequency:',
      value: '4 times daily (for the next 168 hours at 00:00 & 12:00 UTC, for the next 66 hours at 06:00 & 18:00 UTC)',
    },
    { label: 'Delivery method:', value: 'API' },
    { label: 'File format:', value: 'GRIB2 - Gridded Binary Format' },
  ],
} = {}) => {
  const section = document.createElement('section');
  section.className = 'mo-at-a-glance-section';

  const container = document.createElement('div');
  container.className = 'mo-at-a-glance';

  // Heading
  const heading = document.createElement('h2');
  heading.className = 'mo-at-a-glance__title';
  heading.textContent = title;
  container.appendChild(heading);

  // Table (dl)
  const dl = document.createElement('dl');
  dl.className = 'mo-at-a-glance__table';

  rows.forEach(({ label, value, href }) => {
    const row = document.createElement('div');
    row.className = 'mo-at-a-glance__row';

    // Label (dt)
    const dt = document.createElement('dt');
    dt.className = 'mo-at-a-glance__label';
    dt.textContent = label;
    row.appendChild(dt);

    // Value (dd)
    const dd = document.createElement('dd');
    dd.className = 'mo-at-a-glance__value';

    if (href) {
      const a = document.createElement('a');
      a.className = 'mo-at-a-glance__link';
      a.href = href;
      a.textContent = value;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      dd.appendChild(a);
    } else {
      dd.textContent = value;
    }

    row.appendChild(dd);
    dl.appendChild(row);
  });

  container.appendChild(dl);
  section.appendChild(container);
  return section;
};
