import Image from "next/future/image"

type BackgroundProps = {
  src: string,
}

function Background({ src }: BackgroundProps) {
  return (
    <div className="fixed">
      <div className="h-screen w-screen"></div>
      <Image
        src={src}
        alt="background"
        className="-z-50"
        fill
        style={{
          objectFit: 'cover'
        }}
      />
    </div>
  )
}

export default Background
