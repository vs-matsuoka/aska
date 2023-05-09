import Image from 'next/image';

type BackgroundProps = {
  src: string;
};

function Background({ src }: BackgroundProps) {
  return (
    <div className="fixed">
      <div className="pointer-events-none h-screen w-screen"></div>
      <Image
        src={src}
        alt="background"
        className="-z-50"
        fill
        quality={100}
        style={{
          objectFit: 'cover'
        }}
      />
    </div>
  );
}

export default Background;
