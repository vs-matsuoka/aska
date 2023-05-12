import { render, screen } from '@testing-library/react';

import SEO from '.';

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>;
    }
  };
});

describe('<Title />', () => {
  it('should render default title', () => {
    render(<SEO />, {
      container: document.head
    });
    expect(document.title).toBe('音MAD DREAM MATCH -天-');
  });

  it('should render title with suffix', () => {
    render(<SEO title="テスト" />, {
      container: document.head
    });
    expect(document.title).toBe('テスト | 音MAD DREAM MATCH -天-');
  });
});
