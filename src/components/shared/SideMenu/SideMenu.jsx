import React from 'react';
import PropTypes from 'prop-types';
import { SideMenuWrapper, List, ListItem } from 'components/shared/SideMenu/side-menu-styled';

function SideMenu({ sideMenuStatus }) {
	return (
		<>
			<SideMenuWrapper sideMenuStatus={sideMenuStatus}>
				<List major>
					<ListItem>Movies</ListItem>
					<ListItem>TV Shows</ListItem>
					<ListItem>People</ListItem>
				</List>
				<List>
					<ListItem>Contribution Bible</ListItem>
					<ListItem>Apps</ListItem>
					<ListItem>Discussions</ListItem>
					<ListItem>Leaderboard</ListItem>
					<ListItem>Contribute</ListItem>
					<ListItem>API</ListItem>
					<ListItem>Support</ListItem>
					<ListItem>About</ListItem>
					<ListItem>Login</ListItem>
				</List>
			</SideMenuWrapper>
		</>
	);
}

SideMenu.propTypes = {
	sideMenuStatus: PropTypes.bool,
};

SideMenu.defaultProps = {
	sideMenuStatus: false,
};

export default SideMenu;
