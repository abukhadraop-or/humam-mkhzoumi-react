import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import {
	SearchWrapper,
	SearchInputBox,
	SearchImg,
	InputArea,
	ResultsList,
	ResultItem,
	EmptySearchResult,
} from 'components/Search/search-styled';
import blackClose from 'assets/svg/blackClose.svg';
import blackSearchIcon from 'assets/svg/blackSearch.svg';
import axios from 'axios';

function Search({ closeSearch }) {
	const searchRef = useRef();
	const [results, setResults] = useState([]);
	const [inputValue, setinputValue] = useState('');
	const [loading, setLoading] = useState(false);
	const moviesApi = 'https://api.themoviedb.org/3/search/movie?';
	const apiKey = 'f47e18186c42be3e17197d59d54d7704';

	/**
	 * call the closing function of the Search, when click outside.
	 * @param   {event} event the click event
	 */
	const handleClickOutside = (event) => {
		if (searchRef.current && !searchRef.current.contains(event.target)) {
			document.removeEventListener('mousedown', handleClickOutside);
			closeSearch();
		}
	};
	document.addEventListener('mousedown', handleClickOutside);

	/**
	 * Get the search results from the API whenever the input value changes
	 * @param   {event} event input field onchange event
	 */
	const changeHandler = (event) => {
		setLoading(true);
		setinputValue(event.target.value);
		if (event.target.value === '') {
			setResults([]);
			return;
		}
		try {
			axios
				.get(`${moviesApi}api_key=${apiKey}&language=en-US&query=${event.target.value}`)
				.then((res) => {
					setResults(res.data.results);
					setLoading(false);
				});
		} catch (error) {
			console.error(error);
			setLoading(false);
		}
	};

	/**
	 * Reset the input field value and the search results to empty.
	 */
	const resetInput = () => {
		setinputValue('');
		setResults([]);
	};

	return (
		<SearchWrapper ref={searchRef}>
			<SearchInputBox>
				<SearchImg src={blackSearchIcon} alt='Search Icon' />
				<InputArea placeholder='Search' type='text' value={inputValue} onChange={changeHandler} />
				<SearchImg smallest src={blackClose} alt='Close Icon' onClick={resetInput} />
			</SearchInputBox>
			<ResultsList>
				{results.map((result) => {
					return (
						<ResultItem key={result.id}>
							<SearchImg small src={blackSearchIcon} alt='Search Icon' /> {result.title}
						</ResultItem>
					);
				})}
			</ResultsList>
			{results.length === 0 && inputValue && !loading && (
				<EmptySearchResult>NO RESULTS</EmptySearchResult>
			)}
		</SearchWrapper>
	);
}

Search.propTypes = {
	closeSearch: PropTypes.func,
};

Search.defaultProps = {
	closeSearch: () => {},
};
export default Search;
