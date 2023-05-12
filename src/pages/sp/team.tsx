import Image, { ImageProps } from 'next/image';
import { ReactNode, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Background from 'components/Background';
import SEO from 'components/SEO';
import SpMenu from 'components/SpMenu';
import SpTeamItem from 'components/SpTeamItem';
import team from 'const/team';

function SpTeamHeader({ children }: { children: ReactNode }) {
  return (
    // {/* sp:h-[75px] sp:w-[700px] */}
    <div className="flex h-[10vw] w-[93.3333333333vw] bg-gradient-to-t from-[#CCAD70] to-[#BA9856]">
      {/* sp:text-[36px] */}
      <h1
        className="m-auto text-center align-middle text-[4.8vw]"
        style={{
          fontFamily: 'FOT-UD角ゴ_ラージ Pr6 E',
          lineHeight: '1'
        }}
      >
        {children}
      </h1>
    </div>
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
      <div className="relative w-screen">
        <Background src="/SP/Operation/s51_BG.png" />

        <div className="grid justify-items-center">
          <SpTeamHeader>運　営</SpTeamHeader>
          {team.unnei.map((member, i) => (
            <SpTeamItem member={member} key={i} />
          ))}
          <SpTeamHeader>制　作</SpTeamHeader>
          {team.seisaku.map((member, i) => (
            <SpTeamItem member={member} key={i} />
          ))}
          <SpTeamHeader>立ち絵</SpTeamHeader>
          {team.tachie.map((member, i) => (
            <SpTeamItem member={member} key={i} />
          ))}
          <SpTeamHeader>告　知</SpTeamHeader>
          {team.kokuchi.map((member, i) => (
            <SpTeamItem member={member} key={i} />
          ))}
          <SpTeamHeader>放　送</SpTeamHeader>
          {team.housou.map((member, i) => (
            <SpTeamItem member={member} key={i} />
          ))}
        </div>
        <div className="mt-[16.6666667vw] sp:mt-[125px]">&nbsp;</div>
        <SpMenu />
      </div>
    </>
  );
}