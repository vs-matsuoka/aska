import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSpring, animated, easings } from 'react-spring';
import Background from 'components/Background';
import SpResponsiveImage from 'components/SpResponsiveImage';
import useModal from 'hooks/useModal';

type SpMenuItemProps = {
  src: string;
  alt: string;
  path: string;
  onClose: () => void;
};

function SpMenuItem({ src, alt, path, onClose }: SpMenuItemProps) {
  const router = useRouter();
  if (router.pathname == path) {
    return (
      <a
        href={path}
        onClick={(e) => {
          e.preventDefault();
          onClose();
        }}
      >
        <SpResponsiveImage alt={alt} src={src} className="relative" width={686} height={100} quality={90} />
      </a>
    );
  } else {
    return (
      <Link href={path} passHref>
        <SpResponsiveImage alt={alt} src={src} className="relative" width={686} height={100} quality={90} />
      </Link>
    );
  }
}

const SpMenu = () => {
  const { isOpen, onOpen: onModalOpen, onClose: onModalClose } = useModal();
  const [menuStyle, menuStyleApi] = useSpring(() => ({
    from: {
      transform: 'translate(-100vw)'
    },
    config: { duration: 250, easing: easings.easeOutCubic },
    events: {
      onResolve: () => {
        onModalClose();
      }
    }
  }));
  const onOpen = () => {
    menuStyleApi.start({
      to: {
        transform: 'translate(0vw)'
      }
    });
    onModalOpen();
  };
  const onClose = () => {
    menuStyleApi.start({
      to: {
        transform: 'translate(-100vw)'
      }
    });
  };

  return (
    <>
      {/* sp:bottom-[32px] sp:right-[32px] */}
      <div className="fixed bottom-[4.266666666666667vw] right-[4.266666666666667vw] cursor-pointer" onClick={onOpen}>
        <SpResponsiveImage alt="メニュー" src="/SP/UnderMenu/s01_UnderMenu_CircleIcon.png" className="relative" width={95} height={95} quality={90} />
      </div>
      {/* sp:bottom-[-2px] sp:left-[-8px] */}
      {/* <div className={`${isOpen ? '' : 'fixed bottom-[-0.26666667vw] left-[-1.06666667vw]'}`}> */}
      <div className="fixed bottom-[-0.26666667vw] left-[-1.06666667vw]">
        <div className="relative">
          <SpResponsiveImage alt="base" src="/SP/UnderMenu/s01_UnderMenu_LeftBase.png" className="" width={350} height={150} />
          {/* sp:bottom-[16px] sp:left-[21px] */}
          <div className="absolute bottom-[2.13333333vw] left-[2.8vw]">
            <Link href="/sp" passHref>
              <SpResponsiveImage alt="トップページへ" src="/SP/UnderMenu/s01_UnderMenu_Logo.png" className="" width={270} height={135} />
            </Link>
          </div>
        </div>
      </div>

      {/* メニューモーダル */}
      <animated.div className={`fixed inset-0 ${isOpen ? '' : 'invisible select-none'}`} style={menuStyle}>
        <Background src="/SP/Menu/s00_Menu_BG.png" />
        {/* sp:space-y-[16px] sp:pt-[32px] */}
        <div className="grid justify-items-center space-y-[2.133333333333333vw] pt-[4.26666667vw]">
          <Link href="/sp" passHref>
            <SpResponsiveImage alt="トップ" src="/SP/Menu/s00_Button_01_Top.png" className="relative" width={686} height={100} />
          </Link>
          <SpMenuItem src="/SP/Menu/s00_Button_02_Concept.png" alt="概要" path="/sp/about" onClose={onClose} />
          <SpMenuItem src="/SP/Menu/s00_Button_03_Entries.png" alt="出場者" path="/sp/entries" onClose={onClose} />
          <SpMenuItem src="/SP/Menu/s00_Button_04_Unei.png" alt="コンビ" path="/sp/pairs" onClose={onClose} />
          <SpMenuItem src="/SP/Menu/s00_Button_05_Movie.png" alt="運営" path="/sp/team" onClose={onClose} />
          <SpMenuItem src="/SP/Menu/s00_Button_06_Secret.png" alt="ムービー" path="/sp/movies" onClose={onClose} />
        </div>
        {/* sp:mt-[20px] */}
        <div className="mt-[2.6666667vw] flex justify-center">
          <SpResponsiveImage alt="音MAD DREAM MATCH -天-" src="/SP/Menu/s00_Menu_Logo.png" className="relative" width={250} height={130} quality={90} />
        </div>
        {/* sp:bottom-[32px] sp:right-[32px] */}
        <div className="fixed bottom-[4.266666666666667vw] right-[4.266666666666667vw] cursor-pointer" onClick={onClose}>
          <SpResponsiveImage alt="閉じる" src="/SP/Menu/s00_Button_21_Close.png" className="" width={95} height={95} quality={90} />
        </div>
      </animated.div>
    </>
  );
};

export default SpMenu;
