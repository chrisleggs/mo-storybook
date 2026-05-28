import { createProductCard } from './ProductCard.js';

export default {
  title: 'Components/Product Card',
  tags: ['autodocs'],
  render: (args) => createProductCard(args),
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [375, 768, 1280, 1512] },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Card heading',
    },
    description: {
      control: 'text',
      description: 'Short product description',
    },
    attributes: {
      control: { type: 'object' },
      description: 'Array of { label, value } metadata pairs',
    },
    ctaLabel: {
      control: 'text',
      description: 'Call-to-action button label',
    },
    ctaHref: {
      control: 'text',
      description: 'Call-to-action link URL',
    },
    imageSrc: {
      control: 'text',
      description: 'Thumbnail image URL',
    },
    imageAlt: {
      control: 'text',
      description: 'Thumbnail image alt text',
    },
  },
};

// Default — matches the Figma design
export const Default = {
  args: {
    title: 'Global Deterministic 10km Forecast',
    description:
      'A numerical weather prediction forecast for the whole globe, with a resolution of approximately 0.09 degrees i.e. 10km (2,560 x 1,920 grid points).',
    attributes: [
      { label: 'Forecast length', value: '7 days (168 hours)' },
      { label: 'Update frequency', value: '4 times daily' },
    ],
    ctaLabel: 'Find out more',
    ctaHref: '#',
    imageSrc: '',
    imageAlt: 'Global Deterministic 10km Forecast map',
  },
};

// Without image
export const NoImage = {
  name: 'No image',
  args: {
    ...Default.args,
    imageSrc: '',
    imageAlt: '',
  },
};

// Single attribute
export const SingleAttribute = {
  name: 'Single attribute',
  args: {
    ...Default.args,
    attributes: [{ label: 'Forecast length', value: '24 hours' }],
  },
};

// No attributes
export const NoAttributes = {
  name: 'No attributes',
  args: {
    ...Default.args,
    attributes: [],
  },
};

// Custom product
export const CustomProduct = {
  name: 'Custom product',
  args: {
    title: 'UK Hourly Site-Specific Forecast',
    description:
      'Hourly site-specific weather predictions for thousands of locations across the United Kingdom, delivered via a REST API.',
    attributes: [
      { label: 'Forecast length', value: '2 days (48 hours)' },
      { label: 'Update frequency', value: 'Hourly' },
      { label: 'Spatial resolution', value: 'Site-specific' },
    ],
    ctaLabel: 'Find out more',
    ctaHref: '#',
    imageSrc: '',
    imageAlt: 'UK Hourly Site-Specific Forecast',
  },
};
