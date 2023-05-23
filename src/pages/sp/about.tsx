import Link from 'next/link';
import Background from 'components/Background';
import SEO from 'components/SEO';
import SpMenu from 'components/SpMenu';
import SpResponsiveImage from 'components/SpResponsiveImage';

export default function About() {
  return (
    <>
      <SEO title="概要" />
      <Background src="/SP/Concept/s41_Concept_BG.jpg" />
      <SpResponsiveImage
        alt="2018年に開催した音MADバラエティ「音MAD DREAM MATCH」が5年の時を経て「天」として再臨!"
        src="/SP/Concept/s41_Concept_Compo00.png"
        className="relative"
        width={750}
        height={700}
        quality={100}
      />
      {/* sp:mt-[-91px] */}
      <section className="mt-[-12.1333333vw]">
        <SpResponsiveImage
          alt="①指名 組みたい相手を指名!各々の氏名を一斉公開"
          src="/SP/Concept/s41_Concept_Compo01.png"
          className="relative"
          width={750}
          height={700}
          quality={100}
        />
      </section>
      {/* sp:mt-[-60px] */}
      <section className="mt-[-8vw]">
        <SpResponsiveImage alt="②結成 指名のマッチした作者でコンビを結成" src="/SP/Concept/s41_Concept_Compo02.png" className="relative" width={750} height={700} quality={100} />
      </section>
      {/* sp:mt-[-59px] */}
      <section className="mt-[-7.86666667vw]">
        <SpResponsiveImage
          alt="③放送 コンビで作成した動画を生放送で初披露!"
          src="/SP/Concept/s41_Concept_Compo03.png"
          className="relative"
          width={750}
          height={700}
          quality={100}
        />
      </section>
      {/* sp:mt-[-60px] */}
      <section className="mt-[-8vw]">
        <SpResponsiveImage
          alt="④投票 生放送内で各動画に投票!決勝にて優勝作品を競う"
          src="/SP/Concept/s41_Concept_Compo04.png"
          className="relative"
          width={750}
          height={700}
          quality={100}
        />
      </section>
      {/* sp:mt-[35px] ml-[18x] */}
      <section>
        <Link href="/sp/entries" passHref>
          <div className="ml-[2.4vw] mt-[4.66666667vw]">
            <SpResponsiveImage alt="どんな音MAD作者が出場する? 出場者紹介へ" src="/SP/Concept/s41_Concept_Link01.png" className="relative" width={600} height={225} quality={90} />
          </div>
        </Link>
        {/* sp:mt-[3px] ml-[172x] */}
        <Link href="/sp/pairs" passHref>
          <div className="ml-[22.933333333vw] mt-[0.4vw] overflow-hidden">
            <SpResponsiveImage alt="夢のコンビ、続々結成! コンビ紹介へ" src="/SP/Concept/s41_Concept_Link02.png" className="relative" width={600} height={225} quality={90} />
          </div>
        </Link>
        {/* sp:mt-[125px] */}
      </section>
      <div className="mt-[16.6666667vw]">&nbsp;</div>
      <SpMenu />
    </>
  );
}
