import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { easings, useSpring, animated } from 'react-spring';

interface SlideInProps {
  duration?: number;
  right?: boolean;
  setLeaving?: (leaving: boolean) => void;
}

const useSlideIn = ({ duration = 500 }: SlideInProps) => {
  const [styles, api] = useSpring(() => ({
    from: { width: '0%' },
    config: {
      duration,
      easing: easings.easeInOutSine
    }
    // onRest: () => {}
  }));
  const trigger = useCallback(() => {
    return api.start({
      width: '100%'
    });
  }, [api]);
  const reset = useCallback(() => {
    return api.start({
      width: '0%'
    });
  }, [api]);
  return [styles, trigger, reset] as [typeof styles, typeof trigger, typeof reset];
};

const MenuButton = ({ href, src, overlaySrc, alt, alwaysOn }: { href: string; src: string; overlaySrc: string; alt: string; alwaysOn?: boolean }) => {
  const [stickRight, setStickRight] = useState(false);
  const [styles, trigger, reset] = useSlideIn({ duration: 100 });

  return (
    <Link href={href} passHref>
      <div
        className="relative"
        onMouseEnter={async () => {
          setStickRight(false);
          await trigger()[0];
          setStickRight(true);
        }}
        onMouseLeave={async () => {
          setStickRight(true);
          await reset()[0];
          setStickRight(false);
        }}
      >
        <div className="relative h-full" style={{ width: 150, height: 50 }}>
          <Image src={src} alt={alt} className="max-w-none" width={150} height={50} />
          {alwaysOn ? <Image src={overlaySrc} alt={alt} className="absolute top-0 max-w-none" width={150} height={50} /> : null}
          <animated.div style={{ ...styles, ...(stickRight ? { right: '0' } : {}) }} className="absolute top-0 h-full overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={overlaySrc} alt={alt} style={{ height: 50, ...(stickRight ? { right: '0' } : {}) }} className="absolute max-w-none" width={150} height={50} />
          </animated.div>
        </div>
      </div>
    </Link>
  );
};

const MenuBar = () => {
  const router = useRouter();
  return (
    <div className="relative">
      <div className="absolute top-[-113px] h-[190px] w-screen">
        <Image
          src="/MenuBar/00_Menu_Base.png"
          alt="MenuBar Base"
          className="h-[190px] select-none"
          fill
          style={{
            objectFit: 'fill'
          }}
        />
      </div>
      <div className="absolute inset-1/2 top-[36px] flex flex-row items-center justify-center space-x-[37px]">
        <MenuButton href="/" src="/MenuBar/00_Menu_Text_01.png" overlaySrc="/MenuBar/00_Menu_Text_Overlay_01.png" alt="top" alwaysOn={router.pathname === '/'} />
        <MenuButton href="/about" src="/MenuBar/00_Menu_Text_02.png" overlaySrc="/MenuBar/00_Menu_Text_Overlay_02.png" alt="top" alwaysOn={router.pathname === '/about'} />
        <MenuButton
          href="/entries"
          src="/MenuBar/00_Menu_Text_03.png"
          overlaySrc="/MenuBar/00_Menu_Text_Overlay_03.png"
          alt="top"
          alwaysOn={router.pathname === '/entries' || router.pathname === '/pairs'}
        />
        <MenuButton href="/movies" src="/MenuBar/00_Menu_Text_04.png" overlaySrc="/MenuBar/00_Menu_Text_Overlay_04.png" alt="top" alwaysOn={router.pathname === '/movies'} />
        <MenuButton href="/team" src="/MenuBar/00_Menu_Text_05.png" overlaySrc="/MenuBar/00_Menu_Text_Overlay_05.png" alt="top" alwaysOn={router.pathname === '/team'} />
      </div>
    </div>
  );
};

export default MenuBar;
