import '@testing-library/jest-dom';

jest.mock('next/router', () => ({
  useRouter: () => ({
    basePath: ''
  })
}));
