import React from 'react';
import {
	FooterWrapper,
	FooterSection,
	FooterButton,
	FooterList,
	FooterListItem,
	FooterImg,
} from 'components/Footer/footer-styled';
import siteLogo from 'assets/svg/siteLogo.svg';

function Footer() {
	return (
		<FooterWrapper>
			<FooterSection>
				<FooterSection>
					<FooterImg src={siteLogo} alt='Site Logo' />
				</FooterSection>
				<FooterButton>JOIN THE COMMUNITY</FooterButton>
			</FooterSection>
			<FooterSection>
				<FooterList>
					<FooterListItem>THE BASICS</FooterListItem>
					<FooterListItem>About TMDB</FooterListItem>
					<FooterListItem>Contact Us</FooterListItem>
					<FooterListItem>Support Forums</FooterListItem>
					<FooterListItem>API</FooterListItem>
					<FooterListItem>System Status</FooterListItem>
				</FooterList>
			</FooterSection>
			<FooterSection>
				<FooterList>
					<FooterListItem>GET INVOLVED</FooterListItem>
					<FooterListItem>Contribution Bible</FooterListItem>
					<FooterListItem>Add New movie</FooterListItem>
					<FooterListItem>Add New TV Show</FooterListItem>
				</FooterList>
			</FooterSection>
			<FooterSection>
				<FooterList>
					<FooterListItem>COMMUNITY</FooterListItem>
					<FooterListItem>Guidelines</FooterListItem>
					<FooterListItem>Discussions</FooterListItem>
					<FooterListItem>Leaderboard</FooterListItem>
					<FooterListItem>Twitter</FooterListItem>
				</FooterList>
			</FooterSection>
			<FooterSection>
				<FooterList>
					<FooterListItem>LEGAL</FooterListItem>
					<FooterListItem>Terms of Use</FooterListItem>
					<FooterListItem>API Terms of Use</FooterListItem>
					<FooterListItem>Privacy Policy</FooterListItem>
				</FooterList>
			</FooterSection>
		</FooterWrapper>
	);
}

export default Footer;
