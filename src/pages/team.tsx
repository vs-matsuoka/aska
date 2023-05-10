import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';
import Background from 'components/Background';
import Layout from 'components/Layout';
import TeamItem from 'components/TeamItem';

const Team: NextPageWithLayout = () => {
  return (
    <>
      {/* <Background src="/Top/11_Top_pic_BG.png" /> */}
      <div>
        <TeamItem imgSrc="/Team/test.jpg" name="葉月味" role="特番制作" />
        <TeamItem imgSrc="/Team/test.jpg" name="葉月味" role="特番制作" />
        <TeamItem imgSrc="/Team/test.jpg" name="葉月味" role="特番制作" />
        <TeamItem imgSrc="/Team/test.jpg" name="葉月味" role="特番制作" />
        <TeamItem imgSrc="/Team/test.jpg" name="葉月味" role="特番制作" />
        <TeamItem imgSrc="/Team/test.jpg" name="葉月味" role="特番制作" />
        yo
      </div>
    </>
  );
};

Team.getLayout = function getLayout(page: ReactElement) {
  return <Layout withOverflowHidden>{page}</Layout>;
};

export default Team;
