import Image from 'next/image';
import { useAssetPath } from 'hooks/useAssetPath';

export type MenuTextProps = {
  href: string;
};

const MenuText = ({ href }: MenuTextProps) => (
  <a href={href}>
    <Image src={useAssetPath(href)} />
  </a>
);

export default MenuText;
