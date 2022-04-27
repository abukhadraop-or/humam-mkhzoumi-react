import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from 'components/movies/MovieCard/MovieCard';
import { MoviesWrapper, LoadMoreButton } from 'components/movies/MoviesList/movies-list-styled';

function MoviesList({ movies, loadMoreHandle }) {
	return (
		<MoviesWrapper moviesAndButton>
			<MoviesWrapper>
				{movies.map((movie) => {
					return <MovieCard key={movie.id} movie={movie} />;
				})}
			</MoviesWrapper>
			<LoadMoreButton onClick={loadMoreHandle}>Load More</LoadMoreButton>
		</MoviesWrapper>
	);
}

MoviesList.propTypes = {
	movies: PropTypes.array,
	loadMoreHandle: PropTypes.func,
};

MoviesList.defaultProps = {
	movies: [],
	loadMoreHandle: () => {},
};

export default MoviesList;
