import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
	SortText,
	SortWrapper,
	ExpandArrowImage,
	SortHeader,
	SortBody,
	SortSelect,
	SortOption,
	SearchButton,
	AllSectionWrapper,
} from 'components/movies/MoviesSort/movies-sort-styled';
import expandArrow from 'assets/svg/expandArrow.svg';
import LoadingSpinner from 'components/shared/LoadingSpinner/LoadingSpinner';

function MoviesSort({ isLoading, sortHandler }) {
	const [rotateArrowStatus, setRotateArrowStatus] = useState(false);
	const [selectedSort, setselectedSort] = useState('');

	/**
	 * Rotate the search box arrow when the box is clicked
	 */
	const sortBoxClickHandler = () => {
		setRotateArrowStatus((prevStatus) => !prevStatus);
	};

	/**
	 * Change the selectedSort state value whenever the selected element value changed
	 * @param   {event} event select element change event
	 */
	const selectedChanged = (event) => {
		setselectedSort(event.target.value);
	};

	/**
	 * excute the sortHandler function from props, when the search button clicked
	 */
	const SearchClickHandler = () => {
		setselectedSort('');
		sortHandler(selectedSort);
	};
	return (
		<AllSectionWrapper>
			<SortWrapper onClick={sortBoxClickHandler}>
				<SortHeader>
					<SortText>Sort</SortText>
					<ExpandArrowImage src={expandArrow} alt='expand arrow' rotateStatus={rotateArrowStatus} />
				</SortHeader>
				{rotateArrowStatus && (
					<SortBody onClick={(event) => event.stopPropagation()}>
						<SortText>Sort Results By</SortText>
						<SortSelect onChange={selectedChanged}>
							<SortOption value='popularity.desc'>Popularity Descending</SortOption>
							<SortOption value='popularity.asc'>Popularity Ascending</SortOption>
							<SortOption value='vote_average.desc'>Rating Descending</SortOption>
							<SortOption value='vote_average.asc'>Rating Ascending</SortOption>
							<SortOption value='release_date.desc'>Release Date Descending</SortOption>
							<SortOption value='release_date.asc'>Release Date Ascending</SortOption>
							<SortOption value='original_title.asc'>Title (A-Z)</SortOption>
							<SortOption value='original_title.desc'>Title (Z-A)</SortOption>
						</SortSelect>
					</SortBody>
				)}
			</SortWrapper>
			<SearchButton disabled={!selectedSort} onClick={SearchClickHandler}>
				{!isLoading && 'Search'}
				{isLoading && <LoadingSpinner />}
			</SearchButton>
		</AllSectionWrapper>
	);
}

MoviesSort.propTypes = {
	sortHandler: PropTypes.func,
	isLoading: PropTypes.bool,
};

MoviesSort.defaultProps = {
	sortHandler: () => {},
	isLoading: false,
};

export default MoviesSort;
