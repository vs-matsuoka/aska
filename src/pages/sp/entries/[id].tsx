import { GetStaticPaths, GetStaticPropsContext, NextPage } from 'next';
import SEO from 'components/SEO';
import { EntryProps } from 'components/pages/sp/EntryPage';
import entries from 'const/entries';

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
  const youtubeLink = entry?.youtubeLink == undefined ? null : entry?.youtubeLink;
  return {
    props: {
      index: entry!.index,
      kirinukiSrc: entry!.spKirinukiSrc,
      nameSrc: entry!.spNameSrc,
      name: entry!.name,
      description: entry!.spDescription,
      niconicoLink: entry!.niconicoLink,
      youtubeLink: youtubeLink,
      twitterLink: entry!.twitterLink
    } as EntryProps
  };
};

const EntryPage: NextPage<EntryProps> = (props: EntryProps) => {
  return (
    <>
      <SEO title={props.name} />
      <EntryPage {...props} />
    </>
  );
};

export default EntryPage;
