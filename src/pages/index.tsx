import Head from 'next/head';
import Image from 'next/image';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import Background from 'components/Background';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Timeline from 'components/Timeline';
import otomdmLink from 'const/otomdmLink';

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
      <SEO />
      <Background src="/Top/11_Top_pic_BG.jpg" />
      <div
        className="relative w-full overflow-x-hidden bg-cover bg-local"
        style={{
          // TODO: 5remはヘッダーの高さだが、少なくともハードコードは避けたい
          height: 'calc(100vh - 4rem)'
        }}
      >
        <div className="absolute -top-6 -z-10 flex w-full justify-center space-x-[0px] overflow-hidden">
          <div className="">
            <Image src="/Top/11_Top_pic_KeyVisual_Zeus.png" alt="zeus" className="max-w-none" width={1250} height={1250} />
          </div>
          <div className="mt-24">
            <Image src="/Top/11_Top_pic_KeyVisual_Amatelas.png" alt="amatelas" className="max-w-none" width={1250} height={1250} />
          </div>
        </div>
        <Background src="/Top/11_Top_pic_Overlay.png" />
        <div className="grid justify-items-center">
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
                <a href={otomdmLink.niconico} target="_blank">
                  <Image src="/Top/11_Top_Text_02_niconico.png" alt="niconico" className="object-none" width={180} height={50} />
                </a>
                <a href={otomdmLink.youtube} target="_blank">
                  <Image src="/Top/11_Top_Text_03_youtube.png" alt="youtube" className="object-none" width={180} height={50} />
                </a>
              </div>
              <div className="mt-4 grid justify-items-center">
                <div className="relative top-[-2px] grid justify-items-center">
                  <div className="">
                    <Image src="/Top/11_Top_Twitter_Timeline.png" alt="twitter_timeline" className="object-none" width={412} height={404} />
                  </div>
                  <div className="absolute top-0 grid justify-items-center">
                    <a href={otomdmLink.twitter} target="_blank">
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
      </div>
    </>
  );
};

Top.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Top;
