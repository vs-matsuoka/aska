import { render, screen } from '@testing-library/react';

import SpTeamItem from '.';
import team from 'const/team';

describe('<SpTeamItem />', () => {
  it('should render the heading', () => {
    const { container } = render(<SpTeamItem member={team.unnei[0]} />);

    expect(screen.getByTestId('role')).toBeInTheDocument();
    expect(screen.getByTestId('name')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
