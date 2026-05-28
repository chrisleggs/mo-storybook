import { createOverview } from './Overview.js';

export default {
  title: 'Components/Overview',
  tags: ['autodocs'],
  render: (args) => createOverview(args),
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
      description: 'Array of body paragraph strings',
    },
  },
};

// Default — matches the Figma design exactly
export const Default = {
  args: {
    title: 'Overview',
    paragraphs: [
      'A numerical weather prediction forecast for the whole globe, with a resolution of approximately 0.09 degrees i.e. 10km (2,560 x 1,920 grid points).',
      'The global deterministic model is a global configuration of the Unified Model, which is the Met Office\'s flagship Numerical Weather Prediction model. The model\'s initial state is kept close to the real atmosphere using hybrid 4D-Var data assimilation.',
    ],
  },
};

// Single paragraph
export const SingleParagraph = {
  name: 'Single paragraph',
  args: {
    title: 'Overview',
    paragraphs: [
      'A numerical weather prediction forecast for the whole globe, with a resolution of approximately 0.09 degrees i.e. 10km (2,560 x 1,920 grid points).',
    ],
  },
};

// Custom title
export const CustomTitle = {
  name: 'Custom title',
  args: {
    title: 'About this product',
    paragraphs: [
      'A numerical weather prediction forecast for the whole globe, with a resolution of approximately 0.09 degrees i.e. 10km (2,560 x 1,920 grid points).',
      'The global deterministic model is a global configuration of the Unified Model, which is the Met Office\'s flagship Numerical Weather Prediction model.',
    ],
  },
};
