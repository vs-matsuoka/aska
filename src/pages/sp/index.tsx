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
    <>
      <Background src="/SP/Top/s11_Top_BG.png" />
      {/* <div className="absolute -top-6 flex flex-row justify-center space-x-[0px]">
        <div className="">
          <Image
            src="/SP/Top/s11_Top_KeyVisual_02.png"
            alt="zeus"
            className="max-w-none"
            width={1050}
            height={1050}
          />
        </div>
        <div className="mt-20">
          <Image
            src="/SP/Top/s11_Top_KeyVisual_01.png"
            alt="amatelas"
            className="max-w-none"
            width={1050}
            height={1050}
          />
        </div>
      </div> */}
      <Background src="/SP/Top/s11_Top_GradOverlay.png" />
      <div className="grid justify-items-center">
        <div className="grid justify-items-center space-y-[-45px]">
          <ResponsiveImage
            src="/SP/Top/s11_Top_Logo.png"
            alt="logo"
            className="relative"
            width={750}
            height={450}
          />
          <ResponsiveImage
            src="/SP/Top/s11_Top_Text_01_Kaisai.png"
            alt="data"
            className="relative"
            width={400}
            height={300}
          />
        </div>

        <div className="top-0 flex flex-col items-center space-y-6">
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
      </div>
      <div className="mx-3">
        <div className="flex justify-between">
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
        <div className="top-[16px] flex justify-between">
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
    </>
  );
}
