import Image, { ImageProps } from 'next/image';

function SpResponsiveImage(
  props: Omit<ImageProps, 'fill' | 'width' | 'height'> & {
    width: number;
    height: number;
  }
) {
  const { width, height, src, alt, className, ...imageProps } = props;
  const standard = 750;

  if (width === standard) {
    return <Image src={src} alt={alt} width={width} height={height} {...imageProps} />;
  }

  return (
    <div
      className={className}
      style={{
        width: `${(width / standard) * 100}vw`,
        height: `${(height / standard) * 100}vw`
      }}
    >
      <Image src={src} alt={alt} className="max-w-none" fill {...imageProps} />
    </div>
  );
}

export default SpResponsiveImage;
