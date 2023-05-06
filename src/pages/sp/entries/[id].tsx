import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next';
import Image, { ImageProps } from 'next/future/image';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import Background from 'components/Background';
import SpMenu from 'components/SpMenu';
import entries, { Entry } from 'const/entries';

function ResponsiveImage(
  props: Omit<ImageProps, 'fill' | 'width' | 'height'> & {
    width: number;
    height: number;
  }
) {
  const { width, height, src, alt, className, ...imageProps } = props;
  const standard = 750;
  const isNarrow = useMediaQuery({ query: '(min-width: 750px)' });

  return (
    <div
      className={className}
      style={{
        width: isNarrow ? `${width}px` : `${(width / standard) * 100}vw`,
        height: isNarrow ? `${height}px` : `${(height / standard) * 100}vw`
      }}
    >
      <Image src={src} alt={alt} className="max-w-none" fill {...imageProps}></Image>
    </div>
  );
}

function getEntryIcon(entry: Entry, index: number) {
  if (entry.spBannerSrc.includes('secret')) {
    return <ResponsiveImage alt="icon" src={entry.spIconSrc} className="relative" width={125} height={125} key={index} />;
  } else {
    return (
      <Link href={'/sp/entries/' + entry.index.toString()} key={index} passHref>
        <a>
          <ResponsiveImage alt="icon" src={entry.spIconSrc} className="relative" width={125} height={125} key={index} />
        </a>
      </Link>
    );
  }
}

type EntryProps = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = entries.map((value) => ({
    params: {
      id: value.index.toString()
    }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  const entry = entries.find((entry) => entry.index.toString() == params!.id);
  return {
    props: {
      index: entry!.index,
      kirinukiSrc: entry!.spKirinukiSrc,
      nameSrc: entry!.spNameSrc
    }
  };
};

const EntryPage: NextPage<EntryProps> = (props: EntryProps) => {
  return (
    <>
      <Background src="/SP/Entry_Detail/s22_Entry_BG.png" />
      <div className="relative top-[10.4vw] sp:top-[78px]">
        <ResponsiveImage alt="kirinuki" src={props.kirinukiSrc} className="" width={750} height={800} />
        <div className="absolute top-[5.2vw] right-[4.13333333vw] flex justify-center gap-[1.86666667vw] sp:top-[39px] sp:right-[31px] sp:gap-[14px]">
          <ResponsiveImage alt="niconico" src="/SP/Entry_Detail/s22_Button_11_SNS_NicoNico.png" className="relative" width={66} height={66} />
          <ResponsiveImage alt="youtube" src="/SP/Entry_Detail/s22_Button_12_SNS_Youtube.png" className="relative" width={66} height={66} />
          <ResponsiveImage alt="twitter" src="/SP/Entry_Detail/s22_Button_13_SNS_Twitter.png" className="relative" width={66} height={66} />
        </div>
        <div className="absolute top-[89.46666667vw] sp:top-[671px]">
          <div className="relative">
            <ResponsiveImage alt="base" src="/SP/Entry_Detail/s22_Entry_Base.png" className="" width={750} height={500} />
            <div className="absolute top-[4.26666667vw] sp:top-[32px]">
              <ResponsiveImage alt="name" src={props.nameSrc} className="relative" width={750} height={250} />
            </div>
            <div className="absolute top-[24.5333333vw] right-[2.26666667vw] sp:top-[184px] sp:right-[17px]">
              <ResponsiveImage alt="info" src="/SP/Entry_Detail/Info/s22_Entry_info_01.png" className="relative" width={600} height={250} />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-[4vw] mt-[63.3333333vw] grid grid-cols-5 justify-items-center gap-[2.13333333vw] sp:mx-[30px] sp:mt-[475px] sp:gap-[16px]">
        {entries.map((entry, index) => getEntryIcon(entry, index))}
      </div>
      <div className="mt-[16.6666667vw] sp:mt-[125px]">&nbsp;</div>
      <SpMenu />
    </>
  );
};

export default EntryPage;
