import Link from 'next/link';
import Background from 'components/Background';
import SpMenu from 'components/SpMenu';
import SpResponsiveImage from 'components/SpResponsiveImage';

const contestantImageColumns = [
  '/SP/Pair/Banner/s21_PairIndex_Banner_01.png',
  '/SP/Pair/Banner/s21_PairIndex_Banner_02.png',
  '/SP/Pair/Banner/s21_PairIndex_Banner_03.png',
  '/SP/Pair/Banner/s21_PairIndex_Banner_04.png',
  '/SP/Pair/Banner/s21_PairIndex_Banner_05.png',
  '/SP/Pair/Banner/s21_PairIndex_Banner_06.png',
  '/SP/Pair/Banner/s21_PairIndex_Banner_07.png',
  '/SP/Pair/Banner/s21_PairIndex_Banner_08.png',
  '/SP/Pair/Banner/s21_PairIndex_Banner_09.png',
  '/SP/Pair/Banner/s21_PairIndex_Banner_10.png',
  '/SP/Pair/Banner/s21_PairIndex_Banner_11.png',
  '/SP/Pair/Banner/s21_PairIndex_Banner_12.png',
  '/SP/Pair/Banner/s21_PairIndex_Banner_Secret_13.png',
  '/SP/Pair/Banner/s21_PairIndex_Banner_Secret_14.png',
  '/SP/Pair/Banner/s21_PairIndex_Banner_Secret_15.png',
  '/SP/Pair/Banner/s21_PairIndex_Banner_Secret_16.png',
  '/SP/Pair/Banner/s21_PairIndex_Banner_Secret_17.png',
  '/SP/Pair/Banner/s21_PairIndex_Banner_Secret_18.png',
  '/SP/Pair/Banner/s21_PairIndex_Banner_Secret_19.png',
  '/SP/Pair/Banner/s21_PairIndex_Banner_Secret_20.png'
];

export default function Entries() {
  return (
    <>
      <Background src="/SP/Pair/s31_Pair_BG.png" />

      {/* sp:space-y-[9px] sp:pt-[139px] */}
      <div className="grid justify-items-center space-y-[1.2vw] pt-[18.53333333vw]">
        {contestantImageColumns.map((column, index) => (
          <SpResponsiveImage alt="banner" src={column} className="relative" width={750} height={127} key={index} />
        ))}
      </div>
      {/* sp:mt-[125px] */}
      <div className="mt-[16.6666667vw]">&nbsp;</div>

      <div className="fixed top-0 left-0">
        <div className="relative">
          <SpResponsiveImage alt="topBanner" src="/SP/Pair/s31_PairIndex_TopBanner.png" width={750} height={130} />
          <Link href="/sp/entries" passHref>
            <div className="absolute top-0 right-0">
              <SpResponsiveImage alt="pairButton" src="/SP/Pair/s31_PairIndex_TopText.png" width={315} height={130} />
            </div>
          </Link>
        </div>
      </div>
      <SpMenu />
    </>
  );
}
