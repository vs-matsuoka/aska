import Link from 'next/link';
import Background from 'components/Background';
import SpMenu from 'components/SpMenu';
import SpResponsiveImage from 'components/SpResponsiveImage';
import entries, { Entry } from 'const/entries';

function getEntryIcon(entry: Entry, index: number) {
  if (entry.isPublished) {
    return (
      <Link href={`/sp/entries/${entry.index}`} key={index} passHref>
        <SpResponsiveImage alt={entry.name} src={entry.spIconSrc} className="relative" width={125} height={125} key={index} />
      </Link>
    );
  } else {
    return <SpResponsiveImage alt={entry.name} src={entry.spIconSrc} className="relative" width={125} height={125} key={index} />;
  }
}

export type EntryProps = {
  index: number;
  kirinukiSrc: string;
  nameSrc: string;
  name: string;
  description: string;
  niconicoLink: string;
  youtubeLink?: string;
  twitterLink: string;
};

const EntryPage = (props: EntryProps) => {
  return (
    <>
      <Background src="/SP/Entry_Detail/s22_Entry_BG.jpg" />
      {/* sp:top-[78px] */}
      <div className="relative top-[10.4vw]">
        <SpResponsiveImage alt={props.name} src={props.kirinukiSrc} width={750} height={800} key={props.name} />
        {/* sp:top-[39px] sp:right-[31px] sp:gap-[14px] */}
        <div className="absolute right-[4.13333333vw] top-[5.2vw] flex justify-center gap-[1.86666667vw]">
          <a target="_blank" href={props.niconicoLink} rel="noopener noreferrer">
            <SpResponsiveImage alt="ニコニコ動画" src="/SP/Entry_Detail/s22_Button_11_SNS_NicoNico.png" className="relative" width={66} height={66} />
          </a>
          {props.youtubeLink && (
            <a target="_blank" href={props.youtubeLink} rel="noopener noreferrer">
              <SpResponsiveImage alt="YouTube" src="/SP/Entry_Detail/s22_Button_12_SNS_Youtube.png" className="relative" width={66} height={66} />
            </a>
          )}
          <a target="_blank" href={props.twitterLink} rel="noopener noreferrer">
            <SpResponsiveImage alt="Twitter" src="/SP/Entry_Detail/s22_Button_13_SNS_Twitter.png" className="relative" width={66} height={66} />
          </a>
        </div>
        {/* sp:top-[671px] */}
        <div className="absolute top-[89.46666667vw]">
          <div className="relative">
            <SpResponsiveImage alt="base" src="/SP/Entry_Detail/s22_Entry_Base.png" width={750} height={500} />
            {/* sp:top-[32px] */}
            <div className="absolute top-[4.26666667vw]">
              <SpResponsiveImage alt={props.name} src={props.nameSrc} className="relative" width={750} height={250} key={props.name} />
            </div>
            {/* sp:top-[250px] sp:right-[40px] sp:text-[30px] */}
            <div
              className="absolute left-[20.6666667vw] top-[33.3333333vw] skew-y-[-10deg] text-[4vw] tracking-[.07em] text-white"
              style={{
                fontFamily: 'FOT-UD角ゴ_ラージ Pr6 E',
                lineHeight: '1.3'
              }}
              dangerouslySetInnerHTML={{ __html: props.description.replaceAll('\n', '<br />') }}
            >
              {/* {props.description} */}
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
