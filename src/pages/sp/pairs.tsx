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

      <div className="grid justify-items-center space-y-[1.2vw] pt-[18.53333333vw] sp:space-y-[9px] sp:pt-[139px]">
        {contestantImageColumns.map((column, index) => (
          <SpResponsiveImage alt="banner" src={column} className="relative" width={750} height={127} key={index} />
        ))}
      </div>
      <div className="mt-[16.6666667vw] sp:mt-[125px]">&nbsp;</div>

      <div className="fixed top-0 left-1/2 -translate-x-1/2">
        <div className="relative right-[0.4vw] sp:right-[0px]">
          <SpResponsiveImage alt="topBanner" src="/SP/Pair/s31_PairIndex_TopBanner.png" className="" width={750} height={130} />
          <Link href="/sp/entries" passHref>
            <a>
              <div className="absolute top-0 right-[-0.66666667vw] sp:right-[-0px]">
                <SpResponsiveImage alt="pairButton" src="/SP/Pair/s31_PairIndex_TopText.png" className="" width={315} height={130} />
              </div>
            </a>
          </Link>
        </div>
      </div>
      <SpMenu />
    </>
  );
}
