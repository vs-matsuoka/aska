import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';
import Background from 'components/Background';
import SEO from 'components/SEO';
import SpMenu from 'components/SpMenu';
import SpResponsiveImage from 'components/SpResponsiveImage';
import pairs, { Pair } from 'const/pairs';

function getPairIcon(pair: Pair, index: number) {
  if (pair.isPublished) {
    return (
      <Link href={`/sp/pairs/${pair.index}`} key={index} passHref>
        <SpResponsiveImage alt={pair.name} src={pair.spIconSrc} className="relative" width={335} height={125} key={index} />
      </Link>
    );
  } else {
    return <SpResponsiveImage alt={pair.name} src={pair.spIconSrc} className="relative" width={335} height={125} key={index} />;
  }
}

type PairProps = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticPaths: GetStaticPaths = async () => {
  const noSecretPairs = pairs.filter((pair) => !pair.spIconSrc.includes('secret'));

  const paths = noSecretPairs.map((value) => ({
    params: {
      id: value.index.toString()
    }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const pair = pairs.find((pair) => pair.index.toString() == params!.id);
  return {
    props: {
      index: pair!.index,
      kirinukiSrc: pair!.spKirinukiSrc,
      nameSrc: pair!.spNameSrc,
      baseASrc: pair!.spBaseASrc,
      baseBSrc: pair!.spBaseBSrc,
      name: pair!.name
    }
  };
};

const PairPage: NextPage<PairProps> = (props: PairProps) => {
  return (
    <>
      <SEO title={props.name} />
      <Background src="/SP/Pair_Detail/s32_Entry_BG.jpg" />
      {/* sp:top-[51px] */}
      <div className="relative top-[6.8vw]">
        <SpResponsiveImage alt="kirinuki" src={props.kirinukiSrc} width={750} height={800} key={props.name} />
        {/* sp:top-[670px] */}
        <div className="absolute top-[89.3333333vw]">
          <div className="relative">
            <SpResponsiveImage alt="base" src="/SP/Pair_Detail/s32_Entry_Base.png" className="" width={750} height={500} />
            {/* sp:top-[50px] */}
            <div className="absolute top-[6.66666667vw]">
              <SpResponsiveImage alt={props.name} src={props.nameSrc} className="relative" width={750} height={250} key={props.name} />
            </div>
            {/* sp:top-[254px] sp:left-[32px] */}
            <div className="absolute left-[4.26666667vw] top-[33.86666667vw]">
              <SpResponsiveImage alt="baseA" src={props.baseASrc} className="relative" width={335} height={200} key={props.name} />
            </div>
            {/* sp:top-[192px] sp:right-[32px] */}
            <div className="absolute right-[4.26666667vw] top-[25.6vw]">
              <SpResponsiveImage alt="baseB" src={props.baseBSrc} className="relative" width={335} height={200} key={props.name} />
            </div>
            {/* sp:top-[298px] sp:left-[350px] */}
            <div className="absolute left-[46.6666667vw] top-[39.73333333vw]">
              <SpResponsiveImage alt="✕" src="/SP/Pair_Detail/s32_Pair_And.png" className="relative" width={50} height={50} />
            </div>
          </div>
        </div>
      </div>
      {/* sp:mx-[32px] sp:mt-[475px] sp:gap-[16px] */}
      <div className="mx-[4.26666667vw] mt-[63.3333333vw] grid grid-cols-2 justify-items-center gap-[2.13333333vw]">{pairs.map((pair, index) => getPairIcon(pair, index))}</div>
      {/* sp:mt-[125px] */}
      <div className="mt-[16.6666667vw]">&nbsp;</div>
      <SpMenu />
    </>
  );
};

export default PairPage;
