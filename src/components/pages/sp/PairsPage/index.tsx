import Link from 'next/link';
import Background from 'components/Background';
import SpMenu from 'components/SpMenu';
import SpResponsiveImage from 'components/SpResponsiveImage';
import pairs, { Pair } from 'const/pairs';

function getPairBanner(pair: Pair, index: number) {
  if (pair.isPublished) {
    return (
      <Link href={'/sp/pairs/' + pair.index.toString()} key={index} passHref>
        <SpResponsiveImage alt={pair.name} src={pair.spBannerSrc} className="relative" width={750} height={127} key={index} />
      </Link>
    );
  } else {
    return <SpResponsiveImage alt="banner" src={pair.spBannerSrc} className="relative" width={750} height={127} key={index} />;
  }
}

export default function PairsPage() {
  return (
    <>
      <Background src="/SP/Pair/s31_Pair_BG.jpg" />

      {/* sp:space-y-[9px] sp:pt-[139px] */}
      <div className="grid justify-items-center space-y-[1.2vw] pt-[18.53333333vw]">{pairs.map((pair, index) => getPairBanner(pair, index))}</div>
      {/* sp:mt-[125px] */}
      <div className="mt-[16.6666667vw]">&nbsp;</div>

      <div className="fixed left-0 top-0">
        <div className="relative">
          <SpResponsiveImage alt="コンビ紹介" src="/SP/Pair/s31_PairIndex_TopBanner.png" width={750} height={130} />
          <Link href="/sp/entries" passHref>
            <div className="absolute right-0 top-0">
              <SpResponsiveImage alt="出場者紹介へ" src="/SP/Pair/s31_PairIndex_TopText.png" width={315} height={130} />
            </div>
          </Link>
        </div>
      </div>
      <SpMenu />
    </>
  );
}
