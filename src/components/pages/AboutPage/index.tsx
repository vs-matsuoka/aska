import Image from 'next/image';
import Link from 'next/link';
import { ReactNode, useCallback, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated, easings } from 'react-spring';
import ResponsiveImage from 'components/ResponsiveImage';

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

const AboutPage = () => {
  return (
    <div className="overflow-x-hidden bg-[url('/Concept/41_Pic_BG.jpg')] bg-cover bg-local">
      <section>
        <div className="absolute w-full">
          <Image src="/Concept/41_pic_Base_C.png" alt="logo" sizes="100vw" className="h-auto w-full" width={1920} height={750} />
        </div>
        {/* ロゴ + 文言 */}
        <FadeInTrigger distance={rpx(200)} rootMargin="0px" triggerOnce>
          <div
            className="flex w-full justify-center"
            style={{
              paddingTop: rpx(270),
              gap: rpx(20)
            }}
          >
            <ResponsiveImage src="/Concept/41_Pic_00_Logo.png" alt="音MAD DREAM MATCH -天-" width={750} height={450} loading="eager" />
            <ResponsiveImage
              src="/Concept/41_Text_00.png"
              alt="2018年開催 音MAD生放送バラエティ「音MAD DREAM MATCH」が5年の時を経て「天」として再臨！ 多彩なフィールドから音MAD作者が勢揃い 今だからこそ実現できる「夢のコンビ」が音MADのさらなる可能性を切り開く!"
              width={800}
              height={360}
              loading="eager"
            />
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
            <ResponsiveImage src="/Concept/41_Pic_Arrow.png" alt="音MAD DREAM MATCHとは?" width={1000} height={100} />
          </div>
        </FadeInTrigger>
      </section>
      {/* 1 */}
      <section>
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
              <ResponsiveImage src="/Concept/41_Pic_Frame_01.png" alt="指名" width={830} height={480} />
            </FadeInTrigger>
            <FadeInTrigger distance={rpx(200)} rootMargin={ppx(-500)} triggerOnce duration={333} delay={166}>
              <div>
                <div
                  style={{
                    marginTop: rpx(15)
                  }}
                >
                  <ResponsiveImage src="/Concept/41_Text_01_A.png" alt="①指名" width={350} height={215} loading="eager" />
                </div>
                <div
                  style={{
                    marginLeft: rpx(39),
                    marginTop: rpx(11)
                  }}
                >
                  <ResponsiveImage src="/Concept/41_Text_01_B.png" alt="組みたい相手を指名!各々の指名を一斉公開" width={625} height={170} loading="eager" />
                </div>
              </div>
            </FadeInTrigger>
          </div>
        </div>
      </section>
      {/* 2 */}
      <section>
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
                  <ResponsiveImage src="/Concept/41_Text_02_A.png" alt="②結成" width={350} height={215} loading="eager" />
                </div>
                <div
                  style={{
                    marginLeft: rpx(43),
                    marginTop: rpx(11)
                  }}
                >
                  <ResponsiveImage src="/Concept/41_Text_02_B.png" alt="指名のマッチした作者でコンビを結成!" width={625} height={170} loading="eager" />
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
                <ResponsiveImage src="/Concept/41_Pic_Frame_02.png" alt="結成" width={830} height={480} />
              </div>
            </FadeInTrigger>
          </div>
        </div>
      </section>
      {/* 3 */}
      <section>
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
              <ResponsiveImage src="/Concept/41_Pic_Frame_03.png" alt="放送" width={830} height={480} />
            </FadeInTrigger>
            <FadeInTrigger distance={rpx(200)} rootMargin={ppx(-500)} triggerOnce duration={333} delay={166}>
              <div>
                <div
                  style={{
                    marginTop: rpx(15)
                  }}
                >
                  <ResponsiveImage src="/Concept/41_Text_03_A.png" alt="③放送" width={350} height={215} loading="eager" />
                </div>
                <div
                  style={{
                    marginLeft: rpx(46),
                    marginTop: rpx(12)
                  }}
                >
                  <ResponsiveImage src="/Concept/41_Text_03_B.png" alt="コンビで作成した動画を生放送で初披露!" width={625} height={170} loading="eager" />
                </div>
              </div>
            </FadeInTrigger>
          </div>
        </div>
      </section>
      {/* 4 */}
      <section>
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
                  <ResponsiveImage src="/Concept/41_Text_04_A.png" alt="④投票" width={350} height={215} loading="eager" />
                </div>
                <div
                  style={{
                    marginLeft: rpx(39),
                    marginTop: rpx(11)
                  }}
                >
                  <ResponsiveImage src="/Concept/41_Text_04_B.png" alt="生放送で動画に投票!優勝作品を競う" width={625} height={170} loading="eager" />
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
                <ResponsiveImage src="/Concept/41_Pic_Frame_04.png" alt="投票" width={830} height={480} />
              </div>
            </FadeInTrigger>
          </div>
        </div>
      </section>
      {/* 最後 */}
      <section>
        <div
          className="relative flex w-full justify-center"
          style={{
            marginTop: rpx(210),
            marginBottom: rpx(235)
          }}
        >
          <div className="justify-center">
            <FadeInTrigger distance={rpx(200)} rootMargin={ppx(-400)} triggerOnce duration={333}>
              <ResponsiveImage src="/Concept/41_Text_11.png" alt="史上最大規模で開催される音MADバラエティ 2023年9月17日 開幕!!" width={1600} height={300} />
            </FadeInTrigger>
            <FadeInTrigger distance={rpx(200)} rootMargin={ppx(-400)} triggerOnce duration={333} delay={166}>
              <div
                className="flex justify-center"
                style={{
                  gap: rpx(100)
                }}
              >
                <Link href="/entries">
                  <ResponsiveImage src="/Concept/41_Text_12_Link_A.png" alt="挑む音MAD作者! 出場者紹介へ" width={700} height={250} />
                </Link>
                <Link href="/pairs">
                  <ResponsiveImage src="/Concept/41_Text_12_Link_B.png" alt="夢のコンビ 結成! コンビ紹介へ" width={700} height={250} />
                </Link>
              </div>
            </FadeInTrigger>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
