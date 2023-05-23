import { render, screen } from '@testing-library/react';

import SpMenu from '.';

describe('<SpMenu />', () => {
  it('should render correctly', () => {
    render(<SpMenu />);

    expect(screen.getByRole('img', { name: /メニュー/i })).toBeInTheDocument();
  });
});
