import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import MenuBar from 'components/MenuBar';

type LayoutProps = {
  children?: React.ReactNode;
  withVignette?: boolean;
  withOverflowHidden?: boolean;
  withSplash?: boolean;
};

function Splash({ onSplashEnded }: { onSplashEnded: () => void }) {
  const videoElement = useRef<HTMLVideoElement>(null);
  // onPlay と onEnded では対応しない
  // 今回のサイトの本番環境はSSGしたものが公開される想定なので、jsが読み込まれる(hydrateされる)前の段階で既に動画が読み込まれ、かつ動画が終了している可能性がある
  // かわりに、refから動画が終了したかどうか定期的に確認するように変更する
  // これによって、jsのロード完了時に既に動画の再生が終了していたとしても適切に onSplashEnded を発火することができるようになる
  useEffect(() => {
    setInterval(() => {
      if (videoElement.current?.ended) {
        setTimeout(() => {
          onSplashEnded();
        }, 900);
      }
    }, 100);
  }, [onSplashEnded]);

  return (
    <div className="absolute h-screen w-full select-none overflow-hidden bg-black">
      <video
        ref={videoElement}
        className="my-auto h-full w-full"
        autoPlay
        muted
        playsInline
        src="/pre_SplashLogo.mp4"
        onClick={() => {
          onSplashEnded();
        }}
        onError={() => {
          onSplashEnded();
        }}
      ></video>
    </div>
  );
}

function Layout({ children, withOverflowHidden, withSplash }: LayoutProps) {
  const [onSplash, setOnSplash] = useState(!!withSplash);
  const [hideSplashPaths, setHideSplashPaths] = useState(!onSplash);

  const upsideOffset = -40;
  const downsideOffset = -upsideOffset;
  const [nextRedIsUpside, setNextRedIsUpside] = useState(false);

  const rightOver = `polygon(${100 + 100}% ${0 + 100}%, ${200 + 100}% ${100 + 100}%, ${100 + 100}% ${200 + 100}%, ${0 + 100}% ${100 + 100}%)`;
  const leftOver = `polygon(${0 - 100}% ${-100 - 100}%, ${100 - 100}% ${0 - 100}%, ${0 - 100}% ${100 - 100}%, ${-100 - 100}% ${0 - 100}%)`;

  const leftHomePosition = `polygon(${0 + upsideOffset}% ${-100 + upsideOffset}%, ${100 + upsideOffset}% ${0 + upsideOffset}%, ${0 + upsideOffset}% ${100 + upsideOffset}%, ${
    -100 + upsideOffset
  }% ${0 + upsideOffset}%)`;
  const rightHomePosition = `polygon(${100 + downsideOffset}% ${0 + downsideOffset}%, ${200 + downsideOffset}% ${100 + downsideOffset}%, ${100 + downsideOffset}% ${
    200 + downsideOffset
  }%, ${0 + downsideOffset}% ${100 + downsideOffset}%)`;

  const leftClosePosition = `polygon(${100}% ${0}%, ${200}% ${100}%, ${100}% ${200}%, ${0}% ${100}%)`;
  const rightClosePosition = `polygon(${0}% ${-100}%, ${100}% ${0}%, ${0}% ${100}%, ${-100}% ${0}%)`;

  const [splashRedPath, splashRedApi] = useSpring(() => ({
    from: {
      clipPath: rightOver
    }
  }));
  const [splashBluePath, splashBlueApi] = useSpring(() => ({
    from: {
      clipPath: leftOver
    }
  }));

  // TODO: どうにか画面の比率から角度を計算して、それを使ってパスを作るようにしたい
  const [redPath, redApi] = useSpring(() => ({
    from: {
      clipPath: leftHomePosition
    }
  }));
  const [bluePath, blueApi] = useSpring(() => ({
    from: {
      clipPath: rightHomePosition
    }
  }));

  const fromSplash = async () => {
    setTimeout(() => {
      setOnSplash(false);
    }, 200);
    splashRedApi.start({
      clipPath: leftHomePosition
    });
    await splashBlueApi.start({
      clipPath: rightHomePosition
    })[0];
    setHideSplashPaths(true);
  };

  const router = useRouter();

  useEffect(() => {
    if (router) {
      const handleRouteChangeStart = (url: string, { shallow }: { shallow: boolean }) => {
        const newState = !nextRedIsUpside;
        setNextRedIsUpside(newState);
        redApi.start({
          to: {
            clipPath: newState ? leftClosePosition : rightClosePosition
          }
        });
        blueApi.start({
          to: {
            clipPath: newState ? rightClosePosition : leftClosePosition
          }
        });
      };
      const handleRouteChangeComplete = (url: string, { shallow }: { shallow: boolean }) => {
        redApi.stop();
        redApi.start({
          to: {
            clipPath: nextRedIsUpside ? rightHomePosition : leftHomePosition
          }
        });
        blueApi.stop();
        blueApi.start({
          to: {
            clipPath: nextRedIsUpside ? leftHomePosition : rightHomePosition
          }
        });
      };
      router.events.on('routeChangeStart', handleRouteChangeStart);
      router.events.on('routeChangeComplete', handleRouteChangeComplete);
      router.events.on('routeChangeError', handleRouteChangeComplete);
      return () => {
        router.events.off('routeChangeStart', handleRouteChangeStart);
        router.events.off('routeChangeComplete', handleRouteChangeComplete);
        router.events.off('routeChangeError', handleRouteChangeComplete);
      };
    }
  }, [blueApi, downsideOffset, redApi, upsideOffset, router, nextRedIsUpside, leftClosePosition, rightClosePosition, rightHomePosition, leftHomePosition]);

  return (
    <>
      <div className={classNames({ hidden: !onSplash })}>
        <Splash
          onSplashEnded={() => {
            setTimeout(async () => {
              await fromSplash();
            }, 100);
          }}
        />
      </div>
      <div
        className={classNames('grid', 'w-full', { 'overflow-hidden': onSplash })}
        style={{
          gridTemplateRows: 'auto auto 1fr',
          gridTemplateColumns: '100%'
        }}
      >
        <header className={classNames('sticky', 'top-0', 'z-50', { invisible: onSplash })}>
          <MenuBar />
        </header>
        <div className="pt-16"></div>
        <main className={classNames(['w-full', 'h-full', { invisible: onSplash, ['-z-50']: onSplash }])} data-testid="children">
          {children}
        </main>
      </div>
      <div className="pointer-events-none fixed inset-0">
        <div
          className="grid min-h-screen w-full justify-center"
          style={{
            gridTemplateRows: 'auto 1fr',
            gridTemplateColumns: '100%'
          }}
        >
          {/* 0pxにすると一番上からやってくる */}
          <div className={onSplash ? 'h-[0px]' : 'h-[74px]'}></div>
          <div className="overflow-hidden">
            <animated.div className={classNames('absolute', 'h-full', 'w-full', 'bg-mdmBlue', { hidden: hideSplashPaths })} style={{ ...splashBluePath }}></animated.div>
            <animated.div className={classNames('h-full', 'w-full', 'bg-mdmBlue', { invisible: onSplash })} style={{ ...bluePath }}></animated.div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none fixed inset-0">
        <div
          className="grid min-h-screen w-full justify-center"
          style={{
            gridTemplateRows: 'auto 1fr',
            gridTemplateColumns: '100%'
          }}
        >
          <div className={onSplash ? 'h-[0px]' : 'h-[74px]'}></div>
          <div className="overflow-hidden">
            <animated.div className={classNames('absolute', 'h-full', 'w-full', 'bg-mdmRed', { hidden: hideSplashPaths })} style={{ ...splashRedPath }}></animated.div>
            <animated.div className={classNames('h-full', 'w-full', 'bg-mdmRed', { invisible: onSplash })} style={{ ...redPath }}></animated.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
