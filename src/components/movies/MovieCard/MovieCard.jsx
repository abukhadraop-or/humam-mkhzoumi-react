import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import RateCircle from 'components/shared/RateCircle/RateCircle';
import PopMenu from 'components/shared/PopMenu/PopMenu';
import {
	Card,
	CardImage,
	MovieTitle,
	MovieDate,
	MovieDescription,
	Wrapper,
	ThreeDotsMenu,
	CardWrapper,
} from 'components/movies/MovieCard/movie-card-styled';

function MovieCard({ movie }) {
	const [isThreeDotsClicked, setIsThreeDotsClicked] = useState(false);
	const [isLastCardOnRight, setIsLastCardOnRight] = useState(false);
	const wrapperRef = useRef();
	let imagePath = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
	/**
	 * give a default image if the image path is null
	 */
	if (movie.poster_path === null) {
		imagePath = 'https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F_400x400.jpg';
	}

	/**
	 * find an element right offset
	 * @param   {HTMLElement} el the element you want to find its right offset
	 * @return  {Number}         element right offset
	 */
	function getRightOffset(el) {
		const rect = el.getBoundingClientRect();
		return window.innerWidth - (rect.left + window.scrollX);
	}

	/**
	 * check of its last card on right and change the IsThreeDotsClicked
	 * state value to true, to open the PopUp menu.
	 */
	const threeDotsClickHandler = () => {
		if (getRightOffset(wrapperRef.current) > 300) {
			setIsLastCardOnRight(true);
		}
		setIsThreeDotsClicked(true);
	};

	/**
	 * change the IsThreeDotsClicked state value to false, to close the PopUp menu
	 */
	const handlePopMenu = () => {
		setIsThreeDotsClicked(false);
	};
	return (
		<CardWrapper
			ref={wrapperRef}
			isThreeDotsClicked={isThreeDotsClicked}
			isLastCardOnRight={isLastCardOnRight}
		>
			<PopMenu
				options={[
					{ option: 'LogIn', text: 'Want to rate or add this item to a list?' },
					{ option: 'Sign up and join the community', text: 'Not a member?' },
				]}
				handlePopMenu={handlePopMenu}
			/>
			<Card>
				{!isThreeDotsClicked && <ThreeDotsMenu onClick={threeDotsClickHandler} />}
				<Wrapper isThreeDotsClicked={isThreeDotsClicked}>
					<CardImage src={imagePath} alt={movie.title} />
				</Wrapper>
				<Wrapper isThreeDotsClicked={isThreeDotsClicked}>
					<RateCircle voteAverage={movie.vote_average} />
					<Wrapper>
						<MovieTitle>{movie.title}</MovieTitle>
					</Wrapper>
					<MovieDate>{movie.release_date}</MovieDate>
					<MovieDescription>{movie.overview}</MovieDescription>
				</Wrapper>
			</Card>
		</CardWrapper>
	);
}

MovieCard.propTypes = {
	movie: PropTypes.object,
};

MovieCard.defaultProps = {
	movie: {},
};

export default MovieCard;
