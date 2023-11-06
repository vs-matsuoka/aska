import { render, screen } from '@testing-library/react';

import EntriesPage from '.';

describe('<EntriesPage />', () => {
  it('should render the heading', () => {
    const { container } = render(<EntriesPage />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
