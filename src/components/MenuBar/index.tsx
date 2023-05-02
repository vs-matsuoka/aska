import Image from 'next/future/image';
import Link from 'next/link';

const MenuBar = () => (
  <div className="relative">
    <div className="absolute top-[-113px] h-[190px] w-screen">
      <Image
        src="/MenuBar/00_Menu_Base.png"
        alt="MenuBar Base"
        className="h-[190px] select-none"
        fill
        style={{
          objectFit: 'fill'
        }}
      />
    </div>
    <div className="absolute inset-1/2 top-[36px] flex flex-row items-center justify-center space-x-[37px]">
      <Link href="/" passHref>
        <a>
          <Image src="/MenuBar/00_Menu_Text_01.png" alt="top" className="max-w-none" width={150} height={50} />
        </a>
      </Link>
      <Link href="/about" passHref>
        <a>
          <Image src="/MenuBar/00_Menu_Text_02.png" alt="overview" className="max-w-none" width={150} height={50} />
        </a>
      </Link>
      <Link href="/entries" passHref>
        <a>
          <Image src="/MenuBar/00_Menu_Text_03.png" alt="entries" className="max-w-none" width={150} height={50} />
        </a>
      </Link>
      <a href="#">
        <Image src="/MenuBar/00_Menu_Text_04.png" alt="movie" className="max-w-none" width={150} height={50} />
      </a>
      <a href="#">
        <Image src="/MenuBar/00_Menu_Text_05.png" alt="operation" className="max-w-none" width={150} height={50} />
      </a>
    </div>
  </div>
);

export default MenuBar;
