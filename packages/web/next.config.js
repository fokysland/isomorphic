const path = require('path');

const withTM = require('next-transpile-modules')([
  path.resolve(__dirname, '../../packages'),
  'styled-components'
]);

module.exports = withTM({
  target: 'serverless'
});
