import { useSpring, animated, easings } from "react-spring"

export type LoopAnimationExampleProps = {
  text: string
}

function RotationBox() {
  const styles = useSpring({
    from: { rotateZ: 0 },
    to: { rotateZ: 180 },
    loop: true,
  })
  return <animated.div
    className="w-20 h-20 bg-emerald-400 rounded-xl"
    style={{ ...styles }}
  />
}

function BackNForth() {
  const styles = useSpring({
    loop: true,
    // loop: { reverse: true },
    from: { x: 0 },
    to: { x: 400 },
  })
  const { width, height } = useSpring({
    loop: true,
    from: { width: 200, height: 80 },
    to: { width: 80, height: 80 },
  })

  return <>
    <animated.div
      className="bg-emerald-400 rounded-l"
      style={{ width, height, ...styles }}
    />
  </>
}

export default function LoopAnimationExample({ text }: LoopAnimationExampleProps) {
  return (
    <div>
      <div className="md:container md:mx-auto">

        <RotationBox />
        <div className="flex items-center">
          <div className="py-4">
            <BackNForth />
          </div>
          <div className="py-32">
          </div>
        </div>
      </div>
    </div >
  )
}


