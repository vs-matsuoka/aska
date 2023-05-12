import Link from 'next/link';
import { ReactElement, useCallback, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSpring, animated } from 'react-spring';
import { NextPageWithLayout } from './_app';
import Background from 'components/Background';
import FireOnlyOnServerSide from 'components/FireOnlyOnServerSide';
import Layout from 'components/Layout';
import ResponsiveImage from 'components/ResponsiveImage';
import Title from 'components/Title';
import entries, { Entry } from 'const/entries';
import { EntryContextType, EntryProvider, useEntryContext } from 'contexts/EntryContext';
import useModal from 'hooks/useModal';
import { searchNextPublished, searchPrevPublished } from 'utils/nextPrev';

type ContestantRowProps = {
  contestants: Entry[];
  offset: number;
  onModalOpen: () => void;
};

function ContestantButton({ entry, onModalOpen }: { entry: Entry; onModalOpen: () => void }) {
  const [styles, api] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 0 },
    config: {
      // duration: 50
    }
  }));
  const { setEntry } = useEntryContext() as EntryContextType;
  return (
    <div key={entry.index} className="relative h-[7.8125vw] w-[4.6875vw] skew-y-[10deg] 4xl:h-[150px] 4xl:w-[90px]">
      <div className="h-[7.2916666667vw] w-[6.3541666667vw] skew-x-[-20deg] skew-y-[-11deg] bg-transparent 4xl:h-[140px] 4xl:w-[122px]"></div>
      <a {...(entry.frameSrc.includes('Secret') ? {} : { href: '#' })}>
        <div
          className="absolute left-[-3.28125vw] top-[-2.9687557vw] max-w-none 4xl:left-[-63px] 4xl:top-[-57px]"
          style={{
            clipPath: 'polygon(34% 25%, 88% 15%, 66% 75%, 12% 85%)'
          }}
          onClick={() => {
            if (entry.frameSrc.includes('Secret')) {
              return;
            }
            setEntry(entry);
            onModalOpen();
          }}
        >
          <ResponsiveImage src={entry.frameSrc} alt="contestant" width={250} height={250} priority />
          <animated.div
            className="absolute left-[3.125vw] top-[2.65625vw] h-[7.8125vw] w-[6.7708333333vw] skew-x-[-20deg] skew-y-[-11deg] bg-white 4xl:left-[60px] 4xl:top-[51px] 4xl:h-[150px] 4xl:w-[130px]"
            style={styles}
            onMouseEnter={() => {
              if (entry.frameSrc.includes('Secret')) {
                return;
              }
              setEntry(entry);
              api.start({
                from: { opacity: 1 },
                to: { opacity: 0 }
              });
            }}
          ></animated.div>
        </div>
      </a>
    </div>
  );
}

function ContestantRow({ contestants, offset, onModalOpen }: ContestantRowProps) {
  const isNarrow = useMediaQuery({ query: '(min-width: 1920px)' });

  return (
    <div
      className="grid skew-y-[-10deg] grid-cols-[repeat(10,7.4479166667vw)] 4xl:grid-cols-[repeat(10,143px)]"
      style={{
        paddingLeft: isNarrow ? `${offset}px` : `${(offset / 1920) * 100}vw`
      }}
    >
      {contestants.map((contestant) => (
        <ContestantButton entry={contestant} onModalOpen={onModalOpen} key={contestant.index} />
      ))}
    </div>
  );
}

function ToggleEntryButton() {
  const [styles, api] = useSpring(() => ({
    from: { clipPath: 'polygon(125% 0%, 175% 0%, 150% 100%, 100% 100%)' },
    config: {
      duration: 500
    }
  }));

  const trigger = useCallback(() => {
    const handler = setTimeout(() => {
      api.start({
        from: { clipPath: 'polygon(125% 0%, 175% 0%, 150% 100%, 100% 100%)' },
        to: { clipPath: 'polygon(-25% 0%, -15% 0%, -40% 100%, -50% 100%)' }
      });
    }, 150);
    return () => clearTimeout(handler);
  }, [api]);

  return (
    <div className="absolute right-[2.5vw] bottom-[-6.5vw] 4xl:right-[3rem] 4xl:bottom-[-8rem]">
      <ResponsiveImage alt="conbi" src="/Entry/21_Entry_text_02_base.png" width={480} height={105} />
      <Link href="/pairs" passHref>
        <div className="absolute top-0 left-0 transition hover:scale-125" onMouseEnter={trigger}>
          <ResponsiveImage alt="conbi" src="/Entry/21_Entry_text_02.png" width={480} height={105} />
          <animated.div
            className="absolute top-0 left-0"
            style={{
              filter: 'brightness(0) invert(1)',
              ...styles
            }}
          >
            <ResponsiveImage
              alt="conbi"
              src="/Entry/21_Entry_text_02.png"
              width={480}
              height={105}
              style={{
                filter: 'brightness(0) invert(1)'
              }}
            />
          </animated.div>
        </div>
      </Link>
    </div>
  );
}

function ContestantModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { entry, setEntry } = useEntryContext() as EntryContextType;
  useEffect(() => {
    // FUCK
    // window.FONTPLUS.reload();
  }, [entry]);
  const nextEntry = searchNextPublished(entries, entry);
  const prevEntry = searchPrevPublished(entries, entry);
  return (
    <div className={`fixed inset-0 ${isOpen ? 'opacity-100' : 'opacity-0'} transition-all duration-200 ${isOpen ? '' : 'pointer-events-none'}`}>
      {/*
        DIRTY HACK: 今回の場合、next-export-optimize-images は next build のタイミングで <Image> タグを通過した画像のみを対象に変換を行う。
        この対応のため、サーバーサイドでのみレンダリングされる箇所を作成し、そこにクライアントサイドで動的にレンダリングされる予定の画像一覧をレンダリングするようにしておく。
      */}
      <FireOnlyOnServerSide>
        {entries
          .filter((entry) => entry.isPublished)
          .map((entry) => (
            <div key={entry.index}>
              <ResponsiveImage src={entry.contestantSrc} alt="contestant" className="relative" width={600} height={700} priority />
              <ResponsiveImage src={entry.iconSrc} alt="icon" className="relative" width={680} height={100} priority />
            </div>
          ))}
      </FireOnlyOnServerSide>

      <Background src="/Modal/22_Entry_Modal_BG.png" />
      <div className={`relative flex h-full items-center justify-center ${isOpen ? 'block' : 'hidden'}`} onClick={onClose}>
        <div
          className="absolute"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <ResponsiveImage src="/Modal/22_Entry_Modal_pic_FudeBase.png" alt="FudeBase" className="relative" width={1500} height={850} />
        </div>
        <div
          className="relative"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="flex">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setEntry(prevEntry);
              }}
            >
              <div>
                <ResponsiveImage src="/Modal/22_Modal_Back.png" alt="back" className="relative" width={70} height={690} />
              </div>
            </a>
            <div className="flex">
              <ResponsiveImage src={entry.contestantSrc} alt="contestant" className="relative" width={600} height={700} priority />
              <div className="my-auto h-auto">
                <div className="absolute right-[5.8854166667vw] top-[2.2395833333vw] 4xl:right-[113px] 4xl:top-[43px]" onClick={onClose}>
                  <a href="#">
                    <ResponsiveImage src="/Modal/22_Modal_Close.png" alt="close" className="relative" width={55} height={55} />
                  </a>
                </div>
                <ResponsiveImage src={entry.iconSrc} alt="icon" className="relative" width={680} height={100} priority />
                <ResponsiveImage src="/Modal/22_Entry_pic_Line.png" alt="line" className="relative" width={725} height={10} />
                {/* テキストサイズを決定する */}
                <div
                  className="my-[0.5208333333vw] w-[37.7604166667vw] text-[1.3020833333vw] font-bold text-white 4xl:my-[10px] 4xl:w-[725px] 4xl:text-[25px]"
                  style={{
                    fontFamily: 'UDKakugo_LargePr6-HV',
                    lineHeight: '1.7'
                  }}
                  dangerouslySetInnerHTML={{ __html: entry.description.replaceAll('\n', '<br />') }}
                ></div>
                <div className="flex">
                  <a target="_blank" href={entry.niconicoLink} rel="noopener noreferrer">
                    <div className="mr-[0.5208333333vw] 4xl:mr-[10px]">
                      <ResponsiveImage src="/Modal/22_Modal_pic_SNS_Nico.png" alt="niconico" className="relative" width={50} height={50} />
                    </div>
                  </a>
                  {entry.youtubeLink && (
                    <a target="_blank" href={entry.youtubeLink} rel="noopener noreferrer">
                      <div className="mr-[0.5208333333vw] 4xl:mr-[10px]">
                        <ResponsiveImage src="/Modal/22_Modal_pic_SNS_Youtube.png" alt="youtube" className="relative" width={50} height={50} />
                      </div>
                    </a>
                  )}
                  <a target="_blank" href={entry.twitterLink} rel="noopener noreferrer">
                    <div className="mr-[0.5208333333vw] 4xl:mr-[10px]">
                      <ResponsiveImage src="/Modal/22_Modal_pic_SNS_Twitter.png" alt="twitter" className="relative" width={50} height={50} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setEntry(nextEntry);
              }}
            >
              <div>
                <ResponsiveImage src="/Modal/22_Modal_Next.png" alt="next" className="relative" width={70} height={690} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// https://gist.github.com/webinista/11240585?permalink_comment_id=2363393#gistcomment-2363393
function chunk<T>(arr: Array<T>, chunkSize: number): Array<Array<T>> {
  return arr.reduce(
    (prevVal: any, currVal: any, currIndx: number, array: Array<T>) => (!(currIndx % chunkSize) ? prevVal.concat([array.slice(currIndx, currIndx + chunkSize)]) : prevVal),
    []
  );
}

const contestantRows = chunk(entries, 10);

const Entries: NextPageWithLayout = () => {
  const { isOpen, onOpen, onClose } = useModal();

  return (
    <>
      <Title title="出場者" />
      <Background src="/Entry/21_Entry_pic_BG.png" />
      <Background src="/Entry/21_Entry_pic_vignette.png" />
      <EntryProvider>
        <div
          className="flex w-screen justify-center overflow-x-hidden"
          style={{
            // TODO: 5remはヘッダーの高さだが、少なくともハードコードは避けたい
            height: 'calc(100vh - 5rem)'
          }}
        >
          {/* <Head></Head> */}
          <div className="relative my-auto h-[46.875vw] w-[82.8125vw] 4xl:h-[900px] 4xl:w-[1590px]">
            <div className="absolute top-[8.8541666667vw] 4xl:top-[170px]">
              <div className="absolute left-[1.9vw] top-[-10vw] 4xl:left-[36.48px] 4xl:top-[-211.2px]">
                <ResponsiveImage alt="entry" src="/Entry/21_Entry_text_01.png" width={500} height={250} />
              </div>
              {contestantRows.map((row, index) => (
                <ContestantRow key={index} contestants={row} offset={index * 46} onModalOpen={onOpen} />
              ))}
              <ToggleEntryButton />
            </div>
          </div>
        </div>
        <ContestantModal isOpen={isOpen} onClose={onClose} />
      </EntryProvider>
    </>
  );
};

Entries.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Entries;
