import { createUsageExamples } from './UsageExamples.js';

export default {
  title: 'Components/Usage Examples',
  tags: ['autodocs'],
  render: (args) => createUsageExamples(args),
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [375, 768, 1280, 1512] },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Page heading',
    },
    sections: {
      control: { type: 'object' },
      description: 'Array of { heading, items } section groups. Each item is an array of { text, href? } parts.',
    },
  },
};

// Default — matches the Figma design exactly
export const Default = {
  args: {
    title: 'Usage examples',
    sections: [
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
  },
};

// Single section
export const SingleSection = {
  name: 'Single section',
  args: {
    title: 'Usage examples',
    sections: [
      {
        heading: 'Tutorials',
        items: [
          [{ text: 'Numerical weather prediction models', href: 'https://www.metoffice.gov.uk/research/approach/modelling-systems/unified-model/weather-forecasting' }],
          [{ text: 'The Met Office Unified Model', href: 'https://www.metoffice.gov.uk/research/approach/modelling-systems/unified-model' }],
        ],
      },
    ],
  },
};

// Multiple sections
export const MultipleSections = {
  name: 'Multiple sections',
  args: {
    title: 'Usage examples',
    sections: [
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
      {
        heading: 'Further reading',
        items: [
          [{ text: 'ECMWF open data documentation', href: 'https://www.ecmwf.int/en/forecasts/datasets/open-data' }],
          [{ text: 'WMO GRIB standards', href: 'https://www.wmo.int/pages/prog/www/WMOCodes.html' }],
        ],
      },
    ],
  },
};
