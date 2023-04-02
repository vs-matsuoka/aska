import { render, screen } from '@testing-library/react';

import Timeline from '.';

describe('<Timeline />', () => {
  it('should render the heading', () => {
    const { container } = render(<Timeline />);

    expect(
      screen.getByRole('heading', { name: /Timeline/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
