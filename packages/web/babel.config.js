module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['react-native-web', { commonjs: true }],
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
        displayName: true,
        minify: true,
        pure: true
      }
    ]
  ]
};
