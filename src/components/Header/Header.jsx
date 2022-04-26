import React, { useState } from 'react';
import PropTypes from 'prop-types';
import hamburger from 'assets/svg/hamburger.svg';
import siteLogo from 'assets/svg/siteLogo.svg';
import siteLogoBig from 'assets/svg/siteLogoBig.svg';
import person from 'assets/svg/person.svg';
import search from 'assets/svg/search.svg';
import close from 'assets/svg/close.svg';
import plusIcon from 'assets/svg/plusIcon.svg';
import {
	HeaderWrapper,
	HeaderSection,
	HeaderImage,
	HeaderList,
	HeaderListItem,
} from 'components/Header/header-styled';
import PopMenu from 'components/shared/PopMenu/PopMenu';
import Search from 'components/Search/Search';

function Header({ hamburgerMenuClickHandler }) {
	const [popMenuStatus, setPopMenuStatus] = useState(false);
	const [animateHeader, setAnimateHeader] = useState(false);
	const [searchStatus, setsearchStatus] = useState(false);
	/**
	 * header menus static options.
	 */
	const options = {
		people: [{ option: 'Popular People', text: '' }],

		popMenu: [
			{ option: 'Login', text: '' },
			{ option: 'SignUp', text: '' },
		],
		movies: [
			{ option: 'Popular', text: '' },
			{ option: 'Now Playing', text: '' },
			{ option: 'Upcoming', text: '' },
		],
		tvShows: [
			{ option: 'Popular', text: '' },
			{ option: 'Airing Today', text: '' },
			{ option: 'On TV', text: '' },
		],
		more: [
			{ option: 'Discussions', text: '' },
			{ option: 'Leaderboard', text: '' },
			{ option: 'Support', text: '' },
			{ option: 'API', text: '' },
		],
	};

	/**
	 * open or close the PopMenu.
	 */
	const handlePopMenu = () => {
		setPopMenuStatus((prev) => {
			return !prev;
		});
	};

	/**
	 * open the Search
	 */
	const openSearch = () => {
		setsearchStatus(true);
	};

	/**
	 * close the Search
	 */
	const closeSearch = () => {
		setsearchStatus(false);
	};

	/**
	 * show or hide header when scrolling
	 */
	document.addEventListener('scroll', () => {
		if (window.scrollY > 64) {
			setAnimateHeader(true);
		} else {
			setAnimateHeader(false);
		}
	});
	return (
		<>
			<HeaderWrapper animateHeader={animateHeader}>
				<HeaderSection>
					<HeaderImage
						onlyMobile
						src={hamburger}
						alt='Hamburger Menu'
						onClick={hamburgerMenuClickHandler}
					/>
					<HeaderImage mainLogoBig src={siteLogoBig} alt='Site Logo' />
					<HeaderList leftList>
						<HeaderListItem>
							Movies <PopMenu options={options.movies} />
						</HeaderListItem>
						<HeaderListItem>
							TV Shows <PopMenu options={options.tvShows} />
						</HeaderListItem>
						<HeaderListItem>
							People <PopMenu options={options.people} />
						</HeaderListItem>
						<HeaderListItem>
							More <PopMenu options={options.more} />
						</HeaderListItem>
					</HeaderList>
				</HeaderSection>
				<HeaderSection onlyMobile center>
					<HeaderImage mainLogo src={siteLogo} alt='Site Logo' />
				</HeaderSection>
				<HeaderSection right>
					<HeaderImage onlyMobile src={person} alt='Person' onClick={handlePopMenu} />
					<HeaderList>
						<HeaderListItem>
							<HeaderImage src={plusIcon} alt='Plus' />
						</HeaderListItem>
						<HeaderListItem en>EN</HeaderListItem>
						<HeaderListItem>Login</HeaderListItem>
						<HeaderListItem>Join TMDB</HeaderListItem>
					</HeaderList>
					{popMenuStatus && <PopMenu handlePopMenu={handlePopMenu} options={options.popMenu} />}
					{!searchStatus && <HeaderImage search src={search} alt='Search' onClick={openSearch} />}
					{searchStatus && <HeaderImage search src={close} alt='Close' onClick={closeSearch} />}
				</HeaderSection>
			</HeaderWrapper>
			{searchStatus && <Search closeSearch={closeSearch} />}
		</>
	);
}

Header.propTypes = {
	hamburgerMenuClickHandler: PropTypes.func,
};

Header.defaultProps = {
	hamburgerMenuClickHandler: () => {},
};

export default Header;
