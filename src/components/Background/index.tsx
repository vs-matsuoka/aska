import Image from 'next/image';

type BackgroundProps = {
  src: string;
};

function Background({ src }: BackgroundProps) {
  return (
    <div className="fixed">
      <div className="h-screen w-screen"></div>
      <Image
        src={src}
        alt="background"
        className="-z-50 select-none"
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
