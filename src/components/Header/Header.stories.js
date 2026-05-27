import { createHeader } from './Header.js';

export default {
  title: 'Components/Header',
  tags: ['autodocs'],
  render: (args) => createHeader(args),
  parameters: {
    layout: 'fullscreen',
    // Snapshot at mobile, tablet and desktop — header layout shifts across breakpoints
    chromatic: { viewports: [375, 768, 1280, 1512] },
  },
  argTypes: {
    navItems: {
      control: { type: 'object' },
      description: 'Ordered list of navigation link labels',
    },
    activeItem: {
      control: { type: 'select' },
      options: ['Home', 'Pricing & Plans', 'Parameters', 'Support'],
      description: 'Currently active navigation item',
    },
    showLogin: {
      control: 'boolean',
      description: 'Show the Login/Register button',
    },
    loginLabel: {
      control: 'text',
      description: 'Label for the login button',
    },
  },
};

// Default — matches the Figma design exactly
export const Default = {
  args: {
    navItems: ['Home', 'Pricing & Plans', 'Parameters', 'Support'],
    activeItem: 'Home',
    showLogin: true,
    loginLabel: 'Login/Register',
  },
};

// Each nav item active — each is a separate VRT baseline
export const PricingActive = {
  name: 'Pricing & Plans active',
  args: {
    ...Default.args,
    activeItem: 'Pricing & Plans',
  },
};

export const ParametersActive = {
  name: 'Parameters active',
  args: {
    ...Default.args,
    activeItem: 'Parameters',
  },
};

export const SupportActive = {
  name: 'Support active',
  args: {
    ...Default.args,
    activeItem: 'Support',
  },
};

// Without login button (logged-in state)
export const LoggedIn = {
  name: 'Logged in (no login button)',
  args: {
    ...Default.args,
    showLogin: false,
  },
};
