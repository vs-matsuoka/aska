import 'styles/globals.css';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import entries from 'const/entries';
import movies from 'const/movies';
import pairs from 'const/pairs';
import team from 'const/team';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function getUniqueCharacters(str: string) {
  return Array.from(
    str
      .split('')
      .reduce((a, b) => {
        a.set(b, true);
        return a;
      }, new Map<string, boolean>())
      .keys()
  ).sort();
}

// 使用している文字列のユニークな文字の配列
const UDKakugoLargePr6HVStrings = getUniqueCharacters([entries.map((entry) => entry.description), pairs.map((pair) => pair.description)].flat().join('')).join('');
const UDKakugoLargePr6EStrings = getUniqueCharacters(
  [
    '運　営',
    '制　作',
    '立ち絵',
    '告　知',
    '放　送',
    '特別告知',
    'コンビ告知',
    '事前番組',
    Object.entries(team).map(([, members]) => members.map((mem) => mem.name + mem.role)),
    Object.entries(movies).map(([, movieArr]) => movieArr.map((mov) => mov.title))
  ]
    .flat(4)
    .join('')
).join('');

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <ParallaxProvider>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Component {...pageProps} />
      <div
        className="hidden"
        style={{
          fontFamily: 'UDKakugo_LargePr6-HV',
          lineHeight: '1.7'
        }}
      >
        {UDKakugoLargePr6HVStrings}
      </div>
      <div
        className="hidden"
        style={{
          fontFamily: 'FOT-UD角ゴ_ラージ Pr6 E',
          lineHeight: '1.7'
        }}
      >
        {UDKakugoLargePr6EStrings}
      </div>
    </ParallaxProvider>
  );
}

export default MyApp;
