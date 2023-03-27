import { render, screen } from '@testing-library/react';

import Background from '.';

describe('<Background />', () => {
  it('should render the heading', () => {
    const expectedSrc = '/blahblah';
    const { container } = render(<Background src={expectedSrc} />);

    expect(screen.getByAltText('background')).toBeInTheDocument();
    expect(screen.getByAltText('background')).toHaveAttribute(
      'src',
      `/_next/image?url=${encodeURIComponent(expectedSrc)}&w=3840&q=75`
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
