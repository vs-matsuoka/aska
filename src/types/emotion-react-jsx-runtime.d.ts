import { JSX } from '@emotion/react/jsx-runtime';

declare module '@emotion/react/jsx-runtime' {
  namespace JSX {
    type ElementType = React.JSX.ElementType;
  }
}
