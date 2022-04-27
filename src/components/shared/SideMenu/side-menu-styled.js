import styledComponents from 'styled-components';
import PropTypes from 'prop-types';

export const SideMenuWrapper = styledComponents.div`
position: fixed;
top: 64px;
left:  ${(props) => (props.sideMenuStatus ? '0px' : '-90%')};
height: calc(100vh - 64px);
width: 90%;
background: rgba(3, 37, 65,0.9);
-webkit-backdrop-filter: blur(20px);
backdrop-filter: blur(20px);
z-index: 9999;
padding: 20px;
box-sizing: border-box;
transition: all 0.3s ease;
`;
SideMenuWrapper.propTypes = {
	sideMenuStatus: PropTypes.bool,
};
SideMenuWrapper.defaultProps = {
	sideMenuStatus: false,
};

export const List = styledComponents.ul`
list-style: none;
color: ${(props) => (props.major ? '#fff' : '#a4b0bb')};
margin: 0px;
font-weight: 600;
font-size: ${(props) => (props.major ? '1.2em' : '0.95em')};
padding:0px;
margin-top: ${(props) => (props.major ? '0px' : '20px')};

& li:last-of-type{
    margin-top: ${(props) => (props.major ? '0px' : '20px')};
}
`;
List.propTypes = {
	major: PropTypes.bool,
};
List.defaultProps = {
	major: false,
};

export const ListItem = styledComponents.li`
margin-bottom: 10px;
cursor: pointer;
`;
