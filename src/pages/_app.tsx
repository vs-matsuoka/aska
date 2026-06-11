import 'styles/globals.css';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactElement, ReactNode, useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import urlJoin from 'url-join';
import * as gtag from '../utils/gtag';
import GaScript from 'components/GaScript';
import phrases, { otomdmTenCom } from 'const/phrases';
import { notoSansJp } from 'libs/fonts';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const pcPathFromSpPath = (path: string) => {
  const pcPath = path.replace('/sp', '');
  if (pcPath === '') {
    return '/';
  }
  if (pcPath.includes('/entries')) {
    return '/entries';
  }
  if (pcPath.includes('/pairs')) {
    return '/pairs';
  }
  return pcPath;
};

const spPathFromPcPath = (path: string) => {
  return urlJoin('/sp', path);
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const router = useRouter();

  useEffect(() => {
    const updateOnSp = () => {
      if (router) {
        const isSpSize = window.innerWidth <= 750;
        const onSpPage = router.pathname.includes('/sp');

        if (!isSpSize && onSpPage) {
          router.push(pcPathFromSpPath(router.pathname));
        }
        if (isSpSize && !onSpPage) {
          router.push(spPathFromPcPath(router.pathname));
        }
      }
    };
    window.addEventListener('resize', updateOnSp);
    updateOnSp();
    return () => window.removeEventListener('resize', updateOnSp);
  }, [router]);

  useEffect(() => {
    if (router) {
      // console.log('router.pathname', router.pathname);
      if (['/sp/pairs/[id]', '/sp/entries/[id]'].includes(router.pathname)) {
        document.querySelector('body')?.classList.add('no-scrollbar');
      } else {
        document.querySelector('body')?.classList.remove('no-scrollbar');
      }
    }
  }, [router]);

  useEffect(() => {
    const insertComment = () => {
      const comment = phrases[Math.floor(Math.random() * phrases.length)];
      document.appendChild(document.createComment(`\n${comment}\n`));
      document.prepend(document.createComment(`\n${otomdmTenCom}\n`));
    };
    window.addEventListener('load', insertComment);
    return () => window.removeEventListener('load', insertComment);
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return getLayout(
    <ParallaxProvider>
      <GaScript />
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <style jsx global>{`
        html {
          font-family: ${notoSansJp.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}

export default MyApp;
