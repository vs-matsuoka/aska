import Image, { ImageProps } from 'next/future/image';
import { useMediaQuery } from 'react-responsive';
import Background from 'components/Background';

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
      <Image
        src={src}
        alt={alt}
        className="max-w-none"
        fill
        {...imageProps}
      ></Image>
    </div>
  );
}

export default function Top() {
  return (
    <div className="">
      <Background src="/SP/Top/s11_Top_BG.png" />
      <div className="absolute">
        <div className="relative w-screen overflow-hidden">
          <div className="absolute top-[5.3333333333vw] left-[-51.7333333333vw] sp:top-[40px] sp:left-[-388px]">
            <ResponsiveImage
              src="/SP/Top/s11_Top_KeyVisual_02.png"
              alt="zeus"
              className="relative"
              width={1050}
              height={1050}
            />
          </div>
          <div className="absolute top-[15.4666666667vw] right-[62.6666666667vw] sp:top-[116px] sp:right-[470px]">
            <ResponsiveImage
              src="/SP/Top/s11_Top_KeyVisual_01.png"
              alt="amatelas"
              className="relative"
              width={1050}
              height={1050}
            />
          </div>
        </div>
      </div>
      <Background src="/SP/Top/s11_Top_GradOverlay.png" />
      <div className="">
        <div className="grid justify-items-center">
          <div className="absolute">
            <ResponsiveImage
              src="/SP/Top/s11_Top_Logo.png"
              alt="logo"
              className="relative"
              width={750}
              height={450}
            />
          </div>
          <div className="mt-[55.0666666667vw] sp:mt-[413px]">
            <ResponsiveImage
              src="/SP/Top/s11_Top_Text_01_Kaisai.png"
              alt="data"
              className="relative"
              width={330}
              height={250}
            />
          </div>
        </div>

        <div className="top-0 mt-[0.4vw] flex flex-col items-center space-y-[3.2vw] sp:mt-[3px] sp:space-y-[24px]">
          <ResponsiveImage
            src="/SP/Top/s11_Top_Button_01_SNS_NicoNico.png"
            alt="niconico"
            className="relative"
            width={380}
            height={48}
          />
          <ResponsiveImage
            src="/SP/Top/s11_Top_Button_02_SNS_YouTube.png"
            alt="youtube"
            className="relative"
            width={380}
            height={48}
          />
          <ResponsiveImage
            src="/SP/Top/s11_Top_Button_03_SNS_Twitter.png"
            alt="twitter"
            className="relative"
            width={380}
            height={48}
          />
        </div>
        <div className="mx-4 mt-[14.1333333333vw] grid justify-items-center space-y-[2.133333333333333px] sp:mt-[106px] sp:space-y-[16px]">
          <div className="flex gap-[16px]">
            <ResponsiveImage
              src="/SP/Top/s11_Top_Button_11_Concept.png"
              alt="entry"
              className="relative"
              width={335}
              height={192}
            />
            <ResponsiveImage
              src="/SP/Top/s11_Top_Button_12_Entries.png"
              alt="combi"
              className="relative"
              width={335}
              height={192}
            />
          </div>
          <div className="top-[1.333333333333333vw] flex gap-[2.133333333333333vw] sp:top-[10px] sp:gap-[16px]">
            <ResponsiveImage
              src="/SP/Top/s11_Top_Button_13_Unei.png"
              alt="overview"
              className="relative"
              width={218}
              height={128}
            />
            <ResponsiveImage
              src="/SP/Top/s11_Top_Button_14_Movie.png"
              alt="unei"
              className="relative"
              width={218}
              height={128}
            />
            <ResponsiveImage
              src="/SP/Top/s11_Top_Button_15_Secret.png"
              alt="movie"
              className="relative"
              width={218}
              height={128}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
