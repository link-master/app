import type { Config } from 'tailwindcss'
import createPlugin from 'tailwindcss/plugin';

const baseFontPlugin = createPlugin(({addBase}) => {
  addBase({
    'html': {fontSize: '14px'},
  });
});

const baseColorPlugin = createPlugin(({addBase}) => {
  addBase({
    'html': {
      color: '#27272a',
      backgroundColor: '#fafafa',
    }
  })
});

export default function getTailwindConfig(content: string[]): Config {
  return {
    content,
    theme: {
      extend: {
        fontFamily: {
          sans: ['"Rubik Variable"', 'sans-serif'],
        },
      },
    },
    plugins: [
      // baseFontPlugin,
      baseColorPlugin,
    ],
  };
};
