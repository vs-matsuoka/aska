import Image from 'next/image';
import { useAssetPath } from 'hooks/useAssetPath';

export type MenuTextProps = {
  href: string;
  imagePath: string;
};

const MenuText = ({ href, imagePath }: MenuTextProps) => (
  <a href={href}>
    <Image src={useAssetPath(imagePath)} />
  </a>
);

export default MenuText;
