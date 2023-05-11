import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import SpResponsiveImage from 'components/SpResponsiveImage';
import { TeamMember } from 'const/team';

function ResponsiveImage(
  props: Omit<ImageProps, 'fill' | 'width' | 'height'> & {
    width: number;
    height: number;
  }
) {
  const { width, height, src, alt, className, ...imageProps } = props;
  const standard = 750;

  return (
    <div
      className={className}
      style={{
        width: `${(width / standard) * 100}vw`,
        height: `${(height / standard) * 100}vw`
      }}
    >
      <Image src={src} alt={alt} className="max-w-none" fill {...imageProps}></Image>
    </div>
  );
}

const NullableButton = ({ href, children }: { href?: string; children: React.ReactNode }) => {
  return href ? (
    <Link href={href} passHref>
      {children}
    </Link>
  ) : (
    <div className="opacity-50">{children}</div>
  );
};

const SpTeamItem = ({ member }: { member: TeamMember }) => (
  // sp:h-[75px] sp:w-[700px] sp:border-[2px]
  <div className="h-[10vw] w-[93.3333333333vw] border-[0.2666666667vw] border-[#ccad70] bg-gradient-to-t from-[#262426] to-[#3a393a]">
    {/* sp:gap-[6px] */}
    <div className="flex gap-[0.8vw]">
      {/* sp:my-[8px] sp:ml-[9px] */}
      <div className="my-[1.0666666667vw] ml-[1.2vw]">
        <div className="relative flex">
          <ResponsiveImage src={member.iconSrc} alt={member.name} width={55} height={55} />
        </div>
      </div>
      <div
        // sp:mt-[5px]
        className="mt-[0.6666666667vw]"
        style={{
          fontFamily: 'FOT-UD角ゴ_ラージ Pr6 E',
          lineHeight: '1'
        }}
      >
        {/* sp:text-[20px] */}
        <p className="text-[2.6666666667vw] text-white" data-testid="role">
          {member.role}
        </p>
        {/* sp:ml-[15px] sp:mt-[3px] sp:text-[36px] */}
        <p className="ml-[2vw] mt-[0.5333333333vw] text-[4.8vw] text-[#CCAD70]" data-testid="name">
          {member.name}
        </p>
      </div>
      <div className="flex h-auto grow flex-row-reverse">
        {/* sp:mr-[17px] sp:gap-[18px] */}
        <div className="my-auto mr-[2.2666666667vw] flex gap-[2.4vw]">
          <NullableButton href={member.niconicoLink}>
            <SpResponsiveImage src="/Modal/22_Modal_pic_SNS_Nico.png" width={55} height={55} alt="niconico" className="relative" />
          </NullableButton>
          <NullableButton href={member.youtubeLink}>
            <SpResponsiveImage src="/Modal/22_Modal_pic_SNS_Youtube.png" width={55} height={55} alt="youtube" className="relative" />
          </NullableButton>
          <NullableButton href={member.twitterLink}>
            <SpResponsiveImage src="/Modal/22_Modal_pic_SNS_Twitter.png" width={55} height={55} alt="twitter" className="relative" />
          </NullableButton>
        </div>
      </div>
    </div>
  </div>
);

export default SpTeamItem;
