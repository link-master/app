import getTailwindConfig from '@linkmaster/tailwind-config';

const componentDirectories = ['pages', 'components', 'data', 'widgets'];

export default getTailwindConfig([
  `./{${componentDirectories.join()}}/**/*.{jsx,tsx,ts}`,
]);
