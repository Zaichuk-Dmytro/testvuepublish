module.exports = {
  'env': [
    'eslint:recommended',
    'plugin:vue/essential',
    '@vue/airbnb'
  ],

  'extends': [
    'eslint:recommended',
    'plugin:vue/base'
  ],

  'plugins': [
    'vue'
  ],


  root: true,

  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },

  rules: {
    'no-prototype-builtins': 'off',
    'no-debugger': 'off',
    'no-async-promise-executor': 'off',
    indent: ['error', 2],
    'no-extra-semi': 'error',
    semi: ['error','never'],
    quotes: ['error', 'single'],
    curly: 'error',
    'key-spacing': ['error', { beforeColon: false, afterColon: true, mode: 'strict'  }],
    'block-spacing': 'error',
    'space-infix-ops': ['error', {int32Hint: false}],
    'space-before-blocks': ['error'],
    'keyword-spacing': ['error'],
    'brace-style': ['error','1tbs', { allowSingleLine: true }],
    'arrow-spacing': ['error'],
    'require-atomic-updates': 'off'
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    parser: 'babel-eslint'
  }
}