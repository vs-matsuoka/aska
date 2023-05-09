import Link from 'next/link';
import Background from 'components/Background';
import SpResponsiveImage from 'components/SpResponsiveImage';
import otomdmLink from 'const/otomdmLink';

export default function Top() {
  return (
    <div className="relative w-screen overflow-hidden">
      <Background src="/SP/Top/s11_Top_BG.png" />
      <div className="">
        {/* sp:top-[40px] sp:left-[-388px] */}
        <div className="absolute top-[5.3333333333vw] left-[-51.7333333333vw]">
          <SpResponsiveImage src="/SP/Top/s11_Top_KeyVisual_02.png" alt="zeus" className="relative" width={1050} height={1050} />
        </div>
        {/* sp:top-[116px] sp:right-[470px] */}
        <div className="absolute top-[15.4666666667vw] right-[-62.6666666667vw]">
          <SpResponsiveImage src="/SP/Top/s11_Top_KeyVisual_01.png" alt="amatelas" className="relative" width={1050} height={1050} />
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
          <a href={otomdmLink.niconico} target="_blank">
            <SpResponsiveImage src="/SP/Top/s11_Top_Button_01_SNS_NicoNico.png" alt="niconico" className="relative" width={380} height={48} />
          </a>
          <a href={otomdmLink.youtube} target="_blank">
            <SpResponsiveImage src="/SP/Top/s11_Top_Button_02_SNS_YouTube.png" alt="youtube" className="relative" width={380} height={48} />
          </a>
          <a href={otomdmLink.twitter} target="_blank">
            <SpResponsiveImage src="/SP/Top/s11_Top_Button_03_SNS_Twitter.png" alt="twitter" className="relative" width={380} height={48} />
          </a>
        </div>
        {/* sp:mx-[32px] sp:mt-[106px] */}
        <div className="mx-[4.2666666666667vw] mt-[14.1333333333vw] grid justify-items-center">
          {/* sp:gap-[16px] */}
          <div className="flex gap-[2.133333333333333vw]">
            <Link href="/sp/entries" passHref>
              <SpResponsiveImage src="/SP/Top/s11_Top_Button_11_Concept.png" alt="entry" className="relative" width={335} height={192} />
            </Link>
            <Link href="/sp/pairs" passHref>
              <SpResponsiveImage src="/SP/Top/s11_Top_Button_12_Entries.png" alt="combi" className="relative" width={335} height={192} />
            </Link>
          </div>
          {/* sp:mt-[16px] sp:gap-[16px] */}
          <div className="mt-[2.133333333333333vw] flex gap-[2.133333333333333vw]">
            <Link href="/sp/about" passHref>
              <SpResponsiveImage src="/SP/Top/s11_Top_Button_13_Unei.png" alt="overview" className="relative" width={218} height={128} />
            </Link>
            <SpResponsiveImage src="/SP/Top/s11_Top_Button_14_Movie.png" alt="unei" className="relative" width={218} height={128} />
            <SpResponsiveImage src="/SP/Top/s11_Top_Button_15_Secret.png" alt="movie" className="relative" width={218} height={128} />
          </div>
        </div>
      </div>
    </div>
  );
}
