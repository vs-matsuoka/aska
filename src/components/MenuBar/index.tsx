import Image from 'next/future/image';

const MenuBar = () => (
  <div className="relative">
    <Image
      src="/MenuBar/00_Menu_Base.png"
      alt="MenuBar Base"
      className="select-none"
      width={1920}
      height={300}
    />
    <div className="absolute inset-1/2 flex flex-row items-center justify-center space-x-[37px]">
      <a href="#">
        <Image
          src="/MenuBar/00_Menu_Text_01.png"
          alt="overview"
          className="max-w-none"
          width={150}
          height={50}
        />
      </a>
      <a href="#">
        <Image
          src="/MenuBar/00_Menu_Text_02.png"
          alt="contestant"
          className="max-w-none"
          width={150}
          height={50}
        />
      </a>
      <a href="#">
        <Image
          src="/MenuBar/00_Menu_Text_03.png"
          alt="movie"
          className="max-w-none"
          width={150}
          height={50}
        />
      </a>
      <a href="#">
        <Image
          src="/MenuBar/00_Menu_Text_04.png"
          alt="operation"
          className="max-w-none"
          width={150}
          height={50}
        />
      </a>
      <a href="#">
        <Image
          src="/MenuBar/00_Menu_Text_05.png"
          alt="unknown"
          className="max-w-none"
          width={150}
          height={50}
        />
      </a>
    </div>
  </div>
);

export default MenuBar;
