import { ReactElement, useEffect } from 'react';
import { NextPageWithLayout } from './_app';
import Layout from 'components/Layout';
import ResponsiveImage from 'components/ResponsiveImage';
import SEO from 'components/SEO';
import TeamItem from 'components/TeamItem';
import team from 'const/team';

const Team: NextPageWithLayout = () => {
  useEffect(() => {
    // FUCK
    // window.FONTPLUS.reload();
  });
  return (
    <>
      <SEO title="運営" />
      <div
        className="w-full overflow-y-scroll bg-[url('/Team/51_BG.jpg')] bg-cover bg-local"
        style={{
          // TODO: 5remはヘッダーの高さだが、少なくともハードコードは避けたい
          height: 'calc(100vh - 4rem)'
        }}
      >
        <div className="py-[13.4375vw] 4xl:py-[258px]">
          {/* 運営 */}
          <section>
            <h1 className="my-[0.5208333333vw] grid place-items-center 4xl:my-[10px]">
              <ResponsiveImage src="/Team/51_Operation_Line_01.png" alt="運営" width={1050} height={140} />
            </h1>
            <div className="grid grid-cols-[repeat(5,min-content)] justify-center gap-[0.46875vw] 4xl:gap-[9px]">
              {team.unnei.map((item) => (
                <TeamItem key={item.name} member={item} />
              ))}
            </div>
          </section>
          {/* 制作 */}
          <section>
            <h1 className="my-[0.5208333333vw] grid place-items-center 4xl:my-[10px]">
              <ResponsiveImage src="/Team/51_Operation_Line_02.png" alt="制作" width={1050} height={140} />
            </h1>
            <div className="grid grid-cols-[repeat(5,min-content)] justify-center gap-[0.46875vw] 4xl:gap-[9px]">
              {team.seisaku.map((item) => (
                <TeamItem key={item.name} member={item} />
              ))}
            </div>
          </section>
          {/* 立ち絵 */}
          <section>
            <h1 className="my-[0.5208333333vw] grid place-items-center 4xl:my-[10px]">
              <ResponsiveImage src="/Team/51_Operation_Line_03.png" alt="立ち絵" width={1050} height={140} />
            </h1>
            <div className="grid grid-cols-[repeat(5,min-content)] justify-center gap-[0.46875vw] 4xl:gap-[9px]">
              {team.tachie.map((item) => (
                <TeamItem key={item.name} member={item} />
              ))}
            </div>
          </section>
          {/* 告知 */}
          <section>
            <h1 className="my-[0.5208333333vw] grid place-items-center 4xl:my-[10px]">
              <ResponsiveImage src="/Team/51_Operation_Line_04.png" alt="告知" width={1050} height={140} />
            </h1>
            <div className="grid grid-cols-[repeat(5,min-content)] justify-center gap-[0.46875vw] 4xl:gap-[9px]">
              {team.kokuchi.map((item) => (
                <TeamItem key={item.name} member={item} />
              ))}
            </div>
          </section>
          {/* 放送 */}
          <section>
            <h1 className="my-[0.5208333333vw] grid place-items-center 4xl:my-[10px]">
              <ResponsiveImage src="/Team/51_Operation_Line_05.png" alt="放送" width={1050} height={140} />
            </h1>
            <div className="grid grid-cols-[repeat(5,min-content)] justify-center gap-[0.46875vw] 4xl:gap-[9px]">
              {team.housou.map((item) => (
                <TeamItem key={item.name} member={item} />
              ))}
            </div>
          </section>
          {/* 制作メンバーは随時更新! */}
          <div className="my-[0.5208333333vw] grid place-items-center 4xl:my-[10px]">
            <ResponsiveImage src="/Team/51_Operation_Text_01.png" alt="制作メンバーは随時更新!" width={800} height={140} />
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
