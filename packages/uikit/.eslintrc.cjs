const getConfig = require('@linkmaster/eslint-config');
module.exports = getConfig(
  {
    react: true,
    typescript: true,
    strict: true,

    // TODO: Enable it when "Max call stack error" will dissapear
    storybook: false,
  },
  ['dist']
);
