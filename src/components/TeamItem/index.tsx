import Image from 'next/future/image';

type TeamItemProps = {
  name: string;
  imgSrc: string;
  role: string;
};

const TeamItem = ({ name, imgSrc, role }: TeamItemProps) => (
  <div className="h-[140px] w-[320px] border-[4px] border-[#ccad70] bg-gradient-to-t from-[#262426] via-[#262426] to-[#3a393a]">
    <div className="absolute ml-[-4px] mt-[-4px]">
      <Image src="/Team/grad_long.png" alt="grad" width={320} height={140} />
    </div>
    <div className="relative flex gap-[12px]">
      <div className="my-[14px] ml-[8px]">
        <div className="flex">
          <Image src={imgSrc} alt={name} width={104} height={104} />
        </div>
      </div>
      <div
        className="mt-[14px] drop-shadow-[0_0_3px_#000000]"
        style={{
          fontFamily: 'FOT-UD角ゴ_ラージ Pr6 E',
          lineHeight: '1'
        }}
      >
        <p className="text-[15px] text-white" data-testid="role">
          {role}
        </p>
        <p className="mt-[8px] text-[28px] text-white" data-testid="name">
          {name}
        </p>
      </div>
    </div>
  </div>
);

export default TeamItem;
