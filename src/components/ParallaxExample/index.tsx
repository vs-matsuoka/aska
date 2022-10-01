import Image from 'next/image'
import { Parallax, ParallaxBanner, useParallax } from 'react-scroll-parallax'

export default function ParallaxExample() {
  const { ref: ref1 } = useParallax<HTMLHeadingElement>({ speed: 5 });
  const { ref: ref2 } = useParallax<HTMLHeadingElement>({ speed: 1 });

  return (
    <>
      {[...Array(25)].map((_, i) => (
        <h1 key={i} className='text-6xl font-bold'>aaaaaaaaaaaaaa</h1>
      ))}
      <Parallax translateX={['-200px', '200px']}>
        <h1 className='text-6xl font-bold'>.</h1>
      </Parallax>
      <Parallax translateX={['200px', '-200px']}>
        <h1 className='text-6xl font-bold'>.</h1>
      </Parallax>
      <h1 className='text-6xl font-bold'>aaaaaaaaaaaaaa</h1>
      <h1 className='text-6xl font-bold'>aaaaaaaaaaaaaa</h1>
      <h1 className='text-6xl font-bold'>aaaaaaaaaaaaaa</h1>
      <h1 className='text-6xl font-bold' ref={ref1}>..............................</h1>
      <h1 className='text-6xl font-bold' ref={ref2}>ffffffffffffffffffff</h1>

      <ParallaxBanner
        layers={[
          {
            speed: -20,
            children: (
              <Image src={"banner-background.jpg"}
                alt="background"
                layout="fill"
              ></Image>
            ),
          },
          {
            speed: -40,
            children: (
              <Image src={"volga.png"}
                alt="volga"
                layout="responsive"
                width={4000}
                height={4000}
              ></Image>
            ),
          },
          {
            speed: -10,
            children: (
              <Image src={"banner-foreground.png"}
                alt="foreground"
                layout="fill"
              ></Image>
            ),
          },
        ]}
        className="aspect-[16/9]"
      >
        <div className="absolute inset-0 flex items-start justify-center">
          <Parallax translateX={['1000px', '0px']}>
            <h1 className="text-5xl text-white font-bold whitespace-nowrap" style={{
              textShadow: "-1px -1px 2px #333, 1px -1px 2px #333, -1px 1px 2px #333, 1px 1px 2px #333"
            }}>かっこいい</h1>
          </Parallax>
          <Parallax translateX={['900px', '-180px']} translateY={['48px', '48px']}>
            <h1 className="text-5xl text-white font-bold whitespace-nowrap" style={{
              textShadow: "-1px -1px 2px #333, 1px -1px 2px #333, -1px 1px 2px #333, 1px 1px 2px #333"
            }}>え？</h1>
          </Parallax>
          <Parallax translateX={['900px', '-180px']} translateY={['96px', '96px']}>
            <h1 className="text-5xl text-white font-bold whitespace-nowrap" style={{
              textShadow: "-1px -1px 2px #333, 1px -1px 2px #333, -1px 1px 2px #333, 1px 1px 2px #333"
            }}>嘘だろ</h1>
          </Parallax>
          <Parallax translateX={['1800px', '-180px']} translateY={['144px', '144px']}>
            <p className="text-5xl text-white font-bold whitespace-nowrap" style={{
              textShadow: "-1px -1px 2px #333, 1px -1px 2px #333, -1px 1px 2px #333, 1px 1px 2px #333"
            }}>きたあああああああああああああああああああああああああああああ</p>
          </Parallax>
        </div>

      </ParallaxBanner>

      {[...Array(25)].map((_, i) => (
        <h1 key={i} className='text-6xl font-bold'>aaaaaaaaaaaaaa</h1>
      ))}
    </>
  )
}

