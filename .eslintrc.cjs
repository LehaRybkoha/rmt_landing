module.exports = {
  root: true,
  extends: [
    '@antfu',
    'plugin:tailwindcss/recommended',
  ],
  rules: {
    'n/prefer-global/process': 'off',
    'tailwindcss/no-custom-classname': 'off',
    'vue/prop-name-casing': 'off',
    '@typescript-eslint/brace-style': 'off',
  },
  ignorePatterns: ['**/libs/**', '**/assets/**'],
}
