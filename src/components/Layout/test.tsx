import { render, screen, waitFor } from '@testing-library/react';

import Layout from '.';

describe('<Layout />', () => {
  it('正しくレンダリングされる', async () => {
    render(<Layout />);

    expect(screen.getByAltText('background')).toBeInTheDocument();
    expect(
      screen.queryByAltText('vignette background')
    ).not.toBeInTheDocument();
  });

  it('withVignetteで正しくレンダリングされる', () => {
    render(<Layout withVignette />);

    expect(screen.getByAltText('background')).toBeInTheDocument();
    expect(screen.getByAltText('vignette background')).toBeInTheDocument();
  });
});
