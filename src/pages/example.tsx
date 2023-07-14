import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Footer from 'components/Footer';
import LoopAnimationExample from 'components/LoopAnimationExample';
import ParallaxExample from 'components/ParallaxExample';
import { useNews } from 'hooks/useNews';

export default function Example() {
  const { getNewsList, newsList } = useNews();

  useEffect(() => {
    getNewsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Exmaple pages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
        {newsList?.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.content}</p>
          </div>
        ))}
        {/* <h1 className="text-6xl font-bold">Welcome to Example pages!</h1>

        <p className="mt-3 text-2xl">This page has nothing to do....</p>

        <p className="mt-3 text-2xl">
          <Link href="/" className="text-blue-600">
            Back to top
          </Link>
        </p>
        <LoopAnimationExample text="Exmaple" />
        <ParallaxExample /> */}
      </main>

      <Footer />
    </div>
  );
}
