import Link from 'next/link';
import Background from 'components/Background';
import SpMenu from 'components/SpMenu';
import SpResponsiveImage from 'components/SpResponsiveImage';

export default function About() {
  return (
    <>
      <Background src="/SP/Concept/s41_Concept_BG.png" />
      <SpResponsiveImage alt="topBanner" src="/SP/Concept/s41_Concept_Compo00.png" className="relative" width={750} height={700} />
      {/* sp:mt-[-91px] */}
      <div className="mt-[-12.1333333vw]">
        <SpResponsiveImage alt="topBanner" src="/SP/Concept/s41_Concept_Compo01.png" className="relative" width={750} height={700} />
      </div>
      {/* sp:mt-[-60px] */}
      <div className="mt-[-8vw]">
        <SpResponsiveImage alt="topBanner" src="/SP/Concept/s41_Concept_Compo02.png" className="relative" width={750} height={700} />
      </div>
      {/* sp:mt-[-59px] */}
      <div className="mt-[-7.86666667vw]">
        <SpResponsiveImage alt="topBanner" src="/SP/Concept/s41_Concept_Compo03.png" className="relative" width={750} height={700} />
      </div>
      {/* sp:mt-[-60px] */}
      <div className="mt-[-8vw]">
        <SpResponsiveImage alt="topBanner" src="/SP/Concept/s41_Concept_Compo04.png" className="relative" width={750} height={700} />
      </div>
      {/* sp:mt-[35px] ml-[18x] */}
      <div className="mt-[4.66666667vw] ml-[2.4vw]">
        <SpResponsiveImage alt="topBanner" src="/SP/Concept/s41_Concept_Link01.png" className="relative" width={600} height={225} />
      </div>
      {/* sp:mt-[3px] ml-[172x] */}
      <div className="mt-[0.4vw] ml-[22.933333333vw]">
        <SpResponsiveImage alt="topBanner" src="/SP/Concept/s41_Concept_Link02.png" className="relative" width={600} height={225} />
      </div>
      {/* sp:mt-[125px] */}
      <div className="mt-[16.6666667vw]">&nbsp;</div>
      <SpMenu />
    </>
  );
}
