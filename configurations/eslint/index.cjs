const merge = require('mergician')({appendArrays: true});

const getConfig = ({
                     typescript = false,
                     react = false,
                     strict = false,
                     playwright = false,
                     storybook = false,
  json = false,
                   }, ignorePatterns = []) => {
  let config = require('./config/initial.cjs');

  if (ignorePatterns) {
    config = merge(config, {
      ignorePatterns
    })
  }

  if (json) {
    config = merge(require('./config/json.cjs'), config);
  }

  if (typescript) {
    config = merge(require('./config/typescript.cjs'), config);
  }

  if (strict) {
    config = merge(require('./config/strict.cjs'), config);
  }

  if (react) {
    config = merge(require('./config/react.cjs'), config);
  }

  if (playwright) {
    config = merge(require('./config/playwright.cjs'), config);
  }

  if (storybook) {
    config = merge(require('./config/storybook.cjs'), config);
  }

  return config;
};

module.exports = getConfig;
