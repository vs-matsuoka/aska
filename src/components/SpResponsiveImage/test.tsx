import { render, screen } from '@testing-library/react';

import SpResponsiveImage from '.';

describe('<SpResponsiveImage />', () => {
  it('should render the heading', () => {
    const { container } = render(<SpResponsiveImage src="/Entry/21_Entry_text_02_shadow.png" width={480} height={105} alt="a" />);

    expect(container.querySelector('div')?.style.width).toBe(`${(480 / 750) * 100}vw`);
    expect(container.querySelector('div')?.style.height).toBe(`${(105 / 750) * 100}vw`);

    expect(container.firstChild).toMatchSnapshot();
  });
});
