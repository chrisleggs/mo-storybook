import { createButton } from './Button.js';

export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: (args) => createButton(args),
  parameters: {
    // Snapshot at mobile, tablet and desktop widths
    chromatic: { viewports: [375, 768, 1280] },
  },
  argTypes: {
    label: { control: 'text', description: 'Button label' },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: 'Visual style',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    disabled: { control: 'boolean', description: 'Disables the button' },
  },
};

export const Primary = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
    size: 'medium',
    disabled: false,
  },
};

export const Secondary = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    size: 'medium',
    disabled: false,
  },
};

export const Small = {
  args: {
    label: 'Small Button',
    variant: 'primary',
    size: 'small',
    disabled: false,
  },
};

export const Large = {
  args: {
    label: 'Large Button',
    variant: 'primary',
    size: 'large',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Button',
    variant: 'primary',
    size: 'medium',
    disabled: true,
  },
};
