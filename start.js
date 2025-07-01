require('ts-node').register({
  project: './tsconfig.json'
});

require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
  plugins: ['@babel/plugin-proposal-class-properties']
});

// Set up the environment
process.env.EXPO_NO_TELEMETRY = '1';
process.env.EXPO_PUBLIC_URL = 'http://localhost:19002';

// Start Expo using the CLI directly
require('@expo/cli').start({
  projectRoot: process.cwd(),
  options: {
    tunnel: true,
    dev: true,
    minify: false
  }
});
