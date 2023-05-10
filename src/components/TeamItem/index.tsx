import Image from 'next/image';
import ResponsiveImage from 'components/ResponsiveImage';

type TeamItemProps = {
  name: string;
  imgSrc: string;
  role: string;
  hasLongName?: boolean;
};

const TeamItem = ({ name, imgSrc, role, hasLongName }: TeamItemProps) => (
  <div className="relative h-[7.2916666667vw] w-[16.6666666667vw] border-[0.2083333333vw] border-[#ccad70] bg-gradient-to-t from-[#262426] via-[#262426] to-[#3a393a] 4xl:h-[140px] 4xl:w-[320px] 4xl:border-[4px]">
    <div className="absolute ml-[-0.2083333333vw] mt-[-0.2083333333vw] 4xl:ml-[-4px] 4xl:mt-[-4px]">
      <ResponsiveImage className="relative" src="/Team/grad_long.png" alt="grad" width={320} height={140} />
    </div>
    <div className="relative flex gap-[0.625vw] 4xl:gap-[12px]">
      <div className="my-[0.7291666667vw] ml-[0.4166666667vw] 4xl:my-[14px] 4xl:ml-[8px]">
        <div className="flex">
          <ResponsiveImage className="relative" src={imgSrc} alt={name} width={104} height={104} />
        </div>
      </div>
      <div
        className="mt-[0.7291666667vw] drop-shadow-[0_0_0.15625vw_#000000] 4xl:mt-[14px] 4xl:drop-shadow-[0_0_3px_#000000]"
        style={{
          fontFamily: 'FOT-UD角ゴ_ラージ Pr6 E',
          lineHeight: '1'
        }}
      >
        <p className="text-[0.78125vw] text-white 4xl:text-[15px]" data-testid="role">
          {role}
        </p>
        <p
          className={'mt-[0.4166666667vw] text-white 4xl:mt-[8px] ' + (hasLongName ? 'text-[1.4583333333vw] 4xl:text-[16px]' : 'text-[1.4583333333vw] 4xl:text-[28px]')}
          data-testid="name"
        >
          {name}
        </p>
      </div>
    </div>
  </div>
);

export default TeamItem;
