module.exports = {
  stories: ['../node-src/**/*.@(mdx|stories.*)'],
  addons: [
    '@storybook/addon-viewport',
    '@storybook/addon-webpack5-compiler-swc',
    '@chromatic-com/storybook',
  ],

  features: {
    postcss: false,
  },

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  webpackFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve.fallback,
        os: require.resolve('os-browserify/browser'),
      },
    };

    return config;
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },

  static: ['../static'],
};