import styledComponents from 'styled-components';
import PropTypes from 'prop-types';

export const HeaderWrapper = styledComponents.div`
background-color: #032541;
min-height: 64px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 19px;
position: fixed;
z-index: 3;
width: calc(100% - 38px);
top: ${(props) => (props.animateHeader ? '-66px' : '0px')};
transition: all 0.3s ease;
& i{
    color: white;
    font-size: 12px;
}

@media only screen and (min-width: 850px) {
	padding: 0 40px;
	gap: 20px;
	width: calc(100% - 80px);
  }
`;
HeaderWrapper.propTypes = {
	animateHeader: PropTypes.bool,
};
HeaderWrapper.defaultProps = {
	animateHeader: false,
};

export const HeaderSection = styledComponents.div`
width: 25%;
display: flex;
gap: 16px;
position: relative;
justify-content: ${(props) => (props.right ? 'flex-end' : props.center ? 'center' : 'flex-start')};

@media only screen and (min-width: 850px) {
	display: ${(props) => (props.onlyMobile ? 'none' : '')};
  }
`;
HeaderSection.propTypes = {
	right: PropTypes.bool,
	center: PropTypes.bool,
	onlyMobile: PropTypes.bool,
};
HeaderSection.defaultProps = {
	right: false,
	center: false,
	onlyMobile: false,
};

export const HeaderImage = styledComponents.img`
width: ${(props) => (props.mainLogo ? '55px' : '22px')};
cursor: pointer;
display: ${(props) => (props.mainLogoBig ? 'none' : '')};

@media only screen and (min-width: 850px) {
	display: ${(props) => (props.onlyMobile ? 'none' : 'inline-block')};
	width: ${(props) => (props.mainLogoBig ? '154px' : props.search ? '30px' : '')};
  }
`;
HeaderImage.propTypes = {
	mainLogo: PropTypes.bool,
	onlyMobile: PropTypes.bool,
	mainLogoBig: PropTypes.bool,
	search: PropTypes.bool,
};
HeaderImage.defaultProps = {
	mainLogo: false,
	onlyMobile: false,
	mainLogoBig: false,
	search: false,
};

export const HeaderList = styledComponents.ul`
display: none;

@media only screen and (min-width: 850px) {
	display: flex;
	gap: 30px;
    padding: 0;
    list-style: none;
    margin: 10px;
	
	& li{
		padding:${(props) => (props.leftList ? '9px 0px' : '')}
	};
  }
`;

export const HeaderListItem = styledComponents.li`
display: none;
@media only screen and (min-width: 850px) {
	position:relative;
	display: inline-block;
	z-index: 2;
	color: white;
	font-weight: 600;
	white-space: nowrap;
	cursor: pointer;
	border: ${(props) => (props.en ? '1px white solid' : '')};
    padding: ${(props) => (props.en ? '4px 6px 0px 4px' : '')};
    border-radius: ${(props) => (props.en ? '3px' : '')};
    font-size: ${(props) => (props.en ? '0.8em' : '1em')};

	&>ul{
		display:none;
	}

	&:hover{
		background-color: ${(props) => (props.en ? 'white' : '')};
		color: ${(props) => (props.en ? '#032541' : '')};
	}

	&:hover ul{
		display:flex;
		top: 35px;
		left: -20px;
		padding: 4px 0;
	}
	
	&:hover ul:before{
		display:none;
	}
	&:hover ul li{
		width: calc(100% - 15px);
		border:none;
		padding-left:15px;
		font-size: 0.9em;
		color: black;
	}
	&:hover ul li:hover{
		background-color: rgb(236 236 236);
	}
  }
`;

HeaderSection.propTypes = {
	en: PropTypes.bool,
};
HeaderSection.defaultProps = {
	en: false,
};
