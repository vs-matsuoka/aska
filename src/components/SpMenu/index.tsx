import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import Background from 'components/Background';
import SpResponsiveImage from 'components/SpResponsiveImage';
import useModal from 'hooks/useModal';

const SpMenu = () => {
  const { isOpen, onOpen, onClose } = useModal();

  return (
    <div className={`${isOpen ? 'fixed inset-0' : 'fixed'}`}>
      {/* sp:bottom-[32px] sp:right-[32px] */}
      <div className="fixed bottom-[4.266666666666667vw] right-[4.266666666666667vw]" onClick={onOpen}>
        <SpResponsiveImage alt="menu" src="/SP/UnderMenu/s01_UnderMenu_CircleIcon.png" className="relative" width={95} height={95} />
      </div>
      {/* sp:bottom-[-2px] sp:left-[-8px] */}
      <div className="fixed bottom-[-0.26666667vw] left-[-1.06666667vw]">
        <div className="relative">
          <SpResponsiveImage alt="base" src="/SP/UnderMenu/s01_UnderMenu_LeftBase.png" className="" width={350} height={150} />
          {/* sp:bottom-[16px] sp:left-[21px] */}
          <div className="absolute bottom-[2.13333333vw] left-[2.8vw]">
            <SpResponsiveImage alt="logo" src="/SP/UnderMenu/s01_UnderMenu_Logo.png" className="" width={270} height={135} />
          </div>
        </div>
      </div>

      {/* メニューモーダル */}
      <div className={`${isOpen ? '' : 'invisible'}`}>
        <Background src="/SP/Menu/s00_Menu_BG.png" />
        {/* sp:space-y-[16px] sp:pt-[32px] */}
        <div className="grid justify-items-center space-y-[2.133333333333333vw] pt-[4.26666667vw]">
          <Link href="/sp" passHref>
            <SpResponsiveImage alt="top" src="/SP/Menu/s00_Button_01_Top.png" className="relative" width={686} height={100} />
          </Link>
          <Link href="/sp/about" passHref>
            <SpResponsiveImage alt="concept" src="/SP/Menu/s00_Button_02_Concept.png" className="relative" width={686} height={100} />
          </Link>
          <Link href="/sp/entries" passHref>
            <SpResponsiveImage alt="entries" src="/SP/Menu/s00_Button_03_Entries.png" className="relative" width={686} height={100} />
          </Link>
          <Link href="/sp/pairs" passHref>
            <SpResponsiveImage alt="combi" src="/SP/Menu/s00_Button_04_Unei.png" className="relative" width={686} height={100} />
          </Link>
          <SpResponsiveImage alt="unei" src="/SP/Menu/s00_Button_05_Movie.png" className="relative" width={686} height={100} />
          <SpResponsiveImage alt="movie" src="/SP/Menu/s00_Button_06_Secret.png" className="relative" width={686} height={100} />
        </div>
        {/* sp:mt-[33px] sp:space-x-[33px] */}
        <div className="mt-[4.4vw] flex justify-center space-x-[4.4vw]">
          <a href="https://www.nicovideo.jp/user/78465303" target="_blank">
            <SpResponsiveImage alt="niconico" src="/SP/Menu/s00_Button_11_SNS_NicoNico.png" className="relative" width={95} height={95} />
          </a>
          <a href="https://www.youtube.com/@otoMDM" target="_blank">
            <SpResponsiveImage alt="youtube" src="/SP/Menu/s00_Button_12_SNS_Youtube.png" className="relative" width={95} height={95} />
          </a>
          <a href="https://twitter.com/otoMDM" target="_blank">
            <SpResponsiveImage alt="twitter" src="/SP/Menu/s00_Button_13_SNS_Twitter.png" className="relative" width={95} height={95} />
          </a>
        </div>
        {/* sp:bottom-[32px] sp:right-[32px] */}
        <div className="fixed bottom-[4.266666666666667vw] right-[4.266666666666667vw]" onClick={onClose}>
          <SpResponsiveImage alt="close" src="/SP/Menu/s00_Button_21_Close.png" className="" width={95} height={95} />
        </div>
      </div>
    </div>
  );
};

export default SpMenu;
