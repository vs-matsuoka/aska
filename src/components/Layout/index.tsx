import Image from 'next/future/image';
import MenuBar from 'components/MenuBar';

type LayoutProps = {
  children?: React.ReactNode;
  withVignette?: boolean;
};

function Layout({ children, withVignette }: LayoutProps) {
  return (
    <div
      className="grid min-h-screen w-full justify-center"
      style={{
        gridTemplateRows: 'auto 1fr',
        gridTemplateColumns: '100%'
      }}
    >
      <div className="fixed">
        <div className="h-screen w-screen"></div>
        <Image
          src="/Entry/21_Entry_pic_BG.png"
          alt="background"
          className="-z-50"
          fill
          style={{
            objectFit: 'cover'
          }}
        />
      </div>
      {withVignette && (
        <div className="fixed">
          <div className="h-screen w-screen"></div>
          <Image
            src="/Entry/21_Entry_pic_vignette.png"
            alt="background"
            fill
            style={{
              objectFit: 'fill'
            }}
          />
        </div>
      )}
      <div className="pt-20"></div>
      <div className="relative flex items-center justify-center">
        {children}
      </div>
      <div className="fixed w-full">
        <MenuBar />
      </div>
    </div>
  );
}

export default Layout;
