import Link from 'next/link';
import { ReactElement, useCallback, useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { NextPageWithLayout } from './_app';
import Background from 'components/Background';
import FireOnlyOnServerSide from 'components/FireOnlyOnServerSide';
import Layout from 'components/Layout';
import ResponsiveImage from 'components/ResponsiveImage';
import SEO from 'components/SEO';
import pairs, { Pair as Pair } from 'const/pairs';
import { PairContextType, PairProvider, usePairContext } from 'contexts/PairContext';
import useModal from 'hooks/useModal';
import { searchNextPublished, searchPrevPublished } from 'utils/nextPrev';

type PairRowProps = {
  pairs: Pair[];
  offset: number;
  onModalOpen: () => void;
};

function PairButton({ pair, onModalOpen }: { pair: Pair; onModalOpen: () => void }) {
  const [styles, api] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 0 },
    config: {
      // duration: 50
    }
  }));
  const { setPair } = usePairContext() as PairContextType;
  return (
    <div key={pair.frameSrc} className="relative h-[7.8125vw] w-[9.375vw] skew-y-[10deg] 4xl:h-[150px] 4xl:w-[180px]">
      <div className="h-[7.2916666667vw] w-[12.7083333334vw] skew-x-[-20deg] skew-y-[-11deg] bg-transparent 4xl:h-[140px] 4xl:w-[244px]"></div>
      <a {...(pair.isPublished ? { href: '#' } : {})}>
        <div
          className="absolute left-[-3.28125vw] top-[-2.9687557vw] max-w-none 4xl:left-[-63px] 4xl:top-[-57px]"
          style={{
            clipPath: 'polygon(16% 26%, 100% 1%, 84% 74%, 0 98%)'
          }}
          onClick={() => {
            if (!pair.isPublished) {
              return;
            }
            setPair(pair);
            onModalOpen();
          }}
        >
          <ResponsiveImage src={pair.frameSrc} alt="pair" width={330} height={200} priority />
          <animated.div
            className="absolute left-[1.8229166667vw] top-[1.5104166667vw] h-[7.8125vw] w-[13.5416666666vw] skew-x-[-20deg] skew-y-[-11deg] bg-white 4xl:left-[35px] 4xl:top-[29px] 4xl:h-[150px] 4xl:w-[260px]"
            style={styles}
            onMouseEnter={() => {
              if (!pair.isPublished) {
                return;
              }
              setPair(pair);
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

function PairRow({ pairs, offset, onModalOpen }: PairRowProps) {
  const [isNarrow, setIsNarrow] = useState(false);
  useEffect(() => {
    setIsNarrow(window.innerWidth > 1920);
    const updateWindowDimensions = () => {
      setIsNarrow(window.innerWidth > 1920);
    };

    window.addEventListener('resize', updateWindowDimensions);
    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, []);

  return (
    <div
      className="grid skew-y-[-10deg] grid-cols-[repeat(5,14.8958333334vw)] 4xl:grid-cols-[repeat(5,286px)]"
      style={{
        paddingLeft: isNarrow ? `${offset}px` : `${(offset / 1920) * 100}vw`
      }}
    >
      {pairs.map((pair, i) => (
        <PairButton pair={pair} onModalOpen={onModalOpen} key={i} />
      ))}
    </div>
  );
}

function ToggleEntriesButton() {
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
    <div className="absolute bottom-[-5.46875vw] right-[4.1666666667vw] 4xl:bottom-[-105px] 4xl:right-[80px]">
      <ResponsiveImage alt="conbi" src="/Pair/31_Pair_text_02_base.png" width={500} height={105} />
      <Link href="/entries" passHref>
        <div className="absolute left-0 top-0 transition hover:scale-125" onMouseEnter={trigger}>
          <ResponsiveImage alt="conbi" src="/Pair/31_Pair_text_02.png" width={500} height={105} />
          <animated.div
            className="absolute left-0 top-0"
            style={{
              filter: 'brightness(0) invert(1)',
              ...styles
            }}
          >
            <ResponsiveImage
              alt="conbi"
              src="/Pair/31_Pair_text_02.png"
              width={500}
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

function PairModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { pair, setPair } = usePairContext() as PairContextType;
  useEffect(() => {
    // FUCK
    // window.FONTPLUS.reload();
  }, [pair]);
  const nextPair = searchNextPublished(pairs, pair);
  const prevPair = searchPrevPublished(pairs, pair);
  return (
    <div className={`fixed inset-0 ${isOpen ? 'opacity-100' : 'opacity-0'} transition-all duration-200 ${isOpen ? '' : 'pointer-events-none'}`}>
      {/*
      DIRTY HACK: 今回の場合、next-export-optimize-images は next build のタイミングで <Image> タグを通過した画像のみを対象に変換を行う。
      この対応のため、サーバーサイドでのみレンダリングされる箇所を作成し、そこにクライアントサイドで動的にレンダリングされる予定の画像一覧をレンダリングするようにしておく。
    */}
      <FireOnlyOnServerSide>
        {pairs
          .filter((pair) => pair.isPublished)
          .map((pair) => (
            <div key={pair.index}>
              <ResponsiveImage src={pair.illustSrc} alt="pair" width={600} height={600} priority innerKey={`${pair.name}-illust`} />
              <ResponsiveImage src={pair.nameSrc} alt="icon" width={690} height={90} priority innerKey={`${pair.name}-icon`} />
              <ResponsiveImage src={pair.hnASrc} alt="name" width={325} height={50} innerKey={`${pair.name}-hnA`} />
              <ResponsiveImage src={pair.hnBSrc} alt="name" width={325} height={50} innerKey={`${pair.name}-hnB`} />
            </div>
          ))}
      </FireOnlyOnServerSide>
      <Background src="/Pair_Modal/32_Pair_Modal_BG.png" />
      <div className={`relative flex h-full items-center justify-center ${isOpen ? 'block' : 'hidden'}`} onClick={onClose}>
        <div
          className="absolute"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <ResponsiveImage src="/Pair_Modal/32_Pair_Modal_pic_FudeBase.png" alt="FudeBase" width={1500} height={850} />
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
                setPair(prevPair);
              }}
            >
              <div>
                <ResponsiveImage src="/Modal/22_Modal_Back.png" alt="back" width={70} height={690} quality={100} />
              </div>
            </a>
            <div className="flex">
              <div className="my-auto h-auto">
                <ResponsiveImage src={pair.illustSrc} alt="pair" innerClassName="animate-fade-in-from-left" width={600} height={600} priority innerKey={`${pair.name}-illust`} />
              </div>
              <div className="my-auto h-auto">
                <div className="absolute right-[5.8854166667vw] top-[2.2395833333vw] 4xl:right-[113px] 4xl:top-[43px]" onClick={onClose}>
                  <a href="#">
                    <ResponsiveImage src="/Modal/22_Modal_Close.png" alt="close" width={55} height={55} quality={100} />
                  </a>
                </div>
                <div className="mb-[0.4166666667vw] 4xl:mb-[8px]">
                  <div className="mb-[0.3125vw] 4xl:mb-[6px]">
                    <ResponsiveImage src={pair.nameSrc} alt="icon" width={690} height={90} priority innerKey={`${pair.name}-icon`} />
                  </div>
                  <div className="ml-[0.3645833333vw] flex gap-[0.7291666667vw] 4xl:ml-[7px] 4xl:gap-[14px]">
                    <ResponsiveImage src={pair.hnASrc} alt="name" width={325} height={50} priority innerKey={`${pair.name}-hnA`} />
                    <ResponsiveImage src={pair.hnBSrc} alt="name" width={325} height={50} priority innerKey={`${pair.name}-hnB`} />
                  </div>
                </div>
                <ResponsiveImage src="/Pair_Modal/32_Pair_Modal_pic_Line.png" alt="line" width={685} height={10} />
                {/* テキストサイズを決定する */}
                <div
                  className="my-[0.5208333333vw] w-[37.7604166667vw] text-[1.9270833333vw] font-bold text-white 4xl:my-[10px] 4xl:w-[725px] 4xl:text-[37px]"
                  style={{
                    fontFamily: 'UDKakugo_LargePr6-HV',
                    lineHeight: '1.7'
                  }}
                  dangerouslySetInnerHTML={{ __html: pair.description.replaceAll('\n', '<br />') }}
                ></div>
              </div>
            </div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setPair(nextPair);
              }}
            >
              <div>
                <ResponsiveImage src="/Modal/22_Modal_Next.png" alt="next" width={70} height={690} quality={100} />
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

const pairRows = chunk(pairs, 5);

const Pairs: NextPageWithLayout = () => {
  const { isOpen, onOpen, onClose } = useModal();

  return (
    <>
      <SEO title="コンビ" />
      <Background src="/Pair/31_Pair_pic_BG.jpg" />
      <Background src="/Pair/31_Pair_pic_vignette.png" />
      <PairProvider>
        <div
          className="flex w-full justify-center overflow-x-hidden"
          style={{
            // TODO: 5remはヘッダーの高さだが、少なくともハードコードは避けたい
            height: 'calc(100vh - 4rem)'
          }}
        >
          {/* <Head></Head> */}
          <div className="relative my-auto h-[46.875vw] w-[82.8125vw] 4xl:h-[900px] 4xl:w-[1590px]">
            <div className="relative">
              <div className="absolute left-[1.6666666667vw] top-[10vw] 4xl:left-[32px] 4xl:top-[192px]">
                <div className="absolute left-[0.2604166667vw] top-[-12.1354166667vw] 4xl:left-[5px] 4xl:top-[-233px]">
                  <ResponsiveImage alt="pair" src="/Pair/31_Pair_text_01.png" width={500} height={250} />
                </div>
                {pairRows.map((row, index) => (
                  <PairRow key={index} pairs={row} offset={index * 46} onModalOpen={onOpen} />
                ))}
                <ToggleEntriesButton />
              </div>
            </div>
          </div>
        </div>
        <PairModal isOpen={isOpen} onClose={onClose} />
      </PairProvider>
    </>
  );
};

Pairs.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Pairs;
