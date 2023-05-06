import Image, { ImageProps } from 'next/future/image';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import Background from 'components/Background';
import useModal from 'hooks/useModal';

function ResponsiveImage(
  props: Omit<ImageProps, 'fill' | 'width' | 'height'> & {
    width: number;
    height: number;
  }
) {
  const { width, height, src, alt, className, ...imageProps } = props;
  const standard = 750;
  const isNarrow = useMediaQuery({ query: '(min-width: 750px)' });

  return (
    <div
      className={className}
      style={{
        width: isNarrow ? `${width}px` : `${(width / standard) * 100}vw`,
        height: isNarrow ? `${height}px` : `${(height / standard) * 100}vw`
      }}
    >
      <Image src={src} alt={alt} className="max-w-none" fill {...imageProps}></Image>
    </div>
  );
}

const SpMenu = () => {
  const { isOpen, onOpen, onClose } = useModal();

  return (
    <div className={`${isOpen ? 'fixed inset-0' : 'fixed'}`}>
      <div className="fixed bottom-[4.266666666666667vw] right-[4.266666666666667vw] sp:bottom-[32px] sp:right-[32px]" onClick={onOpen}>
        <ResponsiveImage alt="menu" src="/SP/UnderMenu/s01_UnderMenu_CircleIcon.png" className="relative" width={95} height={95} />
      </div>
      <div className="fixed bottom-[-0.26666667vw] left-[-1.06666667vw] sp:bottom-[-2px] sp:left-[-8px]">
        <div className="relative">
          <ResponsiveImage alt="base" src="/SP/UnderMenu/s01_UnderMenu_LeftBase.png" className="" width={350} height={150} />
          <div className="absolute bottom-[2.13333333vw] left-[2.8vw] sp:bottom-[16px] sp:left-[21px]">
            <ResponsiveImage alt="logo" src="/SP/UnderMenu/s01_UnderMenu_Logo.png" className="" width={270} height={135} />
          </div>
        </div>
      </div>

      {/* メニューモーダル */}
      <div className={`${isOpen ? '' : 'invisible'}`}>
        <Background src="/SP/Menu/s00_Menu_BG.png" />
        <div className="grid justify-items-center space-y-[2.133333333333333vw] pt-[4.26666667vw] sp:space-y-[16px] sp:pt-[32px]">
          <Link href="/sp" passHref>
            <a>
              <ResponsiveImage alt="top" src="/SP/Menu/s00_Button_01_Top.png" className="relative" width={686} height={100} />
            </a>
          </Link>
          <ResponsiveImage alt="concept" src="/SP/Menu/s00_Button_02_Concept.png" className="relative" width={686} height={100} />
          <Link href="/sp/entries" passHref>
            <a>
              <ResponsiveImage alt="entries" src="/SP/Menu/s00_Button_03_Entries.png" className="relative" width={686} height={100} />
            </a>
          </Link>
          <Link href="/sp/pairs" passHref>
            <a>
              <ResponsiveImage alt="combi" src="/SP/Menu/s00_Button_04_Unei.png" className="relative" width={686} height={100} />
            </a>
          </Link>
          <ResponsiveImage alt="unei" src="/SP/Menu/s00_Button_05_Movie.png" className="relative" width={686} height={100} />
          <ResponsiveImage alt="movie" src="/SP/Menu/s00_Button_06_Secret.png" className="relative" width={686} height={100} />
        </div>
        <div className="mt-[4.4vw] flex justify-center space-x-[4.4vw] sp:mt-[33px] sp:space-x-[33px]">
          <ResponsiveImage alt="niconico" src="/SP/Menu/s00_Button_11_SNS_NicoNico.png" className="relative" width={95} height={95} />
          <ResponsiveImage alt="youtube" src="/SP/Menu/s00_Button_12_SNS_Youtube.png" className="relative" width={95} height={95} />
          <ResponsiveImage alt="twitter" src="/SP/Menu/s00_Button_13_SNS_Twitter.png" className="relative" width={95} height={95} />
        </div>
        <div className="fixed bottom-[4.266666666666667vw] right-[4.266666666666667vw] sp:bottom-[32px] sp:right-[32px]" onClick={onClose}>
          <ResponsiveImage alt="close" src="/SP/Menu/s00_Button_21_Close.png" className="" width={95} height={95} />
        </div>
      </div>
    </div>
  );
};

export default SpMenu;
