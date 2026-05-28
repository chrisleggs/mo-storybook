import { createAtAGlance } from './AtAGlance.js';

export default {
  title: 'Components/At a Glance',
  tags: ['autodocs'],
  render: (args) => createAtAGlance(args),
  parameters: {
    layout: 'fullscreen',
    chromatic: { viewports: [375, 768, 1280, 1512] },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Section heading',
    },
    rows: {
      control: { type: 'object' },
      description: 'Array of { label, value, href? } row objects',
    },
  },
};

// Default — matches the Figma design exactly
export const Default = {
  args: {
    title: 'At a glance',
    rows: [
      { label: 'Domain:', value: 'Global (region can be selected)' },
      { label: 'Product type:', value: 'Forecast' },
      { label: 'Resolution:', value: '10km (2,560 x 1,920 grid points)' },
      {
        label: 'Projection:',
        value: 'Equirectangular Latitude-Longitude',
        href: 'https://datahub.metoffice.gov.uk/projection',
      },
      {
        label: 'Parameters:',
        value: '144 available across multiple levels',
        href: 'https://datahub.metoffice.gov.uk/docs/glossary?models=mo-global&sortOrder=ALPHABETICALLY',
      },
      {
        label: 'Time steps:',
        value: 'Every hour 0 to 54 hours, every 3 hours between 57 & 144 hours, every 6 hours between 150 & 168 hours',
      },
      { label: 'Forecast length:', value: '7 days (168 hours)' },
      {
        label: 'Update frequency:',
        value: '4 times daily (for the next 168 hours at 00:00 & 12:00 UTC, for the next 66 hours at 06:00 & 18:00 UTC)',
      },
      { label: 'Delivery method:', value: 'API' },
      { label: 'File format:', value: 'GRIB2 - Gridded Binary Format' },
    ],
  },
};

// Minimal — fewer rows
export const Minimal = {
  name: 'Minimal',
  args: {
    title: 'At a glance',
    rows: [
      { label: 'Domain:', value: 'UK' },
      { label: 'Product type:', value: 'Observation' },
      { label: 'Forecast length:', value: '24 hours' },
      { label: 'Update frequency:', value: 'Hourly' },
      { label: 'Delivery method:', value: 'API' },
    ],
  },
};
