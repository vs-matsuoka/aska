import Image from 'next/image';
import { useAssetPath } from 'hooks/useAssetPath';
import MenuText from 'components/MenuText';

const MenuBar = () => (
  <div className="relative">
    <Image
      src={useAssetPath('/MenuBar/00_Menu_Base.png')}
      alt="MenuBar Base"
      layout="fixed"
      width={1920}
      height={300}
    />
    <div className="absolute inset-1/2 flex flex-row items-center justify-center">
      <MenuText href="" imagePath="MenuBar/00_Menu_Text_01.png" />
      <MenuText href="" imagePath="MenuBar/00_Menu_Text_02.png" />
      <MenuText href="" imagePath="MenuBar/00_Menu_Text_03.png" />
      <MenuText href="" imagePath="MenuBar/00_Menu_Text_04.png" />
      <MenuText href="" imagePath="MenuBar/00_Menu_Text_05.png" />
    </div>
  </div>
);

export default MenuBar;
