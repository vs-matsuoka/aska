import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import AboutPage from 'components/pages/AboutPage';

const About: NextPageWithLayout = () => {
  return (
    <>
      <SEO title="概要" />
      <AboutPage />
    </>
  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout withOverflowHidden>{page}</Layout>;
};

export default About;
