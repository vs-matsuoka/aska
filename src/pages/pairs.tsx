import Image, { ImageProps } from 'next/future/image';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import { ReactElement, useCallback, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSpring, animated } from 'react-spring';
import { NextPageWithLayout } from './_app';
import Background from 'components/Background';
import Layout from 'components/Layout';
import useModal from 'hooks/useModal';

type PairRowProps = {
  contestantImages: string[];
  offset: number;
  onModalOpen: () => void;
};

function Pair({ src, onModalOpen }: { src: string; onModalOpen: () => void }) {
  const [styles, api] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 0 },
    config: {
      // duration: 50
    }
  }));
  return (
    <div key={src} className="relative h-[7.8125vw] w-[9.375vw] skew-y-[10deg] 4xl:h-[150px] 4xl:w-[180px]">
      <div className="h-[7.2916666667vw] w-[12.7083333334vw] skew-x-[-20deg] skew-y-[-11deg] bg-transparent 4xl:h-[140px] 4xl:w-[244px]"></div>
      <a {...(src.includes('Secret') ? {} : { href: '#' })}>
        <div
          className="absolute left-[-3.28125vw] top-[-2.9687557vw] max-w-none 4xl:left-[-63px] 4xl:top-[-57px]"
          style={{
            clipPath: 'polygon(16% 26%, 100% 1%, 84% 74%, 0 98%)'
          }}
          onClick={() => {
            if (src.includes('Secret')) {
              return;
            }
            onModalOpen();
          }}
        >
          <ResponsiveImage src={src} alt="pair" width={330} height={200} />
          <animated.div
            className="absolute left-[1.8229166667vw] top-[1.5104166667vw] h-[7.8125vw] w-[13.5416666666vw] skew-x-[-20deg] skew-y-[-11deg] bg-white 4xl:left-[35px] 4xl:top-[29px] 4xl:h-[150px] 4xl:w-[260px]"
            style={styles}
            onMouseEnter={() => {
              if (src.includes('Secret')) {
                return;
              }
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

function PairRow({ contestantImages, offset, onModalOpen }: PairRowProps) {
  const isNarrow = useMediaQuery({ query: '(min-width: 1920px)' });

  return (
    <div
      className="grid skew-y-[-10deg] grid-cols-[repeat(5,14.8958333334vw)] 4xl:grid-cols-[repeat(5,286px)]"
      style={{
        paddingLeft: isNarrow ? `${offset}px` : `${(offset / 1920) * 100}vw`
      }}
    >
      {contestantImages.map((image) => (
        <Pair src={image} onModalOpen={onModalOpen} key={image} />
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

  const [shadowOn, setShadowOn] = useState(true);

  const trigger = useCallback(() => {
    const handler = setTimeout(() => {
      api.start({
        from: { clipPath: 'polygon(125% 0%, 175% 0%, 150% 100%, 100% 100%)' },
        to: { clipPath: 'polygon(-25% 0%, -15% 0%, -40% 100%, -50% 100%)' }
      });
    }, 150);
    setShadowOn(false);
    return () => clearTimeout(handler);
  }, [api]);

  const reset = useCallback(() => {
    // const handler = setTimeout(() => {
    setShadowOn(true);
    // }, 150);
    // return () => clearTimeout(handler);
  }, []);

  return (
    <div className="absolute right-[2.5vw] bottom-[-6.5vw] 4xl:right-[3rem] 4xl:bottom-[-8rem]">
      <ResponsiveImage alt="conbi" src="/Pair/31_Pair_text_02_base.png" width={480} height={105} />
      <ResponsiveImage alt="conbi" className={'absolute top-0 left-0 ' + (shadowOn ? '' : 'hidden')} src="/Pair/31_Pair_text_02_shadow.png" width={480} height={105} />
      <Link href="/entries" passHref>
        <a>
          <div className="absolute top-0 left-0 transition hover:scale-125" onMouseEnter={trigger} onMouseLeave={reset}>
            <ResponsiveImage alt="conbi" src="/Pair/31_Pair_text_02.png" width={480} height={105} />
            <animated.div
              className="absolute top-0 left-0"
              style={{
                filter: 'brightness(0) invert(1)',
                ...styles
              }}
            >
              <ResponsiveImage
                alt="conbi"
                src="/Pair/31_Pair_text_02.png"
                width={480}
                height={105}
                style={{
                  filter: 'brightness(0) invert(1)'
                }}
              />
            </animated.div>
          </div>
        </a>
      </Link>
    </div>
  );
}

function ResponsiveImage(
  props: Omit<ImageProps, 'fill' | 'width' | 'height'> & {
    width: number;
    height: number;
  }
) {
  const { width, height, src, alt, className, ...imageProps } = props;
  const standard = 1920;
  const isNarrow = useMediaQuery({ query: '(min-width: 1920px)' });

  return (
    <div
      className={`${className ?? ''}`}
      style={{
        width: isNarrow ? `${width}px` : `${(width / standard) * 100}vw`,
        height: isNarrow ? `${height}px` : `${(height / standard) * 100}vw`,
        objectFit: 'cover'
      }}
    >
      <Image src={src} alt={alt} className="max-w-none" fill {...imageProps}></Image>
    </div>
  );
}

function PairModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    // FUCK
    window.FONTPLUS.reload();
  });
  return (
    <div className={`fixed inset-0 ${isOpen ? 'opacity-100' : 'opacity-0'} transition-all duration-200 ${isOpen ? '' : 'pointer-events-none'}`}>
      <Background src="/Pair_Modal/32_Pair_Modal_BG.png" />
      <div className={`relative flex h-full items-center justify-center ${isOpen ? 'block' : 'hidden'}`} onClick={onClose}>
        <div
          className="absolute"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <ResponsiveImage src="/Pair_Modal/32_Pair_Modal_pic_FudeBase.png" alt="FudeBase" className="relative" width={1500} height={850} />
        </div>
        <div
          className="relative"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="flex">
            <div>
              <ResponsiveImage src="/Modal/22_Modal_Back.png" alt="back" className="relative" width={70} height={690} />
            </div>
            <div className="flex">
              <div className="my-auto h-auto">
                <ResponsiveImage src="/Pair_Modal/Illust/32_Pair_Modal_Illust_01.png" alt="pair" className="relative" width={600} height={600} />
              </div>
              <div className="my-auto h-auto">
                <div className="absolute right-[5.8854166667vw] top-[2.2395833333vw] 4xl:right-[113px] 4xl:top-[43px]" onClick={onClose}>
                  <a href="#">
                    <ResponsiveImage src="/Modal/22_Modal_Close.png" alt="close" className="relative" width={55} height={55} />
                  </a>
                </div>
                <div className="mb-[0.4166666667vw] 4xl:mb-[8px]">
                  <div className="mb-[0.3125vw] 4xl:mb-[6px]">
                    <ResponsiveImage src="/Pair_Modal/Name/32_Pair_Modal_Name_01.png" alt="icon" className="relative" width={690} height={90} />
                  </div>
                  <div className="ml-[0.3645833333vw] flex gap-[0.7291666667vw] 4xl:ml-[7px] 4xl:gap-[14px]">
                    <ResponsiveImage src="/Pair_Modal/HN/32_Pair_Modal_HN_01A.png" alt="name" className="relative" width={325} height={50} />
                    <ResponsiveImage src="/Pair_Modal/HN/32_Pair_Modal_HN_01B.png" alt="name" className="relative" width={325} height={50} />
                  </div>
                </div>
                <ResponsiveImage src="/Pair_Modal/32_Pair_Modal_pic_Line.png" alt="line" className="relative" width={685} height={10} />
                {/* テキストサイズを決定する */}
                <div
                  className="my-[0.5208333333vw] w-[37.7604166667vw] text-[1.3020833333vw] font-bold text-white 4xl:my-[10px] 4xl:w-[725px] 4xl:text-[25px]"
                  style={{
                    fontFamily: 'UDKakugo_LargePr6-HV',
                    lineHeight: '1.7'
                  }}
                >
                  丁寧なアニメ素材YTPMVから勢いのある松岡修造MADまで
                  <br />
                  幅広い素材を独自のアイデアで面白く掘り下げる投稿者
                  <br />
                  さまざまな作風を使いこなし、従来の音MADを切り開く！
                </div>
              </div>
            </div>
            <div>
              <ResponsiveImage src="/Modal/22_Modal_Next.png" alt="next" className="relative" width={70} height={690} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const contestantImageRows = [
  [
    '/Pair/Frame/31_Pair_Frame_01.png',
    '/Pair/Frame/31_Pair_Frame_02.png',
    '/Pair/Frame/31_Pair_Frame_03.png',
    '/Pair/Frame/31_Pair_Frame_04.png',
    '/Pair/Frame/31_Pair_Frame_05.png'
  ],
  [
    '/Pair/Frame/31_Pair_Frame_06.png',
    '/Pair/Frame/31_Pair_Frame_07.png',
    '/Pair/Frame/31_Pair_Frame_08.png',
    '/Pair/Frame/31_Pair_Frame_09.png',
    '/Pair/Frame/31_Pair_Frame_10.png'
  ],
  [
    '/Pair/Frame/31_Pair_Frame_Secret_11.png',
    '/Pair/Frame/31_Pair_Frame_Secret_12.png',
    '/Pair/Frame/31_Pair_Frame_Secret_13.png',
    '/Pair/Frame/31_Pair_Frame_Secret_14.png',
    '/Pair/Frame/31_Pair_Frame_Secret_15.png'
  ],
  [
    '/Pair/Frame/31_Pair_Frame_Secret_16.png',
    '/Pair/Frame/31_Pair_Frame_Secret_17.png',
    '/Pair/Frame/31_Pair_Frame_Secret_18.png',
    '/Pair/Frame/31_Pair_Frame_Secret_19.png',
    '/Pair/Frame/31_Pair_Frame_Secret_20.png'
  ]
];

const Pairs: NextPageWithLayout = () => {
  const { isOpen, onOpen, onClose } = useModal();

  return (
    <>
      <Background src="/Pair/31_Pair_pic_BG.png" />
      <Background src="/Pair/31_Pair_pic_vignette.png" />
      {/* <Head></Head> */}
      <div className="relative">
        <div className="absolute left-[1.9vw] top-[-10vw] 4xl:left-[36.48px] 4xl:top-[-211.2px]">
          <ResponsiveImage alt="pair" src="/Pair/31_Pair_text_01.png" width={500} height={250} />
        </div>
        {contestantImageRows.map((row, index) => (
          <PairRow key={index} contestantImages={row} offset={index * 46} onModalOpen={onOpen} />
        ))}
        <ToggleEntriesButton />
      </div>
      <PairModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

Pairs.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Pairs;
