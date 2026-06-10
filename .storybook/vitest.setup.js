import { beforeAll } from 'vitest';
import { setProjectAnnotations } from '@storybook/html';
import * as htmlAnnotations from '@storybook/html/dist/entry-preview.mjs';
import * as projectAnnotations from './preview.js';

// Register the HTML renderer (provides renderToCanvas) plus project-level
// annotations defined in .storybook/preview.js
const project = setProjectAnnotations([htmlAnnotations, projectAnnotations]);
if (project.setup) {
  beforeAll(project.setup);
}
