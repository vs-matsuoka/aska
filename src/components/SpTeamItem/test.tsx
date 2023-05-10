import { render, screen } from '@testing-library/react';

import SpTeamItem from '.';

describe('<SpTeamItem />', () => {
  it('should render the heading', () => {
    const { container } = render(<SpTeamItem imgSrc="/Team/test.jpg" name="葉月味" role="特番制作" />);

    expect(screen.getByTestId('role')).toBeInTheDocument();
    expect(screen.getByTestId('name')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
