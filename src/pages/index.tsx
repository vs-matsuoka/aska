import Image from 'next/future/image';
import { ReactElement } from 'react';
// import { Timeline } from 'react-twitter-widgets';
import { NextPageWithLayout } from './_app';
import Background from 'components/Background';
import Layout from 'components/Layout';
import Timeline from 'components/Timeline';

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
      <div className="absolute top-0 grid justify-items-center">
        <div>
          {/* ロゴ */}
          <Image
            src="/Top/11_Top_pic_Logo.png"
            alt="logo"
            width={677}
            height={386}
          />
        </div>
        <div className="flex">
          <div className="flex">
            <Image
              src="/Top/11_Top_Text_12_Tate.png"
              alt="left_text"
              className="object-none"
              width={175}
              height={445}
            />
            <Image
              src="/Top/11_Top_Frame_Left.png"
              alt="left_frame"
              className="object-none"
              width={46}
              height={366}
            />
          </div>
          <div className="grid content-start justify-items-center">
            <Image
              src="/Top/11_Top_Text_01.png"
              alt="data"
              width={373}
              height={88}
            />
            <div className="flex">
              <Image
                src="/Top/11_Top_Text_02_niconico.png"
                alt="niconico"
                className="object-none"
                width={172}
                height={44}
              />
              <Image
                src="/Top/11_Top_Text_03_youtube.png"
                alt="youtube"
                className="object-none"
                width={172}
                height={44}
              />
            </div>
            <div className="mt-4 grid justify-items-center">
              <Image
                src="/Top/11_Top_Text_04_Twitter.png"
                alt="twitter"
                width={132}
                height={35}
              />
              <div className="relative">
                <div className="">
                  <Image
                    src="/Top/11_Top_TwitterBG.png"
                    alt="right_frame"
                    width={370}
                    height={410}
                  />
                </div>
                <div className="absolute top-0">
                  <Timeline />
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <Image
              src="/Top/11_Top_Frame_Right.png"
              alt="right_frame"
              className="object-none"
              width={46}
              height={366}
            />
            <Image
              src="/Top/11_Top_Text_11_Tate.png"
              alt="right_text"
              className="object-none"
              width={157}
              height={432}
            />
          </div>
        </div>
      </div>
    </>
  );
};

Top.getLayout = function getLayout(page: ReactElement) {
  return <Layout withOverflowHidden>{page}</Layout>;
};

export default Top;
