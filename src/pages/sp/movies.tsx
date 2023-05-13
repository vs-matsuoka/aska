import Image, { ImageProps } from 'next/image';
import { useEffect } from 'react';
import Background from 'components/Background';
import SEO from 'components/SEO';
import SpMenu from 'components/SpMenu';
import SpResponsiveImage from 'components/SpResponsiveImage';
import movies, { Movie } from 'const/movies';

function MovieThumbnailResponsiveImage(
  props: Omit<ImageProps, 'fill' | 'width' | 'height'> & {
    width: number;
    height: number;
  }
) {
  const { width, height, src, alt, className, ...imageProps } = props;
  const standard = 750;

  return (
    <div
      className={className}
      style={{
        width: `${(width / standard) * 100}vw`,
        height: `${(height / standard) * 100}vw`
      }}
    >
      <Image src={src} alt={alt} className="object-cover" fill {...imageProps}></Image>
    </div>
  );
}

const MovieCard = ({ item, key }: { item: Movie; key: number }) => {
  return (
    <div className="relative">
      <a href={item.youtubeUrl} target="_blank">
        <MovieThumbnailResponsiveImage
          className="relative"
          src={'https://img.youtube.com/vi/' + item.youtubeUrl.slice(17) + '/sddefault.jpg'}
          alt="thumbnail"
          width={222}
          height={125}
          key={key}
        />
        <div className="absolute top-0">
          <SpResponsiveImage className="relative" src="/SP/Movie/s61_Movie_Thumbnail.png" alt="cover" width={222} height={125} key={key} />
        </div>
      </a>
      {/* sp:mt-[10px] */}
      <div
        className="mt-[1.3333333vw] grid justify-items-center"
        style={{
          fontFamily: 'FOT-UD角ゴ_ラージ Pr6 E',
          lineHeight: '1'
        }}
      >
        {/* sp:text-[20px] */}
        <p className="text-[2.6666667vw]" data-testid="title">
          {item.title}
        </p>
      </div>
    </div>
  );
};

export default function Movies() {
  useEffect(() => {
    // FUCK
    // window.FONTPLUS.reload();
  });
  return (
    <>
      <SEO title="ムービー" />
      <Background src="/SP/Movie/s51_BG.jpg" />
      {/* sp:pt-[27px] */}
      <div
        className="flex justify-center pt-[3.6vw]"
        style={{
          fontFamily: 'FOT-UD角ゴ_ラージ Pr6 E',
          lineHeight: '1'
        }}
      >
        {/* sp:w-[75px] sp:h-[700px] sp:text-[40px] */}
        <div className="relative flex h-[10vw] w-[93.3333333vw] items-center justify-center bg-gradient-to-t from-[#CCAD70] to-[#B99855] text-[5.3333333vw]">特別告知</div>
      </div>
      {/* sp:mx-[25px] sp:mt-[15px] sp-gap[15px] sp:text-[40px] */}
      <div className="relative mx-[3.3333333vw] mt-[2vw] grid grid-cols-3 justify-items-center gap-[2vw]">
        {movies.specialNotices.map((item, index) => (
          <MovieCard item={item} key={index} />
        ))}
      </div>

      {/* sp:pt-[25px] */}
      <div
        className="flex justify-center pt-[3.3333333vw]"
        style={{
          fontFamily: 'FOT-UD角ゴ_ラージ Pr6 E',
          lineHeight: '1'
        }}
      >
        {/* sp:w-[75px] sp:h-[700px] sp:text-[40px] */}
        <div className="relative flex h-[10vw] w-[93.3333333vw] items-center justify-center bg-gradient-to-t from-[#CCAD70] to-[#B99855] text-[5.3333333vw]">コンビ告知</div>
      </div>
      {/* sp:mx-[25px] sp:mt-[15px] sp-gap[15px] sp:text-[40px] */}
      <div className="relative mx-[3.3333333vw] mt-[2vw] grid grid-cols-3 justify-items-center gap-[2vw]">
        {movies.genericNotices.map((item, index) => (
          <MovieCard item={item} key={index} />
        ))}
      </div>

      {/* sp:pt-[25px] */}
      <div
        className="flex justify-center pt-[3.3333333vw]"
        style={{
          fontFamily: 'FOT-UD角ゴ_ラージ Pr6 E',
          lineHeight: '1'
        }}
      >
        {/* sp:w-[75px] sp:h-[700px] sp:text-[40px] */}
        <div className="relative flex h-[10vw] w-[93.3333333vw] items-center justify-center bg-gradient-to-t from-[#CCAD70] to-[#B99855] text-[5.3333333vw]">事前番組</div>
      </div>
      {/* sp:mx-[25px] sp:mt-[15px] sp-gap[15px] sp:text-[40px] */}
      <div className="relative mx-[3.3333333vw] mt-[2vw] grid grid-cols-3 justify-items-center gap-[2vw]">
        {movies.specialPrograms.map((item, index) => (
          <MovieCard item={item} key={index} />
        ))}
      </div>

      <div className="mt-[16.6666667vw]">&nbsp;</div>
      <SpMenu />
    </>
  );
}
