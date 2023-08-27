import { ReactNode, useEffect } from 'react';
import Background from 'components/Background';
import SEO from 'components/SEO';
import SpMenu from 'components/SpMenu';
import SpTeamItem from 'components/SpTeamItem';
import team from 'const/team';

function SpTeamHeader({ children }: { children: ReactNode }) {
  return (
    // {/* sp:h-[75px] sp:w-[700px] */}
    <h1 className="flex h-[10vw] w-[93.3333333333vw] bg-gradient-to-t from-[#CCAD70] to-[#BA9856]">
      {/* sp:text-[36px] */}
      <div
        className="m-auto text-center align-middle text-[4.8vw]"
        style={{
          fontFamily: 'FOT-UD角ゴ_ラージ Pr6 E',
          lineHeight: '1'
        }}
      >
        {children}
      </div>
    </h1>
  );
}

export default function Team() {
  useEffect(() => {
    // FUCK
    // window.FONTPLUS.reload();
  });
  return (
    <>
      <SEO title="運営" />
      <div className="relative w-full">
        <Background src="/SP/Operation/s51_BG.jpg" />

        <div className="grid justify-items-center">
          <section>
            <SpTeamHeader>運　営</SpTeamHeader>
            {team.unnei.map((member, i) => (
              <SpTeamItem member={member} key={i} />
            ))}
          </section>
          <section>
            <SpTeamHeader>制　作</SpTeamHeader>
            {team.seisaku.map((member, i) => (
              <SpTeamItem member={member} key={i} />
            ))}
          </section>
          <section>
            <SpTeamHeader>立ち絵</SpTeamHeader>
            {team.tachie.map((member, i) => (
              <SpTeamItem member={member} key={i} />
            ))}
          </section>
          <section>
            <SpTeamHeader>告　知</SpTeamHeader>
            {team.kokuchi.map((member, i) => (
              <SpTeamItem member={member} key={i} />
            ))}
          </section>
          <section>
            <SpTeamHeader>特　番</SpTeamHeader>
            {team.tokuban.map((member, i) => (
              <SpTeamItem member={member} key={i} />
            ))}
          </section>
          <section>
            <SpTeamHeader>放　送</SpTeamHeader>
            {team.housou.map((member, i) => (
              <SpTeamItem member={member} key={i} />
            ))}
          </section>
        </div>
        <div className="mt-[16.6666667vw] sp:mt-[125px]">&nbsp;</div>
        <SpMenu />
      </div>
    </>
  );
}
