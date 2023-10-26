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
      color: 'rgb(30 41 59 / var(--tw-text-opacity));'
    }
  })
});

export default function getTailwindConfig(content: string[]): Config {
  return {
    content,
    theme: {
      extend: {
        fontFamily: {
          sans: ['"Inter Variable"', 'sans-serif'],
        },
      },
    },
    plugins: [
      baseFontPlugin,
      baseColorPlugin,
    ],
  };
};
