import Image from 'next/image';
import Link from 'next/link';
import Background from 'components/Background';
import SEO from 'components/SEO';
import SpMenu from 'components/SpMenu';
import SpResponsiveImage from 'components/SpResponsiveImage';
import entries, { Entry } from 'const/entries';

function getEntryBanner(entry: Entry, index: number) {
  if (entry.spBannerSrc.includes('secret')) {
    return <SpResponsiveImage alt="banner" src={entry.spBannerSrc} className="relative" width={750} height={127} key={index} quality={90} />;
  } else {
    return (
      <Link href={'/sp/entries/' + entry.index.toString()} key={index} passHref>
        <SpResponsiveImage alt="banner" src={entry.spBannerSrc} className="relative" width={750} height={127} key={index} quality={90} />
      </Link>
    );
  }
}

export default function Entries() {
  return (
    <>
      <SEO title="出場者" />
      <Background src="/SP/Entry/s21_Entry_BG.jpg" />

      {/* sp:space-y-[9px] sp:pt-[139px] */}
      <div className="grid justify-items-center space-y-[1.2vw] pt-[18.53333333vw]">{entries.map((column, index) => getEntryBanner(column, index))}</div>
      {/* sp:mt-[125px] */}
      <div className="mt-[16.6666667vw]">&nbsp;</div>

      <div className="fixed top-0 left-0">
        <div className="relative right-0">
          <SpResponsiveImage alt="topBanner" src="/SP/Entry/s21_EntryIndex_TopBanner.png" className="" width={750} height={130} quality={90} />
          <Link href="/sp/pairs" passHref>
            <div className="absolute top-0 right-0">
              <SpResponsiveImage alt="combiButton" src="/SP/Entry/s21_EntryIndex_TopText.png" width={315} height={130} quality={90} />
            </div>
          </Link>
        </div>
      </div>
      <SpMenu />
    </>
  );
}
