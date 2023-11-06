import { ReactElement, useCallback, useEffect, useState } from 'react';
import { NextPageWithLayout } from './_app';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import EntriesPage from 'components/pages/EntriesPage';

const Entries: NextPageWithLayout = () => {
  return (
    <>
      <SEO title="出場者" />
      <EntriesPage />
    </>
  );
};

Entries.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Entries;
