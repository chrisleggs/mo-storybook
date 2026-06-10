/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    a11y: {
      options: {
        runOnly: {
          type: 'tag',
          values: [
            'wcag2a',
            'wcag2aa',
            'wcag21a',
            'wcag21aa',
            'wcag22a',
            'wcag22aa',
            'best-practice',
          ],
        },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
