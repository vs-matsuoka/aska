import classNames from 'classnames';
import Image from 'next/image';
import { useState } from 'react';
import { NextPageWithLayout } from '../../../pages/_app';
import * as gtag from '../../../utils/gtag';
import Background from 'components/Background';
import NewsList from 'components/NewsList';
import otomdmLink from 'const/otomdmLink';

const IndexPage: NextPageWithLayout = () => {
  const [redZone, setRedZone] = useState(false);
  const [evans, setEvans] = useState(false);

  return (
    <>
      <Background src="/Top/11_Top_pic_BG.jpg" />
      <div className="relative bg-cover bg-local">
        <div className="absolute -top-6 -z-10 flex w-full justify-center space-x-[0px] overflow-hidden">
          <div className="">
            <Image
              src="/Top/11_Top_pic_KeyVisual_Zeus.png"
              alt="zeus"
              className={classNames('max-w-none', { 'animate-zeus-float': !redZone && !evans, 'animate-redzone-left': redZone, 'animate-evans-left': evans })}
              width={1250}
              height={1250}
            />
          </div>
          <div className="mt-24">
            <Image
              src="/Top/11_Top_pic_KeyVisual_Amatelas.png"
              alt="amatelas"
              className={classNames('max-w-none', { 'animate-amateras-float': !redZone && !evans, 'animate-redzone-right': redZone, 'animate-evans-right': evans })}
              width={1250}
              height={1250}
            />
          </div>
        </div>
        <Background src="/Top/11_Top_pic_Overlay.png" />
        <div className="grid justify-items-center">
          <div>
            {/* ロゴ */}
            <Image src="/Top/11_Top_pic_Logo.png" alt="音MAD DREAM MATCH -天-" width={677} height={386} />
          </div>
          <div className="flex">
            <div className="">
              <Image
                src="/Top/11_Top_Text_12_Tate.png"
                alt="音MADマッチングバラエティ"
                className="mr-[3px] mt-14 max-w-none"
                width={175}
                height={445}
                onDoubleClick={() => {
                  setRedZone(!redZone);
                  setEvans(false);
                  if (!redZone) {
                    gtag.event({
                      action: 'redzone',
                      category: 'redzone',
                      label: 'redzone'
                    });
                  }
                }}
              />
            </div>
            <div className="grid content-start justify-items-center">
              <Image src="/Top/11_Top_Text_01.png" className="max-w-none" alt="2023年9月17日 開幕" width={373} height={88} />
              <div className="flex gap-x-[7px]">
                <a href={otomdmLink.niconico} target="_blank">
                  <Image src="/Top/11_Top_Text_02_niconico.png" alt="ニコニコ動画" className="max-w-none" width={140} height={40} />
                </a>
                <a href={otomdmLink.youtube} target="_blank">
                  <Image src="/Top/11_Top_Text_03_youtube.png" alt="YouTube" className="max-w-none" width={140} height={40} />
                </a>
                <a href={otomdmLink.twitter} target="_blank">
                  <Image src="/Top/11_Top_Text_04_Twitter.png" alt="Twitter" className="max-w-none" width={140} height={40} />
                </a>
              </div>
              <div className="mt-[10px] grid justify-items-center">
                <div className="relative top-[-2px] grid justify-items-center">
                  <div className="">
                    <Image src="/Top/11_Top_Twitter_Timeline.png" alt="Twitter" className="max-w-none" width={412} height={404} />
                  </div>
                  <div className="absolute top-0 grid justify-items-center">
                    <Image src="/Top/11_Top_Text_05_Saisin.png" className="max-w-none" alt="最新情報" width={140} height={40} />
                    {/* <Timeline /> */}
                    <NewsList />
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <Image
                src="/Top/11_Top_Text_11_Tate.png"
                alt="史上空前 挑むは頂点!!"
                className="ml-[3px] mt-16 max-w-none"
                width={157}
                height={432}
                onDoubleClick={() => {
                  setEvans(!evans);
                  setRedZone(false);
                  if (!evans) {
                    gtag.event({
                      action: 'evans',
                      category: 'evans',
                      label: 'evans'
                    });
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
