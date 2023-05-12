import { ReactElement, useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import { NextPageWithLayout } from './_app';
import Layout from 'components/Layout';
import Movie from 'components/Movie';
import ResponsiveImage from 'components/ResponsiveImage';
import TeamItem from 'components/TeamItem';
import Title from 'components/Title';
import movies from 'const/movies';
import { Movie as MovieType } from 'const/movies';
import team from 'const/team';
import useModal from 'hooks/useModal';

function MovieModal({ isOpen, onClose, movie }: { isOpen: boolean; onClose: () => void; movie: MovieType }) {
  return (
    <div className={`fixed inset-0 ${isOpen ? 'opacity-100' : 'opacity-0'} transition-all duration-200 ${isOpen ? '' : 'pointer-events-none'}`}>
      <div className="flex h-full w-full items-center justify-center bg-black/50" onClick={onClose}>
        <YouTube
          videoId={movie.youtubeUrl.slice(17)}
          opts={{
            width: '1280',
            height: '720'
          }}
        />
      </div>
    </div>
  );
}

const Movies: NextPageWithLayout = () => {
  const { isOpen, onOpen, onClose } = useModal();
  const [selectedMovie, setSelectedMovie] = useState(movies.genericNotices[0]);
  useEffect(() => {
    // FUCK
    // window.FONTPLUS.reload();
  }, []);
  return (
    <>
      <Title title="ムービー" />
      <div
        className="w-screen overflow-y-scroll bg-[url('/Team/51_BG.png')] bg-cover bg-local"
        style={{
          // TODO: 5remはヘッダーの高さだが、少なくともハードコードは避けたい
          height: 'calc(100vh - 4rem)'
        }}
      >
        <div className="py-[13.4375vw] 4xl:py-[258px]">
          {/* 特別告知 */}
          <div className="grid place-items-center">
            <ResponsiveImage className="relative" src="/Movie/61_Movie_Line_01.png" alt="grad" width={1050} height={140} />
          </div>
          <div className="mt-[0.5208333333vw] 4xl:mt-[10px]">
            <div className="mx-auto grid w-[85.15625vw] grid-cols-[repeat(4,1fr)] justify-center gap-x-[1.71875vw] gap-y-[1.0416666667vw] 4xl:w-[1635px] 4xl:gap-x-[33px] 4xl:gap-y-[20px]">
              {movies.specialNotices.map((item) => (
                <Movie
                  movie={{ ...item }}
                  key={item.index}
                  onClick={() => {
                    setSelectedMovie({ ...item });
                    onOpen();
                  }}
                  onMouseEnter={() => {
                    setSelectedMovie({ ...item });
                  }}
                />
              ))}
            </div>
          </div>
          {/* コンビ告知 */}
          <div className="mt-[1.25vw] grid place-items-center 4xl:mt-[24px]">
            <ResponsiveImage className="relative" src="/Movie/61_Movie_Line_02.png" alt="grad" width={1050} height={140} />
          </div>
          <div className="mt-[0.5208333333vw] 4xl:mt-[10px]">
            <div className="mx-auto grid w-[85.15625vw] grid-cols-[repeat(4,1fr)] justify-center gap-x-[1.71875vw] gap-y-[1.0416666667vw] 4xl:w-[1635px] 4xl:gap-x-[33px] 4xl:gap-y-[20px]">
              {movies.genericNotices.map((item) => (
                <Movie
                  movie={{ ...item }}
                  key={item.index}
                  onClick={() => {
                    setSelectedMovie({ ...item });
                    onOpen();
                  }}
                  onMouseEnter={() => {
                    setSelectedMovie({ ...item });
                  }}
                />
              ))}
            </div>
          </div>
          {/* 事前番組 */}
          <div className="mt-[1.25vw] grid place-items-center 4xl:mt-[24px]">
            <ResponsiveImage className="relative" src="/Movie/61_Movie_Line_03.png" alt="grad" width={1050} height={140} />
          </div>
          <div className="mt-[0.5208333333vw] 4xl:mt-[10px]">
            <div className="mx-auto grid w-[85.15625vw] grid-cols-[repeat(4,1fr)] justify-center gap-x-[1.71875vw] gap-y-[1.0416666667vw] 4xl:w-[1635px] 4xl:gap-x-[33px] 4xl:gap-y-[20px]">
              {movies.specialPrograms.map((item) => (
                <Movie
                  movie={{ ...item }}
                  key={item.index}
                  onClick={() => {
                    setSelectedMovie({ ...item });
                    onOpen();
                  }}
                  onMouseEnter={() => {
                    setSelectedMovie({ ...item });
                  }}
                />
              ))}
            </div>
          </div>
          {/* 制作メンバーは随時更新! */}
          <div className="my-[0.5208333333vw] grid place-items-center 4xl:my-[10px]">
            <ResponsiveImage src="/Movie/61_Movie_Text_01.png" alt="grad" className="relative" width={800} height={140} />
          </div>
        </div>
      </div>
      <MovieModal isOpen={isOpen} onClose={onClose} movie={selectedMovie} />
    </>
  );
};

Movies.getLayout = function getLayout(page: ReactElement) {
  return <Layout withOverflowHidden>{page}</Layout>;
};

export default Movies;
