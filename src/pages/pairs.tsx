import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import PairsPage from 'components/pages/PairsPage';

const Pairs: NextPageWithLayout = () => {
  return (
    <>
      <SEO title="コンビ" />
      <PairsPage />
    </>
  );
};

Pairs.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Pairs;
