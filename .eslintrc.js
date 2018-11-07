module.exports = {
  root: true,
  env: {
    'browser': true,
    'node': true,
    'commonjs': true,
    'jquery': true,
    'es6': true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'arrow-parens': 'off',
    'valid-jsdoc': 'off',
    'eol-last': 'off',
    'array-bracket-spacing': 'off',
    'no-unused-vars': 'off',
    'no-else-return': 'off',
    'strict': 'off',
    'linebreak-style': 'off',
    'no-irregular-whitespace': [
      'error',
      {
        'skipComments': true
      }
    ],
    'comma-dangle': [
      'error',
      {
        'arrays': 'only-multiline',
        'objects': 'only-multiline'
      }
    ]
  },
  'plugins': [
    'vue'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  }
}
