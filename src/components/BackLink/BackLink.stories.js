import { createBackLink } from './BackLink.js';

export default {
  title: 'Components/Back Link',
  tags: ['autodocs'],
  render: (args) => createBackLink(args),
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [375, 768, 1280, 1512] },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Link text',
    },
    href: {
      control: 'text',
      description: 'Link destination URL',
    },
  },
};

// Default — matches the Figma design
export const Default = {
  args: {
    label: 'Back',
    href: '#',
  },
};

// Custom label
export const CustomLabel = {
  name: 'Custom label',
  args: {
    label: 'Back to search results',
    href: '#',
  },
};
