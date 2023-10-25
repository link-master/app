import typescript from "@rollup/plugin-typescript";
import postcss from 'rollup-plugin-postcss';
import {defineConfig} from 'rollup';

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
    postcss(),
  ]
});
