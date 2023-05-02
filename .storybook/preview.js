import '../src/styles/globals.css';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import * as NextFutureImage from 'next/future/image';
import * as NextImage from 'next/image';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />
});

const OriginalNextFutureImage = NextFutureImage.default;

Object.defineProperty(NextFutureImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextFutureImage {...props} unoptimized />
});

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  previewTabs: {
    'storybook/docs/panel': { index: -1 }
  }
};
