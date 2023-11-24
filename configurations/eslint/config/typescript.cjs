const typescriptConfig = {
  plugins: [
    '@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  rules: {
    "@typescript-eslint/no-var-requires": "off"
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
  ]
}

module.exports = typescriptConfig;
