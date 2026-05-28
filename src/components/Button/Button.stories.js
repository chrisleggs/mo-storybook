import { createButton } from './Button.js';

export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: (args) => createButton(args),
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [375, 768, 1280, 1512] },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Button label',
    },
    href: {
      control: 'text',
      description: 'Optional URL — renders as a link instead of a button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
    },
  },
};

// Default — matches the Figma design exactly
export const Default = {
  args: {
    label: 'New order',
    href: '',
    disabled: false,
  },
};

// Custom label
export const CustomLabel = {
  name: 'Custom label',
  args: {
    label: 'Find out more',
    href: '',
    disabled: false,
  },
};

// As a link
export const AsLink = {
  name: 'As a link',
  args: {
    label: 'Find out more',
    href: '#',
    disabled: false,
  },
};

// Disabled
export const Disabled = {
  args: {
    label: 'New order',
    href: '',
    disabled: true,
  },
};
