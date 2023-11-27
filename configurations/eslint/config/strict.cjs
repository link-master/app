const strictConfig = {
  extends: [
    "plugin:prettier/recommended",
    "plugin:unicorn/recommended",
    'eslint:recommended',
  ],
  rules: {
    'unicorn/prefer-module': ["off"],
    'unicorn/no-null': ['off'],
    'unicorn/consistent-function-scoping': ['off'],
  }
}

module.exports = strictConfig;
