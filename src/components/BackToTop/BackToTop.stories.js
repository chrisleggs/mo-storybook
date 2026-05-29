import { createBackToTop } from './BackToTop.js';

export default {
  title: 'Components/Back To Top',
  tags: ['autodocs'],
  render: (args) => createBackToTop(args),
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [375, 768, 1280, 1512] },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Button label text',
    },
    href: {
      control: 'text',
      description: 'Optional anchor href (e.g. "#top"). Leave empty to use smooth-scroll JS.',
    },
  },
};

// Default — matches the Figma design
export const Default = {
  args: {
    label: 'Top',
    href: '',
  },
};

// With anchor href
export const WithHref = {
  name: 'With anchor href',
  args: {
    label: 'Top',
    href: '#top',
  },
};
