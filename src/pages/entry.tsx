import Image from 'next/future/image';
import Layout from 'components/Layout';

type ContestantRowProps = {
  contestantImages: string[];
  offset: number;
};

function ContestantRow({ contestantImages, offset }: ContestantRowProps) {
  return (
    <div
      className="grid skew-y-[-10deg] grid-cols-[repeat(10,143px)]"
      style={{ paddingLeft: `${offset}px` }}
    >
      {contestantImages.map((image, index) => (
        <div key={image} className="relative h-[150px] w-[90px] skew-y-[10deg]">
          <div className="h-[140px] w-[122px] skew-x-[-20deg] skew-y-[-11deg] bg-transparent"></div>
          <Image
            src={image}
            className="absolute left-[-63px] top-[-57px] max-w-none hover:scale-125"
            alt="contestant"
            width={250}
            height={250}
            useMap={`#${image}`}
            style={{
              clipPath: 'polygon(34% 25%, 88% 15%, 66% 75%, 12% 85%)'
            }}
            onMouseOver={(e) => {
              console.log(image);
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default function Entry() {
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
  return (
    <Layout withVignette>
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
          />
        ))}
        <div className="absolute right-[3rem] bottom-[-8rem]">
          <Image
            alt="conbi"
            src="/Entry/21_Entry_text_02_base.png"
            width={600}
            height={200}
          />
          <Image
            alt="conbi"
            className="absolute top-0 left-0"
            src="/Entry/21_Entry_text_02.png"
            width={600}
            height={200}
          />
        </div>
      </div>
    </Layout>
  );
}
