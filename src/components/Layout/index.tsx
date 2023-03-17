import Image from 'next/future/image';
import MenuBar from 'components/MenuBar';

type LayoutProps = {
  children?: React.ReactNode;
  withVignette?: boolean;
};

function Layout({ children }: LayoutProps) {
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
      <div className="fixed w-full">
        <MenuBar />
      </div>
    </div>
  );
}

export default Layout;
