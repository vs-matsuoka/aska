import Image from 'next/image';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import Background from 'components/Background';
import Layout from 'components/Layout';
import Timeline from 'components/Timeline';

const Top: NextPageWithLayout = () => {
  /* useEffect(() => {
    const isSp = window.innerWidth < 768;
    const onSp = location.href.includes('/sp');
    if (!isSp && onSp) {
      router.push(location.href.replace('/sp', ''));
    }
    if (isSp && !onSp) {
      router.push(`/sp${location.href}`);
    }
  }, [router]); */
  return (
    <>
      <Background src="/Top/11_Top_pic_BG.png" />
      <div className="absolute -top-6 flex flex-row justify-center space-x-[0px]">
        <div className="">
          <Image src="/Top/11_Top_pic_KeyVisual_Zeus.png" alt="zeus" className="max-w-none" width={1250} height={1250} />
        </div>
        <div className="mt-24">
          <Image src="/Top/11_Top_pic_KeyVisual_Amatelas.png" alt="amatelas" className="max-w-none" width={1250} height={1250} />
        </div>
      </div>
      <Background src="/Top/11_Top_pic_Overlay.png" />
      <div className="absolute top-0 grid justify-items-center">
        <div>
          {/* ロゴ */}
          <Image src="/Top/11_Top_pic_Logo.png" alt="logo" width={677} height={386} />
        </div>
        <div className="flex">
          <div className="flex">
            <Image src="/Top/11_Top_Text_12_Tate.png" alt="left_text" className="mr-6 object-none" width={175} height={445} />
          </div>
          <div className="grid content-start justify-items-center">
            <Image src="/Top/11_Top_Text_01.png" alt="data" width={373} height={88} />
            <div className="flex">
              <a href="https://www.nicovideo.jp/user/78465303" target="_blank">
                <Image src="/Top/11_Top_Text_02_niconico.png" alt="niconico" className="object-none" width={180} height={50} />
              </a>
              <a href="https://www.youtube.com/@otoMDM" target="_blank">
                <Image src="/Top/11_Top_Text_03_youtube.png" alt="youtube" className="object-none" width={180} height={50} />
              </a>
            </div>
            <div className="mt-4 grid justify-items-center">
              <div className="relative top-[-2px] grid justify-items-center">
                <div className="">
                  <Image src="/Top/11_Top_Twitter_Timeline.png" alt="twitter_timeline" className="object-none" width={412} height={404} />
                </div>
                <div className="absolute top-0 grid justify-items-center">
                  <a href="https://twitter.com/otoMDM" target="_blank">
                    <Image src="/Top/11_Top_Text_04_Twitter.png" alt="twitter" width={140} height={40} />
                  </a>
                  <Timeline />
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <Image src="/Top/11_Top_Text_11_Tate.png" alt="right_text" className="ml-6 object-none" width={157} height={432} />
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
