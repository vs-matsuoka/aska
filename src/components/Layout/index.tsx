import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import MenuBar from 'components/MenuBar';

type LayoutProps = {
  children?: React.ReactNode;
  withVignette?: boolean;
  withOverflowHidden?: boolean;
};

function Layout({ children, withOverflowHidden }: LayoutProps) {
  const upsideOffset = -40;
  const downsideOffset = -upsideOffset;
  const [redIsUpside, setRedIsUpside] = useState(true);
  // TODO: どうにか画面の比率から角度を計算して、それを使ってパスを作るようにしたい
  const [redPath, redApi] = useSpring(() => ({
    from: {
      clipPath: `polygon(${0 + upsideOffset}% ${-100 + upsideOffset}%, ${100 + upsideOffset}% ${0 + upsideOffset}%, ${0 + upsideOffset}% ${100 + upsideOffset}%, ${
        -100 + upsideOffset
      }% ${0 + upsideOffset}%)`
    }
    // to: { clipPath: `polygon(${100 + blueOffset}% ${0 + blueOffset}%, ${200 + blueOffset}% ${100 + blueOffset}%, ${100 + blueOffset}% ${200 + blueOffset}%, ${0 + blueOffset}% ${100 + blueOffset}%)` },
  }));

  const [bluePath, blueApi] = useSpring(() => ({
    from: {
      clipPath: `polygon(${100 + downsideOffset}% ${0 + downsideOffset}%, ${200 + downsideOffset}% ${100 + downsideOffset}%, ${100 + downsideOffset}% ${200 + downsideOffset}%, ${
        0 + downsideOffset
      }% ${100 + downsideOffset}%)`
    }
    // to: { clipPath: `polygon(${0 + redOffset}% ${-100 + redOffset}%, ${100 + redOffset}% ${0 + redOffset}%, ${0 + redOffset}% ${100 + redOffset}%, ${-100 + redOffset}% ${0 + redOffset}%)` },
  }));

  const router = useRouter();

  useEffect(() => {
    if (router) {
      const handleRouteChangeStart = (url: string, { shallow }: { shallow: boolean }) => {
        console.log(`App is changing to ${url} ${shallow ? 'with' : 'without'} shallow routing`);
        redApi.start({
          to: {
            clipPath: redIsUpside
              ? `polygon(${100}% ${0}%, ${200}% ${100}%, ${100}% ${200}%, ${0}% ${100}%)`
              : `polygon(${0}% ${-100}%, ${100}% ${0}%, ${0}% ${100}%, ${-100}% ${0}%)`
          }
        });
        blueApi.start({
          to: {
            clipPath: redIsUpside
              ? `polygon(${0}% ${-100}%, ${100}% ${0}%, ${0}% ${100}%, ${-100}% ${0}%)`
              : `polygon(${100}% ${0}%, ${200}% ${100}%, ${100}% ${200}%, ${0}% ${100}%)`
          }
        });
      };
      const handleRouteChangeComplete = (url: string, { shallow }: { shallow: boolean }) => {
        console.log(`App is changing to ${url} ${shallow ? 'with' : 'without'} shallow routing`);
        redApi.start({
          to: {
            clipPath: redIsUpside
              ? `polygon(${100 + downsideOffset}% ${0 + downsideOffset}%, ${200 + downsideOffset}% ${100 + downsideOffset}%, ${100 + downsideOffset}% ${200 + downsideOffset}%, ${
                  0 + downsideOffset
                }% ${100 + downsideOffset}%)`
              : `polygon(${0 + upsideOffset}% ${-100 + upsideOffset}%, ${100 + upsideOffset}% ${0 + upsideOffset}%, ${0 + upsideOffset}% ${100 + upsideOffset}%, ${
                  -100 + upsideOffset
                }% ${0 + upsideOffset}%)`
          }
        });
        blueApi.start({
          to: {
            clipPath: redIsUpside
              ? `polygon(${0 + upsideOffset}% ${-100 + upsideOffset}%, ${100 + upsideOffset}% ${0 + upsideOffset}%, ${0 + upsideOffset}% ${100 + upsideOffset}%, ${
                  -100 + upsideOffset
                }% ${0 + upsideOffset}%)`
              : `polygon(${100 + downsideOffset}% ${0 + downsideOffset}%, ${200 + downsideOffset}% ${100 + downsideOffset}%, ${100 + downsideOffset}% ${200 + downsideOffset}%, ${
                  0 + downsideOffset
                }% ${100 + downsideOffset}%)`
          }
        });
      };
      router.events.on('routeChangeStart', handleRouteChangeStart);
      router.events.on('routeChangeComplete', handleRouteChangeComplete);
      return () => {
        setRedIsUpside((r) => !r);
        router.events.off('routeChangeStart', handleRouteChangeStart);
        router.events.off('routeChangeComplete', handleRouteChangeComplete);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blueApi, downsideOffset, redApi, upsideOffset, router]);

  return (
    <div
      className={`grid min-h-screen w-full justify-center ${withOverflowHidden ? 'overflow-hidden' : ''}`}
      // <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      style={{
        gridTemplateRows: 'auto 1fr',
        gridTemplateColumns: '100%'
      }}
    >
      <div className="pt-20"></div>
      <div className="relative flex items-center justify-center" data-testid="children">
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
          <div className="h-[74px]"></div>
          <animated.div className="h-full w-screen bg-mdmBlue" style={{ ...bluePath }}></animated.div>
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
          <div className="h-[74px]"></div>
          <animated.div className="h-full w-screen bg-mdmRed" style={{ ...redPath }}></animated.div>
        </div>
      </div>
      <div className="fixed w-full">
        <MenuBar />
      </div>
    </div>
  );
}

export default Layout;
