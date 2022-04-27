import React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import SideMenu from 'components/shared/SideMenu/SideMenu';
import MoviesList from 'components/movies/MoviesList/MoviesList';
import { PageWrapper, PageName, Wrapper } from 'pages/Movies/movies-styled';
import SortAndFIlter from 'components/movies/SortAndFIlter/SortAndFilter';

function Movies({ sideMenuStatus }) {
	const [movies, setMovies] = useState([]);
	const [sortingBy, setSortingBy] = useState('popularity.desc');
	const [isNewSort, setIsNewSort] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [pageNumber, setPageNumber] = useState(1);
	const [loadMoreStatus, setLoadMoreStatus] = useState(false);
	/**
	 * these links should be in .env file but i kept them here so you can see them.
	 */
	const moviesApi = 'https://api.themoviedb.org/3/discover/movie?';
	const apiKey = 'f47e18186c42be3e17197d59d54d7704';

	/**
	 * Get movies data from API
	 */
	useEffect(() => {
		try {
			axios
				.get(`${moviesApi}api_key=${apiKey}&sort_by=${sortingBy}&language=en-US&page=${pageNumber}`)
				.then((res) => {
					setMovies((prev) => {
						if (isNewSort) {
							setIsLoading(false);
							setIsNewSort(false);
							return [...res.data.results];
						}
						return [...prev, ...res.data.results];
					});
				});
		} catch (error) {
			console.error(error);
		}
	}, [sortingBy, pageNumber]);

	/**
	 * Prevent doing the pagination several times at once
	 * @param   {function} func the function you want to excute
	 * @param   {number} delay  the delay value which we want to prevent function calling dure
	 * @return  {function}      returns a function after the delay time finish
	 */
	const debounce = function (func, delay) {
		let timer;
		return function () {
			const context = this;
			const args = arguments;
			clearTimeout(timer);
			timer = setTimeout(() => {
				func.apply(context, args);
			}, delay);
		};
	};

	/**
	 * Change the page number state
	 */
	const doPagination = debounce(() => {
		if (
			window.innerHeight + window.pageYOffset >= document.body.scrollHeight - 800 &&
			loadMoreStatus
		) {
			document.removeEventListener('scroll', doPagination);
			setPageNumber((prev) => {
				return prev + 1;
			});
		}
	}, 100);
	document.addEventListener('scroll', doPagination);

	/**
	 * Change the (isNewSort, sortingBy, pageNumber ) state values,
	 * so the use effect could run and fetch the new data.
	 * @param   {string} sortOrder the order of the sort
	 */
	const sortHandler = (sortOrder) => {
		setIsLoading(true);
		setIsNewSort(true);
		setSortingBy(sortOrder);
		setPageNumber(1);
	};

	/**
	 * change the loadMoreStatus state value so the use effect could fetch more data.
	 */
	const loadMoreClickHandle = () => {
		if (!loadMoreStatus) {
			setLoadMoreStatus(true);
			setPageNumber((prev) => {
				return prev + 1;
			});
		}
	};
	return (
		<>
			<SideMenu sideMenuStatus={sideMenuStatus} />
			<PageWrapper>
				<Wrapper>
					<PageName>Popular Movies</PageName>
					<SortAndFIlter isLoading={isLoading} sortHandler={sortHandler} />
				</Wrapper>
				<MoviesList loadMoreHandle={loadMoreClickHandle} movies={movies} />
			</PageWrapper>
		</>
	);
}

Movies.propTypes = {
	sideMenuStatus: PropTypes.bool,
};
Movies.defaultProps = {
	sideMenuStatus: false,
};

export default Movies;
