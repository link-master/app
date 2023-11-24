import typescript from '@rollup/plugin-typescript';
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';
import postcss from 'rollup-plugin-postcss';
import { defineConfig } from 'rollup';
import alias from '@rollup/plugin-alias';

const isDevelopment = process.env.NODE_ENV === 'development';

export default defineConfig({
  input: 'index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist',
    }),
    alias({
      entries: [
        {
          find: '@',
          replacement: fileURLToPath(new URL('lib', import.meta.url)),
        },
      ],
    }),
    postcss({
      config: {
        path: './postcss.config.js',
        ctx: {},
      },
      extensions: ['.css'],
      minimize: !isDevelopment,
      extract: path.resolve('dist/index.css'),
    }),
  ],
});
