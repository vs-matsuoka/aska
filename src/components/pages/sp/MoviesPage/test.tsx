import { render, screen } from '@testing-library/react';

import MoviesPage from '.';

describe('<MoviesPage />', () => {
  it('should render the heading', () => {
    const { container } = render(<MoviesPage />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
