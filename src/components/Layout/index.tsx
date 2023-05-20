import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import MenuBar from 'components/MenuBar';

type LayoutProps = {
  children?: React.ReactNode;
  withVignette?: boolean;
  withOverflowHidden?: boolean;
  withSplash?: boolean;
};

function Splash({ onSplashEnded }: { onSplashEnded: () => void }) {
  return (
    <div className="absolute h-screen w-full select-none overflow-hidden bg-black">
      <video
        className="my-auto h-full w-full"
        autoPlay
        muted
        playsInline
        src="/pre_SplashLogo.mp4"
        onPlay={() => {
          setTimeout(() => {
            onSplashEnded();
          }, 1400);
        }}
        onEnded={() => {
          setTimeout(() => {
            onSplashEnded();
          }, 900);
        }}
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

  useEffect(() => {
    if (router) {
      if (!hideSplashPaths && withSplash) {
        document.querySelector('body')?.classList.add('no-scrollbar');
      } else {
        document.querySelector('body')?.classList.remove('no-scrollbar');
      }
    }
  }, [router, hideSplashPaths, onSplash, withSplash]);

  return (
    <>
      <div className={onSplash ? '' : 'hidden'}>
        <Splash
          onSplashEnded={() => {
            setTimeout(async () => {
              await fromSplash();
            }, 100);
          }}
        />
      </div>
      <div
        className="grid min-h-screen w-full justify-center overflow-hidden"
        // <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
        style={{
          gridTemplateRows: 'auto 1fr',
          gridTemplateColumns: '100%'
        }}
      >
        <div className="pt-16"></div>
        <div className={`relative flex items-center justify-center ${onSplash ? 'invisible -z-50' : ''}`} data-testid="children">
          {children}
        </div>
        <div className="absolute"></div>
        <div className="pointer-events-none absolute">
          <div
            className="pointer-events-none grid min-h-screen w-full justify-center"
            style={{
              gridTemplateRows: 'auto 1fr',
              gridTemplateColumns: '100%'
            }}
          >
            {/* 0pxにすると一番上からやってくる */}
            <div className={onSplash ? 'h-[0px]' : 'h-[74px]'}></div>
            <div className="overflow-hidden">
              <animated.div className={`absolute h-full w-screen bg-mdmBlue ${hideSplashPaths ? 'hidden' : ''}`} style={{ ...splashBluePath }}></animated.div>
              <animated.div className={`h-full w-screen bg-mdmBlue ${onSplash ? 'invisible' : ''}`} style={{ ...bluePath }}></animated.div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute">
          <div
            className="pointer-events-none grid min-h-screen w-full justify-center"
            style={{
              gridTemplateRows: 'auto 1fr',
              gridTemplateColumns: '100%'
            }}
          >
            <div className={onSplash ? 'h-[0px]' : 'h-[74px]'}></div>
            <div className="overflow-hidden">
              <animated.div className={`absolute h-full w-screen bg-mdmRed ${hideSplashPaths ? 'hidden' : ''}`} style={{ ...splashRedPath }}></animated.div>
              <animated.div className={`h-full w-screen bg-mdmRed ${onSplash ? 'invisible' : ''}`} style={{ ...redPath }}></animated.div>
            </div>
          </div>
        </div>
        <div className={`fixed w-full ${onSplash ? 'invisible' : ''}`}>
          <MenuBar />
        </div>
      </div>
    </>
  );
}

export default Layout;
