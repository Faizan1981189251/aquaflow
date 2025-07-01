const { register } = require('module');
const path = require('path');
const { fileURLToPath } = require('url');

// Register Babel for TypeScript files
register('ts-node/esm', path.dirname(fileURLToPath(import.meta.url)), {
  extensions: ['.ts', '.tsx', '.js', '.jsx'],
  experimentalSpecifierResolution: 'node'
});
