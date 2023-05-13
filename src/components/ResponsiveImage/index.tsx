import Image, { ImageProps } from 'next/image';
import { useEffect, useState } from 'react';

function ResponsiveImage(
  props: Omit<ImageProps, 'fill' | 'width' | 'height'> & {
    width: number;
    height: number;
    alwaysResponsive?: boolean;
  }
) {
  const { alwaysResponsive, width, height, src, alt, className, ...imageProps } = props;
  const standard = 1920;
  // useMediaQuery だとクライアントサイドでのレンダリング時に
  // const isNarrow = useMediaQuery({ query: '(min-width: 1920px)' });
  const [isNarrow, setIsNarrow] = useState(false);
  useEffect(() => {
    setIsNarrow(window.innerWidth > 1920);
    const updateWindowDimensions = () => {
      setIsNarrow(window.innerWidth > 1920);
    };

    window.addEventListener('resize', updateWindowDimensions);
    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, []);
  const isFixedWidth = alwaysResponsive ? false : isNarrow;

  if (width === standard) {
    return <Image src={src} alt={alt} width={width} height={height} {...imageProps} />;
  }

  return (
    <div
      className={`${className ?? ''}`}
      style={{
        width: isFixedWidth ? `${width}px` : `${(width / standard) * 100}vw`,
        height: isFixedWidth ? `${height}px` : `${(height / standard) * 100}vw`,
        objectFit: 'cover'
      }}
    >
      <Image src={src} alt={alt} className="max-w-none" fill sizes={`${width}px`} {...imageProps}></Image>
    </div>
  );
}

export default ResponsiveImage;
