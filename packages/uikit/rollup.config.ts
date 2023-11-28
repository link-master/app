import typescript from '@rollup/plugin-typescript';
import { fileURLToPath } from 'node:url';
import * as childProcess from 'node:child_process';
import * as path from 'node:path';
import postcss from 'rollup-plugin-postcss';
import { defineConfig } from 'rollup';
import alias from '@rollup/plugin-alias';

const isDevelopment = process.env.NODE_ENV === 'development';

// Hack🫥: https://github.com/ezolenko/rollup-plugin-typescript2/issues/201#issuecomment-1014261983
const typescriptDeclarationAlias = () => {
  return {
    name: 'typescriptDeclarationAlias',
    writeBundle: () => childProcess.execSync('tsc-alias'),
  };
};

export default defineConfig({
  input: 'index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    alias({
      entries: {
        find: '@',
        replacement: path.resolve('./lib'),
      },
    }),
    typescript({
      tsconfig: './tsconfig.json',
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
    typescriptDeclarationAlias(),
  ],
});
