import { render, screen } from '@testing-library/react';

import Timeline from '.';

describe('<Timeline />', () => {
  it('should render the link', () => {
    const { container } = render(<Timeline />);

    expect(screen.getByRole('link')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
