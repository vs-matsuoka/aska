import Image from 'next/image';
import { useAssetPath } from 'hooks/useAssetPath';

export type MenuTextProps = {
  href: string;
  imagePath: string;
};

const MenuText = ({ href, imagePath }: MenuTextProps) => (
  <a href={href}>
    <Image
      src={useAssetPath(imagePath)}
      alt="MenuBar Text"
      layout="fixed"
      width={150}
      height={50}
    />
  </a>
);

export default MenuText;
