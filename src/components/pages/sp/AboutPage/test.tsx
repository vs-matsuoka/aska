import { render, screen } from '@testing-library/react';

import AboutPage from '.';

describe('<AboutPage />', () => {
  it('should render the heading', () => {
    const { container } = render(<AboutPage />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
