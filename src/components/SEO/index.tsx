import Head from 'next/head';
import { useRouter } from 'next/router';
import urlJoin from 'url-join';

const SEO = ({ title: givenTitle, description }: { title?: string; description?: string }) => {
  const router = useRouter();
  const siteName = '音MAD DREAM MATCH -天-';
  const url = urlJoin('https://otomdm-ten.com', router.asPath);
  const ogpImage = urlJoin('https://otomdm-ten.com', 'OGP.png');
  const title = (givenTitle ? `${givenTitle} | ` : '') + siteName;
  return (
    <Head>
      <title>{title}</title>
      {description ?? <meta name="description" content={description} />}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogpImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content="@otoMDM" />
      <link rel="canonical" href={url} />
    </Head>
  );
};

export default SEO;
