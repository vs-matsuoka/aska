import { expect, describe, it } from '@jest/globals';
import { render } from '@testing-library/react';
import { renderToString } from 'react-dom/server';

import FireOnlyOnServerSide from '.';

describe('<FireOnlyOnServerSide />', () => {
  it('should not render on ServerSide', () => {
    const ui = <FireOnlyOnServerSide>YO</FireOnlyOnServerSide>;
    const container = document.createElement('div');
    container.innerHTML = renderToString(ui);
    document.body.appendChild(container);

    expect(container.innerHTML).toMatch('YO');

    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render on ClientSide', () => {
    const { container } = render(<FireOnlyOnServerSide>YO</FireOnlyOnServerSide>);

    expect(container.innerHTML).toMatch('');

    expect(container.firstChild).toMatchSnapshot();
  });
});
