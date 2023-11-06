import { render, screen } from '@testing-library/react';

import PairsPage from '.';

describe('<PairsPage />', () => {
  it('should render the heading', () => {
    const { container } = render(<PairsPage />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
