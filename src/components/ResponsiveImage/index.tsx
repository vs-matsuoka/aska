import { css } from '@emotion/react';
import classNames from 'classnames';
import Image, { ImageProps } from 'next/image';
import { Key } from 'react';

function ResponsiveImage(
  props: Omit<ImageProps, 'fill' | 'width' | 'height'> & {
    width: number;
    height: number;
    alwaysResponsive?: boolean;
    innerKey?: Key | null;
    innerClassName?: string;
  }
) {
  const { alwaysResponsive, width, height, src, alt, className, innerKey, innerClassName, ...imageProps } = props;
  const standard = 1920;

  if (width === standard) {
    return <Image src={src} alt={alt} width={width} height={height} className={classNames(innerClassName)} {...imageProps} {...(innerKey ? { key: innerKey } : {})} />;
  }

  const responsiveImage = css({
    width: `${(width / standard) * 100}vw`,
    height: `${(height / standard) * 100}vw`,
    objectFit: 'cover',
    '@media (min-width: 1920px)': {
      width: `${width}px`,
      height: `${height}px`
    }
  });

  return (
    <div className={classNames('relative', className)} css={responsiveImage}>
      <Image src={src} alt={alt} className={classNames('max-w-none', innerClassName)} fill sizes={`${width}px`} {...imageProps} {...(innerKey ? { key: innerKey } : {})}></Image>
    </div>
  );
}

export default ResponsiveImage;
