import { createDownloadSampleData } from './DownloadSampleData.js';

export default {
  title: 'Components/Download Sample Data',
  tags: ['autodocs'],
  render: (args) => createDownloadSampleData(args),
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [375, 768, 1280, 1512] },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Section heading',
    },
    paragraphs: {
      control: { type: 'object' },
      description: 'Array of body paragraph strings (use \\n for line breaks within a paragraph)',
    },
    downloads: {
      control: { type: 'object' },
      description: 'Array of { label, href } download link objects',
    },
  },
};

// Default — matches the Figma design exactly
export const Default = {
  args: {
    title: 'Download sample data',
    paragraphs: [
      "This sample data is historic and free to use, but only for internal evaluation. You can't use it for commercial or operational purposes, and you shouldn't share it outside your organisation. It's simply there to help you understand what setup you might need — and the Met Office isn't liable for anything related to its use.",
      'We now use WMO v27 GRIB standards and have a Met Office repository for local codes.\nPlease see the glossary for GRIB codes used for each parameter.',
    ],
    downloads: [
      {
        label: 'EU-ground-temperature.grib2',
        href: 'https://datahub.metoffice.gov.uk/sample-model-data/atmospheric/download/ground-temperature',
      },
    ],
  },
};

// Multiple downloads
export const MultipleDownloads = {
  name: 'Multiple downloads',
  args: {
    title: 'Download sample data',
    paragraphs: [
      "This sample data is historic and free to use, but only for internal evaluation. You can't use it for commercial or operational purposes, and you shouldn't share it outside your organisation.",
    ],
    downloads: [
      {
        label: 'EU-ground-temperature.grib2',
        href: 'https://datahub.metoffice.gov.uk/sample-model-data/atmospheric/download/ground-temperature',
      },
      {
        label: 'EU-wind-speed.grib2',
        href: 'https://datahub.metoffice.gov.uk/sample-model-data/atmospheric/download/wind-speed',
      },
      {
        label: 'EU-precipitation.grib2',
        href: 'https://datahub.metoffice.gov.uk/sample-model-data/atmospheric/download/precipitation',
      },
    ],
  },
};

// No downloads
export const NoDownloads = {
  name: 'No downloads',
  args: {
    title: 'Download sample data',
    paragraphs: [
      'No sample data is currently available for this product. Please check back later.',
    ],
    downloads: [],
  },
};
