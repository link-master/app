import {fileURLToPath} from "node:url";
import pkg from './package.json' assert {type: 'json'};

// Plugins
import typescript from "@rollup/plugin-typescript"
import alias from '@rollup/plugin-alias';
import postcss from "rollup-plugin-postcss";
import command from 'rollup-plugin-command';

/**
 * Get absolute path to the file
 * @param {string} path - Relative path
 * @returns {string} Absolute path
 */
const getAbsolutePath = (path) => {
  return fileURLToPath(new URL(path, import.meta.url));
}

/** @type {import('rollup').RollupOptions} */
const config = {
  input: 'index.ts',
  external: ['react', 'clsx', 'react/jsx-runtime', 'react-dom', '@fontsource-variable/rubik'],
  plugins: [
    alias({
      entries: [
        {find: '@', replacement: getAbsolutePath('lib')}
      ]
    }),
    postcss({autoModules: true, namedExports: true}),
    typescript(),
    command("npx tsc-alias")
  ],
  output: { file: pkg.module, format: 'es' }
};

export default config;
