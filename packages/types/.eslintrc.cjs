const getConfig = require('@linkmaster/eslint-config');
module.exports = getConfig(
  {
    typescript: true,
    strict: true,
  },
  ['dist']
);
