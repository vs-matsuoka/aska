import Link from 'next/link';
import { ReactElement, ReactNode, useCallback, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated, easings } from 'react-spring';
import { NextPageWithLayout } from './_app';
import Layout from 'components/Layout';
import ResponsiveImage from 'components/ResponsiveImage';
import SEO from 'components/SEO';

interface FadeInTriggerProps {
  children?: ReactNode;
  duration?: number;
  distance?: string;
  rootMargin?: string;
  triggerOnce?: boolean;
  style?: React.CSSProperties;
  delay?: number;
}

const FadeInTrigger = ({ children, rootMargin = rpx(100), distance = rpx(50), duration = 300, triggerOnce = false, delay = 0 }: FadeInTriggerProps) => {
  const { ref, inView } = useInView({
    rootMargin: rootMargin,
    triggerOnce: triggerOnce
  });
  const [styles, trigger] = useFadeIn({
    distance,
    duration
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        trigger();
      }, delay);
    }
  }, [delay, inView, trigger]);
  return (
    <div ref={ref}>
      <animated.div style={styles}>{children}</animated.div>
    </div>
  );
};

interface FadeInProps {
  duration?: number;
  distance?: string;
}

const useFadeIn = ({ duration = 500, distance = rpx(50) }: FadeInProps) => {
  const [styles, api] = useSpring(() => ({
    from: { opacity: '0', transform: `translateY(${distance})` },
    config: {
      duration,
      easing: easings.easeInOutSine
    }
  }));
  const trigger = useCallback(() => {
    api.start({
      opacity: '1',
      transform: 'translateY(0)'
    });
  }, [api]);
  return [styles, trigger] as [typeof styles, typeof trigger];
};

interface SlideInTriggerProps {
  children?: ReactNode;
  duration?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  style?: React.CSSProperties;
  delay?: number;
  right?: boolean;
}

const BaseImage = ({ src, rootMargin = rpx(100), duration = 300, triggerOnce = false, delay = 0, right = false }: SlideInTriggerProps & { src: string }) => {
  const { ref, inView } = useInView({
    rootMargin,
    triggerOnce
  });
  const [styles, trigger] = useSlideIn({
    duration
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        // console.log('TRIGGER!');
        trigger();
      }, delay);
    }
  }, [delay, inView, trigger]);
  return (
    <>
      <div className="invisible absolute w-full" ref={ref}>
        &nbsp;
      </div>
      <div className="relative h-full" style={{ width: rpx(1920), height: rpx(1000) }}>
        <animated.div style={{ ...styles, ...(right ? { right: '0' } : {}) }} className="absolute h-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="base" style={{ height: rpx(1000), ...(right ? { right: '0' } : {}) }} className="absolute max-w-none" />
        </animated.div>
      </div>
    </>
  );
};

interface SlideInProps {
  duration?: number;
  right?: boolean;
}

const useSlideIn = ({ duration = 500 }: SlideInProps) => {
  const [styles, api] = useSpring(() => ({
    from: { width: '0vw' },
    config: {
      duration,
      easing: easings.easeInOutSine
    }
  }));
  const trigger = useCallback(() => {
    api.start({
      width: '100vw'
    });
  }, [api]);
  return [styles, trigger] as [typeof styles, typeof trigger];
};

const rpx = (px: number) => {
  const standard = 1920;
  return `${(px / standard) * 100}vw`;
};

const ppx = (px: number) => {
  const standard = 1920;
  return `${(px / standard) * 100}%`;
};

// 最初のもじ: 15f
// フェードインしながら: 10f
// baseのアニメーション: 15f
// フェードインしながら: 10f
// https://media.discordapp.net/attachments/1016776358199836722/1097948252986421329/image.png?width=444&height=276

const About: NextPageWithLayout = () => {
  return (
    <>
      <SEO title="概要" />
      <div
        className="w-full justify-center overflow-x-hidden overflow-y-scroll bg-[url('/Concept/41_Pic_BG.jpg')] bg-cover bg-local"
        style={{
          // TODO: 5remはヘッダーの高さだが、少なくともハードコードは避けたい
          height: 'calc(100vh - 4rem)'
        }}
      >
        {/* ロゴ + 文言 */}
        <FadeInTrigger distance={rpx(200)} rootMargin="0px" triggerOnce>
          <div className="absolute w-full">
            <ResponsiveImage src="/Concept/41_pic_Base_C.png" alt="logo" width={1920} height={750} />
          </div>
          <div
            className="flex w-full justify-center"
            style={{
              paddingTop: rpx(270),
              gap: rpx(20)
            }}
          >
            <ResponsiveImage src="/Concept/41_Pic_00_Logo.png" alt="logo" className="relative" width={750} height={450} loading="eager" />
            <ResponsiveImage src="/Concept/41_Text_00.png" alt="text" className="relative" width={800} height={360} loading="eager" />
          </div>
        </FadeInTrigger>
        {/* 音MAD DREAM MATCHとは？ */}
        <FadeInTrigger distance={rpx(200)} rootMargin="0px" triggerOnce delay={500}>
          <div
            className="flex w-full justify-center"
            style={{
              marginTop: rpx(53)
            }}
          >
            <ResponsiveImage src="/Concept/41_Pic_Arrow.png" alt="arrow" className="relative" width={1000} height={100} />
          </div>
        </FadeInTrigger>
        {/* 1 */}
        <div className="relative flex justify-center">
          <div
            className="absolute"
            style={{
              top: rpx(-80),
              left: 0
            }}
          >
            <BaseImage src="/Concept/41_Pic_Base_A.png" rootMargin={ppx(-500)} duration={500} triggerOnce></BaseImage>
          </div>
          <div
            className="flex"
            style={{
              marginTop: rpx(170),
              gap: rpx(34)
            }}
          >
            <FadeInTrigger distance={rpx(200)} rootMargin={ppx(-500)} triggerOnce duration={333}>
              <ResponsiveImage src="/Concept/41_Pic_Frame_01.png" alt="pic" className="relative" width={830} height={480} />
            </FadeInTrigger>
            <FadeInTrigger distance={rpx(200)} rootMargin={ppx(-500)} triggerOnce duration={333} delay={166}>
              <div>
                <div
                  style={{
                    marginTop: rpx(15)
                  }}
                >
                  <ResponsiveImage src="/Concept/41_Text_01_A.png" alt="text" className="relative" width={350} height={215} loading="eager" />
                </div>
                <div
                  style={{
                    marginLeft: rpx(39),
                    marginTop: rpx(11)
                  }}
                >
                  <ResponsiveImage src="/Concept/41_Text_01_B.png" alt="text" className="relative" width={625} height={170} loading="eager" />
                </div>
              </div>
            </FadeInTrigger>
          </div>
        </div>
        {/* 2 */}
        <div className="relative flex justify-center">
          <div
            className="absolute"
            style={{
              top: rpx(-29)
            }}
          >
            <BaseImage src="/Concept/41_Pic_Base_B.png" rootMargin={ppx(-500)} duration={500} triggerOnce right />
          </div>
          <div
            className="flex"
            style={{
              marginTop: rpx(300),
              gap: rpx(4)
            }}
          >
            <FadeInTrigger distance={rpx(200)} rootMargin={ppx(-500)} triggerOnce duration={333} delay={166}>
              <div>
                <div
                  style={{
                    marginTop: rpx(15)
                  }}
                >
                  <ResponsiveImage src="/Concept/41_Text_02_A.png" alt="text" className="relative" width={350} height={215} loading="eager" />
                </div>
                <div
                  style={{
                    marginLeft: rpx(43),
                    marginTop: rpx(11)
                  }}
                >
                  <ResponsiveImage src="/Concept/41_Text_02_B.png" alt="text" className="relative" width={625} height={170} loading="eager" />
                </div>
              </div>
            </FadeInTrigger>
            <FadeInTrigger distance={rpx(200)} rootMargin={ppx(-500)} triggerOnce duration={333}>
              <div
                style={{
                  marginTop: rpx(11),
                  marginLeft: rpx(39)
                }}
              >
                <ResponsiveImage src="/Concept/41_Pic_Frame_02.png" alt="text" className="relative" width={830} height={480} />
              </div>
            </FadeInTrigger>
          </div>
        </div>
        {/* 3 */}
        <div className="relative flex w-full justify-center">
          <div
            className="absolute"
            style={{
              top: rpx(30)
            }}
          >
            <BaseImage src="/Concept/41_Pic_Base_A.png" rootMargin={ppx(-500)} duration={500} triggerOnce></BaseImage>
          </div>
          <div
            className="flex"
            style={{
              marginTop: rpx(291),
              gap: rpx(34)
            }}
          >
            <FadeInTrigger distance={rpx(200)} rootMargin={ppx(-500)} triggerOnce duration={333}>
              <ResponsiveImage src="/Concept/41_Pic_Frame_03.png" alt="pic" className="relative" width={830} height={480} />
            </FadeInTrigger>
            <FadeInTrigger distance={rpx(200)} rootMargin={ppx(-500)} triggerOnce duration={333} delay={166}>
              <div>
                <div
                  style={{
                    marginTop: rpx(15)
                  }}
                >
                  <ResponsiveImage src="/Concept/41_Text_03_A.png" alt="text" className="relative" width={350} height={215} loading="eager" />
                </div>
                <div
                  style={{
                    marginLeft: rpx(46),
                    marginTop: rpx(12)
                  }}
                >
                  <ResponsiveImage src="/Concept/41_Text_03_B.png" alt="text" className="relative" width={625} height={170} loading="eager" />
                </div>
              </div>
            </FadeInTrigger>
          </div>
        </div>
        {/* 4 */}
        <div className="relative flex w-full justify-center">
          <div
            className="absolute"
            style={{
              top: rpx(-40)
            }}
          >
            <BaseImage src="/Concept/41_Pic_Base_B.png" rootMargin={ppx(-500)} duration={500} triggerOnce></BaseImage>
          </div>
          <div
            className="flex"
            style={{
              marginTop: rpx(300)
            }}
          >
            <FadeInTrigger distance={rpx(200)} rootMargin={ppx(-500)} triggerOnce duration={333} delay={166}>
              <div
                style={{
                  marginRight: rpx(-70)
                }}
              >
                <div
                  style={{
                    marginTop: rpx(15)
                  }}
                >
                  <ResponsiveImage src="/Concept/41_Text_04_A.png" alt="text" className="relative" width={350} height={215} loading="eager" />
                </div>
                <div
                  style={{
                    marginLeft: rpx(39),
                    marginTop: rpx(11)
                  }}
                >
                  <ResponsiveImage src="/Concept/41_Text_04_B.png" alt="text" className="relative" width={625} height={170} loading="eager" />
                </div>
              </div>
            </FadeInTrigger>
            <FadeInTrigger distance={rpx(200)} rootMargin={ppx(-500)} triggerOnce duration={333}>
              <div
                style={{
                  marginTop: rpx(11),
                  marginLeft: rpx(39)
                }}
              >
                <ResponsiveImage src="/Concept/41_Pic_Frame_04.png" alt="text" className="relative" width={830} height={480} />
              </div>
            </FadeInTrigger>
          </div>
        </div>
        {/* 最後 */}
        <div
          className="relative flex w-full justify-center"
          style={{
            marginTop: rpx(210),
            marginBottom: rpx(235)
          }}
        >
          <div className="justify-center">
            <FadeInTrigger distance={rpx(200)} rootMargin={ppx(-400)} triggerOnce duration={333}>
              <ResponsiveImage src="/Concept/41_Text_11.png" alt="text" className="relative" width={1600} height={300} />
            </FadeInTrigger>
            <FadeInTrigger distance={rpx(200)} rootMargin={ppx(-400)} triggerOnce duration={333} delay={166}>
              <div
                className="flex justify-center"
                style={{
                  gap: rpx(100)
                }}
              >
                <Link href="/entries">
                  <ResponsiveImage src="/Concept/41_Text_12_Link_A.png" alt="text" className="relative" width={700} height={250} />
                </Link>
                <Link href="/pairs">
                  <ResponsiveImage src="/Concept/41_Text_12_Link_B.png" alt="text" className="relative" width={700} height={250} />
                </Link>
              </div>
            </FadeInTrigger>
          </div>
        </div>
      </div>
    </>
  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout withOverflowHidden>{page}</Layout>;
};

export default About;
