import { ReactElement, useEffect } from 'react';
import { NextPageWithLayout } from './_app';
import Layout from 'components/Layout';
import ResponsiveImage from 'components/ResponsiveImage';
import TeamItem from 'components/TeamItem';
import Title from 'components/Title';
import team from 'const/team';

const Team: NextPageWithLayout = () => {
  useEffect(() => {
    // FUCK
    // window.FONTPLUS.reload();
  });
  return (
    <>
      <Title title="運営" />
      <div
        className="w-full overflow-y-scroll bg-[url('/Team/51_BG.png')] bg-cover bg-local"
        style={{
          // TODO: 5remはヘッダーの高さだが、少なくともハードコードは避けたい
          height: 'calc(100vh - 4rem)'
        }}
      >
        <div className="py-[13.4375vw] 4xl:py-[258px]">
          {/* 運営 */}
          <div className="my-[0.5208333333vw] grid place-items-center 4xl:my-[10px]">
            <ResponsiveImage className="relative" src="/Team/51_Operation_Line_01.png" alt="grad" width={1050} height={140} />
          </div>
          <div className="grid grid-cols-[repeat(5,min-content)] justify-center gap-[0.46875vw] 4xl:gap-[9px]">
            {team.unnei.map((item) => (
              <TeamItem key={item.name} member={item} />
            ))}
          </div>
          {/* 制作 */}
          <div className="my-[0.5208333333vw] grid place-items-center 4xl:my-[10px]">
            <ResponsiveImage className="relative" src="/Team/51_Operation_Line_02.png" alt="grad" width={1050} height={140} />
          </div>
          <div className="grid grid-cols-[repeat(5,min-content)] justify-center gap-[0.46875vw] 4xl:gap-[9px]">
            {team.seisaku.map((item) => (
              <TeamItem key={item.name} member={item} />
            ))}
          </div>
          {/* 立ち絵 */}
          <div className="my-[0.5208333333vw] grid place-items-center 4xl:my-[10px]">
            <ResponsiveImage className="relative" src="/Team/51_Operation_Line_03.png" alt="grad" width={1050} height={140} />
          </div>
          <div className="grid grid-cols-[repeat(5,min-content)] justify-center gap-[0.46875vw] 4xl:gap-[9px]">
            {team.tachie.map((item) => (
              <TeamItem key={item.name} member={item} />
            ))}
          </div>
          {/* 告知 */}
          <div className="my-[0.5208333333vw] grid place-items-center 4xl:my-[10px]">
            <ResponsiveImage className="relative" src="/Team/51_Operation_Line_04.png" alt="grad" width={1050} height={140} />
          </div>
          <div className="grid grid-cols-[repeat(5,min-content)] justify-center gap-[0.46875vw] 4xl:gap-[9px]">
            {team.kokuchi.map((item) => (
              <TeamItem key={item.name} member={item} />
            ))}
          </div>
          {/* 放送 */}
          <div className="my-[0.5208333333vw] grid place-items-center 4xl:my-[10px]">
            <ResponsiveImage className="relative" src="/Team/51_Operation_Line_05.png" alt="grad" width={1050} height={140} />
          </div>
          <div className="grid grid-cols-[repeat(5,min-content)] justify-center gap-[0.46875vw] 4xl:gap-[9px]">
            {team.housou.map((item) => (
              <TeamItem key={item.name} member={item} />
            ))}
          </div>
          {/* 制作メンバーは随時更新! */}
          <div className="my-[0.5208333333vw] grid place-items-center 4xl:my-[10px]">
            <ResponsiveImage src="/Team/51_Operation_Text_01.png" alt="grad" className="relative" width={800} height={140} />
          </div>
        </div>
      </div>
    </>
  );
};

Team.getLayout = function getLayout(page: ReactElement) {
  return <Layout withOverflowHidden>{page}</Layout>;
};

export default Team;
