import '../src/styles/globals.css';
import { RouterContext } from 'next/dist/shared/lib/router-context';

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
