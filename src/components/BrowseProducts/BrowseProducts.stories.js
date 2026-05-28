import { createBrowseProducts } from './BrowseProducts.js';

export default {
  title: 'Components/Browse Products',
  tags: ['autodocs'],
  render: (args) => createBrowseProducts(args),
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [375, 768, 1280, 1512] },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Section heading',
    },
    resultCount: {
      control: 'number',
      description: 'Number of results to display',
    },
    categories: {
      control: { type: 'object' },
      description: 'Array of { name, description } category objects',
    },
  },
};

// Default — matches the Figma design exactly
export const Default = {
  args: {
    title: 'Browse our API products',
    resultCount: 9,
    categories: [
      {
        name: 'Atmospheric forecasts',
        description:
          'Predictions of future weather conditions based on scientific measurements of the atmosphere and computer models that show how it is expected to change.',
      },
    ],
  },
};

// Multiple categories
export const MultipleCategories = {
  name: 'Multiple categories',
  args: {
    title: 'Browse our API products',
    resultCount: 9,
    categories: [
      {
        name: 'Atmospheric forecasts',
        description:
          'Predictions of future weather conditions based on scientific measurements of the atmosphere and computer models that show how it is expected to change.',
      },
      {
        name: 'Weather observations',
        description:
          'Real-time and historical measurements from weather stations, buoys and satellites across the globe.',
      },
      {
        name: 'Map images',
        description:
          'High-resolution weather map imagery including precipitation, temperature and wind speed layers.',
      },
    ],
  },
};

// Filtered results
export const FilteredResults = {
  name: 'Filtered results',
  args: {
    title: 'Browse our API products',
    resultCount: 3,
    categories: [
      {
        name: 'Weather observations',
        description:
          'Real-time and historical measurements from weather stations, buoys and satellites across the globe.',
      },
    ],
  },
};

// No results
export const NoResults = {
  name: 'No results',
  args: {
    title: 'Browse our API products',
    resultCount: 0,
    categories: [],
  },
};
