import { render, screen } from '@testing-library/react';

import Movie from '.';
import movies from 'const/movies';

describe('<Movie />', () => {
  it('should render the heading', () => {
    const movie = movies.genericNotices[0];
    const { container } = render(
      <Movie
        movie={movie}
        onClick={() => {
          console.log('yo');
        }}
      />
    );

    expect(screen.getByTestId('title').innerHTML).toBe(movie.title);

    expect(container.firstChild).toMatchSnapshot();
  });
});
