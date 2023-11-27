import getTailwindConfig from '@linkmaster/tailwind-config';

const componentDirectories = [
  'pages',
  'components',
  'data',
  'widgets',
  'modules',
];

export default getTailwindConfig([
  `./{${componentDirectories.join(',')}}/**/*.{jsx,tsx,ts}`,
]);
