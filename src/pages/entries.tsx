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

type ContestantRowProps = {
  contestantImages: string[];
  offset: number;
  onModalOpen: () => void;
};

function Contestant({ src, onModalOpen }: { src: string; onModalOpen: () => void }) {
  const [styles, api] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 0 },
    config: {
      // duration: 50
    }
  }));
  return (
    <div key={src} className="relative h-[7.8125vw] w-[4.6875vw] skew-y-[10deg] 4xl:h-[150px] 4xl:w-[90px]">
      <div className="h-[7.2916666667vw] w-[6.3541666667vw] skew-x-[-20deg] skew-y-[-11deg] bg-transparent 4xl:h-[140px] 4xl:w-[122px]"></div>
      <a href="#">
        <div
          className="absolute left-[-3.28125vw] top-[-2.9687557vw] max-w-none 4xl:left-[-63px] 4xl:top-[-57px]"
          style={{
            clipPath: 'polygon(34% 25%, 88% 15%, 66% 75%, 12% 85%)'
          }}
          onClick={onModalOpen}
        >
          <ResponsiveImage src={src} alt="contestant" width={250} height={250} />
          <animated.div
            className="absolute left-[3.125vw] top-[2.65625vw] h-[7.8125vw] w-[6.7708333333vw] skew-x-[-20deg] skew-y-[-11deg] bg-white 4xl:left-[60px] 4xl:top-[51px] 4xl:h-[150px] 4xl:w-[130px]"
            style={styles}
            onMouseEnter={() => {
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

function ContestantRow({ contestantImages, offset, onModalOpen }: ContestantRowProps) {
  const isNarrow = useMediaQuery({ query: '(min-width: 1920px)' });

  return (
    <div
      className="grid skew-y-[-10deg] grid-cols-[repeat(10,7.4479166667vw)] 4xl:grid-cols-[repeat(10,143px)]"
      style={{
        paddingLeft: isNarrow ? `${offset}px` : `${(offset / 1920) * 100}vw`
      }}
    >
      {contestantImages.map((image) => (
        <Contestant src={image} onModalOpen={onModalOpen} key={image} />
      ))}
    </div>
  );
}

function ToggleCombiButton() {
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
      <ResponsiveImage alt="conbi" src="/Entry/21_Entry_text_02_base.png" width={480} height={105} />
      <ResponsiveImage alt="conbi" className={'absolute top-0 left-0 ' + (shadowOn ? '' : 'hidden')} src="/Entry/21_Entry_text_02_shadow.png" width={480} height={105} />
      <Link href="/entries" passHref>
        <a>
          <div className="absolute top-0 left-0 transition hover:scale-125" onMouseEnter={trigger} onMouseLeave={reset}>
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

function ContestantModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    // FUCK
    window.FONTPLUS.reload();
  });
  return (
    <div className={`fixed inset-0 ${isOpen ? 'opacity-100' : 'opacity-0'} transition-all duration-200 ${isOpen ? '' : 'pointer-events-none'}`}>
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
            <div>
              <ResponsiveImage src="/Modal/22_Modal_Back.png" alt="contestant" className="relative" width={70} height={690} />
            </div>
            <div className="flex">
              <ResponsiveImage src="/Modal/contestants/22_Modal_contestant_01.png" alt="contestant" className="relative" width={600} height={700} />
              <div className="my-auto h-auto">
                <div className="absolute right-[5.8854166667vw] top-[2.2395833333vw] 4xl:right-[113px] 4xl:top-[43px]" onClick={onClose}>
                  <a href="#">
                    <ResponsiveImage src="/Modal/22_Modal_Close.png" alt="close" className="relative" width={55} height={55} />
                  </a>
                </div>
                <ResponsiveImage src="/Modal/icon/22_Modal_icon_01.png" alt="icon" className="relative" width={680} height={100} />
                <ResponsiveImage src="/Modal/22_Entry_pic_Line.png" alt="line" className="relative" width={725} height={10} />
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
                <div className="flex">
                  <div className="mr-[0.5208333333vw] 4xl:mr-[10px]">
                    <ResponsiveImage src="/Modal/22_Modal_pic_SNS_Nico.png" alt="niconico" className="relative" width={50} height={50} />
                  </div>
                  <div className="mr-[0.5208333333vw] 4xl:mr-[10px]">
                    <ResponsiveImage src="/Modal/22_Modal_pic_SNS_Youtube.png" alt="youtube" className="relative" width={50} height={50} />
                  </div>
                  <div className="mr-[0.5208333333vw] 4xl:mr-[10px]">
                    <ResponsiveImage src="/Modal/22_Modal_pic_SNS_Twitter.png" alt="twitter" className="relative" width={50} height={50} />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ResponsiveImage src="/Modal/22_Modal_Next.png" alt="contestant" className="relative" width={70} height={690} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const contestantImageRows = [
  [
    '/Entry/Frame/21_Entry_Frame_01.png',
    '/Entry/Frame/21_Entry_Frame_02.png',
    '/Entry/Frame/21_Entry_Frame_03.png',
    '/Entry/Frame/21_Entry_Frame_04.png',
    '/Entry/Frame/21_Entry_Frame_05.png',
    '/Entry/Frame/21_Entry_Frame_07.png',
    '/Entry/Frame/21_Entry_Frame_08.png',
    '/Entry/Frame/21_Entry_Frame_09.png',
    '/Entry/Frame/21_Entry_Frame_10.png',
    '/Entry/Frame/21_Entry_Frame_11.png'
  ],
  [
    '/Entry/Frame/21_Entry_Frame_12.png',
    '/Entry/Frame/21_Entry_Frame_13.png',
    '/Entry/Frame/21_Entry_Frame_14.png',
    '/Entry/Frame/21_Entry_Frame_15.png',
    '/Entry/Frame/21_Entry_Frame_16.png',
    '/Entry/Frame/21_Entry_Frame_17.png',
    '/Entry/Frame/21_Entry_Frame_18.png',
    '/Entry/Frame/21_Entry_Frame_19.png',
    '/Entry/Frame/21_Entry_Frame_20.png',
    '/Entry/Frame/21_Entry_Frame_21.png'
  ],
  [
    '/Entry/Frame/21_Entry_Frame_22.png',
    '/Entry/Frame/21_Entry_Frame_23.png',
    '/Entry/Frame/21_Entry_Frame_24.png',
    '/Entry/Frame/21_Entry_Frame_25.png',
    '/Entry/Frame/21_Entry_Frame_26.png',
    '/Entry/Frame/21_Entry_Frame_27.png',
    '/Entry/Frame/21_Entry_Frame_28.png',
    '/Entry/Frame/21_Entry_Frame_29.png',
    '/Entry/Frame/21_Entry_Frame_30.png',
    '/Entry/Frame/21_Entry_Frame_31.png'
  ],
  [
    '/Entry/Frame/21_Entry_Frame_32.png',
    '/Entry/Frame/21_Entry_Frame_33.png',
    '/Entry/Frame/21_Entry_Frame_34.png',
    '/Entry/Frame/21_Entry_Frame_35.png',
    '/Entry/Frame/21_Entry_Frame_36.png',
    '/Entry/Frame/21_Entry_Frame_37.png',
    '/Entry/Frame/21_Entry_Frame_38.png',
    '/Entry/Frame/21_Entry_Frame_39.png',
    '/Entry/Frame/21_Entry_Frame_40.png',
    '/Entry/Frame/21_Entry_Frame_41_Secret.png'
  ]
];

const Entries: NextPageWithLayout = () => {
  const { isOpen, onOpen, onClose } = useModal();

  return (
    <>
      <Background src="/Entry/21_Entry_pic_BG.png" />
      <Background src="/Entry/21_Entry_pic_vignette.png" />
      {/* <Head></Head> */}
      <div className="relative">
        <div className="absolute left-[1.9vw] top-[-10vw] 4xl:left-[36.48px] 4xl:top-[-211.2px]">
          <ResponsiveImage alt="entry" src="/Entry/21_Entry_text_01.png" width={500} height={250} />
        </div>
        {contestantImageRows.map((row, index) => (
          <ContestantRow key={index} contestantImages={row} offset={index * 46} onModalOpen={onOpen} />
        ))}
        <ToggleCombiButton />
      </div>
      <ContestantModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

Entries.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Entries;
