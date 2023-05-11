import Image from 'next/image';
import { useEffect } from 'react';
import Background from 'components/Background';
import SpMenu from 'components/SpMenu';
import SpResponsiveImage from 'components/SpResponsiveImage';
import movies, { Movie } from 'const/movies';

function movieCard() {}

export default function Movies() {
  useEffect(() => {
    // FUCK
    window.FONTPLUS.reload();
  });
  return (
    <>
      <Background src="/SP/Movie/s51_BG.png" />
      <div className="flex justify-center pt-[3.6vw]">
        <div className="relative flex h-[10vw] w-[93.3333333vw] items-center justify-center bg-gradient-to-t from-[#B99855] to-[#262426]">特別告知</div>
      </div>
      <div className="relative mx-[3.3333333vw] mt-[2vw] grid grid-cols-3 justify-items-center gap-[2vw]">
        {movies.specialNotices.map((item, index) => (
          <>
            <SpResponsiveImage
              className="relative"
              src={'https://img.youtube.com/vi/' + item.youtubeUrl.slice(17) + '/sddefault.jpg'}
              alt="aaa"
              width={222}
              height={125}
              key={index}
            />
            <div className="absolute">
              <SpResponsiveImage className="relative" src="/SP/Movie/s61_Movie_Thumbnail.png" alt="thumbnail" width={222} height={125} key={index} />
            </div>
          </>
        ))}
      </div>
      <SpMenu />
    </>
  );
}
