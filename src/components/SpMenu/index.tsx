import Link from 'next/link';
import { useRouter } from 'next/router';
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
    return <SpResponsiveImage alt={alt} src={src} className="relative" width={686} height={100} onClick={onClose} />;
  } else {
    return (
      <Link href={path} passHref>
        <SpResponsiveImage alt={alt} src={src} className="relative" width={686} height={100} />
      </Link>
    );
  }
}

const SpMenu = () => {
  const { isOpen, onOpen, onClose } = useModal();

  return (
    <>
      {/* sp:bottom-[32px] sp:right-[32px] */}
      <div className="fixed bottom-[4.266666666666667vw] right-[4.266666666666667vw]" onClick={onOpen}>
        <SpResponsiveImage alt="menu" src="/SP/UnderMenu/s01_UnderMenu_CircleIcon.png" className="relative" width={95} height={95} />
      </div>
      {/* sp:bottom-[-2px] sp:left-[-8px] */}
      {/* <div className={`${isOpen ? '' : 'fixed bottom-[-0.26666667vw] left-[-1.06666667vw]'}`}> */}
      <div className="fixed bottom-[-0.26666667vw] left-[-1.06666667vw]">
        <div className="relative">
          <SpResponsiveImage alt="base" src="/SP/UnderMenu/s01_UnderMenu_LeftBase.png" className="" width={350} height={150} />
          {/* sp:bottom-[16px] sp:left-[21px] */}
          <div className="absolute bottom-[2.13333333vw] left-[2.8vw]">
            <Link href="/sp" passHref>
              <SpResponsiveImage alt="logo" src="/SP/UnderMenu/s01_UnderMenu_Logo.png" className="" width={270} height={135} />
            </Link>
          </div>
        </div>
      </div>

      {/* メニューモーダル */}
      <div className={`${isOpen ? 'fixed inset-0' : 'invisible fixed'}`}>
        <Background src="/SP/Menu/s00_Menu_BG.png" />
        {/* sp:space-y-[16px] sp:pt-[32px] */}
        <div className="grid justify-items-center space-y-[2.133333333333333vw] pt-[4.26666667vw]">
          <Link href="/sp" passHref>
            <SpResponsiveImage alt="top" src="/SP/Menu/s00_Button_01_Top.png" className="relative" width={686} height={100} />
          </Link>
          <SpMenuItem src="/SP/Menu/s00_Button_02_Concept.png" alt="concept" path="/sp/about" onClose={onClose} />
          <SpMenuItem src="/SP/Menu/s00_Button_03_Entries.png" alt="entries" path="/sp/entries" onClose={onClose} />
          <SpMenuItem src="/SP/Menu/s00_Button_04_Unei.png" alt="combi" path="/sp/pairs" onClose={onClose} />
          <SpMenuItem src="/SP/Menu/s00_Button_05_Movie.png" alt="unei" path="/sp/team" onClose={onClose} />
          <SpMenuItem src="/SP/Menu/s00_Button_06_Secret.png" alt="movie" path="/sp/movies" onClose={onClose} />
        </div>
        {/* sp:mt-[33px] sp:space-x-[33px] */}
        <div className="mt-[4.4vw] flex justify-center space-x-[4.4vw]">{/* メニューの下に何か配置したい場合ここに */}</div>
        {/* sp:bottom-[32px] sp:right-[32px] */}
        <div className="fixed bottom-[4.266666666666667vw] right-[4.266666666666667vw]" onClick={onClose}>
          <SpResponsiveImage alt="close" src="/SP/Menu/s00_Button_21_Close.png" className="" width={95} height={95} />
        </div>
      </div>
    </>
  );
};

export default SpMenu;
