import { render, screen } from '@testing-library/react';

import TeamPage from '.';

describe('<TeamPage />', () => {
  it('should render the heading', () => {
    const { container } = render(<TeamPage />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
