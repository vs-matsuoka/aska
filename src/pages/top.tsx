import Image from 'next/image';
import { useAssetPath } from 'hooks/useAssetPath';

export default function Top() {
  return (
    <div className="container relative">
      <Image
        src={useAssetPath('/top/11_Top_pic_BG.png')}
        alt="background"
        layout="fixed"
        width={1920}
        height={1080}
      />
    </div>
  );
}
