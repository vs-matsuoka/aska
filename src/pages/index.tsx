import Image from 'next/future/image';
import { ReactElement } from 'react';
import { Timeline } from 'react-twitter-widgets';
import { NextPageWithLayout } from './_app';
import Background from 'components/Background';
import Layout from 'components/Layout';

const Top: NextPageWithLayout = () => {
  return (
    <>
      <Background src="/Top/11_Top_pic_BG.png" />
      <div className="absolute -top-6 flex flex-row justify-center space-x-[0px]">
        <div className="">
          <Image
            src="/Top/11_Top_pic_KeyVisual_Zeus.png"
            alt="zeus"
            className="max-w-none"
            width={1250}
            height={1250}
          />
        </div>
        <div className="mt-24">
          <Image
            src="/Top/11_Top_pic_KeyVisual_Amatelas.png"
            alt="amatelas"
            className="max-w-none"
            width={1250}
            height={1250}
          />
        </div>
      </div>
      <Background src="/Top/11_Top_pic_Overlay.png" />
      <div className="absolute bottom-[450px]">
        <Image
          src="/Top/11_Top_pic_Logo.png"
          alt="logo"
          width={725}
          height={475}
        />
      </div>
      <div className="absolute bottom-[448px]">
        <Image
          src="/Top/11_Top_Text_01.png"
          alt="date"
          width={400}
          height={125}
        />
      </div>
      <div className="absolute bottom-[415px] flex flex-row justify-center space-x-[-20px]">
        <div>
          <Image
            src="/Top/11_Top_Text_02_niconico.png"
            alt="niconico"
            width={200}
            height={60}
          />
        </div>
        <div>
          <Image
            src="/Top/11_Top_Text_03_youtube.png"
            alt="youtube"
            width={200}
            height={60}
          />
        </div>
      </div>
      <div className="absolute bottom-[360px]">
        <Image
          src="/Top/11_Top_Text_04_Twitter.png"
          alt="twitter"
          width={180}
          height={70}
        />
      </div>
      <div className="absolute bottom-[42px] flex flex-row justify-center space-x-[430px]">
        <div>
          <Image
            src="/Top/11_Top_Text_12_Tate.png"
            alt="lefttext"
            width={200}
            height={500}
          />
        </div>
        <div>
          <Image
            src="/Top/11_Top_Text_11_Tate.png"
            alt="righttext"
            width={200}
            height={500}
          />
        </div>
      </div>
      <div className="absolute bottom-[38px] flex flex-row justify-center space-x-[330px]">
        <div>
          <Image
            src="/Top/11_Top_Frame_Right.png"
            alt="rightframe"
            width={70}
            height={380}
          />
        </div>
        <div>
          <Image
            src="/Top/11_Top_Frame_Left.png"
            alt="leftframe"
            width={70}
            height={380}
          />
        </div>
      </div>
      {/* <Timeline dataSource={{ sourceType: 'profile', screenName: 'otoMDM' }} /> */}
    </>
  );
};

Top.getLayout = function getLayout(page: ReactElement) {
  return <Layout withOverflowHidden>{page}</Layout>;
};

export default Top;
