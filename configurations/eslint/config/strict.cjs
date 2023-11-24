const strictConfig = {
  extends: [
    "plugin:prettier/recommended",
    "plugin:unicorn/recommended",
    'eslint:recommended',
  ],
  rules: {
    'unicorn/prefer-module': ["off"],
  }
}

module.exports = strictConfig;
