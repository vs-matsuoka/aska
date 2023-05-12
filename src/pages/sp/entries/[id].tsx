import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';
import Background from 'components/Background';
import SEO from 'components/SEO';
import SpMenu from 'components/SpMenu';
import SpResponsiveImage from 'components/SpResponsiveImage';
import entries, { Entry } from 'const/entries';

function getEntryIcon(entry: Entry, index: number) {
  if (entry.spIconSrc.includes('Secret')) {
    return <SpResponsiveImage alt="icon" src={entry.spIconSrc} className="relative" width={125} height={125} key={index} />;
  } else {
    return (
      <Link href={'/sp/entries/' + entry.index.toString()} key={index} passHref>
        <SpResponsiveImage alt="icon" src={entry.spIconSrc} className="relative" width={125} height={125} key={index} />
      </Link>
    );
  }
}

type EntryProps = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticPaths: GetStaticPaths = async () => {
  const noSecretEntries = entries.filter((entries) => !entries.spIconSrc.includes('Secret'));

  const paths = noSecretEntries.map((value) => ({
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
  const entry = entries.find((entry) => entry.index.toString() == params!.id);
  return {
    props: {
      index: entry!.index,
      kirinukiSrc: entry!.spKirinukiSrc,
      nameSrc: entry!.spNameSrc,
      name: entry!.name
    }
  };
};

const EntryPage: NextPage<EntryProps> = (props: EntryProps) => {
  return (
    <>
      <SEO title={props.name} />
      <Background src="/SP/Entry_Detail/s22_Entry_BG.png" />
      {/* sp:top-[78px] */}
      <div className="relative top-[10.4vw]">
        <SpResponsiveImage alt="kirinuki" src={props.kirinukiSrc} className="" width={750} height={800} />
        {/* sp:top-[39px] sp:right-[31px] sp:gap-[14px] */}
        <div className="absolute top-[5.2vw] right-[4.13333333vw] flex justify-center gap-[1.86666667vw]">
          <SpResponsiveImage alt="niconico" src="/SP/Entry_Detail/s22_Button_11_SNS_NicoNico.png" className="relative" width={66} height={66} />
          <SpResponsiveImage alt="youtube" src="/SP/Entry_Detail/s22_Button_12_SNS_Youtube.png" className="relative" width={66} height={66} />
          <SpResponsiveImage alt="twitter" src="/SP/Entry_Detail/s22_Button_13_SNS_Twitter.png" className="relative" width={66} height={66} />
        </div>
        {/* sp:top-[671px] */}
        <div className="absolute top-[89.46666667vw]">
          <div className="relative">
            <SpResponsiveImage alt="base" src="/SP/Entry_Detail/s22_Entry_Base.png" className="" width={750} height={500} />
            {/* sp:top-[32px] */}
            <div className="absolute top-[4.26666667vw]">
              <SpResponsiveImage alt="name" src={props.nameSrc} className="relative" width={750} height={250} />
            </div>
            {/* sp:top-[184px] sp:right-[17px] */}
            <div className="absolute top-[24.5333333vw] right-[2.26666667vw]">
              <SpResponsiveImage alt="info" src="/SP/Entry_Detail/Info/s22_Entry_info_01.png" className="relative" width={600} height={250} />
            </div>
          </div>
        </div>
      </div>
      {/* sp:mx-[30px] sp:mt-[475px] sp:gap-[16px] */}
      <div className="mx-[4vw] mt-[63.3333333vw] grid grid-cols-5 justify-items-center gap-[2.13333333vw]">{entries.map((entry, index) => getEntryIcon(entry, index))}</div>
      {/* sp:mt-[125px] */}
      <div className="mt-[16.6666667vw]">&nbsp;</div>
      <SpMenu />
    </>
  );
};

export default EntryPage;
