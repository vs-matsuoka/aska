import { useSpring, animated } from 'react-spring';
import MenuBar from 'components/MenuBar';

type LayoutProps = {
  children?: React.ReactNode;
  withVignette?: boolean;
};

function Layout({ children }: LayoutProps) {
  const redOffset = -40;
  const blueOffset = -redOffset;
  const [redPath] = useSpring(() => ({
    from: { clipPath: `polygon(${0 + redOffset}% ${-100 + redOffset}%, ${100 + redOffset}% ${0 + redOffset}%, ${0 + redOffset}% ${100 + redOffset}%, ${-100 + redOffset}% ${0 + redOffset}%)` },
    to: { clipPath: `polygon(${100 + blueOffset}% ${0 + blueOffset}%, ${200 + blueOffset}% ${100 + blueOffset}%, ${100 + blueOffset}% ${200 + blueOffset}%, ${0 + blueOffset}% ${100 + blueOffset}%)` },
  }))

  const [bluePath] = useSpring(() => ({
    from: { clipPath: `polygon(${100 + blueOffset}% ${0 + blueOffset}%, ${200 + blueOffset}% ${100 + blueOffset}%, ${100 + blueOffset}% ${200 + blueOffset}%, ${0 + blueOffset}% ${100 + blueOffset}%)` },
    to: { clipPath: `polygon(${0 + redOffset}% ${-100 + redOffset}%, ${100 + redOffset}% ${0 + redOffset}%, ${0 + redOffset}% ${100 + redOffset}%, ${-100 + redOffset}% ${0 + redOffset}%)` },
  }))


  return (
    <div
      className="grid min-h-screen w-full justify-center"
      style={{
        gridTemplateRows: 'auto 1fr',
        gridTemplateColumns: '100%'
      }}
    >
      <div className="pt-20"></div>
      <div className="relative flex items-center justify-center" data-testid="children">
        {children}
      </div>
      <div className="absolute">
      </div>
      <div className="absolute pointer-events-none">
        <div
          className="grid min-h-screen w-full justify-center pointer-events-none"
          style={{
            gridTemplateRows: 'auto 1fr',
            gridTemplateColumns: '100%'
          }}
        >
          <div className="h-[74px]"></div>
          <animated.div className="h-full w-screen bg-mdmBlue" style={{ ...bluePath }}></animated.div>
        </div>
      </div>
      <div className="absolute pointer-events-none">
        <div
          className="grid min-h-screen w-full justify-center pointer-events-none"
          style={{
            gridTemplateRows: 'auto 1fr',
            gridTemplateColumns: '100%'
          }}
        >
          <div className="h-[74px]"></div>
          <animated.div className="h-full w-screen bg-mdmRed" style={{ ...redPath }}></animated.div>
        </div>
      </div>
      <div className="fixed w-full">
        <MenuBar />
      </div>
    </div >
  );
}

export default Layout;
