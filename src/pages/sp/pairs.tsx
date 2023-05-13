import Link from 'next/link';
import Background from 'components/Background';
import SEO from 'components/SEO';
import SpMenu from 'components/SpMenu';
import SpResponsiveImage from 'components/SpResponsiveImage';
import pairs, { Pair } from 'const/pairs';

function getPairBanner(pair: Pair, index: number) {
  if (pair.spBannerSrc.includes('Secret')) {
    return <SpResponsiveImage alt="banner" src={pair.spBannerSrc} className="relative" width={750} height={127} key={index} quality={90} />;
  } else {
    return (
      <Link href={'/sp/pairs/' + pair.index.toString()} key={index} passHref>
        <SpResponsiveImage alt="banner" src={pair.spBannerSrc} className="relative" width={750} height={127} key={index} quality={90} />
      </Link>
    );
  }
}

export default function Pairs() {
  return (
    <>
      <SEO title="コンビ" />
      <Background src="/SP/Pair/s31_Pair_BG.jpg" />

      {/* sp:space-y-[9px] sp:pt-[139px] */}
      <div className="grid justify-items-center space-y-[1.2vw] pt-[18.53333333vw]">{pairs.map((pair, index) => getPairBanner(pair, index))}</div>
      {/* sp:mt-[125px] */}
      <div className="mt-[16.6666667vw]">&nbsp;</div>

      <div className="fixed top-0 left-0">
        <div className="relative">
          <SpResponsiveImage alt="topBanner" src="/SP/Pair/s31_PairIndex_TopBanner.png" width={750} height={130} quality={90} />
          <Link href="/sp/entries" passHref>
            <div className="absolute top-0 right-0">
              <SpResponsiveImage alt="pairButton" src="/SP/Pair/s31_PairIndex_TopText.png" width={315} height={130} quality={90} />
            </div>
          </Link>
        </div>
      </div>
      <SpMenu />
    </>
  );
}
