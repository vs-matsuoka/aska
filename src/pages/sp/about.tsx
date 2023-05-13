import Link from 'next/link';
import Background from 'components/Background';
import SEO from 'components/SEO';
import SpMenu from 'components/SpMenu';
import SpResponsiveImage from 'components/SpResponsiveImage';

export default function About() {
  return (
    <>
      <SEO title="概要" />
      <Background src="/SP/Concept/s41_Concept_BG.jpg" />
      <SpResponsiveImage alt="compo0" src="/SP/Concept/s41_Concept_Compo00.png" className="relative" width={750} height={700} />
      {/* sp:mt-[-91px] */}
      <div className="mt-[-12.1333333vw]">
        <SpResponsiveImage alt="compo1" src="/SP/Concept/s41_Concept_Compo01.png" className="relative" width={750} height={700} />
      </div>
      {/* sp:mt-[-60px] */}
      <div className="mt-[-8vw]">
        <SpResponsiveImage alt="compo2" src="/SP/Concept/s41_Concept_Compo02.png" className="relative" width={750} height={700} />
      </div>
      {/* sp:mt-[-59px] */}
      <div className="mt-[-7.86666667vw]">
        <SpResponsiveImage alt="compo3" src="/SP/Concept/s41_Concept_Compo03.png" className="relative" width={750} height={700} />
      </div>
      {/* sp:mt-[-60px] */}
      <div className="mt-[-8vw]">
        <SpResponsiveImage alt="compo4" src="/SP/Concept/s41_Concept_Compo04.png" className="relative" width={750} height={700} />
      </div>
      {/* sp:mt-[35px] ml-[18x] */}
      <Link href="/sp/entries" passHref>
        <div className="mt-[4.66666667vw] ml-[2.4vw]">
          <SpResponsiveImage alt="entries" src="/SP/Concept/s41_Concept_Link01.png" className="relative" width={600} height={225} />
        </div>
      </Link>
      {/* sp:mt-[3px] ml-[172x] */}
      <Link href="/sp/pairs" passHref>
        <div className="mt-[0.4vw] ml-[22.933333333vw] overflow-hidden">
          <SpResponsiveImage alt="pairs" src="/SP/Concept/s41_Concept_Link02.png" className="relative" width={600} height={225} />
        </div>
      </Link>
      {/* sp:mt-[125px] */}
      <div className="mt-[16.6666667vw]">&nbsp;</div>
      <SpMenu />
    </>
  );
}
