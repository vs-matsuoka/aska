import Image, { ImageProps } from 'next/future/image';

type SpTeamItemProps = {
  name: string;
  role: string;
  imgSrc: string;
};

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

const SpTeamItem = ({ name, imgSrc, role }: SpTeamItemProps) => (
  // sp:h-[75px] sp:w-[700px] sp:border-[2px]
  <div className="h-[10vw] w-[93.3333333333vw] border-[0.2666666667vw] border-[#ccad70] bg-gradient-to-t from-[#262426] to-[#3a393a]">
    {/* sp:gap-[6px] */}
    <div className="flex gap-[0.8vw]">
      {/* sp:my-[8px] sp:ml-[9px] */}
      <div className="my-[1.0666666667vw] ml-[1.2vw]">
        <div className="relative flex">
          <ResponsiveImage src={imgSrc} alt={name} width={55} height={55} />
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
          {role}
        </p>
        {/* sp:ml-[15px] sp:mt-[3px] sp:text-[36px] */}
        <p className="ml-[2vw] mt-[0.5333333333vw] text-[4.8vw] text-[#CCAD70]" data-testid="name">
          {name}
        </p>
      </div>
      <div className="flex h-auto grow flex-row-reverse">
        {/* sp:mr-[17px] sp:gap-[18px] */}
        <div className="my-auto mr-[2.2666666667vw] flex gap-[2.4vw]">
          {/* TODO: あとで正しいアイコンに置き換え */}
          {/* sp:h-[55px] sp:w-[55px] */}
          <div className="h-[7.3333333333vw] w-[7.3333333333vw] bg-white">plchld1</div>
          <div className="h-[7.3333333333vw] w-[7.3333333333vw] bg-red-500">plchld2</div>
          <div className="h-[7.3333333333vw] w-[7.3333333333vw] bg-blue-500">plchld3</div>
        </div>
      </div>
    </div>
  </div>
);

export default SpTeamItem;
