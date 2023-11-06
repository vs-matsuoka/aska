import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import MoviesPage from 'components/pages/MoviesPage';

const Movies: NextPageWithLayout = () => {
  return (
    <>
      <SEO title="ムービー" />
      <MoviesPage />
    </>
  );
};

Movies.getLayout = function getLayout(page: ReactElement) {
  return <Layout withOverflowHidden>{page}</Layout>;
};

export default Movies;
