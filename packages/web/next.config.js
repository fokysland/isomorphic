const path = require('path');

const withTM = require('next-transpile-modules')([
  path.resolve(__dirname, '../../packages')
]);

module.exports = withTM({
  target: 'serverless'
});
