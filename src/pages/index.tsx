import Head from 'next/head';
import Link from 'next/link';
import Block from 'components/Block';
import Footer from 'components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            pages/index.tsx
          </code>
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <Block
            href="https://nextjs.org/docs"
            title="Documentation"
            description="Find in-depth information about Next.js features and API."
          />

          <Block
            href="https://nextjs.org/learn"
            title="Learn"
            description="Learn about Next.js in an interactive course with quizzes!"
          />

          <Block
            href="https://github.com/vercel/next.js/tree/master/examples"
            title="Examples"
            description="Discover and deploy boilerplate example Next.js projects."
          />

          <Link href="/example" passHref>
            <Block
              href="https://placeholder.example.com"
              title="てすとぺーじ"
              description="GOGO"
            />
          </Link>

          <Link href="/contestants" passHref>
            <Block
              href="https://placeholder.example.com"
              title="出場者一覧"
              description="GOGO"
            />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
