import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useAssetPath } from 'hooks/useAssetPath';
import MenuBar from 'components/MenuBar';

export default function Top() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2 * 1000);
  }, []);

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      {isLoading ? (
        <>
          <div className="fixed">
            <Image
              src={useAssetPath('/top/11_Top_pic_Logo.png')}
              alt="logo"
              layout="fixed"
              width={725}
              height={475}
            />
          </div>
        </>
      ) : (
        <>
          <Image
            src={useAssetPath('/top/11_Top_pic_BG.png')}
            alt="background"
            layout="fixed"
            className="object-none"
            width={1920}
            height={1080}
          />

          <div className="fixed -top-[110px]">
            <MenuBar />
          </div>
          <div className="absolute -top-6 flex flex-row justify-center space-x-[0px] pt-20">
            <div className="">
              <Image
                src={useAssetPath('/top/11_Top_pic_KeyVisual_Zeus.png')}
                alt="zeus"
                layout="fixed"
                width={1250}
                height={1250}
              />
            </div>
            <div className="mt-24">
              <Image
                src={useAssetPath('/top/11_Top_pic_KeyVisual_Amatelas.png')}
                alt="amatelas"
                layout="fixed"
                width={1250}
                height={1250}
              />
            </div>
          </div>

          <div className="absolute top-0">
            <Image
              src={useAssetPath('/top/11_Top_pic_Overlay.png')}
              alt="overlay"
              layout="fixed"
              width={1920}
              height={1080}
            />
          </div>

          <div className="absolute bottom-[450px]">
            <Image
              src={useAssetPath('/top/11_Top_pic_Logo.png')}
              alt="logo"
              layout="fixed"
              width={725}
              height={475}
            />
          </div>
          <div className="absolute bottom-[448px]">
            <Image
              src={useAssetPath('/top/11_Top_Text_01.png')}
              alt="date"
              layout="fixed"
              width={400}
              height={125}
            />
          </div>
          <div className="absolute bottom-[415px] flex flex-row justify-center -space-x-[20px]">
            <div>
              <Image
                src={useAssetPath('/top/11_Top_Text_02_niconico.png')}
                alt="niconico"
                layout="fixed"
                width={200}
                height={60}
              />
            </div>
            <div>
              <Image
                src={useAssetPath('/top/11_Top_Text_03_youtube.png')}
                alt="youtube"
                layout="fixed"
                width={200}
                height={60}
              />
            </div>
          </div>
          <div className="absolute bottom-[360px]">
            <Image
              src={useAssetPath('/top/11_Top_Text_04_Twitter.png')}
              alt="twitter"
              layout="fixed"
              width={180}
              height={70}
            />
          </div>

          <div className="absolute bottom-[42px] flex flex-row justify-center space-x-[430px]">
            <div>
              <Image
                src={useAssetPath('/top/11_Top_Text_12_Tate.png')}
                alt="lefttext"
                layout="fixed"
                width={200}
                height={500}
              />
            </div>
            <div>
              <Image
                src={useAssetPath('/top/11_Top_Text_11_Tate.png')}
                alt="righttext"
                layout="fixed"
                width={200}
                height={500}
              />
            </div>
          </div>

          <div className="absolute bottom-[38px] flex flex-row justify-center space-x-[330px]">
            <div>
              <Image
                src={useAssetPath('/top/11_Top_Frame_Right.png')}
                alt="rightframe"
                layout="fixed"
                width={70}
                height={380}
              />
            </div>
            <div>
              <Image
                src={useAssetPath('/top/11_Top_Frame_Left.png')}
                alt="leftframe"
                layout="fixed"
                width={70}
                height={380}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
