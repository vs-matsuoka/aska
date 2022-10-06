import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { useAssetPath } from 'hooks/useAssetPath';

export type ContestantBoxProps = {
  text: string;
  odd: boolean;
  shifting: boolean;
};

function ContestantBox({ text, odd, shifting }: ContestantBoxProps) {
  const shift = shifting ? '' : 'translate-x-[-50%]';
  const bg = odd ? 'bg-red' : 'bg-blue';
  const image = odd ? '/dog.png' : '/cat.png';
  return (
    <div
      className={`h-24 w-24 -skew-x-6 border-4 border-gold-100 ${bg} ${shift} shadow-xl`}
    >
      <div className="fixed top-[-5px] left-[-5px] h-24 w-24 skew-x-6 skew-y-6">
        <Image
          src={useAssetPath(image)}
          layout="fill"
          objectFit="cover"
          alt="dog"
        />
      </div>
      {/* <div className="fixed top-0 left-0 h-24 w-24 border-4 border-gold-100 shadow-xl"></div> */}
      {text}
    </div>
  );
}

export type CombinationBoxProps = {
  text1: string;
  text2: string;
  shifting: boolean;
};

function CombinationBox({ text1, text2, shifting }: CombinationBoxProps) {
  const shift = shifting ? '' : 'translate-x-[-25%]';
  return (
    <div className={`col-span-2 flex -skew-x-6 shadow-xl ${shift}`}>
      <div className="h-24 w-28 border-y-4 border-l-4 border-gold-100 bg-red">
        <div className="fixed top-[0] left-[0] h-24 w-24 skew-x-6 skew-y-6">
          <Image
            src={useAssetPath('/dog.png')}
            layout="fill"
            objectFit="cover"
            alt="dog"
          />
        </div>
        {text1}
      </div>
      <div className="h-24 w-28 border-y-4 border-r-4 border-gold-100 bg-blue">
        <div className="fixed top-[0] left-[107px] h-24 w-24 skew-x-6 skew-y-6">
          <Image
            src={useAssetPath('/cat.png')}
            layout="fill"
            objectFit="cover"
            alt="dog"
          />
        </div>
        {text2}
      </div>
    </div>
  );
}

const combinations = [
  ['a', 'b'],
  ['a', 'b'],
  ['a', 'b'],
  ['a', 'b'],
  ['a', 'b'],
  ['a', 'b'],
  ['a', 'b'],
  ['a', 'b'],
  ['a', 'b'],
  ['a', 'b'],
  ['a', 'b'],
  ['a', 'b'],
  ['a', 'b'],
  ['a', 'b'],
  ['a', 'b'],
  ['a', 'b'],
  ['a', 'b'],
  ['a', 'b'],
  ['a', 'b'],
  ['a', 'b']
];
const contestants = combinations.flat();

export default function Contestants() {
  const [isContestant, setIsContestant] = useState(true);
  const bg = isContestant ? 'bg-white' : 'bg-black';

  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center py-2 ${bg}`}
    >
      <Head>
        <title>出場者一覧</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full">
        {isContestant ? (
          <div className="grid -skew-y-6 grid-cols-[repeat(8,6rem)] place-content-center items-center justify-center gap-3 text-center">
            {contestants.map((n, i) => (
              <ContestantBox
                text={n}
                odd={i % 2 === 0}
                shifting={i % (8 * 2) >= 8}
                key={i}
              />
            ))}
          </div>
        ) : (
          <div className="grid -skew-y-6 grid-cols-[repeat(8,6rem)] place-content-center items-center justify-center gap-3 text-center">
            {combinations.map((combi, i) => (
              <CombinationBox
                text1={combi[0]}
                text2={combi[1]}
                shifting={i % (4 * 2) >= 4}
                key={i}
              />
            ))}
          </div>
        )}
      </main>
      <button
        onClick={() => setIsContestant(!isContestant)}
        className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-sm"
      >
        toggle
      </button>
    </div>
  );
}
