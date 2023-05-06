import Link from 'next/link';
import Background from 'components/Background';
import SpResponsiveImage from 'components/SpResponsiveImage';

export default function Top() {
  return (
    <div className="">
      <Background src="/SP/Top/s11_Top_BG.png" />
      <div className="absolute">
        <div className="relative w-screen overflow-hidden">
          {/* sp:top-[40px] sp:left-[-388px] */}
          <div className="absolute top-[5.3333333333vw] left-[-51.7333333333vw]">
            <SpResponsiveImage src="/SP/Top/s11_Top_KeyVisual_02.png" alt="zeus" className="relative" width={1050} height={1050} />
          </div>
          {/* sp:top-[116px] sp:right-[470px] */}
          <div className="absolute top-[15.4666666667vw] right-[62.6666666667vw]">
            <SpResponsiveImage src="/SP/Top/s11_Top_KeyVisual_01.png" alt="amatelas" className="relative" width={1050} height={1050} />
          </div>
        </div>
      </div>
      <Background src="/SP/Top/s11_Top_GradOverlay.png" />
      <div className="">
        <div className="grid justify-items-center">
          <div className="absolute">
            <SpResponsiveImage src="/SP/Top/s11_Top_Logo.png" alt="logo" className="relative" width={750} height={450} />
          </div>
          {/* sp:mt-[413px] */}
          <div className="mt-[55.0666666667vw]">
            <SpResponsiveImage src="/SP/Top/s11_Top_Text_01_Kaisai.png" alt="data" className="relative" width={330} height={250} />
          </div>
        </div>

        {/* sp:mt-[3px] sp:space-y-[24px] */}
        <div className="top-0 mt-[0.4vw] flex flex-col items-center space-y-[3.2vw]">
          <SpResponsiveImage src="/SP/Top/s11_Top_Button_01_SNS_NicoNico.png" alt="niconico" className="relative" width={380} height={48} />
          <SpResponsiveImage src="/SP/Top/s11_Top_Button_02_SNS_YouTube.png" alt="youtube" className="relative" width={380} height={48} />
          <SpResponsiveImage src="/SP/Top/s11_Top_Button_03_SNS_Twitter.png" alt="twitter" className="relative" width={380} height={48} />
        </div>
        {/* sp:mt-[106px] sp:space-y-[16px] */}
        <div className="mx-4 mt-[14.1333333333vw] grid justify-items-center space-y-[2.133333333333333px]">
          <div className="flex gap-[16px]">
            <Link href="/sp/entries" passHref>
              <a>
                <SpResponsiveImage src="/SP/Top/s11_Top_Button_11_Concept.png" alt="entry" className="relative" width={335} height={192} />
              </a>
            </Link>
            <Link href="/sp/pairs" passHref>
              <a>
                <SpResponsiveImage src="/SP/Top/s11_Top_Button_12_Entries.png" alt="combi" className="relative" width={335} height={192} />
              </a>
            </Link>
          </div>
          {/* sp:top-[10px] sp:gap-[16px] */}
          <div className="top-[1.333333333333333vw] flex gap-[2.133333333333333vw]">
            <SpResponsiveImage src="/SP/Top/s11_Top_Button_13_Unei.png" alt="overview" className="relative" width={218} height={128} />
            <SpResponsiveImage src="/SP/Top/s11_Top_Button_14_Movie.png" alt="unei" className="relative" width={218} height={128} />
            <SpResponsiveImage src="/SP/Top/s11_Top_Button_15_Secret.png" alt="movie" className="relative" width={218} height={128} />
          </div>
        </div>
      </div>
    </div>
  );
}
