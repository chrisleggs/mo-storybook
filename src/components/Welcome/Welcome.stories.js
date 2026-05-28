import { createWelcome } from './Welcome.js';

export default {
  title: 'Components/Welcome',
  tags: ['autodocs'],
  render: (args) => createWelcome(args),
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [375, 768, 1280, 1512] },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Main heading text',
    },
    intro: {
      control: 'text',
      description: 'Short introductory paragraph beneath the heading',
    },
    description: {
      control: 'text',
      description: 'Longer descriptive paragraph',
    },
    showDivider: {
      control: 'boolean',
      description: 'Show the horizontal rule at the bottom',
    },
  },
};

// Default — matches the Figma design exactly
export const Default = {
  args: {
    title: 'Welcome to Weather Data Hub',
    intro: 'Find the right data for you from our high-quality weather API products.',
    description: 'Choose from a selection of atmospheric and site-specific data models, weather observations and map images. You can use them to create applications, conduct research or simply stay informed about the weather conditions in your or any location worldwide.',
    showDivider: true,
  },
};

// Custom title and content
export const CustomContent = {
  name: 'Custom content',
  args: {
    ...Default.args,
    title: 'Welcome to the API Portal',
    intro: 'Access powerful weather data through our developer-friendly APIs.',
    description: 'Browse our full catalogue of products and get started with your integration today.',
  },
};

// Without the divider
export const NoDivider = {
  name: 'No divider',
  args: {
    ...Default.args,
    showDivider: false,
  },
};

// Intro only (no description paragraph)
export const IntroOnly = {
  name: 'Intro only',
  args: {
    ...Default.args,
    description: '',
  },
};
