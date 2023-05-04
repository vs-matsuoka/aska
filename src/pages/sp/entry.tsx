import Image, { ImageProps } from 'next/future/image';
import Link from 'next/link';
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

export default function Entries() {
  return (
    <>
      <Background src="/SP/Entry_Detail/s22_Entry_BG.png" />
      <div className="relative top-[10.4vw] sp:top-[78px]">
        <ResponsiveImage alt="kirinuki" src="/SP/Entry_Detail/Kirinuki/s22_Entry_Kirinuki_01.png" className="" width={750} height={800} />
        <div className="absolute top-[5.2vw] right-[4.13333333vw] flex justify-center gap-[1.86666667vw] sp:top-[39px] sp:right-[31px] sp:gap-[14px]">
          <ResponsiveImage alt="niconico" src="/SP/Entry_Detail/s22_Button_11_SNS_NicoNico.png" className="relative" width={66} height={66} />
          <ResponsiveImage alt="youtube" src="/SP/Entry_Detail/s22_Button_12_SNS_Youtube.png" className="relative" width={66} height={66} />
          <ResponsiveImage alt="twitter" src="/SP/Entry_Detail/s22_Button_13_SNS_Twitter.png" className="relative" width={66} height={66} />
        </div>
        <div className="absolute top-[89.46666667vw] sp:top-[671px]">
          <div className="relative">
            <ResponsiveImage alt="base" src="/SP/Entry_Detail/s22_Entry_Base.png" className="" width={750} height={500} />
            <div className="absolute top-[4.26666667vw] sp:top-[32px]">
              <ResponsiveImage alt="name" src="/SP/Entry_Detail/Name/s22_Entry_name_01.png" className="relative" width={750} height={250} />
            </div>
            <div className="absolute top-[24.5333333vw] right-[2.26666667vw] sp:top-[184px] sp:right-[17px]">
              <ResponsiveImage alt="info" src="/SP/Entry_Detail/Info/s22_Entry_info_01.png" className="relative" width={600} height={250} />
            </div>
          </div>
        </div>
      </div>
      <SpMenu />
    </>
  );
}
