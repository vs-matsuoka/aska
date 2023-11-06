import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import IndexPage from 'components/pages/IndexPage';

const Index: NextPageWithLayout = () => {
  return (
    <>
      <SEO />
      <IndexPage />
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <Layout withSplash>{page}</Layout>;
};

export default Index;
