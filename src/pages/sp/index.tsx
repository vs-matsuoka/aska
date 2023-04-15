import Image from 'next/future/image';
import Background from 'components/Background';

export default function Top() {
  return (
    <>
      <Background src="/Sp/Top/s11_Top_BG.png" />
      {/* <div className="absolute -top-6 flex flex-row justify-center space-x-[0px]">
        <div className="">
          <Image
            src="/Sp/Top/s11_Top_KeyVisual_02.png"
            alt="zeus"
            className="max-w-none"
            width={1050}
            height={1050}
          />
        </div>
        <div className="mt-20">
          <Image
            src="/Sp/Top/s11_Top_KeyVisual_01.png"
            alt="amatelas"
            className="max-w-none"
            width={1050}
            height={1050}
          />
        </div>
      </div> */}
      <Background src="/Sp/Top/s11_Top_GradOverlay.png" />
      <div className="relative top-0 flex flex-col items-center space-y-[-45px]">
        <Image
          src="/Sp/Top/s11_Top_Logo.png"
          alt="logo"
          className="max-w-none"
          width={750}
          height={450}
        />
        <Image
          src="/Sp/Top/s11_Top_Text_01_Kaisai.png"
          alt="data"
          className="max-w-none"
          width={400}
          height={300}
        />
      </div>
      <div className="relative top-0 flex flex-col items-center space-y-6">
        <Image
          src="/Sp/Top/s11_Top_Button_01_SNS_NicoNico.png"
          alt="niconico"
          className="max-w-none"
          width={380}
          height={48}
        />
        <Image
          src="/Sp/Top/s11_Top_Button_02_SNS_YouTube.png"
          alt="youtube"
          className="max-w-none"
          width={380}
          height={48}
        />
        <Image
          src="/Sp/Top/s11_Top_Button_03_SNS_Twitter.png"
          alt="twitter"
          className="max-w-none"
          width={380}
          height={48}
        />
      </div>
    </>
  );
}
