import React from 'react';
import PropTypes from 'prop-types';
import {
	SortText,
	SortWrapper,
	ExpandArrowImage,
	SortHeader,
	SortBody,
	SortSelect,
	SortOption,
} from 'components/movies/SortAndFIlter/Sort/sort.styled';
import expandArrow from 'assets/svg/expandArrow.svg';

function Sort({ sortBoxClickHandler, rotateArrowStatus, selectedChanged, name }) {
	return (
		<SortWrapper onClick={sortBoxClickHandler}>
			<SortHeader>
				<SortText>{name}</SortText>
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
	);
}

Sort.propTypes = {
	sortBoxClickHandler: PropTypes.func,
	rotateArrowStatus: PropTypes.bool,
	selectedChanged: PropTypes.func,
	name: PropTypes.string,
};

Sort.defaultProps = {
	sortBoxClickHandler: () => {},
	rotateArrowStatus: false,
	selectedChanged: () => {},
	name: 'Sort',
};

export default Sort;
