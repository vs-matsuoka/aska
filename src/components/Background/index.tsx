import Image from 'next/image';

type BackgroundProps = {
  src: string;
};

function Background({ src }: BackgroundProps) {
  return (
    <div className="fixed -z-50">
      <div className="h-screen w-screen"></div>
      <Image
        src={src}
        alt="background"
        className="select-none"
        fill
        style={{
          objectFit: 'cover'
        }}
      />
    </div>
  );
}

export default Background;
