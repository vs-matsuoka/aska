import { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  staticDirs: ['../public'],
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-styling'],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  core: {},
  webpackFinal: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve?.fallback,
        fs: false,
        stream: false,
        os: false,
        zlib: false
      }
    };
    return config;
  },
  docs: {
    autodocs: true
  }
};

export default config;
