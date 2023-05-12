import { Story, Meta } from '@storybook/react';
import MovieType from '.';
import movies from 'const/movies';

export default {
  title: 'Movie',
  component: MovieType
} as Meta;

export const Default: Story = () => <MovieType movie={movies.genericNotices[0]} onClick={() => alert('yo')} />;
