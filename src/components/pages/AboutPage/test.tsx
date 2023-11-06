import { render, screen } from '@testing-library/react';

import AboutPage from '.';

(global as any).IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: () => jest.fn(),
  unobserve: () => jest.fn(),
  disconnect: () => jest.fn()
}));

describe('<AboutPage />', () => {
  it('should render the heading', () => {
    const { container } = render(<AboutPage />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
