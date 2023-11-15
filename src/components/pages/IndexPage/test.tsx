import { render, screen } from '@testing-library/react';

import IndexPage from '.';

describe('<IndexPage />', () => {
  it('should render the heading', () => {
    const { container } = render(<IndexPage />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
