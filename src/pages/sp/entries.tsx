import Link from 'next/link';
import Background from 'components/Background';
import SpMenu from 'components/SpMenu';
import SpResponsiveImage from 'components/SpResponsiveImage';
import entries, { Entry } from 'const/entries';

function getEntryBanner(entry: Entry, index: number) {
  if (entry.spBannerSrc.includes('secret')) {
    return <SpResponsiveImage alt="banner" src={entry.spBannerSrc} className="relative" width={750} height={127} key={index} />;
  } else {
    return (
      <Link href={'/sp/entries/' + entry.index.toString()} key={index} passHref>
        <SpResponsiveImage alt="banner" src={entry.spBannerSrc} className="relative" width={750} height={127} key={index} />
      </Link>
    );
  }
}

export default function Entries() {
  return (
    <>
      <Background src="/SP/Entry/s21_Entry_BG.png" />

      {/* sp:space-y-[9px] sp:pt-[139px] */}
      <div className="grid justify-items-center space-y-[1.2vw] pt-[18.53333333vw]">{entries.map((column, index) => getEntryBanner(column, index))}</div>
      {/* sp:mt-[125px] */}
      <div className="mt-[16.6666667vw]">&nbsp;</div>

      <div className="fixed top-0 left-0">
        <div className="relative right-0">
          <SpResponsiveImage alt="topBanner" src="/SP/Entry/s21_EntryIndex_TopBanner.png" className="" width={750} height={130} />
          <Link href="/sp/pairs" passHref>
            <div className="absolute top-0 right-0">
              <SpResponsiveImage alt="combiButton" src="/SP/Entry/s21_EntryIndex_TopText.png" className="" width={315} height={130} />
            </div>
          </Link>
        </div>
      </div>
      <SpMenu />
    </>
  );
}
