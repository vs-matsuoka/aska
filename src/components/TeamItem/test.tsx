import { render, screen } from '@testing-library/react';

import TeamItem from '.';

describe('<TeamItem />', () => {
  it('should render correctly', () => {
    const { container } = render(<TeamItem imgSrc="/Team/test.jpg" name="葉月味" role="特番制作" />);

    expect(screen.getByTestId('role')).toBeInTheDocument();
    expect(screen.getByTestId('name')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
