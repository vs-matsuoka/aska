import Image from 'next/future/image';
import OldImage from 'next/image';
import { useAssetPath } from 'hooks/useAssetPath';
import MenuBar from 'components/MenuBar';
import Layout from 'components/Layout';
import Background from 'components/Background';

export default function Top() {
  return (
    <Layout withOverflowHidden>
      {/* <Image
        src="/Top/11_Top_pic_BG.png"
        alt="background"
        layout="fixed"
        className="object-none"
        width={1920}
        height={1080}
      /> */}
      <Background src="/Top/11_Top_pic_BG.png" />
      {/* <div className="fixed -top-[110px]">
        <MenuBar />
      </div> */}
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
      {/* <div className="absolute top-0">
        <Image
          src="/Top/11_Top_pic_Overlay.png"
          alt="overlay"
          layout="fixed"
          width={1920}
          height={1080}
        />
      </div> */}
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
      <div className="absolute bottom-[415px] flex flex-row justify-center -space-x-[20px]">
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
      <a
        className="twitter-timeline"
        href="https://twitter.com/otoMDM?ref_src=twsrc%5Etfw"
      >
        Tweets by otoMDM
      </a>{' '}
      <script async src="https://platform.twitter.com/widgets.js"></script>
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
    </Layout>
  );
}
