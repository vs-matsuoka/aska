import Image from 'next/future/image';
import Link from 'next/link';
import { ReactElement, useCallback, useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { NextPageWithLayout } from './_app';
import Background from 'components/Background';
import Layout from 'components/Layout';
import useModal from 'hooks/useModal';

type ContestantRowProps = {
  contestantImages: string[];
  offset: number;
  onModalOpen: () => void;
};

function Contestant({
  src,
  onModalOpen
}: {
  src: string;
  onModalOpen: () => void;
}) {
  const [styles, api] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 0 },
    config: {
      // duration: 50
    }
  }));
  return (
    <div key={src} className="relative h-[150px] w-[90px] skew-y-[10deg]">
      <div className="h-[140px] w-[122px] skew-x-[-20deg] skew-y-[-11deg] bg-transparent"></div>
      <a href="#">
        <div
          className="absolute left-[-63px] top-[-57px] max-w-none"
          style={{
            clipPath: 'polygon(34% 25%, 88% 15%, 66% 75%, 12% 85%)'
          }}
          onClick={onModalOpen}
        >
          <Image
            src={src}
            className="max-w-none"
            alt="contestant"
            width={250}
            height={250}
          />
          <animated.div
            className="absolute left-[60px] top-[51px] h-[150px] w-[130px] skew-x-[-20deg] skew-y-[-11deg] bg-white"
            style={styles}
            onMouseEnter={() => {
              api.start({
                from: { opacity: 1 },
                to: { opacity: 0 }
              });
            }}
          ></animated.div>
        </div>
      </a>
    </div>
  );
}

function ContestantRow({
  contestantImages,
  offset,
  onModalOpen
}: ContestantRowProps) {
  return (
    <div
      className="grid skew-y-[-10deg] grid-cols-[repeat(10,143px)]"
      style={{ paddingLeft: `${offset}px` }}
    >
      {contestantImages.map((image) => (
        <Contestant src={image} onModalOpen={onModalOpen} key={image} />
      ))}
    </div>
  );
}

function ToggleCombiButton() {
  const [styles, api] = useSpring(() => ({
    from: { clipPath: 'polygon(125% 0%, 175% 0%, 150% 100%, 100% 100%)' },
    config: {
      duration: 500
    }
  }));

  const [shadowOn, setShadowOn] = useState(true);

  const trigger = useCallback(() => {
    const handler = setTimeout(() => {
      api.start({
        from: { clipPath: 'polygon(125% 0%, 175% 0%, 150% 100%, 100% 100%)' },
        to: { clipPath: 'polygon(-25% 0%, -15% 0%, -40% 100%, -50% 100%)' }
      });
    }, 150);
    setShadowOn(false);
    return () => clearTimeout(handler);
  }, [api]);

  const reset = useCallback(() => {
    // const handler = setTimeout(() => {
    setShadowOn(true);
    // }, 150);
    // return () => clearTimeout(handler);
  }, []);

  return (
    <div className="absolute right-[3rem] bottom-[-8rem]">
      <Image
        alt="conbi"
        src="/Entry/21_Entry_text_02_base.png"
        width={480}
        height={105}
      />
      <Image
        alt="conbi"
        className={'absolute top-0 left-0 ' + (shadowOn ? '' : 'hidden')}
        src="/Entry/21_Entry_text_02_shadow.png"
        width={480}
        height={105}
      />
      <Link href="/entries" passHref>
        <a>
          <div
            className="absolute top-0 left-0 transition hover:scale-125"
            onMouseEnter={trigger}
            onMouseLeave={reset}
          >
            <animated.div
              className="absolute top-0 left-0"
              style={{
                filter: 'brightness(0) invert(1)',
                ...styles
              }}
            >
              <Image
                alt="conbi"
                src="/Entry/21_Entry_text_02.png"
                width={480}
                height={105}
              />
            </animated.div>
            <Image
              alt="conbi"
              src="/Entry/21_Entry_text_02.png"
              width={480}
              height={150}
            />
          </div>
        </a>
      </Link>
    </div>
  );
}

function ResponsiveImage({
  src,
  alt,
  width,
  height,
  className
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  const standard = 1920;
  return (
    <div
      className={className}
      style={{
        width: `${(width / standard) * 100}vw`,
        height: `${(height / standard) * 100}vw`
      }}
    >
      <Image src={src} alt={alt} className="max-w-none" fill></Image>
    </div>
  );
}

function ContestantModal({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`fixed inset-0 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      } transition-all duration-200 ${isOpen ? '' : 'pointer-events-none'}`}
    >
      <Background src="/Modal/22_Entry_Modal_BG.png" />
      <div
        className={`relative flex h-screen items-center justify-center ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="relative">
          <ResponsiveImage
            src="/Modal/22_Entry_Modal_pic_FudeBase.png"
            alt="FudeBase"
            width={1500}
            height={850}
          />
          <div className="absolute top-[2.5vw] left-[-1.25vw]">
            <ResponsiveImage
              src="/Modal/chara/22_Modal_chara_01.png"
              alt="阿保草"
              width={800}
              height={750}
            />
          </div>
          <div className="absolute top-[14.7vw] left-[33.3vw]">
            <ResponsiveImage
              src="/Modal/icon/22_Modal_icon_01.png"
              alt="icon"
              width={750}
              height={120}
            />
            <div className="absolute left-[1.2vw] top-[6vw]">
              <ResponsiveImage
                src="/Modal/22_Entry_pic_Line.png"
                width={750}
                height={20}
                alt="line"
              />
            </div>
            <a href="#">
              <div
                className="absolute left-[37vw] top-[-2vw]"
                onClick={onClose}
              >
                <ResponsiveImage
                  src="/Modal/22_Modal_Close.png"
                  width={55}
                  height={55}
                  alt="line"
                />
              </div>
            </a>
          </div>
          <div className="absolute top-[21vw] left-[-4vw]">
            <ResponsiveImage
              src="/Modal/22_Modal_Back.png"
              alt="Back"
              width={75}
              height={75}
            />
          </div>
          <div className="absolute top-[21vw] left-[78vw]">
            <ResponsiveImage
              src="/Modal/22_Modal_Next.png"
              alt="Next"
              width={75}
              height={75}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const contestantImageRows = [
  [
    '/Entry/Frame/21_Entry_Frame_01.png',
    '/Entry/Frame/21_Entry_Frame_02.png',
    '/Entry/Frame/21_Entry_Frame_03.png',
    '/Entry/Frame/21_Entry_Frame_04.png',
    '/Entry/Frame/21_Entry_Frame_05.png',
    '/Entry/Frame/21_Entry_Frame_06.png',
    '/Entry/Frame/21_Entry_Frame_07.png',
    '/Entry/Frame/21_Entry_Frame_08.png',
    '/Entry/Frame/21_Entry_Frame_09.png',
    '/Entry/Frame/21_Entry_Frame_10.png'
  ],
  [
    '/Entry/Frame/21_Entry_Frame_11.png',
    '/Entry/Frame/21_Entry_Frame_12.png',
    '/Entry/Frame/21_Entry_Frame_13.png',
    '/Entry/Frame/21_Entry_Frame_14.png',
    '/Entry/Frame/21_Entry_Frame_15.png',
    '/Entry/Frame/21_Entry_Frame_16.png',
    '/Entry/Frame/21_Entry_Frame_17.png',
    '/Entry/Frame/21_Entry_Frame_18.png',
    '/Entry/Frame/21_Entry_Frame_19.png',
    '/Entry/Frame/21_Entry_Frame_20.png'
  ],
  [
    '/Entry/Frame/21_Entry_Frame_21.png',
    '/Entry/Frame/21_Entry_Frame_22.png',
    '/Entry/Frame/21_Entry_Frame_23.png',
    '/Entry/Frame/21_Entry_Frame_24.png',
    '/Entry/Frame/21_Entry_Frame_25.png',
    '/Entry/Frame/21_Entry_Frame_26.png',
    '/Entry/Frame/21_Entry_Frame_27.png',
    '/Entry/Frame/21_Entry_Frame_28.png',
    '/Entry/Frame/21_Entry_Frame_29.png',
    '/Entry/Frame/21_Entry_Frame_30.png'
  ],
  [
    '/Entry/Frame/21_Entry_Frame_31.png',
    '/Entry/Frame/21_Entry_Frame_32.png',
    '/Entry/Frame/21_Entry_Frame_33.png',
    '/Entry/Frame/21_Entry_Frame_34.png',
    '/Entry/Frame/21_Entry_Frame_35.png',
    '/Entry/Frame/21_Entry_Frame_36.png',
    '/Entry/Frame/21_Entry_Frame_37.png',
    '/Entry/Frame/21_Entry_Frame_38.png',
    '/Entry/Frame/21_Entry_Frame_39.png',
    '/Entry/Frame/21_Entry_Frame_40.png'
  ]
];

const Entries: NextPageWithLayout = () => {
  const { isOpen, onOpen, onClose } = useModal();

  return (
    <>
      <Background src="/Entry/21_Entry_pic_BG.png" />
      <Background src="/Entry/21_Entry_pic_vignette.png" />
      <div className="relative">
        <div className="absolute left-[2rem] top-[-11rem]">
          <Image
            alt="entry"
            src="/Entry/21_Entry_text_01.png"
            width={500}
            height={250}
          />
        </div>
        {contestantImageRows.map((row, index) => (
          <ContestantRow
            key={index}
            contestantImages={row}
            offset={index * 46}
            onModalOpen={onOpen}
          />
        ))}
        <ToggleCombiButton />
      </div>
      <ContestantModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

Entries.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Entries;
