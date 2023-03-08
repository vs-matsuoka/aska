import Image from 'next/image';
import Link from 'next/link';
import { useAssetPath } from 'hooks/useAssetPath';

const MenuBar = () => (
  <div className="relative">
    <Image
      src={useAssetPath('/MenuBar/00_Menu_Base.png')}
      alt="MenuBar Base"
      layout="fixed"
      width={1920}
      height={300}
    />
    <div className="absolute inset-1/2 flex flex-row items-center justify-center space-x-[37px]">
      <a href="#">
        <Image
          src={useAssetPath('/MenuBar/00_Menu_Text_01.png')}
          alt="overview"
          layout="fixed"
          width={150}
          height={50}
        />
      </a>
      <Link href="/contestants" passHref>
        <a href="#">
          <Image
            src={useAssetPath('/MenuBar/00_Menu_Text_02.png')}
            alt="contestant"
            layout="fixed"
            width={150}
            height={50}
          />
        </a>
      </Link>
      <a href="#">
        <Image
          src={useAssetPath('/MenuBar/00_Menu_Text_03.png')}
          alt="movie"
          layout="fixed"
          width={150}
          height={50}
        />
      </a>
      <a href="#">
        <Image
          src={useAssetPath('/MenuBar/00_Menu_Text_04.png')}
          alt="operation"
          layout="fixed"
          width={150}
          height={50}
        />
      </a>
      <Link href="/example" passHref>
        <a href="#">
          <Image
            src={useAssetPath('/MenuBar/00_Menu_Text_05.png')}
            alt="unknown"
            layout="fixed"
            width={150}
            height={50}
          />
        </a>
      </Link>
    </div>
  </div>
);

export default MenuBar;
