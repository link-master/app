const initialConfig = {
  env: {
    'browser': true,
    'es2021': true,
    'node': true
  },
  overrides: [
    // Override for eslintrc.cjs
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
};
module.exports = initialConfig;
