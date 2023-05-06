import Image, { ImageProps } from 'next/future/image';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import Background from 'components/Background';
import SpMenu from 'components/SpMenu';
import entries from 'const/entries';

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

export default function Entries() {
  return (
    <>
      <Background src="/SP/Entry/s21_Entry_BG.png" />

      <div className="grid justify-items-center space-y-[1.2vw] pt-[18.53333333vw] sp:space-y-[9px] sp:pt-[139px]">
        {entries.map((column, index) => (
          <Link href={'/sp/entries/' + (++index).toString()} key={index} passHref>
            <a>
              <ResponsiveImage alt="banner" src={column.spBannerSrc} className="relative" width={750} height={127} key={index} />
            </a>
          </Link>
        ))}
      </div>
      <div className="mt-[16.6666667vw] sp:mt-[125px]">&nbsp;</div>

      <div className="fixed top-0 left-1/2 -translate-x-1/2">
        <div className="relative right-[0.4vw] sp:right-[0px]">
          <ResponsiveImage alt="topBanner" src="/SP/Entry/s21_EntryIndex_TopBanner.png" className="" width={750} height={130} />
          <Link href="/sp/pairs" passHref>
            <a>
              <div className="absolute top-0 right-[-0.66666667vw] sp:right-[-0px]">
                <ResponsiveImage alt="combiButton" src="/SP/Entry/s21_EntryIndex_TopText.png" className="" width={315} height={130} />
              </div>
            </a>
          </Link>
        </div>
      </div>
      <SpMenu />
    </>
  );
}
