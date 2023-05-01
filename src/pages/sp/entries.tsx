import Image, { ImageProps } from 'next/future/image';
import { useMediaQuery } from 'react-responsive';
import Background from 'components/Background';
import SpMenu from 'components/SpMenu';

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

const contestantImageColumns = [
  '/SP/Entry/Banner/s21_EntryIndex_Banner_01.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_02.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_03.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_04.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_05.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_06.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_07.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_08.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_09.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_10.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_11.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_12.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_13.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_14.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_15.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_16.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_17.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_18.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_19.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_20.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_21.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_22.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_23.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_24.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_25.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_26.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_27.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_28.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_29.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_30.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_31.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_32.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_33.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_34.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_35.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_36.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_37.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_38.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_39.png',
  '/SP/Entry/Banner/s21_EntryIndex_Banner_41_secret.png'
];

export default function Entries() {
  return (
    <>
      <Background src="/SP/Entry/s21_Entry_BG.png" />

      <div className="grid justify-items-center space-y-[1.2vw] pt-[18.53333333vw] sp:space-y-[9px] sp:pt-[139px]">
        {contestantImageColumns.map((column, index) => (
          // eslint-disable-next-line react/jsx-key
          <ResponsiveImage alt="banner" src={column} className="relative" width={750} height={127} />
        ))}
      </div>
      <div className="mt-[16.6666667vw] sp:mt-[125px]">&nbsp;</div>

      <div className="fixed top-0 left-1/2 -translate-x-1/2">
        <div className="relative right-[0.4vw] sp:right-[0px]">
          <ResponsiveImage alt="topBanner" src="/SP/Entry/s21_EntryIndex_TopBanner.png" className="" width={750} height={130} />
          <div className="absolute top-0 right-[-0.66666667vw] sp:right-[-0px]">
            <ResponsiveImage alt="combiButton" src="/SP/Entry/s21_EntryIndex_TopText.png" className="" width={315} height={130} />
          </div>
        </div>
      </div>
      <SpMenu />
    </>
  );
}
