import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
	SearchButton,
	AllSectionWrapper,
} from 'components/movies/SortAndFIlter/sort-and-filter-styled';
import LoadingSpinner from 'components/shared/LoadingSpinner/LoadingSpinner';
import Sort from './Sort/Sort';

function SortAndFilter({ isLoading, sortHandler }) {
	const [rotateArrowStatus, setRotateArrowStatus] = useState(false);
	const [selectedSort, setselectedSort] = useState('');

	/**
	 * Rotate the sort box arrow when the box is clicked
	 */
	const sortBoxClickHandler = () => {
		setRotateArrowStatus((prevStatus) => !prevStatus);
	};

	/**
	 * Change the selectedSort state value whenever the select element value changes
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
			<Sort
				sortBoxClickHandler={sortBoxClickHandler}
				rotateArrowStatus={rotateArrowStatus}
				selectedChanged={selectedChanged}
				name='Sort'
			/>
			<Sort name='Filter' />
			<Sort name='Where To Watch' />
			<SearchButton disabled={!selectedSort} onClick={SearchClickHandler}>
				{!isLoading && 'Search'}
				{isLoading && <LoadingSpinner />}
			</SearchButton>
		</AllSectionWrapper>
	);
}

SortAndFilter.propTypes = {
	sortHandler: PropTypes.func,
	isLoading: PropTypes.bool,
};

SortAndFilter.defaultProps = {
	sortHandler: () => {},
	isLoading: false,
};

export default SortAndFilter;
