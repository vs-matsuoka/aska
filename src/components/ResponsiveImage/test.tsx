import { matchers } from '@emotion/jest';
import { render, screen } from '@testing-library/react';

import ResponsiveImage from '.';

expect.extend(matchers);

describe('<ResponsiveImage />', () => {
  it('should render the heading', () => {
    const { container } = render(<ResponsiveImage src="/Entry/21_Entry_text_02_shadow.png" width={480} height={105} alwaysResponsive alt="a" />);

    // expect(container.querySelector('div')?.style.width).toBe(`${(480 / 1920) * 100}vw`);
    // expect(container.querySelector('div')?.style.height).toBe(`${(105 / 1920) * 100}vw`);

    expect(container.firstChild).toMatchSnapshot();
  });
});
