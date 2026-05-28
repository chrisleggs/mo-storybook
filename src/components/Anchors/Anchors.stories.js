import { createAnchors } from './Anchors.js';

export default {
  title: 'Components/Anchors',
  tags: ['autodocs'],
  render: (args) => createAnchors(args),
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [375, 768, 1280, 1512] },
  },
  argTypes: {
    items: {
      control: { type: 'object' },
      description: 'Array of { label, href } anchor link objects',
    },
  },
};

// Default — matches the Figma design exactly
export const Default = {
  args: {
    items: [
      { label: 'At a glance', href: '#at-a-glance' },
      { label: 'Samples', href: '#samples' },
      { label: 'Usage examples', href: '#usage-examples' },
      { label: 'API Docs', href: '#api-docs' },
      { label: 'Support', href: '#support' },
    ],
  },
};

// Fewer items
export const ThreeItems = {
  name: 'Three items',
  args: {
    items: [
      { label: 'At a glance', href: '#at-a-glance' },
      { label: 'API Docs', href: '#api-docs' },
      { label: 'Support', href: '#support' },
    ],
  },
};

// Single item
export const SingleItem = {
  name: 'Single item',
  args: {
    items: [
      { label: 'At a glance', href: '#at-a-glance' },
    ],
  },
};
