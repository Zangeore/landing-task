// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:vue/base',
    'google',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'no-tabs': 0,
    'vue/multi-word-component-names': 0,
    'max-len': ['warn', {code: 300}],
    'quotes': 0,
    'comma-dangle': 1,
    'semi': 1,
  },
};
