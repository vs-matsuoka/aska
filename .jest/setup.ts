import '@testing-library/jest-dom';

jest.mock('next/router', () => ({
  useRouter: () => ({
    basePath: ''
  })
}));

// src/components/FireOnlyOnServerSide/test.tsx で発生したエラーに対するワークアラウンド
// see also https://github.com/inrupt/solid-client-authn-js/issues/1676#issuecomment-917016646
import { TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
