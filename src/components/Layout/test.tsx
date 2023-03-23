import { render, screen, waitFor, within } from '@testing-library/react';

import Layout from '.';

jest.mock('next/router', () => ({ useRouter: jest.fn() }));

describe('<Layout />', () => {
  it('正しくレンダリングされる', async () => {
    render(
      <Layout>
        <h1>AAAAAAAAAAAAAA</h1>
      </Layout>
    );

    const { getByText } = within(screen.getByTestId('children'));

    expect(getByText('AAAAAAAAAAAAAA')).toBeInTheDocument();
  });
});
