module.exports = {
  extends: [
    'airbnb',
    // 'plugin:jest/recommended',
  ],
  // plugins: [
  //   'jest',
  // ],
  rules: {
    'react/jsx-props-no-spreading': 0,
    'no-underscore-dangle': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true, ignore: ['react', 'react-dom'] }],
  },
  parser: 'babel-eslint',
  env: {
    browser: true,
    // node: true,
    // 'jest/globals': true,
  },
};
