import './DownloadSampleData.css';

/**
 * Creates a Download Sample Data section element.
 *
 * @param {Object}   args
 * @param {string}   args.title      - Section heading
 * @param {string[]} args.paragraphs - Array of body paragraph strings
 * @param {Array}    args.downloads  - Array of { label, href } download link objects
 * @returns {HTMLElement}
 */
export const createDownloadSampleData = ({
  title = 'Download sample data',
  paragraphs = [
    "This sample data is historic and free to use, but only for internal evaluation. You can't use it for commercial or operational purposes, and you shouldn't share it outside your organisation. It's simply there to help you understand what setup you might need — and the Met Office isn't liable for anything related to its use.",
    'We now use WMO v27 GRIB standards and have a Met Office repository for local codes.\nPlease see the glossary for GRIB codes used for each parameter.',
  ],
  downloads = [
    {
      label: 'EU-ground-temperature.grib2',
      href: 'https://datahub.metoffice.gov.uk/sample-model-data/atmospheric/download/ground-temperature',
    },
  ],
} = {}) => {
  const section = document.createElement('section');
  section.className = 'mo-download-section';
  section.setAttribute('aria-label', 'Download sample data');

  const container = document.createElement('div');
  container.className = 'mo-download';

  // Heading
  const heading = document.createElement('h2');
  heading.className = 'mo-download__title';
  heading.textContent = title;
  container.appendChild(heading);

  // Body
  const body = document.createElement('div');
  body.className = 'mo-download__body';

  paragraphs.forEach((text) => {
    const p = document.createElement('p');
    // Support \n line breaks within a paragraph
    const lines = text.split('\n');
    lines.forEach((line, i) => {
      p.appendChild(document.createTextNode(line));
      if (i < lines.length - 1) {
        p.appendChild(document.createElement('br'));
      }
    });
    body.appendChild(p);
  });

  // Download links
  if (downloads.length > 0) {
    const linksDiv = document.createElement('div');
    linksDiv.className = 'mo-download__links';

    downloads.forEach(({ label, href }) => {
      const a = document.createElement('a');
      a.className = 'mo-download__link';
      a.href = href;
      a.textContent = label;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      linksDiv.appendChild(a);
    });

    body.appendChild(linksDiv);
  }

  container.appendChild(body);
  section.appendChild(container);
  return section;
};
