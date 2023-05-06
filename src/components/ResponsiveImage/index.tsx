import Image, { ImageProps } from 'next/future/image';
import { useMediaQuery } from 'react-responsive';

function ResponsiveImage(
  props: Omit<ImageProps, 'fill' | 'width' | 'height'> & {
    width: number;
    height: number;
    alwaysResponsive?: boolean;
  }
) {
  const { alwaysResponsive, width, height, src, alt, className, ...imageProps } = props;
  const standard = 1920;
  const isNarrow = useMediaQuery({ query: '(min-width: 1920px)' });
  const isFixedWidth = alwaysResponsive ? false : isNarrow;

  return (
    <div
      className={`${className ?? ''}`}
      style={{
        width: isFixedWidth ? `${width}px` : `${(width / standard) * 100}vw`,
        height: isFixedWidth ? `${height}px` : `${(height / standard) * 100}vw`,
        objectFit: 'cover'
      }}
    >
      <Image src={src} alt={alt} className="max-w-none" fill {...imageProps}></Image>
    </div>
  );
}

export default ResponsiveImage;
