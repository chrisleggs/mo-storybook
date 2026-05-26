/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.stories.@(js|mjs)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
  ],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  viteFinal: async (config) => {
    // Only set the base path when deploying to GitHub Pages.
    // Chromatic (and local dev) serve from root so no base path is needed there.
    if (process.env.DEPLOY_TARGET === 'github-pages') {
      config.base = '/mo-storybook/';
    }
    return config;
  },
};

export default config;
