import { GetStaticPaths, GetStaticPropsContext, NextPage } from 'next';
import SEO from 'components/SEO';
import { PairProps } from 'components/pages/sp/PairPage';
import pairs from 'const/pairs';

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
    } as PairProps
  };
};

const PairPage: NextPage<PairProps> = (props: PairProps) => {
  return (
    <>
      <SEO title={props.name} />
      <PairPage {...props} />
    </>
  );
};

export default PairPage;
