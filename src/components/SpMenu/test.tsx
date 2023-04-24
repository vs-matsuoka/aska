import { render, screen } from '@testing-library/react';

import SpMenu from '.';

describe('<SpMenu />', () => {
  it('should render the heading', () => {
    const { container } = render(<SpMenu />);

    expect(screen.getByRole('heading', { name: /SpMenu/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
