import classNames from 'classnames';
import { useState } from 'react';
import YouTube from 'react-youtube';
import Movie from 'components/Movie';
import ResponsiveImage from 'components/ResponsiveImage';
import movies from 'const/movies';
import { Movie as MovieType } from 'const/movies';
import useModal from 'hooks/useModal';

function MovieModal({ isOpen, onClose, movie }: { isOpen: boolean; onClose: () => void; movie?: MovieType }) {
  return (
    <div className={classNames('fixed', 'inset-0', 'transition-all', 'duration-200', { ['opacity-100']: isOpen, ['opacity-0']: !isOpen, ['pointer-events-none']: !isOpen })}>
      <div className="flex h-full w-full items-center justify-center bg-black/50" onClick={onClose}>
        {movie ? (
          <YouTube
            videoId={movie.youtubeUrl.slice(17)}
            opts={{
              width: '1280',
              height: '720'
            }}
            key={movie.youtubeUrl}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

const MoviesPage = () => {
  const { isOpen, onOpen, onClose: onModalClose } = useModal();
  const [selectedMovie, setSelectedMovie] = useState<MovieType | undefined>(undefined);
  const onClose = () => {
    setSelectedMovie(undefined);
    onModalClose();
  };
  return (
    <>
      <div className="bg-[url('/Team/51_BG.jpg')] bg-cover bg-local">
        <div className="py-[13.4375vw] 4xl:py-[258px]">
          {/* 特別告知 */}
          <section>
            <h1 className="grid place-items-center">
              <ResponsiveImage src="/Movie/61_Movie_Line_01.png" alt="特別告知" width={1050} height={140} />
            </h1>
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
          </section>
          {/* コンビ告知 */}
          <section>
            <h1 className="mt-[1.25vw] grid place-items-center 4xl:mt-[24px]">
              <ResponsiveImage src="/Movie/61_Movie_Line_02.png" alt="コンビ告知" width={1050} height={140} />
            </h1>
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
          </section>
          {/* 事前番組 */}
          <section>
            <h1 className="mt-[1.25vw] grid place-items-center 4xl:mt-[24px]">
              <ResponsiveImage src="/Movie/61_Movie_Line_03.png" alt="事前番組" width={1050} height={140} />
            </h1>
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
          </section>
          {/* 最新映像は随時更新! */}
          <div className="my-[0.5208333333vw] grid place-items-center 4xl:my-[10px]">
            <ResponsiveImage src="/Movie/61_Movie_Text_01.png" alt="最新映像は随時更新!" width={800} height={140} />
          </div>
        </div>
      </div>
      <MovieModal isOpen={isOpen} onClose={onClose} movie={selectedMovie} />
    </>
  );
};

export default MoviesPage;
