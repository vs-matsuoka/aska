import { css } from '@emotion/react';
import Image, { ImageProps } from 'next/image';
import { useEffect, useState } from 'react';
import ResponsiveImage from 'components/ResponsiveImage';
import { Movie as MovieType } from 'const/movies';

function MovieThumbnailResponsiveImage(
  props: Omit<ImageProps, 'fill' | 'width' | 'height'> & {
    width: number;
    height: number;
  }
) {
  const { width, height, src, alt, className, ...imageProps } = props;
  const standard = 1920;

  const responsiveImage = css({
    width: `${(width / standard) * 100}vw`,
    height: `${(height / standard) * 100}vw`,
    '@media (min-width: 1920px)': {
      width: `${width}px`,
      height: `${height}px`
    }
  });

  return (
    <div className={className} css={responsiveImage}>
      <Image src={src} alt={alt} className="object-cover" fill {...imageProps}></Image>
    </div>
  );
}

const Movie = ({ movie, onClick, onMouseEnter }: { movie: MovieType; onClick: () => void; onMouseEnter?: () => void }) => (
  <div>
    <a
      href={movie.youtubeUrl}
      target="_blank"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      onMouseEnter={(e) => {
        onMouseEnter?.();
      }}
    >
      <div className="relative h-[11.25vw] w-[20vw] 4xl:h-[216px] 4xl:w-[384px]">
        <MovieThumbnailResponsiveImage
          className="relative"
          src={movie.thumbnail ? movie.thumbnail : 'https://img.youtube.com/vi/' + movie.youtubeUrl.slice(17) + '/sddefault.jpg'}
          alt="thumbnail"
          width={384}
          height={216}
        />
        <div className="absolute top-0">
          <ResponsiveImage src="/Movie/61_Movie_Thumbnail.png" alt="thumbnail" className="relative" width={384} height={216} />
        </div>
      </div>
    </a>
    <h1
      className="mt-[0.2083333333vw] text-center text-[1.71875vw] 4xl:mt-[4px] 4xl:text-[33px]"
      style={{
        fontFamily: 'FOT-UD角ゴ_ラージ Pr6 E',
        lineHeight: '1'
      }}
      data-testid="title"
    >
      {movie.title}
    </h1>
  </div>
);

export default Movie;
