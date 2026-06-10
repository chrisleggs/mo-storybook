/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    a11y: {
      options: {
        // Scroll elements into view before measuring contrast so axe-core
        // can resolve background colours that are obscured by Storybook's
        // own canvas overlay (prevents false "could not be determined" flags).
        scrollingElement: 'body',
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
