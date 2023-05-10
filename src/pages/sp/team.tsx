import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Background from 'components/Background';
import SpMenu from 'components/SpMenu';
import SpTeamItem from 'components/SpTeamItem';
import team from 'const/team';

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

export default function Team() {
  useEffect(() => {
    // FUCK
    window.FONTPLUS.reload();
  });
  return (
    <>
      {/* <Background src="/SP/Entry/s21_Entry_BG.png" /> */}

      <div className="grid justify-items-center pt-[18.53333333vw] sp:pt-[139px]">
        <h1>運営</h1>
        {team.unnei.map((member, i) => (
          <SpTeamItem imgSrc={member.iconSrc} name={member.name} role={member.role} key={i} />
        ))}
        <h1>制作</h1>
        {team.seisaku.map((member, i) => (
          <SpTeamItem imgSrc={member.iconSrc} name={member.name} role={member.role} key={i} />
        ))}
        <h1>立ち絵</h1>
        {team.tachie.map((member, i) => (
          <SpTeamItem imgSrc={member.iconSrc} name={member.name} role={member.role} key={i} />
        ))}
        <h1>告知</h1>
        {team.kokuchi.map((member, i) => (
          <SpTeamItem imgSrc={member.iconSrc} name={member.name} role={member.role} key={i} />
        ))}
        <h1>放送</h1>
        {team.housou.map((member, i) => (
          <SpTeamItem imgSrc={member.iconSrc} name={member.name} role={member.role} key={i} />
        ))}
      </div>
      <div className="mt-[16.6666667vw] sp:mt-[125px]">&nbsp;</div>
      <SpMenu />
    </>
  );
}
