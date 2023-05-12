import { render, screen } from '@testing-library/react';

import TeamItem from '.';
import team from 'const/team';

describe('<TeamItem />', () => {
  it('should render correctly', () => {
    const { container } = render(<TeamItem member={team.unnei[0]} />);

    expect(screen.getByTestId('role')).toBeInTheDocument();
    expect(screen.getByTestId('name')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
