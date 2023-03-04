import Image from 'next/image';
import { useAssetPath } from 'hooks/useAssetPath';

const MenuBar = () => (
  <Image
    src={useAssetPath('/MenuBar/00_Menu_Base.png')}
    alt="MenuBar Base"
    layout="fixed"
    width={1920}
    height={300}
  />
);

export default MenuBar;
