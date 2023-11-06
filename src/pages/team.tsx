import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import TeamPage from 'components/pages/TeamPage';

const Team: NextPageWithLayout = () => {
  return (
    <>
      <SEO title="運営" />
      <TeamPage />
    </>
  );
};

Team.getLayout = function getLayout(page: ReactElement) {
  return <Layout withOverflowHidden>{page}</Layout>;
};

export default Team;
