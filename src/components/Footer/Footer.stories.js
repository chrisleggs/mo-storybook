import { createFooter } from './Footer.js';

export default {
  title: 'Components/Footer',
  tags: ['autodocs'],
  render: (args) => createFooter(args),
  parameters: {
    layout: 'fullscreen',
    // Snapshot at mobile, tablet and desktop — footer layout shifts across breakpoints
    chromatic: { viewports: [375, 768, 1280, 1512] },
  },
  argTypes: {
    legalLinks: {
      control: { type: 'object' },
      description: 'Array of { label, href } objects for the legal links column',
    },
    socialLinks: {
      control: { type: 'object' },
      description: 'Array of { platform, href } objects. Supported platforms: X, YouTube, Facebook, TikTok, Instagram, LinkedIn',
    },
  },
};

// Default — matches the Figma design exactly
export const Default = {
  args: {
    legalLinks: [
      { label: 'Terms and conditions', href: '#' },
      { label: 'Privacy policy', href: '#' },
      { label: 'Accessibility Statement', href: '#' },
    ],
    socialLinks: [
      { platform: 'X', href: '#' },
      { platform: 'YouTube', href: '#' },
      { platform: 'Facebook', href: '#' },
      { platform: 'TikTok', href: '#' },
      { platform: 'Instagram', href: '#' },
      { platform: 'LinkedIn', href: '#' },
    ],
  },
};

// Fewer legal links
export const MinimalLinks = {
  name: 'Minimal legal links',
  args: {
    ...Default.args,
    legalLinks: [
      { label: 'Privacy policy', href: '#' },
      { label: 'Accessibility Statement', href: '#' },
    ],
  },
};

// No social icons
export const NoSocial = {
  name: 'No social icons',
  args: {
    ...Default.args,
    socialLinks: [],
  },
};
