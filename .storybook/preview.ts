import type { Preview } from '@storybook/react-vite'
import { INITIAL_VIEWPORTS } from 'storybook/viewport';
import "../src/scss/main.scss"

const customViewports = {
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1024px',
      height: '768px',
    },
  },
  mobile: {
    name: 'Mobile',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },
    backgrounds: {
      options: {
        // 👇 Default options
        dark: { name: 'Dark', value: '#333' },
        light: { name: 'Light', value: '#F7F9F2' },
        // 👇 Add your own
        maroon: { name: 'Maroon', value: '#400' },
      },
    },
    viewport: {
      options: { ...INITIAL_VIEWPORTS, ...customViewports },
    },
    layout: 'fullscreen',
  },
  initialGlobals: {
    // 👇 Set the initial background color
    backgrounds: { value: 'darkpreview' },
  },
};

export default preview;