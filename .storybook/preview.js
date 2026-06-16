/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            // The region rule requires all content to be inside a landmark.
            // This is a page-level concern — not applicable to individual
            // component stories in Storybook (Chromatic also disables it
            // by default for the same reason).
            id: 'region',
            enabled: false,
          },
        ],
      },
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
        // Belt-and-braces: also pass region disable in options.rules
        // in case the addon version processes options rather than config.
        rules: {
          region: { enabled: false },
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
